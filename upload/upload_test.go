package upload

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"io"
	"mime"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// fake stands in for Google's OAuth token endpoint and the YouTube Data API. Nothing here touches the network.
type fake struct {
	srv        *httptest.Server
	authQuery  url.Values // the sign-in URL the "browser" was sent to
	tokenForm  url.Values // what the token endpoint received
	inserts    int
	gotMeta    map[string]map[string]any
	gotBytes   int64
	failUpload bool
	thumbFor   string // video id the thumbnail was set on
	thumbBytes int64
	failThumb  bool
	capMeta    map[string]map[string]any
	capText    string
}

func newFake(t *testing.T) *fake {
	f := &fake{}
	mux := http.NewServeMux()
	mux.HandleFunc("POST /token", func(w http.ResponseWriter, r *http.Request) {
		_ = r.ParseForm()
		f.tokenForm = r.PostForm
		w.Header().Set("Content-Type", "application/json")
		io.WriteString(w, `{"access_token":"at","refresh_token":"rt","token_type":"Bearer","expires_in":3600}`)
	})
	mux.HandleFunc("GET /youtube/v3/channels", func(w http.ResponseWriter, r *http.Request) {
		if r.Header.Get("Authorization") != "Bearer at" {
			http.Error(w, `{"error":{"message":"no token"}}`, http.StatusUnauthorized)
			return
		}
		io.WriteString(w, `{"items":[{"snippet":{"title":"Test Channel","customUrl":"@test-handle"}}]}`)
	})
	mux.HandleFunc("POST /upload/youtube/v3/videos", func(w http.ResponseWriter, r *http.Request) {
		f.inserts++
		_ = json.NewDecoder(r.Body).Decode(&f.gotMeta)
		w.Header().Set("Location", f.srv.URL+"/session/1")
	})
	mux.HandleFunc("PUT /session/1", func(w http.ResponseWriter, r *http.Request) {
		f.gotBytes, _ = io.Copy(io.Discard, r.Body)
		if f.failUpload {
			http.Error(w, `{"error":{"message":"backend error","errors":[{"reason":"backendError"}]}}`, http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(map[string]any{"id": "vid123", "status": map[string]any{"privacyStatus": f.gotMeta["status"]["privacyStatus"]}})
	})
	mux.HandleFunc("POST /upload/youtube/v3/thumbnails/set", func(w http.ResponseWriter, r *http.Request) {
		if f.failThumb {
			http.Error(w, `{"error":{"message":"The authenticated user doesn't have permissions to upload and set custom video thumbnails.","errors":[{"reason":"forbidden"}]}}`, http.StatusForbidden)
			return
		}
		f.thumbFor = r.URL.Query().Get("videoId")
		f.thumbBytes, _ = io.Copy(io.Discard, r.Body)
		io.WriteString(w, `{}`)
	})
	mux.HandleFunc("POST /upload/youtube/v3/captions", func(w http.ResponseWriter, r *http.Request) {
		_, params, _ := mime.ParseMediaType(r.Header.Get("Content-Type"))
		mr := multipart.NewReader(r.Body, params["boundary"])
		if part, err := mr.NextPart(); err == nil {
			_ = json.NewDecoder(part).Decode(&f.capMeta)
		}
		if part, err := mr.NextPart(); err == nil {
			raw, _ := io.ReadAll(part)
			f.capText = string(raw)
		}
		io.WriteString(w, `{}`)
	})
	f.srv = httptest.NewServer(mux)
	t.Cleanup(f.srv.Close)
	return f
}

const videoBytes = "not really an mp4"

// setup makes an episode folder and a config folder with an OAuth client; signedIn also saves a valid token.
func setup(t *testing.T, signedIn bool) (dir string, f *fake, o Options, out *bytes.Buffer) {
	f = newFake(t)
	dir, cfg := t.TempDir(), t.TempDir()
	write := func(path, s string) {
		if err := os.WriteFile(path, []byte(s), 0o600); err != nil {
			t.Fatal(err)
		}
	}
	write(filepath.Join(dir, videoFile), videoBytes)
	write(filepath.Join(dir, metaFile), `{"title":"My video","description":"About it","tags":["ai"]}`)
	write(filepath.Join(cfg, "client_secret.json"), `{"installed":{"client_id":"cid","client_secret":"cs","auth_uri":"`+f.srv.URL+`/auth","token_uri":"`+f.srv.URL+`/token"}}`)
	if signedIn {
		write(filepath.Join(cfg, "token.json"), `{"access_token":"at","token_type":"Bearer","refresh_token":"rt","expiry":"2099-01-01T00:00:00Z"}`)
	}
	out = &bytes.Buffer{}
	o = Options{ConfigDir: cfg, Out: out, apiBase: f.srv.URL, OpenBrowser: func(u string) error {
		// the "browser": the owner approves, and Google redirects back to the loopback listener
		pu, _ := url.Parse(u)
		f.authQuery = pu.Query()
		go func() {
			resp, err := http.Get(f.authQuery.Get("redirect_uri") + "?code=c1&state=" + f.authQuery.Get("state"))
			if err == nil {
				resp.Body.Close()
			}
		}()
		return nil
	}}
	return dir, f, o, out
}

func TestRunUploadsToFakeAPI(t *testing.T) {
	dir, f, o, _ := setup(t, true)
	o.Confirm = true
	p, err := Run(context.Background(), dir, o)
	if err != nil {
		t.Fatal(err)
	}
	if p.VideoID != "vid123" || p.URL != "https://youtu.be/vid123" || p.Privacy != "private" {
		t.Fatalf("published = %+v", p)
	}
	if f.gotBytes != int64(len(videoBytes)) {
		t.Fatalf("fake got %d bytes, want %d", f.gotBytes, len(videoBytes))
	}
	if s := f.gotMeta["snippet"]; s["title"] != "My video" || s["categoryId"] != "28" {
		t.Fatalf("snippet = %v", s)
	}
}

func TestDryRunReportsAndUploadsNothing(t *testing.T) {
	dir, f, o, out := setup(t, true)
	_, err := Run(context.Background(), dir, o)
	if !errors.Is(err, ErrNotConfirmed) {
		t.Fatalf("err = %v, want ErrNotConfirmed", err)
	}
	for _, want := range []string{"Test Channel (@test-handle)", "My video", "private", "MB"} {
		if !strings.Contains(out.String(), want) {
			t.Errorf("report lacks %q:\n%s", want, out)
		}
	}
	if _, err := os.Stat(filepath.Join(dir, publishedFile)); f.inserts != 0 || err == nil {
		t.Fatalf("dry run uploaded: inserts=%d, published.json exists=%v", f.inserts, err == nil)
	}
}

func TestPrivacyDefaultsToPrivate(t *testing.T) {
	dir, f, o, _ := setup(t, true)
	o.Confirm, o.Again = true, true
	if _, err := Run(context.Background(), dir, o); err != nil || f.gotMeta["status"]["privacyStatus"] != "private" {
		t.Fatalf("default: err=%v status=%v", err, f.gotMeta["status"])
	}
	o.Privacy = "unlisted"
	if _, err := Run(context.Background(), dir, o); err != nil || f.gotMeta["status"]["privacyStatus"] != "unlisted" {
		t.Fatalf("unlisted: err=%v status=%v", err, f.gotMeta["status"])
	}
	o.Privacy = "secret"
	if _, err := Run(context.Background(), dir, o); err == nil || f.inserts != 2 {
		t.Fatalf("bad privacy: err=%v inserts=%d", err, f.inserts)
	}
}

func TestFirstRunSignsInAndSavesToken(t *testing.T) {
	dir, f, o, _ := setup(t, false)
	if _, err := Run(context.Background(), dir, o); !errors.Is(err, ErrNotConfirmed) {
		t.Fatal(err)
	}
	q := f.authQuery
	if q.Get("code_challenge") == "" || q.Get("code_challenge_method") != "S256" || !strings.HasPrefix(q.Get("redirect_uri"), "http://127.0.0.1:") || q.Get("access_type") != "offline" {
		t.Fatalf("sign-in URL is not loopback + PKCE: %v", q)
	}
	if f.tokenForm.Get("code") != "c1" || f.tokenForm.Get("code_verifier") == "" {
		t.Fatalf("token exchange lacks the code or the PKCE verifier: %v", f.tokenForm)
	}
	st, err := os.Stat(filepath.Join(o.ConfigDir, "token.json"))
	if err != nil || st.Mode().Perm() != 0o600 {
		t.Fatalf("token.json: err=%v mode=%v, want 0600", err, st.Mode().Perm())
	}
}

func TestRequestsOnlyUploadScopes(t *testing.T) {
	dir, f, o, _ := setup(t, false)
	_, _ = Run(context.Background(), dir, o)
	want := "https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.force-ssl"
	if got := f.authQuery.Get("scope"); got != want {
		t.Fatalf("scope = %q, want %q", got, want)
	}
}

func TestMissingClientSecretPointsToSetup(t *testing.T) {
	dir, _, o, _ := setup(t, true)
	secret := filepath.Join(o.ConfigDir, "client_secret.json")
	os.Remove(secret)
	_, err := Run(context.Background(), dir, o)
	if err == nil || !strings.Contains(err.Error(), secret) || !strings.Contains(err.Error(), "Owner setup") {
		t.Fatalf("err = %v, want the path and a pointer to Owner setup", err)
	}
}

func TestRefusesPublishedEpisodeWithoutAgain(t *testing.T) {
	dir, f, o, _ := setup(t, true)
	o.Confirm = true
	os.WriteFile(filepath.Join(dir, publishedFile), []byte("{}"), 0o644)
	if _, err := Run(context.Background(), dir, o); err == nil || !strings.Contains(err.Error(), "--again") || f.inserts != 0 {
		t.Fatalf("err=%v inserts=%d, want a refusal naming --again", err, f.inserts)
	}
	o.Again = true
	if _, err := Run(context.Background(), dir, o); err != nil || f.inserts != 1 {
		t.Fatalf("--again: err=%v inserts=%d", err, f.inserts)
	}
}

func TestWritesPublishedOnlyAfterUpload(t *testing.T) {
	dir, f, o, _ := setup(t, true)
	o.Confirm = true
	f.failUpload = true
	if _, err := Run(context.Background(), dir, o); err == nil || !strings.Contains(err.Error(), "backend error") {
		t.Fatalf("err = %v, want the API's message", err)
	}
	if _, err := os.Stat(filepath.Join(dir, publishedFile)); err == nil {
		t.Fatal("published.json written although the upload failed")
	}
	f.failUpload = false
	if _, err := Run(context.Background(), dir, o); err != nil {
		t.Fatal(err)
	}
	var p Published
	raw, _ := os.ReadFile(filepath.Join(dir, publishedFile))
	if json.Unmarshal(raw, &p) != nil || p.VideoID != "vid123" || p.UploadedAt.IsZero() {
		t.Fatalf("published.json = %s", raw)
	}
}

func TestSendsThumbnailAndCaptionsAfterUpload(t *testing.T) {
	dir, f, o, out := setup(t, true)
	o.Confirm = true
	os.WriteFile(filepath.Join(dir, thumbFile), []byte("png bytes"), 0o644)
	os.WriteFile(filepath.Join(dir, captionsFile), []byte("1\n00:00:00,000 --> 00:00:02,000\nHello.\n"), 0o644)
	if _, err := Run(context.Background(), dir, o); err != nil {
		t.Fatal(err)
	}
	if f.thumbFor != "vid123" || f.thumbBytes != int64(len("png bytes")) {
		t.Fatalf("thumbnail: videoId=%q bytes=%d", f.thumbFor, f.thumbBytes)
	}
	if sn := f.capMeta["snippet"]; sn["videoId"] != "vid123" || sn["language"] != "en" || !strings.Contains(f.capText, "Hello.") {
		t.Fatalf("captions: snippet=%v text=%q", sn, f.capText)
	}
	if !strings.Contains(out.String(), "thumbnail uploaded") || !strings.Contains(out.String(), "captions uploaded") {
		t.Fatalf("report:\n%s", out)
	}
}

func TestThumbnailFailureIsReportedNotFatal(t *testing.T) {
	dir, f, o, out := setup(t, true)
	o.Confirm = true
	f.failThumb = true
	os.WriteFile(filepath.Join(dir, thumbFile), []byte("png bytes"), 0o644)
	p, err := Run(context.Background(), dir, o)
	if err != nil || p.VideoID != "vid123" {
		t.Fatalf("err=%v published=%+v, want the upload to succeed", err, p)
	}
	if _, err := os.Stat(filepath.Join(dir, publishedFile)); err != nil {
		t.Fatal("published.json missing although the video uploaded")
	}
	if !strings.Contains(out.String(), "thumbnail NOT uploaded") || !strings.Contains(out.String(), "youtube.com/verify") {
		t.Fatalf("report lacks the thumbnail failure and its cause:\n%s", out)
	}
}

func TestThumbnailOnlySetsItOnThePublishedVideo(t *testing.T) {
	dir, f, o, out := setup(t, true)
	o.Thumbnail = true
	if _, err := Run(context.Background(), dir, o); err == nil {
		t.Fatal("want an error when nothing was uploaded yet")
	}
	os.WriteFile(filepath.Join(dir, publishedFile), []byte(`{"video_id":"old42","url":"https://youtu.be/old42"}`), 0o644)
	os.WriteFile(filepath.Join(dir, thumbFile), []byte("png bytes"), 0o644)
	if _, err := Run(context.Background(), dir, o); err != nil {
		t.Fatal(err)
	}
	if f.thumbFor != "old42" || f.inserts != 0 || !strings.Contains(out.String(), "thumbnail set on https://youtu.be/old42") {
		t.Fatalf("thumbFor=%q inserts=%d report=%q, want the thumbnail on old42 and no new upload", f.thumbFor, f.inserts, out)
	}
}

func TestAngleBracketsAreReplaced(t *testing.T) {
	p := filepath.Join(t.TempDir(), metaFile)
	if err := os.WriteFile(p, []byte(`{"title":"a <b>","description":"Settings > Artifacts"}`), 0o600); err != nil {
		t.Fatal(err)
	}
	m, err := readMeta(p)
	if err != nil {
		t.Fatal(err)
	}
	if m.Title != "a ‹b›" || m.Description != "Settings › Artifacts" {
		t.Fatalf("got %q / %q", m.Title, m.Description)
	}
}
