# Research: Google Antigravity /swarm (preview, 2026-11-09) vs one agent working the task alone

Done 2026-11-24 (daily run, workflow step 1). The maker's own pages first, fetched with `curl -sL` and stripped of HTML (lesson L20; text under
`$RUNNER_TEMP/antigravity-swarm/src/`). Quotes found with Python `str.find` (L29). Two items (before, new), so the pages were read directly, no Deep-Research fan-out.

Sources:
- [DOC] https://antigravity.google/docs/swarm (same text as https://antigravity.google/docs/swarm.md): "Swarm (/swarm)", Google Antigravity docs
- [CL] https://antigravity.google/docs/changelog (Antigravity changelog): v2.31.0, November 9, 2026, "/swarm, Font size setting, split-view plugins, and browser download approvals"
- [TC] https://www.testingcatalog.com/google-testing-agent-swarm-mode-for-antigravity/ ("Google testing Agent Swarm mode for Antigravity", Alexey Shabanov, 10 Nov 2026): press, for what the maker doesn't say

## Premise check
**Holds.** [DOC]: "The `/swarm` command runs a team of named agents that split your task, work on the pieces at the same time, and coordinate on one shared message board."
[CL] v2.31.0, November 9, 2026: "You can now use /swarm to coordinate multiple subagents over a message board to complete long-horizon tasks."
15 days old on 2026-11-24, so "just" would be allowed (brand: a month or less); the script does not need it. [DOC]: "Swarm is in preview."

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | One line | "The `/swarm` command runs a team of named agents that split your task, work on the pieces at the same time, and coordinate on one shared message board." | [DOC] |
| 2 | When to use it | "Use it when a task divides cleanly across separate files, packages, or questions, or when you want a second agent to review and test the changes before you see them." | [DOC] |
| 3 | Where, who | "Available on: Antigravity App, Antigravity CLI" / "The `/swarm` command is available on **all plans** across the Google Antigravity App and the Antigravity CLI (on business and enterprise accounts, when allowed by organization admin settings)." | [DOC] |
| 4 | Preview; quota cost | "**Preview**: Swarm is in preview. Every worker is its own agent, so a swarm uses quota much faster than a single conversation." | [DOC] |
| 5 | Your conversation becomes the coordinator | "When you run `/swarm <task>`, your current conversation becomes the swarm's **coordinator**" | [DOC] |
| 6 | It splits the task into named workers | "It names the swarm, divides the work into pieces that don't collide (for example, one worker per file or per package), and adds a named worker for each piece, such as `@parser`, `@api-tests`, or `@docs`." | [DOC] |
| 7 | Public brief on the board | "A worker starts with a clean context in its own conversation. Its brief, which says what it owns, what it must not touch, and what "done" looks like, is posted to the board so every member can see who is doing what." | [DOC] |
| 8 | The verifier (usually) | "The coordinator usually adds a `@verifier` for every two to four workers. The verifier reads the diffs, runs the tests, and reports problems to the worker that wrote the code, which then fixes them." | [DOC] |
| 9 | One shared board | "Assignments, questions between workers, diff summaries, and test results are posted to the shared board with `@name`, `@group`, or `@all` mentions. Workers don't message each other privately, so the whole team conversation stays in one place, in order." | [DOC] |
| 10 | Idle members wait for free | "A worker that has nothing to do, or a coordinator waiting for reports, goes to sleep on the board without using tokens. It wakes automatically when another member mentions it." | [DOC] |
| 11 | Coordinator doesn't code | "The coordinator doesn't do the technical work itself. It hands out tasks, judges what comes back, and reports to you, so it stays free to respond while the workers run." | [DOC] |
| 12 | Watch it live (App) | "The coordinator adds the workers and ends its reply with an **Open the Swarm UI** link. Click it to open the live **Swarm** pane in the side panel." / tabs **Board**, **Members**, **Graph** ("A diagram of who mentioned whom") | [DOC] |
| 13 | Keep talking to the coordinator | "Keep working with the coordinator in the main conversation while the swarm runs. Ask it for status at any time, or give it new instructions." | [DOC] |
| 14 | The maker's example (our counted example) | "/swarm Add input validation to the three API handlers in src/routes/users.ts, src/routes/orders.ts, and src/routes/products.ts. Give each handler its own worker, add tests next to each handler, and have a verifier run npm test when they finish." / "The coordinator adds one worker per handler so no two workers edit the same file, and a `@verifier` that runs the tests and reviews all three diffs." | [DOC] |
| 15 | Models, workspace | "Workers run on the same model as your conversation." / "Workers share your workspace by default." | [DOC] |
| 16 | Monitor | "The coordinator also adds a `@monitor` worker. It stays asleep while the swarm is making progress, and posts only if every member has gone quiet before the work is done" | [DOC] |
| 17 | Release | "November 9, 2026" / "You can now use /swarm to coordinate multiple subagents over a message board to complete long-horizon tasks." (v2.31.0) | [CL] |
| 18 | Best for / horizon | Comparison table: Swarm "Best for": "Broad tasks that split cleanly across independent files, packages, or investigation tracks"; "Typical horizon": "Minutes to hours"; "Plan tier": "All plans" | [DOC] |
| 19 | Before: one agent, one conversation | "For everyday coding and quick questions, prompt the default agent directly." and row 4's "a single conversation" | [DOC] |
| 20 | Others hid coordination (press, not the maker) | "Unlike the multi-agent modes in Kimi, Meta's Contemplating Mode, or Grok Heavy, where coordination is largely hidden, Antigravity would expose the agents' messages." | [TC] |

## Our counted example (the maker's own example prompt, row 14)
**3 API handlers (users, orders, products), validation and tests for each.**
- Before (our scene, the topic's "before"): one agent in one conversation takes the three files one after another; you read its changes and run the tests yourself after each.
  The meter "TESTS YOU RUN" climbs 1, 2, 3. This is our illustration, not a maker's number: the maker gives no time saved, no speed-up and no count of your checks.
- Now: the coordinator adds 3 workers, one per handler, working at the same time (rows 1, 14), and a `@verifier` that runs `npm test` and reviews all three diffs (row 14; the example prompt asks for it, row 8: "usually").
  The meter "TESTS YOU RUN" stays at 0; you read the coordinator's report and the board.

## Narrowing, so the video does not overclaim (write these into every line, L26)
- **Preview** (row 4). Say it where the feature is stated as available (now line, why line, description).
- **Costs more quota**: "a swarm uses quota much faster than a single conversation" (row 4). The honest catch; say it out loud in the why beat.
- **Works best when the task splits cleanly** across separate files, packages or questions (rows 2, 18). Our 3 separate files fit; never say "any task".
- **The verifier is usual, not guaranteed**: "usually adds a `@verifier` for every two to four workers" (row 8); in our example you ask for it (row 14). Say "a verifier" in the example, "usually" where it is general.
- **The verifier reports problems to the worker, which fixes them** (row 8); it does not "make the code correct"; the coordinator reports to you (row 11). You still read the result.
- **At the same time** = "work on the pieces at the same time" (row 1). No speed number: never "3x faster".
- **All plans**, Antigravity App and CLI; business and enterprise accounts only when the admin allows it (row 3).
- **Before** = one agent in one conversation (row 19) is the topic's framing; the maker does not say a single agent is slow or that you must test by hand. Show it as our scene ("you check each change yourself"), not as the maker's claim. The [TC] "coordination is largely hidden" line is press about other companies' products: left out of the video (voice.md: never say one tool beats another).
- **Workers you can watch**: the board, members and graph are on screen in the App pane and the CLI board (row 12); workers don't message each other privately (row 9), but you can message one worker directly (row 13 and [DOC] "Steer a swarm").

## Left out, and why
- `@monitor` (row 16), idle members sleeping without tokens (row 10), model choice per worker (row 15), per-worker working copies, the CLI keys: true, not the viewer's moment; some in the description.
- Boost, Teamwork, subagents comparison: one idea per video; one line in the description.
- [TC]'s speculation (Chief of Staff, the Hugging Face incident, benchmarks): press guesses, not facts.
- Gemini 4 model names: not needed.

## Where the analogy stops
The story: a kitchen during a dinner rush. Before: one cook makes three dishes one after another, and you taste each plate yourself.
Now: a head chef (the coordinator, your conversation) gives each of three cooks one dish, each order ticket pinned on one board everyone reads (the shared board), and a taster (the verifier) tastes every plate and sends it back to the cook who made it.
Where it stops: the chef doesn't cook (row 11); the taster is usual, not always (row 8); a full kitchen costs more (quota, row 4); it only helps when the dishes don't share one pan (the task splits cleanly, row 2).
Drawn: the workers and verifier as robots with teal screen heads (brand casting: the AI is visibly AI); the mascot is you at a laptop wearing a chef's hat.
