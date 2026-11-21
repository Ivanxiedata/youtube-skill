# Research: Agent Skills vs the one big prompt

Done 2026-11-21. The specification and the makers' own docs first; nothing from press.

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
Mapping: you = the head chef; your AI agent = the cook; the one big prompt = one 500-page binder of every rule, read before every order;
a skill = one recipe card; the card's tab (its name, and when to use it) = the skill's `name` + `description`, the only part read at startup;
an order matching a tab = a task matching a description; pulling that one card = loading that skill's full `SKILL.md`.
| Fact | Source |
|---|---|
| Recipe boxes held recipe cards, some hundreds of them, and were a kitchen staple before recipe apps | [Click Americana: vintage recipe boxes](https://clickamericana.com/recipes/vintage-recipe-boxes) |
| Recipe boxes used tabbed dividers to find recipes by category (museum examples, 1950-1970) | [Tempe History Museum: recipe card divider](https://emuseum.tempe.gov/objects/11827/recipe-card-divider--sandwiches) |

Where the analogy stops (not said in the video): real recipe tabs are usually category dividers and card titles, not "when to use it";
an agent decides by matching the request against each description, not by a fixed rule; and a skill can also carry scripts the agent runs,
which a recipe card can't. "500 pages", "egg", "soup" and the on-screen rule names are invented examples, not figures from a source.
The on-screen `pdf-processing` skill is shortened from the docs' own example.

## Left out on purpose
- Which products support skills (a long, changing list on agentskills.io): not needed for the idea, and it would date the video.
- Security warnings (only install skills you trust): true and important, but a different lesson; it goes in the description.
- Token savings as a percentage: no primary source gives one.

## How this was researched
Three makers' pages plus the specification, read directly (two items, no Deep-Research run; same decision as Episode 0).
