# Beats: claude-meetings (workflow step 3)

Written 2026-11-23 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Meetings 2026: AI Builds the Plan Live"** + thumbnail **"LEARN CLAUDE MEETINGS IN 60 SECONDS"**. The hook sells the viewer's moment (the plan written before you hang up);
the tech (a visible participant that writes into shared docs, asks before it looks things up) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **film seconds** from a draft voice (am_michael, speed 1.2, `--no-align`, laid in at 0.3 s):
57.92 s of voice (ends at 58.22 s film), 180 words. The renderer re-times every cut to the real `vo_lines.json`: after the claim check (`claims.md`) the final words differ from the draft ("the plan is written" for "is done", "rolling out in beta since", "then looks it up" for "looks it up in your connected tools", "so no one on the call has to", "Team and Enterprise" without "plans"), 181 words, so shots 14-28 move a little.
The story is the maker's own example: a team planning an event on a call (`research.md`, "Where the analogy stops").

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 19 in four rounds, scored with `hookscore.py`. Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 73 STRONG
"Before, you'd waste time after every Google Meet call writing up the plan; now Claude Meetings writes it with you before you hang up, but how?"
```
SPECIFICITY   52   the names Google Meet, Claude Meetings
ADDRESS      100   you'd / you / you
STAKES       100   before, waste, before
CURIOSITY    100   before, but, how, ends on "?"
BREVITY      100   24 words
VERDICT       73   STRONG
formula      The Question (1 pattern matched), built as Before and After
```
3-second test: a viewer who knows no AI tech hears "after a call you lose time writing the plan; Claude Meetings writes it with you before you hang up". It names the topic and the moment; no architecture word.
True: "You say, "Claude, start a doc for this plan." Claude writes up what the team has said so far, and teammates on the invite can edit the plan while you keep talking" (`research.md` row 9).
No number in it (the maker gives no time-saved figure, so none was invented to raise specificity).

### 2 (runner-up) 75 STRONG
"Before, you'd waste time after every Google Meet call writing notes; now Claude Meetings writes them with you before you hang up, but how?"
```
SPECIFICITY 52 · ADDRESS 100 · STAKES 100 · CURIOSITY 100 · BREVITY 100 · VERDICT 75 STRONG
formula      The Question (1 pattern matched)
```
Why 1 over 2 despite two points less: the maker's pages put the notes on the meeting page "after the meeting" (`research.md` row 12), so "notes ... before you hang up" is narrower than the source;
the plan doc is written live during the call (row 9), so hook 1 is the true one, and it matches the title ("AI Builds the Plan Live").

### All hooks scored
| Score | Formula (tool) | Hook | Note |
|---|---|---|---|
| 75 | The Question | Before, you'd waste time after every Google Meet call writing notes; now Claude Meetings writes them with you before you hang up, but how? | runner-up; "notes before you hang up" narrower than the source |
| 73 | The Question | **Before, you'd waste time after every Google Meet call writing up the plan; now Claude Meetings writes it with you before you hang up, but how?** | chosen |
| 73 | The Warning | Stop wasting time after calls writing notes: Claude Meetings joins your Google Meet and writes them with you before you hang up, but how? | same notes problem |
| 71 | The Question | Before, you'd waste the hour after a call writing up notes; now ... on the Google Meet, but how? | "the hour" is an invented number |
| 71 | The Question | Before, you'd waste time ... writing the plan; now Claude Meetings builds it with you while you talk, but how? | |
| 70 | The Question / Warning | three "... writes them with you while you talk" / "Stop wasting ... notes and plans" variants | |
| 67-69 | The Question | four "Before, you'd lose/waste time after every call ..." variants without a name | |
| 62 | The Question | Before, you'd hang up and still write the notes and the plan; now ... during the call, but how? | no stakes word |
| 58-59 | Question / Mistake | "What if the notes and the plan were done before you hang up? ..." / "Stop writing meeting notes after the call ..." / "Before, every meeting ended with homework ..." | |
| 39-50 | Question | "Imagine ending a Google Meet call with ...", "Claude Meetings just joined your Google Meet call ...", "You hang up, and someone still has to ..." | no stakes, or the gap closed |

## The parts, in one line each
- **Hook (0.0-8.9 s):** the sentence above; title card from frame 0; then you after the call, typing the plan alone; the same call with a teal Claude tile and a doc filling in; HOW?.
- **Turn (8.9 s):** "Here's how, in one planning call." Then it does it.
- **Before, the pain as a scene (11.2-18.9 s):** your team plans an event on a call; a question nobody can answer waits for "later"; you hang up and someone still writes the notes and the plan.
- **Now, the same scene (18.9-38.2 s):** the same call with Claude Meetings: it joins as a visible participant; "Claude, start a doc"; it writes, teammates edit; it asks before it looks up last year's cost and posts it in the chat; the timeline on a whiteboard.
- **How + why it helps you (38.2-44.5 s):** the BEFORE vs NOW board (after the call vs during it); it writes the notes and action items; it is all on the meeting's page after.
- **Payoff (44.5-48.4 s):** "That's how the plan is written before you hang up: it's built during the call." Then the honest catch: beta, Team and Enterprise, Google Meet only for now.
- **Close:** takeaway tied to the story ("Same call; the writing happens while you talk."), then one ask ("Subscribe for the next one.").

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) wearing an amber **headset** (`#FFC66E`), the one running the call, in tile 1.
- **Two teammates**, plain stick figures in tiles 2 and 3 (a teal top and a grey top; face tones mixed and not tied to who leads: the mascot leads, the AI takes requests).
- **Claude = a robot with a teal (`#2DB2AE`) screen head** in tile 4, a label "CLAUDE" under it (plain text, no logo). Visibly AI (brand casting rule).
- **Places:** the call window (a generic dark video-call frame with 3 or 4 tiles, a chat strip on the right and a red round hang-up button; no Google logo, only the words "GOOGLE MEET" as a small caption where named);
  a doc panel "EVENT PLAN"; a whiteboard panel; a desk after the call (the mascot alone with a wall clock); the board for BEFORE vs NOW; the "MEETING PAGE" panel; cards.
- Every frame: corner tag "Claude Meetings · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red for the sticker, hang-up button and Subscribe.

## Shots
31 shots in 60 s, 1.9 s on average (lesson L1). Cuts on word boundaries (film seconds, draft voice).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.00-1.72 | "Before, you'd waste time" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "CLAUDE MEETINGS", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.72-3.37 | "after every Google Meet call" | Amber tab "BEFORE". The call window with 3 tiles (mascot, two teammates); small caption "GOOGLE MEET"; the red hang-up button pressed, tiles go dark | hook: the call ends |
| 2 | 3.37-4.57 | "writing up the plan;" | The mascot alone at a desk, typing; a page "PLAN" grows line by line; a wall clock's hand sweeps | hook: the pain |
| 3 | 4.57-5.71 | "now Claude Meetings" | Teal tab "NOW". The same call window, live; a fourth tile pops in: the teal-screen robot, label "CLAUDE" | hook: the new, named |
| 4 | 5.71-6.79 | "writes it with you" | A doc panel "EVENT PLAN" beside the tiles fills with lines; a teal cursor writes, an amber cursor edits | hook: with you |
| 5 | 6.79-7.93 | "before you hang up," | The red hang-up button, the doc beside it still filling with lines (no check, not finished); label "WRITTEN LIVE" | hook: the moment |
| 6 | 7.93-8.94 | "but how?" | The mascot faces the viewer; amber card "HOW?" pops | hook: open question |
| 7 | 8.94-11.18 | "Here's how, in one planning call." | Wide: the call window with 3 tiles; lower card "ONE PLANNING CALL" | turn (by 10 s) |
| 8 | 11.18-12.81 | "Your team plans an event." | Amber tab "BEFORE". The 3 tiles, everyone talking; a sticky note "EVENT" | before: your scene |
| 9 | 12.81-14.27 | "What did last year's cost?" | Teammate 2's speech bubble "LAST YEAR'S COST?" | before: a question |
| 10 | 14.27-15.27 | "I'll check later." | Teammate 3 shrugs, bubble "I'LL CHECK LATER"; a grey sticky "LATER" | before: it waits |
| 11 | 15.27-16.13 | "You hang up," | The red hang-up button pressed; the tiles go dark | before: the call ends |
| 12 | 16.13-18.89 | "and someone still writes the notes and the plan." | The mascot alone at the desk, typing; two grey pages "NOTES", "PLAN" pile up; the wall clock's hand sweeps; the "LATER" sticky on the wall | before: the pain |
| 13 | 18.89-20.67 | "Same call with Claude Meetings," | Teal tab "NOW". The same 3 tiles; the Claude tile joins as the fourth | now: same scene |
| 14 | 20.67-22.75 | "rolling out in beta since November twelfth." | Cards pop: "CLAUDE MEETINGS", "BETA", "ROLLING OUT SINCE NOV 12, 2026" | now: the name, the date |
| 15 | 22.75-25.26 | "Claude joins as a visible participant." | The Claude tile glows; in the chat strip a line "Claude joined"; label "VISIBLE PARTICIPANT" | now: visible |
| 16 | 25.26-27.19 | "Claude, start a doc for this plan." | The mascot talks; bubble "CLAUDE, START A DOC FOR THIS PLAN" | now: you ask |
| 17 | 27.19-28.91 | "It writes up what the team said," | The doc panel "EVENT PLAN" opens beside the tiles; lines appear with a teal cursor | now: it writes |
| 18 | 28.91-30.36 | "while teammates edit." | An amber cursor (teammate 2) changes one line; label "TEAMMATES EDIT LIVE" | now: together |
| 19 | 30.36-31.67 | "Last year's cost?" | Teammate 2's bubble "LAST YEAR'S COST?" | now: the same question |
| 20 | 31.67-32.60 | "Claude asks first," | Claude's chat bubble "OK TO LOOK THIS UP?"; teammate 2's reply "YES" with a check | now: asks permission |
| 21 | 32.60-34.41 | "then looks it up" | Close on the teal screen head: a magnifier moves over three plain tool cards; label "WITH YOUR PERMISSION" | now: the lookup |
| 22 | 34.41-35.98 | "and posts it in the chat." | The chat strip: a Claude message card "LAST YEAR'S COST" with two bars "LAST YEAR" and "THIS PLAN" (no digits); label "IN THE CHAT" | now: answer during the call |
| 23 | 35.98-38.15 | "The timeline goes on a whiteboard." | A whiteboard panel next to the doc: three timeline boxes appear one by one with arrows; label "WHITEBOARD" | now: the whiteboard |
| 24 | 38.15-41.70 | "Claude writes the notes and action items, so no one on the call has to." | Board, side by side. Left "BEFORE": call -> hang up -> "YOU WRITE NOTES + PLAN", "LOOKUPS LATER" (grey). Right "NOW · Claude Meetings": call with the Claude tile -> "DOC", "WHITEBOARD", "NOTES" ticking in teal under "DURING THE CALL", then "ACTION ITEMS" under "AFTER: MEETING PAGE" | how: BEFORE vs NOW diagram |
| 25 | 41.70-44.54 | "After the call, it's all on the meeting's page." | A laptop with a panel "MEETING PAGE": cards "NOTES", "ACTION ITEMS", "PLAN", "WHITEBOARD" slide in | why: after the call |
| 26 | 44.54-48.43 | "That's how the plan is written before you hang up: it's built during the call." | Side by side in one frame: left, the mascot typing alone after the call, the clock running; right, the hang-up button beside the plan doc already full of lines, teammates' cursors still on it (no check); label "BUILT DURING THE CALL" | payoff (said out loud) |
| 27 | 48.43-51.67 | "The catch: it's a beta, for Team and Enterprise," | Card "BETA" and two tags "TEAM", "ENTERPRISE"; label "THE CATCH" | payoff: honest catch |
| 28 | 51.67-53.88 | "on Google Meet only for now." | Card "GOOGLE MEET ONLY · FOR NOW" (plain text) | payoff: honest catch |
| 29 | 53.88-56.81 | "Same call; the writing happens while you talk." | The call window, warm light, four tiles and the doc full of lines; takeaway card: line 1 off-white "Same call;", line 2 amber "the writing happens while you talk." | close: takeaway |
| 30 | 56.81-60.00 | "Subscribe for the next one." | The mascot waves; red Subscribe button pops and pulses; under it "NEXT IN 60 SECONDS"; short fade with the corner tag drawn over it | close: one ask |

## On-screen words and their sources
"CLAUDE MEETINGS", "BETA", "ROLLING OUT SINCE NOV 12, 2026": [Blog] (`research.md` rows 1-2). "GOOGLE MEET", "GOOGLE MEET ONLY · FOR NOW": row 3. "VISIBLE PARTICIPANT", "Claude joined": row 4.
"CLAUDE, START A DOC FOR THIS PLAN", "EVENT PLAN", "TEAMMATES EDIT LIVE": row 9. "LAST YEAR'S COST?", "OK TO LOOK THIS UP?", "YES", "WITH YOUR PERMISSION", "IN THE CHAT", "LAST YEAR" / "THIS PLAN": row 7 (the maker's own example; no figure is shown because the maker gives none).
"WHITEBOARD": row 10. "NOTES", "DURING THE CALL": row 11 and [Notes] "takes notes ... during the call"; "ACTION ITEMS", "AFTER: MEETING PAGE": row 12. "MEETING PAGE", "PLAN": row 12. "TEAM", "ENTERPRISE": row 2.
"WRITTEN LIVE", "BUILT DURING THE CALL": the plan doc written live (row 9); never shown finished or checked, because the maker says teammates keep editing (`claims.md`). "BEFORE" side ("YOU WRITE NOTES + PLAN", "LOOKUPS LATER", "I'LL CHECK LATER"): the viewer's scene (`research.md`, Before), not a claim about another product.
The call window, desk, clock and event are invented pictures inside the maker's example (said in the description).
