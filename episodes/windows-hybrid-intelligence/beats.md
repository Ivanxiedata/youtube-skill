# Beats: windows-hybrid-intelligence (workflow step 3)

Written 2026-11-24 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Windows Hybrid Intelligence: 40 Steps to 2, Soon on Copilot+"** + thumbnail **"LEARN WINDOWS HYBRID INTELLIGENCE IN 60 SECONDS"**. The hook sells the viewer's moment (the same 20 files sorted in 2 of your steps instead of 40);
the tech (Windows picks local or cloud per task; agents in a container) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of the final words
(am_michael, speed 1.2, `--no-align`, laid in at 0.5 s: 55.72 s of voice after the claim-check fixes, ends at 56.22 s film); inside a line the cut is estimated, and the renderer re-times every cut to the real `vo_lines.json`.

The flow the owner chose (lesson L25): **one counted example, 20 files in your Downloads folder, sorted into folders**, from the first beat to the last; a **meter "YOUR STEPS"**
(the unit is the same both sides, L34: every upload, every drag, every ask, every yes is one step) that fills to 40 in BEFORE and stops at 2 in NOW on the same 20 files;
**the how on one diagram that grows** (YOUR TASK, then the WINDOWS block, then two branches ON YOUR PC / CLOUD, then the CONTAINER around the agent) with a highlight on what the voice names;
the proof is the maker's own number (over 2 trillion local inferences a month across Copilot+ PCs).

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 14 in three rounds, scored with `hookscore.py` (word lists read first, L33: digits for specificity; cost, never, stop for stakes; but, actually for curiosity). Every one opens with the topic's name (L14). Picked by the 3-second test (L16), then the score. Digits in the scored text; the voice says the words.

### 1 (chosen, after the claim check) 74 STRONG
"Windows hybrid intelligence: you think sorting 20 files with Copilot will cost you 40 steps, but actually, soon on Copilot+ PCs, you never upload them yourself."
```
VERDICT      74   STRONG
```
Rewritten after the claim check (`claims.md` row 4: the first version "... you never upload one." (75, The Impossible Claim) could read as "nothing goes to the cloud", while the cloud is still used "when needed"). "yourself" makes it your step, not where data goes; re-scored 74 (L26). "it reads them right on your PC" scored 69 (no stakes word) and was not used.
3-second test: the topic first, then the belief it corrects (20 files = 40 steps of uploads and moves) and the outcome (you never upload them yourself: Copilot reads them on your PC). No architecture word. Not a "but how?" ending (L31).
Conditions in the sentence itself (L26): "soon", "on Copilot+ PCs". "With your permission" comes in the now line and the takeaway.
Panel: the title card, then a Downloads folder with 20 file icons; the meter "YOUR STEPS" climbing amber to 40; the tag "SOON · COPILOT+ PCs"; an upload arrow fading out while the files glide into folders and the meter shows 2, teal.

### 2 (runner-up) 73 STRONG
"Windows hybrid intelligence: you think sorting 20 files with Copilot will cost you 40 steps, but actually, soon on Copilot+ PCs, it takes 2."
Why 1 over 2: 2 gives the answer away in the number; 1 leaves "then how does Copilot see them?" open and names the thing that changes (no uploads).
Panel: the same title card, then the meter dropping from 40 to 2.

### All hooks scored
| Score | Formula (tool) | Hook | Note |
|---|---|---|---|
| 76 | Unclassified | Windows hybrid intelligence: you think 20 files cost you 40 steps with Copilot, but actually, soon on Copilot+ PCs, you never upload one. | "20 files cost you" less clear than "sorting 20 files" |
| **74** | (re-scored) | **... "but actually, soon on Copilot+ PCs, you never upload them yourself."** | chosen, after the claim check |
| 69 | (re-scored) | ... "but actually, soon on Copilot+ PCs, it reads them right on your PC." | no stakes word |
| 75 | The Impossible Claim | Windows hybrid intelligence: you think sorting 20 files with Copilot will cost you 40 steps, but actually, soon on Copilot+ PCs, you never upload one. | first choice; narrower (`claims.md` row 4) |
| 73 | Unclassified | ... "but actually, soon on Copilot+ PCs, it takes 2." | runner-up |
| 72 | Unclassified | ... "will cost you 40 steps, but actually, on Copilot+ PCs, it will soon take you 2." | |
| 69 | The Impossible Claim | Windows hybrid intelligence: you think Copilot can only sort the 20 files you upload, but actually, soon on Copilot+ PCs, you never upload one. | |
| 66 | Unclassified | ... "but soon, on Copilot+ PCs, you'll never need more than 2." | |
| 62 | Unclassified | ... "you think tidying 20 files with Copilot costs you 40 steps, but soon ... it actually takes you 2." | "costs" is not in the stakes list |
| 61 | Unclassified | Windows hybrid intelligence: stop wasting 40 steps to sort 20 files with Copilot; soon, on Copilot+ PCs, it actually takes you 2. | |
| 58 | Unclassified | ... "you think Copilot can't touch your 20 files until you upload them, but actually ... it can, with your permission." | |
| 56 | Unclassified | ... "you think Copilot only sees what you upload, but soon, on Copilot+ PCs, it can sort your 20 files right on your PC." | |
| 56 | Unclassified | ... "stop uploading 20 files one by one; soon ... Copilot can sort them on your PC, with your permission." | |
| 48 | The Mistake | ... "you think every Copilot request goes to the cloud, but soon ... your own PC can actually do some of the work." | |
| 45 | Unclassified | ... "you never have to upload 20 files to Copilot again, because soon ..." | "because" closes the gap |
| 43 | The Impossible Claim | ... "sorting 20 files with Copilot costs you 40 steps today, but soon ... it takes you 2." | |

## The parts, in one line each
- **Hook (0.0-11.7 s):** the sentence above; title card from frame 0; 20 file icons; the meter climbing; "SOON · COPILOT+ PCs"; the files gliding into folders.
- **Turn (12.0 s):** "Here's what changes." Then it does it, on the 20 files.
- **Before, the pain as a scene (13.4-20.9 s):** the PC and a far cloud with the robot in it; files travel up one by one; the mascot drags each into a folder; the meter fills to 40.
- **Now, the same scene (20.9-29.4 s):** the robot now sits inside the PC; a permission card "YES"; one ask; the files slide into folders; the meter stops at 2.
- **How (29.4-39.1 s):** one diagram that grows: YOUR TASK -> WINDOWS -> ON YOUR PC / CLOUD · WHEN NEEDED, highlight following the voice; then a CONTAINER box around the agent with two doors "FILES", "NETWORKS".
- **Why / proof (39.1-45.0 s):** "OVER 2 TRILLION" "LOCAL AI INFERENCES A MONTH", small "SEARCH, IMAGING, VIDEO CALLS · ALL COPILOT+ PCs".
- **Close (45.0-57.7 s):** "WHAT WE LEARNED" card on the before/after split (meter 40 vs 2), then the takeaway card, then Subscribe + comment.

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) wearing a small amber **headset** (the office worker's costume), at a desk with a PC monitor.
- **The AI = Copilot drawn as a robot with a teal (`#2DB2AE`) screen head**, label "COPILOT" under it (plain text, no logo; visibly AI, brand casting).
- **Props:** a PC monitor showing a folder window "DOWNLOADS" with 20 file icons in a 5 x 4 grid (plain shapes, no logos); three folder icons "PDFS", "PHOTOS", "INVOICES"; a cloud shape far right labelled "CLOUD"; an upload arrow; a permission card "LET COPILOT READ YOUR FILES?" with a teal "YES" button; a chat bubble "SORT MY 20 FILES".
- **The meter "YOUR STEPS"**, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0, 20, 40 and a big whole-number counter on top; amber fill in BEFORE, teal in NOW.
- **Places:** D the desk + monitor (+ the cloud in BEFORE); X the how diagram; P the proof number; K the cards; the takeaway and Subscribe frames.
- Every frame: corner tag "Windows Hybrid Intelligence · 60s" (`claims.md` row 42) top-left. BEFORE tab amber, NOW tab teal, red for the sticker and Subscribe.

## Shots
23 shots in about 57.7 s, 2.5 s on average (L1). Cuts on word boundaries; times are draft film seconds from the draft voice of the final words (voice laid in at 0.5 s, ends 56.22 s; a 1.5 s tail).
The meter "YOUR STEPS" counts the viewer's own actions on both sides (L34): an upload, a drag, an ask, a yes.

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-2.2 | "Windows hybrid intelligence:" | Full-screen title card from frame 0, no fade: small off-white "LEARN WINDOWS", huge amber "HYBRID INTELLIGENCE", tilted red "IN 60 SECONDS"; corner tag on. Ends on the measured pause after the name (L36) | hook: topic first (L14) |
| 1 | 2.2-4.8 | "you think sorting twenty files with Copilot" | The monitor with the "DOWNLOADS" window, 20 file icons; small card "20 FILES"; a slow push | hook: the counted example |
| 2 | 4.8-6.8 | "will cost you forty steps," | The meter "YOUR STEPS" eases in (0.6 s) and counts up to 40, amber | hook: the belief |
| 3 | 6.8-9.4 | "but actually, soon on Copilot plus P Cs," | A teal badge eases in over the monitor: "SOON · COPILOT+ PCs" | hook: the condition |
| 4 | 9.4-11.7 | "you never upload them yourself." | A grey upload arrow fades out (0.7 s); label "1 ASK + 1 YES"; the files glide into three folders; the meter cross-fades to 2, teal | hook: the outcome |
| 5 | 11.7-13.4 | "Here's what changes." | Wide desk: the mascot at the monitor, the Copilot robot beside; lower card "20 FILES · 1 FOLDER TO SORT" | turn |
| 6 | 13.4-16.4 | "Today, many Copilot tasks run in the cloud." | Amber tab "TODAY"; the monitor left, a cloud far right with the robot in it, label "CLOUD"; a dotted line between; label "MANY TASKS IN THE CLOUD"; slow push | before: your scene |
| 7 | 16.4-18.8 | "In our example, twenty files: twenty uploads," | Small tag "OUR EXAMPLE"; files lift off the monitor one after another and travel to the cloud; the meter climbs to 20 (amber); label "20 UPLOADS" | before: the pain |
| 8 | 18.8-20.9 | "twenty moves, forty steps." | The mascot drags files into folders one by one; the meter climbs to 40; label "40 STEPS" | before: the pain, counted |
| 9 | 20.9-23.3 | "Soon, on Copilot plus P Cs," | Teal tab "SOON"; the same monitor; the cloud stays, small and dim; the robot now inside the monitor's corner; badge "COPILOT+ PCs · COMING MONTHS"; the meter at 0, teal (cross-fade 0.7 s) | now: same scene |
| 10 | 23.3-26.4 | "with your permission, it reads them on your P C." | A card "LET COPILOT READ YOUR FILES?" eases in with a teal "YES"; a teal scan line passes over the 20 icons inside the monitor; label "ON YOUR PC" | now: your permission, your files |
| 11 | 26.4-27.8 | "You ask, say yes," | Chat bubble "SORT MY 20 FILES"; the mascot taps "YES"; the meter 1, then 2 | now: two steps |
| 12 | 27.8-29.4 | "and it sorts them: two steps." | The 20 files slide into the folders "PDFS", "PHOTOS", "INVOICES"; the meter stays at 2; label "2 STEPS" | now: the outcome |
| 13 | 29.4-30.3 | "How?" | Diagram starts, title "HOW IT WORKS"; a card "YOUR TASK" at left | how: piece 1 |
| 14 | 30.3-32.2 | "Windows picks, task by task:" | A block "WINDOWS" grows in to the right of the task, highlighted amber; tag "PICKS PER TASK" | how: piece 2 |
| 15 | 32.2-34.4 | "your P C, or the cloud when needed." | Two branches grow from WINDOWS: up-right "ON YOUR PC" (highlight teal first), down-right "CLOUD · WHEN NEEDED" (highlight moves to it) | how: piece 3, highlight moves |
| 16 | 34.4-36.6 | "Supported agents can run in a container" | A glass box "CONTAINER (MXC)" eases in around a small robot under the diagram; tag "SUPPORTED AGENTS" | how: piece 4 |
| 17 | 36.6-39.1 | "limited to allowed files and networks." | Two doors on the box: "FILES" and "NETWORKS", each with a teal lock; only one file icon passes through; label "ONLY WHAT POLICY ALLOWS" | how: piece 4, highlight moves |
| 18 | 39.1-41.8 | "Copilot plus P Cs already run" | A row of small PC monitors, each with a teal glow; label "ALREADY ON COPILOT+ PCs" | why: proof |
| 19 | 41.8-45.0 | "over two trillion local A I inferences a month." | Big amber "OVER 2 TRILLION", under it "LOCAL AI INFERENCES A MONTH"; small line "SEARCH, IMAGING, VIDEO CALLS · ALL COPILOT+ PCs · MICROSOFT"; slow push | why: the maker's number |
| 20 | 45.0-48.4 | "So, what we learned: our twenty files took forty steps;" | Top card "WHAT WE LEARNED"; side by side: left "TODAY" the meter at 40 (amber), right "SOON" the meter at 2 (teal); label "SAME 20 FILES" | close: the conclusion |
| 21 | 48.4-52.1 | "soon, on Copilot plus P Cs, two, with your permission." | Takeaway card: line 1 off-white "OUR 20 FILES: 40 STEPS TODAY,", line 2 amber "2 STEPS SOON"; small line "OUR EXAMPLE · COPILOT+ PCs · WITH YOUR PERMISSION · COMING MONTHS" | close: the takeaway, the promise delivered out loud |
| 22 | 52.1-57.7 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"HYBRID INTELLIGENCE", "WINDOWS": [BLOG] title "Building Windows for hybrid intelligence". "DOWNLOADS", "20 FILES", "20 FILES · 1 FOLDER TO SORT", "SAME 20 FILES", the folders: our counted example inside [BLOG] "organizing files" and "including files" (`research.md` rows 6, 7).
"YOUR STEPS", "20 UPLOADS", "40 STEPS", "2 STEPS", the meter at 40 and 2: our example (not a maker's number; said in the description).
"SOON · COPILOT+ PCs", "COPILOT+ PCs · COMING MONTHS": rows 5, 10. "MANY TASKS IN THE CLOUD": rows 18, 19 (press: "some Copilot tasks that currently depend heavily on cloud services"). "OUR EXAMPLE", "1 ASK + 1 YES": the example.
"LET COPILOT READ YOUR FILES?", "YES", "ON YOUR PC": rows 4, 6, 7, 9 ("With your permission, Copilot can understand relevant content on your PC, including files"; "directly on your device"). "SORT MY 20 FILES": the example.
"HOW IT WORKS", "YOUR TASK", "WINDOWS", "PICKS PER TASK", "ON YOUR PC", "CLOUD · WHEN NEEDED": rows 3, 8. "CONTAINER (MXC)", "SUPPORTED AGENTS", "FILES", "NETWORKS", "ONLY WHAT POLICY ALLOWS": rows 11, 13, 14.
"ALREADY ON COPILOT+ PCs", "OVER 2 TRILLION", "LOCAL AI INFERENCES A MONTH", "SEARCH, IMAGING, VIDEO CALLS · ALL COPILOT+ PCs": row 15. Takeaway card: rows 4, 10 + the example.
The desk, headset, robot, monitor, cloud and folders are invented pictures inside the example; no logos or real interface.
