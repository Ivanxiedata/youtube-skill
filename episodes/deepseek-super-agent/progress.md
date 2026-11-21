# deepseek-super-agent progress

## Status
Cut 5 is on YouTube as private with captions (`published.json`). The local `video.mp4` is newer: same picture, new music ("Blue Sky", CC0); not uploaded. 1 must-fix left, for the owner (thumbnail: channel unverified).

## Next
0. Owner decides whether to upload the newer `video.mp4` (new music) again; it would be a third video on the channel, so the two older ones should be deleted in Studio.
1. Owner: verify the channel at https://www.youtube.com/verify, then set `thumbnail.png` on the video in YouTube Studio (the API refused it).
2. Owner: delete the first upload in YouTube Studio (cut 4, video id `CYSE9zRA4Xg`, private); the current video is in `published.json`.
3. Owner: listen to the music and voice; confirm or change the title the agent picked ("Why You Can Only Run 5 AI Agents (Napoleon's Fix)").
4. Going public: the API project is unaudited, so this upload may be locked private (see `upload/progress.md` on `upload-feature`); uploading `video.mp4` by hand in Studio is the other way.
5. Rebuild from git if needed: `make skills`, venv as `make skills` prints, `python .claude/skills/stickman/scripts/new_film.py <tmp>`, copy its engine files into `film/`,
   `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align`, then `build.py film --out deepseek-super-agent.mp4` from this folder; thumbnail: `python film/thumb.py thumbnail.png`.
6. Owner merges PR #3.

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
- 2026-11-21: Thumbnail v2, because the owner rejected v1 ("YOU'RE THE BOTTLENECK." over a shocked general) as too generic: a viewer couldn't tell the topic.
  Owner's rule: the thumbnail must show what the viewer will learn. So the headline is the topic (DEEPSEEK SUPER-AGENT) and the picture is the lesson:
  YOU (the general) -> ROUTER (the chief of staff) -> AI WORKERS (soldiers with screens for heads). This overrides the guides' "don't repeat the title" and "3 words" rules.
  Kept from the guides: big face with a readable emotion, dark ground with one light, heavy caps with one accent colour, checked at 160 px wide, bottom-right left unimportant.
- 2026-11-21: Thumbnail v3, because the owner found v2 (topic headline + YOU -> ROUTER -> AI WORKERS chain) not attractive: it must sell a promise, e.g. "learn Super Agent under 60 seconds",
  and the channel must be a brand, not generic videos. v3 follows the brand thumbnail template (`docs/brand.md`, PR #4): "LEARN <TOPIC> IN 60 SECONDS" with the red sticker, the mascot in the episode's costume, one picture of the lesson.
- 2026-11-21: Evaluated by hand with the youtube-agent tools (`evaluation.md`), because the owner asked for evaluation and feedback and nothing had been scored before upload. The `evaluate` and `feedback` features are specced from this run (PR #4).
- 2026-11-21: Cut 5, on the owner's go, fixes the three must-fix rows of the first evaluation: (1) the hook speaks to the viewer ("You can only babysit five AI agents before you are the bottleneck."),
  (2) the topic is spoken by 7 s and a corner tag "DeepSeek Super-agent · 60s" sits on every frame, (3) the brand elements of `docs/brand.md` are in the video.
  The film now opens in the studio (the viewer's problem) and then goes to Napoleon; only the first 16.6 s were re-voiced, by laying the voice in at 0.08 s so every later line keeps its time.
- 2026-11-21: Title changed by the agent to "Why You Can Only Run 5 AI Agents (Napoleon's Fix)" (84/100 next to the thumbnail), because the thumbnail now carries the topic and the old title was cut off in search; the owner can overrule it in Studio.
- 2026-11-21: Uploaded a second time (`--again`) instead of editing the first upload, because `yt upload` can't replace a video's file; the first upload (`CYSE9zRA4Xg`) is left for the owner to delete.
- 2026-11-21: Music changed from the stickman code-made bed to a real track, because the owner asked for music chosen through Openverse and earshot found no beat in the old bed.
  `python scripts/music.py search` (PR #4) gave 7 CC0 / CC BY candidates; earshot ranked them and checked none has vocals; "Blue Sky" by Sergmusic was picked over the slightly better-fitting "Upbeat Corporate" (CC BY 3.0, Jamendo) because CC0 needs no credit and carries no claim risk. Source, licence and sha256: `music.json`; the mp3 is not in git (`python scripts/music.py get <id> film/music.mp3`).
  Openverse's API exposes no play counts, so "most popular" could not be measured: candidates came from the top of its own ranking.
- 2026-11-21: The sound was judged by listening with earshot (installed in the `brand-evaluate-feedback` worktree, PR #4), not only by loudness numbers.

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
- 2026-11-21 ep-super-agent: thumbnail made (`thumbnail.png`, 1280x720) from `film/thumb.js`; v2 names the topic and shows YOU -> ROUTER -> AI WORKERS; not yet set on the video.
- 2026-11-21 ep-super-agent: thumbnail v3 (promise + brand sticker), `evaluation.md` scorecard, `captions.srt`, description first lines, hashtags and tags fixed in `upload.json`.
- 2026-11-21 ep-super-agent: cut 5 (new hook and opening, corner tag, brand ending) rendered, audit 0 issues; uploaded as private with captions; thumbnail refused by YouTube (channel not verified); `evaluation.md` redone.
- 2026-11-21 ep-super-agent: music replaced with "Blue Sky" (CC0, via Openverse), mixed 16 dB under the voice (audio-only rebuild, audit 0 issues); sound rows of `evaluation.md` redone with earshot; credit added to `upload.json`. Not uploaded.
