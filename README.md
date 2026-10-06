# SKYON IT SOLUTIONS Website

Public IT-services website built with Astro and Tailwind CSS v4. The site is statically generated and includes the homepage, service pages, contact flow, legal pages, and sitemap.

## Requirements

- Node.js 22.12 or later
- npm

## Local Development

```sh
npm install
npm run dev
```

The development server is available at `http://localhost:4321`. For a persistent background server, use `npx astro dev --background`; manage it with `npx astro dev stop`, `npx astro dev status`, and `npx astro dev logs`.

## Validation and Build

```sh
npm run check
npm run build
npm run preview
```

`npm run check` runs Astro's type and template diagnostics. `npm run build` creates the static production site in `dist/`. `npm run preview` serves the latest build locally.

## Content and Routes

- Shared site information and contact details: `src/config/site.ts`
- Service catalog and service navigation groups: `src/data/services.ts`
- Service detail template: `src/pages/services/[slug].astro`
- Services overview: `src/pages/services/index.astro`
- Work portfolio: `src/pages/work.astro`
- About page: `src/pages/about.astro`
- Insights catalog and shared article data: `src/data/insights.ts`, `src/pages/insights/`
- Shared layouts and components: `src/components/` and `src/layouts/`

Service routes are generated from the central service catalog. When adding or changing a service, update the catalog and run `npm run check` and `npm run build` to verify its route and navigation links.

## Environment Configuration

- `PUBLIC_NOINDEX=true` adds `noindex, nofollow` for preview or staging builds. Do not set this for the public production build.
- `PUBLIC_FORM_ENDPOINT` is optional. When configured, the contact form posts to that endpoint. When unset, the form prepares an inquiry in WhatsApp; visitors must review and send the message themselves. A direct WhatsApp link is also available.

Never put private credentials in `PUBLIC_*` variables or client-side code. Confirm the endpoint provider's privacy requirements before enabling it and update the privacy notice accordingly.

## Publishing Content

Service content is currently maintained in the repository's TypeScript catalog. A non-technical CMS is not configured yet. The repository has no Git remote, so a Git-backed CMS cannot be connected until the hosting repository, branch, CMS provider, and authentication method are selected.

## Deployment Notes

The production domain is configured in `astro.config.mjs` and `src/config/site.ts`. Keep those values aligned when changing domains. Verify the built canonical URLs, robots directives, sitemap, contact destination, and environment variables before publishing.
