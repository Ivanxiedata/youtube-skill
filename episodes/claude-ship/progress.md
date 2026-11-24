# claude-ship progress

## Status
ready to publish (judge round 1: 0 must-fix, 2 should-fix); waiting for the owner

## Next
1. Owner watches video.mp4 and thumbnail.png, listens to "P R", "A I" and "harbor", then says ship it (step 7).
2. Owner decides the casting note in evaluation.md: the harbour master who approves (shot 8) is brown, the mascot cream.
3. Optional should-fixes from evaluation.md: change the thumbnail picture's words ("POLICY FILE", "PR", "APPROVED" repeat title words; re-render thumb only), and fix shot 12's entrance (the CLAUDE APPROVALS robot rises with its desk bar across its face for about 0.7 s: draw order in `drawX`; re-render shot 12 only). Then a re-judge of rows 2, 3, 9, 14-19.
4. To re-render: film/ build output is gitignored; scaffold with `new_film.py` in scratch, copy film.js, audio_mix.py, thumb.js, thumb.py, script.txt, vo_lines.json from here, re-voice film/script.txt with `tts.py`, fetch the music, then `build.py`.

## Blockers
none

## Decisions
<!-- - YYYY-MM-DD: decision, because why -->
- 2026-11-24: shot 0 ends at 1.3 s, inside the measured pause after "Claude Ship" (voice 0.53-1.01 s, film 1.03-1.51 s), not on an estimated word time (L36).
- 2026-11-24: the 3 problems are 3 amber patches on the boat's sail (not on the hull), because the labels FAILING CHECK / MERGE CONFLICT / REVIEW COMMENT must be at least 28 px tall and a hull row was too narrow; in small boats (X diagram, WHAT WE LEARNED) the patches have no text.
- 2026-11-24: the robot's wrench stays held up and a thin teal beam reaches the active patch, because an arm reaching the sail is out of the rig's reach; in shot 5 the CODE REVIEW robot holds one comment bubble on the REVIEW COMMENT patch only (claims.md row 22).
- 2026-11-24: the harbour master is a brown tone and the two approvers in shot 15 are dark and tan, the mascot cream, so no tone maps to rank.
- 2026-11-24: the meter falls from 4 to 0 inside shots 2-3 (patches turn teal, stamp lands) and is 0 at shot 4, then restarts at 0 in BEFORE; the NOW shots hold 0 in teal. One shared label in WHAT WE LEARNED (40 px).
- 2026-11-24: the how diagram uses "EXAMPLE POLICY" as a tag on the rulebook (visible in shots 13-15) and the label "BILLING CODE: CAN NEED 2 PEOPLE" (claims.md rows 32, 34).
- 2026-11-24: cut sounds: both `cut` and `cut2` use the "cloth2" brush 110 ms before the cut (gain .15); earshot timeline: 65% of 20 cuts within 1 frame, 100% within 100 ms.
- 2026-11-24: story = a harbour (the PR a boat, PR Steward a dock robot, the policy file the rulebook); counted example 1 routine docs-fix PR with 1 failing check, 1 conflict, 1 comment, 1 approval to chase; meter "TIMES YOU STOP YOUR NEXT TASK" 4 vs 0, because Anthropic's own before is the developer stopping to fix and then finding an approver.
- 2026-11-24: proof is Anthropic's "merged PRs more than doubled" with its conditions (Claude Code team, Claude's review one layer, June to September); the 40% reverts left out (one number is enough).
- 2026-11-24: the 2 should-fixes left for the owner, because the run's fix round is for must-fix rows only.
- 2026-11-24: chapters at 0:00, 0:18, 0:29, 0:41 (the tool's boundaries; moving 0:29 to 0:25 would leave a 7 s chapter).

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-24 develop (daily run): steps 1-3b: research.md, brief.json, package.md, beats.md, script.md, claims.md (4 narrower fixed), mistakes.md.
- 2026-11-24 daily run (steps 4-5, maker): voiced (52.97 s, laid in at 0.5 s), film.js with 21 shots cut to vo_lines.json and the measured pauses, one full build (ISSUES 724: the mascot's typing hand and one raised hand out of reach, one pop in shot 13), fixes and a re-render of shots 1-7, 9-11, 13, 19 (ISSUES 0), audio-only remix for the cut sounds, video.mp4 55.0 s, -17.0 LUFS, thumbnail.png, captions.srt, upload.json (4 chapters).
- 2026-11-24 develop (daily run): step 6: judge (opus) ready to publish, 0 must-fix, 2 should-fix (thumbnail picture words repeat the title; shot 12 desk over the robot's face); mistakes.md current; upload.json and research.md: dropped an unsourced "before PR Steward and Claude Approvals launched".
