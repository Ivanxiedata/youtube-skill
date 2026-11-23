# Package: claude-computer-use-work (workflow step 2)

Made 2026-11-23 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone at work on a Claude Team or Enterprise plan, who uses Claude in chat every day; curious, not an engineer. Their team has one desktop app with no connector (an order tool, an internal dashboard).
- **The pain today:** 20 orders sit in the order tool and have to go into a spreadsheet. Claude can't reach that app, so you copy each order into the chat and type the answer back yourself: 20 orders, 20 round trips (`research.md`, Before; our counted example).
- **The moment they're paying for:** once an owner turns computer use on (beta), Claude takes screenshots of your screen, then clicks and types in the order tool and the spreadsheet; you approve the 2 apps and Claude does the 20 (`research.md` rows 1-4, 7). Slower than a connector, sometimes a second try (rows 9-10).

## The 10 titles
Gate checked first on 2 titles (lesson L21): "Claude" does not count as a name for `title.py`, so the title without a number scored 76 (`no-number`); every title below carries a number or a date.
Thumbnail words: LEARN, CLAUDE, COMPUTER, USE, IN, 60, SECONDS, so no "in", "learn", "60" or "seconds" in the title. `python3 .claude/skills/yt-package/title.py titles.txt` (alone):

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Claude Computer Use: Stop Copy-Pasting 20 Orders by Hand | 56 | 94 | mobile |
| 2 | Claude Computer Use: 20 Orders, No Connector, No Copy-Paste | 59 | 94 | mobile; long; "no copy-paste" absolute |
| 3 | Claude Computer Use: 20 Copy-Pastes Down to 2 Approvals | 55 | 94 | mobile; "approvals" is abstract at a glance |
| 4 | Claude Computer Use: From 20 Copy-Pastes to 2 Approvals | 55 | 94 | mobile; same |
| 5 | Claude Computer Use (Nov 2026): Apps With No Connector | 54 | 94 | mobile; sells the tech, not the moment |
| 6 | Claude Computer Use: 1 App, No Connector, 20 Orders Done | 56 | 94 | mobile; "done" hides the approvals and the second try |
| 7 | Claude Computer Use: 3 Ways Claude Reaches Your Apps | 52 | 94 | mobile; sells the how |
| 8 | Claude Computer Use: Your 20-Order Copy-Paste Job, Gone | 55 | 94 | mobile; "gone" overclaims (you still approve 2 apps) |
| 9 | Claude Computer Use: It Sees Your Screen, 20 Orders Later | 57 | 94 | mobile; unclear |
| 10 | Claude Computer Use: 20 Orders Typed While You Approve 2 Apps | 61 | 76 | length |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CLAUDE COMPUTER USE IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Claude Computer Use: Stop Copy-Pasting 20 Orders by Hand** | 94 | 66 | mobile, duplicate (claude, computer, use), thumb-length 7 (by design) |
| Claude Computer Use: 20 Copy-Pastes Down to 2 Approvals | 94 | 66 | same |
| Claude Computer Use: 20 Orders, No Connector, No Copy-Paste | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Claude Computer Use: Stop Copy-Pasting..." and the subject survives.

## Chosen
**Claude Computer Use: Stop Copy-Pasting 20 Orders by Hand** (56 characters; subject at character 1; number 20; no thumbnail word besides the topic's name).
The promise is the viewer's moment: the 20 orders are no longer copied by you. True as worded inside the example: Claude clicks and types in the apps you allow, and you approve 2 apps (`research.md` rows 1, 7).
The first seconds confirm it: the hook names computer use and corrects the belief that an app with no connector means 20 copy-pastes.

## Thumbnail text
**LEARN CLAUDE COMPUTER USE IN 60 SECONDS** (brand card). Picture: the mascot, left, with an office lanyard badge (the costume: the coworker story); bottom centre, a laptop screen with an app window "NO CONNECTOR" and a teal cursor clicking in it, the teal-headed AI robot beside it; nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude computer use | Claude, Computer, Use | line 1 |
| claude computer use team enterprise | Claude, Computer, Use (Team, Enterprise in line 1) | line 1 |
| what is claude computer use | Claude, Computer, Use ("what is" is the question form; line 1 answers it) | line 1 |

Proposed first two description lines (step 5):
1. `What is Claude computer use? In beta on Claude Team and Enterprise plans since November 20, 2026, rolling out to organizations gradually: once an owner turns it on, Claude takes screenshots to see your screen, then clicks and types in the desktop apps you allow.`
2. `Explained in 60 seconds with 20 orders in an app with no connector: before, 20 copy-pastes by you; now you approve the 2 apps and Claude types them (slower than a connector, and complex tasks sometimes need a second try).`
