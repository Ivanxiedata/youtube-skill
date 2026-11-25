# Research: Claude Fable 5.2 and Mythos 5.2 vs the held-back Mythos Preview

Done 2026-11-25 (daily run, workflow step 1). Only the maker's own pages, fetched with `curl -sL` and a browser `-A` user agent, stripped of HTML (lessons L20, L40;
text under `$RUNNER_TEMP/claude-fable-mythos/src/`). Each stripped text was checked to be the article with `str.find` on one of its sentences (positions noted per source).
One item (before vs now), all from Anthropic, so no Deep-Research fan-out.

Sources:
- [A52] https://www.anthropic.com/claude-fable-and-mythos-5-2 (Anthropic, "Introducing Claude Fable 5.2 and Claude Mythos 5.2", November 9, 2026; found "Claude Fable and Claude Mythos are the same underlying model" at 1080)
- [A5] https://anthropic.com/news/claude-fable-5-mythos-5 (Anthropic, "Claude Fable 5 and Claude Mythos 5", published Jun 9, 2026; found "safeguards lifted" at 2360)
- [SW] https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-models (Claude Help Center, "Why Claude switched models in your conversation with Fable models"; found "on every user request" at 2437)
- [CM] https://support.claude.com/en/articles/15425695-covered-models (Claude Help Center, "Covered Models"; found "Claude Mythos 5.2" in the table)
- [GW] https://www.anthropic.com/project/glasswing (Anthropic, "Project Glasswing"; found "Claude Mythos Preview" in the intro)

## Premise check
**Holds.** [A52]: "Claude Fable and Claude Mythos are the same underlying model. Fable has strong cybersecurity and biology safeguards to guard against misuse, which allows us to make it available to all users."
[A52]: "When a query is blocked, users will instead receive a response from Opus 4.8 for cybersecurity and Opus 5 for biology." and "we observed about 55% fewer blocks with Fable 5.2 compared with Fable 5.1".
Narrower than the planner's wording in two places: the 55% is "fewer blocks" (all blocks, in early testing), not "fewer unnecessary blocks" (the page says the safeguards "produce fewer unnecessary blocks" without a number);
and the design (same model, classifiers, fallback to Opus) started with Fable 5 on June 9, 2026, not with 5.2. Fable 5.2 is from November 9, 2026, 16 days before this episode, so "just dropped" is allowed.

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | Fable and Mythos are the same model; Fable is for all users | "Claude Fable and Claude Mythos are the same underlying model. Fable has strong cybersecurity and biology safeguards to guard against misuse, which allows us to make it available to all users." | [A52] |
| 2 | Mythos 5.2 is for vetted organizations, by application | "Organizations pursuing beneficial applications in cybersecurity or biomedical research can apply for access to Mythos through our recently expanded Life Sciences and Cyber Verification Programs." / "Claude Mythos 5.2 is available to vetted organizations that work in these dual-use areas." | [A52] |
| 3 | Mythos 5.2: limited access; Fable 5.2: generally available | table: "Claude Mythos 5.2 / November 9, 2026 / Limited availability / Limited access (approved partners)"; "Claude Fable 5.2 / November 9, 2026 / Generally available" | [CM] |
| 4 | What the safeguards are: classifiers, separate AI systems | "Fable 5 comes with a new set of classifiers : separate AI systems that detect potential misuse, including jailbreak attempts, and prevent the main model (in this case, Fable 5) from responding." | [A5] |
| 5 | They check every request, and what the model reads | "Claude Fable 5.2, Fable 5.1, and Fable 5 run automated safety checks, or classifiers, on every user request." / "The checks also review everything the model reads, not just your latest message—including memory, content from connectors, web search results, and files, so a block can be triggered by content you didn't type." | [SW] |
| 6 | Fable 5.2's classifiers: high-risk cyber, most research biology | "Fable 5.2 comes with safety classifiers that block high-risk cyber activities, including penetration testing, exploit generation, and binary-based vulnerability, as well as most tasks in research biology." | [A52] |
| 7 | A blocked query gets an older Opus model's answer | "When a query is blocked, users will instead receive a response from Opus 4.8 for cybersecurity and Opus 5 for biology." | [A52] |
| 8 | Fallback areas and models, and a third area | "When requests are blocked, they may fall back to a non-Mythos model, currently Opus 5 for biology, chemistry, and life sciences requests, and for frontier LLM development requests, and Opus 4.8 for offensive cybersecurity technique requests." | [SW] |
| 9 | Offensive cyber example: building exploits | "Offensive cybersecurity techniques, such as building exploits, malware, or attack tooling." | [SW] |
| 10 | Most blocked queries fall back; some are blocked outright | "Most user queries blocked by these safeguards on Fable models may instead receive a response from a less capable model (i.e., "fallback"), which can respond to these types of queries. Some requests, including those that try to extract the model's reasoning, are blocked with no fallback." | [SW] |
| 11 | The point of the block: Mythos-level capability | "The safeguards are designed to block access to Mythos-level capabilities." | [SW] |
| 12 | Why block: misuse could cause serious damage | "Without safeguards, Fable 5’s capabilities in areas like cybersecurity could be misused to cause serious damage." | [A5] |
| 13 | You are told, and the answer is labelled | "Automatic model switching is active by default in Claude apps and must be configured in the API. When your request falls back, Claude re-runs your blocked Fable request on an Opus model in the same conversation. You’ll see a notice explaining that the model switched, and the response will be labeled with the model that answered." | [SW] |
| 14 | You can switch back | "After the switch, the model picker stays on Opus for the rest of the conversation. You can switch back to Fable models anytime from the model picker." | [SW] |
| 15 | Fallback beats a refusal | "Opus 4.8 is a highly capable model in its own right: a response that falls back to Opus is a far better experience than an outright refusal from Fable." | [A5] |
| 16 | The 5.2 number: about 55% fewer blocks than 5.1 | "Since the release of Claude Fable 5.1, we have continued to reduce false positives for our safety classifiers. Based on early testing across claude.ai, Claude Code, and Cowork, we observed about 55% fewer blocks with Fable 5.2 compared with Fable 5.1—about 60% fewer in cybersecurity and 40% fewer in biology." | [A52] |
| 17 | Just as robust, fewer unnecessary blocks | "Fable 5.2’s cyber and biology safeguards are as robust as those of Fable 5.1 but produce fewer unnecessary blocks" | [A52] |
| 18 | The checker is refined after launch | "we’ve deliberately tuned the safeguards to be cautious, and they are still stricter than would be ideal—for example, sometimes benign requests will trigger our classifiers. [...] our aim is to reduce false positives as we update and refine the safeguards after launch." | [A5] |
| 19 | Before: Mythos Preview only for a limited group | "In April we began Project Glasswing , releasing the first Mythos-class model (Claude Mythos Preview) to only a limited group of cyber defenders and critical software infrastructure providers." | [A5] |
| 20 | Before: the public's models were all less capable | "Today we’re launching Claude Fable 5 : a Mythos-class 1 model that we’ve made safe for general use. Fable 5’s capabilities exceed those of any model we’ve ever made generally available." | [A5] |
| 21 | Fable 5 started the design (June 9, 2026) | "For a small group of cyberdefenders and infrastructure providers, we’re also launching Claude Mythos 5 . It’s the same underlying model as Fable 5, but with the safeguards lifted in some areas." (published Jun 9, 2026) | [A5] |
| 22 | Glasswing partners (context) | "The initiative brings together Amazon Web Services, Anthropic, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, the Linux Foundation, Microsoft, NVIDIA, and Palo Alto Networks as launch partners." / "We've also extended access to over 40 additional organizations that build or maintain critical software infrastructure." | [GW] |
| 23 | Fable 5.2 availability | "Claude Fable 5.2 is available today on all platforms, including Amazon Web Services, Google Cloud, and Microsoft Azure." | [A52] |
| 24 | Fable 5 at launch: fallback rare | "Our early data shows that more than 95% of Fable sessions involve no fallback at all—for those sessions, Fable 5’s performance is effectively the same as that of Mythos 5." (Fable 5, June; no 5.2 figure given) | [A5] |
| 25 | Switching can be turned off | "With automatic model switching off, a blocked request pauses the conversation instead of switching models." | [SW] |
| 26 | Before: Mythos-level capability waited for strong enough safeguards | "When we did so, we stated that we hoped to eventually release Mythos-level capabilities to all our users , so long as we had developed new safeguards that were strong enough to reliably prevent misuse." | [A5] |
| 27 | Mythos: the same model with cyber safeguards lifted | "Beginning today, all users who currently have access to Claude Mythos Preview (for example, our cybersecurity partners in Project Glasswing) will be able to upgrade to Claude Mythos 5—the same model as Claude Fable 5 but with cyber safeguards lifted." (Mythos 5, June; the 5.2 page says only that Mythos 5.2 is for vetted organizations) | [A5] |

## Before (the predecessor, from the same sources)
From April 2026 (Project Glasswing), the strongest model, Claude Mythos Preview, went "to only a limited group of cyber defenders and critical software infrastructure providers" (row 19);
everyone else used models less capable than Fable 5 (row 20: Fable 5's capabilities "exceed those of any model we’ve ever made generally available").
The scene "your 10 requests all went to a weaker model" is **ours** (the counted example); Anthropic names no model as "the public's model in April".

## The counted example (ours, invented)
**Your 10 requests** to Claude in a day; **1 of them asks for help building an exploit** (offensive cyber, row 9).
- Before (April, Mythos Preview held back): all **10** answered by a weaker model (rows 19, 20).
- Now (Fable 5.2, in Claude apps, by default): a separate checker reads each request (rows 4, 5); **9** are answered by Fable 5.2, the same model as Mythos 5.2 (row 1);
  the **1** exploit request is flagged and answered by an older model, Opus 4.8, with a notice (rows 7, 8, 13).
- Meter: **"YOUR REQUESTS ON A WEAKER MODEL · OUR EXAMPLE"**: 10 before, 1 now (same unit both sides, lesson L34).
The split 9 / 1 is ours, not a rate: Anthropic gives no per-request fallback rate for 5.2 (row 24 is Fable 5's sessions, in June).

## Narrowing list (every line that states it carries its condition, lesson L26)
1. **Same model:** "the same underlying model" (row 1); Mythos has the cyber safeguards lifted (row 27, said of Mythos 5), Fable keeps them. Never "Fable = Mythos" without the safeguards.
2. **Mythos 5.2:** only for vetted organizations that apply (Cyber or Life Sciences Verification Programs; "approved partners") (rows 2, 3). Say "restricted" or "for vetted groups".
3. **What gets flagged:** mainly high-risk cyber (exploits) and most research biology (row 6); the help page adds chemistry, life sciences and some frontier LLM development (row 8). Say "risky cyber or biology requests" as the main areas, never "only cyber and biology".
4. **What happens to a flagged request:** "most" blocked queries "may" fall back to a less capable model (row 10); some (reasoning extraction) are blocked outright. Which model: "currently" Opus 4.8 (offensive cyber), Opus 5 (biology and the rest) (row 8). Say "an older Opus model" and "usually"/"most".
5. **Switching and the notice:** automatic switching is on "by default in Claude apps" (must be configured in the API); can be turned off (rows 13, 25). Say "in Claude apps" or "by default".
6. **The 55%:** "about 55% fewer blocks" than Fable 5.1, "based on early testing across claude.ai, Claude Code, and Cowork" (row 16). It counts blocks, not "unnecessary" blocks; say "about", "in early tests", "than 5.1". The script says "blocked about 55% fewer requests" (one word for one thing, gate round 1).
7. **As robust:** "as robust as those of Fable 5.1" (row 17): say "just as strong as 5.1's", never "safer".
8. **Before:** "a limited group of cyber defenders and critical software infrastructure providers" (row 19), from April 2026; "less capable" is Anthropic's (rows 10, 20); "weaker" is the plain word for it.
9. **Since when:** the same-model-plus-checker design started with Fable 5 (June 9, 2026, row 21); 5.2 (November 9, 2026) is the newest version. Never say 5.2 invented it.
11. **Before, "no checker strong enough":** Anthropic held Mythos-level capability back until it had safeguards "strong enough to reliably prevent misuse" (row 26); say "without a checker strong enough", never "with no safety at all".
10. **The checker reads more than your message** (row 5): memory, connectors, search results, files. Left out of the voice (budget), in the description.

## What was left out and why
- Benchmarks, price ($8/$40 per million tokens), fast mode, the 30% speed-up, the science demos (operating system, Fermat proof): they don't answer the lesson's 3 questions.
- Covered Models data retention (30 days minimum): a policy, not the lesson; in the description only if room.
- Distillation and reasoning-extraction blocks: they get no fallback; covered by "most" (narrowing 4).
- Fable 5's ">95% of sessions with no fallback": a June number for another version; not used in the video.
- The June 12 suspension and July 1 redeployment of Fable 5: history, not the lesson.

## Where the analogy stops
Story: a restaurant with one star chef. Before, the star chef cooked only for a small private room (Glasswing); the dining room got a different cook. Now the same star chef cooks for the dining room,
and a ticket checker at the pass reads each order; a flagged order goes to an older cook, and the waiter tells you.
- The "older cook" is a different, less capable model (Opus 4.8 or Opus 5), not a junior version of the same chef.
- The real checker reads more than the order ticket: memory, files, search results (row 5), so a block can come from content you didn't type.
- Some flagged orders are refused outright, with no older cook (row 10).
- The private room is real (vetted organizations, rows 2, 3), but it is the same chef with fewer rules, not a better chef.
