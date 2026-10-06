import os
import re

search_hexes = [
    "#7dd3fc", "#12d9ff", "#0ae1ff", "#2ae7ff", "#0a7eff", "#1d89ff",
    "#94a3b8", "#cbd5e1", "#e2e8f0", "#f1f5f9", "#25D366", "#128C7E",
    "#20ba59", "#0A1B2C", "#06111e", "#f7fbff", "#f5fbff",
    "#050505", "#006BFF", "#1687FF", "#00CFFF", "#0B1B33", "#07141F", "#B8F04D",
    "rgba(244, 248, 252", "rgba(16, 42, 67"
]

tailwind_prefixes = [
    r'\bbg-white\b', r'\btext-white\b',
    r'\bslate-[a-z0-9/]+', r'\bgray-[a-z0-9/]+', r'\bzinc-[a-z0-9/]+',
    r'\bblue-[a-z0-9/]+', r'\bcyan-[a-z0-9/]+', r'\bsky-[a-z0-9/]+',
    r'\bemerald-[a-z0-9/]+', r'\bgreen-[a-z0-9/]+', r'\bamber-[a-z0-9/]+', r'\bred-[a-z0-9/]+'
]

scan_dirs = ["src", "public"]
exclude_files = ["global.css"] # global.css defines the canonical tokens and aliases

hex_matches = []
tw_matches = []

for sdir in scan_dirs:
    for root, dirs, files in os.walk(sdir):
        for f in files:
            filepath = os.path.join(root, f)
            relpath = os.path.relpath(filepath).replace('\\', '/')
            if f in exclude_files:
                continue
            
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                for idx, line in enumerate(fp, 1):
                    # check hex
                    for hx in search_hexes:
                        if hx.lower() in line.lower():
                            hex_matches.append((relpath, idx, hx, line.strip()))
                    
                    # check tailwind
                    for tw in tailwind_prefixes:
                        m = re.findall(tw, line)
                        if m:
                            tw_matches.append((relpath, idx, m, line.strip()))

print("=== HEX / OLD VALUE MATCHES OUTSIDE GLOBAL.CSS ===")
print(f"Total: {len(hex_matches)}")
for rm, lno, hx, content in hex_matches:
    print(f"[{rm}:{lno}] Found {hx}: {content[:100]}")

print("\n=== TAILWIND COLOR UTILITIES OUTSIDE GLOBAL.CSS ===")
print(f"Total: {len(tw_matches)}")
for rm, lno, m, content in tw_matches:
    print(f"[{rm}:{lno}] Found {m}: {content[:100]}")
