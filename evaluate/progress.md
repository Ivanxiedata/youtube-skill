# evaluate progress

## Status
spec drafted from a hand-made scorecard (Episode 0), no code yet. Waits for `shared/brief`.

## Next
1. Owner answers the spec's 2 open questions (topic within 15 s or in the first sentence; where the thumbnail text is stored).
2. Wait for `shared/brief` (see `docs/progress.md`), then implement the measured rows test-first against `evaluate/testdata/`.
3. Until then, evaluations are done by hand in the evaluator role (`docs/roles/evaluator.md`).

## Blockers
none

## Decisions
<!-- - YYYY-MM-DD: decision, because why -->
- 2026-11-21: Specced after doing it by hand once on Episode 0, because a spec written before the real flow would be a guess (same rule as Episode 0 itself).
- 2026-11-21: Measured rows in code, judged rows by an agent in the evaluator role, because hook strength, brand fit and attractiveness can't be computed and music can't be heard by an agent.
- 2026-11-21: Sound is judged with earshot (levels, tags, timeline, sheet), because an agent cannot hear and loudness numbers alone missed a noise bed in cut 1. earshot does not transcribe, so pronunciation stays with the owner.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-21 brand-evaluate-feedback: feature scaffolded, spec drafted from Episode 0's hand-made scorecard; `docs/roles/evaluator.md` added.
- 2026-11-21 brand-evaluate-feedback: evaluator role and spec now use earshot for the sound rows; tried on Episode 0 cut 5.
