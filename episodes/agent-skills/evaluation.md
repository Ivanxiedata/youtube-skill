ready to publish (0 must-fix; owner listens first: see "Not evaluated")

# Evaluation: agent-skills (cut 2, thumbnail v1)

Cut 2 (2026-11-21, the owner said the opening was unclear): a title card from frame 0 and "Agent Skills, explained" as the first spoken words; rows below are updated for it.
Done by hand on 2026-11-21 with the youtube-agent tools and earshot, following `docs/roles/evaluator.md` and the model scorecard of Episode 0.
Caveat: the agent that made the episode also scored it (no second agent was free); the role asks for someone else, so the owner or a second agent should re-read this before upload.
The scores are the tools' own; a low score is a reason to look again, not proof.

## Must fix
None.

## Should fix
| Area | Result | Evidence | Fix |
|---|---|---|---|
| Sound on the cuts | better than Episode 0, still loose (measured on cut 1, not re-measured; cut 2 adds a sound on the title-card cut and keeps the rest 29 frames earlier) | earshot `timeline` on cut 1: 47% of the 32 picture cuts have an onset within one frame (chance 40%; Episode 0: 23%), 75% within 100 ms; 7 cuts without a hit (0:04.0, 0:14.9, 0:17.6, 0:19.5, 0:25.5, 0:29.3) | a soft sound on those cuts, or move each cut onto a word onset; audio-only rebuild |
| Voice | reads as synthetic | earshot `describe`: "a voice-over narration" z +3.9, AudioSet Speech 0.84, Speech synthesizer 0.25 (Episode 0: 0.32-0.47). earshot does not transcribe, so "SKILL.md" (spoken "skill dot M D") and "Anthropic" are unchecked | owner listens |
| Hook curiosity | WORKABLE 69/100 | `hookscore.py` on "Agent Skills, explained: you would never make a cook reread 500 pages to fry one egg, but that is how you prompt your AI agent.": specificity 68, address 100, stakes 62, curiosity 58, brevity 93; formula The Impossible Claim. Cut 1's hook scored 74-78 STRONG; the topic-first opening costs about 5-9 points, accepted because viewers must know the topic in the first second | acceptable (owner's call: topic first) |
| Self-evaluation | made and scored by the same agent | see caveat above | a second reader before upload |
| Audience fit | UNKNOWN | `docs/voice.md` is a draft; no viewers yet | read retention after publishing |

## Passed
| Area | Result | Evidence |
|---|---|---|
| Hook addresses the viewer | pass | "you would never make a cook ..." follows the topic words; formula matched: The Impossible Claim; address 100. Cut 1's alternatives scored 78, 70, 69, 66, 66, 64, 60, 51, 44, 44, 44 (`hookscore.py`) |
| Topic in the first second | pass | title card from frame 0 ("AGENT SKILLS" huge in amber, "EXPLAINED", the red "IN 60 SECONDS" sticker, in the thumbnail's style) and the first spoken words are "Agent Skills, explained" (voice 0.00-1.63 s, +0.08 s offset = 1.71 s); the card stays until frame 53 (1.77 s), then cuts to the kitchen; the corner tag "Agent Skills · 60s" is on every frame |
| Title | 80/100 with the thumbnail | "Stop Making Your AI Agent Read 500 Pages", 40 characters, a concrete figure; `title.py` flags "agent" repeated on the thumbnail and 6 thumbnail words (the brand's promise format overrides its 3-word ceiling, as in Episode 0). Other candidates: 66, 66, 48, 48 |
| Thumbnail | pass at phone size | "LEARN AGENT SKILLS IN 60 SECONDS" with the red sticker, the mascot in the chef's hat, a recipe box with one SKILL.md card pulled out; viewed at 160 px wide: topic and promise readable, nothing important in the bottom-right corner |
| Brand | pass | corner tag every frame; mascot in the story's costume (toque) on every studio and kitchen shot; takeaway card in two lines (plain, then amber: "Tell it where to look."); spoken "Subscribe for the next one." with the red button at 56.5 s; "Next in 60 seconds: why MCP went stateless" from 57.0 s; Kokoro am_michael at 1.2; "Blue Sky" signature track |
| Story maps onto the tech | pass | binder = one big prompt read on every task; card tab (name + when to use it) = `name` + `description` loaded at startup; order matches a tab = task matches a description; one card pulled = full `SKILL.md` loaded. Limits written in `research.md` |
| Before vs new board | pass | BEFORE (one big prompt -> context FULL) and AGENT SKILLS (folder, SKILL.md, extra files tagged NEW; context gets names at startup, instructions on a match, files if needed) side by side, 28.3-43.8 s and 47.6-50.7 s |
| Accuracy | pass | every claim in `brief.json` has an https source; "about 100 tokens" and "loaded at startup" are from the specification and Claude docs; "open standard since Dec 2025, started by Anthropic" from agentskills.io and the Claude blog; 500 pages, egg and soup are marked invented in `research.md` and the description |
| Description | pass | first two lines name "Agent Skills", "SKILL.md", "AI agent", and the before; sources, music credit, a trust warning |
| Hashtags and tags | pass | 3 hashtags; 13 tags |
| Chapters | pass | 0:00, 0:16, 0:28, 0:47: first at 0:00, each at least 10 s (shortest 12 s) |
| Captions | pass | `captions.srt` from the voice line timings (+0.08 s), 22 cues; its words equal `script.md` (checked by script) |
| Pace | pass | 30 shots in 59.0 s, 2.0 s average |
| Call to action | pass | one ask, spoken and on screen, at 56.5 s |
| Music | pass | "Blue Sky" by Sergmusic, CC0 1.0 (`music.json`, same track as Episode 0); stems measured with ffmpeg ebur128: voice -16.8 LUFS, music -26.8 LUFS before the mixer's 0.55 bed scale, so about 15 dB under the voice; earshot hears "inspirational corporate background music" z +2.8, AudioSet Music 0.67 |
| Loudness and noise | pass | earshot `measure` on cut 2: -17.0 LUFS, true peak -1.6 dBTP, loudness range 1.6 LU, noise floor -40.8 dBFS; no noise or hum tag; no room tone or drone in `audio_mix.py` |
| Technical | pass | stickman audit ISSUES 0 (lowest 1 s motion 0.43; determinism checked by build.py); 1920x1080, 59.0 s |

## Not evaluated
- Pronunciation and how the voice sounds: earshot does not transcribe; the owner should listen, especially to "skill dot M D" and "Anthropic".
- Retention and click-through: need the video public with views (`yt-retention`).
- What works for similar videos: `yt-viral` not run.
