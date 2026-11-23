# Research: ChatGPT Space live pages vs a plan you update by hand

Done 2026-11-23 (daily run, workflow step 1). The maker's own pages only, fetched with `curl -sL` and stripped of HTML (lesson L20; text under
`$RUNNER_TEMP/chatgpt-space-live-pages/src/`). Two items (before, new) on two OpenAI pages, so they were read directly instead of the Deep-Research fan-out.
No press needed: the video uses no number the maker does not give (the release date, the age limit, the plans); the counted example is ours and is said to be.

Sources:
- [RN] https://help.openai.com/en/articles/6825453-chatgpt-release-notes (OpenAI Help Center, "ChatGPT release notes")
- [SPACE] https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt (OpenAI Help Center, "Getting started with Space in ChatGPT", updated about 2026-11-20)

## Premise check
**Holds.** [RN], November 20, 2026, "ChatGPT Space is rolling out to Plus": "Starting today, ChatGPT Space is rolling out globally to Plus users ages 18 and older. In Space, you can create interactive pages and presentations with ChatGPT, then invite other people with Space access to build on them with you. You can also set pages and slides to automatically update based on your connected apps and tools."
and "Try making a to-do list that updates itself, a study guide with a 3D model you can explore, or a project plan that stays current with decisions from Slack."
Released 3 days before this episode, so "just rolled out to Plus" is allowed (brand rule: about a month or less).

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | Release, who | "Starting today, ChatGPT Space is rolling out globally to Plus users ages 18 and older." (entry dated November 20, 2026) | [RN] |
| 2 | What you make, and sharing | "In Space, you can create interactive pages and presentations with ChatGPT, then invite other people with Space access to build on them with you." | [RN] |
| 3 | Pages that update themselves | "You can also set pages and slides to automatically update based on your connected apps and tools." | [RN] |
| 4 | The Slack example (the maker's own) | "Try making a to-do list that updates itself, a study guide with a 3D model you can explore, or a project plan that stays current with decisions from Slack." | [RN] |
| 5 | Ask for changes in a comment | "Tag ChatGPT in a comment to ask for changes." | [RN] |
| 6 | Who can open a shared page | "To open a shared page or presentation, you need permission to view it and must be signed in to a Plus, Pro, Business, or Enterprise account with Space access. People on Free can’t open shared pages or presentations. Public links aren’t available." | [RN] |
| 7 | It replaces Library | "To get started, open Space in the sidebar. It replaces Library and is your new home for pages, slides, images, and uploaded files." | [RN] |
| 8 | Where | "Use Space on the web, desktop app, and iOS and Android to create and edit pages." | [RN] |
| 9 | Before: Library kept files | March 23, 2026, "File Library in ChatGPT": "When you upload or create a file—whether it’s a PDF, spreadsheet, image, or more—it’s automatically saved to your Library." | [RN] |
| 10 | What a page is | "A page is an editable document. For example, you can use a page for a project brief, meeting notes, a research summary, or a team update. You and your collaborators can edit the same page, and each person can ask their own ChatGPT to help with the content." | [SPACE] |
| 11 | Pages from a conversation | "Ask ChatGPT to create a page. Describe what it should contain and include any files or context it needs." and the example "Create a page from this conversation with the project goals, decisions, and next steps." | [SPACE] |
| 12 | Check before sharing | "Check names, dates, calculations, and source information before using or sharing the page." | [SPACE] |
| 13 | Copied info is visible to readers | "If you or ChatGPT copy or summarize information from a source onto a shared page, people who can view the page can read that information, even if they cannot open the original source." | [SPACE] |
| 14 | Earlier tiers | September 29, 2026, "Organize your work in ChatGPT Space": "Available to eligible Pro, Business, and Enterprise users in the ChatGPT desktop app and on the web." | [RN] |
| 15 | Rollout is gradual | "Space is rolling out to eligible ChatGPT Plus accounts. ... If you still don’t see Space, it may not be available for your account yet." | [SPACE] |

## Before (the predecessor, from the same sources)
On Plus, ChatGPT's work lived in the chat and in Library: a file you "upload or create" was "automatically saved to your Library" (row 9). Nothing in the maker's pages says a Library file updates itself.
So, in our example, a shared plan or status page stays as current as the last time someone edited it (our inference; OpenAI's pages don't say a Library file updates itself, `claims.md` row 27). **The scene "you copy this week's decisions from Slack into the plan by hand" is ours** (the episode's counted example), not a maker's claim; the description says so.

## The counted example (ours, invented)
One project plan, shared with the team; **12 decisions** made in the team's Slack this week. Before: 12 copy-pastes by hand, and the plan is stale between them. Now: the plan is set to update from Slack (row 3, the maker's own example in row 4), so the copies by hand stay at 0.
OpenAI gives no number for speed or time saved; the video claims none. The "0 by hand" is about copying, not checking: OpenAI asks you to check names, dates and sources before sharing (row 12), and the video says so.

## Narrowing conditions (write them into every line, lesson L26)
- **Plus, 18 and older, rolling out**: "rolling out globally to Plus users ages 18 and older"; not every Plus account has it yet (row 15). Pro, Business and Enterprise had Space since 2026-09-29 (row 14).
- **"Can be set to" update**: pages and slides update automatically only once you set them to, and only "based on your connected apps and tools" (row 3): Slack must be connected. Say "set it to", never "it updates on its own" without the setting.
- **How often, how fast**: not documented. Never say "instantly", "in real time" (real time is said only of co-editing, in [SPACE]) or "every minute".
- **Sharing**: only people with Space access on Plus, Pro, Business or Enterprise; Free can't open it; no public links (row 6). Never "share with anyone".
- **Still check it**: OpenAI asks you to check names, dates, calculations and sources before sharing (row 12). Never "no work at all"; say "no copying by hand".
- **Slack is an example**: "decisions from Slack" is OpenAI's example; other connected apps work too ("connected apps and tools").

## Left out, and why
- Sites, Slides details, Sheets ("coming soon"), dots, 3D study guides: not the one idea.
- How the update is set up step by step: not documented on either page; the video says "set it to update", nothing more.
- Data residency, training and Memory settings: true, but not the idea; the description links the help page.

## Where the analogy stops
The story is a hand-turned scoreboard (someone climbs up and changes the numbers by hand) vs a scoreboard wired to the game. A real live scoreboard updates the instant a point is scored; OpenAI does not say how often a page updates, so the video never says "instantly". And the score on a wired board is always right; a page written by ChatGPT should still be checked (row 12).
