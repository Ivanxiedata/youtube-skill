# Research: a coding-agent session vs a chat assistant

Done 2026-11-20/21; re-checked 2026-11-21 for v2 (step 1 of `docs/workflow.md`): every quote below was fetched again from the maker's page. Two fixes: the Codex quotes were reworded to the pages' exact words, and the counts said in the video got their own table. Primary sources only: the makers' own docs of three real coding agents (Anthropic's Claude Code, OpenAI's Codex CLI, GitHub Copilot agent mode).
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
| Verification loop: "How a session knows the work is actually done instead of accepting a result that looks plausible. You give Claude a check it can run, such as a test suite, a build, or a screenshot comparison, and Claude iterates until the check passes instead of stopping after one attempt." Supports "it can still be wrong, so give it a test to run" | [Claude Code glossary: Verification loop](https://code.claude.com/docs/en/glossary) |
| Codex CLI: "Codex CLI is a coding agent from OpenAI that runs locally on your computer." (README); "Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal."; "Let Codex inspect files, make edits, and run the tools already installed on your machine."; "Use one focused terminal loop for interactive work, automation, review, and delegation." (docs). v1 quoted "Explore, edit, and run a repository in one focused loop", which is not on the page | [openai/codex README](https://github.com/openai/codex), [Codex CLI docs](https://learn.chatgpt.com/docs/codex/cli) |
| Copilot agent mode (VS Code): reads relevant files, proposes edits, runs terminal commands and tests, responds to errors and "auto-corrects in a loop until the task is completed" | [VS Code blog, 2025-02-24](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) |

## Numbers said in the video (v2)
Each count in the hook, the title and the payoff, and where it comes from. Nothing else in the voice is a number.
| Said | What it counts | Source |
|---|---|---|
| "60s" / "in sixty seconds" | the video's own length (the brand format), not a claim about the tech | `docs/brand.md` Format row |
| "1 agent" / "one agent" | one model in one loop; the docs describe a single agent per session ("Claude is the model inside it"; "Codex CLI is a coding agent") | [Claude Code glossary: Agentic harness](https://code.claude.com/docs/en/glossary), [openai/codex README](https://github.com/openai/codex) |
| "1 loop" / "one loop" | the agentic loop, "repeat until done"; Copilot "auto-corrects in a loop until the task is completed"; Codex "one focused terminal loop" | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works), [VS Code blog](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode), [Codex CLI docs](https://learn.chatgpt.com/docs/codex/cli) |
| "4 steps": read, edit, run, check | Our four-word simplification of the loop, one box each on the board. Every word is the makers': Claude Code's tools "read your code, edit files, run commands" and its loop's "verify results"; Copilot agent mode "reading relevant files, proposing file edits, and running terminal commands and tests", then it "responds to compile and lint errors, monitors terminal and test output"; Codex "inspect files, make edits, and run the tools". Honest limit: Anthropic names three phases (gather context, take action, verify results), and its own "fix the failing tests" example has six actions; the video says "four steps" for its own drawing of the loop, never "Anthropic's four steps" | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works), [VS Code blog](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode), [Codex CLI docs](https://learn.chatgpt.com/docs/codex/cli) |
| "one job" | one task you give it: "When you give Claude a task, it works through three phases" | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works) |
| "one session" | "Each Claude Code conversation is a session tied to your current directory"; each message, tool use and result is written to its transcript | [How Claude Code works: sessions](https://code.claude.com/docs/en/how-claude-code-works#work-with-sessions), [Claude Code glossary: Session](https://code.claude.com/docs/en/glossary) |

## Predecessors
| Fact | Source |
|---|---|
| Chat assistants answer with text you must apply yourself (the "before" in the video; v2 says "chatbot", the plain word for the glossary's "chat-based assistants", because it is what viewers search and what the title says) | [Claude Code glossary: Agentic coding](https://code.claude.com/docs/en/glossary) |
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
"fix the failing test", "app.js", "line 42", "Error: it still fails", "tests passed" on screen are invented examples, not quotes (say so in the description).
"The same mechanic" means the same kind of model: a chatbot and a coding agent can run the same model; the agent adds the harness (tools and the loop). The video does not claim any one product uses one model.

## Left out on purpose
- Benchmarks and productivity numbers: none from the makers are needed for the definition, and third-party numbers vary.
- Which agent is "best": not our business (`docs/product.md` non-goals).
- Cloud sessions, subagents, agent teams: real (same glossary) but beyond one idea in 60 s; Agent Skills is the next episode.

## How this was researched
Two items (the new pattern and its predecessor) did not need the Deep-Research flow, as in Episode 0: the makers' docs were read directly with a web fetch, quotes copied, and dates checked with the GitHub API.
