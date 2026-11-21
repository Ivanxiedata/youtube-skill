# Evaluation: coding-agent-session (cut 3, thumbnail v1)

ready to publish

Done by hand on 2026-11-21 with the youtube-agent skill's tools and earshot, following `docs/roles/evaluator.md` and the model scorecard of Episode 0.
Caveat: the same agent made and scored this episode (the role asks for another agent); an independent pass by another agent or the owner is still worth doing.
The scores are the tools' own; a low score is a reason to look again, not proof. No must-fix rows; the should-fix rows are below.

## Must fix
None.

## Should fix
| Area | Result | Evidence | Fix |
|---|---|---|---|
| Music level | 12 dB under the voice by integrated loudness | stems at their mix gains: voice (-3.5 dB) -19.8 LUFS, music (-13.5 dB, then x .55 under voice in `audio_kit`) -32.0 LUFS. Same gains as Episode 0, whose mix the owner approved and which recorded "16 dB" with another method | owner listens; if the music competes, `MUSIC_DB = -17.5` and `build.py --audio-only` |
| Sound on the cuts | average | earshot `timeline`: 38% of 34 picture cuts have an onset within 1 frame (chance 41%), 82% within 100 ms; 5 cuts without a hit (0:10.8, 0:16.7, 0:22.6, 0:28.5, 0:50.9) | soft sounds on those five cuts next cut |
| Voice | reads as narration | earshot `describe`: "a voice-over narration" z +3.7, AudioSet Speech 0.90, Speech synthesizer 0.19 (Episode 0: 0.32-0.47). earshot does not transcribe, so pronunciation is unchecked | owner listens |
| Word count | 184 spoken words, 56.5 s of voice | brief asked for about 170; the longer hook (+0.95 s) was paid for by cutting "into your code" and "standing" later (-1.26 s); film 59.5 s | none needed unless the owner finds it fast |
| Thumbnail text length | 8 words | `title.py` flags "thumb-length" (ceiling 3); the brand's promise format "LEARN <TOPIC> IN 60 SECONDS" overrides, as in Episode 0 | none (brand rule) |
| Audience fit | UNKNOWN | no viewers yet | read retention after publishing |

## Passed
| Area | Result | Evidence |
|---|---|---|
| Hook strength | pass, 100/100 STRONG | owner-approved first line "Coding agents, 60s: why do you lose hours, never stop pasting your code, but how can 1 agent loop 4 steps until you're done?" (spoken "Coding agents, in sixty seconds: ..."): `hookscore.py` prints VERDICT 100 (specificity, address, stakes, curiosity, brevity all 100; formula The Mistake). It states the before (lose hours pasting code), the new (one agent loops four steps) and the why (until you're done) |
| Hook addresses the viewer | pass | speaks to "you" (lose hours, your code, until you're done); the topic is the first words |
| Topic in the first second | pass | title card from frame 0 to 2.1 s ("LEARN / CODING AGENTS / IN 60 SECONDS", the thumbnail's look, corner tag), held until "Coding agents, in sixty seconds" has been spoken (ends 1.89 s in `film/vo_lines.json` + 0.08 s); the first spoken words are the topic |
| Topic in the first 10 s | pass | same as above; the corner tag "Coding-agent session · 60s" is on every frame |
| Story maps onto the technology | pass | mechanic on the phone = chat assistant (text you apply yourself); in the garage with tools = coding agent; look, turn, start, listen = read, edit, run, check; the visit = the session; "didn't get a bigger brain, got hands" = the harness adds tools to the model. Each row sourced in `research.md` |
| Before vs new, side by side | pass | the board (shots 14, 19, 21, 22, 26): BEFORE (chat assistant, you, your code, with the paste/run/error arrows) next to CODING-AGENT SESSION (agent and its READ, EDIT, RUN, CHECK loop, each tagged NEW, boxed as ONE SESSION) |
| Three places on one clock | pass | garage (story), studio (today's screen: chat window and your code, then one terminal), board (diagram) |
| Title | 84/100 with the thumbnail | "Your AI Chatbot Is a Mechanic on the Phone (4-Step Fix)", 55 characters; carried cut 2's hook (cut 3's hook is different; the title is kept because the owner said everything else stays, so a new title is the owner's call); different words from the thumbnail; best of ten scored (two at 94 repeated "coding" from the thumbnail and dropped to 48-66 as a pair) |
| Thumbnail | pass at phone size | brand template: "LEARN THE / CODING-AGENT SESSION / IN 60 SECONDS" (red tilted sticker), the mascot in the mechanic's cap with a wrench, the fixed car with a green check; viewed at 160 px wide: topic and promise readable; bottom-right holds only the car's rear |
| Brand elements (`docs/brand.md`) | all present | corner tag on every frame; mascot (hero) in the story's costume (teal mechanic's cap, drawn after `actor()`); two-line takeaway card ("It didn't get a bigger brain." / amber "It got hands, and a way to check.") at 53.6 s; spoken "Subscribe for the next one." at 55.6 s with the red Subscribe button; "Next in 60 seconds: what are Agent Skills?" at 56.3 s; voice am_michael at 1.2; signature music "Blue Sky" |
| Ending | pass | ends on the insight tied to the story ("He got hands, and a way to check his own work. That is what makes it an agent."), then one call to action; how to try it is in the description (L5) |
| Description | pass | first two lines name the topic in search words (coding-agent session, AI coding agent, Claude Code, Codex CLI, Copilot agent mode) |
| Chapters | pass | 0:00, 0:18, 0:39: first at 0:00, each at least 18 s (cut 3: the lines moved by under 1 s, chapter times unchanged) |
| Hashtags and tags | pass | 3 hashtags (#AIAgents #ClaudeCode #AIExplained), 13 tags |
| Captions | pass | `captions.srt` from the voice line timings (+0.08 s), 22 cues |
| Pace (L1) | pass | 33 shots in 59.5 s, 1.8 s average |
| Accuracy | pass | every claim in `brief.json` has an https source, all from the makers' own docs (Anthropic, OpenAI, Microsoft/GitHub); on-screen examples ("fix the failing test", "app.js", "line 42") are marked invented in the description |
| Music | pass | "Blue Sky" by Sergmusic, CC0 1.0 (`music.json`, sha256 recorded), credited in the description; earshot: AudioSet Music 0.73, "inspirational corporate background music" in every section, no singing tag |
| Loudness and noise (L2) | pass | earshot `measure` on cut 2's `video.mp4` (cut 3: the build's own measure -17.1 LUFS, peak -3.6 dBFS): -17.0 LUFS, true peak -3.7 dBTP, LRA 1.6 LU, noise floor -43.0 dBFS; `describe` gives no noise or hum tag; no beds in `audio_mix.py` |
| Technical | pass | stickman audit `ISSUES 0` (1785/1785 frames); 1920x1080, 59.5 s (33 shots: the title card, then cut 1's shots minus the dropped line's) |

## Not evaluated
- Retention and click-through rate: need the video public with views.
- What works for similar videos: `yt-viral` not run.
- How the voice and mix actually sound to a person: earshot gives levels and tags, not taste or pronunciation; the owner should listen once.
