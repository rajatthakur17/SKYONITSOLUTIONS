# Work & Portfolio Asset Directory

This directory stores screenshots, mockups, and visual case study previews for SKYON IT SOLUTIONS' client projects and internal products.

## File Naming Conventions

Drop your optimized WebP or PNG images into this directory matching the corresponding project slug:

| Project / Product | Slug | Expected Image Filename | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| **R4Realty.in** | `r4realty` | `r4realty.webp` (or `.png`) | 1200 × 750 px (16:10 browser frame) |
| **MyMarriageBiodata** | `mymarriagebiodata` | `mymarriagebiodata.webp` (or `.png`) | 1200 × 750 px (16:10 browser frame) |

## How to Add New Project Assets

1. Save your screenshot in `public/images/work/<slug>.webp`.
2. Add or update the project entry in `src/data/work.ts`:
   ```ts
   image: '/images/work/r4realty.webp',
   ```
3. If no image is provided, the card automatically renders a sleek browser frame with an interactive address bar and drop-in upload prompt.
