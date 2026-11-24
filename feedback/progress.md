# feedback progress

## Status
spec drafted, no code yet; `docs/lessons.md` is seeded with 11 lessons from Episode 0 and is already in use by hand.

## Next
1. Owner exports a real retention CSV once Episode 0 is public, to settle the spec's open question 1.
2. Implement `yt feedback add|list|check` first (no dependency on `shared/brief`), then `retention`.
3. Until then, agents add lesson rows to `docs/lessons.md` by hand.

## Blockers
none

## Decisions
<!-- - YYYY-MM-DD: decision, because why -->
- 2026-11-21: Specced after doing it by hand once on Episode 0, because a spec written before the real flow would be a guess (same rule as Episode 0 itself).
- 2026-11-21: Lessons live in one Markdown table (`docs/lessons.md`), because agents and the owner both have to read and edit it; the code only appends, lists and checks.
- 2026-11-21: Retention comes from a CSV the owner exports, because the Analytics API needs another OAuth scope and the upload app is still unaudited.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-21 brand-evaluate-feedback: feature scaffolded, spec drafted; `docs/lessons.md` seeded with 11 lessons.
- 2026-11-21 brand-evaluate-feedback: lessons L12 (listen before judging) and L13 (licensed music through Openverse) added.
- 2026-11-21 topic-first-rule: lesson L14 (topic first) added.
- 2026-11-22 pipeline-learn: new source `pipeline` and check value `pipeline` (the daily run's learn job); lessons L17-L19 added.
- 2026-11-23 diagram-flow: lesson L25 (owner: the KodeKloud flow, in our brand).
- 2026-11-24 content-gate: spec: new `check` value `gate` (a teaching rule the content gate checks, `docs/roles/content-gate.md`); `yt feedback check` must accept it when built.
