export interface Deliverable {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
  context: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'ENGINEERING' | 'CLOUD' | 'AUTOMATION' | 'DESIGN' | 'GROWTH' | 'STRATEGY';
  badge: string;
  description: string;
  longDescription: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholderNote: string;
  keyMetrics: ServiceMetric[];
  businessOutcomes: string[];
  audiences: string[];
  deliverables: Deliverable[];
  process: ProcessStep[];
  techStack: string[];
  faqs: FaqItem[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    shortTitle: 'Web Development',
    category: 'ENGINEERING',
    badge: 'BUILD',
    description: 'High-performance websites engineered with modern static/SSR architecture, passing Core Web Vitals with zero plugin bloat.',
    longDescription: 'Your digital presence is the primary driver of commercial credibility. While traditional monolithic CMS sites struggle with plugin bloat, sluggish database queries, and frequent security vulnerabilities, we engineer custom web architectures utilizing Astro Islands and React. Every build ships near-zero JavaScript by default, passes Google\'s 2025/2026 Core Web Vitals thresholds in field data, and transforms visitors into qualified inquiries with sub-second page transitions.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    image: '/images/services/website-development.webp',
    imageAlt: 'Astro and modern web development architecture performance scorecard and responsive viewport previews',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview showcasing site mockups, component structure, or Lighthouse performance scores.',
    keyMetrics: [
      { value: '71%', label: 'CWV Pass Rate', context: 'Astro Islands architecture vs 35% industry average for Next.js' },
      { value: '≤ 2.5s', label: 'LCP Threshold', context: 'Largest Contentful Paint engineered for Google top-tier ranking' },
      { value: '+1%', label: 'Conversion Lift / 0.1s', context: 'Empirical revenue increase per 100ms load speed improvement' }
    ],
    businessOutcomes: [
      'Achieve 95-100 Google Lighthouse scores across Performance, Accessibility, and SEO.',
      'Eliminate annual WordPress security vulnerabilities and expensive maintenance patch cycles.',
      'Reduce bounce rates by up to 25% on mobile 4G/5G connections through partial hydration.',
      'Ensure WCAG 2.2 AA accessibility compliance across all interactive touchpoints.'
    ],
    audiences: ['Indian SMEs & MSMEs', 'Healthcare & Specialist Clinics', 'Real Estate Developers & Brokers', 'Jewellery Showrooms & Retailers', 'Funded Startups', 'International B2B Firms'],
    deliverables: [
      {
        title: 'Astro & Islands Static/SSR Architecture',
        description: 'Engineered with zero unnecessary client-side JavaScript, server-side pre-rendering, and isolated interactive islands for maximum speed and rock-solid stability.'
      },
      {
        title: 'Core Web Vitals & Mobile Optimization',
        description: 'Direct code tuning for sub-2.5s LCP, sub-200ms INP, and zero CLS, ensuring compliance with Google\'s mobile-first indexing standards.'
      },
      {
        title: 'Conversion-Focused Landing Pages',
        description: 'Strategic page hierarchy, high-contrast CTAs, and frictionless lead capture forms connected directly to WhatsApp and email pipelines.'
      },
      {
        title: 'Legacy Codebase Modernization',
        description: 'Refactoring slow, vulnerable WordPress or legacy PHP sites onto modern, static/edge architecture while preserving 100% of existing SEO equity and canonical structures.'
      }
    ],
    process: [
      { step: '01', title: 'Speed & Conversion Audit', description: 'We benchmark existing load speeds, bounce rates, and user friction points against top industry performers.' },
      { step: '02', title: 'Information Architecture & Wireframes', description: 'We map intuitive user journeys and typographic hierarchies designed to guide prospects directly to consultation.' },
      { step: '03', title: 'Component & Islands Engineering', description: 'We craft accessible, semantic components using Astro, Tailwind CSS, and TypeScript with zero runtime bloat.' },
      { step: '04', title: 'Cross-Device QA & CWV Testing', description: 'We validate performance across real mobile chipsets, screen readers, and slow network throttling profiles.' },
      { step: '05', title: 'Edge Deployment & DNS Hardening', description: 'We configure global CDN caching, SSL/TLS certificates, and structured Schema.org markup for launch.' }
    ],
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS v4', 'React Islands', 'Vite', 'Cloudflare Edge CDN', 'Lighthouse CI'],
    faqs: [
      {
        question: 'Why does SKYON build with Astro rather than traditional WordPress or generic page builders?',
        answer: 'Modern web data indicates that 71% of Astro websites pass Google Core Web Vitals, compared to only ~35% for traditional heavy frameworks. By shipping static HTML and hydrating only interactive elements, our builds load in milliseconds, require no database maintenance, and eliminate plugin security vulnerabilities entirely.'
      },
      {
        question: 'How does a 1-second load time improvement affect business conversions?',
        answer: 'Industry research consistently reveals that a 1-second delay in page load time reduces conversions by approximately 7%, whereas each 0.1-second improvement lifts conversion rates by ~1%. Fast web architecture directly translates to higher lead volume from paid ads and organic search.'
      },
      {
        question: 'Can non-technical team members update blog posts and service content?',
        answer: 'Yes. We implement lightweight Git-based content workflows and markdown templates where non-technical staff can edit articles, pricing, or case studies effortlessly without breaking design layout tokens.'
      },
      {
        question: 'How do you ensure the site renders properly across different phone screens?',
        answer: 'We enforce mobile-first responsive breakpoints, fluid typography scales, and rigorous cross-browser testing across iOS Safari, Android Chrome, and low-power devices.'
      }
    ]
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    category: 'ENGINEERING',
    badge: 'ENGINEER',
    description: 'Purpose-built web applications, internal operational dashboards, and modular monolith systems that eliminate manual bottlenecks and SaaS bloat.',
    longDescription: 'When off-the-shelf software forces your business into rigid workflows and expensive per-seat subscription models, custom software provides an unassailable competitive moat. In 2025/2026, engineering teams favor disciplined "modular monolith" architectures that eliminate the multi-hundred-thousand-dollar DevOps overhead of premature microservices. We engineer scalable, secure, and maintainable systems tailored to your proprietary business logic, data models, and integration ecosystems.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    image: '/images/services/custom-software.webp',
    imageAlt: 'Modular monolith system architecture and bespoke web application operational dashboard',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview showcasing database architecture schemas, operational portal interfaces, or system dataflow diagrams.',
    keyMetrics: [
      { value: '340%', label: 'Average Project ROI', context: 'Documented financial return across enterprise and SME custom software deployments' },
      { value: '67%', label: 'Efficiency Gains', context: 'Operational throughput lift by eliminating manual silos and fragmented spreadsheets' },
      { value: '13-18 mo', label: 'Payback Period', context: 'Full capital recovery timeframe (accelerating to 6-12 months for automated workflows)' }
    ],
    businessOutcomes: [
      'Cut monthly SaaS stacking fees by up to 45% by consolidating redundant third-party subscriptions into owned software.',
      'Reduce operational processing error rates by 60–95% through automated business logic validation.',
      'Accelerate feature delivery speed and leverage modern AI coding agents via unified modular monolith repositories.',
      'Maintain complete proprietary ownership of business code, intellectual property, and relational databases.'
    ],
    audiences: ['Expanding SMEs & MSMEs', 'Real Estate Brokerages & Portfolio Managers', 'Multi-Branch Clinics & Diagnostic Labs', 'Logistics & Supply Chain Hubs', 'High-Growth Tech Startups'],
    deliverables: [
      {
        title: 'Modular Fullstack Web Applications',
        description: 'End-to-end web applications engineered with strict domain boundaries, responsive client interfaces, and robust backend logic that scales without distributed system latency.'
      },
      {
        title: 'Internal Operations & Admin Dashboards',
        description: 'Bespoke management portals for real-time inventory tracking, multi-branch appointment bookings, lead assignment, and custom financial reconciliation.'
      },
      {
        title: 'API Architecture & Enterprise Integrations',
        description: 'Secure RESTful and webhook endpoints connecting third-party gateways (Stripe, Razorpay, WhatsApp Business, ERPs, CRMs) with strict type contracts.'
      },
      {
        title: 'Relational Database Design & Query Optimization',
        description: 'ACID-compliant data schemas in PostgreSQL with index optimization, connection pooling, and automated failover backup pipelines.'
      }
    ],
    process: [
      { step: '01', title: 'Domain Modeling & Requirements', description: 'We map core entities, access control matrices, business constraints, and operational bottlenecks.' },
      { step: '02', title: 'Schema & Contract Architecture', description: 'We specify database schemas, API contracts, and security boundaries before building business logic.' },
      { step: '03', title: 'Iterative Agile Development', description: 'We engineer modular services in two-week sprints with automated type-checking and unit test coverage.' },
      { step: '04', title: 'Security & Penetration Audit', description: 'We test SQL injection defenses, CSRF/XSS vectors, role-based authorization, and rate-limiting thresholds.' },
      { step: '05', title: 'Automated Containerized Rollout', description: 'We deploy containerized builds to isolated environments with automated zero-downtime migrations.' }
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Docker', 'Prisma / Drizzle', 'Redis', 'REST / Webhooks'],
    faqs: [
      {
        question: 'Why do you recommend a modular monolith over microservices for most businesses?',
        answer: 'Recent 2025/2026 data shows that microservices introduce a steep "complexity tax"—often costing upwards of $900k annually in DevOps tools, distributed network latency, and deployment friction. A modular monolith enforces strict domain boundaries inside a unified codebase, delivering high developer velocity, simpler debugging, lower hosting costs, and seamless compatibility with AI-assisted engineering.'
      },
      {
        question: 'How does custom software deliver a 340% average ROI?',
        answer: 'ROI stems from three compounding vectors: eliminating expensive monthly per-user SaaS licenses, automating repetitive manual tasks that save hundreds of human hours monthly, and eliminating manual data-entry errors that lead to lost orders or customer churn.'
      },
      {
        question: 'Who retains ownership of the source code and database?',
        answer: 'Under our transparent commercial terms, 100% of proprietary code, schemas, and assets transfer fully to you upon final milestone settlement. You never face vendor lock-in or proprietary licensing dependencies.'
      },
      {
        question: 'Can the application integrate with our existing accounting or CRM systems?',
        answer: 'Yes. We engineer bidirectional REST and webhook integrations to sync data securely with Tally, Zoho, Salesforce, WhatsApp, payment gateways, and custom internal APIs.'
      }
    ]
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & Infrastructure',
    shortTitle: 'Cloud Solutions',
    category: 'CLOUD',
    badge: 'INFRASTRUCTURE',
    description: 'Edge CDN hosting, automated CI/CD pipelines, FinOps cloud cost optimization, and enterprise infrastructure security.',
    longDescription: 'Unmanaged cloud deployments quickly devolve into runaway egress bills, security vulnerabilities, and unpredictable downtime. In 2025/2026, progressive cloud engineering embraces FinOps unit economics and edge-first routing—offloading egress-heavy static traffic and API routing to Cloudflare Edge while maintaining stateful backends on AWS or GCP. We design resilient, cost-predictable infrastructure that guarantees 99.99% availability, automates deployments, and eliminates cloud waste.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z',
    image: '/images/services/cloud-solutions.webp',
    imageAlt: 'High availability multi-region cloud infrastructure and automated edge delivery topology',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview displaying cloud network topology diagrams, CI/CD pipeline triggers, or latency heatmaps.',
    keyMetrics: [
      { value: '99.99%', label: 'Availability SLA', context: 'High-availability uptime target limiting annual downtime to under 52 minutes' },
      { value: 'Up to 80%', label: 'Egress Cost Savings', context: 'Reduction in AWS bandwidth & API gateway transfer fees via Cloudflare Edge' },
      { value: '20-35%', label: 'Cloud Waste Reduction', context: 'Average savings achieved through FinOps instance rightsizing and idle resource pruning' }
    ],
    businessOutcomes: [
      'Achieve sub-5ms cold-start response times globally via distributed V8 edge compute nodes.',
      'Accelerate software deployment frequency by 5x with automated GitHub Actions CI/CD pipelines.',
      'Harden email deliverability and domain reputation with 100% compliant SPF, DKIM, and DMARC records.',
      'Enforce automated hourly/daily encrypted offsite database backups with zero manual overhead.'
    ],
    audiences: ['High-Traffic Web Portals', 'Growing SaaS & Cloud Startups', 'Enterprises Migrating from On-Premise Servers', 'Regional Real Estate Portals', 'Global Ecommerce Brands'],
    deliverables: [
      {
        title: 'Edge Architecture & Egress Optimization',
        description: 'Configuring global CDN caching and edge-routing layers that drastically cut origin server bandwidth consumption and cloud egress fees.'
      },
      {
        title: 'Automated CI/CD Delivery Pipelines',
        description: 'Building automated Git-triggered build, test, and zero-downtime deployment workflows with preview staging environments.'
      },
      {
        title: 'DNS, SSL/TLS & Email Security Hardening',
        description: 'Enterprise DNS management with DNSSEC, automated SSL renewal, HSTS headers, and strict DMARC/SPF/DKIM email spoofing defense.'
      },
      {
        title: 'FinOps Cost Auditing & Rightsizing',
        description: 'Thorough auditing of monthly AWS/GCP bills to terminate orphaned volumes, right-size compute instances, and lock in reserved pricing.'
      }
    ],
    process: [
      { step: '01', title: 'Infrastructure & Billing Audit', description: 'We analyze current resource utilization, bandwidth bottlenecks, and monthly recurring cloud line items.' },
      { step: '02', title: 'Topology & Network Design', description: 'We architect a hybrid topology balancing compute gravity with cost-effective edge caching.' },
      { step: '03', title: 'Automated CI/CD Pipeline Setup', description: 'We implement GitHub Actions workflows with linting, security scanning, and preview branches.' },
      { step: '04', title: 'Zero-Downtime Migration', description: 'We execute gradual DNS cutovers and database syncs with verified rollback safety nets.' },
      { step: '05', title: 'Continuous Health & Cost Alerts', description: 'We establish automated budget thresholds, uptime monitors, and PagerDuty/Slack incident hooks.' }
    ],
    techStack: ['Cloudflare', 'AWS', 'Google Cloud Platform (GCP)', 'GitHub Actions', 'Docker', 'Terraform', 'PostgreSQL Backups', 'DNSSEC / DMARC'],
    faqs: [
      {
        question: 'How does edge routing reduce cloud expenses by up to 80%?',
        answer: 'AWS and traditional providers charge substantial per-gigabyte egress fees for outbound data transfer. By placing Cloudflare Edge in front of your applications, static assets and cached API responses are served directly from edge points of presence with zero bandwidth fees, shielding your core origin servers from expensive compute spikes.'
      },
      {
        question: 'What does a 99.99% uptime SLA mean in practice?',
        answer: 'A 99.99% availability level allows for less than 52 minutes of unplanned downtime across an entire calendar year. We achieve this through multi-region CDN caching, containerized auto-recovery, and automated database replication.'
      },
      {
        question: 'Can you help us migrate off expensive on-premise hardware or unmanaged VPSs?',
        answer: 'Yes. We assess your resource requirements, plan containerized deployments, and migrate data with minimal, scheduled maintenance windows and zero data loss.'
      },
      {
        question: 'How do you protect domains from phishing and spoofing?',
        answer: 'We enforce strict DNSSEC cryptographic authentication alongside DMARC reject policies, DKIM keys, and SPF records, ensuring that emails sent under your company domain land in primary inboxes and cannot be spoofed.'
      }
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation Solutions',
    shortTitle: 'AI & Automation',
    category: 'AUTOMATION',
    badge: 'AUTOMATE',
    description: 'Pragmatic workflow automation, WhatsApp Business lead capture, and domain-governed AI assistants that eliminate manual tasks.',
    longDescription: 'Artificial intelligence delivers true enterprise value only when tethered to concrete operational pipelines. In 2025/2026, business success depends heavily on the "5-minute rule"—where leads contacted within five minutes are 21 times more likely to enter sales qualification than those delayed by 30 minutes. We engineer pragmatic automation: automated webhook routing, instant WhatsApp lead follow-ups, document data extraction, and AI assistants grounded strictly in your proprietary business knowledge.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    image: '/images/services/ai-automation.webp',
    imageAlt: 'Real-time workflow automation pipeline and WhatsApp Business conversational intelligence flow',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview illustrating lead qualification webhook flows, WhatsApp conversation funnels, or document parsing architecture.',
    keyMetrics: [
      { value: '21x', label: 'Lead Qualification Odds', context: 'Documented sales conversion advantage for leads engaged within the critical 5-minute window' },
      { value: '391%', label: 'Conversion Rate Lift', context: 'Increase in lead conversion achieved when response times are reduced to under 60 seconds' },
      { value: '60-95%', label: 'Error Rate Reduction', context: 'Drop in manual operational data entry mistakes through automated webhook pipelines' }
    ],
    businessOutcomes: [
      'Engage every incoming web and ad inquiry instantaneously via official WhatsApp Business API triggers.',
      'Reclaim 15–25 team hours every week by automating repetitive data transcription and customer follow-ups.',
      'Deploy domain-bounded AI chat assistants with strict hallucination guardrails and seamless human escalation.',
      'Synchronize lead submissions automatically across CRM, Google Sheets, internal databases, and email.'
    ],
    audiences: ['Real Estate Agencies & Builders', 'Specialist Healthcare Clinics', 'High-Volume Customer Support Teams', 'Consulting & Legal Practices', 'E-Commerce & Retail Operations'],
    deliverables: [
      {
        title: 'Instant Lead Capture & WhatsApp Pipelines',
        description: 'Direct webhook integrations connecting website inquiries and ads to WhatsApp Business, delivering personalized confirmation messages within seconds.'
      },
      {
        title: 'Domain-Governed RAG Assistants',
        description: 'Custom AI knowledge assistants trained strictly on your approved business documentation, pricing guides, and FAQs with zero external hallucination.'
      },
      {
        title: 'Document & Invoicing Data Extraction',
        description: 'Automated OCR and LLM pipelines that parse incoming invoices, resumes, or medical forms into structured JSON data records.'
      },
      {
        title: 'Cross-Platform Workflow Automation',
        description: 'Event-driven automation connecting webhooks across CRM systems, Google Workspace, Slack, payment gateways, and databases.'
      }
    ],
    process: [
      { step: '01', title: 'Bottleneck & Workflow Audit', description: 'We map repetitive manual handoffs, response latency gaps, and human data-entry bottlenecks.' },
      { step: '02', title: 'Trigger & Logic Architecture', description: 'We design conditional pipelines, data schemas, API webhooks, and fallback validation protocols.' },
      { step: '03', title: 'Secure Integration Engineering', description: 'We build pipelines using resilient serverless functions, WhatsApp APIs, and rate-limited LLM endpoints.' },
      { step: '04', title: 'Stress Testing & Guardrail Verification', description: 'We simulate edge cases, malformed payloads, and boundary questions to verify absolute reliability.' },
      { step: '05', title: 'Production Handoff & Monitoring', description: 'We launch automated monitoring dashboards with alert webhooks for failed transactions.' }
    ],
    techStack: ['Python', 'Node.js', 'WhatsApp Business API', 'OpenAI / Anthropic APIs', 'Webhooks', 'Zapier / Make', 'PostgreSQL', 'LangChain / LlamaIndex'],
    faqs: [
      {
        question: 'Why is immediate lead response time so critical for sales conversion?',
        answer: 'Empirical sales studies show that 78% of customers buy from the company that responds first. Contacting a lead within 5 minutes yields 21x higher qualification rates than waiting 30 minutes, and responding in under 60 seconds drives a 391% conversion surge. Automation bridges this gap by engaging prospects instantly while buying interest is peaked.'
      },
      {
        question: 'How do you prevent AI assistants from "hallucinating" or making false claims?',
        answer: 'We implement Retrieval-Augmented Generation (RAG) with strict system guardrails. The AI is explicitly constrained to reference only your verified business data sheets. If a query falls outside approved parameters, the assistant gracefully transfers the conversation to a human team member.'
      },
      {
        question: 'Is technical coding expertise required for our staff to manage the automations?',
        answer: 'No. We build turnkey systems with intuitive operational interfaces and provide complete documentation so non-technical staff can update parameters, review logs, and add FAQ responses.'
      },
      {
        question: 'Does WhatsApp automation violate WhatsApp\'s messaging policies?',
        answer: 'No. We integrate strictly through the official Meta WhatsApp Business Cloud API using pre-approved utility and marketing templates, ensuring compliance and preventing number bans.'
      }
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    category: 'DESIGN',
    badge: 'DESIGN',
    description: 'User-centered interface design, interactive Figma prototypes, and design systems engineered for conversion and WCAG 2.2 accessibility.',
    longDescription: 'Exceptional visual design is a commercial asset, not mere decoration. Research from Forrester demonstrates that every $1 invested in strategic UX yields up to $100 in return, while resolving usability defects during the design phase costs up to 100 times less than refactoring production code post-launch. We design high-converting, intuitive digital interfaces grounded in cognitive psychology, responsive design tokens, and rigorous WCAG 2.2 AA accessibility standards.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    image: '/images/services/ui-ux-design.webp',
    imageAlt: 'Figma component tokens design system and responsive mobile interface prototypes',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview showcasing Figma design system tokens, responsive mobile/desktop screen flows, or interactive prototype frames.',
    keyMetrics: [
      { value: '$100 : $1', label: 'Forrester UX ROI', context: 'Empirical return ratio documented across well-executed digital UX optimization projects' },
      { value: '100x Less', label: 'Cost of Early Resolution', context: 'Cost to fix usability flaws in Figma vs refactoring post-launch production code' },
      { value: '12%', label: 'Bounce Rate Reduction', context: 'Average user retention improvement achieved through WCAG 2.2 AA accessible interfaces' }
    ],
    businessOutcomes: [
      'Accelerate frontend development speed by 30–40% via standardized, reusable Figma component libraries.',
      'Ensure full compliance with WCAG 2.2 AA contrast, typography scale, and keyboard navigation standards.',
      'Validate user flows and stakeholder consensus with clickable, high-fidelity prototypes before code is written.',
      'Minimize mobile bounce rates through touch-optimized target sizes and intuitive navigation hierarchies.'
    ],
    audiences: ['Digital Product Startups', 'Luxury Brands & Fine Jewellers', 'Real Estate Portals & Platforms', 'Multi-Specialty Clinics', 'Enterprise SaaS Teams'],
    deliverables: [
      {
        title: 'Information Architecture & Low-Fi Wireframes',
        description: 'Mapping intuitive user flows, content prioritization, and screen blueprints to validate functional logic before aesthetic styling.'
      },
      {
        title: 'High-Fidelity UI Design & Responsive Screens',
        description: 'Crafting pixel-perfect interface screens in Figma with precise typography scales, spacing tokens, and dark/light mode variants.'
      },
      {
        title: 'Design Systems & Component Libraries',
        description: 'Building comprehensive UI systems with reusable buttons, form inputs, modals, and navigation drawers tied to clean CSS token variables.'
      },
      {
        title: 'WCAG 2.2 AA Accessibility Audits',
        description: 'Rigorous testing of color contrast ratios, font legibility, screen reader labels, and touch-target minimums (≥ 44×44px).'
      }
    ],
    process: [
      { step: '01', title: 'User Research & Journey Mapping', description: 'We analyze customer intent, mental models, and competitor UX friction points.' },
      { step: '02', title: 'Wireframing & Architectural Flows', description: 'We structure information hierarchies and validate task completion paths.' },
      { step: '03', title: 'Visual Styling & Token Systems', description: 'We craft high-fidelity UI components, color palettes, and typographic hierarchies in Figma.' },
      { step: '04', title: 'Interactive Clickable Prototyping', description: 'We create realistic prototypes to test user navigation, animations, and responsive reflow.' },
      { step: '05', title: 'Developer Handoff & Asset Specs', description: 'We export production-ready assets, responsive specs, and CSS token documentation.' }
    ],
    techStack: ['Figma', 'FigJam', 'Design Tokens', 'WCAG 2.2 AA', 'Responsive Reflow', 'Prototyping', 'Tailwind Token Mapping'],
    faqs: [
      {
        question: 'Why is fixing usability issues during the design phase 100x cheaper than in development?',
        answer: 'IBM and software engineering studies show that changing a layout or form flow in Figma takes minutes of designer time. In contrast, altering an already-coded production feature requires schema migrations, backend rewrites, QA regression cycles, and redeployment—multiplying development costs by a factor of 100.'
      },
      {
        question: 'How does WCAG 2.2 AA accessibility improve commercial business outcomes?',
        answer: 'Accessible design improves readability for all users, expands market reach to over 1 billion people with visual or motor impairments, lowers mobile bounce rates by 12%, and provides crucial legal protection against web accessibility litigation.'
      },
      {
        question: 'Do you design separate interfaces for mobile, tablet, and desktop screens?',
        answer: 'Yes. Every interface is designed with a fluid responsive approach, providing dedicated layout specifications for mobile screens (≤ 480px), tablets (768px), and wide desktop displays (≥ 1280px).'
      },
      {
        question: 'How do our engineers receive design assets during implementation?',
        answer: 'We provide complete Figma handoff files with component variants, auto-layout parameters, SVG iconography, exportable assets, and CSS design token specifications that map directly to Tailwind CSS.'
      }
    ]
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Strategy',
    shortTitle: 'IT Consulting',
    category: 'STRATEGY',
    badge: 'STRATEGY',
    description: 'Objective technology advisory, codebase architecture audits, legacy refactoring roadmaps, and vendor governance.',
    longDescription: 'Uninformed technology investments quickly lead to crippling technical debt, failed digital transformations, and exorbitant vendor invoices. Industry research from Gartner and McKinsey reveals that 20% to 40% of standard enterprise IT budgets are consumed simply by servicing legacy technical debt, while 70% of digital transformation initiatives fail to meet their original objectives. We provide independent, senior-level technology consulting to help you evaluate build-vs-buy decisions, eliminate hidden technical liabilities, and modernize your digital infrastructure with zero business disruption.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    image: '/images/services/it-consulting.webp',
    imageAlt: 'Enterprise IT architecture modernization strategy and vendor governance roadmap',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview featuring architectural modernization roadmaps, technical audit scorecards, or vendor evaluation matrices.',
    keyMetrics: [
      { value: '20-40%', label: 'IT Budget Debt Drain', context: 'Portion of typical enterprise tech budgets consumed by servicing legacy technical debt' },
      { value: '70-80%', label: 'Failed Transformation Rate', context: 'Industry failure rate of unguided digital modernization projects mitigated by strategic planning' },
      { value: '15-30%', label: 'Vendor Cost Savings', context: 'Unnecessary agency & SaaS licensing expenses identified and cut via independent audits' }
    ],
    businessOutcomes: [
      'Reclaim engineering capacity by identifying and refactoring core architectural debt bottlenecks.',
      'Make data-backed "build vs buy" decisions that avoid expensive multi-year proprietary software lock-in.',
      'Protect capital through independent technical auditing of contractor proposals and agency deliverables.',
      'Formulate realistic, phased digital migration roadmaps with zero unplanned operational downtime.'
    ],
    audiences: ['Non-Technical Founders & C-Suite Executives', 'SME & MSME Business Owners', 'Growing Real Estate Groups', 'Healthcare Networks Expanding Digital Ops', 'Established Enterprises'],
    deliverables: [
      {
        title: 'Comprehensive Codebase & Security Audits',
        description: 'Independent analysis of site performance, codebase maintainability, security vulnerabilities, API scalability, and licensing liabilities.'
      },
      {
        title: 'Technology Stack & Architecture Selection',
        description: 'Objective evaluations guiding framework selection (Astro vs React vs Next.js), database selection (PostgreSQL vs SQLite vs NoSQL), and cloud providers.'
      },
      {
        title: 'Phased Modernization Roadmaps',
        description: 'Structured step-by-step modernization plans that replace fragile legacy systems incrementally without halting daily business operations.'
      },
      {
        title: 'Vendor & RFP Technical Governance',
        description: 'Expert technical evaluation of third-party agency proposals, contractor code deliverables, and enterprise software contracts.'
      }
    ],
    process: [
      { step: '01', title: 'Current State Diagnostic', description: 'We evaluate your active software assets, infrastructure bills, security posture, and team bottlenecks.' },
      { step: '02', title: 'Technical Debt & Risk Mapping', description: 'We quantify hidden maintenance liabilities, single points of failure, and excessive vendor costs.' },
      { step: '03', title: 'Strategic Architectural Roadmap', description: 'We deliver an actionable, prioritized roadmap outlining high-ROI improvements and risk mitigations.' },
      { step: '04', title: 'Executive Briefing & Trade-Offs', description: 'We present clear findings and commercial trade-offs in plain, jargon-free business language.' },
      { step: '05', title: 'Implementation Governance', description: 'We provide ongoing technical oversight during execution to verify code quality and architectural conformance.' }
    ],
    techStack: ['Architecture Audits', 'FinOps Evaluation', 'Security Posture Reviews', 'Build vs Buy Analysis', 'Technical Governance'],
    faqs: [
      {
        question: 'How does technical debt consume 20% to 40% of an IT budget?',
        answer: 'Technical debt accumulates when systems are built quickly without proper architecture, automated tests, or documentation. Over time, engineers spend 40%+ of their working hours debugging regressions, applying emergency patches, and managing fragile integrations rather than building revenue-generating features. Strategic refactoring reclaims this capacity.'
      },
      {
        question: 'How do you evaluate whether we should build custom software or buy SaaS?',
        answer: 'We analyze your core business differentiation, long-term per-seat costs, data ownership requirements, and customization needs. If an off-the-shelf tool handles 90% of standard operations at low cost, we recommend buying. If the workflow defines your unique competitive advantage, building custom prevents vendor lock-in and scales your business moat.'
      },
      {
        question: 'Who leads the consulting sessions at SKYON?',
        answer: 'You work directly with senior architects and technical leaders with real-world engineering experience—not junior account managers or sales consultants.'
      },
      {
        question: 'Can you review code delivered by our current external development agency?',
        answer: 'Yes. We perform independent, objective code audits covering architecture, security vulnerabilities, test coverage, and documentation completeness, delivering an itemized report before you release final milestone payments.'
      }
    ]
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO Services',
    category: 'GROWTH',
    badge: 'GET FOUND',
    description: 'Technical SEO, JSON-LD structured data, Core Web Vitals optimization, and Google Business Profile local 3-pack dominance.',
    longDescription: 'SEO in 2025/2026 is no longer about superficial keyword stuffing; it is defined by machine-readable semantic architectures and local commercial intent. With Google AI Overviews and modern SERP features reshaping search behavior, high-ranking businesses rely on two undeniable pillars: structured JSON-LD Schema markup (which delivers a 20–30% higher organic CTR) and the Google Local 3-Pack (which captures 42% of local search clicks). We engineer technical SEO from the code up, ensuring search engines crawl, index, and cite your business with absolute authority.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    image: '/images/services/seo.webp',
    imageAlt: 'Technical SEO audit performance scorecard and Google Local 3-Pack search presence',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview displaying Google Search Console index coverage charts, Lighthouse SEO scores, or Local 3-Pack rank tracking.',
    keyMetrics: [
      { value: '42%', label: 'Local 3-Pack Click Share', context: 'Proportion of local-intent clicks captured by the top 3 Google Maps pack entries' },
      { value: '+20-30%', label: 'CTR Lift via Schema', context: 'Average click-through rate increase driven by rich JSON-LD snippet markup' },
      { value: '93%', label: 'Local Intent SERP Presence', context: 'Percentage of commercial local searches where Google displays the prominent 3-pack' }
    ],
    businessOutcomes: [
      'Secure top Google Local 3-Pack rankings for regional high-intent search queries.',
      'Achieve instant rich snippet eligibility (star ratings, services, FAQs) via validated JSON-LD schema.',
      'Ensure content is indexed and cited accurately within Google AI Overviews and LLM knowledge graphs.',
      'Eliminate crawl budget waste, redirect chains, canonical conflicts, and 404 indexing errors.'
    ],
    audiences: ['Local Clinics & Medical Specialists', 'Real Estate Brokers & Property Firms', 'Jewellery Showrooms & Artisans', 'Regional Professional Services', 'National B2B Providers'],
    deliverables: [
      {
        title: 'Technical Crawlability & Indexing Architecture',
        description: 'Optimizing robots.txt, dynamic XML sitemaps, canonical tags, and HTTP header responses to eliminate indexing barriers.'
      },
      {
        title: 'Comprehensive JSON-LD Schema Markup',
        description: 'Implementing semantic schema graphs (Organization, LocalBusiness, Service, BreadcrumbList, FAQPage) directly in page code.'
      },
      {
        title: 'Google Business Profile & Local 3-Pack Optimization',
        description: 'Auditing category selections, geo-coordinates, NAP consistency, service menus, and local citation directories.'
      },
      {
        title: 'Core Web Vitals Code-Level Tuning',
        description: 'Direct developer optimization of LCP, INP, and CLS performance metrics to satisfy Google\'s page experience ranking algorithm.'
      }
    ],
    process: [
      { step: '01', title: 'Deep Technical & Crawl Audit', description: 'We crawl your domain to identify redirect loops, orphan pages, crawl budget waste, and broken canonicals.' },
      { step: '02', title: 'Commercial Keyword & Intent Mapping', description: 'We target high-intent, transactional search terms used by paying clients in your target geography.' },
      { step: '03', title: 'Code-Level Schema & On-Page Implementation', description: 'We embed clean JSON-LD structured data and optimize header hierarchies across all service pages.' },
      { step: '04', title: 'Local Search & Google Business Alignment', description: 'We synchronize your Google Business Profile attributes and regional directory citations.' },
      { step: '05', title: 'Search Console & Performance Tracking', description: 'We track indexing velocity, impressions, average positions, and organic inquiry conversions.' }
    ],
    techStack: ['Schema.org', 'Google Search Console', 'Astro Sitemap', 'Lighthouse', 'JSON-LD', 'Google Business Profile', 'Screaming Frog'],
    faqs: [
      {
        question: 'Why is the Google Local 3-Pack so critical for local clinics and businesses?',
        answer: 'Data shows that the 3-Pack appears on 93% of searches with local commercial intent and captures approximately 42% of all search clicks. Businesses featured in the top 3 receive 93% more customer actions (phone calls, website visits, direction requests) compared to businesses ranking below the pack.'
      },
      {
        question: 'How does structured JSON-LD Schema markup increase website traffic?',
        answer: 'Schema markup provides search engines with explicit, machine-readable data about your business, services, pricing, and reviews. This enables rich snippets in search results, which research shows increases click-through rates by 20% to 30% compared to plain blue links, while also facilitating citations in Google AI Overviews.'
      },
      {
        question: 'How long does it take to see tangible ranking improvements?',
        answer: 'While technical fixes and schema implementation are recognized by Google crawlers within days to weeks, significant organic ranking shifts typically emerge over 3 to 6 months as domain trust, local citation consistency, and search signals compound.'
      },
      {
        question: 'Can any agency guarantee a #1 ranking on Google?',
        answer: 'No ethical agency can guarantee an absolute #1 ranking, as Google\'s ranking algorithms evaluate hundreds of dynamic factors. We focus on verified technical fundamentals, Core Web Vitals excellence, and authoritative local optimization to maximize your competitive visibility.'
      }
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    shortTitle: 'Digital Marketing',
    category: 'GROWTH',
    badge: 'REACH',
    description: 'High-ROI Google Ads campaigns, Click-to-WhatsApp conversion funnels, and transparent customer acquisition tracking.',
    longDescription: 'Paid advertising should function as an accountable revenue engine, not an ambiguous marketing expense. While traditional web forms often convert at a modest 2% to 4%, modern Click-to-WhatsApp (CTWA) ad funnels achieve 12% to 22% conversion rates from ad click to active prospect conversation, backed by 20% to 60% chat reply rates. We engineer targeted Google Search and Meta advertising campaigns, pairing high-intent search terms with conversion-engineered landing pages and direct WhatsApp inquiry pipelines to maximize return on ad spend (ROAS).',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    image: '/images/services/digital-marketing.webp',
    imageAlt: 'Multi-channel digital marketing conversion funnel and Click-to-WhatsApp performance metrics',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview illustrating ad campaign funnels, Click-to-WhatsApp conversion flows, or ROAS attribution dashboards.',
    keyMetrics: [
      { value: '12-22%', label: 'WhatsApp Ad Conversion', context: 'Conversion rate from ad click to active conversation (vs 2-4% on standard web forms)' },
      { value: '3.52x', label: 'Median Google Search ROAS', context: 'Industry benchmark return on ad spend across high-intent search campaigns' },
      { value: '20-60%', label: 'Chat Reply Rate', context: 'Conversational engagement rate achieved through direct Click-to-WhatsApp campaigns' }
    ],
    businessOutcomes: [
      'Capture high-intent commercial buyers actively searching for your services on Google.',
      'Bypass landing page friction with direct Click-to-WhatsApp ads for instant conversational qualification.',
      'Eliminate ad budget waste through aggressive negative keyword lists and bid pacing optimization.',
      'Track transparent cost-per-qualified-lead (CPL) metrics across Google Ads and Meta platforms.'
    ],
    audiences: ['Real Estate Property Launches & Projects', 'Specialist Clinics & Healthcare Practices', 'Fine Jewellery Brands & Showrooms', 'Funded Startups & SMEs', 'International Exporters & B2B Services'],
    deliverables: [
      {
        title: 'High-Intent Google Search Ads Management',
        description: 'Building targeted search campaigns focused on high-intent transactional keywords with negative keyword hygiene and automated bid strategies.'
      },
      {
        title: 'Click-to-WhatsApp (CTWA) Funnel Architecture',
        description: 'Engineering Meta and Google ad campaigns that drive prospects directly into WhatsApp Business conversations with pre-filled inquiry prompts.'
      },
      {
        title: 'Dedicated High-Converting Landing Pages',
        description: 'Designing lightweight, sub-second landing pages tailored specifically to ad messaging to boost Google Quality Scores and lower cost-per-click.'
      },
      {
        title: 'Full-Funnel Conversion Tracking & Attribution',
        description: 'Setting up Google Tag Manager, Meta Pixel, and server-side conversion tracking to measure exact cost-per-lead and true ROAS.'
      }
    ],
    process: [
      { step: '01', title: 'Target Audience & Unit Economics', description: 'We calculate your customer lifetime value (LTV), target cost-per-acquisition (CAC), and geographic targets.' },
      { step: '02', title: 'Funnel & Creative Architecture', description: 'We craft compelling ad copy, visual assets, and matching high-speed landing page experiences.' },
      { step: '03', title: 'Campaign Deployment & Conversion Tracking', description: 'We launch campaigns with granular keyword match types, negative lists, and verified tracking tags.' },
      { step: '04', title: 'Iterative Bid & A/B Copy Optimization', description: 'We optimize bids, pause underperforming keywords, and refine ad messaging based on verified inquiry data.' },
      { step: '05', title: 'Transparent Performance Reporting', description: 'We provide clear monthly reviews focusing on verified leads generated and return on ad spend.' }
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'WhatsApp Business API', 'Google Tag Manager', 'Google Analytics 4', 'Conversion Tracking'],
    faqs: [
      {
        question: 'Why do Click-to-WhatsApp ads outperform traditional website lead forms?',
        answer: 'Traditional landing page forms introduce friction: long load times, multi-field forms, and email verification hurdles, yielding typical conversion rates of just 2% to 4%. Click-to-WhatsApp ads open the user\'s native messaging app with a single click, yielding a 12% to 22% ad-to-conversation conversion rate and 20% to 60% reply rates.'
      },
      {
        question: 'What is an achievable ROAS (Return on Ad Spend) for our business?',
        answer: 'While results vary by industry and ticket size, well-optimized Google Search campaigns achieve a median ROAS of ~3.52x. For high-ticket services like real estate or specialized healthcare, return multiples can exceed 5x to 10x when high-intent search terms are paired with rapid follow-ups.'
      },
      {
        question: 'How do you protect our ad budget from click fraud and irrelevant searches?',
        answer: 'We implement exhaustive negative keyword lists, restrict geographic targeting strictly to verified client zones, utilize exact and phrase match types, and monitor search terms weekly to eliminate wasted spend.'
      },
      {
        question: 'What minimum ad budget is recommended to get started?',
        answer: 'We recommend starting with an ad budget proportionate to your local search volume and service margins. During our initial consultation, we provide an estimated cost-per-click analysis to define an optimal pilot budget.'
      }
    ]
  },
  {
    slug: 'social-media',
    title: 'Social Media Management',
    shortTitle: 'Social Media',
    category: 'GROWTH',
    badge: 'ENGAGE',
    description: 'B2B LinkedIn thought leadership, educational Instagram carousels, and strategic content cadence that builds commercial authority.',
    longDescription: 'Social media presence is a primary trust signal when prospective clients conduct due diligence. Research indicates that 82% of B2B decision-makers review a company\'s social media presence before signing vendor contracts. On LinkedIn, high-performing corporate pages achieve 2% to 4% engagement rates (with PDF carousels delivering top algorithmic reach), while on Instagram, multi-slide educational carousels achieve 2x higher saves and up to 3.0%–4.8% engagement via the platform\'s 24–48 hour algorithmic re-serve window. We manage your social presence with rigorous brand consistency, thought leadership content, and professional visual direction.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    image: '/images/services/social-media.webp',
    imageAlt: 'B2B LinkedIn thought leadership strategy and Instagram educational carousel design showcase',
    imagePlaceholderNote: 'Upload a 1200×675 WebP/PNG preview showcasing monthly content editorial calendars, carousel slide layouts, or engagement analytics charts.',
    keyMetrics: [
      { value: '2-4%', label: 'B2B LinkedIn Engagement', context: 'Target engagement benchmark for high-performing corporate thought leadership pages' },
      { value: '2x Higher', label: 'Carousel Save Rate', context: 'Documented save & bookmark advantage of multi-slide educational carousels over single images' },
      { value: '82%', label: 'B2B Buyer Due Diligence', context: 'Proportion of commercial decision-makers who evaluate vendor social credibility before signing' }
    ],
    businessOutcomes: [
      'Establish executive thought leadership and market authority on LinkedIn.',
      'Maximize algorithmic reach on Instagram using educational multi-slide carousels.',
      'Maintain a consistent, professional publishing cadence without burdening internal team resources.',
      'Funnel engaged followers directly into website visits and official WhatsApp inquiries.'
    ],
    audiences: ['Jewellery Brands & Luxury Showrooms', 'Real Estate Builders & Brokerages', 'Specialist Clinics & Healthcare Providers', 'Tech Founders & B2B Enterprises'],
    deliverables: [
      {
        title: 'Monthly Strategic Editorial Calendar',
        description: 'Structuring content themes around industry education, case proof, customer success stories, and service capabilities.'
      },
      {
        title: 'High-Fidelity Carousel & Graphic Production',
        description: 'Designing brand-aligned multi-slide carousels and infographics adhering strictly to typography, color, and spacing tokens.'
      },
      {
        title: 'B2B LinkedIn Thought Leadership Posts',
        description: 'Drafting insightful, value-packed perspective posts tailored to founder and executive profiles to drive commercial connections.'
      },
      {
        title: 'Profile Architecture & Bio Optimization',
        description: 'Optimizing company bios, custom banners, featured highlights, and direct Click-to-WhatsApp inquiry links.'
      }
    ],
    process: [
      { step: '01', title: 'Brand & Competitive Positioning Audit', description: 'We evaluate existing profiles, audience demographics, and competitor content benchmarks.' },
      { step: '02', title: 'Content Pillar & Calendar Planning', description: 'We formulate monthly content themes and submit detailed copy drafts for client review.' },
      { step: '03', title: 'Visual Creative & Carousel Production', description: 'We engineer professional graphics, carousels, and story templates adhering to brand tokens.' },
      { step: '04', title: 'Scheduled Publishing & Community Monitoring', description: 'We publish at peak engagement times and monitor comment and message activity.' },
      { step: '05', title: 'Monthly Growth & Engagement Review', description: 'We review reach, saves, follower quality, and inquiry conversions to continuously refine strategy.' }
    ],
    techStack: ['LinkedIn', 'Instagram', 'Figma', 'Editorial Calendars', 'Meta Business Suite', 'Canva Pro'],
    faqs: [
      {
        question: 'Why do educational carousels perform so much better than static image posts?',
        answer: 'Algorithms on both Instagram and LinkedIn prioritize dwell time and repeat interactions. Carousels prompt users to swipe across multiple slides, which signals high engagement to the algorithm. Additionally, Instagram re-serves carousels 24 to 48 hours later showing a different slide to users who scrolled past previously, driving 2x higher saves and up to 4.8% engagement.'
      },
      {
        question: 'How does social media management generate tangible B2B sales leads?',
        answer: 'Over 82% of B2B buyers review a company\'s social profiles before signing service agreements. Consistent, insightful content validates your firm\'s expertise, prevents prospective clients from choosing competitors, and generates inbound inquiries through direct profile CTAs.'
      },
      {
        question: 'Which platforms should our business prioritize?',
        answer: 'For B2B companies, tech firms, and professional practices, we prioritize LinkedIn for executive thought leadership and decision-maker trust. For visual consumer sectors like real estate, clinics, and fine jewellery, we prioritize Instagram with high-quality visual showcases.'
      },
      {
        question: 'Do we need to review and approve posts before they are published?',
        answer: 'Yes. We operate on a monthly editorial calendar where all graphics, carousels, and copy are submitted for your review and approval prior to scheduled publishing.'
      }
    ]
  }
];

export const SERVICE_GROUPS = [
  {
    title: 'Technology & Product',
    services: SERVICES.filter((service) => service.category !== 'GROWTH'),
  },
  {
    title: 'Digital Growth',
    services: SERVICES.filter((service) => service.category === 'GROWTH'),
  },
];
