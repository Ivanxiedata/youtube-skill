# Research: OpenAI dots (2026-09-29) vs a ChatGPT chat and 2025 ChatGPT agent mode

Done 2026-11-22 (daily run, workflow step 1). The maker's own pages first: OpenAI's launch post, its DevDay 2026 recap and the 2025 ChatGPT agent post.
TechCrunch only for what OpenAI does not say (the look, the "already possible" caveat). Two items (before, new), so the pages were read directly
instead of the Deep-Research fan-out, as earlier episodes did.

## Premise check
**Holds.** OpenAI's own post says dots are "always-on agents", "each dot works on its own cloud computer", "can work towards your goals 24/7",
"when you aren't actively working with it, your dot looks for ways to help in the background. We call this 'proactive research'", that the background
tools are "restricted to be read-only", that dots "learn from feedback over time", and that auto-review and Custom Rules can require approval.
One correction to the brief's "before": the 2025 agent mode ran on its own virtual computer and could notify your phone when a task was done,
so the video does **not** say the old agent stopped when you closed the window. It says what the sources support: you asked, it did that one task, then it waited for the next ask.

## Numbers and dates in the video
| Said or shown | What it is | Source |
|---|---|---|
| "September 29, 2026" / "DevDay" | launch day of dots, at DevDay 2026 | [OpenAI: Introducing dots](https://openai.com/index/introducing-dots/) (dated Sep 29, 2026, "rolling out today in ChatGPT"); [DevDay 2026 recap](https://openai.com/index/devday-2026-recap/) ("September 29, 2026") |
| "2025" (BEFORE side: ChatGPT agent) | ChatGPT agent mode launched July 17, 2025 | [OpenAI: Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) |
| "24/7" | a dot "can work towards your goals 24/7" | [Introducing dots](https://openai.com/index/introducing-dots/) |
| "in 60 seconds" | the video's own length | measured in step 4 (at most 60 s by the stickman audit) |
| "Pro, Business Premium" (description only) | plans at launch | [Introducing dots](https://openai.com/index/introducing-dots/), [DevDay recap](https://openai.com/index/devday-2026-recap/) |
| the forgotten invoice | OpenAI's own example from an early tester | [Introducing dots](https://openai.com/index/introducing-dots/): "an early tester's dot noticed he'd forgotten to invoice a publication, prepared the invoice, and sent it after his approval" |

## Status (said in the video)
**Shipped, rolling out.** "Rolling out today in ChatGPT" on Sep 29, 2026, to Pro and Business Premium users in eligible markets; Enterprise, Edu and Healthcare as a beta that a workspace admin turns on (off by default).
About eight weeks old on 2026-11-22, so not "just dropped" (brand rule: a month or less).

## Before: a ChatGPT chat, and ChatGPT agent mode (2025)
| Fact | Source |
|---|---|
| Agent mode: "ChatGPT can now do work for you using its own computer"; "carries out these tasks using its own virtual computer" | [Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) |
| You start it on request: pick agent mode in the composer and "simply describe your desired task" | [Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) |
| Completed tasks can be scheduled "to recur automatically, such as generating a weekly metrics report every Monday morning" (so "one task per ask" means: it only did work you asked or scheduled; it never picked its own) | [Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) |
| It notifies you on the phone "when it's done with your task" (one task per request) | [Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) |
| "ChatGPT requests permission before taking actions of consequence" | [Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) |
| A plain chat answers the prompt you type (common knowledge of the product; no number claimed) | [Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) (agent mode is the "do work for you" step beyond the chat) |

## New: dots
| Fact | Source |
|---|---|
| "Dots are remarkably capable, always-on agents built to handle everything" | [Introducing dots](https://openai.com/index/introducing-dots/), [DevDay recap](https://openai.com/index/devday-2026-recap/) |
| "Each dot works on its own cloud computer"; they work with "their own cloud computer, their own browser, and the apps you've connected" | [Introducing dots](https://openai.com/index/introducing-dots/) |
| A dot "can work towards your goals 24/7"; "with a dot that knows your goals and standards, you can take on more without directing every step" | [Introducing dots](https://openai.com/index/introducing-dots/) |
| "When you aren't actively working with it, your dot looks for ways to help in the background. We call this 'proactive research'" | [Introducing dots](https://openai.com/index/introducing-dots/) |
| Proactive research uses connected apps through tools "restricted to be read-only": they can't send messages, change app content or control your browser or computer | [Introducing dots](https://openai.com/index/introducing-dots/) |
| Dots "can also message you with progress, questions, or decisions that need you" (also in Slack or Teams) | [Introducing dots](https://openai.com/index/introducing-dots/) |
| Dots "learn from feedback over time"; "the more your dot learns your preferences ... and what good looks like to you" | [Introducing dots](https://openai.com/index/introducing-dots/) |
| Auto-review checks actions that could affect your accounts or share information; Custom Rules "let you allow specific actions, require approval, or block them"; "certain sensitive tasks, such as changing a password, always stay with you" | [Introducing dots](https://openai.com/index/introducing-dots/) |
| "Dots can still make mistakes, so always review consequential work" | [Introducing dots](https://openai.com/index/introducing-dots/) |
| Powered by GPT-6 Astra (GPT-6.1 Terra added Nov 3, 2026) | [Introducing dots](https://openai.com/index/introducing-dots/) (not said in the video) |
| The look: little floating cartoon dots; "much of this was already possible" through Codex and agent harnesses, dots package it with a focus on independent action | [TechCrunch](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/) (press, background only) |

## The story: the night shift (everyday life)
Everyone knows a shop that closes when the owner goes home, and the idea of someone working the night shift for you.
| Story | Product | Holds because |
|---|---|---|
| You ring the bell at the counter; the clerk does one job; then waits for the next ring | a chat / agent mode: one task per request | agent post: "describe your desired task"; notified "when it's done with your task" |
| The night-shift helper with its own desk and its own lamp | a dot on its own cloud computer | "each dot works on its own cloud computer" |
| A list of your goals pinned on the wall | goals the dot works toward | "work towards your goals 24/7" |
| It reads the mail and the ledger through a glass window: it can look, not send | proactive research, read-only | "restricted to be read-only ... can't send messages" |
| A sticky note in the morning: "You forgot an invoice. Ready. Send?" and you tap yes | message you with decisions that need you; sent after approval | OpenAI's invoice example |
| You say "shorter notes"; the next note is shorter | learns from feedback | "learn from feedback over time" |
| The key to the safe stays in your pocket | password changes always stay with you; rules can require approval | auto-review, Custom Rules |
| The helper is a floating dot with a face (visibly AI) | dots look like dots | TechCrunch; brand casting rule |

Where the analogy stops (not said in the video):
- The 2025 agent could repeat a scheduled task (a weekly report). The bell story's "one ring, one task" leaves that out; the description says it. What is new is that a dot picks its own work toward your goals.
- Read-only applies to background proactive research. When you ask, a dot can act (send, edit, use a browser), within auto-review and your Custom Rules.
- "Asks before it acts" is not every action: Custom Rules may allow some actions without approval; auto-review checks actions that affect accounts or share information; password changes always stay with you.
- The 2025 agent mode also ran on its own computer and kept going until the task was done; the difference is that it worked on one task you asked for, not on standing goals it pursues on its own.
- A dot can also use your laptop if you allow it; the video shows only its own cloud computer.
- "Learns from feedback" is OpenAI's claim; how it learns is not described.

## Left out on purpose
- Specialist dots, ChatGPT Space, Activity View, Microsoft Agent 365, 4,000+ apps, usage limits and model names: real, but a second idea in 60 s.
- The comparison with Meta's agent in TechCrunch: press opinion, and voice.md forbids "one tool beats another".
- Prices: OpenAI gives none beyond "your first dot is included at no extra cost".
