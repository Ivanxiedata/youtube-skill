# diagram progress

Update before you stop, written for an agent that has never seen your conversation.
`make status` shows the Status and first Next line of every feature.

## Status
spec drafted, no code yet. Blocked on Episode 0 (can the engine show an image?).

## Next
1. Wait for Episode 0; answer the spec's 2 open questions and update `docs/specs/diagram.md`.
2. Record the stickman style-bible palette, font and line weight in Decisions below.
3. Golden-file test for the example brief in `diagram/testdata/`.
4. Implement layout (left-to-right layers) then SVG output, test-first.
5. Add `cmd/yt diagram`.

## Blockers
Episode 0 must show whether the stickman engine can place an SVG/PNG in a scene.

## Decisions
- 2026-11-20: Output is SVG at 1920x1080 unless Episode 0 shows the engine can't use images.
- 2026-11-20: Max 8 nodes per side ("one diagram, one idea" principle in docs/product.md).

## Log
- 2026-11-20 product-doc: spec got a Later section; ticked criteria must name their test.
- 2026-11-20 product-doc: feature scaffolded, spec drafted.
