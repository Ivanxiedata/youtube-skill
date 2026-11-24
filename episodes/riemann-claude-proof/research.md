# Research: an AI-assisted proof of the Riemann hypothesis, checked by machine

Done 2026-11-24 (workflow step 1), for the owner's A/B test of a new delivery style (`style.md`).
Pages fetched with `curl -sL` and stripped of HTML (lesson L20). News, not a product: the "maker's own docs" are the people who did and checked the work
(the Lean FRO and Mathlib statement, the Waterloo verification page), plus two news reports with on-record quotes.

Sources:
- [Lean] https://leanprover-community.github.io/blog/posts/riemann-hypothesis/ (Lean FRO and Mathlib Initiative, "Lean verification of the Riemann Hypothesis", 2026-11-21)
- [Waterloo] https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/ (Michael Rubinstein, "Alpöge/Claude proof of the Generalized Riemann Hypothesis")
- [Nature] https://www.nature.com/articles/d41586-026-03812-7 (Nature news, 2026-11-20, updated 2026-11-23)
- [IBM] https://www.ibm.com/think/news/anthropic-claude-riemann-hypothesis-math-proof (IBM Think news)

## Premise check
**Holds, with one limit.** [Nature]: "“I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis,” Alpöge wrote".
[Lean]: "We hereby certify that both the statement and the proof of the Riemann Hypothesis are correct."
The limit: no human-readable proof yet, and mathematicians still have to understand it ([IBM] Lamzouri, row 11). The video says so out loud.
The source reel said "AI completely solved math"; we don't: Alpöge did it working with Claude, and understanding is still open.
Not used: the reel's quote of Terence Tao expecting progress around 2050 (no source found), and its forecasts of cheaper goods (our voice makes no predictions, `docs/voice.md`).

## Facts (every number and claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | Who, when, with what | "The Anthropic announcement came on 20 November from Levent Alpöge, a mathematician at the San Francisco, California, company. “I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis,” Alpöge wrote, referring to Anthropic’s large language model (LLM)." | [Nature] |
| 2 | The problem, since 1859, about primes | "The Riemann hypothesis , which has stumped mathematicians since 1859, concerns the distribution of prime numbers, the building blocks of arithmetic." (2026 - 1859 = 167 years) | [IBM] |
| 3 | The prize | "The Clay Mathematics Institute includes the hypothesis among its seven Millennium Prize Problems , each carrying a USD 1 million award." | [IBM] |
| 4 | How big: 17 million lines | "On November 20, 2026, Levent Alpöge released a proof of the Riemann Hypothesis as a Lean library comprising 17 million lines of code." / "175,187 files, about 17 million lines." | [Lean], [Waterloo] |
| 5 | Too long for people to read | "He acknowledged that the argument remained extraordinarily long and difficult to read." / Maynard: "even though it is now in the form of incomprehensible code in the Lean programming language." | [IBM], [Nature] |
| 6 | What Lean is: a computer checks every step | "Alpöge released his argument in Lean, a programming language and proof assistant that checks mathematical reasoning step by step." | [IBM] |
| 7 | One day later: certified correct | "Over the past day, the Lean and Mathlib communities have rallied to verify the proof's correctness. We hereby certify that both the statement and the proof of the Riemann Hypothesis are correct." (statement dated 2026-11-21 13:55) | [Lean] |
| 8 | Checked by more than one machine | "The exported raw proof has been checked by several proof checkers, including Lean’s official kernel, the con-leche and con-ron checkers, and several independent checkers contributed by third parties and implemented in different programming languages." / Waterloo: "All four checks finished with no errors." | [Lean], [Waterloo] |
| 9 | A second proof, the same day, human only | "Hours later, Ravi Vakil, a mathematician at Stanford University in California, posted a rival preprint to Alpöge’s online, in what Vakil called a “hurried announcement” of a proof that “is all human, with no AI”." / "“Now it seems best to put out the current draft.”" | [Nature] |
| 10 | Experts: historic if it holds | Maynard: "“If this fully checks out, it is clearly a historic milestone in mathematics,”" | [Nature] |
| 11 | Understanding still takes months or years | "Mathematicians would need to understand how it worked before broadly accepting it, a process he said could take months or even years." / "“Mathematics is mainly about understanding why something is true,” he said." / "“We need to understand the ideas in the proof well enough to explain them, teach them and build on them to extend human knowledge." | [IBM] |
| 12 | The checkers look forward to the explanation | "We look forward to all the activity in the mathematical community that will help explain the new ideas in this proof." | [Lean] |
| 13 | The right question was checked too | "Crucially, the community has added a file that isolates the statement of the Riemann Hypothesis and imports only Mathlib. That statement was compared against the theorem proved by Alpöge using two independent tools ( comparator and con-leche –compare ), both confirming that the theorem proved in Alpöge’s library is exactly Mathlib’s statement of the Riemann Hypothesis." | [Lean] |
| 14 | Checkers that can't be fooled | "The checkers con-leche and con-ron come with a formal proof, relative to set theory, that they cannot accept a false proof, thus addressing concerns that Lean’s logic itself might have flaws that the proof could exploit." | [Lean] |
| 15 | What it predicts: a precise pattern in the primes | "Prime numbers are numbers divisible only by 1 and themselves, such as 2, 3 and 5, and the Riemann hypothesis predicts a remarkably precise pattern in how they are distributed." / Nature: "it would imply that prime numbers are scattered among all whole numbers in a way that is essentially as random as it could be." | [IBM], [Nature] |
| 16 | From most to all | "Earlier work established that at least 67.25% of a particular set of mathematical values follow the pattern predicted by the Riemann hypothesis. The new claim, if correct, would establish that every one of them follows the pattern, without exception." (67.25% shown as "at least two thirds") | [IBM] |
| 17 | Two separate jobs: is it right, why is it right | "The unusual presentation of the proof leaves mathematicians with two tasks: determining whether the computer-checked proof establishes the claimed result and understanding the mathematical ideas behind it." | [IBM] |
| 18 | The special numbers that encode the primes | "Riemann discovered that the distribution of primes is encoded in the ζ function’s ‘zeroes’." (row 16's "particular set of mathematical values" are these zeroes) | [Nature] |
| 19 | The prediction in plain words | "Riemann conjectured that apart from some obvious but uninteresting cases, all such solutions had to lie on a certain vertical line in the plane." ("all the important ones sit on one line") | [Nature] |

## Words in the video that are ours, not a source
- "the most famous problem in math": [Nature] "the statement that many mathematicians consider the most important open problem in the field"; [IBM] headline-level framing. Kept as "most famous", which the sources' "iconic"/"most important" supports.
- "Nobody could prove it": open since 1859 (row 2).
- "Code? Run the tests. Facts? Check the source.": our advice to the viewer, not a claim about the news.
