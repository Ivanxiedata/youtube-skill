# Research: Agent Skills vs the one big prompt

Done 2026-11-21. The specification and the makers' own docs first; nothing from press.
Re-checked 2026-11-21 for v2 (workflow v2, step 1): the five makers' pages below re-read directly; every quoted fact still holds word for word,
including "~100 tokens" per skill at startup, "< 5000 tokens recommended" for the body, `name` max 64 and `description` max 1024 characters,
and the dates (announced 2025-10-16, open standard 2025-12-18). One fix: "500 pages" was an invented figure in v1's hook and on the binder; v2 uses no invented numbers.

## Every number in v2 (spoken or on screen)
| Number | Where | True because |
|---|---|---|
| 60 ("Agent Skills in 60s", "IN 60 SECONDS", "Next in 60 seconds") | hook, title card, corner tag, end card | the video's own length, at most 60 s (`docs/workflow.md` step 4 pass) |
| 1 ("your 1 big prompt", title "Agent Skills vs 1 Big Prompt") | hook, title | the predecessor is one always-loaded prompt holding every instruction (the makers' own "before", section "The before" below) |
| 100 ("skills cost 100 tokens", "about 100 tokens", "about 100 tokens per skill") | hook, body, board | "Metadata (~100 tokens): The `name` and `description` fields are loaded at startup for all skills" (specification); "Always (at startup), ~100 tokens per Skill" (Claude docs, column "Token cost"). The hook rounds "~100" to "100" to stay at 24 words; the body says "about 100" out loud and the board says "about 100 tokens per skill" |

## Dates (launch-timed words)
Announced 2025-10-16; an open standard since 2025-12-18 ([Claude blog](https://claude.com/blog/skills)). On 2026-11-21 that is 13 and 11 months ago,
so no "just dropped", "new" or "this week" anywhere (brand rule: only for a release about a month old or less). The script says what it is and how it works, not when.

## Is the premise right?
Yes. Agent Skills are a published format with a specification (agentskills.io), first developed by Anthropic and released as an open standard on 2025-12-18.
A skill is a folder with a `SKILL.md`; an agent loads each skill's name and description at startup and the rest only when a task needs it.

## Facts used in the video
| Fact | Source |
|---|---|
| "A skill is a directory containing, at minimum, a `SKILL.md` file"; optional `scripts/`, `references/`, `assets/` | [Specification](https://agentskills.io/specification) |
| `SKILL.md` = YAML frontmatter with required `name` (max 64 chars) and `description` (max 1024 chars, "what the skill does and when to use it"), then Markdown instructions | [Specification](https://agentskills.io/specification) |
| Progressive disclosure: metadata (~100 tokens) loaded at startup for all skills; full `SKILL.md` body (< 5000 tokens recommended) when activated; other files only when required | [Specification](https://agentskills.io/specification) |
| Discovery (name + description at startup), Activation (task matches, full `SKILL.md` read), Execution (bundled code or referenced files as needed); "agents can keep many skills on hand with only a small context footprint" | [What are skills?](https://agentskills.io/what-are-skills) |
| "Originally developed by Anthropic, released as an open standard" | [What are skills?](https://agentskills.io/what-are-skills) |
| Announced 2025-10-16; "published Agent Skills as an open standard for cross-platform portability (December 18, 2025)" | [Claude blog: Skills](https://claude.com/blog/skills) |
| "At startup, the agent pre-loads the `name` and `description` of every installed skill into its system prompt"; the article compares a skill to "an onboarding guide for a new hire" and progressive disclosure to "a well-organized manual that starts with a table of contents" | [Anthropic engineering blog, 2025-10-16](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) |
| Level 1 metadata ~100 tokens per skill, always loaded; Level 2 instructions under 5k tokens, when triggered; Level 3 resources, none until accessed; scripts run and only their output enters context | [Claude docs: Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) |
| Example skill `pdf-processing`, description "Extract text and tables from PDF files, fill forms ... Use when working with PDF files or when the user mentions PDFs"; a `FORMS.md` read only for form filling | [Claude docs: Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) |

## The "before" (which predecessor is right)
The makers name it themselves, so the video uses their words:
| Fact | Source |
|---|---|
| "Unlike prompts (conversation-level instructions for one-off tasks), Skills load on demand, so you don't have to repeat the same guidance across conversations." Benefit: "Reduce repetition: create once, use automatically" | [Claude docs: overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) |
| "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact. Unlike CLAUDE.md content, a skill's body loads only when it's used" | [Claude Code docs: skills](https://code.claude.com/docs/en/skills) |
So the before is one pattern with two faces: every instruction in one always-loaded prompt (a system prompt or a CLAUDE.md-style file),
or the same instructions pasted again each time. The video shows the first ("the one big prompt"), because that is the one progressive disclosure changes;
the description mentions the second. Like Episode 0's predecessor, it is a pattern, not a product.

## The story: a kitchen, a binder and a recipe box
Everyone has seen recipes kept on cards in a box with tabs, so a cook finds one without reading the rest.
Kept for v2: no story everyone knows maps better (a library card catalogue is less familiar today; a phone's app icons are opened by the user, not chosen by the "worker").
The recipe box keeps the agent's own choice (the cook picks the card from the order) and has all three levels: tab, card, a sheet the card points to.
Mapping: you = the head chef; your AI agent = the cook; the one big prompt = one giant binder of every rule (no page count), read before every order;
a skill = one recipe card; the card's tab (its name, and when to use it) = the skill's `name` + `description`, the only part read at startup;
an order matching a tab = a task matching a description; pulling that one card = loading that skill's full `SKILL.md`.
| Fact | Source |
|---|---|
| Recipe boxes held recipe cards, some hundreds of them, and were a kitchen staple before recipe apps | [Click Americana: vintage recipe boxes](https://clickamericana.com/recipes/vintage-recipe-boxes) |
| Recipe boxes used tabbed dividers to find recipes by category (museum examples, 1950-1970) | [Tempe History Museum: recipe card divider](https://emuseum.tempe.gov/objects/11827/recipe-card-divider--sandwiches) |

Where the analogy stops (not said in the video): real recipe tabs are usually category dividers and card titles, not "when to use it";
an agent decides by matching the request against each description, not by a fixed rule; and a skill can also carry scripts the agent runs,
which a recipe card can't. The "egg", "soup", the tab names and the on-screen rule and skill names are invented examples, not facts from a source;
none of them is a number. The on-screen `pdf-processing` skill and the task "Extract the text from this PDF" are shortened from the Claude docs' own example.
The hook's "skills cost 100 tokens until you need them" means each skill's name + description (~100 tokens) sits in context until a task matches it;
"cost" is the docs' own word (column "Token cost"). The payoff's "only the tab loads, until a task needs the card" is the same fact in the story's words.
"Your agent keeps many skills on hand, and room to work" restates "agents can keep many skills on hand with only a small context footprint" (agentskills.io)
and "you can install many Skills without context penalty" (Claude docs).

## Left out on purpose
- Which products support skills (a long, changing list on agentskills.io): not needed for the idea, and it would date the video.
- Security warnings (only install skills you trust): true and important, but a different lesson; it goes in the description.
- Token savings as a percentage: no primary source gives one.
- v2: "It's an open standard, started by Anthropic" is no longer spoken (it pushed the voice past 59.5 s); it stays on screen as one small label, sourced above.
- v2: the body's "< 5000 tokens recommended" and the 64/1024-character limits are true but not needed for the idea; left out to keep one number (100) in the viewer's head.

## How this was researched
Three makers' pages plus the specification, read directly (two items, no Deep-Research run; same decision as Episode 0).
