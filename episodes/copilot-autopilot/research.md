# Research: Microsoft Autopilot vs asking Copilot Chat one prompt at a time

Done 2026-11-24 (daily run, workflow step 1). The maker's own pages only, fetched with `curl -sL` and a browser `-A` user agent, stripped of HTML and checked to be the article (lessons L20, L40;
text under `$RUNNER_TEMP/copilot-autopilot/src/`). All five pages are Microsoft's; no press needed. One item (before, new), so no Deep-Research fan-out.
The starting source's product link led to the Autopilot product page [FEAT] and the September post that first introduced Autopilot [SEPT]; both were followed (L40).

Sources:
- [IGN] https://www.microsoft.com/en-us/copilot/blog/2026/11/17/copilot-at-microsoft-ignite-expanding-whats-possible-with-intelligence-built-for-work/ (Microsoft Copilot Blog, "Copilot at Microsoft Ignite: Expanding what's possible with intelligence built for work", Nov 17, 2026, Jared Spataro)
- [A365] https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753 (Microsoft Tech Community, Agent 365 Blog, "What's new in Microsoft Agent 365: Ignite 2026")
- [SN] https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/ (Official Microsoft Blog, "Ignite 2026: Building the frontier ecosystem", Nov 17, 2026, Satya Nadella's keynote, edited)
- [FEAT] https://www.microsoft.com/en-us/copilot/features/autopilot (Microsoft Copilot, "Autopilot: Your trusted personal agent", product page with FAQ)
- [SEPT] https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/ (Official Microsoft Blog, "Introducing the new Copilot with Home, Code and Autopilot", Sep 25, 2026, Jared Spataro)

## Premise check
**Holds, narrower on the date.** Autopilot was *introduced* on Sep 25, 2026 ([SEPT] "Autopilot is a persistent, proactive and personal agent that keeps working even when you're not." ... "Autopilot is expanding to private preview at the end of the month"),
and at Ignite on Nov 17, 2026 it *began rolling out to Frontier customers* ([IGN] "And Autopilot is beginning to roll out to Frontier customers today.").
So the video never says "announced at Ignite": it says "rolling out" / "now rolling out to Frontier customers" (7 days before this episode, so "new" is fine; brand rule: about a month or less).
Everything the topic names is in the maker's own words: always on, personal, across Microsoft 365 and Teams, its own Entra Agent ID, a named manager, checking with you before key actions (rows 2-8).

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | Rolling out to Frontier, Nov 17 | "And Autopilot is beginning to roll out to Frontier customers today." / "Autopilot is starting to rollout to customers in Frontier today." | [IGN] |
| 2 | What it is | "We're expanding what Copilot can do with Autopilot , a trusted autonomous agent that is personal to you, always on, and working for you." | [IGN] |
| 3 | Where it works, @mention it | "It shows up where people already work, like Teams, Outlook, chats, channels, and documents, so you can @mention it like a colleague." | [IGN] |
| 4 | Without waiting for a prompt | "It can watch Teams channels, follow up on emails, run recurring work, and manage a project—without waiting for a prompt." | [IGN] |
| 5 | The maker's own example: a supplier review | "And it can do things like set up and manage a full supplier review process: building the schedule and workback plan, then handling prep, meetings, and follow-ups on its own, right down to reaching out to stakeholders for updates." | [IGN] (same in [SEPT]) |
| 6 | Own ID and a named manager | "Each Autopilot has its own Microsoft Entra Agent ID and a named manager. IT can scope its access and block it anytime. Its sign-ins and actions are logged under its own name, so security teams have a clear audit trail." | [IGN] |
| 7 | Entra Agent ID for Autopilot is in preview | "Microsoft Entra Agent ID now extends to Microsoft Autopilot, building on existing support for agents built with Copilot Studio and Microsoft Foundry. ... This capability is in preview." | [A365] |
| 8 | You decide; it can check with you | "You decide what work Autopilot takes on and can check with you before key actions." | [IGN] |
| 9 | Within existing permissions | "Powered by Work IQ, it understands how your organization works within existing permissions." | [IGN] |
| 10 | 24x7 (CEO keynote) | "And Autopilot is an autonomous agent that keeps moving your work forward 24×7 in all the places where you and your team collaborate." | [SN] |
| 11 | Name and goal, then it goes to work | "Give it a name, a role and a goal, and it goes to work — watching channels, following up on threads, running recurring work and picking a project back up days later, without waiting for a prompt." | [SEPT] |
| 12 | Keeps working while you sleep | "And Autopilot is cloud-hosted, so it keeps working while you sleep or your attention is elsewhere — no constant monitoring required." | [SEPT] |
| 13 | Previously called Scout | "Autopilot , previously called Scout, is your digital teammate." | [SEPT] |
| 14 | Chat vs Cowork vs Autopilot (the maker's own before) | "Use Copilot Chat for quick answers and drafts in the flow of work. Use Cowork when you want a specific multi-step task done end to end: you ask, it delivers. Use Autopilot for work that doesn't end with one task: goals, decisions, and commitments that play out over days and weeks. It keeps going in the background without being asked and brings you decisions, not notifications." | [FEAT] |
| 15 | Chat, in the maker's words | "Chat is instant and conversational — ready for quick questions, lookups, draft-creation and keeping you in the loop on every turn." | [SEPT] |
| 16 | Who can get it, and the bill | "Autopilot is rolling out in the Frontier program for customers with Microsoft Copilot, Agent 365, and a usage-based billing policy." / "Autopilot is available through usage-based billing with Copilot Credits, so cost scales with the work your Autopilot takes on. ... Final pricing and packaging will be shared before general availability." | [FEAT] |
| 17 | 30 days to get oriented, changing nothing | "It gets oriented on the last 30 days of email, meetings, chats, and files you already have access to, without sending or changing anything." | [FEAT] |
| 18 | Human control of consequential actions | "Built-in access controls and approval guardrails help protect your data, while runtime security and investigation tools keep consequential actions under human control." | [FEAT] |
| 19 | Your Autopilot checks before anything is final (Workspaces) | "Your Autopilot takes a task and checks with you before anything is final." | [IGN] |
| 20 | Always-on, without directing every step | "An always-on, cloud-based personal agent that takes work off your plate and keeps it moving without you having to direct every step." | [FEAT] |

## Before (the predecessor, from the same sources)
Microsoft names it itself: Copilot Chat is "for quick answers and drafts", "keeping you in the loop on every turn" (rows 14, 15); Autopilot is the one that works "without waiting for a prompt" (row 4) and "without being asked" (row 14).
**Narrower than the topic's "before":** Copilot also has Cowork, which runs one multi-step task end to end once you ask (row 14). So the video's before is **Copilot Chat**, never "Copilot could only chat":
you type a prompt, it answers that one, and the next step waits for your next prompt. The scene and its numbers are ours (the counted example), not a Microsoft claim.

## The counted example (ours, invented, inside Microsoft's own supplier review, row 5)
**One supplier review over 2 weeks with 10 follow-ups** (emails and Teams pings to stakeholders asking for updates).
- Before (Copilot Chat): 10 follow-ups = 10 prompts you type ("draft the follow-up to the supplier ..."); each waits for you. When you're in meetings or asleep, nothing moves.
- Now (Autopilot): you give it a name and a goal once ("run the supplier review"), 1 prompt; it builds the schedule, sends the follow-ups and reaches out to stakeholders on its own (row 5), and it can check with you before key actions (row 8): in our example, 2 "OK?" checks you approve. The checks are **not** prompts you type: the meter does not count them (lesson L34).
- Meter: **"PROMPTS YOU TYPE"**, 10 before, 1 now, the same unit both sides. Microsoft gives no number for this example; the video claims none for it and says "our example" where it shows 10 or 1.
- Proof, the maker's own: Microsoft's own example is exactly this job (row 5), and its own number: it gets oriented on the last 30 days of your email, meetings, chats and files without sending or changing anything (row 17). The trust pieces are named: its own Entra Agent ID (in preview, row 7), a named manager, IT can block it anytime, actions logged under its own name (row 6).

## Story
An airplane's autopilot (everyone knows it; it is the product's own name). Before: you fly by hand, one input at a time; let go of the stick and the work stops. Now: you set the destination once; the autopilot holds the course and calls you before the key moves (like asking the pilot before landing). Costume: a pilot's cap. The route is drawn as the 2-week path with 10 waypoints (the follow-ups).

## Narrowing conditions (write them into every line, lesson L26)
- **Rolling out, not out for everyone:** "rolling out to Frontier customers" (Microsoft's early-access program), for customers with Microsoft Copilot, Agent 365 and a usage-based billing policy (rows 1, 16). Never "available now" or "everyone gets it". Introduced Sep 25, 2026; rollout began Nov 17, 2026 (Ignite). Never "announced at Ignite".
- **Checks with you before key actions: "can"**: "You decide what work Autopilot takes on and can check with you before key actions" (row 8). Say "it can check with you before key actions", never "it always asks" or "asks before everything".
- **Without waiting for a prompt** for the jobs Microsoft names: watching channels, following up on emails/threads, recurring work, managing a project (rows 4, 11). Never "does any job".
- **Own Entra Agent ID:** Microsoft says each Autopilot has one (row 6); Agent 365 says the Entra Agent ID support for Autopilot is **in preview** (row 7). On screen with the ID: "IN PREVIEW".
- **Named manager, IT can block it anytime, actions logged under its own name** (row 6). Never "IT watches everything it thinks".
- **Within existing permissions** (row 9): it works with what you can already access; orientation on "the last 30 days ... you already have access to, without sending or changing anything" (row 17).
- **24x7** is the CEO's keynote line (row 10); "keeps working while you sleep" is [SEPT] (row 12). Use one, with its source.
- **Before = Copilot Chat**, not all of Copilot (Cowork already ran single tasks end to end once asked, row 14).
- **Cost:** usage-based (Copilot Credits), "cost scales with the work your Autopilot takes on"; final pricing before GA (row 16). The video makes no saving claim in money or time.
- **The 10 follow-ups, 2 weeks, 1 prompt, 2 checks are ours** ("our example" on every card and line that shows them).

## Left out, and why
- Home, Today, Code, Office in Copilot, Workspaces, Work IQ's exabytes: not the one idea.
- Lilly's 5,000 users and "nearly 80% of the Fortune 500" are for Cowork, not Autopilot: never used.
- Agent 365 spend controls and session list: not the one idea; the bill condition goes in the description.
- Windows Autopilot (Intune device setup) is a different, older Microsoft product with the same name: the description says so in one line, so searchers aren't misled.

## Where the analogy stops
A plane's autopilot only holds a course; Microsoft's Autopilot sends emails, books meetings and asks people for updates for you, inside your permissions. And a plane's autopilot never asks before acting; this one can check with you before key actions, and IT can switch it off.
