# episode progress

## Status
spec drafted, no code yet. Blocked on Episode 0.

## Next
1. Wait for Episode 0 (`docs/progress.md`); then answer the spec's open questions and update `docs/specs/episode.md`.
2. Land `shared/brief` as its own PR first, before any feature code (what it owns: spec Interfaces).
3. Add `episode/testdata/ok/` (copy of Episode 0's real brief + script) and `episode/testdata/bad/`.
4. Implement `episode.Check` test-first, one acceptance criterion at a time: `shared/brief`'s problems plus word counts, budgets, claim sources.
5. Implement `cmd/yt/check.go` (the stub is registered already).

## Blockers
Episode 0: see `docs/progress.md` (Blockers).

## Decisions
- 2026-11-20: Data lives in `episodes/<slug>/` (brief.json + script.md), because lineage and diagram read the same files.
- 2026-11-20: `shared/brief` is a deep module (validated `Brief`, structural rules, budget table, one `Problem` type) that lands before any feature code, because three features read briefs and rules scattered across features let `yt check` pass briefs that fail later.
- 2026-11-20: `episode.Check` returns `shared/brief`'s problems plus its own, because `yt check` must catch diagram limits and id format before render.
- 2026-11-20: Word limits assume 2.5 words/s (150 words / 60s), because the real TTS rate is unknown until Episode 0; replace with the measured rate then.

## Log
- 2026-11-20 product-doc: feature scaffolded, spec drafted.
- 2026-11-20 product-doc: spec got a Later section; ticked criteria must name their test.
- 2026-11-20 product-doc: review fixes (spec wording, shared/brief owns structural rules, cmd/yt stubs).
