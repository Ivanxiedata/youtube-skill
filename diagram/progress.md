# diagram progress

## Status
spec drafted, no code yet. Blocked on Episode 0 (can the engine show an image?).

## Next
1. Wait for Episode 0; answer the spec's 2 open questions and update `docs/specs/diagram.md`.
2. Put the stickman style-bible palette, font and line weight in diagram code as constants.
3. Golden-file test for the example brief in `diagram/testdata/` (it also pins the style constants).
4. Implement layout (left-to-right layers) then SVG output, test-first.
5. Implement `cmd/yt/diagram.go` (the stub is registered already).

## Blockers
Episode 0 (can the engine place an SVG/PNG in a scene?): see `docs/progress.md` (Blockers).

## Decisions
- 2026-11-20: Output is SVG at 1920x1080 unless Episode 0 shows the engine can't use images, because SVG is stdlib-only to generate and diffable in golden tests.
- 2026-11-20: Max 8 nodes per side, enforced by `shared/brief` and not re-checked here, because of the "one diagram, one idea" principle in `docs/product.md` and one owner for structural rules.
- 2026-11-20: Changed parts get a thicker outline and a "NEW" tag as well as the highlight color, because color alone fails colorblind viewers.
- 2026-11-20: Style constants (palette, font, line weight) live in diagram code and the golden test pins them, because values recorded here can drift from the code.

## Log
- 2026-11-20 product-doc: feature scaffolded, spec drafted.
- 2026-11-20 product-doc: spec got a Later section; ticked criteria must name their test.
- 2026-11-20 product-doc: review fixes (spec wording, shared/brief owns structural rules, cmd/yt stubs).
- 2026-11-20 product-doc: `cmd/yt/diagram.go` stub (registers `diagram`) arrived in a parallel branch; this entry records it.
