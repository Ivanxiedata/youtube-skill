# Package: claude-dreaming (workflow step 2)

Made 2026-11-28 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses an AI agent or assistant at work that "remembers" things between sessions, and assumes what it remembers is right; curious, not an engineer.
- **The pain today (before):** like studying from class notes you scribbled fast: the agent wrote its memory notes itself, in the moment, and the next session reads them as they are (`research.md` rows 3, 10, 11). One wrong note and the same mistake comes back: in Anthropic's Pokémon test, a wrong note dropped Claude back onto the earlier route three times (row 15).
- **The moment they're paying for:** like rewriting your notes from the lecture recording: with dreaming, a research preview in Claude Managed Agents (row 2), Claude rereads past session transcripts beside its notes and writes a clean copy, a new memory store (row 4); in the test, the dream caught the wrong note and rewrote it, and Claude went back into the cave and reached the next city (rows 16, 17). The old memory stays unchanged, so you review the new one or discard it (row 5).

## The 10 titles
Thumbnail words: LEARN, ANTHROPIC'S, CLAUDE, DREAMING, IN, 60, SECONDS; so no "learn", "Anthropic's", "60" or "seconds" in the title besides the topic's name ("Claude Dreaming").
Every title carries a digit (lesson L21). `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | **Claude Dreaming: Why AI Agent Memory Can Be Wrong (2026)** | 56 | 94 | mobile (subject survives: "Claude Dreaming: Why AI Agent Memory...") |
| 2 | Claude Dreaming: AI Agents Reread 100 Sessions to Fix Memory | 60 | 94 | mobile; "100" is the maximum, reads as always 100; "fix" without "can" |
| 3 | Claude Dreaming: Your AI Agent's Notes Can Be Wrong, 1 Fix | 58 | 94 | mobile; "1 fix" is vague |
| 4 | Claude Dreaming: The 1 Wrong Note That Kept Repeating | 53 | 94 | mobile; no agent or memory word for search |
| 5 | Claude Dreaming (2026): AI Agent Memory, Reread and Fixed | 57 | 94 | mobile; "fixed" claims more than "can" |
| 6 | Claude Dreaming: How AI Agents Fix Their Own Wrong Notes (2026) | 63 | 76 | over 60 characters |
| 7 | Claude Dreaming: 1 Wrong Note Sent Claude Off a Ledge 3 Times | 61 | 76 | over 60 characters; Pokémon without its name |
| 8 | Claude Dreaming Explained: AI Memory That Fixes Itself (2026) | 61 | 76 | over 60; "fixes itself" overclaims (a dream is a job you start, research.md "where the analogy stops" 4) |
| 9 | Claude Dreaming: Like Rewriting Class Notes, for AI Agents (2026) | 65 | 76 | over 60 |
| 10 | Claude Dreaming: AI Agents Fix Wrong Memory Between Sessions (2026) | 67 | 76 | over 60 |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN ANTHROPIC'S CLAUDE DREAMING IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| Claude Dreaming: Why AI Agent Memory Can Be Wrong (2026) | 94 | 66 | mobile, duplicate (claude, dreaming), thumb-length 7 (by design) |
| Claude Dreaming: Your AI Agent's Notes Can Be Wrong, 1 Fix | 94 | 66 | same |
| Claude Dreaming (2026): AI Agent Memory, Reread and Fixed | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.

## Chosen
**Claude Dreaming: Why AI Agent Memory Can Be Wrong (2026)** (56 characters; the subject at character 1; the date 2026; no thumbnail word besides the topic's name; 94 alone, 66 with the thumbnail, by design).
It holds in Anthropic's words: a note "that's wrong from the start or that drifts as the environment changes can be read, and trusted, by Claude in a later session" (row 11), because Claude writes memory "based on what it judges to be salient in-session" (row 11). The "why" is answered in the video (notes written fast, in the moment, like class notes), and dreaming is the fix.
The first seconds confirm it: the hook names Claude dreaming and asks why one wrong note in an AI agent's notes can cost you, over a notebook with one line crossed in amber.

## Thumbnail text
`film/thumb.json`: learn **"LEARN ANTHROPIC'S"**, topic **"CLAUDE DREAMING"**, read as **LEARN ANTHROPIC'S CLAUDE DREAMING IN 60 SECONDS** (brand card).
Picture: an open notebook seen from above, its left page messy grey scribbles, its right page clean lines in teal with one amber check mark, a small crescent moon above it; no words or digits (lesson L54).
The mascot, left, wears the story's costume: a student's amber backpack strap over the hoodie and an amber pencil behind the ear (palette, lesson L88).

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it and description lines 1-2 hold, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude dreaming | Claude, Dreaming | line 1 ("Claude dreaming") |
| ai agent memory | AI, Agent, Memory | line 1 ("AI agent memory") |
| claude agent memory | Claude, Agent, Memory | line 2 ("Claude Managed Agents", "memory") |

Proposed first two description lines (step 5; every condition from `research.md`'s narrowing list, re-read before writing them):
1. `Claude dreaming (Anthropic, a research preview in Claude Managed Agents), explained in 60 seconds with class notes: why AI agent memory can be wrong, and how a dream rereads past sessions to fix it.`
2. `A dream reads a Claude agent's memory store alongside 1 to 100 past session transcripts and writes a new store: duplicates merged, stale or contradicted entries replaced with the latest value, and new insights surfaced; the old store is never modified, so you can review the new one or discard it.`
