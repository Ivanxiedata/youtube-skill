# copilot-workspaces progress

## Status
ready to publish (judge round 1: 0 must-fix, 2 should-fix); waiting for the owner

## Next
1. Owner watches video.mp4 and thumbnail.png, listens to "Copilot Workspaces", "Frontier" and "copy-pastes", then says ship it (step 7).
2. Optional should-fixes from evaluation.md: S2 (words) in upload.json, drop ": you stay the one who decides" from the "How it works, per Microsoft" paragraph; S1 (picture) in film/film.js shot 13, bring the mascot in by scale or on the cut instead of the box's alpha fade, then `build.py ... --shots 13` only, re-run the audit, look at shot 13's still. Then a re-judge of rows 9, 12, 14-19 (and 1, 2, 4, 20 for upload.json).
3. film/ build output is gitignored: to re-render, scaffold with new_film.py in scratch, re-voice film/script.txt with tts.py, fetch the music (scripts/music.py), then build.py.

## Blockers
none

## Decisions
- 2026-11-24: story = a video game, single player vs multiplayer, because Microsoft's own words are "Until now, AI interactions have mostly been single player" and "a truly multiplayer experience" (research.md rows 1, 2, 12); mascot in a gaming headset.
- 2026-11-24: counted example (ours) = a 4-part team plan by a team of 4; meter "YOUR COPY-PASTES · OUR EXAMPLE" 4 before, 0 now, because the topic's before is copying a solo chat's answer into a shared document, and Microsoft gives no number for Workspaces.
- 2026-11-24: the proof is Microsoft's own sentence (quote card), not a number, because neither Microsoft post gives a Workspaces number; the Cowork/Lilly numbers were left out as they are about another product.
- 2026-11-24: title changed after the claim check to "Copilot Workspaces (Early Access): 1 Space for You + Agents", because the first title stated the feature without its Frontier/early-access condition (claims.md row 39).
- 2026-11-24: the hook kept at 72 and 8.83 s, because every shorter version dropped "in early access" or scored under 72, and the turn still starts at 9.83 s.
- 2026-11-24: the 2 should-fixes left for the owner, because the run's fix round is for must-fix rows only.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-24 develop (daily run): steps 1-3b: research.md (Microsoft Copilot Blog, Nadella keynote post, Frontier page), brief.json, package.md, beats.md, script.md, film/script.txt (139 words, draft voice 55.14 s), claims.md (45 rows, 7 narrower fixed, 0 wrong), mistakes.md.
- 2026-11-24 daily run (steps 4-5, maker): voiced (55.14 s, laid in at 0.5 s), film.js with 22 shots cut to vo_lines.json and the measured pauses (shot 0 ends at 2.0 s inside the 1.80-2.20 s pause), stills of all 22 shots fixed in one round, one full build (ISSUES 0), no shot re-rendered; video.mp4 57.0 s, -17.0 LUFS, true peak -4.0 dBTP, music 16.6 dB under the voice as mixed, 75% of cuts with a sound within 1 frame; thumbnail.png, captions.srt, upload.json (4 chapters, 13 tags).
- 2026-11-24 develop (daily run): step 6: judge (opus) ready to publish, 0 must-fix, 2 should-fix (shot 13 mascot fade, one description clause); mistakes.md current.
