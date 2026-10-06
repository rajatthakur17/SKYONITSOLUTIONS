# SKYON Design System

## Typography
- **Primary Font:** Manrope (Variable, self-hosted via `@fontsource-variable/manrope`)
- **Weights:** Variable (200–800)
- **Characteristics:** Modern, geometric sans-serif, clean, architectural, premium.

---

## Colour Palette & Theming

`src/styles/global.css` is the authoritative source for both the Dark (default) and Light themes.

### Theme Tokens

| Token | Dark Value (Default) | Light Value (`[data-theme="light"]`) | Role |
|---|---|---|---|
| `--color-canvas` | `#07141F` | `#EAF6FF` | Page background canvas |
| `--color-surface-1` | `#0D1D2D` | `#FFFFFF` | Cards, panels, dropdowns, drawer |
| `--color-surface-2` | `#122739` | `#D9ECFA` | Alternate surface, input backgrounds, chips |
| `--color-text-primary` | `#FFFFFF` | `#0B1F3A` | Headings and high-contrast text |
| `--color-text-body` | `#A9B8CC` | `#334E68` | Body copy and paragraphs |
| `--color-text-muted` | `#8497B0` | `#52667A` | Metadata, captions, secondary notes |
| `--color-text-disabled` | `#6F819B` | `#7A8CA3` | Disabled text and placeholder elements |
| `--color-brand-primary` | `#5CC2FF` | `#1769AA` | Links, active accents, focus rings |
| `--color-brand-hover` | `#8AD6FF` | `#0F4F86` | Link and accent hover states |
| `--color-button-fill` | `#B8F04D` | `#B8F04D` | Primary CTA button background (Lime) |
| `--color-button-text` | `#0A1A05` | `#0A1A05` | Primary CTA button text (Invariant) |
| `--color-button-hover` | `#CBF76F` | `#A4DC3A` | Primary CTA button hover background |
| `--color-border-strong` | `#6F819B` | `#6B7F97` | Inputs, selects, textareas, secondary button borders |
| `--color-hairline` | `rgba(255, 255, 255, 0.12)` | `rgba(11, 31, 58, 0.14)` | Card borders and decorative dividers |
| `--color-whatsapp` | `#0E7A3E` | `#0E7A3E` | WhatsApp button fill |
| `--color-whatsapp-text` | `#FFFFFF` | `#FFFFFF` | WhatsApp button text & icon (Invariant) |
| `--color-error` | `#FF7A7A` | `#B42318` | Error alerts and invalid inputs |
| `--color-success` | `#22C55E` | `#166534` | Status marks and verified checkmarks |
| `--color-warning` | `#F59E0B` | `#92400E` | Review stars only |

> [!IMPORTANT]
> **Lime Rules:**
> - In **Dark Theme**: Lime (`#B8F04D`) is strictly and exclusively used for the primary CTA button fill (with `#0A1A05` text). It is never used for headings, body, icons, badges, borders, or glows.
> - In **Light Theme**: Lime is allowed exclusively on the primary CTA button fill AND the headline accent highlight in the Hero (`<span class="hero-highlight">Grow online.</span>`, `#0B1F3A` on `#B8F04D`, 12.28:1 AAA). Nowhere else.

---

## WCAG Contrast Compliance

All contrast ratios are computed with the WCAG 2.1 relative-luminance formula $(L_1 + 0.05) / (L_2 + 0.05)$.

### Light Theme Contrast Ratios

| Token / Element | Hex | Canvas (`#EAF6FF`) | Surface-1 (`#FFFFFF`) | Surface-2 (`#D9ECFA`) | WCAG Rating |
|---|---|---:|---:|---:|:---:|
| `text-primary` | `#0B1F3A` | **15.04:1** | **16.52:1** | **13.63:1** | AAA Pass |
| `text-body` | `#334E68` | **7.87:1** | **8.64:1** | **7.13:1** | AAA Pass |
| `text-muted` | `#52667A` | **5.40:1** | **5.93:1** | **4.89:1** | AA Pass |
| `text-disabled` | `#7A8CA3` | **3.13:1** | **3.44:1** | **2.84:1** | Exempt (Clear state) |
| `brand-primary` | `#1769AA` | **5.26:1** | **5.77:1** | **4.76:1** | AA Pass |
| `brand-hover` | `#0F4F86` | **7.70:1** | **8.46:1** | **6.98:1** | AAA Pass |
| `border-strong` | `#6B7F97` | **3.74:1** | **4.11:1** | **3.39:1** | Non-Text Pass (≥ 3:1) |
| `error` | `#B42318` | **5.99:1** | **6.57:1** | **5.43:1** | AA Pass |
| `success` | `#166534` | **6.49:1** | **7.13:1** | **5.88:1** | AAA / AA Pass |
| `warning` | `#92400E` | **6.46:1** | **7.09:1** | **5.85:1** | AAA / AA Pass |
| `button-text` on `button-fill` | `#0A1A05` on `#B8F04D` | — | — | **13.42:1** | AAA Pass |
| `button-text` on `button-hover` | `#0A1A05` on `#A4DC3A` | — | — | **11.07:1** | AAA Pass |
| `whatsapp-text` on `whatsapp` | `#FFFFFF` on `#0E7A3E` | — | — | **5.42:1** | AA Pass |
| Hero Headline Lime Highlight | `#0B1F3A` on `#B8F04D` | — | — | **12.28:1** | AAA Pass |

---

### Dark Theme Contrast Ratios (Default)

| Token / Element | Hex | Canvas (`#07141F`) | Surface-1 (`#0D1D2D`) | Surface-2 (`#122739`) | WCAG Rating |
|---|---|---:|---:|---:|:---:|
| `text-primary` | `#FFFFFF` | **18.60:1** | **17.06:1** | **15.27:1** | AAA Pass |
| `text-body` | `#A9B8CC` | **9.23:1** | **8.46:1** | **7.57:1** | AAA Pass |
| `text-muted` | `#8497B0` | **6.23:1** | **5.72:1** | **5.12:1** | AA Pass |
| `text-disabled` | `#6F819B` | **4.69:1** | **4.30:1** | **3.85:1** | Exempt |
| `brand-primary` | `#5CC2FF` | **9.40:1** | **8.63:1** | **7.72:1** | AAA Pass |
| `brand-hover` | `#8AD6FF` | **11.64:1** | **10.68:1** | **9.56:1** | AAA Pass |
| `border-strong` | `#6F819B` | **4.69:1** | **4.30:1** | **3.85:1** | Non-Text Pass (≥ 3:1) |
| `error` | `#FF7A7A` | **7.37:1** | **6.76:1** | **6.05:1** | AA Pass |
| `warning` | `#F59E0B` | **8.66:1** | **7.94:1** | **7.11:1** | AAA Pass |
| `success` | `#22C55E` | **8.52:1** | **7.82:1** | **6.99:1** | AAA Pass |
| `button-text` on `button-fill` | `#0A1A05` on `#B8F04D` | — | — | **13.42:1** | AAA Pass |
| `button-text` on `button-hover` | `#0A1A05` on `#CBF76F` | — | — | **14.68:1** | AAA Pass |
| `whatsapp-text` on `whatsapp` | `#FFFFFF` on `#0E7A3E` | — | — | **5.42:1** | AA Pass |

---

## Spacing & Layout
- **Container Strategy:** Explicit widths preferred over semantic scales.
  - See `AGENTS.md` for Tailwind v4 width constraint rules.
- **Architectural Grid:** Use 1px borders via the `hairline` token.
- **Cards:** Keep repeated cards at 8px radius or less; product-image frames may use 12px.
- **Sections:** Use full-width bands with constrained inner content, not nested decorative cards.
- **Shadows:** No shadows or glow effects in light theme. Light cards use surface tokens and `border-hairline` only.
- **Theme Toggle:** 44×44px hit target, visible focus ring, inline SVG sun/moon icons. Default state on first visit is dark theme, ignoring `prefers-color-scheme`.

---

## Motion
- **Constraint:** Respect `prefers-reduced-motion` at all times.
- **Style:** Contextual only. No global cursor glow, ambient decoration, or animated backgrounds.
- Click ripple: small sky-border ring on `.motion-click` elements (0.45s, auto-removed).
- Hover: Tailwind `transition-colors` on nav links, footer links, card borders, and button fills only.
