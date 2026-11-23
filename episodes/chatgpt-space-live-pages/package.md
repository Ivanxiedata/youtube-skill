# Package: chatgpt-space-live-pages (workflow step 2)

Made 2026-11-23 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses ChatGPT at work on Plus, keeps a team's project plan or status page, and whose team decides things in Slack; curious, not an engineer.
- **The pain today:** twelve decisions land in the team's Slack this week; the plan is a file that only changes when someone edits it, so someone copies each of the 12 into it by hand, and between copies the plan is out of date (`research.md`, Before, and the counted example, which is ours).
- **The moment they're paying for:** the same 12 decisions, and the plan is a shared page in ChatGPT Space set to update from the connected Slack: 0 copied by hand, and the team opens the same page (`research.md` rows 2, 3, 4). They still check it before sharing (row 12).

## The 10 titles
Thumbnail words: LEARN, CHATGPT, SPACE, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title.
All 10 were written before the gate was run (`mistakes.md`, L21): 7 scored 76 for `no-number` ("Slack" does not count as a name for the tool).
Then `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | ChatGPT Space: Stop Copying 12 Slack Decisions by Hand | 54 | 94 | mobile |
| 2 | ChatGPT Space: 12 Decisions, 0 Copied by Hand | 45 | 94 | mobile; reads as a stat, not a scene |
| 3 | ChatGPT Space (Nov 20): Plans That Stay Current | 47 | 94 | mobile; vague ("plans") |
| 4 | ChatGPT Space: A Project Plan That Updates From Slack | 53 | 76 | mobile, no-number |
| 5 | ChatGPT Space: Pages That Keep Up With Your Slack | 49 | 76 | mobile, no-number |
| 6 | ChatGPT Space: The Shared Plan That Updates Itself | 50 | 76 | mobile, no-number; "itself" drops "set to" |
| 7 | ChatGPT Space Is on Plus: Live Pages From Your Apps | 51 | 76 | mobile, no-number; "live" overclaims speed |
| 8 | ChatGPT Space Replaces Library: Pages That Update | 49 | 76 | mobile, no-number |
| 9 | ChatGPT Space: Your Status Deck, Updated From Slack | 51 | 76 | mobile, no-number |
| 10 | ChatGPT Space: Why Your Team Plan Is Always Stale | 49 | 76 | mobile, no-number; sells the pain only |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CHATGPT SPACE IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **ChatGPT Space: Stop Copying 12 Slack Decisions by Hand** | 94 | 66 | mobile, duplicate (chatgpt, space), thumb-length 6 (by design) |
| ChatGPT Space: 12 Decisions, 0 Copied by Hand | 94 | 66 | same |
| ChatGPT Space (Nov 20): Plans That Stay Current | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "ChatGPT Space: Stop Copying 12 Slack..." and the subject survives.

## Chosen
**ChatGPT Space: Stop Copying 12 Slack Decisions by Hand** (54 characters; subject at character 1; the number 12 and the names ChatGPT, Slack; no thumbnail word besides the topic's name).
The promise is the viewer's moment: the decisions from Slack reach the plan without anyone copying them. True as worded once the page is set to update from the connected Slack (`research.md` rows 3, 4); 12 is our counted example, said to be ours in the description.
The first seconds confirm it: the hook names ChatGPT Space, the 12 Slack decisions copied by hand, and the fix (set the plan to update itself).

## Thumbnail text
**LEARN CHATGPT SPACE IN 60 SECONDS** (brand card). Picture: the mascot, left, in a scorekeeper's flat cap; bottom centre, a page "TEAM PLAN" with teal rows filling in from a small chat window of decision bubbles, linked by a teal line; nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| chatgpt space | ChatGPT, Space | line 1 |
| chatgpt space slack | ChatGPT, Space, Slack | line 1 |
| chatgpt pages that update automatically | ChatGPT (the rest in the description: "pages", "update automatically") | line 1 |

Proposed first two description lines (step 5):
1. `ChatGPT Space explained in 60 seconds: pages and presentations you build with ChatGPT and share, which you can set to update automatically from your connected apps, like a project plan that stays current with decisions from Slack.`
2. `Rolling out to ChatGPT Plus (18+) from November 20, 2026. Before, a plan was a reply or a Library file (OpenAI's pages don't say it updates itself), so in our example 12 Slack decisions meant 12 copies by hand.` (fixed after `claims.md`: narrower)
