# diagram

Draws the side-by-side architecture diagram (old vs new, changed parts highlighted) in the stickman style for the What's-new section.

## Read first
1. `docs/specs/diagram.md`: what it must do (acceptance criteria).
2. `diagram/progress.md`: where it stands and what's next. Update it before you stop.

## Boundaries
- Public API: the root package `diagram` only. Everything else goes in `diagram/internal/`.
- May import: `diagram/...` and `shared/...`. Never another feature.

## Commands
- `make check-diagram`: vet + test this feature only.

## Notes
- Stdlib only for SVG (text/template or fmt). No graph-layout dependency.
- Deterministic output: sort nodes and edges by id before layout.
