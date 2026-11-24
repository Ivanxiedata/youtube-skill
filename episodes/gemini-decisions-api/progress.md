# gemini-decisions-api progress

## Status
ready to publish (judge round 1: 0 must-fix, 4 should-fix); waiting for the owner

## Next
1. Owner watches video.mp4 and thumbnail.png, listens to "A P I", "Flash-Lite" and "three point five", then says ship it (step 7).
2. Optional should-fixes from evaluation.md: shift the cut brushes in film/audio_mix.py about 45 ms earlier and add a sound at 7.30 s (audio-only rebuild, re-run `earshot timeline`); bring shot 18's "ON GOOGLE'S SHARED BENCHMARK SUITE" line in with the bars and move its card down off the corner tag; enlarge shot 19's meter labels (re-render shots 18 and 19 only). Then a re-judge of rows 9, 12, 13, 14-19.
3. film/ build output is gitignored: to re-render, scaffold with new_film.py in scratch, re-voice film/script.txt with tts.py, fetch the music, then build.py.

## Blockers
none

## Decisions
<!-- - YYYY-MM-DD: decision, because why -->
- 2026-11-24: story = an essay exam vs one bubble answer sheet; counted example 1 insurance claim and 20 questions (inside Google's own "scanned PDF claim with damage photos"); meter "TIMES YOU SEND THE CLAIM" 20 vs 1, because Google's point is one shared input billed once for up to 1,000 questions.
- 2026-11-24: proof is Google's "nearly 5x cheaper" with both its conditions (shared benchmark suite, vs Gemini 3.5 Flash-Lite with the Interactions API); latency left out because it needs two more conditions.
- 2026-11-24: facts from Google's blog post only, because the API docs page renders with JavaScript and curl got nothing.
- 2026-11-24: the 4 should-fixes left for the owner, because the run's fix round is for must-fix rows only.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-24 develop (daily run): steps 1-3b: research.md, brief.json, package.md, beats.md, script.md, film/script.txt, claims.md (11 narrower fixed), mistakes.md.
- 2026-11-24 daily run (steps 4-5, maker): voiced (56.81 s, laid in at 0.5 s), film.js with 22 shots cut to vo_lines.json and the measured pauses, one full build (ISSUES 0), shots 11, 13, 16, 19 re-rendered after still fixes (ISSUES 0), video.mp4 58.8 s, -17.0 LUFS, thumbnail.png, captions.srt, upload.json (4 chapters).
- 2026-11-24 develop (daily run): step 6: judge (opus) ready to publish, 0 must-fix, 4 should-fix; mistakes.md current.
