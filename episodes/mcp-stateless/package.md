# Package: mcp-stateless (v2, workflow step 2)

Made 2026-11-21 with `/yt-package` and `/yt-seo`, before the script, so the first seconds can confirm this promise.
Patterns from `docs/studies/2026-11-21-yt-viral.md` (for this episode the study suggests B, E, F; patterns only, no wording copied).
Rules: at most 60 characters, MCP in the first 40, a number, name or date, and besides the topic's name no thumbnail word repeated.

## The 10 titles
`python3 .claude/skills/yt-package/title.py titles.txt` (alone), then each with `--thumb "LEARN STATELESS MCP IN 60 SECONDS"` (pair).

| # | Title | Chars | Pattern | Alone | Pair | Pair issues |
|---|---|---|---|---|---|---|
| 1 | Does MCP Still Need Sessions in 2026? | 37 | B: the old requirement still holding? | 100 | 88 | duplicate (mcp), thumb-length (6 words) |
| 2 | Does MCP Still Need a Handshake in 2026? | 40 | B | 100 | 88 | duplicate (mcp), thumb-length |
| 3 | What Changed in MCP on July 28, 2026? | 37 | F: the question people ask about a name they've heard | 100 | 88 | duplicate (mcp), thumb-length |
| 4 | Why MCP Dropped Sessions in July 2026 | 37 | D: what it is plus what changes | 100 | 84 | duplicate (mcp), thumb-length |
| 5 | MCP Is Now Stateless Like the Web (2026) | 40 | E: measured against a milestone the viewer knows (the web: SEP-2575 calls HTTP a stateless protocol) | 100 | 84 | duplicate (mcp, stateless), thumb-length |
| 6 | What Is Stateless MCP? The 2026 Change | 38 | F | 100 | 84 | duplicate (mcp, stateless), thumb-length |
| 7 | MCP 2026: No Sessions, No Handshake | 35 | A: subject, then one bounding frame | 100 | 84 | duplicate (mcp), thumb-length |
| 8 | Stateless MCP, Clearly Explained (2026) | 39 | A | 100 | 84 | duplicate (mcp, stateless), thumb-length |
| 9 | Why MCP Threw Away Sessions in 2026 | 35 | D (v1's title, the baseline) | 100 | 84 | duplicate (mcp), thumb-length |
| 10 | MCP Dropped Sessions in 2026: Why It Matters | 44 | D | 98 | 70 | mobile (cut after 40), duplicate (mcp), thumb-length |

Two issues are on every pair on purpose (`docs/workflow.md`, deviations): the brand card has 6 words (the tool's ceiling is 3)
and repeats the topic's name "MCP" (search needs it in the title, the card carries it). The open question adds 4 points, which is what separates the top three.

## Top 3
1. **Does MCP Still Need Sessions in 2026?** 100 alone, 88 with the thumbnail. Issues: only the two by-design ones.
   Pattern B (the strongest pattern for an infrastructure change in the study, 17.6x). It names the old requirement, so the viewer brings the "before" with them.
2. **Does MCP Still Need a Handshake in 2026?** 100, 88. Same pattern; "handshake" is less searched and less known than "sessions".
3. **What Changed in MCP on July 28, 2026?** 100, 88. Pattern F; the hook says the same date, but "what changed" names no promise.

## Chosen
**Does MCP Still Need Sessions in 2026?** (37 characters; "MCP" at character 6; a date-number, 2026.)
Title and thumbnail as one promise: the title asks the question, the thumbnail promises the answer ("stateless") in 60 seconds.
The video's answer is no: 2026-07-28 removed protocol-level sessions (`research.md`). The first seconds confirm it:
the spoken hook names MCP, July 28, 2026 and the before -> after, and the hook's picture labels the waiter's head "YOUR SESSION" (`beats.md`).

## Thumbnail text
**LEARN STATELESS MCP IN 60 SECONDS** (the brand card, unchanged from v1: "LEARN" small off-white, "STATELESS MCP" huge amber, red "IN 60 SECONDS" sticker).
Considered "LEARN THE NEW MCP IN 60 SECONDS" (pair also 88): vaguer, and it drops "stateless", the word people search. v1's `thumbnail.png` was readable at 160 px wide.
`title.py --title "Does MCP Still Need Sessions in 2026?" --thumb "LEARN STATELESS MCP IN 60 SECONDS"`: 88/100 (duplicate on mcp, thumb-length 6).

## The 3 searches this video should win (`/yt-seo` query test)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| stateless mcp | MCP | Stateless, MCP (line 1) |
| mcp sessions removed | MCP, Sessions | sessions, removed (line 1) |
| mcp 2026 spec changes | MCP, 2026 | 2026, spec, changes (line 1) |

"Stateless" is not in the title because the title carries the hook (brand title pattern); it is in the thumbnail, the title card, the corner tag, the spoken takeaway and description line 1.

Proposed first two description lines for step 5 (`upload.json`):
1. `Stateless MCP in 60 seconds: the MCP 2026 spec changes (version 2026-07-28) removed sessions, the session ID and the initialize handshake.`
2. `Now every MCP request carries what it needs, so any server can answer it, and state lives in a ticket (a handle) your AI passes back. Told with a diner.`
