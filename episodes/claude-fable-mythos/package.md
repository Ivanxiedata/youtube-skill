# Package: claude-fable-mythos (workflow step 2)

Made 2026-11-25 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses Claude or another AI chatbot at work, hears "Fable" and "Mythos" in the same week and assumes the public one is the watered-down one; curious, not a machine-learning engineer.
- **The pain today (before):** our example, your 10 requests to Claude in a day. In April, the strongest model, Claude Mythos Preview, went only to a limited group of cyber defenders and critical software infrastructure providers (`research.md` row 19);
  all 10 of yours were answered by a weaker model (row 20; the 10 are ours).
- **The moment they're paying for:** the same 10 requests on Claude Fable 5.2, the same underlying model as the restricted Mythos 5.2 (row 1): a separate checker reads each one (rows 4, 5); 9 get the full model;
  the 1 that asks for attack code is blocked and, in Claude apps by default, an older Opus model answers it, with a notice (rows 7-9, 13). In early tests, about 55% fewer blocks than Fable 5.1 (row 16). The 9 / 1 split is ours, not a rate.

## The 10 titles
Thumbnail words: LEARN, CLAUDE, FABLE, 5.2, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title.
The gate was read first (lesson L21): every title carries a digit. `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Claude Fable 5.2: Same Model as Mythos, Plus a Checker | 54 | 94 | mobile; chosen with "Mythos 5.2" (58 chars, 94 alone) so the version is said for both |
| 2 | Claude Fable 5.2 vs Mythos 5.2: 1 Model, 2 Sets of Rules | 56 | 94 | mobile; "sets of rules" is vague |
| 3 | Claude Fable 5.2: The Restricted Mythos Model, Made Public | 58 | 94 | mobile; drops the checker |
| 4 | Claude Fable 5.2: Why You Get the Same Model as Mythos | 54 | 94 | mobile; drops the checker |
| 5 | Claude Fable 5.2 & Mythos 5.2: 1 Model, 1 Separate Checker | 58 | 94 | mobile |
| 6 | Claude Fable 5.2: 55% Fewer Blocks Than 5.1 (Early Tests) | 57 | 94 | mobile; sells the number, not the moment |
| 7 | Claude Fable 5.2 Is Mythos 5.2 Plus a Safety Checker | 52 | 94 | mobile; "is Mythos" says more than "same underlying model" |
| 8 | Claude Fable 5.2: How a Flagged Request Goes to Opus | 52 | 94 | mobile; sells the exception |
| 9 | Claude Fable 5.2: Not a Weaker Model, Same as Mythos 5.2 | 56 | 94 | mobile |
| 10 | Claude Fable 5.2 (Nov 9): 1 Model, a Checker, an Older Opus | 59 | 94 | mobile; a list, no scene |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CLAUDE FABLE 5.2 IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| Claude Fable 5.2: Same Model as Mythos 5.2, Plus a Checker (narrower, claims.md row 43) | 94 | 66 | mobile, duplicate (claude, fable, 5.2), thumb-length 8 (by design) |
| Claude Fable 5.2: Not a Weaker Model, Same as Mythos 5.2 | 94 | 66 | same |
| Claude Fable 5.2 & Mythos 5.2: 1 Model, 1 Separate Checker | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Claude Fable 5.2: Mythos 5.2..." and the subject survives.

## Chosen
**Claude Fable 5.2: Mythos 5.2 Underneath, Plus a Checker** (55 characters; subject at character 1; the numbers 5.2; no thumbnail word besides the topic's name; 94 alone, 66 with the thumbnail, same issues by design).
The first choice, "Claude Fable 5.2: Same Model as Mythos 5.2, Plus a Checker", was ruled narrower by the claim check (`claims.md` row 43: the source says "same underlying model"); re-scored after the fix (lesson L26).
The promise is the viewer's moment: the public model is not a weaker brain; it is the same underlying model as the restricted Mythos 5.2 (row 1), plus a separate checker (rows 4, 5).
The first seconds confirm it: the hook names Claude Fable 5.2, says "the same underlying model as Mythos 5.2" (Mythos 5.2 shown as "VETTED GROUPS ONLY"), and the next shots show the checker.

## Thumbnail text
**LEARN CLAUDE FABLE 5.2 IN 60 SECONDS** (brand card). Picture: the mascot, left, in a diner's napkin bib holding an order ticket (the restaurant story); bottom centre, one robot chef with a teal screen head behind a pass,
a teal checker light over the pass; no words on the picture (lesson L54); nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it holds, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude fable 5.2 | Claude, Fable, 5.2 | line 1 |
| claude fable mythos | Claude, Fable, Mythos | line 1 | (was "claude fable vs mythos": "vs" is not in the title, judge round 1 S2, lesson L37)
| claude mythos 5.2 | Claude, Mythos, 5.2 | line 1 |

Proposed first two description lines (step 5; every condition from `research.md`'s narrowing list):
1. `Claude Fable 5.2 vs Mythos 5.2 explained in 60 seconds: since November 9, 2026, Claude Fable 5.2 is the same underlying model as Claude Mythos 5.2, which is available to vetted organizations; Fable adds separate safety classifiers (another AI) that check every request.`
2. `In Claude apps, by default, most requests the classifiers block (like a request to build attack code) may instead be answered by an older Opus model (currently Opus 4.8 for cyber, Opus 5 for biology), with a notice. In Anthropic's early testing, Fable 5.2 had about 55% fewer blocks than Fable 5.1.`
