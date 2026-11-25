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
| Understand | a main idea the viewer can say back (`lesson.md`, the content gate), sourced claims, one clear before -> after | corrections in comments |
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
  2b LESSON   main idea, why it matters, 3 questions ─► lesson.md           │
       ▼                                                                    │
  3 SCRIPT    /yt-script: hooks -> 3-s test -> turn -> beats [ON SCREEN]         │
       ▼      -> payoff said -> one ask ─► beats.md, script.md              │
  3a GATE     fresh student + critic: does it teach? ─► gate.md (fail ─► 2b)│
       ▼                                                                    │
  4 MAKE      stickman film + voice + thumbnail · Openverse music · earshot │
       ▼                                                                    │
  5 FINISH    captions.srt · /yt-seo description + tags (no chapters: Shorts)│
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
- **The viewer's moment first (lesson L16).** Sell what the viewer wants, not what the tech is. Write three lines at the top of `package.md`:
  *Who* (from `docs/voice.md`), *the pain today* as a scene they've lived ("you hit enter and wait; the bill at the end of the month"),
  and *the moment they're paying for* as a scene ("the answer is already there; the bill is half"). Every number in them traces to `research.md`.
  Titles, thumbnail and hook all sell that moment; the tech is only the proof.
- `/yt-package`: write 10 titles, run `python3 .claude/skills/yt-package/title.py titles.txt`, keep the top 3 with their scores and issues, pick one.
  Thumbnail text follows the brand card ("LEARN <TOPIC> IN 60 SECONDS", `docs/brand.md`); score the pair with `title.py --title "..." --thumb "..."`.
- `/yt-seo`: write the 3 searches this video should win; the title and the first two description lines must contain their words.
- **Out:** `package.md`: the viewer's moment (who, the pain, the moment), the 10 titles with scores, the top 3, the chosen title, the thumbnail text, the 3 searches.
- **Pass:** title at most 60 characters with the subject in the first 40; a number, name or date in it; besides the topic's name it repeats no thumbnail word
  (the topic's name may be in both, because search needs it in the title and the brand card carries it).

### 2b Lesson plan (strong)
Before any script: what will the viewer **learn**? Read every open `check: gate` lesson in `docs/lessons.md` first.
- **Out:** `lesson.md` (template in `docs/roles/content-gate.md`): the main idea in one sentence (the insight that changes how the viewer thinks,
  not the headline and not the mechanism), why it matters with its `research.md` row, the misconception it corrects, the 3 questions a viewer
  can answer afterwards (each with its answer and the picture that teaches it), and what is left out on purpose.
- The script (step 3) is written to teach exactly this; a line that serves none of the 3 questions is cut.

### 3 Script (strong)
`/yt-script`, scaled to 60 seconds:
- **Hook: one clear sentence the viewer can picture (lesson L16).** It names the topic and paints the viewer's moment from `package.md`,
  e.g. "Imagine running an open-source model that's faster and cheaper than the top ones." Plain words only: no architecture terms
  (layers, weights, tokens, parameters, loops) in the first sentence; the tech is the "how", later. It confirms the title's promise.
  Write at least 5 against the 21 formulas (`.claude/skills/yt-script/hooks.json`) and score them (`python3 .claude/skills/yt-script/hookscore.py hooks.txt`):
  the score is a check, not the target. Pick by the **3-second test**: would someone who doesn't know the tech say what this video gives them after the first sentence?
  Among hooks that pass it, take the higher score; below 72 (WEAK/WORKABLE), look again. Every number stays true; never invent one to raise the score.
  Keep the top two with their panels. Tension beats a template: a claim people repeat that the video corrects ("People say X is dead; it isn't"),
  or the outcome itself; never the "Before, you'd ..., but how?" frame, and never ending on "but how?" (lessons L25, L31).
  Numbers on screen are whole ("about 4", not 4.15); decimals belong in the description (lesson L31).
- **Turn** (by about 10 s): one sentence saying what the video will do, then do it. No channel intro, no subscribe pitch here.
- **Body, in this order:** *before*: the viewer's pain as a scene; *now*: the same scene with the new tech; *how*: the tech in one or two beats
  with the BEFORE vs NEW diagram; *why it helps you*: the outcome, with its sourced number. One idea per beat, each marked `[ON SCREEN: ...]`.
  The story the episode borrows (a shop, an army, a kitchen) is how the scenes are drawn, not a detour from them.
- **The flow the owner chose (lesson L25):** one concrete, counted example carried from the first beat to the last ("31 meetings in January",
  "30 questions about one 100-page PDF"); a meter on screen for what the viewer pays (tokens, minutes, money) that visibly fills in *before*
  and barely moves in *now*, on the same example; the *how* told on one diagram that grows piece by piece, with a highlight on whatever the voice names
  (each highlight move or new piece counts as a new shot for lesson L1); the proof is the maker's own number, then one bigger-scale example if the sources give one.
  The look stays ours (`docs/brand.md`): patterns from other channels, never their look.
- **Payoff:** deliver what the hook promised, out loud, and say you are delivering it.
- **Close (owner, lesson L32):** a conclusion that starts "So, what we learned:" and restates the before -> after on the counted example in one sentence
  (this is also the payoff, said out loud), then the ask: "Want more? Subscribe, and comment what we should explain next." On screen: a "WHAT WE LEARNED" card, then the Subscribe button with a comment button.
- **Out:** `beats.md` (the two hooks with panels and the formula, then a table: time, spoken line, ON SCREEN, purpose: hook/turn/beat/payoff/close),
  `script.md` (spoken text only, sections hook, before, new, why, takeaway, outro), `film/script.txt` (as spoken: numbers in words, names respelled for the voice).
- **Pass:** the hook passes the 3-second test with no jargon and scores 72 or more; about 150 words, so the voice fits in 60 s (Ivan's voice speaks about 155 words a minute).

### 3a Content gate (a fresh Sonnet student and a fresh strong critic; `docs/roles/content-gate.md`)
- The writer writes `viewer.md` (only what the viewer hears and sees); the student reads only that, states the main idea and answers the 3 questions; the critic scores G1-G12 (must-fix blocks; should-fix is fixed when it fits).
- **Out:** `gate.md`, first line `gate: pass (N should-fix)` or `gate: fail (N must-fix, M should-fix)`, each with a fix and a general rule.
- **Pass:** no must-fix left. On fail, rewrite `lesson.md`/the script and run a fresh gate; at most 3 rounds, then the owner decides.
  Copy every fail to `mistakes.md`; every rule becomes a `check: gate` lesson (in the daily run, the learn job writes it). Nothing is voiced before the gate passes.

### 3b Claim check (Sonnet, a fresh agent that did not write the script)
- Every claim in `script.md`, the ON SCREEN lines of `beats.md` and the title and thumbnail, checked against the source itself (lesson L17).
- **Out:** `claims.md`: claim | source and quoted sentence | holds, narrower or wrong.
- **Pass:** nothing narrower or wrong left; fix the words before anything is voiced or drawn.

### 4 Make (Sonnet; the strong model takes over a step that fails twice)
- stickman: `new_film.py`, then `scripts/film-9x16.sh film` (every film is vertical 1080 x 1920; layout and safe area: `docs/brand.md`), `film.js` from `beats.md` (every beat's ON SCREEN), the voice (`.skills/chatterbox-venv/bin/python scripts/voice.py film film/script.txt --no-align`: Ivan's voice, `docs/voice.md`),
  stills of every shot checked by eye first, then one full `build.py`; after that only `build.py ... --shots <n>` for the shots an audit names or a fix changed
  (after a re-voice, also every shot whose cut frames moved in `film/film.json`: lesson L18), until the audit says `ISSUES 0`; copied to `video.mp4`.
- Brand on screen (`docs/brand.md`): title card from frame 0, corner tag on every frame, takeaway card, Subscribe button (with the next episode's name under it only when it is decided; otherwise nothing, lesson L24).
- Music: the signature track (`python scripts/music.py get efa007f6-a5fe-420c-a1a6-8d5dafa95005 film/music.mp3`, credit in `music.json`), about 16 dB under the voice.
- Thumbnail: `film/thumb.js` + `film/thumb.py` from the brand template, checked at 160 px wide.
- Listen: `earshot measure`, `describe`, `timeline --video`, `sheet`.
- **Pass:** audit `ISSUES 0`; -17 LUFS within 1; no noise or hum tag; at most 60 s.

### 5 Finish the package (Sonnet)
- `captions.srt` from `film/vo_lines.json` (plus the voice offset).
- No chapters: Shorts don't show them (vertical only, `docs/brand.md`).
- `/yt-seo`: description (first two lines = the 3 searches' words, then the link, then the long version with sources and the music credit), up to 3 hashtags, at most 15 tags for spellings and tool names.
- **Out:** `upload.json`, `captions.srt`.
- **Pass:** `upload.json` has no chapter lines.

### 6 Judge (strong, a fresh agent that did not make the episode)
Follow `docs/roles/evaluator.md`. The rubric is the youtube-agent skills' published rules plus `docs/brand.md` and `docs/lessons.md`, not the maker's opinion.
- **Out:** `evaluation.md`, first line `ready to publish` or `not ready: N must-fix`.
- Must-fix goes back to step 3 (words) or step 4 (picture and sound), then a fresh judge re-checks only the failed rows and the rows whose inputs changed
  (`docs/roles/evaluator.md`, "Re-judge"). Real retention later outranks every judge.
- Every mistake on the way (claim check, stills, audits, redone commands, each judge round's rows) goes in `mistakes.md`, so it becomes a lesson.

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
- **Measured:** each episode's `trace.md` (from `scripts/pipeline-trace.py`): total minutes, tokens and cost per model, each subagent's minutes, the slowest calls, how many builds and judges.
- **Learning:** after the day's episodes, the `learn` job (`docs/pipeline/learn.md`) reads each `mistakes.md`, `evaluation.md` and `trace.md` and writes every mistake into `docs/lessons.md`:
  a new lesson, or `Repeated:` on an open one plus a harder rule (a must-fix in `docs/roles/evaluator.md` or a line in "Known traps" of `docs/pipeline/episode.md`).
  It commits only those three files to `develop` after `make check`. The next run reads them before step 1.
- **Watching a video:** each run keeps `video.mp4` and `thumbnail.png` for 30 days as a download on the run's page (Actions -> the run -> Artifacts); the video itself is never committed.
  When the YouTube upload fails (e.g. the daily upload cap), `video.mp4`, `thumbnail.png`, `upload.json` and `captions.srt` are also copied to Google Drive, `youtube-skill/not-uploaded/<slug>/` (no expiry; needs secret `RCLONE_CONF`).
- **Manual run:** Actions -> daily-videos -> Run workflow (optional video count, dry run that uploads nothing, or a topic you choose: a link or a sentence, which makes 1 video of it).
  From a terminal: `gh workflow run daily-videos -f topic=<link>`.
- **One-time owner setup:** repo secrets `CLAUDE_CODE_OAUTH_TOKEN` (`claude setup-token`), `YOUTUBE_CLIENT_SECRET_JSON` and `YOUTUBE_TOKEN_JSON`
  (the two files in `~/.config/youtube-skill/`), `RCLONE_CONF` (`rclone config create gdrive drive scope=drive.file`, then
  `gh secret set RCLONE_CONF < ~/.config/rclone/rclone.conf`; without it the Drive copy is skipped with a warning), and the Google OAuth app published (in Testing its sign-in expires every 7 days).

## Where we deviate from the skills, on purpose
| Skill rule | Ours | Why |
|---|---|---|
| `/yt-package`: at most 3 words on the thumbnail, never repeat the title | The brand card "LEARN <TOPIC> IN 60 SECONDS"; only the topic's name may repeat | The owner's thumbnail rule (lessons L7, L8); checked readable at 160 px |
| `/yt-script`: show the top two hooks | Also: the hook passes the 3-second test (the viewer's moment, plain words); the score is a check at 72, not a target of 100 | The owner's rule (2026-11-22, lesson L16; replaces "must score 100", which pushed hooks into jargon) |
| `/yt-script`: the turn by 0:15-0:45 | By about 10 s; the topic in the first second (title card) | Our videos are 60 s; lesson L14 |
| `/yt-plan`: three uploads a week including Shorts | Every video is a vertical Short (9:16) | The owner chose vertical only (2026-11-24) |
| `/yt-edit` | Not used | It edits camera recordings; ours are rendered from code |
