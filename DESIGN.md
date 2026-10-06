# SKYON Design System

## Typography
- **Primary Font:** Manrope (Variable, self-hosted via `@fontsource-variable/manrope`)
- **Weights:** Variable (200–800)
- **Characteristics:** Modern, geometric sans-serif, clean, architectural, premium.

---

## Colour Palette

`src/styles/global.css` is the authoritative source for the unified dark theme.

| Token | Value | Use |
|---|---|---|
| `--color-canvas` | `#07141F` | Deep dark page canvas |
| `--color-surface-1` | `#0D1D2D` | Primary card surfaces and panels |
| `--color-surface-2` | `#122739` | Highlighted surfaces, input backgrounds |
| `--color-text-primary` | `#FFFFFF` | Headings and high-emphasis text |
| `--color-text-body` | `#A9B8CC` | Body copy and paragraph text |
| `--color-text-muted` | `#8497B0` | Supporting metadata and secondary captions |
| `--color-text-disabled` | `#6F819B` | Placeholder text and disabled elements |
| `--color-brand-primary` | `#5CC2FF` | Sky blue links, badges, accents, focus rings |
| `--color-brand-hover` | `#8AD6FF` | Link and accent hover states |
| `--color-button-fill` | `#B8F04D` | Primary CTA button background (Lime isolation) |
| `--color-button-text` | `#0A1A05` | Primary CTA button text (Deep green-black) |
| `--color-button-hover` | `#CBF76F` | Primary CTA button hover background |
| `--color-border-strong` | `#6F819B` | Inputs, selects, textareas, checkboxes, outlined secondary buttons |
| `--color-hairline` | `rgba(255, 255, 255, 0.12)` | Decorative card edges and divider lines only |
| `--color-whatsapp` | `#0E7A3E` | WhatsApp button and widget fill with white text |
| `--color-error` | `#FF7A7A` | Form validation and error alerts |
| `--color-success` | `#22C55E` | Online badges, status dots, completed checkmarks |
| `--color-warning` | `#F59E0B` | 5-star ratings, fast-track indicators |

> [!IMPORTANT]
> **Lime Isolation Rule:** Lime (`#B8F04D` fill, `#CBF76F` hover) is strictly and exclusively used for primary button fills, paired with `#0A1A05` text. It is never used for headings, copy, icons, borders, backgrounds, gradients, or glows.

## WCAG Contrast Compliance

All contrast ratios are computed using the standard WCAG 2.2 relative-luminance formula. AA requires ≥ 4.5:1 for body text and ≥ 3:1 for large text and non-text UI indicators.

### Text Contrast Ratios

| Token | Hex | Canvas (`#07141F`) | Surface-1 (`#0D1D2D`) | Surface-2 (`#122739`) | WCAG Rating |
|---|---|---:|---:|---:|:---:|
| `text-primary` | `#FFFFFF` | **18.60:1** | **17.06:1** | **15.27:1** | AAA Pass |
| `text-body` | `#A9B8CC` | **9.23:1** | **8.46:1** | **7.57:1** | AAA Pass |
| `text-muted` | `#8497B0` | **6.23:1** | **5.72:1** | **5.12:1** | AA Pass |
| `text-disabled` | `#6F819B` | **4.69:1** | **4.30:1** | **3.85:1** | UI Pass (Exempt) |
| `brand-primary` | `#5CC2FF` | **9.40:1** | **8.63:1** | **7.72:1** | AAA Pass |
| `brand-hover` | `#8AD6FF` | **11.64:1** | **10.68:1** | **9.56:1** | AAA Pass |
| `error` | `#FF7A7A` | **7.37:1** | **6.76:1** | **6.05:1** | AA Pass |
| `warning` | `#F59E0B` | **8.66:1** | **7.94:1** | **7.11:1** | AAA Pass |
| `success` | `#22C55E` | **8.52:1** | **7.82:1** | **6.99:1** | AAA Pass |

### Interactive Controls and Borders

| Control / Boundary | Foreground | Background / Context | Ratio | Rating |
|---|---|---|---:|:---:|
| **Primary CTA Button** | `#0A1A05` (`button-text`) | `#B8F04D` (`button-fill`) | **13.42:1** | AAA Pass |
| **Primary CTA Hover** | `#0A1A05` (`button-text`) | `#CBF76F` (`button-hover`) | **14.68:1** | AAA Pass |
| **Secondary Button** | `#FFFFFF` (`text-primary`) | `#0D1D2D` w/ `#6F819B` border | **17.06:1** (text), **3.85:1** (border) | AA Pass |
| **WhatsApp Button** | `#FFFFFF` | `#0E7A3E` (`whatsapp`) | **5.42:1** | AA Pass |
| **Border-Strong** | `#6F819B` | Inputs on Surface-2 (`#122739`) | **3.85:1** | UI Non-Text Pass (≥ 3:1) |
| **Hairline Dividers** | `rgba(255,255,255,0.12)` | Over Canvas (`#07141F`) | ~1.4:1 | Decorative Only |
| **Focus Ring** | `#5CC2FF` (2px offset) | Any page background | **7.72:1 – 9.40:1** | UI Non-Text Pass (≥ 3:1) |

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
| 1 | Hero | `.backdrop-01-hero` | Applied; dark canvas gradient with skyline backdrop |
| 2 | Services | `.backdrop-02-services` | Applied; dark subtle radial mesh with network backdrop |
| 3 | About | `.backdrop-03-about` | Applied; dark cyber gradient with digital wave backdrop |
| 4 | Why Choose Us | `.backdrop-04-why` | Applied; dark architectural linear gradient |
| 5 | Process | `.backdrop-05-process` | Applied; dark canvas gradient with particle wave backdrop |
| 6 | Portfolio / Projects | `.backdrop-06-work` | Applied; dark workspace texture with project proof |
| 7 | Testimonials | `.backdrop-07-testimonials` | Applied; dark surface depth gradient |
| 8 | Pricing / Scope | `.backdrop-08-pricing` | Preset only; scope estimator implemented separately |
| 9 | Call to Action | `.backdrop-09-cta` | Applied; dark earthrise cosmic backdrop |
| 10 | Blog / Insights | `.backdrop-10-insights` | Applied; dark subtle linear tint |
| 11 | Contact | `.backdrop-11-contact` | Applied; dark form panel gradient |
| 12 | Footer | `.backdrop-12-footer` | Applied; deep-canvas line texture |



## Motion
- **Constraint:** Respect `prefers-reduced-motion` at all times.
- **Style:** Contextual only. No global cursor glow, ambient decoration, or animated backgrounds.
- Click ripple: small sky-border ring on `.motion-click` elements (0.45s, auto-removed).
- Hover: Tailwind `transition-colors` on nav links, footer links, card borders, and button fills only.
