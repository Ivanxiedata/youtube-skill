# claude-dreaming progress

## Status
stopped at the content gate: 3 rounds failed (last: 1 must-fix in lesson.md, since applied); not voiced, not drawn; owner decides

## Next
1. Owner: accept the gate with the applied round-3 fix (Q3's key in `lesson.md`), or run one more fresh critic in re-gate mode on that one change (`docs/roles/content-gate.md`, "The loop").
2. Optional, owner's call: apply round 3's should-fix to line 4 of `film/script.txt` and `viewer.md` ("... three drops off a ledge, back the way it came.", +3 words, 129 total), then re-quote Q1, "Why it matters", L64 and L76 in `lesson.md`.
3. Step 3b claim check: a fresh Sonnet agent checks `script.md`, `beats.md`'s ON SCREEN column and `package.md`'s title and thumbnail against the sources in `research.md` (it opens them) and writes `claims.md`; fix every narrower or wrong row in the words.
4. Draft-voice `film/script.txt` (a Sonnet worker, `tts.py` into `$RUNNER_TEMP/claude-dreaming/`): line 1 under 7.5 s, the whole under 58 s, no line over 3.2 words a second.
5. Steps 4-5 (make, finish) on Sonnet from `beats.md` (18 planned shots; shot 17 splits at the ";" pause), `film/thumb.json` + `film/thumb_picture.js` per `package.md`; then step 6, a fresh Opus judge (`docs/roles/evaluator.md`).

## Blockers
The content gate's 3 rounds are used up (`docs/pipeline/episode.md`: "at most 3 rounds, then the owner decides").

## Decisions
- 2026-11-28: The story is class notes fixed from the lecture recording (Duke and Florida Tech study guides, `research.md` S1-S3), because its mechanism matches dreaming: notes written fast in the moment (memory), the recording (past session transcripts), a clean copy (the new store).
- 2026-11-28: The counted example is Anthropic's own Pokemon ledge (three drops back onto the route, then the next city after the dream), since it is the maker's number; no "0 drops" is drawn because no source counts them.
- 2026-11-28: The old store staying unchanged and the docs' full list (duplicates merged, stale or contradicted entries replaced, new insights surfaced) are left to the description and the picture, to stay near 125 words (L94: no new feature after the payoff).
- 2026-11-28: Stopped after gate round 3 instead of running a 4th round, because the daily-run brief says to stop and write `not ready: content gate`.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-28 develop (daily run): research.md and brief.json from Anthropic's post, the Dreams, Memory stores and Managed Agents overview docs, and two study guides; package.md (title "Claude Dreaming: Why AI Agent Memory Can Be Wrong (2026)", 94 alone); hook 79 STRONG; lesson.md, beats.md, script.md, viewer.md, film/ scaffolded 9:16 with script.txt (126 words). Content gate: round 1 fail (4 must-fix), round 2 fail (3), round 3 fail (1, lesson.md only, applied after). Stopped: evaluation.md "not ready: content gate". Every gate item is in mistakes.md.
