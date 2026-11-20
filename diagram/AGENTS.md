# diagram

Draws the side-by-side architecture diagram (old vs new, changed parts highlighted) in the stickman style for the What's-new section.

Spec: `docs/specs/diagram.md` · Progress: `diagram/progress.md` (update before you stop) · Check: `make check-diagram`

## Notes
- Stdlib only for SVG (text/template or fmt). No graph-layout dependency.
- Escape labels with `encoding/xml` (`xml.EscapeText`).
- Style constants (palette, font, line weight) live in code; the golden test covers them.
- Deterministic output: sort nodes by id and edges by `(from, to)` before layout.
