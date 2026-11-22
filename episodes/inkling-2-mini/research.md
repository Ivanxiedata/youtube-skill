# Research: Inkling 2 Mini (2026-11-20) vs an ordinary one-pass transformer

Done 2026-11-22 (daily run, workflow step 1). The maker's own pages only: Thinking Machines Lab's launch post ("Introducing Inkling 2 Mini"),
its model card and the Hugging Face model page. Two items (before, new), so the pages were read directly instead of the Deep-Research fan-out,
as earlier episodes did. No press needed: every number in the video is on the maker's pages.

Sources:
- [TM post] https://thinkingmachines.ai/news/inkling-2-mini/ (Thinking Machines Lab, Nov 20, 2026, no author listed)
- [TM card] https://thinkingmachines.ai/model-card/inkling-2-mini/
- [HF] https://huggingface.co/thinkingmachines/Inkling-2-Mini

## Premise check
**Holds.** The model card: "The middle 12 layers run three times with shared weights, giving 48 layer applications per token from 24 layers of weights" [TM card, HF].
The post: "Looping allows the model to reason longer without writing its reasoning down" and lets it "apply more reasoning and reach the right answer with fewer tokens" [TM post].
The "before" is in the same post: "the standard non-looped transformer architecture, in which each token passes through a fixed stack of layers once", so
"reasoning that needs more steps has to be carried out in generated text, where it can be read" [TM post]. Its comparison table lists Gemma 4 31B and Qwen3.8-27B (with Muse Glimmer and Nemotron 3.5 Super VL).
Open weights, Apache 2.0 [TM card, HF]; about 20 GB; Apple silicon with 32 GB or more (MacBooks, Mac minis, Studios) [TM card, TM post].

Narrowings, so the video does not overclaim:
- It still writes reasoning: "Setting reasoning effort to its minimum does not fully disable reasoning" [TM card]. The video says "it can write less", never "without writing".
- The token numbers (3,703 at 1 pass -> 1,731 at 3 passes, GPQA Diamond) come from **TML-d24-varloop-research**, a research variant released alongside it, trained for one to five passes,
  not the released model, which "only supports a fixed number of looping passes" [TM post]. The video says "in the maker's test on a research twin".
- Gemma 4 31B and Qwen3.8-27B are called "ordinary" (one pass per layer) because they are the standard non-looped models in the maker's table; the maker describes the standard architecture, not those two models' internals.
  The video says "like Gemma or Qwen" and makes no benchmark claim about them.

## Numbers and dates in the video
| Said or shown | What it is | Source |
|---|---|---|
| "2" in "Inkling 2 Mini" | the product's name | [TM post] |
| "12 layers", "middle 12" | "The middle 12 layers run three times with shared weights" (layers 7-18: blocks 2 and 3 of four blocks of six) | [TM card], [HF], [TM post] ("24 layers in four blocks of six. The two middle blocks run three times"; "looping the middle layers (7–18)") |
| "3 times", "3 passes" | the same | [TM card], [TM post] |
| "24 layers" | "A 24-layer decoder-only transformer" | [TM card], [HF] |
| "48 layer steps" | "48 layer applications per token from 24 layers of weights" | [TM card], [HF], [TM post] |
| "same weights" / "no bigger brain" / "no new weights" | "shared weights"; looping "adds serial computation inside the model without adding parameters" | [TM card], [TM post] |
| "November 20" / "NOV 20, 2026" | date of release | [TM card], [HF], [TM post] |
| "less than half the reasoning" / "3,703" / "1,731" | research twin, GPQA Diamond, mean reasoning tokens on questions right at all pass counts: 3,703 (1 pass), 1,731 (3 passes); 1,731 / 3,703 = 0.47 | [TM post] |
| "about 20 gigabytes" / "≈20 GB" | "a single checkpoint of about 20GB, in mixed NVFP4 and MXFP8 precisions"; "total memory footprint ... ~20GB" | [TM card], [TM post] |
| "32 gig Mac" / "MAC · 32 GB" | "Apple silicon devices with 32GB or more memory (MacBooks, Mac minis and Studios)"; Ollama on "any Mac ... with at least 32GB RAM" | [TM card], [TM post] |
| "APACHE 2.0" (on screen) | license | [TM card], [HF] |
| "GEMMA 4 31B", "QWEN3.8-27B" (on screen) | two of the models in the maker's comparison table | [TM post] |
| "48 vs 24 steps per token" (on screen) | 48 layer applications from 24 layers; a one-pass stack of 24 applies 24 | [TM card] |
| "in 60 seconds" | the video's own length | measured in step 4 |

## Status (said in the video)
**Released, open weights.** November 20, 2026, Apache 2.0, on Hugging Face and Tinker; two days old on 2026-11-22. "Just dropped" would be allowed (a month or less); the hook does not use it, the date is said in the body.

## Before: an ordinary (one-pass) transformer
| Fact | Source |
|---|---|
| "the standard non-looped transformer architecture, in which each token passes through a fixed stack of layers once" | [TM post] |
| "reasoning that needs more steps has to be carried out in generated text, where it can be read" | [TM post] |
| Comparison table: Gemma 4 31B, Muse Glimmer, Qwen3.8-27B, Nemotron 3.5 Super VL | [TM post], [TM card], [HF] |
| More written reasoning means more tokens to generate, so more waiting (one token at a time) | general; the maker's "fewer tokens" claim is the contrast [TM post] |

## New: Inkling 2 Mini
| Fact | Source |
|---|---|
| 24-layer decoder-only transformer, sparse Mixture-of-Experts, 8 of 128 experts per token per layer | [TM card], [HF] |
| "The middle 12 layers run three times with shared weights, giving 48 layer applications per token from 24 layers of weights" | [TM card], [HF] |
| "24 layers in four blocks of six. The two middle blocks run three times, while the first and last blocks each run once" | [TM post] |
| Looping the middle layers (7–18) gave bigger gains than looping the last layers (13–24) | [TM post] |
| "Looping allows the model to reason longer without writing its reasoning down, which matters for monitoring" | [TM post] |
| Lets the model "apply more reasoning and reach the right answer with fewer tokens" | [TM post] |
| Research twin TML-d24-varloop-research (1-5 passes), GPQA Diamond mean reasoning tokens 3,703 (1 pass), 1,731 (3), 1,661 (5); "diminishing returns after 3 passes" | [TM post] |
| An unpruned non-looped model "required 140% more inference compute to match the looped version's loss on 512k-token agentic traces" | [TM post] (not said: a training-loss comparison, too technical for 60 s) |
| 26.4B total parameters, 3.4B active; "5.4B effective active parameters per token" with looping | [TM card], [HF] (not said: the post also says "5.4B activated", confusing) |
| Open weights, Apache 2.0; on Hugging Face and Tinker | [TM card], [HF], [TM post] |
| ~20 GB checkpoint (NVFP4 + MXFP8); Apple silicon with 32 GB or more; DGX Spark; GGUF via Unsloth and llama.cpp | [TM card], [TM post] |
| Context up to 1M tokens; text and image in, text out | [TM card] |
| Limitations: knowledge "is mostly a function of total parameter count" (looping doesn't add it); "more likely than larger models to state incorrect information with confidence"; "not the strongest small model for multi-turn chat"; minimum reasoning effort "does not fully disable reasoning"; may take destructive actions without confirmation; local runtime support for looped models is new | [TM post], [TM card], [HF] |

## The story: one hard exam question (everyday life)
Everyone has sat a test and been told to "show your working". The question is where the thinking happens: on the paper, or in your head.
| Story | Product | Holds because |
|---|---|---|
| You (the mascot, an examiner in a mortarboard with a stopwatch) wait for an answer | the user waits for the model's reply | reasoning tokens are generated one at a time |
| The old robot (grey-blue screen head) writes its working out, line after line, on a long scroll | a one-pass model writes reasoning tokens to think longer | [TM post] "has to be carried out in generated text" |
| Its screen head shows a stack of 24 layers; a light runs up once per word it writes | each token passes through the layers once | [TM post] |
| The new robot (teal screen head) works it over in its head: the middle two of four blocks light up three times, a loop arrow, ×3 | middle 12 layers, three passes, shared weights | [TM card] |
| Same head size, no bigger brain | no added parameters (24 stored layers, 48 steps) | [TM card], [TM post] |
| It writes a shorter answer | fewer reasoning tokens (research twin: less than half at 3 passes) | [TM post] |
| It still writes a few lines | it is still a reasoning model: minimum effort "does not fully disable reasoning" | [TM card] |
| A FACTS book that loops don't make thicker | knowledge depends on total parameters, not loops | [TM post] |

Where the analogy stops (not said in the video):
- The new model still writes reasoning (it is a reasoning model); it writes less, not none.
- Looping is per token, not per question: every token goes through the middle blocks three times. The exam shows the question; the robot's screen shows the per-token loop.
- The token numbers are from a research twin on one benchmark (GPQA Diamond), counted on questions answered correctly at every pass count; the post gives no accuracy figures.
- "Thinking in its head" is a picture: the model computes more per token; it is not a person thinking.
- Monitoring: the post says reasoning without writing it down "matters for monitoring", but finds "at this scale we do not see a meaningful reduction in the monitorability of their reasoning"; the chain of thought "grew shorter with more loops but stayed legible throughout". So the video makes no monitoring claim (the first draft's "unwritten thoughts are harder to check" was a must-fix from the judge and was removed).

## Left out on purpose
- Benchmark scores (SWEBench, DeepSWE, BrowseComp ...): the video is about how it thinks, not which model wins (voice.md: never say one tool beats another). The description points to the maker's table.
- Mixture-of-Experts (8 of 128 experts), parameter counts (26.4B / 3.4B / 5.4B), NVFP4 / MXFP8, 1M context, images: a second idea in 60 s, and the active-parameter figures differ between pages.
- The 140% inference-compute comparison: training-loss language, hard to say plainly.
- Speed: the post gives only a theoretical ceiling chart, no measured tokens per second, so the video makes no speed claim.
