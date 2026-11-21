# Evaluation: deepseek-super-agent (cut 4, thumbnail v3)

Done by hand on 2026-11-21 with the youtube-agent skill's tools, as the dry run for the `evaluate` feature.
Verdict: **not ready to publish as the channel's first video: 3 must-fix.** The scores are the tools' own; a low score is a reason to look again, not proof.

## Must fix
| # | Area | Result | Evidence | Fix |
|---|---|---|---|---|
| 1 | Hook (first 6 s) | WEAK, 34/100 | `yt-script/hookscore.py`: no "you" in the first six words, no stakes, no formula matched ("usually a summary, not a hook") | Best of 10 tried, 56/100 WORKABLE: "You can only babysit five AI agents before you become the bottleneck. Napoleon fixed that with a hundred thousand soldiers." Needs a new voice line and re-timing of shots 0-2 |
| 2 | Topic in the first 15 s | FAIL | `film/vo_lines.json`: "DeepSeek" is first said at 12.5 s, "Super-agent" at 27.5 s; nothing on screen names the topic before 27.6 s. The thumbnail promises Super-agent, the video opens on Napoleon | A corner tag from frame 0 ("DeepSeek Super-agent · 60s") on every shot; it doubles as the brand mark (`docs/brand.md`) |
| 3 | Brand | FAIL | Nothing in the video recurs from one episode to the next: no series tag, no fixed opening or closing | The corner tag (fix 2) plus the fixed end card; the thumbnail template is now defined in `docs/brand.md` |

## Should fix
| Area | Result | Evidence | Fix |
|---|---|---|---|
| Title | 76/100 | `yt-package/title.py`: 65 characters, desktop search cuts near 60 | Owner picks: "Why You Can Only Run 5 AI Agents (Napoleon's Fix)" scores 84 next to the thumbnail (hook in the title, topic on the thumbnail); "DeepSeek Super-agent in 60 Seconds (Napoleon's Trick)" keeps the search words but repeats the thumbnail (66) |
| Description, first two lines | FAIL, fixed in `upload.json` | `yt-seo` query test: the lines above "...more" opened on Napoleon and did not contain "DeepSeek Super-agent explained" | Rewritten; the copy on YouTube is still the old one |
| Hashtags | missing, added to `upload.json` | none in the description | `#DeepSeek #AIAgents #AIExplained` (YouTube shows the first three above the title) |
| Tags | 8, now 13 in `upload.json` | `yt-seo`: use tags for spellings people type | added "DeepSeek super agent", "superagent", "dsh-superagent", "AI coding agents", "agent orchestration" |
| Captions | missing, now `captions.srt` | built from the voice line timings (exact per line) | not uploaded yet |
| Music | UNKNOWN | measured 16 dB under the voice, no noise bed; nobody has listened to it | owner listens |
| Audience fit | UNKNOWN | no `docs/voice.md` (who we talk to), no viewers yet | write `docs/voice.md`; read retention after publishing |

## Passed
| Area | Result | Evidence |
|---|---|---|
| Thumbnail v3 | pass at phone size | "LEARN DEEPSEEK'S SUPER-AGENT IN 60 SECONDS", mascot, AI army; readable at 160 px wide. `title.py` flags 6 words (its ceiling is 3): the owner's promise format overrides |
| Chapters | pass | 4 chapters, first at 0:00, each at least 10 s. `yt-chapters/chapters.py` put boundaries at 0:00, 0:16, 0:33, 0:47; ours are 0:00, 0:17, 0:27, 0:47 |
| Pace | pass | 26 shots in 60 s, 2.3 s average (`docs/product.md` asks for 2-3 s) |
| Call to action | pass | one ask, spoken and on screen, at 57.7 s |
| Accuracy | pass | every claim in `brief.json` has a source; the "3 to 5 sessions" figure comes from press, not DeepSeek's repo |
| Technical | pass | stickman audit 0 issues; 1920x1080, 60.0 s, -17.0 LUFS |

## Not evaluated
- Retention and click-through rate: need the video to be public with views (`yt-retention` reads the YouTube Studio export).
- What works for similar videos: `yt-viral` not run yet.
