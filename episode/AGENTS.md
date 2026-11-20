# episode

One episode's content: the four-part brief (before / new / why / how) with sources, and the 60-second script; checks both are ready to render.

## Read first
1. `docs/specs/episode.md`: what it must do (acceptance criteria).
2. `episode/progress.md`: where it stands and what's next. Update it before you stop.

## Boundaries
- Public API: the root package `episode` only. Everything else goes in `episode/internal/`.
- May import: `episode/...` and `shared/...`. Never another feature.

## Commands
- `make check-episode`: vet + test this feature only.

## Notes
- This feature checks; it never writes briefs or scripts.
- Section names and time budgets come from the format table in `docs/product.md`. Change them there first.
