import os

matches = []

for root, dirs, files in os.walk("src"):
    for f in files:
        if f == "global.css":
            continue
        filepath = os.path.join(root, f)
        relpath = os.path.relpath(filepath).replace('\\', '/')
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
            for idx, line in enumerate(fp, 1):
                if any(w in line for w in ["success", "warning", "#22c55e", "#f59e0b", "#22C55E", "#F59E0B"]):
                    matches.append((relpath, idx, line.strip()))

print(f"=== SUCCESS & WARNING USAGES IN SRC (Total: {len(matches)}) ===")
for rm, idx, line in matches:
    safe_line = line.encode('ascii', errors='replace').decode('ascii')
    print(f"[{rm}:{idx}] {safe_line}")
