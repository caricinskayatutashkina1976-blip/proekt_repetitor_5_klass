import json

path = r"C:\Users\Honor\.cursor\projects\c-Users-Honor-Desktop-Proekt-repetitor-5-klass-proekt-repetitor-5-klass\agent-transcripts\75f3dfdb-59e5-4333-84b2-192bbc360524\75f3dfdb-59e5-4333-84b2-192bbc360524.jsonl"
out = r"C:\Users\Honor\Desktop\КУРСОР\Proekt_repetitor_5_klass\proekt_repetitor_5_klass\_screen_start_snippet.html"
with open(path, encoding="utf-8") as f:
    for i, line in enumerate(f):
        if i != 177:
            continue
        obj = json.loads(line)
        for part in obj.get("message", {}).get("content", []):
            if part.get("type") != "tool_use" or part.get("name") != "StrReplace":
                continue
            inp = part["input"]
            ns = inp.get("new_string", "")
            if ns.startswith("    <section id=\"screen-start\""):
                open(out, "w", encoding="utf-8").write(ns)
                print("saved", len(ns))
