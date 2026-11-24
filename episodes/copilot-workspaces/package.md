# Package: copilot-workspaces (workflow step 2)

Made 2026-11-24 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses Copilot or another AI chatbot at work and writes documents with a team; curious, not a machine-learning engineer.
- **The pain today:** our example, a 4-part team plan: each of you asks Copilot alone in your own chat, then pastes its answer into the plan by hand and explains to the others what it was asked: 4 parts, 4 copy-pastes (`research.md`, Before and the counted example, which is ours; Microsoft: AI at work has "mostly been single player", row 1).
- **The moment they're paying for:** the same plan in one shared Workspace: an agent drafts a part right in the plan, you review, you leave a comment and an agent picks it up; nothing to paste (rows 2, 4, 5). Only in Frontier, Microsoft's early access program (rows 9-11).

## The 10 titles
Thumbnail words: LEARN, COPILOT, WORKSPACES, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title.
The gate was read first (lesson L21): every title carries a digit or a date. `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Copilot Workspaces at Ignite 2026: Multiplayer AI, Explained | 60 | 98 | mobile; sells the event, not the moment |
| 2 | Copilot Workspaces: 1 Space Where You and AI Agents Work | 56 | 94 | mobile; vague on what changes |
| 3 | Copilot Workspaces (Nov 17): AI at Work Goes Multiplayer | 56 | 94 | mobile; the maker's metaphor, not the moment |
| 4 | **Copilot Workspaces: Agents Draft, You Review, 1 Shared Space** | 60 | 94 | mobile |
| 5 | Copilot Workspaces: Stop Pasting AI Answers to 1 Team Doc | 57 | 94 | mobile; sells our example as fact |
| 6 | Copilot Workspaces: Your Team + AI Agents Toward 1 Goal | 55 | 94 | mobile; no scene |
| 7 | Copilot Workspaces (Early Access, 2026): AI Goes Multiplayer | 60 | 94 | mobile; no scene |
| 8 | Copilot Workspaces (Nov 2026 Preview): Agents Draft, You Review | 63 | 76 | too long |
| 9 | Copilot Workspaces: You + AI Agents, 1 Shared Space (Preview) | 61 | 76 | too long |
| 10 | Copilot Workspaces: 1 Shared Space for You + Agents (Preview) | 61 | 76 | too long |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN COPILOT WORKSPACES IN 60 SECONDS"`)
The first choice, "Copilot Workspaces: Agents Draft, You Review, 1 Shared Space", was ruled narrower by the claim check (`claims.md` row 39: it states the feature with no "early access"). Re-scored after the fix (lesson L26):

| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Copilot Workspaces (Early Access): 1 Space for You + Agents** | 94 | 66 | mobile, duplicate (copilot, workspaces), thumb-length 6 (by design) |
| Copilot Workspaces (Early Access): You + Agents, 1 Goal | 94 | 66 | same |
| Copilot Workspaces (Early Access): Agents Draft, You Review | 76 | - | no-number (no digit) |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Copilot Workspaces (Early Access): 1..." and the subject survives.

## Chosen
**Copilot Workspaces (Early Access): 1 Space for You + Agents** (59 characters; subject at character 1; the number 1; no thumbnail word besides the topic's name).
The promise is the viewer's moment: one space where you and AI agents work together, "people and agents drive towards a common goal, with shared context" (row 2), carrying its condition, early access (Frontier, rows 9-11).
The first seconds confirm it: the hook names Copilot Workspaces, "in early access", "you and agents" and "1 space, 1 goal".

## Thumbnail text
**LEARN COPILOT WORKSPACES IN 60 SECONDS** (brand card). Picture: the mascot, left, in a gaming headset (the multiplayer story); bottom centre, one shared document "TEAM PLAN" with a teal robot-head agent and two small teammates around it, a comment bubble; nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it holds, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| copilot workspaces | Copilot, Workspaces | line 1 |
| copilot workspaces agents | Copilot, Workspaces, Agents | line 1 |
| copilot workspaces early access | Copilot, Workspaces, Early, Access | line 1 |

Proposed first two description lines (step 5; fixed after `claims.md` rows 42 and 44):
1. `Copilot Workspaces explained in 60 seconds: in early access (Microsoft's Frontier program) since Ignite, November 17, 2026, a shared space in the Copilot app where you and AI agents work toward one goal with shared context. An agent drafts a section, you review; you leave a comment and an agent picks it up.`
2. `Microsoft says AI interactions have mostly been single player until now. Our example: a 4-part team plan drafted in 4 solo chats meant 4 copy-pastes by hand; in one early-access Workspace, agents draft in the plan and you review. Workspaces is the evolution of Copilot Notebooks, and the work continues in Microsoft Teams.`
