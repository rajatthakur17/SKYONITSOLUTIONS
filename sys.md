# SKYON System Architecture Redesign Prompt

Use this prompt with a coding assistant to assess and redesign SKYON's website architecture. It is intentionally separate from `update1.md`: `sys.md` is for architecture decisions, while `update1.md` contains prompts for implementing the site improvements in stages.

## Master Prompt

> Act as a senior web architect and review the SKYON repository before recommending changes. SKYON provides a broad range of IT services; the current website appears to present a narrower set of web and digital-marketing services. The goal is an extensible, accessible, maintainable public website that clearly represents SKYON's confirmed business, not an unnecessarily complex enterprise platform.
>
> The existing project is built with Astro and Tailwind. Inspect its actual files, project instructions, dependencies, routes, layouts, components, content, and deployment configuration. Treat the repository as the source of truth for implementation facts. Do not assume services, audiences, infrastructure, traffic, integrations, or customer workflows that have not been confirmed.
>
> **Do not edit files during discovery or architecture design.** First deliver an evidence-based assessment and ask concise questions for missing business or operational requirements. Separate confirmed facts, assumptions, and recommendations. Do not start implementation until I approve the proposed architecture and provide required values.
>
> ### 1. Discover the Current System
>
> Inspect and report:
> - Current framework/rendering mode, route structure, shared layouts, component organization, content storage, styles, integrations, build scripts, and hosting/deployment assumptions visible in the repository.
> - Which parts are static, which require browser JavaScript, and whether the project currently has server-side functionality.
> - Current service taxonomy and how a visitor reaches a service, proof point, or contact option.
> - Production risks such as placeholder domain/metadata, indexing directives, broken or incomplete lead capture, stale documentation, missing checks, accessibility concerns, or duplicated content structures.
> - Relevant project constraints in `AGENTS.md` and other applicable instructions.
>
> For each finding, cite the repository path and explain its consequence. Do not infer production behavior that cannot be verified from source or configuration.
>
> ### 2. Confirm Requirements Before Designing
>
> Ask me for only the requirements needed to make sound architecture decisions:
> - Confirmed IT service list and preferred groupings.
> - Target customer segments, industries, operating regions, and languages.
> - Approved case studies, metrics, client logos, partner badges, and publication permissions.
> - Who edits content, how often it changes, and whether non-technical staff need a CMS.
> - Required lead-generation flows, CRM/form integrations, analytics, and privacy constraints.
> - Expected growth in pages/content, geographic expansion, traffic, and publishing frequency, if known.
> - Whether customers need authenticated workflows now or are only considering them for the future.
> - Existing hosting provider, budget/operational constraints, availability needs, and preferred deployment workflow.
>
> Do not fill gaps with assumed offerings such as cloud, cybersecurity, AI, or managed IT. Present them only as examples if useful, and clearly mark them unconfirmed.
>
> ### 3. Produce a Proposed Target Architecture
>
> After requirements are confirmed, propose a proportionate design for the public website. Include:
>
> **Information architecture**
> - A sitemap and navigation model organized around the approved services and customer needs.
> - A service-category to service-detail relationship, plus case studies, industries/customer segments, insights, company information, and contact only where each has approved useful content.
> - URL conventions, internal-linking rules, breadcrumbs, redirects for changed routes, and SEO metadata ownership.
> - A visitor journey from understanding a business problem to evaluating proof and contacting SKYON.
>
> **Application and content architecture**
> - A proposed Astro project structure showing pages, layouts, reusable UI, business components, content/data, utilities, and tests.
> - Which content should remain page-specific and which should use validated Astro content collections or another content source. Recommend collections only when repeated content and editorial needs justify the abstraction.
> - Shared page templates and component boundaries. Keep service content separate from presentation, avoid oversized generic components, and avoid duplicating navigation/content definitions.
> - A policy for browser JavaScript: static/server-rendered HTML by default, with small interactive islands only where an interaction requires them.
> - A decision on local repository content versus a headless CMS, including editorial workflow, preview, validation, build triggers, and rollback implications.
>
> **Runtime and deployment architecture**
> - Whether static site generation is sufficient, which routes (if any) need request-time rendering, and why.
> - Hosting/CDN and build/deploy flow at the level justified by known constraints. State tradeoffs rather than selecting a vendor without requirements.
> - Environment handling for production, preview, and local development; domain, canonical URL, sitemap, robots/indexing, secrets, and form configuration.
> - Caching, image/font handling, analytics/privacy, logging/monitoring, backups, and recovery appropriate to the chosen rendering model.
>
> **Security, accessibility, and quality**
> - Threat and privacy considerations for forms and any future user data. Never put secrets in client code or repository content.
> - Accessibility target of WCAG 2.2 AA, including keyboard operation, focus management, screen-reader announcements, contrast, reduced motion, and responsive reflow.
> - Automated and manual quality gates: type check, production build, route/link/metadata validation, accessibility checks, representative browser tests, and performance measurement.
> - Operational ownership: who updates dependencies, approves content, reviews accessibility, and responds to incidents.
>
> **Future product boundary**
> - Keep the public website distinct from customer-facing IT products and authenticated portals.
> - If authenticated customer workflows are required, propose a separate application/backend boundary and identify identity, authorization/tenant isolation, API, data, audit, retention, and support needs. Do not design a database or backend for a hypothetical future need.
>
> Include a Mermaid architecture diagram, a short decision table of alternatives, risks and mitigations, and a migration sequence. For each recommendation, state whether it is needed now, later, or only if a specific requirement emerges. Avoid microservices, a CMS, an SSR server, a database, or a frontend framework migration without evidence that it solves a confirmed requirement.
>
> ### 4. Present Decisions and Obtain Approval
>
> End the design phase with:
> 1. The recommended architecture in one paragraph.
> 2. The main decisions and why they fit the confirmed requirements.
> 3. The smallest set of decisions or information still needed from me.
> 4. A phased implementation plan with scope and acceptance criteria for each phase.
> 5. Explicit items excluded from scope.
>
> Wait for my approval before changing files.
>
> ### 5. Implement Only After Approval
>
> Once I approve the design, implement in small, independently verifiable phases. Before each phase, state the files and behavior it affects. Preserve existing user changes and established design conventions. Do not fabricate company content or credentials. Run the narrowest relevant check immediately after each phase, then run the production build and agreed quality gates at the end. Report changed files, checks and results, unresolved blockers, and any manual verification that remains.

## Decision Principles

- **Fit the workload:** A public IT-services site is primarily a content and lead-generation product. Its breadth of service offerings alone does not require a dynamic application backend.
- **Keep the public site fast and simple:** Prefer static HTML served from a CDN when pages are public and content changes through controlled publishing.
- **Use structured content when repetition justifies it:** Shared schemas and templates help prevent inconsistencies across a large catalog, but a small number of unique pages may remain simpler as individual Astro pages.
- **Separate unlike systems:** Marketing pages, internal publishing tools, and authenticated customer workflows have different security and runtime needs. Avoid combining them by default.
- **Let requirements drive vendors and frameworks:** Select a CMS, hosting platform, backend, or frontend framework only after editorial, traffic, integration, security, and operational requirements are known.
- **Treat quality as part of the design:** Accessibility, correct indexing, usable lead capture, and real-user performance measurement are system requirements, not polish for a later phase.

## Reference Material

Use official documentation and real provider sites as evidence, not as templates to copy verbatim:

- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Astro on-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/)
- [Astro route caching](https://docs.astro.build/en/guides/caching/)
- [Astro routing](https://docs.astro.build/en/guides/routing/)
- [Google robots meta guidance](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Web Vitals](https://web.dev/articles/vitals)
- [Accenture services](https://www.accenture.com/us-en/services)
- [Deloitte services](https://www.deloitte.com/us/en/services/consulting.html)
- [Cognizant services](https://www.cognizant.com/us/en/services)
