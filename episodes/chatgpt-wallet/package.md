# Package: chatgpt-wallet (workflow step 2)

Made 2026-11-22 with `/yt-package` and `/yt-seo`, before the script, so the first seconds can confirm this promise.
Rules: at most 60 characters, the subject (ChatGPT Wallet) in the first 40, a number, name or date, and besides the topic's name no thumbnail word repeated.

## The 10 titles (first set) and the shortened set
`python3 .claude/skills/yt-package/title.py titles.txt` (alone), then the finalists with `--thumb "LEARN CHATGPT WALLET IN 60 SECONDS"` (pair).
Most of the first set lost 6 points to the mobile cut (over 40 characters) or 20 to "no number", so a second, shorter set was written and scored.

| # | Title | Chars | Alone | Issues (alone) |
|---|---|---|---|---|
| 1 | What Is ChatGPT Wallet? (November 2026) | 39 | 100 | none |
| 2 | ChatGPT Wallet: Can AI Pay Safely in 2026? | 42 | 98 | mobile |
| 3 | ChatGPT Wallet: Can a Dot Pay for You in 2026? | 46 | 98 | mobile |
| 4 | What Is ChatGPT Wallet? OpenAI's Agent Payments (2026) | 54 | 94 | mobile |
| 5 | ChatGPT Wallet Explained: How Agents Pay in 2026 | 48 | 94 | mobile |
| 6 | ChatGPT Wallet vs Typing Your Card (2026) | 41 | 94 | mobile |
| 7 | OpenAI's ChatGPT Wallet, Clearly Explained (Nov 2026) | 53 | 94 | mobile |
| 8 | ChatGPT Wallet: Can AI Pay Without Your Card? | 45 | 80 | mobile, no-number |
| 9 | ChatGPT Wallet: Does Your AI Agent See Your Card? | 49 | 80 | mobile, no-number |
| 10 | How ChatGPT Wallet Hides Your Card Number From AI | 49 | 76 | mobile, no-number |

Also scored: "ChatGPT Wallet: AI Pays, Never Sees Your Card" 76, "Why ChatGPT Wallet Never Shows the Store Your Card" 76, "ChatGPT Wallet: Your AI Shops, Your Card Stays Hidden" 76.

Shortened set:
| Title | Chars | Alone | Pair | Pair issues |
|---|---|---|---|---|
| **ChatGPT Wallet 2026: Who Sees Your Card?** | 40 | 100 | 84 | duplicate (chatgpt, wallet), thumb-length |
| ChatGPT Wallet: Can AI Pay in 2026? | 35 | 100 | 84 | duplicate, thumb-length |
| What Is ChatGPT Wallet? (November 2026) | 39 | 100 | 80 | duplicate, thumb-length |
| ChatGPT Wallet: Who Sees Your Card in 2026? | 43 | 98 | 70 | mobile, duplicate, thumb-length |
| ChatGPT Wallet: Can Your Dot Pay in 2026? | 41 | 98 | 70 | mobile, duplicate, thumb-length |
| Can ChatGPT Wallet Hide Your Card? (2026) | 41 | 94 | 66 | mobile, duplicate, thumb-length |
| ChatGPT Wallet: Who Sees Your Card Now? | 39 | 94 | 66 | no-number, duplicate, thumb-length |

The pair issues are on purpose (`docs/workflow.md`, deviations): the brand card has 6 words, and it repeats the topic's name "ChatGPT Wallet", which search needs in the title.

## Top 3
1. **ChatGPT Wallet 2026: Who Sees Your Card?** 100 alone, 84 with the thumbnail, only the by-design issues. An open question the video answers exactly: not the agent, not the shop.
2. **ChatGPT Wallet: Can AI Pay in 2026?** 100, 84. Shorter, but AI could already pay in some places before (Instant Checkout, `research.md`), so the question promises less than the video says.
3. **What Is ChatGPT Wallet? (November 2026)**: 100, 80. The plain search question, weaker promise.

## Chosen
**ChatGPT Wallet 2026: Who Sees Your Card?** (40 characters; "ChatGPT Wallet" at character 1; the number 2026.)
Title and thumbnail as one promise: the title asks who sees your card when an agent pays; the thumbnail promises the answer in 60 seconds.
The answer the video gives: you approve with Face ID or a fingerprint, the card network hands over a stand-in card, and neither the agent nor the shop sees your real number, code or expiry.
The first seconds confirm it: the spoken hook names ChatGPT Wallet, says before (you typed your card) -> now (one scan, it pays, never seeing your 3 numbers).

## Thumbnail text
**LEARN CHATGPT WALLET IN 60 SECONDS** (the brand card: "LEARN" small off-white, "CHATGPT WALLET" huge amber, red "IN 60 SECONDS" sticker).
`title.py --title "ChatGPT Wallet 2026: Who Sees Your Card?" --thumb "LEARN CHATGPT WALLET IN 60 SECONDS"`: 84/100 (duplicate on chatgpt/wallet, thumb-length 6, both by design).

## The 3 searches this video should win (`/yt-seo` query test)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| chatgpt wallet | ChatGPT, Wallet | ChatGPT, Wallet (line 1) |
| how does chatgpt wallet work | ChatGPT, Wallet | how, does, ChatGPT, Wallet, work (line 1) |
| ai agent payment token | (none: the title asks the viewer's question instead) | AI, agent, payment, token (line 2) |

Proposed first two description lines for step 5 (`upload.json`):
1. `How does ChatGPT Wallet work? OpenAI's wallet for ChatGPT dots, launched November 13, 2026, explained in 60 seconds.`
2. `Before, an AI agent stopped at checkout and you typed your real card. Now you approve with Face ID or a fingerprint and the card network gives the agent a payment token, a stand-in card.`
