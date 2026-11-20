# upload progress

## Status
spec drafted, no code yet. Waits for the owner's Google setup and `shared/brief`.

## Next
1. Owner does "Owner setup" in `docs/specs/upload.md` (Google Cloud project, OAuth client, publish app, apply for audit).
2. Answer the spec's 3 open questions and update the spec.
3. Wait for `shared/brief` (see `docs/progress.md`), then implement test-first against an `httptest` fake API.
4. Implement `cmd/yt/upload.go`; add `govulncheck ./...` to CI in the same PR (first third-party modules).

## Blockers
Owner's Google setup (spec step 1-5); audit approval before any video can be public (step 6).

## Decisions
- 2026-11-20: Upload through the YouTube Data API (owner chose option B over manual upload), because publishing should be one command.
- 2026-11-20: Private by default and `--confirm` required, because agents act as the owner's account and nothing else stops an accidental public post.
- 2026-11-20: Official Google Go clients (`x/oauth2`, `api/youtube/v3`), not hand-written OAuth, because auth and resumable upload are security- and correctness-sensitive.
- 2026-11-20: Credentials in `~/.config/youtube-skill/` (0600), never in the repo, because the repo is public.

## Log
- 2026-11-20 upload-feature: feature scaffolded, spec drafted with owner setup steps.
