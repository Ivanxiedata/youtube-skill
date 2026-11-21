# deepseek-super-agent progress

## Status
Uploaded to the owner's channel as private on 2026-11-21 (`published.json`); it can't go public through the API until Google's API audit passes.

## Next
1. Owner decides how this video goes public: wait for the API audit (see `upload/progress.md` on the `upload-feature` branch), or upload `video.mp4` once by hand in YouTube Studio.
2. Owner looks at `thumbnail.png`; if approved, set it on the video (YouTube Studio > Details > Thumbnail, or build the spec's thumbnail step in `yt upload`).
   Rebuild it with `python film/thumb.py thumbnail.png` (same venv as the film).
   Still not done: captions. The title is 65 characters, so desktop search cuts it near 60 (`yt-package/title.py` score 80/100); a shorter title is the owner's call.
3. Rebuild from git if needed: `make skills`, venv as `make skills` prints, `python .claude/skills/stickman/scripts/new_film.py <tmp>`, copy its engine files into `film/`,
   `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align`, then `build.py film --out deepseek-super-agent.mp4` from this folder.
4. After PR #2 merges, a repo-level follow-up: `docs/progress.md` (Episode 0 done) and the `docs/product.md` non-goal "research proposes a ranked shortlist, the owner picks".
5. Owner merges PR #3.

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
- 2026-11-20: Cut 2, because the owner found cut 1 slow, heard white noise, and wants a strong hook and a story everyone knows (now in `docs/product.md`).
  Story: Napoleon could not shout at 100,000+ soldiers, so his chief of staff Berthier turned his wishes into written orders for the corps.
  Mapping: you = the general, router agent = Berthier, worker = a corps, ticket = orders. History facts are sourced in `research.md`.
- 2026-11-20: Sound is voice plus sampled effects only. Cut 1's `room_bed` and `drone` measured -30 to -35 dBFS between lines; cut 2 is digital silence there.
- 2026-11-20: Voice speed 1.2 (174 wpm, 57.3 s) and voice laid in at .3 s, so the film is 59 s. `script.txt` blank lines (0.95 s pauses) only before "Napoleon's fix" and "It is an open-source".
- 2026-11-20: `script.txt` spells Berthier as "Bairtyay" for the voice; `script.md` keeps the real spelling for captions.
- 2026-11-20: Cut 3, because the owner liked the content but wants instrumental background music and an insightful conclusion instead of the how-to terminal screen.
  The `how` section became `takeaway` ("the limit was never the soldiers, it was the general's attention; now that general is you"); the setup link moves to the description.
  The spoken "Next time" line is gone; "Next" is an on-screen card only, so the last spoken line is the insight.
- 2026-11-20: Music is the stickman skill's code-made bed (`m.music(mood="hopeful", bpm=96)`, gain 1.4), because stock tracks can't be licence-checked here; measured 16 dB under the voice. A supplied MP3 would go through `m.music_file`.
- 2026-11-20: Cut 4, because the owner asked for a call to action at the end: spoken "Subscribe for the next one." plus a Subscribe button on screen.
  To stay at 60 s, the pause before the takeaway is a line break (0.5 s) instead of a paragraph break (0.95 s); only the last five shots were retimed.
- 2026-11-21: Thumbnail drawn from code with the film's rig (`film/thumb.js`), not an AI image generator, because the product renders visuals from code.
  Idea: the general, shocked, in front of an army whose heads are screens asking "?". Text "YOU'RE THE BOTTLENECK." (3 words, a verdict about the viewer, different words from the title).
  Rules applied (stickman packaging playbook + `yt-package`): one idea, three elements, big face with an exaggerated expression, dark ground with one light,
  text top-right in heavy caps with one accent colour, nothing important bottom-right (duration badge), checked readable at 160 px wide.

## Answers for the specs (Episode 0's open questions)
- episode Q1 (brief fields): the draft fields were enough; `claims[].source` per claim worked. Nothing was missing.
- episode Q2 (voice pace): Kokoro am_michael at speed 1.1 = 2.7 words/s; 159 words = 58.5 s. 135-165 words holds.
- diagram Q (can the engine show an image?): not needed. The diagram was drawn as canvas code inside film.js (`drawBoard`, nodes/edges from brief.json by hand),
  so the `diagram` feature should emit film.js-compatible draw code or data for it, not an SVG file.
- Engine lesson: `setLineDash` strokes render non-deterministically in headless Chromium (audit failure); draw dashes as filled rects.
- Engine lesson: a diagram shot that starts mostly empty fails the 0.2 motion floor; move the camera across it.
- Engine lesson: any camera move across a dense, high-contrast crowd trips the audit's pop check (mean frame difference over 6) and can strobe.
  What fixed it: a haze gradient over the far rows (`source-atop`), softer detail colours, and zooming instead of panning.
- Engine lesson: a state change timed just before a cut shows as a one-frame pop; time it on the cut frame (frame / 30).
- Engine lesson: hats and props for a character can be drawn after `actor()` by repeating the head transform (`bicorne` in film.js), so the engine copy stays untouched.
- episode Q2 update: at speed 1.2 the voice does 2.9 words/s; 170 words = 57.6 s, so the spec's 135-165 word limit is too low for this voice.
- For the specs: the owner replaced the `how` section with `takeaway` (see `docs/product.md` format table); `docs/specs/episode.md` and `shared/brief` should use hook/before/new/why/takeaway/outro.
- Engine lesson: a caption card must finish fading before its shot's cut, or it bleeds into the next shot.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-20 ep-super-agent: research (primary repo docs + press), brief.json, script.md, voice, film.js (studio + side-by-side diagram), rendered 60 s; audit 0 issues after fixing a stillness window and a dashed-line determinism bug.
- 2026-11-20 ep-super-agent: cut 2 after owner feedback: new script (Napoleon and Berthier), 24 shots, battlefield set, noise beds removed, `docs/product.md` gets the story/hook/pace/sound rules; audit 0 issues.
- 2026-11-20 ep-super-agent: cut 3 after owner feedback: instrumental music, how-to ending replaced by the insight ending, caption timing fixed; `docs/product.md` format table updated; audit 0 issues.
- 2026-11-20 ep-super-agent: cut 4: call to action at the end (voice + Subscribe button); audit 0 issues.
- 2026-11-20 ep-super-agent: `upload.json` written; final cut copied to `video.mp4` for `yt upload`.
- 2026-11-21 ep-super-agent: uploaded as private with `yt upload --confirm` (video id in `published.json`).
- 2026-11-21 ep-super-agent: thumbnail made (`thumbnail.png`, 1280x720, 614 KB) from `film/thumb.js`; not yet set on the video.
