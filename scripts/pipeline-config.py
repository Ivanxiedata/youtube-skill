#!/usr/bin/env python3
"""Read and check pipeline.yaml, then print its values as key=value lines for $GITHUB_OUTPUT.

    scripts/pipeline-config.py pipeline.yaml [--videos N]   # N overrides videos_per_day (manual runs)
    scripts/pipeline-config.py --selftest

A bad value stops the run with one line naming the key, so a typo never silently changes what gets published.
"""
import json, re, sys

MODEL = re.compile(r"^(opus|sonnet|haiku|claude-[a-z0-9.-]+)$")


def check(c):
    def get(path, ok, why):
        v = c
        for k in path.split("."):
            if not isinstance(v, dict) or k not in v:
                raise SystemExit(f"pipeline.yaml: {path} is missing")
            v = v[k]
        if not ok(v):
            raise SystemExit(f"pipeline.yaml: {path} = {v!r}: {why}")
        return v

    out = {
        "enabled": get("enabled", lambda v: isinstance(v, bool), "want true or false"),
        "videos": get("videos_per_day", lambda v: isinstance(v, int) and not isinstance(v, bool) and 0 <= v <= 10, "want 0-10"),
        "when_ready": get("publish.when_ready", lambda v: v in ("public", "unlisted", "private"), "want public, unlisted or private"),
        "otherwise": get("publish.otherwise", lambda v: v in ("private", "skip"), "want private or skip"),
        "max_fix_rounds": get("max_fix_rounds", lambda v: isinstance(v, int) and 0 <= v <= 3, "want 0-3"),
        "timeout": get("episode_timeout_minutes", lambda v: isinstance(v, int) and 30 <= v <= 355, "want 30-355"),
        "focus": get("topics.focus", lambda v: isinstance(v, str) and v.strip(), "want a sentence"),
        "max_age_days": get("topics.max_age_days", lambda v: isinstance(v, int) and v > 0, "want a positive number"),
        "refresh_days": get("topics.refresh_viral_study_days", lambda v: isinstance(v, int) and v > 0, "want a positive number"),
        "claude_version": get("claude_code_version", lambda v: isinstance(v, str) and re.fullmatch(r"\d+\.\d+\.\d+", v), "want a version like 2.1.330"),
    }
    for role in ("planner", "maker", "worker", "judge", "learner"):
        out["model_" + role] = get("models." + role, lambda v: isinstance(v, str) and MODEL.match(v), "want opus, sonnet, haiku or a claude-* id")
    return out


def emit(out):
    for k, v in out.items():
        v = str(v).lower() if isinstance(v, bool) else str(v)
        if "\n" in v:
            raise SystemExit(f"pipeline.yaml: {k} must be one line")
        print(f"{k}={v}")


def selftest():
    good = {"enabled": True, "videos_per_day": 3, "publish": {"when_ready": "public", "otherwise": "skip"}, "max_fix_rounds": 1,
            "episode_timeout_minutes": 240, "topics": {"focus": "x", "max_age_days": 120, "refresh_viral_study_days": 7},
            "models": {"planner": "opus", "maker": "opus", "worker": "sonnet", "judge": "claude-opus-5-5", "learner": "opus"}, "claude_code_version": "2.1.330"}
    assert check(good)["videos"] == 3
    for path, bad in [("videos_per_day", 11), ("videos_per_day", True), ("enabled", "yes"), ("publish.when_ready", "live"),
                      ("models.worker", "gpt-5"), ("claude_code_version", "latest"), ("episode_timeout_minutes", 400)]:
        c = json.loads(json.dumps(good))
        d = c
        *head, last = path.split(".")
        for k in head:
            d = d[k]
        d[last] = bad
        try:
            check(c)
        except SystemExit as e:
            assert path in str(e), e
        else:
            raise AssertionError(f"{path}={bad!r} was accepted")
    print("ok")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a == ["--selftest"]:
        selftest()
        sys.exit()
    if not a:
        sys.exit(__doc__)
    import yaml  # PyYAML; the workflow installs it

    with open(a[0]) as f:
        out = check(yaml.safe_load(f))
    if "--videos" in a:
        n = a[a.index("--videos") + 1]
        if n.strip():
            if not n.isdigit() or not 0 <= int(n) <= 10:
                raise SystemExit(f"--videos {n!r}: want 0-10")
            out["videos"] = int(n)
    if not out["enabled"]:
        out["videos"] = 0
    emit(out)
