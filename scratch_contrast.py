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
print(f'#5CA9FF on #050505: {contrast("#5CA9FF", "#050505"):.2f}:1')
print(f'#EE0000 on #050505: {contrast("#EE0000", "#050505"):.2f}:1')
print(f'#8F8F8F on #050505: {contrast("#8F8F8F", "#050505"):.2f}:1')
