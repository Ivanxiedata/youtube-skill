# Research: apps that open in Claude (MCP Apps, 2026-11-10) vs interactive connectors' small live preview

Done 2026-11-23 (daily run, workflow step 1). The maker's own pages only, fetched with `curl -sL` and stripped of HTML (lesson L20; text under
`$RUNNER_TEMP/claude-apps-open-in-chat/src/`). Quotes found with Python `str.find` (L29). Two items (before, new), so the pages were read directly, no Deep-Research fan-out.

Sources:
- [NOV] https://claude.com/resources/articles/interactive-connectors-full-tool ("Your apps can now open in Claude, and Claude can work in them", Claude by Anthropic, November 10, 2026)
- [JAN] https://claude.com/resources/articles/interactive-tools-in-claude ("Your favorite work tools are now interactive connectors inside Claude", January 26, 2026): the predecessor, linked from [NOV] as "interactive connectors"
- [MCP] https://modelcontextprotocol.io/extensions/apps/overview (MCP Apps overview, the open extension)
- [RN] https://support.claude.com/en/articles/12138966-release-notes (Claude release notes): no November 10 entry for this; it has the March 25, 2026 mobile entry for interactive apps. So [NOV] is the source for the new feature.

## Premise check
**Holds.** [NOV]: "Earlier this year, we launched interactive connectors to bring a small live view of tools into Claude. Starting today, where a connector supports it, you can open a tool beside your conversation or expand it to full screen, and ask Claude to work alongside you and make changes directly."
13 days old on 2026-11-23, so "just" would be allowed (brand: a month or less); the script does not use it.

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | Name, date | Title "Your apps can now open in Claude, and Claude can work in them"; "Date November 10, 2026"; product "Claude apps, MCP" | [NOV] |
| 2 | One line | "Our partners can now embed their apps directly in Claude, so you and Claude can work in the same tool, on the same screen, without switching tabs." | [NOV] |
| 3 | Before: a small live view | "Earlier this year, we launched interactive connectors to bring a small live view of tools into Claude." | [NOV] |
| 4 | New: beside the chat or full screen, where supported | "Starting today, where a connector supports it, you can open a tool beside your conversation or expand it to full screen, and ask Claude to work alongside you and make changes directly." | [NOV] |
| 5 | Claude makes changes; you approve; you see them as they happen | "You can ask Claude to make changes to a page, row, or file that you have open and approve its actions the same way you approve a connector's actions. Changes appear in the tool as Claude makes them, so you can keep working right alongside it." | [NOV] |
| 6 | The whole tool, full editor, your own account (Notion named) | "The whole tool opens next to your conversation." / "You can work in the tool and hide the chat or go full screen when you need room. For tools like Confluence or Notion, that means you get the full editor, signed into your own account, rather than a limited preview." | [NOV] |
| 7 | Open without a prompt; pin | "Open a connected tool directly, without having to write a Claude prompt." / "Pin the tools you use most." | [NOV] |
| 8 | Who, where | "This is rolling out on the web and in the Claude desktop app on all plans, as part of the new Claude experience that brings chat and Cowork together. You'll see these features once your account is updated with the new Claude or your organization turns it on." | [NOV] |
| 9 | Which tools first | "We're starting with a small group of tools from our directory, including Asana, Canva, Carta, Dropbox, monday.com, Smartsheet, Vercel, and Webflow." | [NOV] |
| 10 | Notion | "Notion. Ask Claude to create a Notion doc or database. Build as you chat, or edit it yourself, without leaving Claude." | [NOV] |
| 11 | How: MCP Apps, an open extension | "Interactive connectors run on MCP Apps, the open extension to the Model Context Protocol that lets an MCP server bring its own interface into AI applications. An MCP App you build isn't limited to Claude and can run in any AI application that supports the extension." | [NOV] |
| 12 | How: more of the extension now | "Until now, MCP Apps in Claude have mainly appeared as interactive views in the conversation. Claude now supports more of the extension, such as app tools, along with embedded sites, so a developer's full app can run inside Claude." / "Support for these capabilities is in public preview for developers." | [NOV] |
| 13 | How it runs (safe box) | "MCP Apps run in a sandboxed iframe controlled by the host. They can't access the parent page, steal cookies, or escape their container." | [MCP] |
| 14 | Before, in its own words (January) | "Starting today, we're bringing interactive connectors to Claude with MCP Apps. You can open and interact with tools in Claude." / "those tools show up as interactive connectors right in the conversation" | [JAN] |
| 15 | MCP is an open standard | "The underlying technology is built on the Model Context Protocol (MCP), the open standard for connecting tools to AI applications." | [JAN] |
| 16 | Admins | "If your organization already allows all of a connector's tools, its new features appear as they roll out. Admins can restrict a connector's tools the same way they do today." | [NOV] |

## Our counted example (invented, inside the maker's use case)
**Ten tasks in one Notion project page** (rows 5, 6, 10: "make changes to a page, row, or file that you have open"; Notion "doc or database").
- Before: the meter "TAB SWITCHES" counts one trip to the Notion tab per task: 10. This is our illustration of "a limited preview" (row 6) vs "without switching tabs" (row 2), not a maker's number. The maker gives no count, no time saved and no speed.
- Now: the page is open beside the chat; Claude edits the ten tasks there; the meter stays at 0.

## Narrowing, so the video does not overclaim (write these into every line, L26)
- **Where the app supports it** ("where a connector supports it", row 4); a **small group of tools to start** (row 9). Notion and Asana are both on [NOV]'s list of tools you can use today (rows 9, 10).
- **Rolling out**: web and desktop app, all plans, as part of the new Claude experience; you see it once your account is updated or your organization turns it on (row 8). Not said for mobile.
- **You approve** Claude's actions, the same way as a connector's (row 5). Never "Claude does it on its own".
- **Before** = interactive connectors (January 26, 2026): a small live view **in the conversation** (rows 3, 14); they could already do some work in that view (Asana timelines, Slack drafts, [JAN]). So "before" is "a small preview, not the full editor" (row 6), not "nothing". The tab switching is the gap row 2 names ("without switching tabs"), shown with our example.
- **No number** from the maker: no time saved, no count. The 10 is our example only.
- "Signed in as you" = "signed into your own account" (row 6), said for tools like Confluence or Notion.
- The topic's "you moved Claude's answer into the tool yourself" is not in the maker's words: left out of the script.
- Developers: MCP Apps support for the new capabilities is in **public preview** (row 12).

## Left out, and why
- Pinning, opening without a prompt, the sidebar and + menu (row 7): true, not the viewer's moment; in the description.
- Adobe, Atlassian, Box, HubSpot examples; Figma, Harvey, Shopify "also building": one tool (Notion) carries the story; the list is in the description.
- Admin controls (row 16), sandboxed iframe (row 13): description only.

## Where the analogy stops
The story: seeing a room through a small window vs the door opening and the helper working in the room beside you. Before: a small window onto the tool (the live preview);
for the real work you walked into the other room yourself (another tab). Now: the door is open; the whole room (the full editor) is beside you, and you watch the helper (Claude) work in it.
Where it stops: Claude still asks you to approve its actions (row 5); it is your own account, not a copy (row 6); and only some tools open this way so far (rows 4, 9).
The AI is drawn as a robot with a teal screen head (brand casting); the mascot is the user at a laptop.
