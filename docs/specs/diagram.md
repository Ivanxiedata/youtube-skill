# diagram

## Goal
Turn a brief's architecture (before and after) into one side-by-side image for the "What's new"
section (15-35s): old on the left, new on the right, changed parts highlighted, in the stickman style.
This is the one piece none of the installed skills provides.

## Users
The render step (puts the image into the video) and the owner (checks the diagram reads at a glance).

## Input and output
- Input: `brief.architecture` (`before` and `after`, each with `nodes` and `edges`), plus the tech and
  predecessor names for the two titles.
- Output: `episodes/<slug>/diagram.svg`, 1920x1080.

## Acceptance criteria
- [ ] Renders a valid 1920x1080 SVG for the example brief.
- [ ] Left half shows `before` titled with the predecessor's name; right half shows `after` titled with the tech's name.
- [ ] Nodes and edges in `after` that aren't in `before` (by id) use the highlight color.
- [ ] Nodes in `before` that aren't in `after` are drawn dashed on the left.
- [ ] Same input gives a byte-identical SVG (deterministic layout, for tests and diffs).
- [ ] A 40-character label stays inside its box (wraps to at most two lines).
- [ ] More than 8 nodes on one side is rejected with a problem ("one diagram, one idea").
- [ ] Colors and font match the stickman style bible; the exact values are recorded in `diagram/progress.md` Decisions.

## Non-goals
- Animation: v1 is a static image; any camera move happens in the video.
- A general graph-layout engine: simple left-to-right layers by edge direction is enough for 8 nodes.
- Any editing UI.

## Interfaces
- Uses from `shared/`: `shared/brief`.
- Exposes to `cmd/`: `diagram.Render(a brief.Architecture, titles Titles) ([]byte, []Problem)`.
- Used by: `cmd/yt diagram episodes/<slug>`.

## Verification
`make check-diagram` (includes a golden-file test against `diagram/testdata/`). Manual: open the SVG
from the example brief; old and new are readable side by side and the changed part stands out in 3 seconds.

## Open questions (answer from Episode 0, then update this spec before any code)
1. Can the stickman engine show an SVG/PNG inside a scene? If not, this feature outputs engine scene
   code (JS) instead of SVG, and the output section above changes.
2. Style bible values: palette, font, line weight.
