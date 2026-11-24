# Research: Claude Ship vs an AI review that only leaves comments

Done 2026-11-24 (daily run, workflow step 1). The maker's own pages first, fetched with `curl -sL` and a browser user agent, stripped of HTML (lessons L20, L40;
text under `$RUNNER_TEMP/claude-ship/src/`). Each fetch was checked to be the article (a sentence found with `str.find`). TechCrunch [TC] is used only to confirm.
One product with three parts, all on the maker's pages, so no Deep-Research fan-out. The docs URL `code.claude.com/docs/en/claude-approvals` is a 404; the Approvals page is `/docs/en/approvals`.

Sources:
- [BLOG] https://claude.com/resources/articles/introducing-claude-ship (Anthropic, "Introducing Claude Ship", November 23, 2026)
- [DOCS] https://code.claude.com/docs/en/claude-ship (Claude Code Docs, "Claude Ship")
- [STEW] https://code.claude.com/docs/en/pr-steward (Claude Code Docs, "PR Steward")
- [APPR] https://code.claude.com/docs/en/approvals (Claude Code Docs, "Claude Approvals")
- [POL] https://code.claude.com/docs/en/approvals-policy (Claude Code Docs, policy file reference)
- [TC] https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/ (TechCrunch, Sarah Perez, November 23, 2026)

## Premise check
**Holds.** [BLOG]: "Claude can now review pull requests, fix them, and approve the ones that a team's policy allows." and "That's why we built Claude Ship , available today in beta."
Dated November 23, 2026, one day before this episode, so "just launched" is allowed (brand rule: about a month or less).

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | What, when, beta | "Claude can now review pull requests, fix them, and approve the ones that a team's policy allows." / "That's why we built Claude Ship , available today in beta." (dated November 23, 2026) | [BLOG] |
| 2 | The three parts | "Claude Ship is made up of Code Review , which is already generally available, and two new agents in beta: PR Steward and Claude Approvals. Together, they take a pull request through review, fixes, and an approval decision so teams don't have to manage each step manually." | [BLOG] |
| 3 | The pain today, in the maker's words | "Anyone who has opened a pull request knows how this goes. They start on the next thing, and then the review comes back. So they stop, dig back into the old code, push a fix, and wait for the review to run again. Then they go find someone to approve it." | [BLOG] |
| 4 | Why: a person approves every change | "Most teams want a person to approve every change, and that's easy to keep up with when people write every line. But a lot of developers build with agents now." | [BLOG] |
| 5 | PR Steward: what it works on | "PR Steward works to keep a PR green, but is designed not to approve or merge pull requests. It jumps in on failing CI checks, merge conflicts, and review feedback from Code Review, other review tools, or team members." | [BLOG] |
| 6 | PR Steward says what it changed | "After every push, it comments with what it changed and how to undo it." | [BLOG] |
| 7 | PR Steward attempts, with limits | "It pushes commits to address review feedback, and attempts to fix failing checks and resolve merge conflicts." / "A failing check : attempts a fix when the cause is in code that the pull request touches" | [STEW] |
| 8 | You start your next change | "With it on, you can open a pull request and start your next change while PR Steward works on the failing checks, conflicts, and review comments that follow." | [STEW] |
| 9 | Steering and stopping it | "Developers can comment @claude with an instruction to steer the work, or @claude stop to have it step back." | [BLOG] |
| 10 | Claude Approvals: the policy file | "From there, Claude Approvals applies an approval policy that the team writes as a file in the repository. Claude can approve routine changes on its own if the policy allows it, or can require deeper human sign-off for certain scenarios." | [BLOG] |
| 11 | Policy example: risky vs routine | "Use Approvals to set how many people have to approve a change, with more on risky changes and fewer on routine ones. For example, billing code can need two people, and test fixtures can need one person once Code Review passes." | [APPR] |
| 12 | The file | "You write a policy as a list of rules in .claude/approvals.yml ." | [APPR] |
| 13 | Observe mode first | "For most customers, we recommend enabling this first in observe-only mode to build confidence before configuring branch protection to require Claude Approvals' green light." | [BLOG] |
| 14 | Approvals blocks only where required | "The check blocks a merge only where you make it a required check in GitHub , and normally not in observe mode." | [DOCS] |
| 15 | What merges is decided by settings and GitHub rules | "Your settings and GitHub branch rules determine what merges." | [DOCS] |
| 16 | It may miss things | "Claude Ship uses AI and may miss bugs, security vulnerabilities, or other issues." | [DOCS] |
| 17 | Code Review | "Code Review performs an in-depth review of pull requests against the codebase through multiple lenses. It collects findings, adversarially verifies them, categorizes them, and posts them to a PR." | [BLOG] |
| 18 | The maker's number | "On the Claude Code team, where Claude's review is one layer of a broader process, merged PRs more than doubled from June to September while the share reverted fell by more than 40%." | [BLOG] |
| 19 | Bigger example: a docs fix | "Code Review found nothing blocking, a docs reviewer signed off, Claude Approvals passed, and the fix merged that same evening." | [BLOG] |
| 20 | Who can use it | "Claude Ship is available on Claude Team and Enterprise plans for repositories on GitHub. Code Review is generally available , and PR Steward and Claude Approvals are in beta." | [BLOG] |
| 21 | Not for some orgs | "Claude Ship is not available to organizations with Zero Data Retention, the HIPAA configuration, or customer-managed encryption keys." | [BLOG] |
| 22 | Cost | "Claude Ship usage is billed on tokens, so turning it on can add to an organization's costs." | [BLOG] |
| 23 | /ship for one developer | "When a change is ready, they run /ship . Claude pushes it, opens the PR, reviews the change, and works on feedback and failing checks to help get it ready to merge." | [BLOG] |
| 24 | Merges with no person looking are possible | "A pull request can merge when nobody but its author has looked at it." | [APPR] |
| 25 | Press confirms the approval agent | "it also includes an agent that can approve code changes automatically based on policies set by a development team." | [TC] |

## Before (the predecessor, from the same sources)
The maker names the old way itself: the review comes back, "they stop, dig back into the old code, push a fix, and wait for the review to run again. Then they go find someone to approve it" (row 3),
and "Most teams want a person to approve every change" (row 4). Code Review alone (generally available before) found problems and posted them (row 17); the fixes and the approval stayed with people.
The topic's "before" says "an AI review only left comments": that is Code Review without PR Steward and Approvals. The video's before says "the AI review left comments; you fixed them", never "AI reviews were useless".

## The counted example (ours, invented)
**One routine pull request** (a small docs fix) with **1 failing check, 1 merge conflict and 1 review comment**, then **1 approval to chase**: 4 times you stop your next task.
Meter: **"TIMES YOU STOP YOUR NEXT TASK"**, 0 to 4. Before: it climbs to 4. Now: it stays at 0 in our example, because PR Steward works on the check, the conflict and the comment (rows 5, 7, 8)
and the team's policy file lets Claude approve this kind of routine change (rows 10, 11). Both "now" conditions are said: it **attempts** the fixes, and Claude approves **only if your policy allows**.
Anthropic gives no number for this example; the video claims none for it. Said "our example" on screen and in the description.
Proof: Anthropic's own number, merged PRs on the Claude Code team "more than doubled from June to September", where Claude's review is "one layer of a broader process" (row 18). Bigger example: the docs fix that merged the same evening, with a docs reviewer's sign-off (row 19).

## Narrowing conditions (write them into every line, lesson L26)
- **Beta**: PR Steward and Claude Approvals are in beta; Code Review is generally available (rows 1, 2, 20). Say "in beta" with the launch.
- **Who**: Claude Team and Enterprise plans, repositories on GitHub (row 20); not with Zero Data Retention, HIPAA or CMEK (row 21). Description, and the NOW card.
- **PR Steward attempts** fixes: failing checks only "when the cause is in code that the pull request touches" (row 7). Say "works on" or "tries to fix", never "always fixes" or "fixes everything".
- **PR Steward never approves or merges** (row 5). Approving is Claude Approvals' job.
- **Claude approves routine changes only if the team's policy file allows it** (row 10); risky changes can need people (row 11). Never "Claude approves your pull requests" without "if your policy allows"; never "no humans needed".
- **Observe mode first** is Anthropic's recommendation (row 13); the check blocks merges only where it is a required GitHub check (row 14).
- **It may miss bugs** (row 16): not "safe" or "bug-free".
- **Cost**: billed on tokens, can add to costs (row 22). Description.
- **"More than doubled"** is merged PRs on Anthropic's own Claude Code team, June to September, with Claude's review as "one layer of a broader process" (row 18). Anthropic gives it in its Code Review paragraph; never "Claude Ship doubles your output". Whole on screen: "MORE THAN 2X".
- **The example is ours**: 1 check, 1 conflict, 1 comment, 1 approval; 4 stops before, 0 now.

## Left out, and why
- The "share reverted fell by more than 40%": a second number with the same conditions; one proof is enough.
- /ship and /steward commands, Quick/Standard/Deep review levels, spend limits, the $10,000 credit offer: not the one idea; the description names /ship and links the post.
- Customer quotes: not the one idea.
- Policy file syntax (seats, overrides, classifiers): developer detail; on screen only the file name `.claude/approvals.yml` and "routine: Claude may approve / risky: 2 people".

## Where the analogy stops
The story is a harbour. Your pull request is a boat. Before: the boat waits in port; each time an inspector's note comes back you leave your next boat, row back and patch it yourself, then wait in line for the harbour master to stamp it.
Now: a dock crew robot (PR Steward) patches the leaks and leaves a note of what it changed; a second robot (Claude Approvals) reads the harbour's rulebook (the policy file) and stamps small routine boats itself; big cargo ships still wait for a person.
Where it stops: a real dock crew always finishes the job; PR Steward attempts fixes and can fail. A real harbour master's rulebook is law; the policy only blocks a merge where it is a required GitHub check.
