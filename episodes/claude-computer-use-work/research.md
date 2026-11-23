# Research: Claude computer use (beta, Team and Enterprise) vs working only through connectors

Done 2026-11-23 (daily run, workflow step 1). Anthropic's own help-center pages only, fetched with `curl -sL` and stripped of HTML (lesson L20;
text kept under `$RUNNER_TEMP/claude-computer-use-work/src/`). Two items (before, new), so the pages were read directly instead of the Deep-Research fan-out.
No press needed: every claim in the video is on the maker's pages. The maker gives **no speed or accuracy number** for computer use, so the video has none.

Sources:
- [Notes] https://support.claude.com/en/articles/12138966-release-notes (Claude Help Center, "Release notes", entry of November 20, 2026)
- [Setup] https://support.claude.com/en/articles/18483812-set-up-computer-use-for-team-and-enterprise-plans (Claude Help Center, "Set up computer use for Team and Enterprise plans")
- [Cowork] https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork (Claude Help Center, "Let Claude use your computer in Cowork", linked from [Setup])

## Premise check
**Holds.** [Notes], November 20, 2026: "Computer use (beta) for Team and Enterprise plans" / "Computer use lets Claude see a user's screen and work in the desktop apps they allow." / "It's now available in beta on Team and Enterprise plans, and is rolling out to organizations gradually."
The "no connector" part is the maker's own: [Cowork] "When computer use is enabled and Claude doesn't have a connector or tool for what you need, it may navigate to your screen directly—clicking, typing, and opening apps just like you would." and "Navigate apps that don’t have connectors—like an internal dashboard or a specialized tool your team uses."
Released 3 days before this episode, so "just" is allowed (brand rule: a month or less). It is **not new to Claude overall**: Pro and Max got a computer use research preview on March 23, 2026 ([Notes]); what is new is Team and Enterprise.

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | What it is | "Computer use lets Claude see a user's screen and work in the desktop apps they allow. Claude clicks and types like you would on Claude Desktop." | [Setup] |
| 2 | New, beta, Team and Enterprise, gradual | "Computer use (beta) for Team and Enterprise plans" (November 20, 2026) / "It's now available in beta on Team and Enterprise plans, and is rolling out to organizations gradually." | [Notes] |
| 3 | Off until an owner turns it on | "Computer use is in beta on Team and Enterprise plans, and it's off by default." / "Only an Owner or Primary Owner can change this setting." | [Setup] |
| 4 | It sees by screenshots | "Claude takes screenshots to see and navigate the screen, and they're saved with the chat." / "Claude takes screenshots of your computer to understand how to navigate the screen and the apps to which you’ve given permission." | [Setup], [Cowork] |
| 5 | For apps with no connector | "When computer use is enabled and Claude doesn't have a connector or tool for what you need, it may navigate to your screen directly—clicking, typing, and opening apps just like you would." / "Navigate apps that don’t have connectors—like an internal dashboard or a specialized tool your team uses." | [Cowork] |
| 6 | The order Claude picks (the how diagram) | "In Cowork, Claude uses the most precise tool first." "Connectors. If a connector is available—like Gmail, Google Drive, Microsoft 365, or Slack—Claude uses it. This is the fastest and most reliable path." "Browser. When there isn't a connector for the tool you need, Claude may work on your task in the browser built into the Claude Desktop app, or in your own Chrome browser..." "Screen interaction. Claude uses computer use to interact directly with your screen: clicking, typing, and navigating your desktop apps." | [Cowork] |
| 7 | You approve each app | "Claude asks for your permission before accessing each application. You’ll see a prompt and must approve before Claude can interact with that app. After that, Claude can keep using the app in that session without asking again, and you can stop Claude at any time." / "Each user approves apps themselves." | [Cowork], [Setup] |
| 8 | Admins can block or allow-list apps | "Block these apps: The apps on your block list, such as a password manager, are denied." "Allow only these apps: Every app is denied except the ones on your allow list. Users still approve each app." | [Setup] |
| 9 | Slower than a connector | "Screen interaction is slower than connectors. When Claude works through your screen instead of a direct integration, tasks take longer." / "pulling messages through your Slack connection takes seconds, but navigating Slack through your screen takes much longer and is more error-prone." | [Cowork] |
| 10 | Can need a second try | "Complex tasks sometimes need a second try. Computer use works well for many tasks, but may struggle with complex multi-step workflows." | [Cowork] |
| 11 | Your computer stays on | "Your desktop must be active. Your computer needs to be awake and the Claude Desktop app needs to be open for computer use to work." | [Cowork] |
| 12 | Where it works | "Claude Desktop , on macOS 14 or later and Windows." / "Computer use works only in the new Claude experience" / "It doesn't work in tasks started with the separate \"Cowork\" option, or in Claude Code." | [Setup] |
| 13 | Asks before unclear actions | "It's also trained and instructed to check with you about actions your request doesn't clearly cover, such as sending a message or submitting a form." | [Cowork] |
| 14 | Limits by app type | "Browsers, and many investment, trading, and crypto apps: Claude can see them, but can't click or type in them." "Terminals and code editors: Claude can click and scroll, but can't type." "Most other apps: Claude has full access." | [Cowork] |
| 15 | No sandbox; risk | "Computer use has no sandbox between Claude and a user's applications. Content on the screen, such as web pages or emails, could cause Claude to take unintended actions." | [Setup] |
| 16 | Background on Mac 15+ | "On macOS (version 15 or later), Claude works in background windows, so you can keep using your computer while it runs." | [Cowork] |

## Before (the predecessor)
On a Team or Enterprise plan before November 20, 2026, Claude reached your work tools through **connectors** ("like Gmail, Google Drive, Microsoft 365, or Slack", row 6) and the browser (browser use in Cowork has its own Team and Enterprise setup article, linked from [Setup]).
For a **desktop app with no connector** (the maker's own example: "an internal dashboard or a specialized tool your team uses", row 5), Claude could not click or type in it: you copied what Claude needed out of the app, pasted it into the chat, then clicked the answer back into the app yourself.
This "before" is the logic of the maker's own sentence (computer use is what Claude does when "Claude doesn't have a connector or tool for what you need"); the maker does not describe the copy-paste habit in words, so the video shows it as *your* scene, not as a quote.

## Our counted example
**20 orders in your team's order tool, a desktop app with no connector, to be typed into a spreadsheet.** Invented inside the maker's use case (row 5).
Meter **"YOUR COPY-PASTES"**: before, one copy and one paste per order = 20 trips (shown as 20); now, Claude does the clicking and typing and you **approve 2 apps** (the order tool and the spreadsheet, row 7), so the meter shows 2 "APPROVALS".
The meter counts *your* steps, not time: the maker says screen work is slower than a connector (row 9), so the video never says "faster".

**Narrowing, so the video does not overclaim:**
- New **for Team and Enterprise**, **in beta**, **rolling out gradually**, **off until an owner turns it on** (rows 2-3). Pro and Max have had a research preview since March 2026: never "Claude can now use computers" without "on Team and Enterprise".
- It works in the **apps you allow**: you approve each app, once per session (row 7); admins can block apps (row 8). Never "any app" or "every app".
- Browsers and many trading apps: see only, no clicking (row 14). Our example uses a desktop order tool and a spreadsheet ("most other apps: full access").
- **Slower than a connector** and complex tasks **sometimes need a second try** (rows 9-10): the video says connectors come first because they are faster, and never calls computer use fast or reliable.
- Claude "may" use the screen when there is no connector or tool (row 5, "may navigate"): it picks the most precise tool first (row 6).
- Your computer must be awake with Claude Desktop open (row 11); macOS 14 or later, or Windows (row 12).
- Screenshots are saved with the chat and can hold confidential data (row 4): in the description.

## Left out, and why
- MDM keys, PPPC payloads, custom roles, the 15-minute and one-hour waits, compliance setups that can't have it: admin detail, not the viewer's moment; a line in the description.
- Claude in Chrome and the built-in browser: a separate tool; only named as the middle step of the order (row 6).
- The automated action check and prompt-injection risk (row 15): one line in the description; no room for it in 60 s beyond "you approve each app".

## Where the analogy stops
The story: **a new coworker at your desk.** Before, the coworker could only take notes you read out to them (connectors and copy-paste); now they look over your shoulder at your screen and use the mouse and keyboard on the apps you said they could touch.
Where it stops: Claude sees through screenshots, not continuously (row 4); it asks per app (row 7); it is slower than a direct line (row 9); and it is in beta (row 2).
The AI is drawn as a robot with a teal screen head (brand casting); the mascot is you, the worker with the 20 orders.
