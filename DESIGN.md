# SKYON Design System

## Typography
- **Primary Font:** Manrope (Variable, self-hosted via `@fontsource-variable/manrope`)
- **Weights:** Variable (200-800)
- **Characteristics:** Modern, geometric sans-serif, clean, architectural, premium.

## Colors
Derived for a premium dark-mode only experience.

### Base / Canvas
- **Background (Primary):** `#050505` (Near black)
- **Background (Surface/Elevated):** `#0D1117`
- **Background (Card/Input):** `#121820`

### Text
- **Primary / Headings:** `#FFFFFF`
- **Body Text:** `#A7B0BE`
- **Disabled Text:** `#8F8F8F`

### Accent & Links
- **Primary Brand / Links:** `#1687FF`
- **Link Hover:** `#3B82F6` (Visibly brighter)
- **Cyan Accent (Borders/Decorations):** `#00CFFF`

### Interactive
- **Button Fill (Primary):** `#006BFF` (Maintains 4.5:1 ratio with white text)
- **Focus Ring / Outline:** `#1687FF`
- **Error / Danger:** `#EE0000` (Maintains >4.5:1 ratio on #050505)

## Spacing & Layout
- **Container Strategy:** Explicit widths preferred over semantic scales.
  - See `AGENTS.md` for Tailwind v4 width constraint rules.
- **Architectural Grid:** Use 1px borders (`border-gray-800` or custom hairline variables).

## Motion
- **Constraint:** Respect `prefers-reduced-motion` at all times.
- **Style:** Subtle fade-ups, slight scaling. Fast transitions (150-200ms) for hover states. No heavy parallax or bouncing.
