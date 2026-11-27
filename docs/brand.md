# Brand

Owner-maintained, like `docs/product.md`. Draft v1 from the owner's feedback on Episode 0 ("we should build a brand,
not a generic video channel"). Everything here repeats in every episode; that repetition is the brand.

## The promise
**Learn one new AI idea in 60 seconds, through a story you already know.**
Every thumbnail and every opening restates it. If a video can't keep it, it isn't an episode.

## What repeats in every episode
| Element | Rule |
|---|---|
| Format | Vertical 9:16, 1080 x 1920 (YouTube Shorts; owner, 2026-11-24): every film, `scripts/film-9x16.sh` right after `new_film.py`. 60 seconds; one new AI technology; told through one story everyone knows (history, a war, everyday life) |
| Safe area | Every word and key drawing inside x 60-918, y 100-1536: Shorts puts its buttons on the right 15% and the title on the bottom 20%. Text at least 44 px; pictures in the top ~60%, words under them |
| Casting | Who gives orders and who takes them must never line up with skin tone. When the AI is a character that takes orders, draw it as visibly AI (a screen for a head); a story person standing in for the AI (a mechanic, a waiter) is fine if the cast's tones don't map to rank. Episode 0's Napoleon (cream) and Berthier (dark) break this rule |
| Mascot | The hero from the stickman engine: round cream face, coral hoodie. Each episode he wears the story's costume (Episode 0: Napoleon's hat). Same face, new hat |
| Corner tag | From the first frame to the last: "<Topic> · 60s", top-left, so a viewer who joins at any second knows the topic (Episode 0: `overlay()` in `film.js`) |
| Opening | Frame 0 to the end of the first spoken phrase (about 1.5 s): a full-screen title card in the thumbnail's style, the topic huge in amber and the red "IN 60 SECONDS" sticker. The first spoken sentence names the topic and the moment the viewer wants, in plain words ("Imagine running an open-source model that's faster and cheaper than the top ones"). "<X> just dropped ..." only when X is about a month old or less |
| Structure | Title card, hook to the viewer, today's problem, the story, the side-by-side diagram, the takeaway, one call to action |
| Takeaway card | The last line on screen in two lines: plain statement, then the amber punchline |
| Call to action | A "So, what we learned:" conclusion, then spoken "Want more? Subscribe, and comment what we should explain next." with the red Subscribe button and a comment button; the next episode's name under them only when it is decided (owner, 2026-11-23, lessons L24, L32) |
| Voice | Kokoro `am_michael`, speed 1.0 (L94): calm and clear, a friend explaining, never hyped (owner, L91; `docs/voice.md`); plain words; "you" in the first sentence |
| Music | One signature instrumental track, the same every episode, 16 dB under the voice: "Blue Sky" by Sergmusic (CC0, found through Openverse with `scripts/music.py`). A new track must be CC0 or CC BY, have no vocals (checked with earshot) and be credited in the description |

## Colours and type
| Use | Value |
|---|---|
| Ground | dusk purple `#120C22` to `#2A1C46`, one warm light behind the mascot |
| Topic, accents | amber `#FFC66E` |
| Promise sticker, Subscribe button | red `#E4493F` |
| Text | off-white `#F8E9CC`, outlined in `#120A1C` |
| Working, new parts | teal `#2DB2AE` |
| Headlines | Impact, all caps. Labels: Arial Black |

## Thumbnail template
One template for every episode, 1080 x 1920 (the films are Shorts): `scripts/thumbnail/template.js`, rendered by
`.skills/venv/bin/python scripts/thumbnail/render.py episodes/<slug>` with the bundled Anton font (`scripts/thumbnail/`, OFL), so a CI render looks like a local one.
An episode never draws its own layout. It gives only `film/thumb.json` (`{"learn": "LEARN GOOGLE'S", "topic": "Agent Compute Engine"}`; `learn` defaults to "LEARN")
and `film/thumb_picture.js`: `thumbPicture(x)`, its one picture in a 620 x 620 box (reuse a shot's drawing from `film.js`), and `thumbCostume(x, m)`, the costume.
1. **Promise, top:** "LEARN <WHOSE>" in off-white, the topic in amber as big as fits (1-3 lines), the red "IN 60 SECONDS" sticker under it.
2. **Mascot, bottom left:** large, in the episode's costume, eyes on the viewer.
3. **Picture, bottom right:** one image of the lesson, from the episode's story (product.md), darker than the mascot and the text; no words except a stamp-like label.
4. Readable at 160 px wide. Nothing that matters below y 1640, where the Shorts title and view count sit.

The viewer must be able to tell what they will learn. A hook that could sit on any video ("YOU'RE THE BOTTLENECK.") was rejected as generic;
a diagram with labels was rejected as unattractive.

## Title pattern
The thumbnail carries the topic and the promise, so the title carries the hook. Under 60 characters, with a number or a name.
The description's first two lines name the topic in the words people search for.

## Not the brand
- AI-generated images or video, stock footage, a different art style per episode.
- Hype, predictions, "this changes everything". Claims without a source.
- A thumbnail or title that promises something the video doesn't deliver.

## Open (owner decides)
1. A name for the series or the channel. Today the channel is "ivan data" and nothing on screen names the series.
2. A name for the mascot.
3. A sound on the title card (a short sting), or the voice alone.
