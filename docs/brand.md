# Brand

Owner-maintained, like `docs/product.md`. Draft v1 from the owner's feedback on Episode 0 ("we should build a brand,
not a generic video channel"). Everything here repeats in every episode; that repetition is the brand.

## The promise
**Learn one new AI idea in 60 seconds, through a story you already know.**
Every thumbnail and every opening restates it. If a video can't keep it, it isn't an episode.

## What repeats in every episode
| Element | Rule |
|---|---|
| Format | 60 seconds; one new AI technology; told through one story everyone knows (history, a war, everyday life) |
| AI characters | An AI agent, model or worker is drawn as visibly AI (a screen for a head), never as a person of a given skin tone taking orders. Human roles in a story must not line up with skin tone (boss vs worker) |
| Mascot | The hero from the stickman engine: round cream face, coral hoodie. Each episode he wears the story's costume (Episode 0: Napoleon's hat). Same face, new hat |
| Corner tag | From the first frame to the last: "<Topic> · 60s", top-left, so a viewer who joins at any second knows the topic (Episode 0: `overlay()` in `film.js`) |
| Opening | Frame 0 to the end of the first spoken phrase (about 1.5 s): a full-screen title card in the thumbnail's style, the topic huge in amber and the red "IN 60 SECONDS" sticker. The first spoken words name the topic ("Agent Skills, explained: ..."). "<X> just dropped ..." only when X is about a month old or less |
| Structure | Title card, hook to the viewer, today's problem, the story, the side-by-side diagram, the takeaway, one call to action |
| Takeaway card | The last line on screen in two lines: plain statement, then the amber punchline |
| Call to action | Spoken "Subscribe for the next one." with the red Subscribe button; the next episode's name under it |
| Voice | Kokoro `am_michael`, speed 1.2; plain words; "you" in the first sentence |
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
Code: `episodes/deepseek-super-agent/film/thumb.js` (branch `ep-super-agent`); copy it and change the topic, the costume and the picture.
1. **Promise, top right:** small "LEARN <WHOSE>" in off-white, the topic huge in amber, then the red sticker "IN 60 SECONDS", tilted, always the same.
2. **Mascot, left:** large, in the episode's costume, confident, looking at the viewer.
3. **Picture, bottom right:** one image of the lesson (Episode 0: the army of AI workers), darker than the mascot and the text.
4. Readable at 160 px wide. Nothing that matters in the bottom-right corner, where YouTube puts the duration.

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
