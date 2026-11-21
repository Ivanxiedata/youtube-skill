package upload

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"time"
)

// File names inside an episode folder. They move to shared/brief when it lands.
const (
	videoFile     = "video.mp4"
	metaFile      = "upload.json"
	publishedFile = "published.json"
	thumbFile     = "thumbnail.png" // optional
	captionsFile  = "captions.srt"  // optional
)

// Options controls Run. The zero value is a dry run with privacy "private".
type Options struct {
	Confirm     bool                   // upload for real; without it Run only reports what it would upload
	Privacy     string                 // private (default), unlisted or public
	Again       bool                   // upload even though published.json exists
	Login       bool                   // sign in again even if a token is saved
	ConfigDir   string                 // holds client_secret.json and token.json; default ~/.config/youtube-skill
	Out         io.Writer              // the report and sign-in prompt; default os.Stdout
	OpenBrowser func(url string) error // default: the system browser

	apiBase string // tests point this at a fake API
}

// Published is what Run records in published.json after a successful upload.
type Published struct {
	VideoID    string    `json:"video_id"`
	URL        string    `json:"url"`
	Privacy    string    `json:"privacy"`
	UploadedAt time.Time `json:"uploaded_at"`
}

// ErrNotConfirmed is returned by a dry run: everything was checked, nothing was uploaded.
var ErrNotConfirmed = errors.New("dry run, nothing uploaded: rerun with --confirm to upload")

type meta struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	CategoryID  string   `json:"category_id"`
	MadeForKids bool     `json:"made_for_kids"`
}

// Run uploads the episode in dir to the signed-in account's YouTube channel.
// Without o.Confirm it signs in, prints what it would upload and returns ErrNotConfirmed.
func Run(ctx context.Context, dir string, o Options) (Published, error) {
	if o.Privacy == "" {
		o.Privacy = "private"
	}
	if o.Privacy != "private" && o.Privacy != "unlisted" && o.Privacy != "public" {
		return Published{}, fmt.Errorf("privacy %q: want private, unlisted or public", o.Privacy)
	}
	if o.Out == nil {
		o.Out = os.Stdout
	}
	if o.OpenBrowser == nil {
		o.OpenBrowser = openBrowser
	}
	if o.apiBase == "" {
		o.apiBase = "https://www.googleapis.com"
	}
	if o.ConfigDir == "" {
		home, err := os.UserHomeDir()
		if err != nil {
			return Published{}, err
		}
		o.ConfigDir = filepath.Join(home, ".config", "youtube-skill")
	}

	m, err := readMeta(filepath.Join(dir, metaFile))
	if err != nil {
		return Published{}, err
	}
	video := filepath.Join(dir, videoFile)
	st, err := os.Stat(video)
	if err != nil {
		return Published{}, fmt.Errorf("no rendered video: %w", err)
	}
	pubPath := filepath.Join(dir, publishedFile)
	if _, err := os.Stat(pubPath); err == nil && !o.Again {
		return Published{}, fmt.Errorf("%s exists: this episode is already uploaded; pass --again to upload it a second time", pubPath)
	}

	client, err := signIn(ctx, o)
	if err != nil {
		return Published{}, err
	}
	channel, err := channelTitle(ctx, client, o.apiBase)
	if err != nil {
		return Published{}, err
	}
	fmt.Fprintf(o.Out, "channel: %s\ntitle:   %s\nprivacy: %s\nfile:    %s (%.1f MB)\n", channel, m.Title, o.Privacy, video, float64(st.Size())/1e6)
	extras := []struct {
		what, path string
		send       func(path, id string) error
	}{
		{"thumbnail", filepath.Join(dir, thumbFile), func(path, id string) error { return setThumbnail(ctx, client, o.apiBase, id, path) }},
		{"captions", filepath.Join(dir, captionsFile), func(path, id string) error { return insertCaptions(ctx, client, o.apiBase, id, path) }},
	}
	for _, e := range extras {
		if _, err := os.Stat(e.path); err == nil {
			fmt.Fprintf(o.Out, "%s: %s\n", e.what, e.path)
		} else {
			fmt.Fprintf(o.Out, "%s: none\n", e.what)
		}
	}
	if !o.Confirm {
		return Published{}, ErrNotConfirmed
	}

	id, privacy, err := insertVideo(ctx, client, o.apiBase, video, st.Size(), m, o.Privacy)
	if err != nil {
		return Published{}, err
	}
	p := Published{VideoID: id, URL: "https://youtu.be/" + id, Privacy: privacy, UploadedAt: time.Now().UTC().Truncate(time.Second)}
	raw, _ := json.MarshalIndent(p, "", "  ")
	if err := os.WriteFile(pubPath, append(raw, '\n'), 0o644); err != nil {
		return p, fmt.Errorf("uploaded as %s but could not record it: %w", p.URL, err)
	}
	// The video is up and recorded. A failed thumbnail or captions upload is reported, not fatal: both can be redone in YouTube Studio.
	for _, e := range extras {
		if _, err := os.Stat(e.path); err != nil {
			continue
		}
		if err := e.send(e.path, id); err != nil {
			fmt.Fprintf(o.Out, "%s NOT uploaded: %v\n", e.what, err)
		} else {
			fmt.Fprintf(o.Out, "%s uploaded\n", e.what)
		}
	}
	return p, nil
}

func readMeta(path string) (meta, error) {
	m := meta{CategoryID: "28"} // Science & Technology
	f, err := os.Open(path)
	if err != nil {
		return m, fmt.Errorf("no upload details: %w", err)
	}
	defer f.Close()
	dec := json.NewDecoder(f)
	dec.DisallowUnknownFields() // a misspelt key would otherwise upload without its value
	if err := dec.Decode(&m); err != nil {
		return m, fmt.Errorf("%s: %w", path, err)
	}
	// YouTube's limits; it rejects longer values only after the bytes are sent.
	switch {
	case m.Title == "":
		return m, fmt.Errorf("%s: title is empty", path)
	case len([]rune(m.Title)) > 100:
		return m, fmt.Errorf("%s: title is %d characters, YouTube allows 100", path, len([]rune(m.Title)))
	case len(m.Description) > 5000:
		return m, fmt.Errorf("%s: description is %d bytes, YouTube allows 5000", path, len(m.Description))
	}
	return m, nil
}
