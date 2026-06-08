import json

transcript = r"C:\Users\Honor\.cursor\projects\c-Users-Honor-Desktop-Proekt-repetitor-5-klass-proekt-repetitor-5-klass\agent-transcripts\75f3dfdb-59e5-4333-84b2-192bbc360524\75f3dfdb-59e5-4333-84b2-192bbc360524.jsonl"
base_path = r"C:\Users\Honor\Desktop\КУРСОР\Proekt_repetitor_5_klass\proekt_repetitor_5_klass\_extracted_index.html"
out_path = r"C:\Users\Honor\Desktop\КУРСОР\Proekt_repetitor_5_klass\proekt_repetitor_5_klass\_rebuilt_index.html"

with open(base_path, encoding="utf-8") as f:
    html = f.read()

applied = 0
skipped = 0
with open(transcript, encoding="utf-8") as f:
    for line in f:
        obj = json.loads(line)
        for part in obj.get("message", {}).get("content", []):
            if part.get("type") != "tool_use":
                continue
            name = part.get("name")
            inp = part.get("input", {})
            if not isinstance(inp, dict):
                continue
            if "index.html" not in inp.get("path", ""):
                continue
            if name == "Write" and str(inp.get("contents", "")).startswith("<!DOCTYPE"):
                html = inp["contents"]
                applied += 1
            elif name == "StrReplace":
                old = inp.get("old_string", "")
                new = inp.get("new_string", "")
                if old in html:
                    html = html.replace(old, new, 1)
                    applied += 1
                else:
                    skipped += 1

open(out_path, "w", encoding="utf-8").write(html)
print("applied", applied, "skipped", skipped, "len", len(html))
