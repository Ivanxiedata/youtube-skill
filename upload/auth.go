package upload

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"net"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"sync"
	"time"

	"golang.org/x/oauth2"
)

// The only access the tool asks for: upload videos, and read the channel's name / manage its videos.
var scopes = []string{
	"https://www.googleapis.com/auth/youtube.upload",
	"https://www.googleapis.com/auth/youtube.force-ssl",
}

// signIn returns an HTTP client that acts as the owner. It reuses the saved token,
// or runs the browser sign-in when there is none (or o.Login asks for a new one).
func signIn(ctx context.Context, o Options) (*http.Client, error) {
	secretPath := filepath.Join(o.ConfigDir, "client_secret.json")
	raw, err := os.ReadFile(secretPath)
	if errors.Is(err, fs.ErrNotExist) {
		return nil, fmt.Errorf("no OAuth client at %s: follow \"Owner setup\" in docs/specs/upload.md, save the downloaded JSON there and chmod 600 it", secretPath)
	}
	if err != nil {
		return nil, err
	}
	var cs struct {
		Installed struct {
			ClientID     string `json:"client_id"`
			ClientSecret string `json:"client_secret"`
			AuthURI      string `json:"auth_uri"`
			TokenURI     string `json:"token_uri"`
		} `json:"installed"`
	}
	if err := json.Unmarshal(raw, &cs); err != nil || cs.Installed.ClientID == "" {
		return nil, fmt.Errorf("%s is not a \"Desktop app\" OAuth client file (no \"installed\" section)", secretPath)
	}
	conf := &oauth2.Config{
		ClientID:     cs.Installed.ClientID,
		ClientSecret: cs.Installed.ClientSecret,
		Scopes:       scopes,
		Endpoint:     oauth2.Endpoint{AuthURL: cs.Installed.AuthURI, TokenURL: cs.Installed.TokenURI},
	}

	tokPath := filepath.Join(o.ConfigDir, "token.json")
	var tok *oauth2.Token
	if !o.Login {
		if raw, err := os.ReadFile(tokPath); err == nil {
			tok = new(oauth2.Token)
			if json.Unmarshal(raw, tok) != nil || (tok.AccessToken == "" && tok.RefreshToken == "") {
				tok = nil
			}
		}
	}
	if tok == nil {
		if tok, err = browserLogin(ctx, conf, o); err != nil {
			return nil, err
		}
		if err := saveToken(tokPath, tok); err != nil {
			return nil, err
		}
	}
	return oauth2.NewClient(ctx, &savingSource{src: conf.TokenSource(ctx, tok), path: tokPath, last: tok.AccessToken}), nil
}

// browserLogin is the installed-app flow: a one-shot listener on 127.0.0.1 receives the code,
// and PKCE (S256) binds that code to this process.
func browserLogin(ctx context.Context, conf *oauth2.Config, o Options) (*oauth2.Token, error) {
	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return nil, err
	}
	c := *conf
	c.RedirectURL = "http://" + ln.Addr().String()
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		return nil, err
	}
	state, verifier := hex.EncodeToString(b), oauth2.GenerateVerifier()

	type result struct {
		code string
		err  error
	}
	done := make(chan result, 1)
	var once sync.Once
	srv := &http.Server{ReadHeaderTimeout: 10 * time.Second, Handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		q := r.URL.Query()
		if r.URL.Path != "/" || (q.Get("code") == "" && q.Get("error") == "") {
			http.NotFound(w, r) // favicon and the like
			return
		}
		res := result{code: q.Get("code")}
		switch {
		case q.Get("state") != state:
			res = result{err: errors.New("sign-in reply did not match this request (state mismatch); try again")}
		case q.Get("error") != "":
			res = result{err: fmt.Errorf("sign-in was refused: %s", q.Get("error"))}
		}
		if res.err != nil {
			http.Error(w, res.err.Error(), http.StatusBadRequest)
		} else {
			fmt.Fprintln(w, "Signed in. You can close this tab and go back to the terminal.")
		}
		once.Do(func() { done <- res })
	})}
	go srv.Serve(ln)
	defer srv.Close()

	u := c.AuthCodeURL(state, oauth2.AccessTypeOffline, oauth2.S256ChallengeOption(verifier))
	fmt.Fprintf(o.Out, "Sign in to YouTube in your browser. If it doesn't open, visit:\n%s\n", u)
	_ = o.OpenBrowser(u) // the URL is printed, so a failed launch is not fatal
	select {
	case r := <-done:
		if r.err != nil {
			return nil, r.err
		}
		return c.Exchange(ctx, r.code, oauth2.VerifierOption(verifier))
	case <-ctx.Done():
		return nil, ctx.Err()
	case <-time.After(5 * time.Minute):
		return nil, errors.New("no sign-in within 5 minutes; run the command again")
	}
}

func saveToken(path string, tok *oauth2.Token) error {
	if err := os.MkdirAll(filepath.Dir(path), 0o700); err != nil {
		return err
	}
	raw, err := json.Marshal(tok)
	if err != nil {
		return err
	}
	if err := os.WriteFile(path, raw, 0o600); err != nil {
		return err
	}
	return os.Chmod(path, 0o600) // WriteFile keeps the mode of a file that already existed
}

// savingSource writes the token back whenever it is refreshed, so the next run doesn't refresh again.
type savingSource struct {
	src  oauth2.TokenSource
	path string
	last string
}

func (s *savingSource) Token() (*oauth2.Token, error) {
	t, err := s.src.Token()
	if err != nil {
		return nil, fmt.Errorf("the saved sign-in no longer works (%w); run again with --login", err)
	}
	if t.AccessToken != s.last {
		s.last = t.AccessToken
		_ = saveToken(s.path, t) // not fatal: the token in hand still works for this run
	}
	return t, nil
}

func openBrowser(url string) error {
	switch runtime.GOOS {
	case "darwin":
		return exec.Command("open", url).Start()
	case "windows":
		return exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	}
	return exec.Command("xdg-open", url).Start()
}
