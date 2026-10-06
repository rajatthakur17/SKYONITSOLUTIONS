# SKYON Design System

## Typography
- **Primary Font:** Manrope (Variable, self-hosted via `@fontsource-variable/manrope`)
- **Weights:** Variable (200–800)
- **Characteristics:** Modern, geometric sans-serif, clean, architectural, premium.

---

## Colour Palette

`src/styles/global.css` is the authoritative source for the implemented light theme.

| Token | Value | Use |
|---|---|---|
| `--color-canvas` | `#F4F8FC` | Page canvas and input fields |
| `--color-surface-1` | `#FFFFFF` | Cards and primary surfaces |
| `--color-surface-2` | `#EAF2F9` | Subtle highlighted surfaces |
| `--color-surface-inverse` | `#102A43` | Dark feature and CTA bands |
| `--color-text-primary` | `#102A43` | Headings and primary text |
| `--color-text-body` | `#334E68` | Body copy |
| `--color-text-muted` | `#486581` | Supporting text |
| `--color-text-disabled` | `#526C84` | Non-primary metadata |
| `--color-text-inverse` | `#F4F8FC` | Text on dark bands |
| `--color-text-inverse-body` | `#C7D4E1` | Body copy on dark bands |
| `--color-brand-primary` | `#1769AA` | Links, focus, badges, active states |
| `--color-brand-hover` | `#0E527F` | Link hover |
| `--color-button-fill` | `#1268D3` | Primary CTA background |
| `--color-button-text` | `#FFFFFF` | Primary CTA text |
| `--color-button-hover` | `#0E55AD` | Primary CTA hover |
| `--color-accent-warm` | `#B54736` | Small warm accent on light surfaces |
| `--color-accent-inverse` | `#F0A18F` | Small warm accent on dark surfaces |
| `--color-whatsapp` | `#00834F` | WhatsApp controls only |
| `--color-error` | `#B42318` | Error states |
| `--color-hairline` | `rgba(16, 42, 67, 0.14)` | Borders and dividers |

Use semantic tokens instead of hard-coded colors. Keep the warm accent limited to small labels and markers. Avoid unsupported client logos, testimonials, pricing, or performance metrics.

## WCAG Contrast

Ratios use the WCAG relative-luminance formula. AA requires 4.5:1 for normal text and 3:1 for large text and non-text UI indicators.

| Foreground | Background | Ratio |
|---|---|---:|
| `#102A43` | `#F4F8FC` | 13.72:1 |
| `#334E68` | `#F4F8FC` | 8.10:1 |
| `#486581` | `#F4F8FC` | 5.70:1 |
| `#526C84` | `#F4F8FC` | 5.13:1 |
| `#1769AA` | `#FFFFFF` | 5.77:1 |
| `#0E527F` | `#FFFFFF` | 8.29:1 |
| `#FFFFFF` | `#1268D3` | 5.32:1 |
| `#FFFFFF` | `#0E55AD` | 7.19:1 |
| `#B42318` | `#FFFFFF` | 6.57:1 |
| `#00834F` | `#FFFFFF` | 4.82:1 |
| `#B54736` | `#FFFFFF` | 5.36:1 |
| `#F0A18F` | `#102A43` | 7.11:1 |
| `#C7D4E1` | `#102A43` | 9.71:1 |

---

## Spacing & Layout
- **Container Strategy:** Explicit widths preferred over semantic scales.
  - See `AGENTS.md` for Tailwind v4 width constraint rules.
- **Architectural Grid:** Use 1px borders via the `hairline` token.
- **Cards:** Keep repeated cards at 8px radius or less; product-image frames may use 12px.
- **Sections:** Use full-width bands with constrained inner content, not nested decorative cards.
- **Shadows:** Use restrained neutral shadows only for important imagery; avoid glows and halos.
- **Section backgrounds:** Use the numbered backdrop classes below. The uploaded reference is a single collage, so these are CSS recreations rather than individual cropped image assets. Keep real product imagery in the hero and real project proof in Work.

## Section Background Map

Backdrop classes live in `src/styles/global.css` and are applied in their matching page or section components.

| No. | Reference section | Class | Status |
|---:|---|---|---|
| 1 | Hero | `.backdrop-01-hero` | Applied; real product screenshot remains the hero visual |
| 2 | Services | `.backdrop-02-services` | Applied; light wave texture |
| 3 | About | `.backdrop-03-about` | Applied; dark network-inspired texture |
| 4 | Why Choose Us | `.backdrop-04-why` | Applied; light architectural grid |
| 5 | Process | `.backdrop-05-process` | Applied; dotted pattern |
| 6 | Portfolio / Projects | `.backdrop-06-work` | Applied; real project/product cards remain foreground |
| 7 | Testimonials | `.backdrop-07-testimonials` | Preset only; no approved testimonials section |
| 8 | Pricing | `.backdrop-08-pricing` | Preset only; pricing page remains excluded |
| 9 | Call to Action | `.backdrop-09-cta` | Applied; blue wave treatment |
| 10 | Blog / Insights | `.backdrop-10-insights` | Applied to insight index and article pages |
| 11 | Contact | `.backdrop-11-contact` | Applied; light map-grid treatment |
| 12 | Footer | `.backdrop-12-footer` | Applied; deep-blue line texture |



## Motion
- **Constraint:** Respect `prefers-reduced-motion` at all times.
- **Style:** Contextual only. No global cursor glow, ambient decoration, or animated backgrounds.
- Click ripple: small sky-border ring on `.motion-click` elements (0.45s, auto-removed).
- Hover: Tailwind `transition-colors` on nav links, footer links, card borders, and button fills only.
