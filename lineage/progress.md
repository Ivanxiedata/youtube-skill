# lineage progress

## Status
spec drafted, no code yet. Waits for `shared/brief` (lands as its own PR first).

## Next
1. Wait for `shared/brief` (see `docs/progress.md`).
2. Implement `New(briefs []brief.Brief)`, `Chain`, `Episode`, `Check` test-first; tests build briefs in memory (a <- b <- c, plus a cycle), no testdata folders.
3. Implement `cmd/yt/lineage.go` (the stub is registered already): `yt lineage <tech-id>` and `yt lineage check` (prints `Check`'s problems, exit 1 if any). `yt check` does not run lineage.

## Blockers
`shared/brief` has not landed: see `docs/progress.md` (Next, build order).

## Decisions
- 2026-11-20: No separate database; the briefs are the source of truth, because then there's nothing to keep in sync.
- 2026-11-20: One predecessor per tech in v1, because `Chain` stays a simple list; two predecessors are in the spec's Later.
- 2026-11-20: `New(briefs []brief.Brief)` instead of `Load(episodesDir)`, because `cmd/yt` loads with `brief.LoadAll`, so lineage does no file reading and tests need no testdata.
- 2026-11-20: Lineage's problems run as `yt lineage check`, not inside `yt check`, because `yt check` belongs to `episode`, features never call each other, and so lineage's whole wiring lives in `cmd/yt/lineage.go`.

## Log
- 2026-11-20 product-doc: feature scaffolded, spec drafted.
- 2026-11-20 product-doc: spec got a Later section; ticked criteria must name their test.
- 2026-11-20 product-doc: review fixes (spec wording, shared/brief owns structural rules, cmd/yt stubs).
- 2026-11-20 product-doc: verifier follow-up: interface is `yt lineage <tech-id>` and `yt lineage check` (both `cmd/yt/lineage.go`); removed the claim that `yt check` runs `Check`.
