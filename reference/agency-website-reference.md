**# Agency Website Reference & Architecture Report**



This report serves as a deep-dive architectural and visual study of the existing "Build With Rajat" portfolio. Its purpose is to extract design, layout, content, and technical patterns to inform the creation of a new digital/AI agency website.



\---



**## PHASE 1 — PROJECT AUDIT**



**\*\*Technical Stack Analysis:\*\***

\- **\*\*Framework:\*\*** Astro (^7.2.9)

\- **\*\*Styling:\*\*** Tailwind CSS v4 (^4.3.3) via \`@tailwindcss/vite\`

\- **\*\*TypeScript:\*\*** Fully integrated via \`tsconfig.json\` and \`astro:content\`.

\- **\*\*Global CSS Architecture:\*\*** Uses Tailwind v4's new \`@theme\` directive in \`src/styles/global.css\` to define design tokens. Includes custom premium utilities like \`.bg-grid\`, \`.reveal\`, and \`.browser-frame\`.

\- **\*\*Design Tokens:\*\***&#x20;

  - Canvas colors (\`--color-canvas\`, \`--color-canvas-elevated\`)

  - Typography colors (\`--color-ink\`, \`--color-body\`, \`--color-mute\`, \`--color-faint\`)

  - Border colors (\`--color-hairline\`)

\- **\*\*Typography System:\*\*** Primarily uses "Geist" and "Inter" for sans-serif, and "Geist Mono" for monospace accents. Includes custom tracking variables (\`--tracking-tightest\`).

\- **\*\*Component Architecture:\*\*** Modular \`.astro\` components inside \`src/components/\` (Header, Footer, Hero, ProductShowcase, Faq).&#x20;

\- **\*\*Layouts:\*\*** \`src/layouts/Layout.astro\` handles all global boilerplate, SEO meta tags, JSON-LD, Google Analytics, Theme initialization, and a global IntersectionObserver for scroll animations.

\- **\*\*Content Collections:\*\*** Uses Astro's \`content.config.ts\` with the new \`glob\` loader to parse Markdown/MDX files for \`blog\` and \`caseStudies\`.

\- **\*\*Assets:\*\*** SVG icons and web-optimized images stored in \`src/assets/\`. Uses Astro's \`\<Image />\` component for automatic optimization.

\- **\*\*Routing:\*\*** File-based routing in \`src/pages/\` (index, privacy-policy, terms-and-conditions, 404, 500, thank-you).

\- **\*\*SEO Architecture:\*\*** Implemented in \`Layout.astro\` with Canonical URLs, Open Graph, Twitter cards, and structured JSON-LD (Person and WebSite). \`@astrojs/sitemap\` integration configured in \`astro.config.mjs\`.

\- **\*\*Theme System:\*\*** CSS variables scoped to \`:root\` (dark mode by default) and \`.light\` class on the \`\<html>\` element. Synchronized via \`localStorage\` ('portfolio-theme') to prevent flash on load.

\- **\*\*JavaScript Usage:\*\*** Extremely minimal. Client-side JS is limited to theme toggling, mobile menu interaction, hero text rotation, FAQ accordions, and a global IntersectionObserver for scroll reveals.

\- **\*\*Animation Approach:\*\*** CSS transitions triggered by an \`is-revealed\` class applied via IntersectionObserver. Hero text rotation uses isolated DOM layers with CSS transforms and filters for high-performance rendering.

\- **\*\*Deployment Setup:\*\*** Built as a static site (SSG). \`package.json\` includes \`esbuild\` configurations. Path processing handles GitHub Pages \`BASE_URL\`.



\---



**## PHASE 2 & 3 — SECTION-BY-SECTION VISUAL STUDY**



**### 1. Header / Navigation**

**\*\*Purpose:\*\*** Global wayfinding and quick access to the primary CTA.

**\*\*Visual hierarchy:\*\*** Logo (left) -> Primary CTA (right) -> Navigation links (center) -> Theme Toggle.

**\*\*Layout:\*\*** Sticky top, \`backdrop-blur-md\`, \`max-w-[72rem]\` container. Flexbox space-between.

**\*\*Spacing:\*\*** Height is \`h-16\`. Links have internal padding \`px-[12px] py-[8px]\`.

**\*\*Typography:\*\*** Logo is bold, text-base/lg. Links are text-sm, normal weight.

**\*\*Colors:\*\*** Background canvas with 80% opacity. Text uses body color, hover to ink.

**\*\*Components:\*\*** Standalone \`Header.astro\`.

**\*\*Interaction:\*\*** Hover state on links (pill background). Theme toggle switches icons.

**\*\*Animation:\*\*** Smooth color transitions.

**\*\*Responsive:\*\*** Desktop shows links, mobile shows hamburger icon and hides links.

**\*\*Technical implementation:\*\*** \`src/components/Header.astro\`.

**\*\*Agency adaptation:\*\*** The sticky glassmorphism header is excellent. The agency version should include dropdowns for multiple services/industries and a more prominent "Get an Estimate" CTA.

**\*\*Reference rating:\*\*** Excellent.



**### 2. Mobile Navigation**

**\*\*Purpose:\*\*** Navigation for small screens.

**\*\*Visual hierarchy:\*\*** Close button -> Links -> CTA -> Theme Toggle.

**\*\*Layout:\*\*** Fixed full-screen overlay with a centered floating drawer (\`w-[85vw]\`).

**\*\*Interaction:\*\*** Hamburger animates to an "X". The drawer scales in from 95% to 100% opacity. Backdrop blurs.

**\*\*Agency adaptation:\*\*** The floating drawer is a very premium touch compared to a standard slide-out menu. Should be reused for the agency to maintain a high-end feel.

**\*\*Reference rating:\*\*** Excellent.



**### 3. Hero**

**\*\*Purpose:\*\*** Immediate value proposition and personal introduction.

**\*\*Visual hierarchy:\*\*** Large Name -> Rotating "I build..." phrase -> Positioning paragraph -> CTAs.

**\*\*Layout:\*\*** Centered content with a max-width of \`64rem\`. Text is left-aligned within the container. Architectural grid background.

**\*\*Typography:\*\*** Extreme scaling for the main heading (\`text-7xl\` to \`text-[5rem]\`). High contrast font weights.

**\*\*Animation:\*\*** Staggered upward fade-in using \`.reveal\` and \`--stagger\` variables. Complex rotating text with blur filters and GPU isolation.

**\*\*Technical implementation:\*\*** \`src/components/Hero.astro\`.

**\*\*Agency adaptation:\*\*** The structure is solid, but the massive "RAJAT KUMAR" should be replaced by a massive value proposition (e.g., "WE BUILD INTELLIGENT EXPERIENCES"). The rotating text can be adapted for target industries (e.g., "AI solutions for [Healthcare | Finance | Retail]").

**\*\*Reference rating:\*\*** Excellent.



**### 4. Availability / Status Indicator**

**\*\*Purpose:\*\*** Creates urgency and shows active business status.

**\*\*Visual hierarchy:\*\*** Small, top-left eyebrow element.

**\*\*Design:\*\*** Pill-shaped with a pulsating green dot.

**\*\*Agency adaptation:\*\*** Agencies can use this to say "Accepting new clients for Q3" or "All systems operational".

**\*\*Reference rating:\*\*** Good.



**### 5. Primary CTA**

**\*\*Purpose:\*\*** Drive the main conversion goal (Lead gen).

**\*\*Design:\*\*** \`.pill-primary\` (High contrast, inverted background/text colors). Fully rounded corners (\`radius-pill\`). Hover applies opacity change.

**\*\*Agency adaptation:\*\*** Keep the pill shape but perhaps introduce a slight shadow or glow effect for the agency version to make it more clickable.

**\*\*Reference rating:\*\*** Good.



**### 6. Secondary CTA**

**\*\*Purpose:\*\*** Alternative action for users not ready to buy (Explore work).

**\*\*Design:\*\*** \`.pill-secondary\` (Canvas background, border-hairline).

**\*\*Reference rating:\*\*** Good.



**### 7. Products / Work Showcase**

**\*\*Purpose:\*\*** Demonstrate competence and build trust through past work.

**\*\*Layout:\*\*** Single-column list of large, impactful cards.

**\*\*Content structure:\*\*** Fetched from the \`caseStudies\` content collection, filtered by \`featured\`, mapped into \`ProductShowcase\`.

**\*\*Agency adaptation:\*\*** Instead of a single column of deep-dive products, an agency might need a bento-grid or a 2-column masonry layout to show a higher volume of case studies.

**\*\*Reference rating:\*\*** Good.



**### 8. Product/Project Cards (\`ProductShowcase.astro\`)**

**\*\*Purpose:\*\*** Detailed preview of a specific project.

**\*\*Visual hierarchy:\*\*** Large Image preview -> Badges -> Title -> Description -> Tech Stack -> CTAs.

**\*\*Layout:\*\*** 55% image (left) / 45% content (right) on desktop. Stacks vertically on mobile.

**\*\*Design:\*\*** Image is wrapped in a \`.browser-frame\` simulating a macOS/browser window with 3 dots.

**\*\*Interaction:\*\*** Hovering the card scales the image up slightly (\`group-hover:scale-[1.03]\`).

**\*\*Agency adaptation:\*\*** The browser-chrome effect is highly effective for SaaS/digital products. Agencies should definitely reuse this pattern for digital portfolio items.

**\*\*Reference rating:\*\*** Excellent.



**### 9. Services**

**\*\*Purpose:\*\*** Explain offerings clearly.

**\*\*Layout:\*\*** 2x2 Grid of cards.

**\*\*Design:\*\*** Cards have a hairline border, background canvas.

**\*\*Typography:\*\*** \`text-xl\` headings, \`text-body\` paragraphs.

**\*\*Agency adaptation:\*\*** This layout works perfectly for an agency. You can easily map 4-6 agency services into this exact grid structure.

**\*\*Reference rating:\*\*** Excellent.



**### 10. Case Studies**

**\*\*Purpose:\*\*** Provide deep dives into specific projects.

**\*\*Implementation:\*\*** Markdown files in \`src/content/case-studies/\`. The schema demands fields like \`client\`, \`projectType\`, \`technologies\`.

**\*\*Agency adaptation:\*\*** An agency needs a dedicated \`/case-studies/\` page and individual case study routing (\`/case-studies/[slug]\`). The current portfolio only fetches them for the homepage.

**\*\*Reference rating:\*\*** Limited (needs expansion for routing).



**### 11. About & 12. Profile Introduction**

**\*\*Purpose:\*\*** Build personal connection.

**\*\*Layout:\*\*** Centered text block (\`max-w-[48rem]\`), followed by a portrait image.

**\*\*Agency adaptation:\*\*** Replace the solo founder photo with a team photo or a "Why Choose Us" ethos section.&#x20;

**\*\*Reference rating:\*\*** Do not reuse directly (too personal).



**### 13. FAQ**

**\*\*Purpose:\*\*** Overcome objections and reduce support queries.

**\*\*Layout:\*\*** 2-column grid of accordion items.

**\*\*Interaction:\*\*** JavaScript-driven accordion that limits to one open item at a time. CSS grid transition (\`0fr\` to \`1fr\`) for smooth height animation.

**\*\*Agency adaptation:\*\*** Perfect as-is. Just change the content to address agency-specific objections (e.g., retainer pricing, project management, IP ownership).

**\*\*Reference rating:\*\*** Excellent.



**### 14. Project Inquiry / Contact Form**

**\*\*Purpose:\*\*** Lead generation.

**\*\*Layout:\*\*** Multi-step styled form within a card wrapper. 2-column grid for Name/Email and Budget/Timeline.

**\*\*Fields:\*\*** Name, Email, Service Dropdown, Budget Dropdown, Timeline Dropdown, Textarea.

**\*\*Integration:\*\*** Native HTML form pointing to Formspree.

**\*\*Agency adaptation:\*\*** The categorization of Budget and Timeline is a fantastic lead-qualification pattern. An agency should copy this exact field structure but perhaps integrate it with a CRM or a multi-step form (Typeform style) to increase conversion.

**\*\*Reference rating:\*\*** Excellent.



**### 15. Contact Information & 16. Footer**

**\*\*Purpose:\*\*** Secondary navigation, trust signals, and alternative contact methods.

**\*\*Layout:\*\*** Desktop is a 12-column grid (5-3-4 split). Mobile stacks vertically.

**\*\*Design:\*\*** Minimal, uses hairline borders to separate from main content.

**\*\*Agency adaptation:\*\*** Needs expanding to include physical office locations, social media links (Clutch, Dribbble), and newsletter signups.

**\*\*Reference rating:\*\*** Good.



**### 17. Theme Switcher**

**\*\*Purpose:\*\*** Accessibility and user preference.

**\*\*Implementation:\*\*** \`localStorage\` + \`html.light\` class. Inline script in \`\<head>\` prevents flash.

**\*\*Reference rating:\*\*** Excellent (highly reusable).



**### 18. Legal Links, 19. 404 Page, 20. 500 Page**

*\*(Implementation noted as existing based on routing and footer links. Reusable for boilerplate).\**



\---



**## PHASE 4 — DESIGN SYSTEM STUDY**



**### Colors**

Defined in \`@theme\` block in Tailwind v4:

\- **\*\*Canvas:\*\*** \`--color-canvas\` (#050a0f dark, #f9fafa light) - Main background.

\- **\*\*Surface:\*\*** \`--color-canvas-elevated\` - Used for cards and dropdowns.

\- **\*\*Text Primary:\*\*** \`--color-ink\` - High contrast text (headings).

\- **\*\*Text Secondary:\*\*** \`--color-body\` - Paragraph text.

\- **\*\*Borders:\*\*** \`--color-hairline\` - Core structural border used everywhere to create a blueprint/schematic feel.



**### Typography**

\- **\*\*Sans:\*\*** Geist/Inter.

\- **\*\*Mono:\*\*** Geist Mono. Used heavily for "eyebrows" (small all-caps labels above headings) and metadata (tags, dates). This creates a technical, developer-centric aesthetic.

\- **\*\*Tracking:\*\*** Headings use negative tracking (\`tracking-tighter\`, \`-1.28px\`) to look modern and dense.



**### Spacing & Borders**

\- Strict adherence to a 4px/8px grid system.

\- Borders are exclusively 1px solid (\`border-hairline\`).

\- **\*\*Radius:\*\*** Slight rounding (\`radius-md\` = 12px) for cards, full rounding (\`radius-pill\`) for buttons.



**### Grid/Background System**

\- \`.bg-grid\` creates a 40x40px architectural grid using linear gradients based on the \`--color-hairline\` variable.

\- \`.bg-grid-fade\` uses a \`-webkit-mask-image\` to fade the grid out towards the bottom, preventing it from clashing with content lower on the page.



**### Theme System**

\- CSS variable overriding. Base layer is dark mode. \`.light\` class overrides all variables.&#x20;



\---



**## PHASE 5 — HEADER & NAVIGATION DEEP STUDY**

*\*(See Section 1 & 2 above)\**



**## PHASE 6 — HERO DEEP STUDY**

*\*(See Section 3 above)\**

**\*\*Agency Hero Adaptation:\*\***&#x20;

An agency hero should utilize the same grid background and staggered \`.reveal\` animations. However, instead of a massive personal name, the typography should focus on the primary value offering.&#x20;

*\*Example:\**&#x20;

Eyebrow: \`// Enterprise Software & AI\`

H1: \`WE ENGINEER SCALABLE GROWTH.\`

Subtext: \`Partnering with forward-thinking brands to design and deploy modern web applications.\`



\---



**## PHASE 7 — PROJECT / PRODUCT SYSTEM**

**\*\*Existing Implementation:\*\***&#x20;

Content Collections (\`src/content/case-studies/\*.md\`). Zod schema enforces metadata. \`ProductShowcase.astro\` renders them based on a \`featured\` boolean and \`order\` integer.

**\*\*Agency Portfolio Adaptation:\*\***

The agency needs a more robust system.&#x20;

\- Create two collections: \`clientProjects\` and \`internalProducts\`.

\- Add taxonomy: \`industries\`, \`servicesProvided\`.

\- Instead of just homepage rendering, generate dedicated dynamic routes (\`/work/[slug].astro\`) containing full multi-image galleries, challenge/solution/result text, and client testimonials.



\---



**## PHASE 8 — CONTACT / LEAD GENERATION**

**\*\*Existing Implementation:\*\***&#x20;

Single-page Formspree form with \`\<select>\` dropdowns for Budget and Timeline.

**\*\*Agency Adaptation:\*\***

\- Add a "Company Name" field.

\- Add an "Industry" field.

\- Change the budget brackets to reflect agency pricing (e.g., starting at $10k instead of ₹25k).

\- Consider replacing Formspree with an API route to a CRM (Hubspot/Salesforce) or a dedicated lead-gen webhook (Zapier/Make).



\---



**## PHASE 9 — RESPONSIVE DESIGN AUDIT**



\| Area | Desktop | Tablet | Mobile | Key Pattern |

\|---|---|---|---|---|

\| **\*\*Header\*\*** | Logo left, Links center, CTA right. | Logo left, Hamburger right. | Logo left, Hamburger right. | Hidden overlay menu triggered via JS. |

\| **\*\*Hero\*\*** | 7xl Typography, horizontal CTAs. | 6xl Typo, horizontal CTAs. | 4xl Typo, stacked CTAs (w-full). | Typography scaling and flex-direction changes. |

\| **\*\*Products\*\***| 55/45 split (Image left, text right). | Stacked vertical. Image top. | Stacked vertical. | Flex row to Flex col. |

\| **\*\*Services\*\***| 2x2 Grid. | 2x2 Grid. | 1-column stack. | CSS Grid column adjustment. |

\| **\*\*FAQ\*\*** | 2-column Grid. | 2-column Grid. | 1-column stack. | CSS Grid column adjustment. |

\| **\*\*Footer\*\*** | 12-col grid (5-3-4). | Stacked blocks. | Stacked blocks. | Complete DOM restructuring (uses hidden/block classes). |



\---



**## PHASE 10 — UX STUDY**

**\*\*User Journey Analysis:\*\***

1\. **\*\*Landing:\*\*** Immediate understanding of who Rajat is (Hero).

2\. **\*\*Proof:\*\*** See actual products built (Case Studies).

3\. **\*\*Capabilities:\*\*** Understand services offered.

4\. **\*\*Trust:\*\*** Read personal ethos (About).

5\. **\*\*Objections:\*\*** Read FAQ.

6\. **\*\*Action:\*\*** Fill out form.

**\*\*Intentionality:\*\*** Yes, this is a highly optimized "funnel" approach.

**\*\*Agency Adaptation:\*\*** The agency journey should be: Landing -> Trust (Client Logos) -> Services -> Case Studies (Proof) -> Process (How we work) -> FAQ -> Lead Gen.



\---



**## PHASE 11 — SEO STUDY**

**\*\*Implementation:\*\***

\- Comprehensive \`\<head>\` setup in \`Layout.astro\`.

\- Automatic Canonical URL generation.

\- Dynamic Open Graph and Twitter Card tags.

\- Google Analytics (\`gtag.js\`).

\- Structured Data: \`application/ld+json\` injecting \`Person\` and \`WebSite\` schemas.

**\*\*Agency Adaptation:\*\***

\- Change \`Person\` schema to \`Organization\` or \`LocalBusiness\` schema.

\- Implement per-page SEO overrides (currently \`Layout.astro\` uses a static default title if not provided).



\---



**## PHASE 12 — PERFORMANCE STUDY**

**\*\*Performant because:\*\***

1\. Astro SSG (Zero runtime framework overhead).

2\. Tailwind v4 (Extremely fast build times and minimal CSS payload).

3\. Minimal JS (Only vanilla JS for toggles and IntersectionObserver). No React/Vue hydrated on the client.

4\. Astro \`\<Image />\` component automatically formats to WebP/AVIF and sets precise width/height attributes to prevent CLS.

**\*\*Potential Agency Problems:\*\***

If the agency site adds heavy video backgrounds, Three.js 3D elements, or complex Lottie animations (which agencies often do), the zero-JS performance benefit will be lost. Strict performance budgets must be kept.



\---



**## PHASE 13 — COMPONENT REUSABILITY**



\| Component | Purpose | Reusable? | Agency Adaptation |

\|---|---|---|---|

\| **\*\*Header Overlay\*\*** | Mobile Nav | Yes (100%) | Update links, keep drawer animation. |

\| **\*\*Theme Toggle\*\*** | Dark/Light Mode | Yes (100%) | Keep exact logic. |

\| **\*\*Faq Accordion\*\*** | Objection handling | Yes (100%) | Just swap data array. |

\| **\*\*ProductShowcase\*\***| Show case studies | Yes (Modified) | Adjust for smaller bento-grids, keep browser-frame. |

\| **\*\*Contact Form\*\*** | Lead Gen | Yes (Modified) | Adjust budget dropdowns and CRM integration. |



\---



**## PHASE 14 — WHAT TO BORROW VS WHAT TO CHANGE**



**### BORROW (Keep)**

\- The technical stack (Astro + Tailwind v4 SSG).

\- The Design Token structure in \`global.css\` (Canvas, Ink, Hairline).

\- The \`.bg-grid\` architectural aesthetic.

\- The \`.reveal\` global IntersectionObserver logic for high-performance scroll animations.

\- The mobile drawer navigation pattern.

\- The lead-qualification form structure (Budget/Timeline).



**### ADAPT (Change)**

\- **\*\*Typography:\*\*** Move away from "Geist" to something that fits the agency's specific brand identity.

\- **\*\*ProductShowcase:\*\*** Scale down the massive 1-column layout into a grid to show more volume of work.

\- **\*\*Routing:\*\*** Add dedicated \`/case-studies\`, \`/services\`, and \`/blog\` pages instead of a single-page monolith.



**### DO NOT BORROW**

\- The massive personal name in the Hero.

\- The "Independent Product Builder" positioning.

\- The "Person" JSON-LD SEO schema.



\---



**## PHASE 15 — AGENCY WEBSITE REFERENCE BLUEPRINT**

**\*\*Proposed Information Architecture:\*\***



1\. **\*\*Header\*\*** (Sticky, Glassmorphism, Mega-menu for services).

2\. **\*\*Hero\*\*** (Value Prop, Rotating Industry Focus, Grid Background).

3\. **\*\*Social Proof\*\*** (Client logo ticker - *\*New Pattern\**).

4\. **\*\*Services Bento Grid\*\*** (Adapted from existing Services grid).

5\. **\*\*Selected Work\*\*** (Adapted from ProductShowcase, but 2-column masonry).

6\. **\*\*Our Process\*\*** (Adapted from the "The Process" textual list, made more visual).

7\. **\*\*Ethos/About Us\*\*** (Team focused).

8\. **\*\*FAQ\*\*** (Reused exactly).

9\. **\*\*Lead Generation / Contact\*\*** (Reused form with expanded fields).

10\. **\*\*Footer\*\*** (Expanded to include addresses and social).



\---



**## PHASE 16 — FINAL MASTER REPORT**



The "Build With Rajat" portfolio is an exceptionally well-engineered piece of software. It utilizes Astro and Tailwind v4 to achieve near-perfect performance scores while maintaining a highly premium, interactive feel through CSS transitions, DOM isolation, and a custom IntersectionObserver framework.



Its **\*\*Design Philosophy\*\*** leans heavily into a "technical/developer" aesthetic, characterized by monospace eyebrow typography, 1px hairline borders (\`--color-hairline\`), and graph-paper backgrounds (\`.bg-grid\`).&#x20;



For the **\*\*Agency Website\*\***, this underlying architecture is a goldmine. The zero-JS static generation, the \`caseStudies\` content collection schema, the dark/light mode toggle logic, and the mobile drawer navigation should be lifted almost directly.&#x20;



However, the **\*\*UX and Content Strategy\*\*** must pivot from "I am an expert individual" to "We are a scalable, reliable enterprise partner." This means replacing personal imagery with team/process imagery, shifting the SEO schema from \`Person\` to \`Organization\`, and transitioning the homepage from a single-page monolith into a routing hub that drives traffic to dedicated service and case-study pages.&#x20;



**\*\*Decisions required before building the agency site:\*\***

1\. What is the new brand typography? (To replace Geist).

2\. Do we require dedicated routing for Case Studies (\`/work/[slug]\`), or will modals suffice?

3\. What CRM will the contact form connect to? (To replace Formspree).

4\. What are the official budget qualification brackets for the agency?
