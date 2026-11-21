ready to publish

# Evaluation: mcp-stateless (cut 1, thumbnail v1)

Done 2026-11-21 by hand with the youtube-agent tools and earshot, in the format of `episodes/deepseek-super-agent/evaluation.md`.
Caveat: scored by the agent that made the episode; `docs/roles/evaluator.md` asks for a different agent. An independent pass is welcome.
The scores are the tools' own; a low score is a reason to look again, not proof.

## Must fix
None.

## Should fix
| Area | Result | Evidence | Fix |
|---|---|---|---|
| Sound on the cuts | weak, same as Episode 0 | earshot `timeline --video`: 23% of 31 cuts have an onset within 1 frame (chance 41%), 64% within 100 ms, median offset 85 ms; 10 cuts without a hit (0:00.10, 0:01.47, 0:12.47, 0:17.60, 0:20.90, 0:25.10, ...). The cloth brushes on place changes land, the others don't | put a soft sampled sound on more cuts, next cut or next episode |
| Music level | 12.3 dB under the voice by integrated stems, not 16 | music.mp3 at -13.5 dB is -26.7 LUFS, the mixer multiplies effects+music by .55 (-5.2 dB) under a voice: -31.9 LUFS; vo.wav at -3.5 dB is -19.6 LUFS (ffmpeg ebur128). Same gain as Episode 0, which recorded "16.0 dB under" with a method not written down | owner listens; if it is too loud, `MUSIC_DB = -17` and `build.py film --out mcp-stateless.mp4 --audio-only` |
| Voice | reads as synthetic (brand voice) | earshot `describe`: "a voice-over narration" z +3.7, AudioSet Speech 0.86, Speech synthesizer 0.11 (Episode 0: 0.32-0.47) | none; brand voice |
| Brand | partly | the "Next in 60 seconds: ..." line under the Subscribe button is off on purpose (no next episode decided) | add it when the owner picks the next episode (one `card(...)` line in `overlay()`, then `--shots 30`) |
| Hook | STRONG 73/100, weakest part curiosity 58 | `hookscore.py` on the two-sentence hook | acceptable |
| Thumbnail text | 6 words (tool ceiling 3), repeats "MCP" from the title | `title.py --title "Why MCP Threw Away Sessions in 2026" --thumb "LEARN STATELESS MCP IN 60 SECONDS"`: 84/100 | the brand template overrides the word count, as in Episode 0 |

## Passed
| Area | Result | Evidence |
|---|---|---|
| Hook addresses the viewer | pass | first word "You"; hookscore 73 STRONG (specificity 96, address 100, stakes 62, curiosity 58, brevity 100). Four alternatives: "You can only be served by one waiter..." 56, "You sit down to eat, and only one waiter..." 46, "You know the waiter who says 'not my table'?..." 44, "Stop making your servers remember you..." 47 |
| Topic in the first 15 s | pass | "MCP" spoken at 2.95-6.93 s and again at 7.43 s with what it is; the corner tag "Stateless MCP · 60s" is on every frame from frame 0 |
| Status stated exactly | pass | spoken "The MCP specification that shipped that day"; on screen 21.5-24.8 s "MCP spec 2026-07-28 · shipped · the current version" (versioning page: current = 2026-07-28) |
| Accuracy | pass | every claim in `brief.json` has an http(s) source, all primary (spec, changelog, SEP-2575, SEP-2567, maintainers' blog). Limits of the diner analogy are written in `research.md` (session ID was optional; an in-flight request is still lost; the model carries the handle) |
| Story maps onto the tech | pass | customer = AI app, waiter = server instance, handshake = `initialize`, table number = `Mcp-Session-Id`, order in his head = session state, order slip = self-describing request, ticket = explicit state handle (SEP-2567's own basket example) |
| Before vs new, side by side | pass | board: BEFORE (one app pinned to Server A, "1 handshake", "2 session ID" struck out as removed) vs MCP 2026-07-28 (Request tagged NEW, arrows to any server, "ticket #42" tagged NEW) |
| Title | 100/100 alone, 84/100 with the thumbnail | "Why MCP Threw Away Sessions in 2026", 35 characters, a name and a number |
| Thumbnail | pass at phone size | "LEARN / STATELESS MCP / IN 60 SECONDS" with the red sticker, mascot in diner cap and bow tie holding the order slip, a row of waiters as the lesson picture; viewed at 160 px wide, all three lines readable; bottom-right holds only background waiters |
| Description | pass | first two lines name "Stateless MCP", "Model Context Protocol", "2026-07-28", "session ID"; status, sources and music credit included |
| Hashtags and tags | pass | 3 hashtags (#MCP #ModelContextProtocol #AIExplained), 15 tags |
| Chapters | pass | 0:00, 0:21, 0:46: first at 0:00, each at least 10 s (21, 25, 13 s) |
| Captions | pass | `captions.srt`, 19 cues from `film/vo_lines.json` + 0.3 s, with the written date "July 28, 2026" |
| Pace | pass | 31 shots in 59 s, 1.9 s average (L1) |
| Takeaway and call to action | pass | two-line card from 51.6 s ("A server that remembers nothing / is a server anyone can replace."), spoken "Subscribe for the next one." at 55.55 s with the red button popping in at 55.6 s (L5, L6) |
| Music | pass | the brand's signature track "Blue Sky" by Sergmusic (CC0 1.0, `music.json`); earshot hears "inspirational corporate background music", AudioSet Music 0.74 |
| Loudness and noise | pass | earshot `measure`: -17.0 LUFS, true peak -4.0 dBTP, LRA 1.7 LU, noise floor -42.1 dBFS; `describe`: no noise, hum or hiss tag (top sound tags all under z +2, tentative); no noise beds in `audio_mix.py` (L2) |
| Technical | pass | stickman audit ISSUES 0 (hand step max 36.6, lowest 1 s motion 0.41, determinism checked); 1920x1080, 59.0 s |

## Not evaluated
- How the voice says "MCP", "session ID" and the date: earshot does not transcribe. The phoneme check reads "MCP" as the three letters; the owner should listen.
- Retention and click-through: need the video published with views.
- What works for similar videos: `yt-viral` not run.
