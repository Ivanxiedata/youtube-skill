#!/usr/bin/env python3
"""Find and fetch background music through Openverse (openverse.org), the search engine for openly licensed media.

    scripts/music.py search "upbeat instrumental" [--min 60] [--max 600] [--n 10]
    scripts/music.py get <openverse-id> <dest.mp3>      # also writes <dest>.json: source, licence, credit line, sha256
    scripts/music.py selftest

Only licences that allow use in a monetised video without licensing the video itself are accepted: CC0, public domain
mark and CC BY (credit required: paste the `attribution` from the .json into the video description).
NC (no commercial use), ND (no adaptations: a soundtrack is one) and SA (the video would inherit the licence) are refused.
The order of the results is Openverse's own ranking; its API exposes no play counts, so "popular" can't be measured here.
Stdlib only. The downloaded file is untrusted data: decode it with ffmpeg, never execute or import anything from it.
"""
import argparse, hashlib, json, sys, urllib.parse, urllib.request

API = "https://api.openverse.org/v1/audio/"
UA = "youtube-skill/0.1 (+https://github.com/Ivanxiedata/youtube-skill)"
OK_LICENCES = ("cc0", "pdm", "by")


def allowed(licence):
    return (licence or "").lower() in OK_LICENCES


def fetch(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60) as r:
        return r.read()


def search(a):
    seen, rows = set(), []
    for page in (1, 2, 3):
        q = urllib.parse.urlencode({"q": a.words, "license": ",".join(OK_LICENCES), "page_size": 20, "page": page})
        d = json.loads(fetch(API + "?" + q))
        for r in d.get("results", []):
            secs = (r.get("duration") or 0) / 1000
            if r["id"] in seen or not allowed(r.get("license")) or not a.min <= secs <= a.max:
                continue
            seen.add(r["id"])
            words = " ".join([r.get("title") or ""] + [t.get("name", "") for t in r.get("tags") or []]).lower()
            rows.append((len(rows) + 1, r["id"], r["license"], round(secs), r.get("source"), "instr" if "instrumental" in words else "-",
                         (r.get("title") or "")[:44], (r.get("creator") or "")[:22]))
        if page >= d.get("page_count", 1) or len(rows) >= a.n:
            break
    for row in rows[: a.n]:
        print("%2d  %s  %-3s %4ds  %-9s %-5s  %s  /  %s" % row)
    print(f"{len(rows[:a.n])} shown, in Openverse's ranking order. Listen before choosing (earshot describe / rank).")


def get(a):
    r = json.loads(fetch(API + urllib.parse.quote(a.id) + "/"))
    if not allowed(r.get("license")):
        sys.exit(f"music: licence {r.get('license')!r} is not allowed here (only {', '.join(OK_LICENCES)})")
    raw = fetch(r["url"])
    with open(a.dest, "wb") as f:
        f.write(raw)
    meta = {k: r.get(k) for k in ("id", "title", "creator", "creator_url", "license", "license_version", "license_url",
                                  "source", "foreign_landing_url", "attribution", "duration", "filetype")}
    meta.update(openverse_url="https://openverse.org/audio/" + r["id"], download_url=r["url"], sha256=hashlib.sha256(raw).hexdigest(), bytes=len(raw))
    with open(a.dest + ".json", "w") as f:
        json.dump(meta, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"{a.dest}: {len(raw) // 1024} KB, {r.get('license')} {r.get('license_version') or ''}, credit: {r.get('attribution')}")


def selftest(_):
    assert allowed("cc0") and allowed("BY") and allowed("pdm")
    assert not any(allowed(x) for x in ("by-nc", "by-nd", "by-sa", "by-nc-sa", "by-nc-nd", "", None))
    print("ok")


if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("search"); s.add_argument("words"); s.add_argument("--min", type=float, default=60)
    s.add_argument("--max", type=float, default=600); s.add_argument("--n", type=int, default=10); s.set_defaults(fn=search)
    g = sub.add_parser("get"); g.add_argument("id"); g.add_argument("dest"); g.set_defaults(fn=get)
    sub.add_parser("selftest").set_defaults(fn=selftest)
    a = p.parse_args()
    try:
        a.fn(a)
    except OSError as e:  # network errors and HTTP 404 for an unknown id
        sys.exit(f"music: {e}")
