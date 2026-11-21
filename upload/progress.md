# upload progress

## Status
in progress (upload-feature): `yt upload` works against a fake API (sign-in, dry run, upload, published.json); never run against real YouTube. Waits for the owner's Google setup.

## Next
1. Owner does "Owner setup" in `docs/specs/upload.md` (Google Cloud project, OAuth client saved as `~/.config/youtube-skill/client_secret.json`).
2. First real run, from this worktree: `go run ./cmd/yt upload <episode-dir>` (dry run: signs in, shows the channel name), then the same with `--confirm`.
   Episode 0's folder: `../youtube-skill-ep-super-agent/episodes/deepseek-super-agent` (has `video.mp4` and `upload.json`).
3. Record what the real API did (quota used, whether the video was locked private) under Decisions and in the spec's open questions.
4. Unbuilt criteria (`[ ]` in the spec): `yt check` gate, resume across runs, thumbnail and captions, the remaining error one-liners.

## Blockers
Owner's Google setup (spec step 1-5); audit approval before any video can be public (step 6).

## Decisions
- 2026-11-20: Upload through the YouTube Data API (owner chose option B over manual upload), because publishing should be one command.
- 2026-11-20: Private by default and `--confirm` required, because agents act as the owner's account and nothing else stops an accidental public post.
- 2026-11-20: `golang.org/x/oauth2` for OAuth (security-sensitive), but the two REST calls by hand with `net/http`, because `google.golang.org/api` adds dozens of modules for two calls and hides the upload session URL that resume-across-runs needs. Replaces the earlier "both official clients" plan.
- 2026-11-20: A dry run signs in too, because the channel name is the one thing the owner must see before `--confirm` (wrong account = wrong channel).
- 2026-11-20: Built before `shared/brief` and `episode`, because the owner wants Episode 0 uploaded now; `Run` returns `error` instead of `[]brief.Problem` and the `yt check` gate stays unticked.
- 2026-11-20: The whole file goes in one PUT of the resumable protocol; resume across runs is not built (Episode 0 is 14 MB).
- 2026-11-20: Credentials in `~/.config/youtube-skill/` (0600), never in the repo, because the repo is public.

## Log
- 2026-11-20 upload-feature: feature scaffolded, spec drafted with owner setup steps.
- 2026-11-20 upload-feature: `upload.Run`, `yt upload`, 8 tests against an `httptest` fake (OAuth loopback + PKCE, dry run, privacy, published.json); `govulncheck` clean and added to CI.
