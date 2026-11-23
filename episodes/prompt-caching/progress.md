# prompt-caching progress

## Status
steps 1-3b done and the script cut to fit (voice 57.8 s draft, claims re-checked); step 4 make next

## Next
1. Follow docs/workflow.md: 1 research (research.md, brief.json), 2 promise (package.md), 3 script (beats.md, script.md), 4 make (video.mp4, thumbnail.png), 5 finish (captions.srt, upload.json), 6 judge by another agent (evaluation.md), 7 owner approves.

## Blockers
- Owner decision (L24): the Subscribe card's wording. `docs/brand.md` wants the next episode's name under the button; `docs/workflow.md` step 4 says "Next in 60 seconds". The daily run never knows the next episode, so this one says "NEXT IN 60 SECONDS".

## Decisions
- 2026-11-23 (step 1): premise holds on both makers' docs (Claude and OpenAI prompt-caching pages, fetched with curl). Not a new release, so no "just dropped". Counted example 30 questions about one 100-page PDF; meter counts full-price PDF reads (PDF part of the input only), 30 before vs 4.15 now = 1.25 + 29 x 0.1, our arithmetic on both makers' standard rates; the quoted proof is OpenAI's "2.15x compared with 10x" for ten requests.
- 2026-11-23 (step 2): title "Prompt Caching: Stop Paying Full Price for 1 PDF 30x" (52 chars, 98 alone, 70 with the brand card, by-design issues only), after the claim check ruled "Stop Paying for 1 PDF 30 Times" narrower.
- 2026-11-23 (step 3): hook "Prompt caching means you stop paying full price for the same 100-page PDF thirty times when you ask your AI thirty questions, but how?" 73 STRONG, topic name as the first spoken words (L14 repeated) and no Before/After frame (L25). Story: a student re-reading the whole book for every question.
- 2026-11-23 (step 3b): fresh Sonnet claim check: 12 holds, 7 narrower, 0 wrong; all fixed in the words before voicing (`claims.md`, "Fixes applied").
- 2026-11-23 (step 3, cut): the first real voice ran 67.28 s (190 spoken words, 16 line gaps), so the maker stopped. Cut to 155 words ("Here's how" for the turn, "the document" for most spelled-out "P D F"s, the how's "saves its work" sentence folded into the now beat, each section on one line to drop 0.5 s line gaps); every claim-check qualifier kept (full price, by default, about a tenth on most models, usually, our math, unused ... can fade). Draft voice 57.79 s (ends 58.09 s film). A fresh Sonnet re-check of the 9 changed sentences: all hold (`claims.md`, "Re-check after the cut"). beats.md re-mapped to 29 shots (0-28).

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-23 daily run: steps 1-3b: research.md, brief.json, package.md, beats.md (hook 73, 31 shots), script.md (177 words), film/script.txt, claims.md (7 narrower fixed before voicing), mistakes.md.
- 2026-11-23 daily run: step 4 started: film/ engine copy, tts.py gave voice 67.28 s, over the limit; stopped and handed back before film.js (no picture, no sound, no thumbnail, no step 5).
- 2026-11-23 daily run: step 3 cut to 155 words after the 67.3 s voice; draft voice 57.79 s; changed sentences re-checked (9 hold); beats.md 29 shots.
