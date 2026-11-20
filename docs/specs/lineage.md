# lineage

## Goal
Answer "what came before X?" and "which episode covers X?" from the episodes we've made, so each new
brief names the right predecessor and the outro can point viewers to the earlier video.

## Users
Agents writing a new brief (looking up predecessors and earlier episodes), and the owner planning topics.

## Source of truth
The briefs: `episodes/*/brief.json` (`tech` and `predecessor`). No separate database to keep in sync.

## Acceptance criteria
- [ ] `Load(episodesDir)` builds the graph from every brief.
- [ ] `Chain(id)` returns the predecessors oldest-first, e.g. for c (replaced b, which replaced a): a, b, c.
- [ ] `Episode(id)` returns the slug of the episode covering that tech, or "not covered yet".
- [ ] A predecessor with no episode of its own is allowed and reported as "not covered yet".
- [ ] Two episodes claiming the same tech id gives a problem naming both slugs.
- [ ] A cycle (a replaced b, b replaced a) gives a problem and doesn't loop forever.
- [ ] A predecessor id that differs only by case or spacing from a known id gives a "did you mean" problem.

## Non-goals
- Researching technologies or fetching anything from the web.
- Storing anything outside the briefs.
- A tech can have only one predecessor in v1 (no "merged from two technologies").

## Interfaces
- Uses from `shared/`: `shared/brief`.
- Exposes to `cmd/`: `Load`, `Chain`, `Episode`, `Check` (returns problems).
- Used by: `cmd/yt lineage <tech-id>` and `cmd/yt check` (runs `Check` on all episodes).

## Verification
`make check-lineage`. Manual: with two example episodes where the second replaces the first,
`go run ./cmd/yt lineage <second-id>` prints both, oldest first, with their episode slugs.
