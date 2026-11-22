ready to publish

# Evaluation: openai-dots (workflow step 6)

Judged 2026-11-22 by a fresh agent that did not make the episode, following `docs/roles/evaluator.md` (20 rows) and using the format of `episodes/deepseek-super-agent/evaluation.md` / `episodes/mcp-stateless/evaluation.md`.
The rubric: the youtube-agent skills (`yt-package`, `yt-seo`, `yt-script`, `yt-chapters`), `docs/workflow.md`, `docs/brand.md` and `docs/lessons.md`. Each row quotes its rule.
What I looked at: three frames per shot (4 frames after each cut, the middle, and 4 frames before the next cut, using the 26 cut frames in `film/film.json`); full-size frames at 30.9 s (shot 13) and 56.0 s (the takeaway); `film/contact_sheet.jpg`; the thumbnail at full size and shrunk to 160 px wide; and earshot `measure`, `describe` and `timeline --video`.
I checked the claims myself against the live pages of OpenAI "Introducing dots", the "DevDay 2026 recap" and "Introducing ChatGPT agent".
The scores are the tools' own. A low score is a reason to look again, not proof.

## Must fix
None.

## Should fix
| # | Row | Rule | Evidence | Fix | Goes back to |
|---|---|---|---|---|---|
| 1 | 12 Claims (the "before") | evaluator row 12: "Every claim ... traces to a source ... Must-fix for an unsourced claim or a wrong one." | The ChatGPT agent post (July 17, 2025), which `research.md` cites as the source for the "before", also says users can "schedule completed tasks to recur automatically" (its example is a weekly report every Monday morning). `research.md` leaves this out. The video says "your ChatGPT would stop, wait for you" (hook), "you ring, it does that one task, then waits for the next ring" and "Go home, and no new work starts". On screen it shows "1 ASK = 1 TASK" and the board reads "you ask -> 1 task -> waits". A viewer who used scheduled agent tasks could call this wrong. I judge it should-fix, not must-fix, for two reasons. First, the new thing is still true and sourced: the old agent only ran work you had defined, while a dot finds its own work toward your goals ("looks for ways to help in the background"). Second, "no new work starts" holds if "new" means work you didn't ask for. The owner may upgrade this to must-fix | Cheapest fix: one sentence in the `upload.json` description, e.g. "(The 2025 agent could repeat a task you scheduled; it never picked its own work.)" Add the same nuance to `research.md` under "Where the analogy stops". If the voice is ever redone: "Go home, and nothing you didn't ask for gets done." | step 5 (description); step 3 only if re-voiced |
| 2 | 14 Brand / 15 L9 | `docs/brand.md`, Call to action: "Spoken 'Subscribe for the next one.' with the red Subscribe button; the next episode's name under it". `docs/workflow.md`: "Subscribe button, 'Next in 60 seconds'" | Frames 57.0-59.9 s show the red "Subscribe" button with nothing under it. `beats.md` shot 25 says "no 'Next' line (no next episode decided)". mcp-stateless was judged the same way | When the owner picks the next episode, add "Next in 60 seconds: ..." under the button and re-render only the last shot (`build.py film --shots 25`) | step 4 (picture) |
| 3 | 4 Searches | evaluator: "The 3 searches in `package.md`: their words are in the title and the first two description lines. Should-fix otherwise." `/yt-seo` query test: "check the title and first two description lines contain the words in those queries" | Description line 1 has every word of all 3 searches ("What are OpenAI dots? Always-on ChatGPT agents ..."). The title "OpenAI Dots: Can ChatGPT Work 24/7 Now?" lacks "what are" (from "what are openai dots") and "always on agent" (from "chatgpt always on agent") | Optional. `package.md` shows the alternatives scored lower or broke other rules: "What Are OpenAI Dots? (DevDay 2026)" scored 100 alone / 80 as a pair, with a weaker promise. Keep the title and revisit if search traffic after 7 days is low | step 2 (title only) |

Advisory, not a rubric failure:
- **Row 18:** 2 of the 25 cuts have no onset, only a level rise: 18.97 s (shot 8) and 31.90 s (shot 14). A soft brush on them would raise sync from 72% to about 80%.

### Row 14: what repeats in every episode (`docs/brand.md`)
| Element | Present? | Evidence |
|---|---|---|
| Format | present | 60.000 s (ffprobe); one technology (OpenAI dots, 2026-09-29); one everyday story (a shop you run, by day and by night) |
| Casting | present | The old ChatGPT is a grey-blue clerk with a screen for a head and a chat bubble ("waiting..."). The dot is a teal circle with eyes. Both are visibly AI, and no skin tone maps to rank. The only human is the mascot |
| Mascot | present | Round cream face, coral hoodie, in this episode's costume: a brown flat cap and a waist apron (shots 3-9, 18, 22-25, thumbnail) |
| Corner tag | present | "OpenAI dots · 60s" top-left in every sampled frame, from 0.13 s to 59.87 s (dimmed by the fade) |
| Opening | present | Full-screen title card from frame 0 ("LEARN / OPENAI DOTS / IN 60 SECONDS", tilted red sticker). It cuts at frame 50 (1.67 s), when the first phrase "OpenAI dots: before," ends (1.69 s). The first spoken words are "OpenAI dots". No "just dropped" (launched about 8 weeks ago) |
| Structure | present | Title card; hook to "your"; the problem (the clerk does one task and waits; the shop closes); the story (the night shift); the side-by-side board (shots 19-21); the takeaway; one ask |
| Takeaway card | present | 53.3-56.8 s: line 1 off-white "The shop never closes now," and line 2 amber "but the keys are still yours." (full-size frame at 56.0 s) |
| Call to action | partly | Spoken "Subscribe for the next one." at 56.96 s, with the red Subscribe button from about 57.0 s. **The next episode's name under it is missing** (Should fix 2) |
| Voice | present | `film/vo_lines.json` uses voice am_michael on every line; speed 1.2 per `progress.md`. earshot: "a voice-over narration" z +3.6. "your" is the 4th spoken word |
| Music | present | "Blue Sky" by Sergmusic, CC0 1.0 (`music.json`, sha256 recorded), credited in the description. earshot `describe`: AudioSet Music 0.77. The maker measured the music 16.1 dB under the voice on the stems; I did not re-measure that |
| Colours and type | present | Dusk-purple ground; amber topic and takeaway punchline; red sticker and Subscribe; teal for the dot, the NOW tab and the new nodes on the board; off-white text |

### Row 15: open lessons marked `check: evaluate`
| Lesson | Followed? | Evidence |
|---|---|---|
| L1 a shot every 2-3 s, speed 1.2 | yes | 26 shots in 60 s, 2.3 s average (`film/film.json` cuts); speed 1.2 |
| L2 no noise beds | yes | No noise or hum tag in earshot `describe`; noise floor -41.3 dBFS; the timeline shows only foley and UI hints |
| L6 one spoken call to action with a button | yes | "Subscribe for the next one." plus the red button, 56.96-60 s |
| L7 the thumbnail names the topic | yes | "LEARN OPENAI DOTS IN 60 SECONDS", readable at 160 px |
| L9 brand elements repeat | partly | Everything except the "Next" line (Should fix 2) |
| L11 "you" in the first sentence, topic on screen from frame 0 | yes | "your ChatGPT" in the hook; title card and corner tag at 0.00 s |
| L12 listen with earshot before judging sound | yes | `measure`, `describe` and `timeline --video` were run for this scorecard (below) |
| L14 title card from frame 0, topic's name spoken first | yes | See Opening above |

## Passed
| # | Row | Rule | Evidence |
|---|---|---|---|
| 1 | Title | "Must-fix: over 60 characters, or the subject not in the first 40" | `title.py --title "OpenAI Dots: Can ChatGPT Work 24/7 Now?" --thumb "LEARN OPENAI DOTS IN 60 SECONDS"`: 39 chars, score 84/100. "OpenAI Dots" starts at character 1. The tool reports "carries a concrete figure (24, 7)" and "open question in the title". Its two flags (duplicate on dots/openai; thumb-length 6 words) come from the brand card's own format, the same deviation allowed on earlier episodes |
| 2 | Title + thumbnail one promise | "besides the topic's name, the title repeats no thumbnail word" | The words the two share are "OpenAI" and "Dots", which are only the topic's name. The title asks "Can ChatGPT work 24/7 now?" and the thumbnail promises the answer in 60 seconds |
| 3 | Thumbnail at 160 px | "topic and promise readable, brand card used" | Shrunk to 160x90, "LEARN / OPENAI DOTS / IN 60 SECONDS" is readable, and the mascot (cap) and teal dot are recognisable. It follows the brand template: promise top right, mascot left with the key, picture bottom right (the dot at its night desk). Nothing in the bottom-right duration corner (the panel ends at about x 1155, y 660 of 1280x720) |
| 5 | Hook | "Must-fix below 100. Must-fix if any number in it is not true" | `hookscore.py`: SPECIFICITY, ADDRESS, STAKES, CURIOSITY and BREVITY each 100; VERDICT 100 STRONG; formula The Clock. The numbers are true: "24/7" is OpenAI's own phrase ("can work towards your goals 24/7", checked live on the dots post), and "60 seconds" matches the video (60.000 s) |
| 6 | First seconds | "confirm the title's promise, open a question the viewer can't close, show the payoff exists" | Promise: "now your dot works 24/7" at 4.3-6.8 s, with the "24/7" card on the night-shift dot. Open question: "but how, at what risk" with HOW? / WHAT RISK? cards. Payoff: "in 60 seconds" with the red sticker at 8.5 s |
| 7 | Topic first (L14) | "title card from frame 0 and the topic's name as the first spoken words" | Frame 0 is the title card. Voice line 0 begins "OpenAI dots:" at 0.30 s |
| 8 | Turn | "by about 10 s, one sentence saying what the video will do. No channel intro or subscribe pitch before it" | "Here's how, in one shop you run." at 10.0-11.7 s (captions 5). No intro and no subscribe pitch before 56.96 s |
| 9 | Beats | "one idea per beat, and something to look at on every beat" | Every one of the 26 shots has a subject and an action in all 3 sampled frames. Examples: shot 7 (bell, parcel, "1 ASK = 1 TASK"), shot 13 (READ-ONLY, glass panel, sleeping-mascot inset), shot 14 (padlock and red X on SEND), shots 15-17 (phone invoice note, YES, "sent", "shorter notes" -> "Invoice sent ✓"), shot 18 (PASSWORD key, ALWAYS YOURS), shot 23 (magnifier, CHECK ITS WORK). The deviations from `beats.md` listed in `progress.md` are all honest re-stagings of the same idea |
| 10 | Payoff | "the thing the hook promised is delivered, out loud" | 43.0-50.6 s: "How? Its own computer, working toward your goals. What risk? Away, it only reads; it asks before sensitive steps." On screen, the HOW? and WHAT RISK? cards come back with teal checks |
| 11 | Close | "the takeaway tied to the story, then exactly one ask" | "The shop never closes now, but the keys are still yours." (the shop and keys from the story), then only "Subscribe for the next one." |
| 12 | Claims (the "new" side and the numbers) | "Must-fix for an unsourced claim or a wrong one" | Checked live on openai.com/index/introducing-dots/ (dated Sep 29, 2026): "always-on agents"; "their own cloud computer"; "work towards your goals 24/7"; "When you aren't actively working with it, your dot looks for ways to help in the background"; read-only tools that "can't send messages, change app content"; "learn from feedback over time"; the early tester's forgotten invoice, "sent it after his approval"; "message you with progress, questions, or decisions that need you"; Custom Rules "require approval"; "changing a password, always stay with you"; "Dots can still make mistakes, so always review consequential work"; Pro and Business Premium, plus an Enterprise/Edu/Healthcare beta. The DevDay recap is dated "September 29, 2026" and lists dots. The agent post is dated July 17, 2025 and says "its own virtual computer", "describe your desired task" and "when it's done with your task". "Asks before sensitive steps" is a fair summary of approval, Custom Rules and the password rule. The invented examples (shop, goals list, parcel) are labelled in the description. The one weak spot on the "before" side is Should fix 1 |
| 13 | Before -> after | "stated plainly and shown side by side" | Spoken: the clerk who "does that one task, then waits" vs. the dot that "works the night shift ... your goals pinned on the wall". Shown side by side on one board (shots 19-21): BEFORE "ChatGPT · agent mode 2025: you ask -> 1 task -> waits" \| NOW "OpenAI dots 2026: own cloud computer -> your goals -> 24/7", plus "away: read-only" |
| 16 | Loudness | "-17 LUFS within 1, true peak under -1 dBTP" | `earshot measure video.mp4`: -17.0 LUFS, true peak -3.5 dBTP, LRA 1.5 LU, noise floor -41.3 dBFS |
| 17 | describe | "a noise or hum tag is Must-fix; voice-over clear; music present" | `earshot describe video.mp4`: no noise or hum tag. The top tags are weak foley readings (a knock on a door z +2.1, a mouth pop +1.8). Voice: "a voice-over narration" z +3.6, "a man speaking" +2.8, AudioSet Speech 0.87. Music: AudioSet 0.77, "inspirational corporate background music" +2.9. The timeline's "vocal chop" section hint is most likely the voice-over over the music. Blue Sky is the brand's checked no-vocals track |
| 18 | Cuts with sound | "Should-fix below 50%" | `earshot timeline video.mp4 --video video.mp4`: 25 cuts; 72% have an onset within 1 frame (chance 43%), 92% within 100 ms, median offset 18 ms |
| 19 | Audit and length | "ends `ISSUES 0`; duration at most 60 s" | `film/build.log` ends "ISSUES 0" (1800/1800 frames, foot skate 0.0, -17.0 LUFS). ffprobe: 60.000 s, 1920x1080, 30 fps |
| 20 | Chapters | `/yt-chapters`: "first entry must be 00:00", "at least three", "each at least 10 seconds" | `upload.json`: 0:00, 0:11, 0:23, 0:43, which are 11, 12, 20 and 17 s long. `chapters.py captions.srt` finds the same four boundaries. The titles were rewritten as `/yt-chapters` asks ("Dots vs waiting ChatGPT", "One ring, one task", "A dot works the night", "How it works, what risk") |

## Not evaluated
- **Pronunciation and delivery** ("OpenAI", "ChatGPT", "DevDay", "twenty-four seven", "twenty twenty-five's"): earshot does not transcribe words, so these are for the owner's ears.
- **The music level under the voice** (the brand's 16 dB): I did not re-measure it on separate stems. The maker reports voice -16.8 LUFS and music -32.9 LUFS (16.1 dB). The mix as a whole passes rows 16-17.
- **The stickman audit was not re-run.** This verdict relies on `film/build.log` (`ISSUES 0`), whose final numbers match my earshot and ffprobe measurements of `video.mp4`.
- **TechCrunch** (used only for the look and the "already possible" caveat, neither of which is said in the video) was not re-read.
- **Retention, click-through rate and search traffic** need the video to be public with views (`yt-retention`).
