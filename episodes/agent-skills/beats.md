# Beats: agent-skills (v2, workflow step 3)

Title (from `package.md`): **Agent Skills vs 1 Big Prompt**. Thumbnail: LEARN AGENT SKILLS IN 60 SECONDS.
Spoken text: `script.md`; as spoken by the voice: `film/script.txt`. Voice: `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align`,
laid in at 0.08 s as v1 (`film/audio_mix.py`), so every time below is voice time + 0.08. Voice ends at **57.07 s** (vo.wav 57.29 s with its 0.3 s tail).

## Hooks (`python3 .claude/skills/yt-script/hookscore.py hooks.txt`, 8 written, 2026-11-21)
| Hook | Score | Formula |
|---|---|---|
| Agent Skills in 60s: you stop loading your 1 big prompt before each task; skills cost 100 tokens until you need them, but how? | **100** | The Mistake |
| Agent Skills in 60s: you stop wasting your context on 1 big prompt before each task; 100 tokens wait until you ask, but how? | 100 | The Mistake |
| Agent Skills in 60s: you stop wasting your context on 1 big prompt before each task, but how do 100 tokens find what you need? | 96 | The Mistake (25 words) |
| Agent Skills in 60s: you never load 1 big prompt before each task again; 100 tokens wait until you need more, but how? | 93 | The Question |
| Agent Skills in 60s: you stop wasting your context on 1 big prompt before each task, but how does your agent know which skill? | 92 | The Mistake (2 numbers) |
| Agent Skills in 60 seconds: you stop loading every rule before every task, but how does your agent know which skill you need? | 79 | The Mistake |
| Agent Skills in 60 seconds: before, your agent read every rule you wrote; after, 100 tokens a skill until you need more. | 70 | The Clock |
| Agent Skills, explained: you would never make a cook reread 500 pages to fry one egg, but that is how you prompt your AI agent. (v1) | 69 | The Impossible Claim |

**Chosen (1):**
```
  Agent Skills in 60s: you stop loading your 1 big prompt before each task; skills cost 100 tokens until you need them, but how?
    SPECIFICITY  100     ADDRESS      100     STAKES       100     CURIOSITY    100     BREVITY      100
    VERDICT      100  STRONG
    formula      The Mistake  (1 pattern matched)
```
**Runner-up (2):**
```
  Agent Skills in 60s: you stop wasting your context on 1 big prompt before each task; 100 tokens wait until you ask, but how?
    SPECIFICITY  100     ADDRESS      100     STAKES       100     CURIOSITY    100     BREVITY      100
    VERDICT      100  STRONG
    formula      The Mistake  (1 pattern matched)
```
Why 1 over 2: "skills cost 100 tokens until you need them" says exactly what the docs say (each skill's name + description, ~100 tokens, sits in context until a task needs it);
"100 tokens wait until you ask" is vaguer about what waits. Formula: **The Mistake** (name the error the viewer is probably making right now): the viewer very likely keeps
every instruction in one always-loaded prompt; the sentence names that, then the fix, then leaves the "how" open. It is topic first ("Agent Skills" are the first words),
before -> after (1 big prompt before each task -> 100 tokens until you need them), and it confirms the title "Agent Skills vs 1 Big Prompt".
Every number is true (`research.md`, "Every number in v2"): 60 = the video's length, 1 = the one always-loaded prompt, 100 = "~100 tokens per skill" rounded.
**Score it as written here**, with "60s" and digits: written "60 seconds" it is 25 words (BREVITY 93, verdict 96). `script.md` and the captions keep this exact text.

## Beat table
Places: **TITLE** (v1 `drawTitle`), **STUDIO** = today, your desk and your agent's screen (v1 `drawStudio`, `agentScreen`), **KITCHEN** = the story (v1 `drawKitchen`:
head chef = the mascot in the toque, the cook (your AI agent) in the teal cap with a screen for a head: a dark rounded monitor with glowing eyes (coral when overloaded, teal when calm), not a human face; counter, stove, order rail, binder, recipe box), **BOARD** = BEFORE vs AGENT SKILLS (v1 `drawBoard`).
Corner tag "Agent Skills · 60s" top-left on every frame, 0 to the end. 27 shots in about 58.6 s, one every 2.2 s (lesson L1). Cards are the v1 `card()` pills.

| # | Time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.00-1.95 | "Agent Skills in 60s:" | TITLE from frame 0, no fade-in: dusk-purple ground, small off-white "LEARN", "AGENT SKILLS" huge in amber Impact, the red tilted sticker "IN 60 SECONDS" (the thumbnail's style). Drop v1's "EXPLAINED" (no longer spoken). Hard cut right after "seconds" (estimated end 1.92 s) | hook: topic first |
| 1 | 1.95-3.60 | "you stop loading your 1 big prompt" | STUDIO wide: the mascot (toque) at his desk; on the agent's screen a wall of rules scrolls without end ("PDF rules", "code review rules", "brand voice rules", "report rules", "email rules", ...), headed "YOUR PROMPT" | hook: before |
| 2 | 3.60-5.20 | "before each task;" | STUDIO close on the screen: a task ticket "task" arrives and the whole wall pours into a "context" meter beside it, which fills with red (it stops short of the top) and is labelled "EVERY RULE, EVERY TASK" (no "FULL": no source says the window fills). Card (off-white): "before: 1 big prompt, every task" | hook: before |
| 3 | 5.20-8.14 | "skills cost 100 tokens until you need them," | STUDIO screen flips to the after state (v1's `T_NEW` state, moved here): the wall collapses into a short stack of one-line skill chips ("pdf-processing", "code-review", "brand-voice", "sales-report"), each with a small teal tag "~100 tokens"; the meter drops to mostly empty, teal. Card (amber): "now: about 100 tokens per skill" | hook: after |
| 4 | 8.14-9.17 | "but how?" | close on the mascot, head tilted, an amber "?" bubble over one chip | hook: the open question |
| 5 | 9.17-10.70 | "Here's how, in a kitchen." | KITCHEN wide: counter, stove with a pan, order rail; the head chef (mascot, toque) left, the cook (teal cap) right. Small card "here's how" | turn (by 10.4 s) |
| 6 | 10.70-12.60 | "Every rule you wrote sits in one giant binder:" | close: a giant binder slams onto the counter (thud); its spine reads "EVERY RULE" (replaces v1's "500 pages" label: **no page count anywhere**); loose pages stick out | beat: before (story) |
| 7 | 12.60-14.69 | "your big prompt." | same binder, the head chef points at it; amber card "= your big prompt" | beat: before (story = today) |
| 8 | 14.69-16.20 | "Your cook rereads all of it," | the cook flips pages fast (paper sounds), page blur, a sweat drop | beat: before |
| 9 | 16.20-18.05 | "even to fry one egg." | close on the stove: one raw egg waiting by a cold pan, order tickets piling on the rail. Card "…to fry one egg" | beat: before (the surprise) |
| 10 | 18.05-20.28 | "Agent Skills are a recipe box." | the binder slides off to the shelf; a recipe box drops onto the counter (thud). Amber card "Agent Skills = a recipe box" | beat: new (story) |
| 11 | 20.28-21.70 | "Every card has a tab:" | close on the box: cards with tabs EGG, SOUP, CAKE, RICE, PIE | beat: new |
| 12 | 21.70-23.44 | "its name, and when to use it." | callout from the SOUP tab: "SOUP" big, under it "use when: soup is ordered"; two small labels point at them: "name", "when to use it" | beat: new (tab = name + description) |
| 13 | 23.44-25.31 | "Your cook reads only the tabs." | the cook runs a finger along the tabs (a tick on each); the binder sits closed on the shelf behind. Card "he reads only the tabs" | beat: new |
| 14 | 25.31-26.60 | "Soup is ordered:" | a "SOUP" ticket slides onto the order rail (bell) | beat: new |
| 15 | 26.60-28.47 | "he pulls only the soup card." | the cook lifts the SOUP card out of the box; the other cards dim. Card "one card · nothing else" | beat: new (task matches = one card) |
| 16 | 28.47-31.50 | "A skill is a folder with a SKILL.md file." | BOARD: two columns split by a dashed line (drawn with rects, not `setLineDash`). Left, already drawn: "BEFORE", "ONE BIG PROMPT" box listing every rule, arrow "all of it, every task" into a context window box tagged "EVERY RULE, EVERY TASK" (red; no "FULL"). Camera pans right to "AGENT SKILLS": a folder "pdf-processing/" opens and shows one file, "SKILL.md". Card "a skill = a folder + SKILL.md" | beat: new (diagram) |
| 17 | 31.50-34.20 | "At startup, your agent loads only each skill's name and description:" | zoom on the top of SKILL.md: two lines lit amber, "name: pdf-processing" and "description: Extract text and tables from PDF files ... Use when working with PDFs"; small label "= the tab". Those two lines fly as a chip into the agent's context column; other chips ("code-review", "brand-voice", "sales-report") drop in under it | beat: new (startup) |
| 18 | 34.20-37.01 | "about 100 tokens." | close on the context column: each chip tagged "~100 tokens", most of the column still empty. Amber card "about 100 tokens per skill" | beat: new (the number) |
| 19 | 37.01-40.10 | "When a task matches, it reads the full instructions." | a task bubble "Extract the text from this PDF" reaches the agent node; the "pdf-processing" chip gets a teal outline (match); the SKILL.md body (lines of instructions) slides into the context column; small label "= pulling the card". Card "the full instructions: only now" | beat: new (activation) |
| 20 | 40.10-42.61 | "Extra files load only if needed." | inside the folder, "FORMS.md" and "scripts/" stay grey, tagged "if needed"; FORMS.md stays closed (this task has no form, as in the docs' example). Card "extra files: only if needed" | beat: new (resources) |
| 21 | 42.61-44.40 | "That's the how:" | BOARD wide, both sides at once: BEFORE's context window red and tagged "EVERY RULE, EVERY TASK", AGENT SKILLS' column mostly empty and teal with chips plus one loaded card. Big amber card "THAT'S THE HOW" | payoff (said out loud) |
| 22 | 44.40-46.45 | "only the tab loads, until a task needs the card." | split screen: left the kitchen's SOUP tab and the pulled SOUP card, right the "pdf-processing" chip and the SKILL.md body; an arrow joins tab to chip and card to body. Card "tab first · card on a match" | payoff (story = tech) |
| 23 | 46.45-50.17 | "So your agent keeps many skills on hand, and room to work." | STUDIO: the agent's screen shows a long column of one-line skill chips (ten or more), the context meter mostly free (teal), the mascot leans back. Small silent label at the screen's foot: "an open standard · started by Anthropic" (sourced in `brief.json`, takeaway). Teal card "many skills on hand · room to work" | beat: why |
| 24 | 50.17-52.45 | "The lesson is as old as the kitchen." | KITCHEN: the binder closed on the shelf, the egg frying in the pan, the cook working calmly with the recipe box. Amber card "a lesson as old as the kitchen" | close: takeaway |
| 25 | 52.45-55.67 | "Don't tell your agent everything. Tell it where to look." | close on the cook's finger on the tabs; the takeaway card in two lines (brand): off-white "Don't tell your agent everything." from 52.45, then amber "Tell it where to look." on its words (54.28) | close: takeaway tied to the story |
| 26 | 55.67-58.60 | "Subscribe for the next one." | the head chef (mascot, toque) faces the viewer and waves; the red Subscribe button pops in at 55.7; under it, from 56.2 to the end, "Next in 60 seconds: why MCP went stateless"; hold, fade out over the last 0.45 s; film about 58.6 s | close: the one ask + end card |

Spoken words: `script.md` 171, `film/script.txt` 177 (numbers in words, "SKILL.md" as "skill dot M D"). Estimated times inside a line come from `film/align_est.json`;
line starts and ends are exact (`film/vo_lines.json` + 0.08).
