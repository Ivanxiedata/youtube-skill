# agent-skills progress

## Status
Cut 1 rendered (60.0 s, 30 shots, audit ISSUES 0), thumbnail, captions, upload.json and evaluation.md done; not uploaded, waiting for the owner to watch and listen.

## Next
1. Owner watches `video.mp4` (local, not in git) and listens to "skill dot M D" and "Anthropic"; then decides on upload (`yt upload`, private by default).
2. Should-fix from `evaluation.md`: a soft sound on the 7 cuts without one (audio-only rebuild: edit `film/film.js` events or `audio_mix.py`, `build.py film --out agent-skills.mp4 --audio-only`).
3. A second agent re-reads `evaluation.md` (this one was made by the agent that made the video).
4. Rebuild from git: `make skills`, venv as `make skills` prints, `python .claude/skills/stickman/scripts/new_film.py <tmp>`, copy its engine files into `film/`,
   `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align`, `python scripts/music.py get efa007f6-a5fe-420c-a1a6-8d5dafa95005 film/music.mp3`,
   then from this folder `build.py film --out agent-skills.mp4` and `cp film/agent-skills.mp4 video.mp4`; thumbnail: `python film/thumb.py thumbnail.png`.

## Blockers
none

## Decisions
- 2026-11-21: Premise checked against the specification (agentskills.io) and the makers' docs (Claude docs, Claude Code docs, Anthropic engineering blog, Claude blog); it holds. Read directly, no Deep-Research run (few items, as Episode 0).
- 2026-11-21: The "before" is the one big prompt (every instruction always loaded), with pasting the same instructions again as its other face, because the makers name exactly these two: Claude docs ("Unlike prompts ... you don't have to repeat the same guidance") and Claude Code docs ("when you keep pasting the same instructions", "Unlike CLAUDE.md content, a skill's body loads only when it's used"). The film shows the one big prompt because progressive disclosure is what changes; the description names both.
- 2026-11-21: Story = a kitchen: a cook who rereads a 500-page binder of every rule to fry one egg, fixed by a recipe box whose tabs he reads, pulling one card per order. It maps onto name + description at startup, full SKILL.md on a match, extra files only if needed. Not Napoleon (Episode 0). Limits of the analogy are in `research.md`.
- 2026-11-21: Mascot costume = a chef's toque (`toque()`), the cook gets a teal cap (`cap()`), both drawn after `actor()` like Episode 0's `bicorne()`.
- 2026-11-21: Hook "You would never make a cook reread a 500-page recipe binder before frying one egg. But that is how you prompt your AI agent." chosen from 11 scored candidates (78 STRONG); "Agent Skills fix that." added so the name is spoken by 8 s.
- 2026-11-21: `script.txt` spells "five-hundred-page" and "skill dot M D" for the voice; `script.md` and `captions.srt` keep "500-page" and "SKILL.md". The voice line with SKILL.md is split into two captions at its measured silence (34.82-35.30 s).
- 2026-11-21: Title "Stop Making Your AI Agent Read 500 Pages" (80/100 with the thumbnail, the best of five), because the thumbnail carries the topic.
- 2026-11-21: Sound on picture cuts: a soft low-passed impact on every cut that changes place, raised to gain .55 after earshot found most of them inaudible (sync 38% -> 47% within one frame).
- 2026-11-21: Music gain -13.5 dB as Episode 0. Measured from the mixer's stems with ffmpeg ebur128: voice -16.8 LUFS, music -26.8 LUFS before the mixer's 0.55 bed scale, so about 15 dB under the voice.
- 2026-11-21: No new engine lessons beyond Episode 0's; its traps (no setLineDash, state changes on cut frames, cards fade before cuts, keep the camera moving) were followed and the first full build passed the audit.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-21 ep-agent-skills: research (spec + makers' docs), brief.json, script.md, voice, film.js (kitchen, studio, BEFORE vs AGENT SKILLS board), 60 s / 30 shots, audit ISSUES 0; cut sounds raised (audio-only rebuild); thumbnail, captions.srt, upload.json, earshot evaluation (0 must-fix).
