# episode

## Goal
Before anyone spends time rendering, tell whether an episode's brief and script are complete and
correct enough to make the 60-second video, listing every problem at once.

## Users
Agents producing an episode (they run the check after writing the brief and script), and the owner
reviewing an episode before render.

## Data (draft: final field names are settled by Episode 0)
One folder per video: `episodes/<slug>/`.

`brief.json`, written by an agent from the Deep-Research output:
```json
{
  "slug": "mcp",
  "tech":        { "id": "mcp", "name": "Model Context Protocol", "released": "2024-11", "one_line": "..." },
  "predecessor": { "id": "function-calling", "name": "Function calling" },
  "sections": {
    "hook":   { "text": "...", "claims": [] },
    "before": { "text": "...", "claims": [{ "text": "...", "source": "https://..." }] },
    "new":    { "text": "...", "claims": [...] },
    "why":    { "text": "...", "claims": [...] },
    "how":    { "text": "...", "claims": [...] },
    "outro":  { "text": "...", "claims": [] }
  },
  "architecture": {
    "before": { "nodes": [{ "id": "app", "label": "App" }], "edges": [{ "from": "app", "to": "llm", "label": "" }] },
    "after":  { "nodes": [...], "edges": [...] }
  }
}
```
`script.md`: the narration, one `## <section>` heading per section in the order above, spoken text only.

The `Brief` type and its loader live in `shared/brief/`, because `lineage` and `diagram` read briefs too.

## Acceptance criteria
`[ ]` = not built yet. `[x]` = built, and must end with the test that proves it (`-> TestName`); `make check` verifies.
- [ ] A complete example episode in `episode/testdata/ok/` passes with no problems.
- [ ] A missing section (brief or script) gives a problem naming the section.
- [ ] A claim with an empty or non-http(s) source gives a problem quoting the claim.
- [ ] A missing predecessor, or a predecessor id equal to the tech id, gives a problem.
- [ ] Script total outside 135-165 words gives a problem with the count (60s at ~2.5 words/s).
- [ ] A section over its time budget (format table in `docs/product.md`, 2.5 words/s, +20% slack)
      gives a problem naming the section, its words and its limit.
- [ ] An architecture side with 0 nodes, or an edge pointing at an unknown node id, gives a problem.
- [ ] All problems are returned together, not just the first.

## Non-goals
- Writing the brief or script (agents + the research and YouTube skills do that).
- Checking that a source actually supports its claim (the reviewer does that).
- Rendering anything.

## Interfaces
- Uses from `shared/`: `shared/brief` (`Brief`, `Load(dir)`), created together with this feature.
- Exposes to `cmd/`: `episode.Check(dir string) []Problem`, where `Problem` has `Section` and `Message`.
- Used by: `cmd/yt check episodes/<slug>`.

## Later
After v1; probably will build (unlike Non-goals).
- Formats other than 60s (e.g. 3-minute deep dives): a time-budget table per length.
- A jargon check: flag technical words in the script that no earlier sentence explains.
- Generate a `script.md` skeleton (headings + word budgets) from the brief.

## Verification
`make check-episode`. Manual: `go run ./cmd/yt check episode/testdata/ok` prints `ok`;
on `episode/testdata/bad` it prints one line per problem and exits 1.

## Open questions (answer from Episode 0, then update this spec)
1. Final brief fields: what the research output naturally gives vs what we had to invent.
2. Real words per second of the chosen voice (the stickman skill's free TTS), which sets the word limits.
