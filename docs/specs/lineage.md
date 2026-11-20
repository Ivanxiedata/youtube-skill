# lineage

## Goal
Answer "what came before X?" and "which episode covers X?" from the episodes we've made, so each new
brief names the right predecessor and the outro can point viewers to the earlier video.

## Users
Agents writing a new brief (looking up predecessors and earlier episodes), and the owner planning topics.

## Source of truth
The briefs: `episodes/*/brief.json` (`tech` and `predecessor`). `cmd/yt` loads them with `brief.LoadAll` and passes them in; lineage does no file reading. No separate database to keep in sync.

## Acceptance criteria
- [ ] `New(briefs []brief.Brief)` builds the graph from the briefs it is given.
- [ ] `Chain(id)` returns the chain oldest-first and ends with the tech itself, e.g. for c (replaced b, which replaced a): a, b, c.
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
- Uses from `shared/`: `shared/brief` (`Brief`, `Problem`), which lands as its own PR first, before any feature code.
- Exposes to `cmd/`: `lineage.New(briefs []brief.Brief)`, then `Chain`, `Episode`, `Check` (returns `[]brief.Problem`).
- Used by: `cmd/yt lineage <tech-id>` and `cmd/yt check` (both call `brief.LoadAll`, pass the briefs to `New`; `check` also runs `Check`).

## Later
- A tech with two predecessors (e.g. "merged ideas from A and B").
- A timeline of every covered tech, for the channel's playlist order.
- Topic suggestions: predecessors mentioned in briefs that have no episode yet.

## Verification
`make check-lineage`; tests build `[]brief.Brief` in memory, so no testdata folders. Manual: with two example episodes where the second replaces the first,
`go run ./cmd/yt lineage <second-id>` prints both, oldest first, with their episode slugs.
