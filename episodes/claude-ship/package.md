# Package: claude-ship (workflow step 2)

Made 2026-11-24 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who writes code with a coding assistant at work and opens pull requests on GitHub; curious, not a machine-learning engineer.
- **The pain today:** you open one routine pull request and start the next task; then a check fails, a merge conflict appears, a review comment arrives, and each time you stop, dig back into the old code and push a fix; then you go find a person to approve it (Anthropic's own words, `research.md` row 3; the 4 stops are our example).
- **The moment they're paying for:** you open the pull request and keep coding; PR Steward tries the fixes and notes what it changed; Claude Approvals reads your team's policy file and, where it allows, approves the routine change itself; risky changes still wait for people (rows 5-8, 10, 11).

## The 10 titles
Thumbnail words: LEARN, CLAUDE, SHIP, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title.
The gate was read first (lesson L21): `title.py` on 2 titles before the 10, every title with a digit. Then `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Claude Ship: 1 PR, 3 Fixes and an Approval While You Work | 57 | 98 | mobile; "3 Fixes" and "an Approval" drop "tries" and "if your policy allows" (narrower) |
| 2 | Claude Ship: 4 Interruptions per Pull Request Become 0 | 54 | 94 | mobile; our invented number as a fact |
| 3 | Claude Ship (Nov 23): Your PR Fixed While You Keep Coding | 57 | 94 | mobile; "fixed" drops "attempts" |
| 4 | Claude Ship: Stop Dropping Your Work 4 Times for 1 PR | 53 | 94 | mobile; our invented number as a fact |
| 5 | **Claude Ship: 1 Policy File Lets AI Approve Routine PRs** | 54 | 94 | mobile |
| 6 | Claude Ship Beta: 3 Agents Review, Fix and Approve Your PR | 58 | 94 | mobile; "Approve Your PR" without its condition |
| 7 | Claude Ship: Routine PRs Approved by AI, 1 Policy File Decides | 62 | 80 | length, mobile |
| 8 | Claude Ship: 3 AI Agents Take Your PR From Review to Approval | 61 | 76 | length, mobile |
| 9 | Claude Ship: Failing Checks Fixed, Routine PRs Approved, 1 Rule File | 68 | 76 | length, mobile |
| 10 | Claude Ship: AI Fixes Your PR, Approves If Policy Allows (Beta) | 63 | 62 | length, mobile, no-number |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CLAUDE SHIP IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Claude Ship: 1 Policy File Lets AI Approve Routine PRs** | 94 | 66 | mobile, duplicate (claude, ship), thumb-length 6 (by design) |
| Claude Ship: Stop Dropping Your Work 4 Times for 1 PR | 94 | 66 | same; the 4 is our example |
| Claude Ship Beta: 3 Agents Review, Fix and Approve Your PR | 94 | 66 | same; approval without its condition |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Claude Ship: 1 Policy File Lets AI..." and the subject survives.

## Chosen
**Claude Ship: 1 Policy File Lets AI Approve Routine PRs** (54 characters; subject at character 1; the number 1; no thumbnail word besides the topic's name).
The promise is the viewer's moment: a routine pull request no longer waits in line for a person, because the team's own policy file can let Claude approve it. True as worded, with its condition inside it:
"Claude can approve routine changes on its own if the policy allows it" (row 10), the policy is "a file in the repository" (`.claude/approvals.yml`, rows 10, 12). It says "routine", not every PR; risky changes can need people (row 11).
The first seconds confirm it: the hook names Claude Ship, the pull request, the fixes and "approves it, if your policy allows".

## Thumbnail text
**LEARN CLAUDE SHIP IN 60 SECONDS** (brand card). Picture: the mascot, left, in a ship captain's cap; bottom centre, a small boat with the sail "PR" and a teal stamp "APPROVED" beside a scroll "POLICY FILE"; nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it holds, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude ship | Claude, Ship | line 1 |
| claude ship approve prs | Claude, Ship, Approve, PRs | line 1 |
| claude ai policy file | Claude, AI, Policy, File | line 1 |

Proposed first two description lines (step 5):
1. `Claude Ship explained in 60 seconds: AI agents that take your GitHub PRs through review, fixes and an approval decision; PR Steward tries to fix failing checks, merge conflicts and review comments, and Claude Approvals can approve routine PRs on its own when your team's policy file allows it.`
2. `In beta since November 23, 2026, on Claude Team and Enterprise plans for GitHub repositories (Code Review is generally available). Our example: 1 routine pull request stopped you 4 times; now 0, if PR Steward's fixes work and your policy file lets Claude approve.`
