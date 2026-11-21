ready to publish (0 must-fix; owner listens first: see "Not evaluated")

# Evaluation: agent-skills (cut 1, thumbnail v1)

Done by hand on 2026-11-21 with the youtube-agent tools and earshot, following `docs/roles/evaluator.md` and the model scorecard of Episode 0.
Caveat: the agent that made the episode also scored it (no second agent was free); the role asks for someone else, so the owner or a second agent should re-read this before upload.
The scores are the tools' own; a low score is a reason to look again, not proof.

## Must fix
None.

## Should fix
| Area | Result | Evidence | Fix |
|---|---|---|---|
| Sound on the cuts | better than Episode 0, still loose | earshot `timeline`: 47% of the 32 picture cuts have an onset within one frame (chance 40%; Episode 0: 23%), 75% within 100 ms; 7 cuts without a hit (0:04.0, 0:14.9, 0:17.6, 0:19.5, 0:25.5, 0:29.3) | a soft sound on those cuts, or move each cut onto a word onset; audio-only rebuild |
| Voice | reads as synthetic | earshot `describe`: "a voice-over narration" z +3.9, AudioSet Speech 0.84, Speech synthesizer 0.25 (Episode 0: 0.32-0.47). earshot does not transcribe, so "SKILL.md" (spoken "skill dot M D") and "Anthropic" are unchecked | owner listens |
| Hook curiosity | first sentence WORKABLE 60/100 | `hookscore.py` on "You would never make a cook reread a 500-page recipe binder before frying one egg.": curiosity 41 is the weakest part; the first two sentences together score 78 STRONG, the full spoken hook 74 STRONG | acceptable; the second sentence carries the turn |
| Self-evaluation | made and scored by the same agent | see caveat above | a second reader before upload |
| Audience fit | UNKNOWN | `docs/voice.md` is a draft; no viewers yet | read retention after publishing |

## Passed
| Area | Result | Evidence |
|---|---|---|
| Hook addresses the viewer | pass | first word "You"; formula matched: The Impossible Claim. Five-plus alternatives scored (`hookscore.py`): 78, 70, 69, 66, 66, 64, 60, 51, 44, 44, 44; the best one is the one used |
| Topic in the first 10 s | pass | "Agent Skills" spoken at 8.0-9.3 s (`film/vo_lines.json` + 0.08 s) and shown as a card at 8.15 s; the corner tag "Agent Skills · 60s" is drawn by `overlay()` on every frame |
| Title | 80/100 with the thumbnail | "Stop Making Your AI Agent Read 500 Pages", 40 characters, a concrete figure; `title.py` flags "agent" repeated on the thumbnail and 6 thumbnail words (the brand's promise format overrides its 3-word ceiling, as in Episode 0). Other candidates: 66, 66, 48, 48 |
| Thumbnail | pass at phone size | "LEARN AGENT SKILLS IN 60 SECONDS" with the red sticker, the mascot in the chef's hat, a recipe box with one SKILL.md card pulled out; viewed at 160 px wide: topic and promise readable, nothing important in the bottom-right corner |
| Brand | pass | corner tag every frame; mascot in the story's costume (toque) on every studio and kitchen shot; takeaway card in two lines (plain, then amber: "Tell it where to look."); spoken "Subscribe for the next one." with the red button at 57.45 s; "Next in 60 seconds: why MCP went stateless" from 57.95 s; Kokoro am_michael at 1.2; "Blue Sky" signature track |
| Story maps onto the tech | pass | binder = one big prompt read on every task; card tab (name + when to use it) = `name` + `description` loaded at startup; order matches a tab = task matches a description; one card pulled = full `SKILL.md` loaded. Limits written in `research.md` |
| Before vs new board | pass | BEFORE (one big prompt -> context FULL) and AGENT SKILLS (folder, SKILL.md, extra files tagged NEW; context gets names at startup, instructions on a match, files if needed) side by side, 29.3-44.8 s and 48.6-51.7 s |
| Accuracy | pass | every claim in `brief.json` has an https source; "about 100 tokens" and "loaded at startup" are from the specification and Claude docs; "open standard since Dec 2025, started by Anthropic" from agentskills.io and the Claude blog; 500 pages, egg and soup are marked invented in `research.md` and the description |
| Description | pass | first two lines name "Agent Skills", "SKILL.md", "AI agent", and the before; sources, music credit, a trust warning |
| Hashtags and tags | pass | 3 hashtags; 13 tags |
| Chapters | pass | 0:00, 0:17, 0:29, 0:48: first at 0:00, each at least 10 s (shortest 11.4 s) |
| Captions | pass | `captions.srt` from the voice line timings (+0.08 s), 21 cues; its words equal `script.md` (checked by script) |
| Pace | pass | 30 shots in 60 s, 2.0 s average |
| Call to action | pass | one ask, spoken and on screen, at 57.5 s |
| Music | pass | "Blue Sky" by Sergmusic, CC0 1.0 (`music.json`, same track as Episode 0); stems measured with ffmpeg ebur128: voice -16.8 LUFS, music -26.8 LUFS before the mixer's 0.55 bed scale, so about 15 dB under the voice; earshot hears "inspirational corporate background music" z +2.8, AudioSet Music 0.67 |
| Loudness and noise | pass | earshot `measure`: -17.0 LUFS, true peak -3.9 dBTP, loudness range 1.6 LU, noise floor -41.7 dBFS; no noise or hum tag; no room tone or drone in `audio_mix.py` |
| Technical | pass | stickman audit ISSUES 0 (motion floor 0.46, determinism checked by build.py); 1920x1080, 60.0 s |

## Not evaluated
- Pronunciation and how the voice sounds: earshot does not transcribe; the owner should listen, especially to "skill dot M D" and "Anthropic".
- Retention and click-through: need the video public with views (`yt-retention`).
- What works for similar videos: `yt-viral` not run.
