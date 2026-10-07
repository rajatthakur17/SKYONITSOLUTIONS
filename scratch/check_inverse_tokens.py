import os

tokens = [
    "text-inverse",
    "text-inverse-body",
    "surface-inverse",
    "accent-warm",
    "accent-inverse"
]

matches = []

for root, dirs, files in os.walk("src"):
    for f in files:
        if f == "global.css":
            continue
        filepath = os.path.join(root, f)
        relpath = os.path.relpath(filepath).replace('\\', '/')
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
            for idx, line in enumerate(fp, 1):
                for tok in tokens:
                    if tok in line:
                        matches.append((relpath, idx, tok, line.strip()))

print(f"=== DEPRECATED INVERSE TOKENS OUTSIDE GLOBAL.CSS (Total: {len(matches)}) ===")
for rm, idx, tok, line in matches:
    print(f"[{rm}:{idx}] {tok}: {line}")
