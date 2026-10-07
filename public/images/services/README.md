# Service Image Assets Directory

This directory stores relative high-resolution images, architectural diagrams, and feature previews for SKYON IT SOLUTIONS' service offerings.

## File Naming Conventions

Drop your optimized WebP or PNG images into this directory using the corresponding service slug:

| Service Vertical | Slug | Expected Image Filename | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| **Website Development** | `website-development` | `website-development.webp` | 1200 × 675 px (16:9) |
| **Custom Software Development** | `custom-software` | `custom-software.webp` | 1200 × 675 px (16:9) |
| **Cloud Solutions & Infrastructure** | `cloud-solutions` | `cloud-solutions.webp` | 1200 × 675 px (16:9) |
| **AI & Automation Solutions** | `ai-automation` | `ai-automation.webp` | 1200 × 675 px (16:9) |
| **UI/UX Design** | `ui-ux-design` | `ui-ux-design.webp` | 1200 × 675 px (16:9) |
| **IT Consulting & Strategy** | `it-consulting` | `it-consulting.webp` | 1200 × 675 px (16:9) |
| **Search Engine Optimization (SEO)** | `seo` | `seo.webp` | 1200 × 675 px (16:9) |
| **Digital Marketing & Growth** | `digital-marketing` | `digital-marketing.webp` | 1200 × 675 px (16:9) |
| **Social Media Management** | `social-media` | `social-media.webp` | 1200 × 675 px (16:9) |

## How to Activate an Image in the Code

1. Place your image in this directory: `public/images/services/<slug>.webp`
2. Open `src/data/services.ts`.
3. In the corresponding service definition, set the `image` field:
   ```ts
   image: '/images/services/website-development.webp',
   ```
4. If `image` is omitted or set to `undefined`, the service page automatically renders a styled architectural blueprint placeholder with upload instructions.
