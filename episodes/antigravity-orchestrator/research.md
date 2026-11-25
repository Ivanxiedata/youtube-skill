# Research: Orchestrator in Google Antigravity (Gemini 4 Carbon plans, Gemini 4 Hydrogen executes) vs one model for every step

Done 2026-11-25 (daily run, workflow step 1). The maker's own pages first, fetched with `curl -sL` and a browser `-A` user agent, stripped of HTML (lessons L20, L40;
text under `$RUNNER_TEMP/antigravity-orchestrator/src/`). Each stripped text was checked to be the article with `str.find` on one of its sentences (positions noted).
The docs URL was taken from the blog post's own "Read the Orchestrator docs" link (`/docs/models#orchestrator`, lesson L51). One item (before vs now), all from Google, so no Deep-Research fan-out.

Sources:
- [BLOG] https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity (The Antigravity Team, "Gemini 4 Hydrogen and Orchestrator", Nov 12, 2026; found "Orchestrator takes a dynamic, bidirectional approach" in the stripped text)
- [DOCS] https://antigravity.google/docs/models (Google Antigravity docs, "Choose a model", section "Orchestrator"; linked from [BLOG]; found "Orchestrator isn’t a router that classifies your prompt upfront")
- [CL] https://antigravity.google/docs/changelog (Google Antigravity changelog; found "Model launch · November 12, 2026 Gemini 4 Hydrogen")
- [IW] https://www.infoworld.com/article/4248403/google-adds-multi-model-orchestrator-gemini-4-hydrogen-to-antigravity.html (InfoWorld, "Google adds multi-model Orchestrator, Gemini 4 Hydrogen, to Antigravity", Nov 13, 2026; press, context only)
- [AD] https://apidog.com/blog/gemini-4-hydrogen-orchestrator/ (Apidog blog, INEZA Felin-Michel, 13 November 2026; press, context only: no number from it is used)

## Premise check
**Holds.** [BLOG]: "Orchestrator takes a dynamic, bidirectional approach between Carbon and Gemini 4 Hydrogen within the evolution of a single trajectory. For example, Carbon can start in a read-only phase to explore dependencies, resolve ambiguities, and build a concrete plan with explicit re-planning triggers. Hydrogen could then take over to write edits, update packages, and run tests. If Hydrogen hits friction, it would hand back to Carbon to inspect the state, repair the plan, and resume execution."
Narrower than the planner's wording in three places:
1. Carbon was the planner **at launch** (Nov 12, 2026, [BLOG], [CL]). Since Nov 18-20, 2026 the **default** planner on Google AI Pro and Ultra is Gemini 4 Neon; Carbon (and Argon, Claude Opus 5.5) can still be picked as the planner; in Gemini Enterprise Orchestrator only pairs Carbon (High) with Hydrogen (High) ([DOCS], [CL]). The video tells the Carbon + Hydrogen pairing (the maker's own example and the one its numbers are for) and says on screen "Carbon, or the planner you pick".
2. The proof numbers are **one benchmark** (Terminal-Bench 4.1), **on average**: "near-Carbon task success rates while, on average, consuming 24% less quota and completing 19% faster" ([BLOG]). No exact success rate is published.
3. "The fast one got stuck on the hard parts" is not Google's sentence about Hydrogen. Google says **static routers** that send the whole task to "the cheapest model that is good enough" "start breaking down" when later stages need more ([BLOG]). The video says a cheaper model alone "could break down when a step got hard".
Orchestrator is 13 days old (Nov 12, 2026), so "new" is fair; the video does not say "just dropped".

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | What Orchestrator is: one dropdown option pairing Hydrogen with Google's strongest models, including Carbon | "Today, we’re rolling out Gemini 4 Hydrogen inside Google Antigravity alongside a new model dropdown option called Orchestrator, which pairs Hydrogen with our strongest models for long-horizon tasks, including Gemini 4 Carbon, in an optimized balance of quality, efficiency, and latency." | [BLOG] |
| 2 | Before, the cost of one strong model on every step: slower loop, burnt quota | "For everyday feature work and debugging inside a single session, running a frontier reasoning model with multiple parallel agents on every step of every routine task slows down your loop and burns frontier quota." | [BLOG] |
| 3 | Before, the cheap alternative: a static router picks one model for the whole task, and breaks down | "A common industry approach is to use a static “model router” that guesses task difficulty from your first prompt and routes the entire task to the cheapest model that is good enough to complete the task. Unfortunately, these start breaking down as agents become longer running, requiring different levels of complexity at different stages, often discovered as the task evolves." | [BLOG] |
| 4 | The split: Carbon explores and plans (read-only), Hydrogen edits and runs tests, hands back on friction | "For example, Carbon can start in a read-only phase to explore dependencies, resolve ambiguities, and build a concrete plan with explicit re-planning triggers. Hydrogen could then take over to write edits, update packages, and run tests. If Hydrogen hits friction, it would hand back to Carbon to inspect the state, repair the plan, and resume execution." | [BLOG] |
| 5 | The proof: near-Carbon success, 24% less quota, 19% faster, on average, on Terminal-Bench 4.1 | "This allows Orchestrator to reach near-Carbon task success while being faster and more quota-efficient. On Terminal-Bench 4.1, Orchestrator reached near-Carbon task success rates while, on average, consuming 24% less quota and completing 19% faster." | [BLOG] |
| 6 | Roles in the docs: planner plans and reviews; executor searches, edits, builds, tests | "a larger orchestrator (planner) model plans and reviews the work, while a faster executor model carries out searches, file edits, builds, and tests." | [DOCS] |
| 7 | The planner's first phase reads the code and writes the plan | "Each message you send starts with a read-only planning phase in which the planner explores the codebase, resolves ambiguities, and writes a concrete implementation plan, including the conditions that should trigger re-planning." | [DOCS] |
| 8 | The executor does the work | "Once the plan is ready, the executor (such as Gemini 4 Hydrogen ) takes over to search, apply file edits, write code, run builds and tests, and verify the results against the plan." | [DOCS] |
| 9 | Hand-back triggers, e.g. a check that fails twice | "If the executor runs into friction, such as a verification step that fails twice, an interface that behaves differently than expected, or a design choice the plan didn’t settle, it hands control back to the planner, which inspects the conversation state, repairs the plan, and hands execution back to the executor." | [DOCS] |
| 10 | The planner also reviews progress on longer tasks | "On longer tasks, and whenever you send a message while the executor is working, the executor reports its progress to the planner, which checks what was done against the plan and then wraps up the completed task, continues the remaining steps, or updates the plan." | [DOCS] |
| 11 | Automatic, inside one response; not a router | "Orchestrator isn’t a router that classifies your prompt upfront and sends the whole request to a single model. Instead, both models collaborate within the same task and hand control back and forth as the work unfolds" / "These hand-offs happen automatically within a single response, so you don’t need to switch models manually between planning and execution." | [DOCS] |
| 12 | Fewer tokens than the planner alone | "Orchestrator coordinates them automatically, so you get top-tier planning quality while finishing faster and using fewer tokens than running the planner alone." | [DOCS] |
| 13 | One model for every step is still a choice | "To run every step on a single model, select that model directly in the model selector." | [DOCS] |
| 14 | Planner choices today; Neon is the default planner on Pro/Ultra | "Orchestrator Model (planner) Explores the codebase, writes the plan, and reviews progress Gemini 4 Neon (default), Gemini 4 Carbon , Gemini 4 Argon , Claude Opus 5.5 Executor Model Searches, edits files, runs builds and tests Gemini 4 Hydrogen (default), Claude Sonnet 5.5" | [DOCS] |
| 15 | Enterprise: only Carbon + Hydrogen | "In Gemini Enterprise , Orchestrator only runs Gemini 4 Carbon (High) as the planner paired with Gemini 4 Hydrogen (High) as the executor; custom planner and executor selection is available on Google AI Pro and Google AI Ultra only." | [DOCS] |
| 16 | Who gets Orchestrator | "Orchestrator is available in the model selector for Google AI Ultra and Google AI Pro subscribers, letting you pair Gemini 4 Hydrogen execution with frontier planning models. Enterprises can access both in Gemini for business ." / docs: "available on Google AI Ultra , Google AI Pro (paid plans, or trials with eligible premium devices), and Gemini Enterprise" | [BLOG], [DOCS] |
| 17 | Launch date | "Model launch · November 12, 2026 Gemini 4 Hydrogen Gemini 4 Hydrogen brings fast, dependable coding and agentic execution across four reasoning effort levels, alongside Orchestrator for dynamic multi-model planning and execution with Gemini 4 Carbon." | [CL] |
| 18 | Neon became the default planner later (Nov 18-20) | "Gemini 4 Neon is now available on Google AI Ultra, Google AI Pro, and Gemini Enterprise, and it's the default model if you haven't chosen one, with four thinking levels and Orchestrator (Neon) for planning with Gemini 4 Neon and implementing with Gemini 4 Hydrogen." (changelog, November 18, 2026) | [CL] |
| 19 | When Google says to use Orchestrator vs one model | "Orchestrator (recommended default) : Most day-to-day development, such as feature work, bug fixes, refactoring, and multi-file debugging" / "Gemini 4 Neon, Gemini 4 Carbon, or Gemini 4 Argon : Work where every intermediate step needs maximum reasoning depth on a single model" | [DOCS] |
| 20 | Hydrogen alone, standalone numbers (context, not in the video) | "Hydrogen also works as a standalone model for everyday coding and agentic work, scoring 51 on the Artificial Analysis Intelligence Index (surpassing Argon’s 50, and reaching 54 at its highest setting) and 57% on Terminal-Bench 4.1 (more than tripiling 3.8 Flash’s 18.2%)." | [BLOG] |
| 21 | Hydrogen is "lighter" (press wording) | "combines a planning model, such as Gemini 4 Carbon or Argon, with Hydrogen, which the hyperscaler describes as a lighter execution model." | [IW] |
| 22 | Press caveat: no published per-step logs of which model did what | "Jena pointed out that Antigravity ’s documentation does not currently describe per-step logs identifying which model performed each action." | [IW] |

## Before (the predecessor, from the same sources)
You ran one model for the whole task (row 13): either a frontier model on every step, which "slows down your loop and burns frontier quota" (row 2),
or a router that sends "the entire task to the cheapest model that is good enough", which "start[s] breaking down" when later stages need more (row 3).
The scene "you picked one model for all ten steps" is **ours** (the counted example).

## The counted example (ours, invented)
**One coding task, 10 steps** (our example; Google gives no step counts).
- Before: you pick Carbon for the whole task: Carbon does all **10** steps (rows 2, 13). The cheap alternative, one cheaper model for the whole task, can break down on a hard step (row 3).
- Now (Orchestrator): Carbon reads the code and writes the plan (step 1, rows 4, 7); Hydrogen makes the edits and runs the tests (rows 4, 8); a test fails twice, so Hydrogen hands back (row 9);
  Carbon repairs the plan (1 more step); Hydrogen carries on. Carbon: **2** steps; Hydrogen: **8**.
- Meter: **"STEPS ON CARBON · OUR EXAMPLE"**: 10 before, 2 now (same unit both sides, lesson L34).
- Steps are not quota: Google gives no quota per step. Its number is for the whole Orchestrator run, on average, on Terminal-Bench 4.1: "24% less quota" (row 5), not 80%. The proof shot says the steps are our example and the 24% is for the whole run (`claims.md` row 26).

## Narrowing list (every line that states it carries its condition, lesson L26)
1. **The planner:** Carbon at launch and in Gemini Enterprise; on Pro/Ultra since Nov 18-20, 2026 the default planner is Gemini 4 Neon, and Carbon is one choice (rows 14, 15, 18). Say "Carbon" as the maker's example and show "PLANNER: CARBON HERE · YOU CAN PICK ANOTHER".
2. **"Almost matches":** "near-Carbon task success rates" on Terminal-Bench 4.1, on average (row 5). Say "close to Carbon's success", "on Google's test"; never "the same results", never "matches" without "almost".
3. **24% / 19%:** "on average", "24% less quota", "19% faster", on Terminal-Bench 4.1 (row 5). Say "about", "on average", "on Google's test". Compared with Carbon alone (rows 5, 12: "than running the planner alone").
4. **Hand-back triggers:** friction "such as a verification step that fails twice", an interface that behaves unexpectedly, or a design choice the plan didn't settle (row 9). "A test fails twice" is one example of a check failing twice; on screen "FOR EXAMPLE".
5. **The planner's jobs:** plans (read-only), repairs the plan, and also reviews progress on longer tasks (rows 7, 9, 10). "Plans and fixes" is the short form; the review is in the description.
6. **Before, the cheap model:** Google's sentence is about routers sending the whole task to the cheapest good-enough model (row 3); say "could break down", never "always fails".
7. **Who gets it:** Google AI Pro (paid, or trials with eligible premium devices), Google AI Ultra, Gemini Enterprise (row 16); Hydrogen alone is on every plan. In the description.
8. **"One of Google's strongest models":** "our strongest models for long-horizon tasks, including Gemini 4 Carbon" (row 1). Never "the strongest".
9. **"Faster":** Hydrogen is the "faster executor model" (row 6); "cheaper" is not Google's word for Hydrogen per call, so the video says "faster", and "less quota" only with the 24% condition.

## What was left out and why
- Hydrogen's standalone scores (51 on the Intelligence Index, 57% on Terminal-Bench 4.1) and thinking levels: they answer none of the lesson's 3 questions.
- The Antigravity SDK triage demo and /swarm: other features.
- Gemini 4 Neon details (512K context): a different model; only its role as today's default planner is noted (narrowing 1).
- The press's governance worries (row 22): a fair caveat, but not the lesson; in the description's long version.

## Where the analogy stops
Story: building a wall. An architect (Carbon) draws the plan; a fast builder (Hydrogen) lays the bricks and checks the wall; if a check fails twice, the builder calls the architect back to redraw.
- Real "steps" are not equal bricks: Google gives no per-step quota; its 24% is for the whole Orchestrator run, on average, on Terminal-Bench 4.1 (row 5), so 2 of 10 steps is not 80% less quota.
- The architect also reviews the builder's progress on longer jobs (row 10), not only when called.
- Both are AI models in one conversation; the hand-offs are automatic inside one response (row 11): you don't call anyone.
- Hydrogen is a capable model on its own (row 20), not an unskilled labourer.
