# Beats: copilot-autopilot (workflow step 3)

Written 2026-11-24 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Copilot Autopilot: 1 Goal Instead of 10 Prompts"** + thumbnail **"LEARN COPILOT AUTOPILOT IN 60 SECONDS"**. The hook sells the viewer's moment (one goal, and the follow-ups keep moving while you're busy, until it needs your OK);
the tech (an always-on agent with its own identity and a named manager) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of these words
(am_michael, speed 1.2, `--no-align`, 154 words, 55.76 s of voice, laid in at 0.5 s, so it ends at about 56.3 s); the renderer re-times every cut to the real `vo_lines.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, our two-week supplier review with 10 follow-ups** (inside Microsoft's own example, a full supplier review, `research.md` row 5), from the first beat to the last;
a **meter "PROMPTS YOU TYPE"** (0 to 10) that fills to 10 in BEFORE and stops at 1 in NOW on the same 10 follow-ups (the same unit both sides, lesson L34: Autopilot's checks are approvals, never counted on it); **the how on one diagram that grows**
(YOU: 1 GOAL -> AUTOPILOT holds the course -> CAN CHECK WITH YOU -> its own ID, a named manager, IT's off switch) with a highlight on what the voice names; the proof is **Microsoft's own example and number** (the supplier review; the last 30 days of mail, meetings, chats and files it gets its bearings from, sending or changing nothing while it does).

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33: digits; stop, never for stakes; but, actually, until for curiosity), 12 in two rounds. Every one opens with the topic's name (lesson L14). Picked by the 3-second test (lesson L16), then the score; each under 25 words so the hook line stays near 8 s (lesson L46; draft voice: 8.7 s, the turn at 9.7 s film time).
The tool's formula field says "Unclassified": the top two correct a belief ("you think X, but ..."), the owner's preferred tension (lesson L31), not a template; neither ends on "but how?".

### 1 (chosen) 75 STRONG
"Copilot Autopilot: you think AI stops when you stop typing, but 1 goal actually keeps your 10 follow-ups moving until it needs your OK."
```
SPECIFICITY 91 · ADDRESS 100 · STAKES 62 (stop) · CURIOSITY 75 (but, actually, until) · BREVITY 93 · VERDICT 75 STRONG
```
3-second test: someone who knows no AI tech hears "Copilot Autopilot = give it one goal and your follow-ups keep going without you typing, and it asks you when it needs an OK". The topic is the first two words; no architecture word.
True: works "without waiting for a prompt" (`research.md` rows 4, 11), "can check with you before key actions" (row 8); 10 follow-ups is our example inside Microsoft's supplier review (row 5).

### 2 (runner-up) 75 STRONG
"Copilot Autopilot: you think AI never moves until you type, but 1 goal actually keeps your 10 follow-ups moving."
Why 1 over 2: same score, but 1 also carries the condition (it can stop for your OK, lesson L26) and "stops when you stop typing" is the scene the viewer has lived.

### All hooks scored
| Score | Hook | Note |
|---|---|---|
| 81 | ... you think your AI stops when you stop typing, but 1 goal actually keeps your 10 follow-ups moving, and it checks before key steps. | 26 words: over 8 s (L46); "checks" without "can" |
| 75 | **... you think AI stops when you stop typing, but 1 goal actually keeps your 10 follow-ups moving until it needs your OK.** | chosen |
| 75 | ... you think AI never moves until you type, but 1 goal actually keeps your 10 follow-ups moving. | runner-up |
| 72 | ... you think AI stops when you stop typing, but 1 goal actually keeps your 10 follow-ups moving. | no condition |
| 72 | ... you think Copilot stops when you stop typing, but 1 goal ... | |
| 72 | ... you think AI waits for your next prompt, but 1 goal ... never losing a day. | |
| 71 | ... you think work stops when you stop typing, but you give it 1 goal and your 10 follow-ups actually keep moving. | below 72 |
| 59 | ... your work never has to stop when you stop typing; 1 goal ... | no curiosity |
| 59 | ... you think your 10 follow-ups wait on your prompts, but 1 goal actually keeps them moving while you're busy. | |
| 58 | ... you type 1 goal instead of 10 prompts, and your work keeps moving until it needs your OK. | |
| 54 | ... you give it 1 goal, and your 10 follow-ups keep moving, even when you stop typing. | |
| 49 | ... stop typing 10 prompts for 1 project; you give it 1 goal ... | no "you" early |

## The parts, in one line each
- **Hook (0.0-9.2 s):** the sentence above; title card from frame 0; the mascot stops typing and the chat goes idle; one "1 GOAL" card and the route's 10 waypoints light up one by one; a small "OK?" bubble.
- **Turn (9.7 s):** "Here's how." Then it does it, on the same supplier review.
- **Before, the pain as a scene (10.9-18.5 s):** Copilot Chat; the route "SUPPLIER REVIEW · 2 WEEKS · OUR EXAMPLE" with 10 waypoints; each follow-up needs one prompt, the meter climbs to 10; the mascot in a meeting block, the route frozen.
- **Now, the same scene (19.0-26.6 s):** Autopilot, rolling out to Frontier customers; 1 goal card, the meter stops at 1; the follow-ups go out by themselves into Teams and Outlook.
- **How (27.1-32.7 s):** one diagram that grows: YOU: 1 GOAL -> AUTOPILOT, HOLDS THE COURSE -> CAN CHECK WITH YOU (an "OK?" before a key action).
- **Why it helps, proof (33.2-45.0 s):** "LAST 30 DAYS: MAIL · CHATS · FILES", "WHILE GETTING ORIENTED: SENDS OR CHANGES NOTHING"; then the trust pieces on the same diagram: its own Entra Agent ID (in preview), a named manager, IT's switch "BLOCK ANYTIME".
- **Close (45.5-57.5 s):** "So, what we learned:" with BEFORE 10 vs NOW 1 side by side; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in a **pilot's cap** (navy with an amber `#FFC66E` badge), the story's costume: the pilot who sets the course.
- **The AI = a robot with a teal (`#2DB2AE`) screen head**, label "COPILOT CHAT" in BEFORE and "AUTOPILOT" in NOW (plain text, no logo; visibly AI, brand casting). In NOW it wears a small headset; never the mascot's cap.
- **Props:** a **chat window** with prompt bubbles; the **route**: a curved dotted flight path across the frame, "SUPPLIER REVIEW · 2 WEEKS · OUR EXAMPLE", with 10 waypoint dots (the follow-ups) that light amber (before, one per prompt) or teal (now, by themselves); a small **paper plane** that flies the route in NOW; a **meeting block** "IN MEETINGS" (a calendar card); the **goal card** "GOAL: RUN THE SUPPLIER REVIEW"; two app chips "TEAMS" and "OUTLOOK" (plain text, no logos); an **"OK?" bubble** with a check button; an **ID badge** "ENTRA AGENT ID · IN PREVIEW"; a **manager tag** "NAMED MANAGER"; an **off switch** "IT: BLOCK ANYTIME".
- **The meter "PROMPTS YOU TYPE"**, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0, 5, 10 and a big whole-number counter on top; amber fill in BEFORE, teal at 1 in NOW.
- **The manager:** one small stick figure of a different tone from the mascot (no tone maps to rank) beside the "NAMED MANAGER" tag.
- **Places:** C the chat desk (mascot left, chat window or robot centre, meter right, route across the top); X the how diagram (11-17); K the close.
- Every frame: corner tag "Copilot Autopilot · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red only for the sticker and Subscribe.

## Shots
21 shots in about 57.5 s, 2.7 s on average (lesson L1). Cuts on word boundaries; inside a line the cut is estimated, and the renderer re-times every cut to the real line times; shot 0 ends on the measured pause after "Copilot Autopilot" (lesson L36).
Every card and panel eases in on scale and alpha over at least 0.5 s; every colour change cross-fades over at least 0.5 s (0.7 s between views of very different brightness); every shot over 2 s with little motion gets a slow push to about 1.1 (lesson L23). View state is set per shot, never as a range (lesson L38). Every label at least 28 px tall at 1080p (lesson L48).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-1.9 | "Copilot Autopilot:" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "COPILOT AUTOPILOT", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.9-4.5 | "you think AI stops when you stop typing," | The chat desk: the mascot (pilot's cap) types into a chat window, then lifts his hands; the robot "COPILOT CHAT" goes idle, a grey "..." bubble; small tag "WAITING FOR YOUR NEXT PROMPT" | hook: the belief |
| 2 | 4.5-7.3 | "but 1 goal actually keeps your 10 follow-ups moving" | One card "1 GOAL" eases in; the route with 10 waypoint dots lights teal one by one, a small paper plane flying it; tag "10 FOLLOW-UPS · OUR EXAMPLE" | hook: the outcome |
| 3 | 7.3-9.2 | "until it needs your OK." | The plane pauses at waypoint 7; an "OK?" bubble with a check button eases in beside the mascot | hook: the condition (it can check with you) |
| 4 | 9.7-10.4 | "Here's how." | Wide desk, meter "PROMPTS YOU TYPE" at 0; lower card "SUPPLIER REVIEW · 10 FOLLOW-UPS · OUR EXAMPLE" (claims.md row 26) | turn (by about 10 s) |
| 5 | 10.9-14.9 | "Before, in Copilot Chat, our example: a two-week supplier review." | Amber tab "BEFORE"; the chat window with the robot "COPILOT CHAT"; the route "SUPPLIER REVIEW · 2 WEEKS · OUR EXAMPLE" with 10 grey waypoints across the top | before: the scene |
| 6 | 15.2-16.7 | "10 follow-ups, 10 prompts." | Prompt bubbles go in one by one; each lights one waypoint amber until all 10 are lit; the meter climbs to 10, amber; the route label "SUPPLIER REVIEW · 2 WEEKS · OUR EXAMPLE" stays on screen | before: the cost, one by one |
| 7 | 17.0-18.5 | "In meetings, nothing moved." | A calendar card "IN MEETINGS" eases over the mascot; the chat window goes idle with a grey "..." and the tag "WAITING ON YOU"; a small clock ticks; the route (all 10 amber, each lit by one of your prompts) and its "OUR EXAMPLE" label stay; the meter stays at 10, the prompts you typed for the review (claims.md row 30: the meter counts only prompts typed) | before: the pain |
| 8 | 19.0-21.3 | "Now Autopilot, rolling out to Frontier customers:" | Teal tab "NOW"; card "AUTOPILOT · ROLLING OUT TO FRONTIER CUSTOMERS · NOV 17, 2026"; the robot's label cross-fades to "AUTOPILOT" | now: what it is, with its condition |
| 9 | 21.3-23.2 | "you give it 1 goal." | The mascot hands over the card "GOAL: RUN THE SUPPLIER REVIEW · OUR EXAMPLE" (claims.md row 32); the meter stops at "1", teal | now: one goal |
| 10 | 23.5-26.6 | "It sends the follow-ups on its own, in Teams and Outlook." | The waypoints light teal one by one, the paper plane flying the route; follow-ups land in two chips "TEAMS" and "OUTLOOK"; the mascot still in the "IN MEETINGS" card; the meter stays at 1 | now: the same scene, done |
| 11 | 27.1-29.9 | "Like a plane's autopilot: you set the course, it flies," | Diagram starts, title "HOW IT WORKS": piece 1 "YOU: 1 GOAL" -> piece 2 "AUTOPILOT: HOLDS THE COURSE", highlight moves from 1 to 2; the paper plane along the arrow | how: pieces 1-2 |
| 12 | 29.9-32.7 | "and it can check with you before key actions." | Piece 3: an "OK?" bubble "CAN CHECK WITH YOU BEFORE KEY ACTIONS" with a check button, arrow back to "YOU"; highlight moves to it | how: piece 3, the condition |
| 13 | 33.2-35.3 | "It gets its bearings from your last 30 days" | Card "MICROSOFT'S NUMBER: LAST 30 DAYS" eases in; small line "ONLY WHAT YOU CAN ALREADY ACCESS" | proof: the maker's number |
| 14 | 35.3-37.4 | "of mail, meetings, chats and files." | Four chips light in turn as the voice names them: "MAIL", "MEETINGS", "CHATS", "FILES" (claims.md row 37); one line under them "WHILE GETTING ORIENTED: SENDS OR CHANGES NOTHING" (claims.md row 40) | proof: its condition |
| 15 | 39.2-41.8 | "It has its own Entra Agent ID, in preview," | Back on the diagram, piece 4: an ID badge on the robot "ENTRA AGENT ID · IN PREVIEW", highlight on it | how: trust, piece 4 |
| 16 | 41.8-43.2 | "and a named manager;" | Piece 5: the manager stick figure with tag "NAMED MANAGER" beside the badge, highlight moves | how: trust, piece 5 |
| 17 | 43.2-45.0 | "IT can block it anytime." | Piece 6: a switch "IT: BLOCK ANYTIME" slides to off and back on (cross-fade 0.5 s), highlight moves | how: trust, piece 6 |
| 18 | 45.5-49.7 | "So, what we learned: in our example, 10 follow-ups took 10 prompts;" | Top card "WHAT WE LEARNED" with tag "OUR EXAMPLE"; side by side: left "BEFORE · COPILOT CHAT" the meter at 10 (amber), right "NOW · AUTOPILOT" the meter at 1 (teal), one shared label "PROMPTS YOU TYPE" (L48); label "SAME 10 FOLLOW-UPS" | close: the conclusion |
| 19 | 49.7-52.6 | "now 1 goal, and it can check with you before key actions." | The NOW route with all 10 waypoints teal and one "OK?" check; takeaway card: line 1 off-white "IN OUR EXAMPLE: 10 PROMPTS BECAME 1 GOAL", line 2 amber "IT CAN CHECK BEFORE KEY ACTIONS" (claims.md rows 45, 46) | close: the takeaway, the promise delivered out loud |
| 20 | 52.4-57.5 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"COPILOT AUTOPILOT", "AUTOPILOT": rows 1-2 (Autopilot in Copilot). "AUTOPILOT · ROLLING OUT TO FRONTIER CUSTOMERS · NOV 17, 2026": row 1. "COPILOT CHAT", "WAITING FOR YOUR NEXT PROMPT": rows 14, 15 and the before scene (ours).
"SUPPLIER REVIEW · 2 WEEKS · OUR EXAMPLE", "10 FOLLOW-UPS · OUR EXAMPLE", "SUPPLIER REVIEW · 10 FOLLOW-UPS · OUR EXAMPLE", "PROMPTS YOU TYPE", "IN MEETINGS", "WAITING ON YOU", "OUR EXAMPLE", "SAME 10 FOLLOW-UPS", "IN OUR EXAMPLE: 10 PROMPTS BECAME 1 GOAL", "GOAL: RUN THE SUPPLIER REVIEW · OUR EXAMPLE": the counted example (ours, `research.md`), inside Microsoft's supplier review (row 5).
"1 GOAL", "GOAL: RUN THE SUPPLIER REVIEW", "YOU: 1 GOAL": rows 5, 11. "TEAMS", "OUTLOOK": row 3. "AUTOPILOT: HOLDS THE COURSE": the analogy (rows 4, 11). "OK?", "CAN CHECK WITH YOU BEFORE KEY ACTIONS", "IT CAN CHECK BEFORE KEY ACTIONS": row 8.
"MICROSOFT'S NUMBER: LAST 30 DAYS", "MAIL", "MEETINGS", "CHATS", "FILES", "ONLY WHAT YOU CAN ALREADY ACCESS", "WHILE GETTING ORIENTED: SENDS OR CHANGES NOTHING": row 17. "ENTRA AGENT ID · IN PREVIEW": rows 6, 7. "NAMED MANAGER": row 6. "IT: BLOCK ANYTIME": row 6.
The route, the paper plane, the pilot's cap and the robot are invented pictures inside the example (said in the description).
