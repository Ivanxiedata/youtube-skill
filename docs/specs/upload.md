# upload

## Goal
Publish a finished episode to the owner's YouTube channel with one command, private by default,
and record the video id so later episodes and the outro can link to it.

## Users
The owner, who signs in to Google once and decides when a video goes out. Agents prepare the episode
and run the upload only when the owner says to, for that video.

## Inputs and outputs
In `episodes/<slug>/` (file names owned by `shared/brief`):
- `video.mp4`: the rendered video (gitignored).
- `upload.json`: `title`, `description`, `tags`, `category_id` (default 28, Science & Technology), `made_for_kids` (false).
- `thumbnail.png` (optional, 1280x720) and `captions.srt` (optional; Episode 0 builds it from the voice line timings).
- Written after a successful upload, and committed: `published.json` with `video_id`, `url`, `privacy`, `uploaded_at`.

Secrets live outside the repo, in `~/.config/youtube-skill/` (mode 0600): `client_secret.json` (from the owner's
Google Cloud project) and `token.json` (written at sign-in). Never in the repo, never in logs.

## Acceptance criteria
- [ ] `yt upload episodes/<slug>` refuses to run unless `yt check` passes for that episode (waits for the `episode` feature).
- [x] Without `--confirm` it only prints what it would upload (title, privacy, file size, channel name and @handle) and exits 1. -> TestDryRunReportsAndUploadsNothing
- [x] Privacy is `private` unless `--privacy unlisted` or `--privacy public` is given. -> TestPrivacyDefaultsToPrivate
- [x] First run signs in through the browser (installed-app OAuth with loopback redirect and PKCE) and saves `token.json` with mode 0600. -> TestFirstRunSignsInAndSavesToken
- [x] It requests only the `youtube.upload` and `youtube.force-ssl` scopes. -> TestRequestsOnlyUploadScopes
- [x] A missing `client_secret.json` prints the path to put it in and points to "Owner setup" below. -> TestMissingClientSecretPointsToSetup
- [ ] The upload is resumable: an interrupted run resumes from the last confirmed byte when rerun on the same file.
- [x] An episode with `published.json` is refused unless `--again` is given. -> TestRefusesPublishedEpisodeWithoutAgain
- [x] After the video uploads it sets the thumbnail if `thumbnail.png` exists and uploads `captions.srt` as the English caption track. -> TestSendsThumbnailAndCaptionsAfterUpload
- [x] A thumbnail or captions failure is reported with its cause, not fatal: the video stays uploaded and recorded. -> TestThumbnailFailureIsReportedNotFatal
- [x] It writes `published.json` only after the video upload succeeded. -> TestWritesPublishedOnlyAfterUpload
- [x] `yt upload <dir> --thumbnail` sets `thumbnail.png` on the video named in `published.json` without uploading again (for when YouTube refused it at upload time). -> TestThumbnailOnlySetsItOnThePublishedVideo
- [ ] Quota exceeded, an expired or revoked token, and an unaudited project's private lock each print a one-line cause and fix.
- [x] Tests run against a fake API (`net/http/httptest`); no test touches the network or real credentials. -> TestRunUploadsToFakeAPI

## Non-goals
- Scheduling, playlists, analytics, editing a video after upload, Shorts.
- More than one channel or Google account.
- Storing credentials anywhere but `~/.config/youtube-skill/`.

## Interfaces
- Uses from `shared/`: nothing yet. When `shared/brief` lands, the episode file names move there.
- Exposes to `cmd/`: `upload.Run(ctx, dir string, opts Options) (Published, error)`; a dry run returns `upload.ErrNotConfirmed`.
- Used by: `cmd/yt/upload.go` (`yt upload <episode-dir> [--confirm] [--privacy p] [--again] [--login]`).
- Dependencies: `golang.org/x/oauth2` for sign-in, token refresh and PKCE, because OAuth is easy to get subtly wrong by hand.
  The two API calls (`channels.list`, `videos.insert`) are plain `net/http`, because `google.golang.org/api` brings
  dozens of modules for two calls. It is the repo's first third-party Go module, so CI runs `govulncheck`.

## Owner setup (one time, about 15 minutes, free)
1. https://console.cloud.google.com: create a project, e.g. `youtube-skill`.
2. APIs & Services > Library: enable **YouTube Data API v3**.
3. Google Auth Platform (OAuth consent screen): audience **External**; add the two scopes above;
   add your own Google account as a test user.
4. Clients: create an OAuth client of type **Desktop app**, download the JSON, save it as
   `~/.config/youtube-skill/client_secret.json`, then `chmod 600` it.
5. Audience: **Publish app**, so sign-in doesn't expire every 7 days (it does while in Testing). On 2026-11-21 the console greyed this out until
   the Branding page is "complete"; while in Testing, add your own account under Test users instead.
   Google may warn that the app is unverified when you sign in; for your own account you can continue.
6. Verify the channel's phone number (https://www.youtube.com/verify), or YouTube refuses custom thumbnails.
7. Only if needed: the API audit (https://support.google.com/youtube/contact/yt_api_form). Google's docs say uploads from an unaudited project are locked to private,
   but Episode 0 (2026-11-21) could be made public in YouTube Studio. File it if an upload does get locked, or to ask for more quota.

## Later
- Add each episode to a playlist per lineage chain (oldest first).
- Scheduled publish time (`--publish-at`).
- Shorts: vertical cut uploaded alongside the main video.

## Verification
`make check-upload`. Manual: the owner runs `go run ./cmd/yt upload episodes/<slug> --confirm`; the video
appears as private in YouTube Studio, and `episodes/<slug>/published.json` has its id.

## Open questions (answer before code)
1. Quota cost of one upload: Google's docs disagree (1600 units of 10,000/day vs a separate per-call limit).
   Check the current videos.insert reference page and record the number in `upload/progress.md` Decisions.
2. Answered: captions are uploaded as an SRT file (`captions.srt`), built from the voice line timings.
3. Does YouTube lock an API-uploaded video to private later? Episode 0 was not locked on the day of upload (2026-11-21); look again after a week.
