# upload progress

## Status
in progress (upload-angle-brackets): `yt upload` works against real YouTube: Episode 0 is uploaded with captions and thumbnail, and the owner made it public in Studio on 2026-11-21. Open: app still in Testing (7-day sign-in), 3 unbuilt criteria.

## Next
1. Optional, owner's call: publish the OAuth app so the sign-in stops expiring every 7 days. In Google Auth Platform > Audience, "Publish app" stays greyed out with
   "complete your configuration on the Branding page". Checked 2026-11-21: app name and both emails are set; the empty fields are Application home page, privacy policy link,
   terms of service link and Authorized domains, so it probably wants a home page and a privacy policy on a domain the owner lists. Not tried.
   Until then, when an upload fails with a sign-in error, run `go run ./cmd/yt upload <episode-dir> --login` and click through the sign-in (about 30 seconds).
2. The API audit form (https://support.google.com/youtube/contact/yt_api_form) is NOT needed today: Episode 0 was uploaded through the unaudited project and the owner made it public;
   it plays publicly without sign-in (checked 2026-11-21). File the form only if a later upload gets locked private or the daily quota runs out.
3. Build the unticked criteria in the spec: `yt check` gate (needs `episode`), resume across runs, the remaining error one-liners.

## Blockers
None.

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
- 2026-11-21: Captions are an SRT file (`captions.srt`) sent with `captions.insert` as the English track, because Episode 0 has exact line timings from the voice; this answers the spec's open question 2.
- 2026-11-21: Thumbnail and captions go up after `published.json` is written, and their failures only print, because the video is the part that can't be redone cheaply.
- 2026-11-21: `--thumbnail` sets the thumbnail on the already-uploaded video, because YouTube refused it at upload time (channel unverified) and a re-upload would have made a fourth video.
- 2026-11-21: Observed: the owner could switch the API-uploaded video from private to public in YouTube Studio although the API project is unaudited. So the "locked private" rule did not block this video; whether YouTube locks it later is unknown (spec open question 3).

## Log
- 2026-11-20 upload-feature: feature scaffolded, spec drafted with owner setup steps.
- 2026-11-20 upload-feature: `upload.Run`, `yt upload`, 8 tests against an `httptest` fake (OAuth loopback + PKCE, dry run, privacy, published.json); `govulncheck` clean and added to CI.
- 2026-11-21 upload-feature: first real run: dry run showed the right channel, `--confirm` uploaded Episode 0 (13.8 MB) as private; `published.json` written in the episode folder.
- 2026-11-21 upload-feature: `yt upload` also sets `thumbnail.png` and uploads `captions.srt`; 10 tests against the fake.
- 2026-11-21 upload-feature: second real run (`--again`): video and captions uploaded; the thumbnail was refused (403, channel not verified for custom thumbnails) and reported without failing the run; the error now says how to fix it.
- 2026-11-21 upload-feature: `yt upload <dir> --thumbnail` added (11 tests) and used: thumbnail set on Episode 0 after the owner verified the channel.
- 2026-11-21 upload-audit-facts: Next and Blockers corrected after PRs #2-#4 merged: the audit is not blocking (Episode 0 is public), the channel is verified, the 7-day sign-in and the audit form are two separate things.
