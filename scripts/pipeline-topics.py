#!/usr/bin/env python3
"""Check the planner's pipeline-topics.json and print it as one line for the job matrix.

    pipeline-topics.py pipeline-topics.json <max> [episodes-dir]

Drops nothing silently: a bad entry stops the run with one line naming it.
"""
import json, os, re, sys

if len(sys.argv) < 3:
    sys.exit(__doc__)
path, most = sys.argv[1], int(sys.argv[2])
episodes = sys.argv[3] if len(sys.argv) > 3 else "episodes"
topics = json.load(open(path))
if not isinstance(topics, list):
    sys.exit("pipeline-topics: want a JSON list")
if len(topics) > most:
    sys.exit(f"pipeline-topics: {len(topics)} topics, at most {most} allowed")
seen = set()
for i, t in enumerate(topics):
    if not isinstance(t, dict):
        sys.exit(f"pipeline-topics: entry {i} is not an object")
    for k in ("slug", "topic", "before", "aha", "sources"):
        if not t.get(k):
            sys.exit(f"pipeline-topics: entry {i} has no {k}")
    s = t["slug"]
    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", s) or len(s) > 60:
        sys.exit(f"pipeline-topics: bad slug {s!r}")
    if s in seen or os.path.exists(os.path.join(episodes, s)):
        sys.exit(f"pipeline-topics: slug {s!r} repeats an episode")
    if not all(isinstance(u, str) and u.startswith("https://") for u in t["sources"]):
        sys.exit(f"pipeline-topics: {s}: sources must be https URLs")
    for k in ("topic", "before", "aha"):
        t[k] = " ".join(str(t[k]).split())  # one line, for the prompt
    seen.add(s)
print(json.dumps([{"slug": t["slug"], "topic": t["topic"], "before": t["before"], "aha": t["aha"], "sources": " ".join(t["sources"])} for t in topics], separators=(",", ":")))
