# Evaluation: deepseek-super-agent (cut 5, thumbnail v3)

Done by hand on 2026-11-21 with the youtube-agent skill's tools, as the dry run for the `evaluate` feature.
Verdict: **not ready: 1 must-fix, and it needs the owner** (the thumbnail can't be set until the channel is verified).
The three must-fix rows found on cut 4 are fixed. The scores are the tools' own; a low score is a reason to look again, not proof.

## Must fix
| # | Area | Result | Evidence | Fix |
|---|---|---|---|---|
| 1 | Thumbnail on the video | NOT SET | `yt upload`: "The authenticated user doesn't have permissions to upload and set custom video thumbnails" (HTTP 403) | Owner verifies the channel's phone number at https://www.youtube.com/verify, then sets `thumbnail.png` in YouTube Studio |

## Should fix
| Area | Result | Evidence | Fix |
|---|---|---|---|
| Music | UNKNOWN | measured 16 dB under the voice, no noise bed; nobody has listened to it | owner listens |
| Audience fit | UNKNOWN | `docs/voice.md` is a draft (PR #4), no viewers yet | read retention after publishing |
| Hook strength | WORKABLE, 55-57/100 | `yt-script/hookscore.py` on "You can only babysit five AI agents before you are the bottleneck." (cut 4's hook: 34, WEAK). Weakest part: curiosity | acceptable for now; try a stronger curiosity gap next episode |
| Brand | partly | corner tag, mascot in costume from the first frame, takeaway card, Subscribe button, "Next in 60 seconds" all present | open in `docs/brand.md`: series name, mascot name |

## Passed
| Area | Result | Evidence |
|---|---|---|
| Hook addresses the viewer | pass | first word is "You"; formula matched: The Warning |
| Topic in the first 15 s | pass | "DeepSeek's Super-agent" is spoken at 4.4-7.1 s (`film/vo_lines.json` + 0.08 s); the corner tag "DeepSeek Super-agent · 60s" is on screen from frame 0 (cut 4: first named at 12.5 s and 27.5 s) |
| Title | 84/100 with the thumbnail | "Why You Can Only Run 5 AI Agents (Napoleon's Fix)", 49 characters (cut 4's title: 76, 65 characters). Chosen by the agent from the scorecard options; the owner can change it in YouTube Studio |
| Thumbnail v3 (the image) | pass at phone size | "LEARN DEEPSEEK'S SUPER-AGENT IN 60 SECONDS", mascot, AI army; readable at 160 px wide. `title.py` flags 6 words (its ceiling is 3): the owner's promise format overrides |
| Description | pass | first two lines name the topic in search words; link above the fold; uploaded |
| Hashtags and tags | pass | 3 hashtags, 13 tags; uploaded |
| Chapters | pass | 0:00, 0:11, 0:27, 0:47: first at 0:00, four entries, each at least 10 s |
| Captions | pass | `captions.srt` from the voice line timings; uploaded as the English track |
| Pace | pass | 26 shots in 60 s, 2.3 s average |
| Call to action | pass | one ask, spoken and on screen, at 57.7 s |
| Accuracy | pass | every claim in `brief.json` has a source; "five" in the hook is the top of DeepSeek's "3 to 5", shown on screen at 4.6 s; the figure comes from press, not DeepSeek's repo |
| Technical | pass | stickman audit 0 issues; 1920x1080, 60.0 s, -17.0 LUFS |

## Not evaluated
- Retention and click-through rate: need the video to be public with views (`yt-retention` reads the YouTube Studio export).
- What works for similar videos: `yt-viral` not run yet.
