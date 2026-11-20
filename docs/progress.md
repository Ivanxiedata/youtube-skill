# Repo progress

Repo-level work only: harness, `shared/`, `cmd/`, and making episodes. Feature work goes in `<feature>/progress.md`.
Update before you stop, written for an agent that has never seen your conversation.

## Status
Foundation done (harness, product doc, 3 feature specs). Episode 0 is next; no product code yet.

## Next
1. Owner picks the Episode 0 topic: a new AI tech and its predecessor.
2. Install the three skills (`docs/product.md`, "Skills used"). Record how in Decisions below.
3. Make Episode 0 by hand in `episodes/<slug>/`: research, brief.json, script.md, diagram (rough), render, title.
4. Write what was slow or manual into the Log; answer the open questions in `docs/specs/episode.md` and `docs/specs/diagram.md`.
5. Then build in order: `shared/brief` -> `episode` -> `lineage` -> `diagram` -> `cmd/yt`.

## Blockers
Waiting on the owner for the Episode 0 topic.

## Decisions
- 2026-11-20: No branch protection (owner wants speed). PRs go to `develop`; `main` is fast-forwarded by the owner.
- 2026-11-20: v1 videos are 60 seconds (format table in `docs/product.md`).
- 2026-11-20: Make Episode 0 by hand before writing feature code, so specs are based on the real flow.
- 2026-11-20: 3 features (episode, lineage, diagram) + `cmd/yt` wiring. Research, render and packaging are done by external skills, not our code.

## Log
- 2026-11-20 product-doc: product doc, per-feature progress files, `make status`, progress check, 3 feature specs.
- 2026-11-20 develop: harness built and reviewed (5 lenses); CI green; develop/main branch model.
