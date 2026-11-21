package upload

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"
)

// The two YouTube Data API v3 calls this feature needs, by hand: channels.list and videos.insert.
// ponytail: plain net/http instead of google.golang.org/api, which brings dozens of modules for two calls.

func channelTitle(ctx context.Context, c *http.Client, base string) (string, error) {
	req, _ := http.NewRequestWithContext(ctx, http.MethodGet, base+"/youtube/v3/channels?part=snippet&mine=true", nil)
	var out struct {
		Items []struct {
			Snippet struct {
				Title     string `json:"title"`
				CustomURL string `json:"customUrl"` // the channel's @handle
			} `json:"snippet"`
		} `json:"items"`
	}
	if err := do(c, req, &out); err != nil {
		return "", err
	}
	if len(out.Items) == 0 {
		return "", fmt.Errorf("the signed-in Google account has no YouTube channel; run again with --login and pick the channel's account")
	}
	s := out.Items[0].Snippet
	if s.CustomURL != "" {
		return s.Title + " (" + s.CustomURL + ")", nil
	}
	return s.Title, nil
}

// insertVideo uploads with the resumable protocol: one request opens a session, one sends the bytes.
// ponytail: the whole file goes in a single PUT; an interrupted upload starts over.
// Resuming across runs means saving the session URL and asking it for the last confirmed byte.
func insertVideo(ctx context.Context, c *http.Client, base, path string, size int64, m meta, privacy string) (id, gotPrivacy string, err error) {
	body, _ := json.Marshal(map[string]any{
		"snippet": map[string]any{"title": m.Title, "description": m.Description, "tags": m.Tags, "categoryId": m.CategoryID},
		"status":  map[string]any{"privacyStatus": privacy, "selfDeclaredMadeForKids": m.MadeForKids},
	})
	req, _ := http.NewRequestWithContext(ctx, http.MethodPost, base+"/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status", bytes.NewReader(body))
	req.Header.Set("Content-Type", "application/json; charset=UTF-8")
	req.Header.Set("X-Upload-Content-Type", "video/mp4")
	req.Header.Set("X-Upload-Content-Length", strconv.FormatInt(size, 10))
	resp, err := c.Do(req)
	if err != nil {
		return "", "", err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return "", "", apiError(resp)
	}
	session := resp.Header.Get("Location")
	if session == "" {
		return "", "", fmt.Errorf("youtube: no upload session in the reply")
	}

	f, err := os.Open(path)
	if err != nil {
		return "", "", err
	}
	defer f.Close()
	put, _ := http.NewRequestWithContext(ctx, http.MethodPut, session, f)
	put.Header.Set("Content-Type", "video/mp4")
	put.ContentLength = size
	var out struct {
		ID     string `json:"id"`
		Status struct {
			PrivacyStatus string `json:"privacyStatus"`
		} `json:"status"`
	}
	if err := do(c, put, &out); err != nil {
		return "", "", err
	}
	if out.ID == "" {
		return "", "", fmt.Errorf("youtube: upload finished without a video id")
	}
	return out.ID, out.Status.PrivacyStatus, nil
}

func do(c *http.Client, req *http.Request, out any) error {
	resp, err := c.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		return apiError(resp)
	}
	return json.NewDecoder(resp.Body).Decode(out)
}

// apiError turns a YouTube error reply into one line with the cause and, where known, the fix.
func apiError(resp *http.Response) error {
	raw, _ := io.ReadAll(io.LimitReader(resp.Body, 8<<10))
	var e struct {
		Error struct {
			Message string `json:"message"`
			Errors  []struct {
				Reason string `json:"reason"`
			} `json:"errors"`
		} `json:"error"`
	}
	_ = json.Unmarshal(raw, &e)
	reason := ""
	if len(e.Error.Errors) > 0 {
		reason = e.Error.Errors[0].Reason
	}
	hint := ""
	switch reason {
	case "quotaExceeded", "dailyLimitExceeded":
		hint = ": today's API quota is used up; it resets at midnight Pacific time"
	case "accessNotConfigured":
		hint = ": enable \"YouTube Data API v3\" in the Google Cloud project (docs/specs/upload.md, Owner setup step 2)"
	case "youtubeSignupRequired":
		hint = ": this Google account has no YouTube channel"
	}
	if e.Error.Message == "" {
		return fmt.Errorf("youtube: HTTP %d", resp.StatusCode)
	}
	return fmt.Errorf("youtube: %s (HTTP %d %s)%s", e.Error.Message, resp.StatusCode, reason, hint)
}
