# lineage progress

## Status
spec drafted, no code yet. Waits for `shared/brief` (lands as its own PR first).

## Next
1. Wait for `shared/brief` (see `docs/progress.md`).
2. Implement `New(briefs []brief.Brief)`, `Chain`, `Episode`, `Check` test-first; tests build briefs in memory (a <- b <- c, plus a cycle), no testdata folders.
3. Implement `cmd/yt/lineage.go` (the stub is registered already).

## Blockers
`shared/brief` has not landed: see `docs/progress.md` (Next, build order).

## Decisions
- 2026-11-20: No separate database; the briefs are the source of truth, because then there's nothing to keep in sync.
- 2026-11-20: One predecessor per tech in v1, because `Chain` stays a simple list; two predecessors are in the spec's Later.
- 2026-11-20: `New(briefs []brief.Brief)` instead of `Load(episodesDir)`, because `cmd/yt` loads with `brief.LoadAll`, so lineage does no file reading and tests need no testdata.

## Log
- 2026-11-20 product-doc: feature scaffolded, spec drafted.
- 2026-11-20 product-doc: spec got a Later section; ticked criteria must name their test.
- 2026-11-20 product-doc: review fixes (spec wording, shared/brief owns structural rules, cmd/yt stubs).
