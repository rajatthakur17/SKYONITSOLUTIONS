import os

matches = []

for root, dirs, files in os.walk("."):
    if any(ign in root for ign in ["node_modules", ".git", "dist", ".gemini", "reference", "backgoundim"]):
        continue
    for f in files:
        if f.endswith((".py", ".jsonl")):
            continue
        filepath = os.path.join(root, f)
        relpath = os.path.relpath(filepath).replace('\\', '/')
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
            for idx, line in enumerate(fp, 1):
                if "button-fill" in line or "#b8f04d" in line.lower():
                    matches.append((relpath, idx, line.strip()))

print(f"=== LIME PROOF SEARCH (Total: {len(matches)}) ===")
for rm, idx, line in matches:
    print(f"[{rm}:{idx}] {line}")
