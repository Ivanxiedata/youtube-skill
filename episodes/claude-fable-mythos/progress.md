# claude-fable-mythos progress

## Status
ready to publish (re-judge 2026-11-25, 0 must-fix, 3 should-fix left for the owner)

## Next
1. If `evaluation.md` says `ready to publish`: owner watches `video.mp4` and listens (pronunciation of "Mythos", "Opus" is for the owner's ears), then `yt upload episodes/claude-fable-mythos` (dry run, then `--confirm`).
2. If it says `not ready`: fix the rows it lists (words: `film/script.txt`, `script.md`, `viewer.md`, `beats.md`, `lesson.md` together; picture: `film/film.js`, then `build.py --shots <n>` for the changed shots only), then a fresh re-judge (`docs/roles/evaluator.md`, "Re-judge").
3. The learn job turns `mistakes.md` rows into lessons (new: the topic's name and the hook are one spoken sentence; the corner tag sits inside the safe area; when a number says a safeguard stops less, say it is just as strong; use one word for one thing).

## Blockers
none

## Decisions
- 2026-11-25: premise holds in Anthropic's own pages (same underlying model; classifiers; fallback to Opus 4.8 / Opus 5; about 55% fewer blocks than Fable 5.1 in early testing), so the episode was made. The planner's "55% fewer unnecessary blocks" is narrower in the source ("fewer blocks"), so the video says "blocked about 55% fewer requests".
- 2026-11-25: story is a restaurant counter (robot chefs with screen heads = models, a teal gate = the separate checker, order tickets = requests), because tickets make "each request is checked" countable and L3 asks for an everyday story.
- 2026-11-25: counted example "10 requests: before all 10 on a weaker model; now 9 on the full model, 1 blocked to older Opus", marked "our example" everywhere, because Anthropic gives no per-request rate for 5.2.
- 2026-11-25: "blocked" is the one word for what the checker does (gate round 1), "attack code" instead of "exploit" (gate round 2), "same underlying model" (claim check), title "Claude Fable 5.2: Mythos 5.2 Underneath, Plus a Checker" (claim check ruled "Same Model" narrower).
- 2026-11-25: "MYTHOS 5 (JUNE): CYBER CHECKS LIFTED" is dated because only the June Mythos 5 page says it (judge round 1 M4).

## Log
- 2026-11-25 daily run: research (5 Anthropic pages, curl), package, lesson plan, script; content gate failed round 1 (3 must-fix), passed round 2 (3 should-fix applied); claim check 15 narrower of 48, all fixed in the words; make (Sonnet): audit ISSUES 0 after one re-render; judge round 1 not ready (6 must-fix); words fixed by the writer, picture and voice by a Sonnet maker (ISSUES 0, 56.4 s, -17.0 LUFS); re-judge.
- 2026-11-25 daily run: re-judge ready to publish (0 must-fix; should-fix: shot length L1, inset spacing in shot 8, some labels under 44 px).
