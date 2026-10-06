# SKYON Website Improvement Prompts

Use these prompts in order with a coding assistant. Complete and verify one phase before starting the next. Replace every bracketed value with confirmed business information; do not invent services, claims, domains, client results, or credentials.

## Shared Project Context

SKYON provides a broader range of IT services than the current website communicates. The repository is an Astro site with Tailwind CSS. The existing public site includes a shared layout, homepage sections, four service pages, and a contact page. Preserve Astro and the current design system unless a concrete requirement proves they are insufficient. This work is for the public company website, not a client portal or service-delivery application.

## Phase 1: Confirm the Business and Content Model

**Prompt:**

> Review the existing SKYON website and summarize what services, audiences, proof points, and contact channels it currently presents. Do not edit files yet.
>
> I will provide the confirmed business information below. Identify missing or conflicting details and ask me concise questions before making assumptions:
>
> - Official service list and category groupings: [ADD CONFIRMED SERVICES]
> - Target customer types, industries, and locations: [ADD CONFIRMED AUDIENCES]
> - Verified case studies, outcomes, and client permissions: [ADD APPROVED PROOF]
> - Official company name, domain, email, phone, and social profiles: [ADD VERIFIED DETAILS]
> - Lead form provider and endpoint availability: [ADD PROVIDER; NEVER INCLUDE SECRET API KEYS IN SOURCE]
> - Who will maintain and publish website content: [DEVELOPER / NON-TECHNICAL EDITOR / BOTH]
>
> Recommend a concise sitemap and service taxonomy based only on confirmed details. Flag any requested page that would lack distinct useful content. Do not implement until I approve the sitemap and provide the missing information.

**Complete when:** The actual services and audiences are confirmed, the sitemap is approved, and required production values are available or explicitly deferred.

## Phase 2: Fix Production Readiness and Search Indexing

**Prompt:**

> Implement the approved production configuration using the verified details from Phase 1. Keep changes narrowly scoped to production readiness.
>
> Requirements:
> - Replace placeholder site URL/domain values consistently, including Astro sitemap and canonical/structured-data URLs.
> - Make public production pages indexable. Do not leave a global `noindex, nofollow` rule. If staging must remain unindexed, implement an explicit environment-based approach and verify the production build output is indexable while staging remains noindexed.
> - Keep page titles, descriptions, canonical URLs, Open Graph metadata, and structured data correct for each route. Remove or correct metadata that describes nonexistent features, such as a search action if no site search exists.
> - Configure the contact form with the approved provider and endpoint. Never fabricate credentials or commit secrets. If the endpoint is unavailable, preserve an accessible, working alternative contact route and clearly report the remaining blocker.
> - Ensure the sitemap and robots file use the real domain and do not conflict with page indexing directives.
>
> Run the production build and inspect generated metadata/sitemap output. Report exactly which checks passed and any values that still need owner input.

**Complete when:** The production build succeeds; production URLs and metadata use the verified domain; indexing directives and sitemap are consistent; and the contact route works or has a verified fallback.

## Phase 3: Build the Approved Services Information Architecture

**Prompt:**

> Implement the approved sitemap and service taxonomy from Phase 1 in the existing Astro project. Do not add service categories or promises that SKYON has not confirmed.
>
> Requirements:
> - Update desktop and mobile navigation, homepage service discovery, footer links, and breadcrumbs so every approved service is reachable and related pages are discoverable.
> - Create a clear services overview and consistent service detail pages. Each detail page should use approved content for audience, customer problem, scope/deliverables, engagement process, relevant technologies or partners, evidence, and a relevant contact call to action. Omit sections when verified content is unavailable instead of filling them with generic claims.
> - Add industry/customer pages and case studies only when approved, distinct content exists. Do not create thin duplicate SEO pages.
> - Reuse Astro components and current visual tokens. Preserve server-rendered/static HTML by default; add browser JavaScript only for necessary interactions.
> - Keep the current individual route approach if the approved catalog remains small. If several pages share a stable schema or content volume makes manual pages repetitive, use Astro content collections with schema validation and shared templates. Do not introduce a CMS unless the confirmed publishing workflow needs one.
> - Preserve existing URLs where practical. If an approved restructure changes URLs, add appropriate permanent redirects and update internal links, canonical URLs, and sitemap entries.
>
> Run type checking and a production build. Check all new navigation paths, page titles, canonical URLs, internal links, and mobile layout. Summarize changed routes and any content still awaiting approval.

**Complete when:** The approved sitemap is represented consistently across the site, all links resolve, and service content is accurate and approved.

## Phase 4: Accessibility and Interaction Improvements

**Prompt:**

> Audit and fix accessibility issues in the current and newly updated pages, targeting WCAG 2.2 AA. Keep fixes within the existing Astro/Tailwind architecture.
>
> Check and address:
> - Keyboard operation, focus visibility, focus order, and Escape behavior for desktop dropdowns and the mobile navigation drawer.
> - The mobile drawer focus trap: hidden/collapsed submenu links must not be treated as visible focus targets. Prevent focus from escaping the modal while it is open, then restore focus to its trigger when closed.
> - Appropriate dialog semantics, accessible names, expanded states, and background interaction while the mobile drawer is open.
> - Contact form labels, required-field/error associations, submission state, and success/error announcements using suitable live-region semantics. Keep a usable non-JavaScript or direct-contact fallback where practical.
> - Heading hierarchy, landmarks, link purpose, image alternative text, contrast, zoom/reflow, and reduced-motion behavior.
>
> Run an automated accessibility scan on representative pages, then manually verify keyboard behavior at desktop and mobile widths. Report remaining issues; do not claim WCAG conformance solely from an automated scan.

**Complete when:** Automated checks have no unresolved critical violations, manual keyboard checks pass for navigation and form workflows, and any remaining limitations are documented.

## Phase 5: Quality Gates and Launch Verification

**Prompt:**

> Add or configure proportionate project checks for this Astro website and perform a launch review. Avoid adding heavyweight tooling without a clear need.
>
> Requirements:
> - Ensure CI can install dependencies, run Astro type checks, and produce a production build.
> - Add checks for broken internal links and important metadata/indexing regressions. Add automated accessibility checks to representative routes if they can run reliably in CI.
> - Verify 404 handling, sitemap/robots behavior, mobile navigation, contact submission or fallback, and production environment values.
> - Test production pages with Lighthouse/PageSpeed and document the results. Use Core Web Vitals targets of LCP <= 2.5s, INP <= 200ms, and CLS <= 0.1 at the 75th percentile when real-user data is available; do not treat a single lab run as field proof.
> - Replace the starter README with accurate project setup, development, build, deployment, and content-editing instructions.
>
> Report checks run, outcomes, launch blockers, and any manual verification still required. Do not deploy or publish without explicit authorization.

**Complete when:** CI and production build checks pass, launch configuration has been verified, outstanding blockers are explicit, and project documentation reflects the real setup.

## Future Phase: Client Portal (Only If Required)

Do not start this phase as part of the public website redesign. Use it only if SKYON decides to offer authenticated client workflows.

**Prompt:**

> Design a separate client portal architecture for the approved customer workflows. First document user roles, tenant boundaries, sensitive data, integrations, availability needs, and operational ownership. Propose an identity provider, API/backend, data store, audit logging, authorization model, backup/retention policy, and deployment approach. Keep the public Astro marketing site separate. Do not implement until the architecture and security requirements are approved.

## Sources Consulted

- [Accenture services and capabilities](https://www.accenture.com/us-en/services)
- [Deloitte services](https://www.deloitte.com/us/en/services/consulting.html)
- [Cognizant services](https://www.cognizant.com/us/en/services)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Astro on-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/)
- [Google robots meta guidance](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Web Vitals](https://web.dev/articles/vitals)
