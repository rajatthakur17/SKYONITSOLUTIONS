import os, re

hex_re = re.compile(r'#[0-9a-fA-F]{3,8}\b')
disallowed = []
allowed_files = [
    'global.css',
    'DESIGN.md',
    'light-theme-toggle-plan.md',
    'check_light_contrast.py',
    'measure_light_assets.py',
    'measure_assets.py',
    'search_tokens.py',
    'lime_proof.py',
    'check_status_tokens.py',
    'check_inverse_tokens.py',
    'verify_tokens_and_hex.py'
]

for root, dirs, files in os.walk('.'):
    if any(p in root for p in ['node_modules', 'dist', 'reference', 'backgoundim', '.agents', '.gemini', '.git', '.astro']):
        continue
    for f in files:
        if f.endswith(('.astro', '.ts', '.js', '.css', '.html')):
            if f in allowed_files:
                continue
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                for line_no, line in enumerate(fh, 1):
                    matches = hex_re.findall(line)
                    for m in matches:
                        # Exclude #top, #07141F in theme-color meta / inline script
                        if any(k in line for k in ['href="#top"', "href='#top'", 'meta name="theme-color"', "content', '#07141F'", "content', '#EAF6FF'"]):
                            continue
                        disallowed.append((path, line_no, m, line.strip()))

print(f"Total disallowed hex instances found: {len(disallowed)}")
for path, line_no, m, line in disallowed:
    print(f"  {path}:{line_no}: {m} -> {line}")
