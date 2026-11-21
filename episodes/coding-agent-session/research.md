# Research: a coding-agent session vs a chat assistant

Done 2026-11-20/21. Primary sources only: the makers' own docs of three real coding agents (Anthropic's Claude Code, OpenAI's Codex CLI, GitHub Copilot agent mode).
The premise holds: all three describe one model working in a loop with tools (read files, edit, run commands, check the result) in a terminal or editor, and Anthropic contrasts it with chat assistants whose text you apply yourself.

## Facts used in the video
| Fact | Source |
|---|---|
| "Agentic coding: a workflow where the AI can read files, run commands, and make changes autonomously while you watch, redirect, or step away, as opposed to chat-based assistants that only respond with text you must apply yourself." | [Claude Code glossary](https://code.claude.com/docs/en/glossary) |
| "Tools are what make Claude Code agentic. Without tools, Claude can only respond with text." Each tool use returns a result that informs the next decision | [Claude Code glossary: Tool](https://code.claude.com/docs/en/glossary), [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works) |
| The agentic loop: gather context, take action, verify results, repeat until done; example "fix the failing tests": run the tests, read the error, search, read files, edit, run the tests again | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works) |
| "The agentic loop is powered by two components: models that reason and tools that act." Claude Code is the harness around the model that provides the tools | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works) |
| Session: a conversation tied to your directory with its own context window; each message, tool use and result is written to a transcript file | [Claude Code glossary: Session](https://code.claude.com/docs/en/glossary), [How Claude Code works: sessions](https://code.claude.com/docs/en/how-claude-code-works#work-with-sessions) |
| You can interrupt the loop at any point (Esc) to steer it | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works) |
| Runs in the terminal, the desktop app, IDE extensions and the web; the loop is the same everywhere | [How Claude Code works: interfaces](https://code.claude.com/docs/en/how-claude-code-works#interfaces) |
| Verification loop: give it a check it can run (tests, a build) so it iterates until the check passes instead of stopping after one attempt | [Claude Code glossary: Verification loop](https://code.claude.com/docs/en/glossary) |
| Codex CLI: "a coding agent from OpenAI that runs locally on your computer"; "Inspect code, make changes, run commands"; "Explore, edit, and run a repository in one focused loop." | [openai/codex README](https://github.com/openai/codex), [Codex CLI docs](https://learn.chatgpt.com/docs/codex/cli) |
| Copilot agent mode (VS Code): reads relevant files, proposes edits, runs terminal commands and tests, responds to errors and "auto-corrects in a loop until the task is completed" | [VS Code blog, 2025-02-24](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) |

## Predecessors
| Fact | Source |
|---|---|
| Chat assistants answer with text you must apply yourself (the "before" in the video) | [Claude Code glossary: Agentic coding](https://code.claude.com/docs/en/glossary) |
| Autocomplete: GitHub Copilot (2021) "suggesting whole lines or entire functions" as you type. Named in the description, not in the voice, to keep one clear "before" | [GitHub blog, 2021-06-29](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) |
| Dates: Claude Code introduced 2025-02-24 ("search and read code, edit files, write and run tests, commit ... use command line tools"); Codex CLI repo created 2025-04-13 | [Anthropic, Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet), [openai/codex](https://github.com/openai/codex) |

## The story: a mechanic on the phone, or in your garage
Everyday life, no historical facts to source. Mapping, checked against the docs above:
| Story | Technology | Why it holds |
|---|---|---|
| Your car with a noise, under the hood | your code, your repository | the thing to be fixed |
| The mechanic on the phone: he can only talk; you try his fix, start the car, tell him what happened | a chat assistant: text you paste, run, and carry the error back | "only respond with text you must apply yourself" |
| The same mechanic, in your garage, with tools | a coding agent: the same kind of model plus tools in a harness | "models that reason and tools that act"; "without tools, Claude can only respond with text" |
| He looks, turns a bolt, starts the engine, listens; still broken, goes round again | read files, edit, run a command, check the result; loop until done | the agentic loop, "repeat until done" |
| The whole visit | one session: every step and every result in one transcript | Session and transcript entries |
| You can say "wait, stop" | you can interrupt the loop | "You can interrupt at any point" |
| "Didn't get a bigger brain, got hands and a way to check" | the harness adds tools and a verification loop around the model | harness + verification loop entries |

Where the analogy stops (not said in the video): a real mechanic can be liable for his work; an agent acts with the permissions you give it (permission modes), and its changes can be checkpointed and undone.
"fix the failing test", "app.js", "3 files", "line 42" on screen are invented examples, not quotes.

## Left out on purpose
- Benchmarks and productivity numbers: none from the makers are needed for the definition, and third-party numbers vary.
- Which agent is "best": not our business (`docs/product.md` non-goals).
- Cloud sessions, subagents, agent teams: real (same glossary) but beyond one idea in 60 s; Agent Skills is the next episode.

## How this was researched
Two items (the new pattern and its predecessor) did not need the Deep-Research flow, as in Episode 0: the makers' docs were read directly with a web fetch, quotes copied, and dates checked with the GitHub API.
