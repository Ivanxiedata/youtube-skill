# gpt-6-think-while-answering progress

## Status
not ready: 1 must-fix (re-judge 2026-11-26: two summary lines in beats.md kept ruled-out wording; fixed after the re-judge, not yet re-judged)

## Next
1. A fresh judge in re-judge mode (`docs/roles/evaluator.md`, "Re-judge") checks row 12 only: `beats.md` lines 49 and 51 ("The parts, in one line each") now say "finished thinking first" and "OpenAI's internal test on everyday agent tasks"; `grep -rin "searches and thinks\|searched and thought\|no longer delays\|fast mode" episodes/gpt-6-think-while-answering` should hit only gate*.md, claims.md, mistakes.md and evaluation.md (records). If it passes, the first line of `evaluation.md` becomes `ready to publish`.
2. Optional should-fix (row 20, L48): text scales in from 0.7-0.92 (about 31-42 px) in shots 3, 9, 16-17 and in every `lab()` entrance; bring the text in at full size and scale only its card, then `build.py film --out film.mp4 --shots 3 9 16 17` (plus any shot using `lab()` with an `a:` entrance).
3. Owner watches `video.mp4` (pronunciation of "GPT six", "ChatGPT" is for the ear) and approves; `yt upload episodes/gpt-6-think-while-answering` (dry run, then `--confirm`).

## Blockers
none (the daily run allows 1 fix round; it was used)

## Decisions
- 2026-11-26: premise holds in OpenAI's own pages (announcement October 7, 2026 and the release notes): ChatGPT with GPT-6 can begin answering while it continues to think or use tools; 44% sooner start for web-search questions on GPT-6 Instant vs GPT-5.6 Instant; Extra High starts as soon as GPT-5.6 Medium in an internal test.
- 2026-11-26: story is a diner (a robot chef with a screen head = ChatGPT, plates = parts of the answer), because plates sliding out while the chef still thinks make "answers while it thinks" visible, and it reuses the restaurant look of claude-fable-mythos.
- 2026-11-26: counted example "one web-search question: our 10-second wait on GPT-5.6 Instant becomes about 6 on GPT-6 Instant" (10 x 0.56), marked "our example" and "not OpenAI's seconds", because OpenAI gives only the percentage; the meter counts OpenAI's own unit, time until it starts answering (L84).
- 2026-11-26: line 1 re-voiced with the same words (a new take, 7.61 s) rather than cutting gate- and claim-checked words, because the first take ran 8.97 s while the draft of nearly the same words took 6.85 s.
- 2026-11-26: "wait" means only the time until it starts answering (gate round 1); the takeaway names the 44%'s base, GPT-5.6 Instant (gate round 2); "can start", "needn't delay", "internal", "Instant setting" (claim check).

## Log
- 2026-11-26 daily run: research (2 OpenAI pages, curl), package, lesson plan, script; content gate failed rounds 1 (4 must-fix) and 2 (1 must-fix), passed round 3 (1 should-fix applied); claim check 10 narrower of 33, all fixed in the words; full voicing started.
- 2026-11-26 daily run: make (Sonnet): 19 shots, build 1 ISSUES 0, one audio-only remix (MUSIC_DB -14.3, gap 16.0 dB); line 1 ran 8.97 s (L46), re-voiced with the same words to 7.61 s, all cuts re-timed and build 2 ISSUES 0 (55.4 s, -17.0 LUFS, 100% of cuts with a sound within 100 ms); judge round 1 not ready (2 must-fix: OUR EXAMPLE label after the 10 in shot 16; ruled-out phrases in lesson.md); fixed (words by the writer, shots 16-17 by a Sonnet maker, build 3 ISSUES 0); re-judge not ready (1 must-fix: beats.md summary lines), fixed after the re-judge, unjudged.
