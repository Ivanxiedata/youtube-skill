# claude-sheets-v2 progress

## Status
published: https://youtu.be/a0y6afRTBLc (public, 2026-11-27); next: comments at 48 h, retention at 7 days

## Next
1. Owner watches video.mp4 (55.65 s, vertical) and listens for pronunciation ("Claude Sheets", "twenty twenty-six", "A I"), then `yt upload episodes/claude-sheets-v2` (dry run first).
2. Owner decides the corner tag's red "60s" pill (judge should-fix: L88's wording vs Episode 0's brand tag); if it changes, change it in the template for every episode.
3. After publishing: /yt-comment at 48 h, /yt-retention at 7 days.

## Blockers
none

## Decisions
- 2026-11-27: the story is the math teacher's "show your work" (Pima County Library post, research.md S1-S5), because its mechanism matches: an answer alone hides the step, a formula is the written step, a skipped quarter is the skipped step (G13, L3).
- 2026-11-27: the homework page is never handed in by the robot; it is tagged "LIKE OUR PASTED TABLE", because claude-sheets' judge ruled the "answers only" analogy must stay on our pasted table.
- 2026-11-27: the takeaway says "they can be formulas you check", because no source says Claude writes every total as a formula (claims.md row 16).
- 2026-11-27: the re-voiced line 4 was voiced alone (its voice_parts file removed), because its last 50 ms were at -9.1 dB (L73); all later cuts moved 0.95 s.
- 2026-11-27: gate round 3's optional S2 (+3 words on line 4) skipped, to keep margin under the 157.5-word cap.

## Log
- 2026-11-27 daily run: research (launch post, help page, library post for the story), package, lesson, beats, script; content gate pass in round 3 (2 should-fix); claim check 41 claims, 6 narrower, all fixed in the words; full voicing started.
- 2026-11-27 daily run: make by a Sonnet maker (21 shots from the claude-sheets film, audit ISSUES 0, 2 builds); voice line 4 had a stray tail (-9.1 dB), re-voiced alone, shots 7-20 re-rendered by a second Sonnet maker; writer's still check fixed shot 3 (hand on the desk, pointer across the face); finish by Sonnet (captions from pauses.json, upload.json 3430 bytes), two description sentences reworded by the writer.
- 2026-11-27 daily run: judge round 1 not ready (2 must-fix: ruled-out stems left in research/beats/package, a general inference in research.md; 4 should-fix); fixed (words, shot 4 re-rendered, ISSUES 0); re-judge: ready to publish (1 should-fix for the owner: the red "60s" tag pill). Stem sweep after the fix: `grep -rniE "your math teacher|totals are formulas|holds values|they're formulas|mistakes show!|FORMULAS YOU CAN CHECK"` -> only records (claims.md, mistakes.md, gate files with their notes).
- 2026-11-27 published: the daily run's upload failed (invalidDescription: "Organization settings > Artifacts"; fixed in upload, PR #47); video and files restored from the Drive copy, thumbnail re-rendered with the 9:16 template (`scripts/thumbnail/`, story picture: a worksheet with the work shown), uploaded public by hand: https://youtu.be/a0y6afRTBLc
