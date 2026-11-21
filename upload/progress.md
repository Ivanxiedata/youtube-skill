# upload progress

## Status
`yt upload` works against real YouTube: Episode 0 uploaded as private on 2026-11-21. Open: API audit, app still in Testing, 4 unbuilt criteria.

## Next
1. Owner: apply for the API audit (https://support.google.com/youtube/contact/yt_api_form). Until it passes, API uploads can't be made public.
2. Owner or agent: publish the OAuth app. In Google Auth Platform > Audience, "Publish app" is greyed out with "complete your configuration on the Branding page"
   (app name and emails are set, so it probably wants a home page and privacy policy link). Until then the app is in Testing and the sign-in expires after 7 days:
   when uploads fail with a sign-in error, run `go run ./cmd/yt upload <episode-dir> --login`.
3. Check in YouTube Studio whether Episode 0 shows "private (locked)", and whether the lock lifts after the audit (spec open question 3).
4. Build the unticked criteria in the spec: `yt check` gate (needs `episode`), resume across runs, thumbnail and captions, the remaining error one-liners.
5. Owner merges PR #2.

## Blockers
API audit approval before any API-uploaded video can be public (owner files the form).

## Decisions
- 2026-11-20: Upload through the YouTube Data API (owner chose option B over manual upload), because publishing should be one command.
- 2026-11-20: Private by default and `--confirm` required, because agents act as the owner's account and nothing else stops an accidental public post.
- 2026-11-20: `golang.org/x/oauth2` for OAuth (security-sensitive), but the two REST calls by hand with `net/http`, because `google.golang.org/api` adds dozens of modules for two calls and hides the upload session URL that resume-across-runs needs. Replaces the earlier "both official clients" plan.
- 2026-11-20: A dry run signs in too, because the channel name is the one thing the owner must see before `--confirm` (wrong account = wrong channel).
- 2026-11-20: Built before `shared/brief` and `episode`, because the owner wants Episode 0 uploaded now; `Run` returns `error` instead of `[]brief.Problem` and the `yt check` gate stays unticked.
- 2026-11-20: The whole file goes in one PUT of the resumable protocol; resume across runs is not built (Episode 0 is 14 MB).
- 2026-11-20: Credentials in `~/.config/youtube-skill/` (0600), never in the repo, because the repo is public.
- 2026-11-20: The dry run prints the channel's @handle next to its name, because one Google account can own several channels and the name alone doesn't identify one.
- 2026-11-21: Owner setup done with the owner's consent in their browser: Google Cloud project `youtube-skill` (id `youtube-skill-515404`) under the channel's Google account,
  YouTube Data API v3 enabled, OAuth app "youtube-skill uploader" (External, Testing, the owner as the only test user), Desktop client "yt upload CLI".
  Credentials are in `~/.config/youtube-skill/` (0600), not in the repo. The owner clicked the Google sign-in themselves.
- 2026-11-21: The app stays in Testing for now, because the console refused "Publish app" (see Next 2); the owner had chosen production.

## Log
- 2026-11-20 upload-feature: feature scaffolded, spec drafted with owner setup steps.
- 2026-11-20 upload-feature: `upload.Run`, `yt upload`, 8 tests against an `httptest` fake (OAuth loopback + PKCE, dry run, privacy, published.json); `govulncheck` clean and added to CI.
- 2026-11-21 upload-feature: first real run: dry run showed the right channel, `--confirm` uploaded Episode 0 (13.8 MB) as private; `published.json` written in the episode folder.
