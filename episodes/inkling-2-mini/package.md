# Package: inkling-2-mini (workflow step 2)

Made 2026-11-22 with `/yt-package` and `/yt-seo`, before the script, so the first seconds can confirm this promise.
Rules: at most 60 characters, the subject (Inkling 2 Mini) in the first 40, a number, name or date, and besides the topic's name no thumbnail word repeated
(thumbnail words: LEARN, IN, 60, SECONDS; so no "in" in the title).

## The 10 titles (first set) and the shortened set
`python3 .claude/skills/yt-package/title.py titles.txt` (alone), then the finalists with `--thumb "LEARN INKLING 2 MINI IN 60 SECONDS"` (pair).
Nine of the first ten lost 6 points to the mobile cut (over 40 characters), so a second, shorter set was written and scored.

| # | Title | Chars | Alone | Issues (alone) |
|---|---|---|---|---|
| 1 | What Is Inkling 2 Mini? (November 2026) | 39 | 100 | none |
| 2 | Inkling 2 Mini 2026: Does Your AI Think in Loops? | 49 | 98 | mobile (and "in" repeats the thumbnail) |
| 3 | Inkling 2 Mini: An AI That Thinks 3 Times Per Word | 50 | 94 | mobile |
| 4 | Inkling 2 Mini: Looped Layers Explained (2026) | 46 | 94 | mobile |
| 5 | Inkling 2 Mini: Why 12 Layers Run 3 Times | 41 | 94 | mobile |
| 6 | Inkling 2 Mini Explained: The Looped Transformer | 48 | 94 | mobile |
| 7 | Inkling 2 Mini: Thinking Without Writing It Down | 48 | 94 | mobile (and overclaims: it still writes some reasoning) |
| 8 | Inkling 2 Mini: AI That Thinks Before It Writes (2026) | 54 | 94 | mobile |
| 9 | Thinking Machines' Inkling 2 Mini: Loops Explained | 50 | 94 | mobile |
| 10 | Inkling 2 Mini: How a Looped AI Uses Fewer Tokens | 49 | 94 | mobile |

Shortened set:
| Title | Chars | Alone | Pair | Pair issues |
|---|---|---|---|---|
| **Inkling 2 Mini: 12 Layers, 3 Loops, Why?** | 40 | 100 | 84 | duplicate (2, inkling, mini), thumb-length |
| Inkling 2 Mini 2026: Why Loop Its Layers? | 41 | 98 | 70 | mobile, duplicate, thumb-length |
| Inkling 2 Mini 2026: AI That Thinks Twice? | 42 | 98 | - | mobile; "twice" is wrong (three passes) |
| Inkling 2 Mini: Thinking With Fewer Words? | 42 | 98 | - | mobile |
| Inkling 2 Mini: Why Its Layers Run 3 Times | 42 | 94 | 66 | mobile, duplicate, thumb-length |
| Inkling 2 Mini: The AI That Loops 3 Times | 41 | 94 | 66 | mobile, duplicate, thumb-length |
| What Is Inkling 2 Mini? (November 2026) | 39 | 100 | 80 | duplicate, thumb-length |

The pair issues are on purpose (`docs/workflow.md`, deviations): the brand card has 7 words here, and it repeats the topic's name "Inkling 2 Mini", which search needs in the title.

## Top 3
1. **Inkling 2 Mini: 12 Layers, 3 Loops, Why?** 100 alone, 84 with the thumbnail, only the by-design issues. Two true numbers from the model card and an open question the video answers.
2. **What Is Inkling 2 Mini? (November 2026)** 100, 80. The plain search question; a weaker promise.
3. **Inkling 2 Mini 2026: Why Loop Its Layers?** 98, 70. Same question, one character over the mobile cut.

## Chosen
**Inkling 2 Mini: 12 Layers, 3 Loops, Why?** (40 characters; "Inkling 2 Mini" at character 1; the numbers 12 and 3.)
Title and thumbnail as one promise: the title asks why a model would run its 12 middle layers three times; the thumbnail promises the answer in 60 seconds.
The answer the video gives: an ordinary model has to write its thinking out as tokens; looping the middle layers (same weights) does more thinking per token, so it can write less.
The first seconds confirm it: the spoken hook names Inkling 2 Mini and says before (you wait for its written thinking) -> now (12 layers loop 3 times), then asks "how, why?".

## Thumbnail text
**LEARN INKLING 2 MINI IN 60 SECONDS** (the brand card: "LEARN" small off-white, "INKLING 2 MINI" huge amber, red "IN 60 SECONDS" sticker).
`title.py --title "Inkling 2 Mini: 12 Layers, 3 Loops, Why?" --thumb "LEARN INKLING 2 MINI IN 60 SECONDS"`: 84/100 (duplicate on 2/inkling/mini, thumb-length 7, both by design).

## The 3 searches this video should win (`/yt-seo` query test)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| inkling 2 mini | Inkling, 2, Mini | Inkling, 2, Mini (line 1) |
| looped transformer explained | Loops (stem) | looped, transformer, explained (line 1) |
| thinking machines inkling | Inkling | Thinking, Machines, Inkling (line 1) |

Proposed first two description lines for step 5 (`upload.json`):
1. `What is Inkling 2 Mini? Thinking Machines' open-weights looped transformer, released November 20, 2026, explained in 60 seconds.`
2. `Before, an ordinary model ran each layer once per token and wrote its reasoning out. Now Inkling 2 Mini's middle 12 layers loop 3 times with shared weights, so it can write less.`
