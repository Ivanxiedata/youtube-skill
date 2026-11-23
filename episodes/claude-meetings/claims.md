# Claims: claude-meetings (step 3b)
Checked 2026-11-23 by a fresh agent that did not write the script; sources opened (live, via curl, text saved under `$RUNNER_TEMP/claude-meetings/claimcheck/`): Blog = https://claude.com/blog/claude-meetings (Nov 12, 2026); RN = https://support.claude.com/en/articles/12138966 (release notes, Nov 12 entry); Help = https://support.claude.com/en/articles/18325154-use-claude-meetings. `research.md` used only to find rows.

| # | where | claim | source and quoted sentence | verdict | fix |
|---|---|---|---|---|---|
| 1 | script hook | Claude Meetings writes the plan with you before you hang up | Blog: "Claude also works with you live to build docs, whiteboards, or other artifacts, while teammates on the invite refine them."; "Claude writes up what the team has said so far, and teammates on the invite can edit the plan while you keep talking." Help: builds artifacts "live during the call." | holds | |
| 2 | script hook | After every Google Meet call you'd waste time writing up the plan (the "before") | No source; it is the viewer's framing, not a product claim and not about another tool. Product works on Google Meet: Help "add Claude to a Google Meet call". | holds (framing; "every" is rhetorical) | |
| 3 | script before | Your team plans an event; "What did last year's cost?" | Blog: "Say your team is planning a customer event ... someone asks Claude what last year's event cost." Used as an illustrative scenario, no product claim. | holds | |
| 4 | script before / beats 8-12 | You hang up and someone still writes the notes and plan (before Claude) | Viewer scene, no source needed; names no other product. | holds | |
| 5 | script new | Claude Meetings is "in beta since November 12" | Blog (Nov 12): "Claude Meetings is now in beta."; "is starting to roll out in beta on Team and Enterprise plans." RN Nov 12: "Claude Meetings is rolling out in beta". Nov 12 is the announcement and start of rollout, not that every org has had it since. | narrower | "announced in beta on November twelfth" or "rolling out in beta since November twelfth" |
| 6 | script new | Claude joins as a visible participant | Blog: "Claude can now join your video calls as a visible participant"; Help: "When Claude joins, it appears as a participant and posts a notice in the call's chat." | holds | |
| 7 | script new | "Claude, start a doc for this plan." | Blog: You say, "Claude, start a doc for this plan." | holds | |
| 8 | script new | It writes up what the team said, while teammates edit | Blog: "Claude writes up what the team has said so far, and teammates on the invite can edit the plan while you keep talking." | holds | |
| 9 | script new | Claude asks first (before a lookup) | Blog: "Claude asks for their approval to look it up, posts it in the meeting chat". Also: "It asks the first time, and a yes applies going forward." So true for the example, not "every time" in general. | holds (for this example; do not generalize) | Keep it inside the last-year's-cost scene; do not say "always asks". |
| 10 | script new | Claude looks it up "in your connected tools" | Blog: "it can use your connected tools with your permission"; "Claude uses each person's connected tools with that person's permission." The cost example only says "asks for their approval to look it up"; it does not say which tool held the figure. | narrower | "asks first, then looks it up, using your connected tools if you allow it" or "asks first, looks it up with your permission" |
| 11 | script new | ...and posts it in the chat | Blog: "posts it in the meeting chat, and compares it to the current plan." | holds | |
| 12 | script new | The timeline goes on a whiteboard | Blog: "someone asks Claude to put it on a whiteboard, and the team works on the schedule alongside the doc." | holds (someone has to ask; viewer scene shows no ask, acceptable) | |
| 13 | script why | Claude writes the notes and action items, so no one has to | Blog: "Claude writes the notes and action items, so no one on the call has to." Source scopes it to people on the call. | narrower | "so no one on the call has to" |
| 14 | script why | After the call, it's all on the meeting's page | Blog: "After the call, any notes, action items, plan, and whiteboard are on the meeting's page in claude.ai." Help: "the meeting page has the notes, including a summary and any action items, along with the transcript and everything you made." | holds | |
| 15 | script takeaway | The plan is written before you hang up: built during the call | Blog/Help as row 1 (doc built live, teammates refine). Source does not say the plan is finished at hang-up, only that it is started and edited live. | holds (as "built during the call"); "written" must not imply finished | |
| 16 | script takeaway | It's a beta | Blog/RN/Help: "now in beta". | holds | |
| 17 | script takeaway | For Team and Enterprise plans | Blog: "starting to roll out in beta on Team and Enterprise plans." Help: "rolling out in beta on Team and Enterprise plans". Not available to some orgs (ZDR, HIPAA-ready, CMEK) and Enterprise needs an owner to turn it on. | holds (rollout, not guaranteed everywhere) | |
| 18 | script takeaway | Google Meet only for now | Blog: "Support is currently available for Google Meet, with other platforms coming soon." | holds | |
| 19 | beats 0 | title card "LEARN / CLAUDE MEETINGS / IN 60 SECONDS" | Name from Blog title "Introducing Claude Meetings"; no factual claim. | holds | |
| 20 | beats 1 | caption "GOOGLE MEET"; call with 3 tiles | Help: "add Claude to a Google Meet call". | holds | |
| 21 | beats 5 | label "PLAN WRITTEN" with teal check beside hang-up, doc "already full" | Blog says Claude writes what the team said "so far" and teammates keep editing; no source says the plan is complete or finished at hang-up. | narrower | Label "PLAN STARTED" / "PLAN DRAFTED", or "WRITTEN LIVE"; do not show a finished-with-check state |
| 22 | beats 4, 17 | doc "EVENT PLAN" filled by teal cursor, amber cursor edits | Blog: "teammates on the invite can edit the plan while you keep talking." | holds | |
| 23 | beats 14 | cards "CLAUDE MEETINGS", "BETA", "NOV 12, 2026" | Blog dated "November 12, 2026"; RN entry "November 12, 2026". A date card next to "in beta since" reads as the start of availability. | narrower (same as row 5) | Card "ANNOUNCED NOV 12, 2026" or "ROLLING OUT SINCE NOV 12, 2026" |
| 24 | beats 15 | label "VISIBLE PARTICIPANT"; chat line "Claude joined" | Blog: "visible participant"; Help: "posts a notice in the call's chat". | holds | |
| 25 | beats 16, 18 | bubble "CLAUDE, START A DOC FOR THIS PLAN"; label "TEAMMATES EDIT LIVE" | Blog, row 7 and 8 sentences. | holds | |
| 26 | beats 9, 19 | bubble "LAST YEAR'S COST?" | Blog: "someone asks Claude what last year's event cost." | holds | |
| 27 | beats 20 | Claude bubble "OK TO LOOK THIS UP?", reply "YES" | Blog: "Claude asks for their approval to look it up". Help: "When Claude needs your approval, the request appears in the Meet chat when possible." | holds | |
| 28 | beats 21 | label "CONNECTED TOOLS", magnifier over three tool cards | Blog: "it can use your connected tools with your permission." Picture implies the cost was found in a tool (see row 10). | narrower (same as row 10) | Label "WITH YOUR PERMISSION" or "YOUR CONNECTED TOOLS" with the pop-up "IF YOU ALLOW IT" |
| 29 | beats 22 | message card "LAST YEAR'S COST" with bars "LAST YEAR" and "THIS PLAN"; label "IN THE CHAT" | Blog: "posts it in the meeting chat, and compares it to the current plan." | holds | |
| 30 | beats 23 | whiteboard panel "WHITEBOARD" beside the doc | Blog: "the team works on the schedule alongside the doc." | holds | |
| 31 | beats 24 (left, BEFORE) | "call -> hang up -> YOU WRITE NOTES + PLAN", "LOOKUPS LATER" | Viewer's scene; no other product named or compared (only "Claude Meetings" appears, on the NOW side). | holds | |
| 32 | beats 24 (right, NOW) | "DOC", "WHITEBOARD", "NOTES" ticking under "DURING THE CALL" | Help: Claude "takes the notes, answers questions, and builds artifacts, such as docs, whiteboards, and slides, live during the call."; RN: "during the call". | holds | |
| 33 | beats 24 (right, NOW) | "ACTION ITEMS" ticking under "DURING THE CALL" | Help: "After the meeting, the meeting page has the notes, including a summary and any action items"; Blog: "After the call, any notes, action items, plan, and whiteboard are on the meeting's page." No source says action items exist before the call ends; only "Before the meeting ends, someone asks Claude to share a recap with the team." | narrower | Move "ACTION ITEMS" out of the DURING column (put it under "AFTER: MEETING PAGE"), or tick only DOC, WHITEBOARD, NOTES during the call |
| 34 | beats 25 | "MEETING PAGE" with cards NOTES, ACTION ITEMS, PLAN, WHITEBOARD | Blog: "any notes, action items, plan, and whiteboard are on the meeting's page in claude.ai." | holds | |
| 35 | beats 26 | right side: finished plan with teal check beside hang-up; label "BUILT DURING THE CALL" | "Built during the call": Help "builds artifacts ... live during the call". "Finished plan with a check": not supported (see row 21). | label holds; picture narrower | Keep the label; show a plan in progress/started, not a checked finished plan |
| 36 | beats 27 | cards "BETA", "TEAM", "ENTERPRISE", "THE CATCH" | Blog: "rolling out in beta on Team and Enterprise plans". | holds | |
| 37 | beats 28 | card "GOOGLE MEET ONLY · FOR NOW" | Blog: "currently available for Google Meet, with other platforms coming soon." | holds | |
| 38 | beats 29 | "four tiles and the finished doc"; "the writing happens while you talk" | Same as rows 1, 21; "finished" not supported. | narrower (picture only) | Show the doc, not "finished" |
| 39 | beats 30 | "NEXT IN 60 SECONDS" | No product claim. | holds | |
| 40 | title | "Claude Meetings 2026: AI Builds the Plan Live" | Blog dated Nov 12, 2026; "works with you live to build docs"; Help: "builds artifacts ... live during the call." "Builds the plan" is the doc being started and refined with the team, not alone. | holds | |
| 41 | thumbnail | "LEARN CLAUDE MEETINGS IN 60 SECONDS" | Product name matches Blog "Introducing Claude Meetings"; no factual claim beyond the name and the video's own length. | holds | |

## Summary
32 holds, 9 narrower, 0 wrong (41 rows). (Rows 21, 23, 28, 33, 35, 38 are on-screen labels or pictures; rows 5, 10, 13 are in the spoken script. Rows 23, 28, 35, 38 repeat the issues of rows 5, 10 and 21.) No claim is contradicted and the "before" scene claims nothing about another product.

## Fixes applied (2026-11-23, before voicing)
All 9 narrower rows were fixed in the words and pictures before anything was voiced or drawn (the judge re-checked them in the script, beats and video stills):
- Rows 5, 23: script "rolling out in beta since November twelfth"; shot 14 card "ROLLING OUT SINCE NOV 12, 2026".
- Rows 10, 28: script "Claude asks first, then looks it up and posts it in the chat"; shot 21 label "WITH YOUR PERMISSION".
- Row 13: script "so no one on the call has to".
- Row 33: shot 24 puts "ACTION ITEMS" under "AFTER: MEETING PAGE"; DOC, WHITEBOARD, NOTES under "DURING THE CALL" with a live dot, no check.
- Rows 21, 35, 38: shot 5 label "WRITTEN LIVE" with the doc still filling; shots 26 and 29 show the doc full of lines with cursors, never finished or checked.
After the fixes: 0 narrower, 0 wrong.
