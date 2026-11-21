# deepseek-super-agent progress

## Status
Rendered: `deepseek-super-agent.mp4` (60 s, 1080p, audit 0 issues); waiting for the owner to watch it and approve.

## Next
1. Owner watches `episodes/deepseek-super-agent/deepseek-super-agent.mp4` (not in git: rebuild with step 4) and listens to the mix (nobody has heard it).
2. Packaging: title, description with the sources from `research.md`, captions from `script.md`, thumbnail (youtube-agent `yt-package`).
3. Upload by hand in YouTube Studio as private until the `upload` feature exists (PR #2).
4. Rebuild from git: `make skills`, venv as `make skills` prints, `python .claude/skills/stickman/scripts/new_film.py <tmp>`, copy its engine files into `film/`,
   `tts.py film film/script.txt --voice am_michael --speed 1.1 --no-align`, then `build.py film --out deepseek-super-agent.mp4` from this folder.
5. After PR #2 merges, a repo-level follow-up: `docs/progress.md` (Episode 0 done) and the `docs/product.md` non-goal "research proposes a ranked shortlist, the owner picks".

## Blockers
none

## Decisions
- 2026-11-20: Topic DeepSeek Super-agent (dsh-superagent), ranked first of 5 by a web-search scan; owner asked to build without picking, so the top pick was used.
- 2026-11-20: Read the primary repo docs directly instead of the full Deep-Research flow, because that skill is built for many items x fields and asks ~5 questions; 2 items didn't need it.
- 2026-11-20: Dropped the "p95 29.5 -> 15.7 min" speed-up: not in the repo, and one review says the test wrote no code (accurate over exciting).
- 2026-11-20: Predecessor `single-session-agent` is a pattern, not a product: no single "before" product exists.
- 2026-11-20: Result edge goes back to "Chat + GitHub", not "Team", because the agent answers in the original conversation (README).
- 2026-11-20: Defaults with nobody to ask: 2D, free voice am_michael at speed 1.1 (163 wpm, so the voice fits 60 s), effects on, no music, no storyboard stop.
- 2026-11-20: `--no-align`: pocketsphinx is SIGKILLed on import on this Mac (arm64, anaconda 3.12 venv); word times are estimated inside lines, line times exact.
- 2026-11-20: Film folder lives at `episodes/<slug>/film/`; git keeps only film.js, audio_mix.py, script.txt, vo_lines.json (`.gitignore`).

## Answers for the specs (Episode 0's open questions)
- episode Q1 (brief fields): the draft fields were enough; `claims[].source` per claim worked. Nothing was missing.
- episode Q2 (voice pace): Kokoro am_michael at speed 1.1 = 2.7 words/s; 159 words = 58.5 s. 135-165 words holds.
- diagram Q (can the engine show an image?): not needed. The diagram was drawn as canvas code inside film.js (`drawBoard`, nodes/edges from brief.json by hand),
  so the `diagram` feature should emit film.js-compatible draw code or data for it, not an SVG file.
- Engine lesson: `setLineDash` strokes render non-deterministically in headless Chromium (audit failure); draw dashes as filled rects.
- Engine lesson: a diagram shot that starts mostly empty fails the 0.2 motion floor; move the camera across it.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-20 ep-super-agent: research (primary repo docs + press), brief.json, script.md, voice, film.js (studio + side-by-side diagram), rendered 60 s; audit 0 issues after fixing a stillness window and a dashed-line determinism bug.
