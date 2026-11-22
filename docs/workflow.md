# Workflow: how an episode is made, judged and learned from

The standard every episode follows, approved by the owner on 2026-11-21. It replaces the earlier skills table in `AGENTS.md`.
Skills are installed by `make skills` (pinned in `skills.lock`); their tools run from `.claude/skills/<skill>/`.

## The goal, from first principles
A viewer **finds** the video, **clicks** it, **watches** to the end, **understands** it correctly and **comes back**;
and every episode is **better** than the last. Each step below exists for one of these:

| Stage | Decided by | Measured by (YouTube Studio) |
|---|---|---|
| Find | a topic people want, the words they search | impressions, search traffic |
| Click | title and thumbnail as one promise | click-through rate |
| Watch | the first seconds, then a reason to stay every few seconds | retention curve, average % viewed |
| Understand | sourced claims, one clear before -> after | corrections in comments |
| Return | the same brand every time, a steady rhythm, a "next" | subscribers, returning viewers |
| Get better | real numbers turned into rules | `docs/lessons.md` |

## The map
```
GOAL ── find ──► click ──► watch ──► understand ──► return ──► get better ─┐
                                                                            │
WEEKLY (choose)                                                             │
  /yt-viral: videos that beat their own channel 2x+ ─┐                      │
  /yt-comment: questions viewers asked ──────────────┼─► ranked shortlist ─► OWNER picks ─► /yt-plan
  research scan: what is new in AI ──────────────────┘                      │
                                                                            │
PER EPISODE                                                                 │
  1 RESEARCH  maker's own docs / Deep-Research ─► research.md, brief.json   │
       ▼                                                                    │
  2 PROMISE   /yt-package: 10 titles -> top 3 + thumbnail text              │
       ▼      /yt-seo: the 3 searches it must win ─► package.md             │
  3 SCRIPT    /yt-script: hooks -> 100 -> turn -> beats [ON SCREEN]         │
       ▼      -> payoff said -> one ask ─► beats.md, script.md              │
  4 MAKE      stickman film + voice + thumbnail · Openverse music · earshot │
       ▼                                                                    │
  5 FINISH    /yt-chapters on captions.srt · /yt-seo description + tags     │
       ▼                                                                    │
  6 JUDGE     a fresh agent that did not make it ─► evaluation.md           │
       ├─ must-fix ──► back to 3 or 4                                       │
       ▼ ready                                                              │
  7 OWNER     watches and approves ─► yt upload ─► public                   │
       ▼                                                                    │
AFTER PUBLISHING                                                            │
  48 h     /yt-comment: answer, pin one; questions -> weekly topic list     │
  7 days   /yt-retention (owner exports the CSV) -> biggest drop -> 1 fix   │
  monthly  /yt-audit -> 1 fix                                               │
       ▼                                                                    │
  docs/lessons.md, docs/brand.md ── feed steps 2, 3 and 6 next time ────────┘
```

## Per episode
Episode folder: `episodes/<slug>/` (`make new-episode NAME=<slug>`). Each step names its model, per `AGENTS.md` Workflow 9:
**strong** = the expensive model (judgment), **Sonnet** = a subagent on the cheaper model (checkable work).
Before step 1 read `docs/brand.md`, `docs/lessons.md` and `docs/voice.md` (who we talk to; every youtube-agent skill reads it).
When several agents run at once, each works only in its own worktree and its own scratch folder named after its step and episode (e.g. `judge-<slug>/`); never write into, or delete, a folder another agent may use.
The finished example of every file is `episodes/deepseek-super-agent/`.

### 1 Research (strong)
- Read the maker's own docs first (spec, changelog, README, official blog); press only for what the maker doesn't say. Deep-Research (`research` skills) when there are many items to compare.
- Find the predecessor ("before") in the same sources. If the premise doesn't hold, stop and tell the owner.
- **Out:** `research.md` (facts table with sources, what was left out and why, where the analogy stops), `brief.json` (every claim with an http(s) source).
- **Pass:** every number in the video will trace to a row here.

### 2 Promise first (strong)
The click is decided by the title and thumbnail together, and the first seconds must confirm that promise, so the promise is fixed before the script.
- `/yt-package`: write 10 titles, run `python3 .claude/skills/yt-package/title.py titles.txt`, keep the top 3 with their scores and issues, pick one.
  Thumbnail text follows the brand card ("LEARN <TOPIC> IN 60 SECONDS", `docs/brand.md`); score the pair with `title.py --title "..." --thumb "..."`.
- `/yt-seo`: write the 3 searches this video should win; the title and the first two description lines must contain their words.
- **Out:** `package.md`: the 10 titles with scores, the top 3, the chosen title, the thumbnail text, the 3 searches.
- **Pass:** title at most 60 characters with the subject in the first 40; a number, name or date in it; besides the topic's name it repeats no thumbnail word
  (the topic's name may be in both, because search needs it in the title and the brand card carries it).

### 3 Script (strong)
`/yt-script`, scaled to 60 seconds:
- **Hook.** Write at least 5 against the 21 formulas (`.claude/skills/yt-script/hooks.json`), score them all
  (`python3 .claude/skills/yt-script/hookscore.py hooks.txt`), iterate until one scores **100**, and keep the top two with their panels.
  The hook names the topic first, states before -> after, and confirms the title's promise. Every number stays true (video length, real counts);
  never invent a figure to raise the score.
- **Turn** (by about 10 s): one sentence saying what the video will do, then do it. No channel intro, no subscribe pitch here.
- **Body:** one idea per beat, each beat marked `[ON SCREEN: ...]`: the story world, today's problem, the BEFORE vs NEW diagram.
- **Payoff:** deliver what the hook promised, out loud, and say you are delivering it.
- **Close:** the takeaway tied to the story, then one ask ("Subscribe for the next one.").
- **Out:** `beats.md` (the two hooks with panels and the formula, then a table: time, spoken line, ON SCREEN, purpose: hook/turn/beat/payoff/close),
  `script.md` (spoken text only, sections hook, before, new, why, takeaway, outro), `film/script.txt` (as spoken: numbers in words, names respelled for the voice).
- **Pass:** hook 100; about 170 words, so the voice fits in 60 s at speed 1.2.

### 4 Make (Sonnet; the strong model takes over a step that fails twice)
- stickman: `new_film.py`, `film.js` from `beats.md` (every beat's ON SCREEN), the voice (`tts.py ... --voice am_michael --speed 1.2 --no-align`),
  stills checked by eye, `build.py` until the audit says `ISSUES 0`, copied to `video.mp4`.
- Brand on screen (`docs/brand.md`): title card from frame 0, corner tag on every frame, takeaway card, Subscribe button, "Next in 60 seconds".
- Music: the signature track (`python scripts/music.py get efa007f6-a5fe-420c-a1a6-8d5dafa95005 film/music.mp3`, credit in `music.json`), about 16 dB under the voice.
- Thumbnail: `film/thumb.js` + `film/thumb.py` from the brand template, checked at 160 px wide.
- Listen: `earshot measure`, `describe`, `timeline --video`, `sheet`.
- **Pass:** audit `ISSUES 0`; -17 LUFS within 1; no noise or hum tag; at most 60 s.

### 5 Finish the package (Sonnet)
- `captions.srt` from `film/vo_lines.json` (plus the voice offset).
- `/yt-chapters`: `python3 .claude/skills/yt-chapters/chapters.py captions.srt`, then retitle each chapter as that section's promise in 3 to 5 words.
- `/yt-seo`: description (first two lines = the 3 searches' words, then the link, then chapters, then the long version with sources and the music credit), up to 3 hashtags, at most 15 tags for spellings and tool names.
- **Out:** `upload.json`, `captions.srt`.
- **Pass:** chapters valid per `chapters.py` (0:00 first, at least 3, each at least 10 s).

### 6 Judge (strong, a fresh agent that did not make the episode)
Follow `docs/roles/evaluator.md`. The rubric is the youtube-agent skills' published rules plus `docs/brand.md` and `docs/lessons.md`, not the maker's opinion.
- **Out:** `evaluation.md`, first line `ready to publish` or `not ready: N must-fix`.
- Must-fix goes back to step 3 (words) or step 4 (picture and sound). Real retention later outranks every judge.

### 7 Owner (owner)
Watches and listens, then says "ship it". An agent then runs `yt upload <dir>` (dry run first, then `--confirm`), and the owner makes it public.

## Weekly: choosing what to make
- `/yt-viral` (Sonnet collects, strong reads): `yt-dlp --flat-playlist -J <channel url>` for 5 to 10 channels in our niche
  (AI explainers, short tech explainers), at least 4 videos each, into one JSON list; `python3 .claude/skills/yt-viral/swipe.py collected.json --min 2.0`.
  Hand back the top five by multiple, the pattern each title used (a judgment about the words, not proof of why it worked), and the one thing they share.
  Patterns only: never copy a premise, line, character or look.
- Add the repeated questions from `/yt-comment` and a research scan of what's new; rank a shortlist; the owner picks.
- `/yt-plan` (strong, with the owner's hours and best day): a week with one main episode; release order follows the end-card chain.

## After publishing: learning
- **48 hours, `/yt-comment` (Sonnet drafts, owner posts):** sort into questions, corrections, praise, bait; answer in under 30 words; say which comment to pin. Repeated questions go to the weekly topic list; a correct correction goes to `docs/lessons.md`.
- **7 days, `/yt-retention` (Sonnet runs, strong decides):** the owner exports Studio -> the video -> Analytics -> Engagement -> audience retention -> download, saved as `episodes/<slug>/retention.csv`;
  `python3 .claude/skills/yt-retention/retention.py retention.csv --duration 60 --transcript captions.srt`.
  Name the single biggest leak (early drop, a cliff with what was being said, or a slow slide) and one change; add it to `docs/lessons.md`.
  If the early drop is healthy and the middle is flat, the video is fine and the problem is packaging: back to step 2 for the next one.
- **Monthly, `/yt-audit` (strong):** the last ten titles as a set (`title.py`), thumbnails at feed size, the first seconds of the three latest (`hookscore.py`), upload rhythm, retention shape. One fix, added to `docs/lessons.md`.

## The automated daily run
`.github/workflows/daily-videos.yml` runs this whole workflow unattended every day on GitHub Actions, on the owner's Claude plan.
- **Settings:** `pipeline.yaml` (videos per day, publish rules, models per role, timeouts, Claude Code version). Edit it and push to `develop`.
  The run time is the `cron` line in the workflow file, the only setting GitHub requires there.
- **Latest code:** every run checks out the latest `develop`, so merged changes are used from the next run on. Skills come from `skills.lock`.
- **Flow:** the planner (`docs/pipeline/plan.md`) picks the day's topics (refreshing the `/yt-viral` study when it is old) -> one job per topic
  (`docs/pipeline/episode.md`) does steps 1-6 with the models in `pipeline.yaml` -> the judge's first line decides:
  `ready to publish` -> uploaded as `publish.when_ready`; anything else -> `publish.otherwise` (private or skip) and a GitHub issue for the owner.
- Each episode is committed straight to `develop` after `make check` passes (the one exception to "PRs only"); if it fails, to `daily/<slug>` and an issue.
- **Manual run:** Actions -> daily-videos -> Run workflow (optional video count, dry run that uploads nothing).
- **One-time owner setup:** repo secrets `CLAUDE_CODE_OAUTH_TOKEN` (`claude setup-token`), `YOUTUBE_CLIENT_SECRET_JSON` and `YOUTUBE_TOKEN_JSON`
  (the two files in `~/.config/youtube-skill/`), and the Google OAuth app published (in Testing its sign-in expires every 7 days).

## Where we deviate from the skills, on purpose
| Skill rule | Ours | Why |
|---|---|---|
| `/yt-package`: at most 3 words on the thumbnail, never repeat the title | The brand card "LEARN <TOPIC> IN 60 SECONDS"; only the topic's name may repeat | The owner's thumbnail rule (lessons L7, L8); checked readable at 160 px |
| `/yt-script`: show the top two hooks | Also: the hook must score 100 with true facts | The owner's rule (2026-11-21) |
| `/yt-script`: the turn by 0:15-0:45 | By about 10 s; the topic in the first second (title card) | Our videos are 60 s; lesson L14 |
| `/yt-plan`: three uploads a week including Shorts | Waits for the owner's hours and best day; no vertical Shorts yet | Our videos are 16:9; vertical versions are an open owner decision |
| `/yt-edit` | Not used | It edits camera recordings; ours are rendered from code |
