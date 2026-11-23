# Package: claude-apps-open-in-chat (workflow step 2)

Made 2026-11-23 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses Claude at work next to the tools their team lives in (Notion, Asana, Canva); curious, not an engineer.
- **The pain today:** you ask Claude to update ten tasks in your Notion project page; Claude shows a small preview, so for the full editor you go to the Notion tab, once per task, back and forth ten times (`research.md` rows 3, 6; the ten is our example).
- **The moment they're paying for:** the Notion page opens right beside the chat, signed into your own account; you ask once, approve, and watch the ten tasks change as Claude makes the edits (`research.md` rows 4, 5, 6, where the app supports it).

## The 10 titles
Gate checked first on 2 titles (lesson L21): "Claude Apps: Open Notion Beside Your Chat, Full Screen" scored 76 (`no-number`: a name alone does not count), "Claude Apps: 10 Notion Tasks, 0 Tab Switches" 94; so every title below carries a number.
Then `python3 .claude/skills/yt-package/title.py titles.txt`. Thumbnail words: LEARN, CLAUDE, APPS, IN, 60, SECONDS, so no "in", "learn", "60" or "seconds" in the title.

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Claude Apps: Watch Claude Edit 10 Notion Tasks Live | 51 | 94 | mobile |
| 2 | Claude Apps: 10 Notion Tasks, 0 Tab Switches | 44 | 94 | mobile; "0 tab switches" is our example, reads as a maker's number |
| 3 | Claude Apps: 10 Notion Edits Without Leaving Chat | 49 | 94 | mobile |
| 4 | Claude Apps: Your Notion Opens in Chat (Nov 2026) | 49 | 94 | mobile; sells the feature, not the moment |
| 5 | Claude Apps: Edit 10 Tasks in Notion Without a New Tab | 54 | 94 | mobile |
| 6 | Claude Apps: 1 Screen for Notion, Asana and Canva | 49 | 94 | mobile; a list, no moment |
| 7 | Claude Apps: The Full Notion Editor, Not a Preview (2026) | 57 | 94 | mobile; close to the 60 cut |
| 8 | Claude Apps: Stop Switching Tabs 10 Times | 41 | 94 | mobile; no tool named |
| 9 | Claude Apps: 10 Tasks Updated While You Watch | 45 | 94 | mobile; drops "you approve" |
| 10 | Claude Apps: Notion, Signed In, Beside Your Chat in 2026 | 56 | 94 | mobile |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CLAUDE APPS IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Claude Apps: Watch Claude Edit 10 Notion Tasks Live** | 94 | 66 | mobile, duplicate (apps, claude), thumb-length 6 (by design) |
| Claude Apps: 10 Notion Edits Without Leaving Chat | 94 | 66 | same |
| Claude Apps: Edit 10 Tasks in Notion Without a New Tab | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Claude Apps: Watch Claude Edit 10..." and the subject survives.

## Chosen
**Claude Apps: Watch Claude Edit 10 Notion Tasks Live** (51 characters; subject at character 1; number 10; no thumbnail word besides the topic's name "Claude Apps"; alone 94).
The promise is the viewer's moment: your own Notion page, beside the chat, changing as Claude edits it ("Changes appear in the tool as Claude makes them", `research.md` row 5).
"Live" = as Claude makes them; the 10 tasks are our example. Kept after the claim check (`claims.md` row 19, narrower, accepted): Notion is one of the apps [NOV] names as supported ("For tools like Confluence or Notion, that means you get the full editor"); description line 2 says "Our example: 10 Notion tasks" and "after you approve them". The first seconds confirm it: the hook names Claude apps and corrects the belief that ten Notion edits mean ten trips to another tab.

## Thumbnail text
**LEARN CLAUDE APPS IN 60 SECONDS** (brand card). Picture: the mascot, left, at a laptop; bottom centre, one wide window split in two: a chat strip on the left and a Notion-like task list on the right with teal ticks appearing; nothing in the bottom-right corner. No app logos (plain shapes and words only).

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude apps | Claude, Apps | line 1 |
| claude notion | Claude, Notion | line 1 |
| claude apps notion | Claude, Apps, Notion | line 1 ("Claude apps", "Notion") |

The first third search, "mcp apps claude", was replaced after the judge (should-fix, row 4): "MCP" is not in the title. MCP stays in description line 1 and the tags.

Proposed first two description lines (step 5):
1. `Claude apps explained in 60 seconds: since November 10, 2026 (rolling out on web and desktop, all plans, in the new Claude), a connected tool like Notion or Asana can open beside your Claude chat (built on MCP Apps), where the app supports it.`
2. `Our example: 10 Notion tasks. Before, a small live preview, and the full editor in another tab; now the whole Notion page opens beside the chat, signed in as you, and you watch Claude's edits appear after you approve them.`
