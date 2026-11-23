#!/usr/bin/env python3
"""Time every action of a `claude -p --output-format stream-json --verbose` run.

    claude -p ... --output-format stream-json --verbose | scripts/pipeline-trace.py <raw.jsonl> <trace.md>
    scripts/pipeline-trace.py --selftest

Prints one line per tool call as it starts (so the Actions log shows progress) and the final answer, keeps the raw
stream with arrival times in <raw.jsonl>, and writes <trace.md>: total time, tokens and cost per model, each subagent
with its time, the slowest calls, and how many builds and judges ran. trace.md holds tool names and the first words
of each command only, never tool output, so nothing a tool printed (web pages, env) is committed.
"""
import json, sys, time


def short(inp):
    for k in ("description", "command", "file_path", "pattern", "url", "prompt"):
        if isinstance(inp, dict) and inp.get(k):
            return " ".join(str(inp[k]).split())[:90]
    return ""


def read(lines, raw, now=time.monotonic, update=lambda calls, result: None):
    t0, calls, open_, result = now(), [], {}, {}
    for line in lines:
        t = now() - t0
        raw.write(json.dumps({"t": round(t, 1), "line": line.rstrip("\n")}) + "\n")
        try:
            d = json.loads(line)
        except ValueError:
            continue
        msg = d.get("message") if isinstance(d.get("message"), dict) else {}
        for c in msg.get("content") if isinstance(msg.get("content"), list) else []:
            if c.get("type") == "tool_use":
                call = {"id": c.get("id"), "name": c.get("name", "?"), "what": short(c.get("input")), "start": t, "end": None,
                        "sub": bool(d.get("parent_tool_use_id")), "build": "build.py" in json.dumps(c.get("input"))}
                calls.append(call)
                open_[call["id"]] = call
                print(f"[{t / 60:6.1f} min] {'  ' if call['sub'] else ''}{call['name']}: {call['what']}", flush=True)
            elif c.get("type") == "tool_result" and c.get("tool_use_id") in open_:
                open_.pop(c["tool_use_id"])["end"] = t
                update(calls, result)  # a timed-out run still leaves its trace
        if d.get("type") == "result":
            result = d
            print(d.get("result") or "", flush=True)
    return calls, result


def report(calls, result):
    last = max([c["end"] or c["start"] for c in calls] or [0])
    dur = lambda c: (c["end"] if c["end"] is not None else last) - c["start"]
    total = (result.get("duration_ms") or 0) / 60000 or last / 60
    out = ["# Run trace", "", "Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.", "",
           f"- Total: {total:.1f} min, {result.get('num_turns', '?')} turns, ${result.get('total_cost_usd', 0) or 0:.2f} (list price; the run is on the owner's plan)",
           f"- Builds (`build.py`): {sum(c['build'] for c in calls)}; judges (subagents with \"judge\" in the brief): "
           f"{sum(c['name'] in ('Agent', 'Task') and 'judge' in c['what'].lower() for c in calls)}",
           f"- Ended: {result.get('subtype', 'no result (killed or timed out)')}", "", "## Tokens per model", "",
           "| model | input | output | cache read | cache write | cost |", "|---|---|---|---|---|---|"]
    for m, u in (result.get("modelUsage") or {}).items():
        out.append(f"| {m} | {u.get('inputTokens', 0):,} | {u.get('outputTokens', 0):,} | {u.get('cacheReadInputTokens', 0):,} | "
                   f"{u.get('cacheCreationInputTokens', 0):,} | ${u.get('costUSD', 0) or 0:.2f} |")
    out += ["", "## Subagents", "", "| start | minutes | brief |", "|---|---|---|"]
    out += [f"| {c['start'] / 60:.1f} | {dur(c) / 60:.1f} | {c['what']} |" for c in calls if c["name"] in ("Agent", "Task")]
    out += ["", "## Slowest 10 calls", "", "| start | minutes | tool | what |", "|---|---|---|---|"]
    out += [f"| {c['start'] / 60:.1f} | {dur(c) / 60:.1f} | {c['name']}{' (sub)' if c['sub'] else ''} | {c['what']} |"
            for c in sorted((c for c in calls if c["name"] not in ("Agent", "Task")), key=dur, reverse=True)[:10]]
    return "\n".join(out) + "\n"


def selftest():
    import io
    ev = [{"type": "assistant", "message": {"content": [{"type": "tool_use", "id": "a", "name": "Bash", "input": {"command": "cd " + "x" * 100 + "; python build.py film"}}]}},
          {"type": "user", "message": {"content": [{"type": "tool_result", "tool_use_id": "a", "content": "SECRET output"}]}},
          {"type": "assistant", "message": {"content": [{"type": "tool_use", "id": "b", "name": "Agent", "input": {"description": "Fresh judge, step 6"}}]}},
          {"type": "assistant", "parent_tool_use_id": "b", "message": {"content": [{"type": "tool_use", "id": "c", "name": "Read", "input": {"file_path": "x.md"}}]}},
          {"type": "user", "message": {"content": [{"type": "tool_result", "tool_use_id": "b"}]}},
          {"type": "result", "subtype": "success", "duration_ms": 600000, "num_turns": 7, "total_cost_usd": 1.5, "result": "done",
           "modelUsage": {"claude-opus-5-5": {"inputTokens": 10, "outputTokens": 2000, "costUSD": 1.5}}}]
    ticks = iter(range(0, 1000, 60))
    calls, res = read([json.dumps(e) + "\n" for e in ev] + ["not json\n"], io.StringIO(), now=lambda: next(ticks))
    md = report(calls, res)
    assert [c["name"] for c in calls] == ["Bash", "Agent", "Read"], calls
    assert calls[0]["end"] - calls[0]["start"] == 60 and calls[2]["sub"], calls
    assert "Total: 10.0 min" in md and "Builds (`build.py`): 1" in md and "judges" in md and ": 1" in md, md
    assert "| claude-opus-5-5 | 10 | 2,000 |" in md and "SECRET" not in md, md
    assert "no result" in report([], {}), "a killed run still gets a report"
    print("ok")


if __name__ == "__main__":
    if sys.argv[1:] == ["--selftest"]:
        selftest()
        sys.exit()
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    def write(calls, result):
        with open(sys.argv[2], "w") as f:
            f.write(report(calls, result))

    with open(sys.argv[1], "w") as raw:
        calls, result = read(sys.stdin, raw, update=write)
    write(calls, result)
    sys.exit(1 if result.get("is_error") else 0)
