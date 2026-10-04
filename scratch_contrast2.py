def lum(c):
    c = c / 255.0
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
def rel_lum(h):
    h = h.lstrip('#')
    r, g, b = tuple(int(h[i:i+2], 16) for i in (0, 2, 4))
    return 0.2126 * lum(r) + 0.7152 * lum(g) + 0.0722 * lum(b)
def contrast(c1, c2):
    l1 = rel_lum(c1); l2 = rel_lum(c2)
    return (max(l1, l2) + 0.05) / (min(l1, l2) + 0.05)
print(f'#FF4444 on #050505: {contrast("#FF4444", "#050505"):.2f}:1')
print(f'#FF5555 on #050505: {contrast("#FF5555", "#050505"):.2f}:1')
print(f'#6B6B6B on #050505: {contrast("#6B6B6B", "#050505"):.2f}:1')
print(f'#555555 on #050505: {contrast("#555555", "#050505"):.2f}:1')
