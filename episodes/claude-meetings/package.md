# Package: claude-meetings (workflow step 2)

Made 2026-11-23 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses an AI chatbot at work and spends part of every day on video calls; curious, not an engineer; their company may be on a Claude Team or Enterprise plan.
- **The pain today:** the Google Meet call ends, and the work starts: someone still writes up the notes and the plan, and the question nobody could answer ("what did last year's cost?") waits for "I'll check later".
- **The moment they're paying for:** the same call, and the plan is already written when you hang up: Claude sat in as a visible participant, wrote up the doc while teammates edited it,
  looked up last year's cost after asking first, put the timeline on a whiteboard, and wrote the notes and action items (`research.md` rows 4, 7, 9-12). No time-saved number: the maker gives none.

## The 10 titles
`python3 .claude/skills/yt-package/title.py titles.txt` (alone). Thumbnail words: LEARN, CLAUDE, MEETINGS, IN, 60, SECONDS, so no "in", "learn", "60" or "seconds" in the title.
A first round of 10 without a number all scored 76 (`no-number`, `mobile`); this is the second round.

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Claude Meetings 2026: AI Builds the Plan Live | 45 | 94 | mobile |
| 2 | Claude Meetings 2026: Plan Done on the Call | 43 | 94 | mobile ("done" is more than the maker says: teammates still edit) |
| 3 | Claude Meetings: The Plan Done by 1 Call's End | 46 | 94 | mobile, awkward |
| 4 | Claude Meetings: 1 Call, the Plan Already Done | 46 | 94 | mobile |
| 5 | Claude Meetings (Nov 2026): AI Writes the Plan | 46 | 94 | mobile |
| 6 | Claude Meetings 2026: Notes Done on the Call | 44 | 94 | mobile |
| 7 | Claude Meetings: AI Builds the Plan Live | 40 | 90 | no-number |
| 8 | Claude Meetings: AI Joins Your Google Meet | 42 | 76 | mobile, no-number |
| 9 | Claude Meetings: Notes, Doc and Plan, Live | 42 | 76 | mobile, no-number |
| 10 | Claude Meetings: Zero Follow-Up Work After Calls | 48 | 76 | mobile, no-number, and an overclaim |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CLAUDE MEETINGS IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Claude Meetings 2026: AI Builds the Plan Live** | 94 | 66 | mobile, duplicate (claude, meetings), thumb-length 6 (the last two by design) |
| Claude Meetings 2026: Plan Done on the Call | 94 | 66 | same |
| Claude Meetings: The Plan Done by 1 Call's End | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Claude Meetings 2026: AI Builds the..." and the subject survives.

## Chosen
**Claude Meetings 2026: AI Builds the Plan Live** (45 characters; subject at character 1; the year as the number; no thumbnail word besides the topic's name).
The promise: the viewer's moment, the plan written during the call ("Claude also works with you live to build docs", "teammates on the invite can edit the plan while you keep talking", `research.md` rows 9, 11).
The first seconds confirm it: the hook names Claude Meetings and says it writes the plan with you before you hang up.

## Thumbnail text
**LEARN CLAUDE MEETINGS IN 60 SECONDS** (brand card). Picture: the mascot in a headset, left; bottom centre, a video-call grid whose one tile is the teal-screen robot, with a doc filling with lines beside it.

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude meetings | Claude, Meetings | line 1 |
| claude meetings 2026 | Claude, Meetings, 2026 | line 1 |
| claude ai meetings | Claude, AI, Meetings | line 1 |

"claude google meet" was left out of the three because the title has no room for "Google Meet"; description line 1 carries it.

Proposed first two description lines (step 5):
1. `Claude Meetings (2026), explained in 60 seconds: Anthropic's AI joins your Google Meet call as a visible participant and builds the plan live while you talk.`
2. `Before, the notes, the plan and the lookups waited until after the call; now Claude AI writes the doc, the whiteboard, the notes and the action items during it (beta, Team and Enterprise).`
