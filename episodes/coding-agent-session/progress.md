# coding-agent-session progress

## Status
Cut 3 rendered (59.5 s, 33 shots, title card 0-2.1 s "LEARN / CODING AGENTS / IN 60 SECONDS"; owner-approved hook, hookscore 100; audit ISSUES 0), packaged and self-evaluated; not uploaded, waiting for the owner.

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
- 2026-11-21: Opening re-cut (cut 2), because the owner said the opening was unclear: viewers must know the topic in the first second. The film opens on a title card ("CODING AGENTS / EXPLAINED / IN 60 SECONDS" in the thumbnail's style, corner tag, no fade-in) for 1.5 s, until "Coding agents, explained" has been spoken (voice 1.44 s + .08); the first spoken words are now the topic: "Coding agents, explained: you would never fix your car with the mechanic on the phone, but that is how you use an AI chatbot." (hook score 58, WORKABLE, same as before). "A coding-agent session fixes that." was cut as a repeat; with it gone every later line is .21 s earlier.
- 2026-11-21: How cut 2 is timed: `film.js` keeps cut 1's picture times as written and maps them (`oldT`/`newT`/`NEW_CUTS` under MAP) instead of editing ~300 literals: film 1.5-4.25 s plays cut 1's shot 0 62 frames late, shot 2 is squeezed 60 to 58 frames, cut 1's shot 3 (the dropped line) is gone, from cut 1's 8.1 s on everything is 6 frames (.2 s) earlier; sound events are remapped with `newT`. `audio_mix.py` unchanged (voice at .08).
- 2026-11-21: Hook (cut 3) changed by the owner to "Coding agents, 60s: why do you lose hours, never stop pasting your code, but how can 1 agent loop 4 steps until you're done?" (`script.md`; spoken in `film/script.txt` as "Coding agents, in sixty seconds: why do you lose hours, never stop pasting your code, but how can one agent loop four steps until you're done?"), because it scores 100/100 on hookscore and states the before (hours lost pasting code), the new (one agent loops four steps) and the why (until you're done). Title card now "LEARN / CODING AGENTS / IN 60 SECONDS" and stays until "in sixty seconds" is spoken (voice 1.89 s + .08, card 2.1 s).
- 2026-11-21: Cut 3 timing: the new hook is 0.95 s longer, so two later lines lost words (not the hook): "paste his fix into your code, run it" -> "paste his fix, run it" and "mechanic standing in your garage" -> "mechanic in your garage" (-1.26 s), net -0.3 s, film 59.5 s. `film.js` MAP is now two knot tables (KH hook region, KL one knot per line start, generated from the old and new `vo_lines.json`, picture frame = (old start + .28) * 30, film frame = (new start + .08) * 30); cut frames come from KL, the shortened lines squeeze their shots 1.1-1.2x. The title "Your AI Chatbot Is a Mechanic on the Phone" and its upload.json first chapter were written for the old hook; the title is unchanged (owner's call), the chapter 0:00 text was reworded.
- 2026-11-21: Evaluation written by the maker (the brief asked for it); the role prefers another agent, said at the top of `evaluation.md`.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-20 ep-coding-agent-session: claimed; research from the makers' docs; hooks scored; script.md; voice (am_michael 1.2, --no-align); music fetched.
- 2026-11-21 ep-coding-agent-session: film.js (garage, studio, board; 32 shots), three rounds of stills, full build; audit fixes (two camera moves, one reach); ISSUES 0.
- 2026-11-21 ep-coding-agent-session: research.md, brief.json, thumbnail (160 px checked), captions.srt, upload.json (title 84/100), earshot measure/describe/timeline/sheet, evaluation.md (ready, no must-fix). Not uploaded.
- 2026-11-21 ep-coding-agent-session: cut 2, topic in the first second: new first line, title card, re-voice (22 lines), film.js time map, full rebuild (audit ISSUES 0), captions.srt, evaluation.md (hook, new passed row, loudness), PR #8 updated.
- 2026-11-21 ep-coding-agent-session: cut 3: owner's new hook (hookscore 100), title card LEARN / CODING AGENTS / IN 60 SECONDS to 2.1 s, re-voice (hook + 2 trimmed lines), film.js knot map, full rebuild (59.5 s, audit ISSUES 0), captions.srt, upload.json chapter 0:00 text, evaluation.md.
