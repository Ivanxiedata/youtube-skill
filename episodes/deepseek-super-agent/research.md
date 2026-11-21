# Research: DeepSeek Super-agent vs a single coding-agent session

Done 2026-11-20. Primary source first; press only where the repo is silent.

## Facts used in the video
| Fact | Source |
|---|---|
| `deepseek-ai/dsh-superagent-prototype`, created 2026-10-31, MIT, "research prototype for reference only, not an official DeepSeek product" | [README](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| A proactive coding agent for one GitHub repository; listens to GitHub and optionally Feishu (team chat); answers in the original conversation, e.g. with a pull request | [README](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| Acts only when asked by an allowed person, or when a team-written rule allows it | [000 Philosophy](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/000-philosophy.md) |
| Speaks only when a person must act or can use a result; stays quiet while it works | [000 Philosophy](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/000-philosophy.md) |
| Main Session (`orchestrator`, preset `dsh-superagent-router`) evaluates events, accepts work as Tickets, dispatches and replies | [001 Domain](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/001-domain.md), [003 Execution](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/003-execution.md) |
| Each Ticket gets its own Executor Session (`worker-<id>`) and its own directory; tickets run concurrently up to a slot limit | [003 Execution](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/003-execution.md) |
| Setup: ask your coding agent to read SETUP.md and set it up with you; runs on DeepSeek Harness | [README](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| Motivation: the team estimates a person can supervise only 3-5 active agent sessions at once | [Let's Data Science](https://letsdatascience.com/news/deepseek-proposes-experimental-super-agent-to-coordinate-mul-cc3cd380), [SCMP](https://www.scmp.com/tech/article/3372884/deepseek-unveils-ai-super-agent-coding-race-openai-anthropic) |

## Left out on purpose
- Speed-up numbers (p95 29.5 -> 15.7 min, reported by [Inside](https://www.inside.com.tw/article/42792-deepseek-super-agent-router-worker-ai-agent)):
  not in the repo, and [one review](https://www.buildmvpfast.com/blog/deepseek-super-agent-router-worker-always-on-coding-agent-2026) says the test task wrote no code. Accurate over exciting.
- Watchdog, speculative execution: in the design article per press, and the README says some article designs are not in the prototype.
- "Better than other coding agents": no source shows it ([Interesting Engineering](https://interestingengineering.com/ai-robotics/china-deepseek-architecture-multi-agent-ai)).

## Predecessor
A single coding-agent session: one person prompts one agent, waits, reviews, prompts again. A pattern, not one product,
so the brief names it generically (`single-session-agent`).

## How this was researched
The Deep-Research skill is built for many items x many fields and asks the owner ~5 questions. With 2 items it was
overkill: we read the primary repo docs directly and used web search for the press claims. Recorded in progress.md.
