# chatgpt-space-live-pages progress

## Status
ready to publish (judge round 1: 0 must-fix, 3 should-fix); waiting for the owner

## Next
1. Owner watches video.mp4 and thumbnail.png, then says ship it (step 7).
2. Optional should-fixes from evaluation.md: hold the title card to about 1.9 s (re-render shots 0 and 1); fill the NOW plan's rows teal in shot 21 (`drawP` in film/film.js, re-render shot 21); swap the third search in package.md for one the title covers ("chatgpt slack"). Then a re-judge of rows 3, 4, 9, 14-19.
3. film/ build output is gitignored: to re-render, scaffold with new_film.py in scratch, re-voice film/script.txt with tts.py, fetch the music, then build.py.

## Blockers
none

## Decisions
- 2026-11-23: story = an old hand-turned scoreboard vs a page wired to Slack; counted example 12 Slack decisions, meter "COPIED BY HAND" 12 vs 0, because OpenAI's own example is "a project plan that stays current with decisions from Slack" and gives no number.
- 2026-11-23: hook 72 over the 75 runner-up, because the runner-up drops "set it to" (pages update only once set, research.md narrowing).
- 2026-11-23: the 3 should-fixes left for the owner, because the run allows one fix round for must-fix rows only and a picture change needs a re-judge.
- 2026-11-23: proof is OpenAI's own words, not a number, because the maker gives no speed or time-saved figure.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-23 develop (daily run): steps 1-3b: research.md, brief.json, package.md, beats.md, script.md, claims.md (3 narrower fixed), mistakes.md.
- 2026-11-23 develop (daily run): steps 4-6: video.mp4 (58.5 s, audit ISSUES 0 first build, -17.0 LUFS), thumbnail.png, captions.srt, upload.json, music.json; judge (opus): ready to publish, 3 should-fix; mistakes.md current.
