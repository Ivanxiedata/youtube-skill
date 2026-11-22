#!/usr/bin/env python3
"""Fill a docs/pipeline/*.md prompt template: pipeline-prompt.py <template> KEY=VALUE ... > prompt.txt

Every {{KEY}} in the template must be given, and every given KEY must be used, so a renamed placeholder fails loudly.
"""
import re, sys

if len(sys.argv) < 2:
    sys.exit(__doc__)
text = open(sys.argv[1]).read()
values = dict(a.split("=", 1) for a in sys.argv[2:])
wanted = set(re.findall(r"\{\{([A-Z_]+)\}\}", text))
if wanted - values.keys():
    sys.exit(f"pipeline-prompt: {sys.argv[1]} needs {sorted(wanted - values.keys())}")
if values.keys() - wanted:
    sys.exit(f"pipeline-prompt: {sys.argv[1]} has no {sorted(values.keys() - wanted)}")
sys.stdout.write(re.sub(r"\{\{([A-Z_]+)\}\}", lambda m: values[m.group(1)], text))
