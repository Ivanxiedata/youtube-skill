# antigravity-orchestrator progress

## Status
not ready: 2 must-fix at the re-judge (both fixed afterwards, unconfirmed by a judge); video.mp4 and thumbnail.png made, audit ISSUES 0

## Next
1. Owner or a fresh judge (docs/roles/evaluator.md, "Re-judge"): re-check row 12 (research.md line 80 now matches claims.md #26: `grep -i "both models' quota" research.md` is empty) and row 20 (upload.json description is 4975 bytes, under 5000); if both pass, the first line of evaluation.md becomes `ready to publish`.
2. Optional should-fixes (evaluation.md): hook scores 54 (row 5); no turn sentence by 10 s (row 8, L46: needs a re-voice of lines 1-2); labels 30-40 px in shots 3-15 (meter "OUR EXAMPLE" 38 px, "MODEL DROPDOWN" 34 px, "WAS 10" 30 px); "4.1" in the shots 17-18 header (only if it is also spoken, L71).
3. Owner watches and listens (pronunciation of "Anti-gravity", "Gemini four"), then `yt upload` (dry run first).

## Blockers
none

## Decisions
- 2026-11-25: told the Carbon + Hydrogen pairing (Google's launch example and the one its Terminal-Bench numbers are for); today's default planner on Pro/Ultra (Gemini 4 Neon) is on screen as "PLANNER: CARBON HERE · YOU CAN PICK ANOTHER" and in the description.
- 2026-11-25: kept a hook scoring 54 (WEAK) because every higher-scoring draft broke a gate or claim-check rule (credit to Google, said belief, the "on its test" condition, or the word budget); the score is a check, not the target.
- 2026-11-25: counted example = one task in 10 steps (a wall of 10 bricks); meter "STEPS ON CARBON · OUR EXAMPLE" 10 -> 2; shot 18 says "OUR 10 STEPS ARE AN EXAMPLE; 24% IS FOR THE WHOLE RUN" so the step count isn't read as Google's quota number.
- 2026-11-25: "Terminal-Bench" without "4.1" on screen and in the voice, because every number on screen must be spoken (L71) and the voice budget was full; 4.1 is in the description.
- 2026-11-25: after the re-judge (the run's only fix round used) the two remaining must-fixes were fixed mechanically but evaluation.md was left as the judge wrote it, because only a judge may change its first line.

## Log
- 2026-11-25 daily run: research.md, brief.json, package.md, lesson.md, beats.md, script.md, viewer.md; content gate passed in round 3 (gate.md); claim check 27 hold / 12 narrower / 0 wrong, all fixed (claims.md).
- 2026-11-25 daily run: voice (55.4 s), film (23 shots, 57.4 s, 1080x1920, audit ISSUES 0, -17.0 LUFS, 86% of cuts with a sound within a frame), thumbnail, captions.srt, upload.json (Sonnet subagent).
- 2026-11-25 daily run: judge round 1 not ready (3 must-fix, L26); fix round (shots 17-19, thumbnail, research.md line 59, upload.json quote); re-judge not ready (2 must-fix: research.md line 80, description 5026 bytes); both fixed after, unconfirmed.
