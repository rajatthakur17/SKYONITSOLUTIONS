# SKYON Design System

## Typography
- **Primary Font:** Manrope (Variable, self-hosted via `@fontsource-variable/manrope`)
- **Weights:** Variable (200–800)
- **Characteristics:** Modern, geometric sans-serif, clean, architectural, premium.

---

## Colour Palette

Dark-mode-only. All values are the authoritative source. No other hex values exist in the codebase.

### Backgrounds

| Token                  | Hex       | Usage                                      |
|------------------------|-----------|--------------------------------------------|
| `--color-canvas`       | `#07141F` | Page background, input fill                |
| `--color-surface-1`    | `#0D1D2D` | Cards, form container, nav background      |
| `--color-surface-2`    | `#122739` | Elevated cards, inner surfaces             |

### Text

| Token                   | Hex       | Usage                                      |
|-------------------------|-----------|--------------------------------------------|
| `--color-text-primary`  | `#FFFFFF` | Headings, high-emphasis labels             |
| `--color-text-body`     | `#A9B8CC` | Body copy, descriptions                    |
| `--color-text-muted`    | `#8497B0` | Supporting text, captions                  |
| `--color-text-disabled` | `#6F819B` | Disabled states, muted metadata            |

### Accent / Interactive

| Token                  | Hex                      | Usage                                                    |
|------------------------|--------------------------|----------------------------------------------------------|
| `--color-brand-primary`| `#5CC2FF` (sky)          | Links, accent labels, badges, icon hover, focus ring, card hover border |
| `--color-brand-hover`  | `#8AD6FF` (sky hover)    | Link hover state                                         |
| `--color-button-fill`  | `#B8F04D` (lime)         | **Primary button fill only.** No other lime usage.       |
| `--color-button-text`  | `#0A1A05`                | Text on lime primary button                              |
| `--color-button-hover` | `#CBF76F` (lime hover)   | Primary button hover fill                                |
| `--color-error`        | `#FF7A7A`                | Error messages, required field asterisks                 |
| `--color-hairline`     | `rgba(255,255,255,0.12)` | Borders, dividers                                        |

### Rules
- Lime (`#B8F04D`, `#CBF76F`) is used **only** on primary button fill. Never as text, icon, or badge.
- Accent words in headlines use sky `#5CC2FF`, not lime.
- Focus ring is always sky `#5CC2FF`. A focus ring on a lime button is also sky.
- Secondary buttons: transparent background, `1px solid rgba(255,255,255,0.12)` border.
- No shadows, glows, halos, or blur tinted blue. No ambient or cursor effects.

---

## WCAG Contrast Table

Ratios computed with the WCAG 2.1 relative luminance formula. Pass threshold: **4.5:1** (AA normal text), **3:1** (AA large text / UI components).

| Foreground              | Background      | Ratio  | AA Normal | AA Large / UI |
|-------------------------|-----------------|--------|-----------|---------------|
| `#FFFFFF` white         | `#0B1B33` canvas| **17.23:1** | ✅ Pass | ✅ Pass    |
| `#FFFFFF` white         | `#102441` s-1   | **15.55:1** | ✅ Pass | ✅ Pass    |
| `#FFFFFF` white         | `#152C50` s-2   | **13.93:1** | ✅ Pass | ✅ Pass    |
| `#A9B8CC` body text     | `#0B1B33` canvas| **8.55:1**  | ✅ Pass | ✅ Pass    |
| `#A9B8CC` body text     | `#102441` s-1   | **7.71:1**  | ✅ Pass | ✅ Pass    |
| `#8497B0` muted text    | `#0B1B33` canvas| **5.77:1**  | ✅ Pass | ✅ Pass    |
| `#6F819B` disabled text | `#0B1B33` canvas| **4.34:1**  | ⚠️ Near-miss (decorative / non-essential use only) | ✅ Pass |
| `#5CC2FF` sky (links)   | `#0B1B33` canvas| **8.71:1**  | ✅ Pass | ✅ Pass    |
| `#5CC2FF` sky (links)   | `#102441` s-1   | **7.86:1**  | ✅ Pass | ✅ Pass    |
| `#8AD6FF` sky hover     | `#0B1B33` canvas| **10.78:1** | ✅ Pass | ✅ Pass    |
| `#B8F04D` lime          | `#0B1B33` canvas| **12.81:1** | ✅ Pass (button background, not text) | ✅ Pass |
| `#0A1A05` dark          | `#B8F04D` lime  | **13.42:1** | ✅ Pass (button text on lime) | ✅ Pass |
| `#FF7A7A` error         | `#0B1B33` canvas| **6.82:1**  | ✅ Pass | ✅ Pass    |
| `#FF7A7A` error         | `#102441` s-1   | **6.16:1**  | ✅ Pass | ✅ Pass    |

> **Note on disabled text:** `#6F819B` at 4.34:1 on canvas is below the 4.5:1 AA threshold. It is intentionally used only for non-interactive, decorative metadata (timestamps, placeholders) where WCAG permits exceptions. It passes 3:1 for large text.

---

## Spacing & Layout
- **Container Strategy:** Explicit widths preferred over semantic scales.
  - See `AGENTS.md` for Tailwind v4 width constraint rules.
- **Architectural Grid:** Use 1px borders via the `hairline` token.

## Motion
- **Constraint:** Respect `prefers-reduced-motion` at all times.
- **Style:** Contextual only. No global cursor glow, no ambient decoration, no animated backgrounds.
- Click ripple: small sky-border ring on `.motion-click` elements (0.45s, auto-removed).
- Hover: Tailwind `transition-colors` on nav links, footer links, card borders, and button fills only.
