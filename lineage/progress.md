# lineage progress

Update before you stop, written for an agent that has never seen your conversation.
`make status` shows the Status and first Next line of every feature.

## Status
spec drafted, no code yet. Waits for `shared/brief` (see episode).

## Next
1. Wait for `shared/brief/` from the episode feature.
2. Add `lineage/testdata/` with 3 small briefs (a <- b <- c) plus one cycle case.
3. Implement `Load`, `Chain`, `Episode`, `Check` test-first.
4. Add `cmd/yt lineage <tech-id>`.

## Blockers
Needs `shared/brief` (episode feature, step 2).

## Decisions
- 2026-11-20: No separate database; the briefs are the source of truth, so there's nothing to keep in sync.
- 2026-11-20: One predecessor per tech in v1.

## Log
- 2026-11-20 product-doc: feature scaffolded, spec drafted.
