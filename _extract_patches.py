import json

path = r"C:\Users\Honor\.cursor\projects\c-Users-Honor-Desktop-Proekt-repetitor-5-klass-proekt-repetitor-5-klass\agent-transcripts\75f3dfdb-59e5-4333-84b2-192bbc360524\75f3dfdb-59e5-4333-84b2-192bbc360524.jsonl"
out = r"C:\Users\Honor\Desktop\КУРСОР\Proekt_repetitor_5_klass\proekt_repetitor_5_klass\_patches.txt"
lines_out = []
with open(path, encoding="utf-8") as f:
    for i, line in enumerate(f):
        obj = json.loads(line)
        for part in obj.get("message", {}).get("content", []):
            if part.get("type") != "tool_use" or part.get("name") != "StrReplace":
                continue
            inp = part.get("input", {})
            if "index.html" not in inp.get("path", ""):
                continue
            lines_out.append(f"=== PATCH line {i} ===\nNEW:\n{inp.get('new_string', '')}\n\n")
open(out, "w", encoding="utf-8").write("".join(lines_out))
print("wrote", len(lines_out), "patches")
