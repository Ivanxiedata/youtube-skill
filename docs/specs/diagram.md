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
- [ ] In `after`, a node whose `id` isn't in `before`, and an edge whose `(from, to)` isn't in `before` (edges have no id), are marked as changed.
- [ ] Changed parts use the highlight color plus a thicker outline and a "NEW" tag, so they stand out without color (colorblind viewers).
- [ ] Nodes in `before` that aren't in `after` (by id) are drawn dashed on the left.
- [ ] Same input gives a byte-identical SVG (nodes sorted by id, edges by `(from, to)`, for tests and diffs).
- [ ] A 40-character label (the `shared/brief` maximum) stays inside its box (wraps to at most two lines).
- [ ] Labels are XML-escaped (`encoding/xml.EscapeText`): a label like `A & B <C>` still gives valid SVG.
- [ ] Palette, font and line weight are constants in diagram code that match the stickman style bible, and the golden-file test covers them.

## Non-goals
- Animation: v1 is a static image; any camera move happens in the video.
- A general graph-layout engine: simple left-to-right layers by edge direction is enough for 8 nodes.
- Any editing UI.

## Interfaces
- Uses from `shared/`: `shared/brief` (`Architecture`, `Problem`), which lands as its own PR first, before any feature code.
  Relies on `shared/brief` to reject more than 8 nodes per side ("one diagram, one idea") and labels over 40 characters; diagram doesn't re-check.
- Exposes to `cmd/`: `diagram.Render(a brief.Architecture, titles Titles) ([]byte, []brief.Problem)`.
- Used by: `cmd/yt diagram episodes/<slug>`.

## Later
- Animated build-up: the highlighted parts appear one by one, synced to the narration.
- Other comparison visuals: a side-by-side numbers table (speed, cost, context size).
- A vertical 1080x1920 layout for Shorts.

## Verification
`make check-diagram` (includes a golden-file test against `diagram/testdata/`). Manual: open the SVG
from the example brief; old and new are readable side by side and the changed part stands out in 3 seconds.

## Open questions (answer from Episode 0, then update this spec before any code)
1. Can the stickman engine show an SVG/PNG inside a scene? If not, this feature outputs engine scene
   code (JS) instead of SVG, and the output section above changes.
2. Style bible values (palette, font, line weight): they go in diagram code as constants, not in `progress.md`.
