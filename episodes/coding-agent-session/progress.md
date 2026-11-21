# coding-agent-session progress

## Status
Cut 1 rendered (60.0 s, 32 shots, audit ISSUES 0), packaged and self-evaluated (`evaluation.md`: ready, no must-fix); not uploaded, waiting for the owner.

## Next
1. Owner watches `video.mp4` and listens once (the agent cannot hear; earshot only measures), and looks at `thumbnail.png`.
2. Owner merges the PR into develop, then uploads with `yt upload` (private) when happy; this branch never uploads.
3. Optional should-fix rows in `evaluation.md`: soft sounds on the 5 cuts without a hit; music 4 dB lower if it competes (`MUSIC_DB = -17.5`, `build.py --audio-only`).
4. Rebuild from git if needed: `make skills`, venv as `make skills` prints, `python .claude/skills/stickman/scripts/new_film.py <tmp>`, copy its engine files into `film/`,
   `python scripts/music.py get efa007f6-a5fe-420c-a1a6-8d5dafa95005 film/music.mp3`, `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align`,
   then `build.py film --out coding-agent-session.mp4` from this folder; thumbnail: `python film/thumb.py thumbnail.png`.

## Blockers
none

## Decisions
- 2026-11-20: Topic verified against the makers' own docs (Claude Code "How Claude Code works" and glossary, Codex CLI docs and README, VS Code's Copilot agent mode post); the premise holds, so no stop. Read directly instead of the Deep-Research flow, as Episode 0 did for two items.
- 2026-11-20: Predecessor is the chat assistant (text you paste, run and carry back), because Anthropic's glossary defines agentic coding against exactly that. Autocomplete (Copilot 2021) is in the description only, to keep one clear "before" in 60 s.
- 2026-11-20: Story: a mechanic on the phone vs the same mechanic in your garage with tools (everyday life; Episode 0 used Napoleon). It maps onto the tech: same model (same mechanic), plus tools (hands) and a loop of look, turn, start, listen (read, edit, run, check), until the noise is gone; the visit is the session. Takeaway: "he didn't get a bigger brain, he got hands and a way to check", which is Anthropic's model + harness split.
- 2026-11-20: Mascot = the mechanic (the hero with a teal cap, `cap()` drawn after `actor()` like Episode 0's `bicorne()`); "you" is FRIEND, the car's owner, in both the garage and the studio.
- 2026-11-20: Hook: seven written and scored with `hookscore.py`; kept "You would never fix your car with the mechanic on the phone, but that is how you code with an AI chatbot." (58, WORKABLE, after changing "chatbot" to "AI chatbot"). Topic spoken at 5.9 s.
- 2026-11-20: 189 spoken words (brief said about 170) because the loop needs its four steps said one by one; at speed 1.2 the voice is 57.4 s and the film 60.0 s. Paragraph pauses before "new" and "takeaway" only. `script.txt` = `script.md` without headings; no respellings needed.
- 2026-11-21: Music gain the same as Episode 0 (`-13.5 dB`) so the brand track sits where the owner approved it. Measured by integrated loudness of the stems at their mix gains it is 12 dB under the voice, not 16; recorded as a should-fix for the owner's ears rather than changed blind.
- 2026-11-21: Two camera moves were slowed (shot 7, the error zoom; shot 21, a pan across the dense board, now a zoom) because the audit flagged them as pops; a raised hand target was brought inside arm's reach. Audit then ISSUES 0.
- 2026-11-21: Title "Your AI Chatbot Is a Mechanic on the Phone (4-Step Fix)" (84/100 with the thumbnail), because it carries the hook and shares no word with the thumbnail; two higher-scoring titles repeated "coding" from the thumbnail and scored 48-66 as a pair.
- 2026-11-21: Evaluation written by the maker (the brief asked for it); the role prefers another agent, said at the top of `evaluation.md`.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-20 ep-coding-agent-session: claimed; research from the makers' docs; hooks scored; script.md; voice (am_michael 1.2, --no-align); music fetched.
- 2026-11-21 ep-coding-agent-session: film.js (garage, studio, board; 32 shots), three rounds of stills, full build; audit fixes (two camera moves, one reach); ISSUES 0.
- 2026-11-21 ep-coding-agent-session: research.md, brief.json, thumbnail (160 px checked), captions.srt, upload.json (title 84/100), earshot measure/describe/timeline/sheet, evaluation.md (ready, no must-fix). Not uploaded.
