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

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'ENGINEERING' | 'CLOUD' | 'AUTOMATION' | 'DESIGN' | 'GROWTH' | 'STRATEGY';
  badge: string;
  description: string;
  longDescription: string;
  icon: string;
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
    description: 'Website design and development for businesses, from company sites to custom web experiences.',
    longDescription: 'Your digital presence begins with a dependable web foundation. We build custom websites, portals, and landing pages tailored to your brand identity and business objectives. We avoid bloated generic templates in favor of modern, high-performance static and server-optimized architectures that load fast, rank effectively on search engines, and guide visitors smoothly into inquiries.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    audiences: ['Indian SMEs & MSMEs', 'Healthcare & Local Clinics', 'Real Estate Brokers & Consultants', 'Jewellery Makers & Retailers', 'Startups & Enterprises', 'International Clients'],
    deliverables: [
      {
        title: 'Custom Business Websites',
        description: 'Multi-page corporate and service websites structured around clear information architecture, accessible typography, and fast loading speeds across mobile and desktop.'
      },
      {
        title: 'High-Converting Landing Pages',
        description: 'Focused landing pages for a specific campaign, inquiry path, or product launch.'
      },
      {
        title: 'Website Modernization',
        description: 'Re-engineering legacy, slow, or insecure websites onto modern Astro, React, and Tailwind CSS tech stacks while preserving SEO equity.'
      },
      {
        title: 'Maintenance & Core Web Vitals',
        description: 'Ongoing updates and performance reviews scoped to the website and its operational needs.'
      }
    ],
    process: [
      { step: '01', title: 'Discovery & Scope', description: 'We analyze your target audience, conversion goals, and technical requirements.' },
      { step: '02', title: 'Information Architecture', description: 'We map out wireframes, user journeys, and content hierarchy for intuitive navigation.' },
      { step: '03', title: 'Component Engineering', description: 'We build clean, responsive, WCAG-accessible components using Astro and Tailwind.' },
      { step: '04', title: 'QA & Optimization', description: 'We test across devices, screen readers, cross-browser engines, and perform SEO checks.' },
      { step: '05', title: 'Deployment & Launch', description: 'We configure DNS, HTTPS, CDN caching, and analytics for a rock-solid production release.' }
    ],
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS v4', 'React Islands', 'Vite', 'Edge CDN'],
    faqs: [
      {
        question: 'Why do you prioritize custom web builds over bulky WordPress themes?',
        answer: 'Custom builds eliminate heavy plugin bloat, vulnerability patch cycles, and slow server response times. You receive a faster, more secure, and accessible website that scores higher on Core Web Vitals and search rankings.'
      },
      {
        question: 'Will my website work seamlessly on mobile devices?',
        answer: 'Yes. Mobile responsiveness is foundational to our engineering. Every layout reflows naturally and passes touch target accessibility standards.'
      },
      {
        question: 'Can non-technical team members update content on the site?',
        answer: 'Yes. Through our hybrid workflow, content can be updated directly via simple Markdown or integrated with a lightweight Git-based CMS.'
      }
    ]
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    category: 'ENGINEERING',
    badge: 'ENGINEER',
    description: 'Purpose-built web applications, internal dashboards, and workflow tools engineered to solve specific operational bottlenecks.',
    longDescription: 'When off-the-shelf software fails to match your operational workflows, custom software bridges the gap. We engineer reliable, scalable web applications, internal tools, and client portals tailored to your exact business rules, data schemas, and integration points.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    audiences: ['Growing SMEs & MSMEs', 'Real Estate Firms & Brokerages', 'Multi-Doctor Clinics', 'Logistics & Retail Operations', 'Tech Startups'],
    deliverables: [
      {
        title: 'Bespoke Web Applications',
        description: 'End-to-end fullstack applications featuring structured databases, secure authentication, and responsive user interfaces.'
      },
      {
        title: 'Internal Admin Dashboards',
        description: 'Operations management portals for inventory, customer orders, appointment tracking, or lead qualification.'
      },
      {
        title: 'API Development & Integrations',
        description: 'Custom RESTful and webhook integrations connecting payment gateways, WhatsApp Business APIs, CRMs, and accounting systems.'
      },
      {
        title: 'Architecture & Database Design',
        description: 'Relational data modeling, schema indexing, and query optimization built on PostgreSQL, SQLite, or modern serverless data layers.'
      }
    ],
    process: [
      { step: '01', title: 'System Requirements', description: 'We map out user roles, data entities, business rules, and integration touchpoints.' },
      { step: '02', title: 'Schema & API Architecture', description: 'We design database schemas and API contracts before writing business logic.' },
      { step: '03', title: 'Iterative Implementation', description: 'We engineer secure modules with automated type safety and unit testing.' },
      { step: '04', title: 'Security & User Testing', description: 'We audit authentication, access control, input validation, and edge cases.' },
      { step: '05', title: 'Production Rollout', description: 'We deploy to isolated environments with automated backups and monitoring.' }
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Docker', 'REST / Webhooks'],
    faqs: [
      {
        question: 'How do you ensure data security in custom applications?',
        answer: 'We enforce strict input validation, sanitized database queries to prevent injection, encrypted transmission over HTTPS/TLS, and isolated environment variables.'
      },
      {
        question: 'Who owns the source code once the project is finished?',
        answer: 'Source-code ownership, project assets, and handoff terms should be agreed and documented before work begins.'
      }
    ]
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & Infrastructure',
    shortTitle: 'Cloud Solutions',
    category: 'CLOUD',
    badge: 'INFRASTRUCTURE',
    description: 'Cloud hosting, infrastructure planning, deployment workflows, and domain configuration scoped to business needs.',
    longDescription: 'Cloud and infrastructure projects can include hosting, content delivery, deployment workflows, and domain configuration. The right approach depends on the existing system, availability needs, security requirements, and budget.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z',
    audiences: ['Startups', 'SMEs Migrating to Cloud', 'High-Traffic Portals', 'International Businesses', 'Ecommerce Brands'],
    deliverables: [
      {
        title: 'Edge Hosting & CDN Architecture',
        description: 'Reviewing hosting and content-delivery options for the project’s audience, performance needs, and budget.'
      },
      {
        title: 'CI/CD Automated Deployment',
        description: 'Setting up Git-based continuous integration and deployment pipelines with automated quality and type check gates.'
      },
      {
        title: 'Domain & Security Configuration',
        description: 'Proper DNS routing, automated SSL/TLS certificate renewals, SPF/DKIM/DMARC email security, and DDoS protection.'
      },
      {
        title: 'Cloud Cost Optimization',
        description: 'Auditing existing cloud footprints to eliminate idle resources and right-size instances for predictable monthly expenses.'
      }
    ],
    process: [
      { step: '01', title: 'Infrastructure Audit', description: 'We evaluate existing hosting, latency bottlenecks, and monthly expense structures.' },
      { step: '02', title: 'Architecture Planning', description: 'We select the most proportionate cloud provider and network topology.' },
      { step: '03', title: 'Deployment Pipeline Setup', description: 'We configure automated build triggers, testing checks, and environment secrets.' },
      { step: '04', title: 'DNS & SSL Migration', description: 'We plan DNS changes and verify SSL configuration as part of a migration.' },
      { step: '05', title: 'Monitoring & Handoff', description: 'We establish uptime alerts, traffic monitoring, and operational runbooks.' }
    ],
    techStack: ['Cloudflare', 'AWS', 'GCP', 'GitHub Actions', 'Docker', 'DNS / SSL'],
    faqs: [
      {
        question: 'Can you help us migrate from expensive legacy servers to modern cloud hosting?',
        answer: 'Hosting changes depend on the current setup, traffic, and operational requirements. We can review options and costs before proposing a migration.'
      }
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation Solutions',
    shortTitle: 'AI & Automation',
    category: 'AUTOMATION',
    badge: 'AUTOMATE',
    description: 'Pragmatic AI integrations, automated lead capture pipelines, custom conversational assistants, and operational workflows.',
    longDescription: 'AI and automation should drive measurable business efficiency, not superficial novelty. We build practical integrations that eliminate manual repetitive tasks—such as routing real-estate inquiries, automating appointment reminders, parsing incoming requests, and deploying custom AI chatbots trained on your business data.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    audiences: ['Real Estate Brokerages', 'Healthcare Clinics', 'Customer Support Teams', 'Service Consultants', 'SMEs'],
    deliverables: [
      {
        title: 'Automated Lead Routing & Webhooks',
        description: 'Connect website inquiries to agreed channels such as WhatsApp, email, spreadsheets, or a CRM.'
      },
      {
        title: 'Custom AI Knowledge Assistants',
        description: 'Assistants configured around approved business information, with clear limits and an escalation path for questions they cannot answer.'
      },
      {
        title: 'Operational Workflow Automation',
        description: 'Connecting disconnected software tools using automated background tasks, webhook triggers, and automated notification loops.'
      },
      {
        title: 'Document & Data Extraction',
        description: 'Automating data parsing from inquiries, invoices, or customer submissions directly into structured business records.'
      }
    ],
    process: [
      { step: '01', title: 'Workflow Analysis', description: 'We identify manual, repetitive tasks that drain your team’s productive time.' },
      { step: '02', title: 'Pipeline Architecture', description: 'We map inputs, trigger conditions, transformations, and output channels.' },
      { step: '03', title: 'Integration & Testing', description: 'We build secure webhook pipelines with fallback error handling.' },
      { step: '04', title: 'Pilot & Validation', description: 'We run live tests with sample data to verify speed and extraction accuracy.' },
      { step: '05', title: 'Team Enablement', description: 'We provide clear operational documentation and monitor pipeline stability.' }
    ],
    techStack: ['Python', 'OpenAI / Claude APIs', 'Webhooks', 'WhatsApp Business API', 'Node.js', 'Zapier / Make'],
    faqs: [
      {
        question: 'Is AI automation suitable for small businesses and clinics?',
        answer: 'Absolutely. Simple automations—such as instant WhatsApp notifications when an inquiry arrives or automated appointment reminders—save hours of staff time daily and improve customer response rates.'
      }
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    category: 'DESIGN',
    badge: 'DESIGN',
    description: 'User-centric interface design, wireframing, interactive prototypes, and design systems focused on clarity and conversion.',
    longDescription: 'Visual appeal means little if users cannot find what they need. Our UI/UX design process centers on user psychology, structured typography, high-contrast usability, and intuitive information architecture. We craft designs that build trust, look polished on all screen sizes, and smoothly guide visitors to take action.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    audiences: ['Real Estate Platforms', 'Luxury Brands & Jewellers', 'Tech Startups', 'Healthcare Providers', 'B2B Enterprises'],
    deliverables: [
      {
        title: 'Information Architecture & Wireframes',
        description: 'Structural blueprints and low-fidelity user flows that validate hierarchy and navigation before aesthetic styling.'
      },
      {
        title: 'High-Fidelity Interface Design',
        description: 'Pixel-perfect, modern UI designs crafted in Figma with defined color tokens, typography scales, and responsive variants.'
      },
      {
        title: 'Interactive Prototypes',
        description: 'Clickable prototypes that let stakeholders test transitions, mobile drawer flows, and user interactions before code is written.'
      },
      {
        title: 'Design Systems & Component Libraries',
        description: 'Reusable UI libraries and design tokens ensuring visual consistency across present and future digital products.'
      }
    ],
    process: [
      { step: '01', title: 'User & Goal Research', description: 'We review user behaviors, industry conventions, and conversion objectives.' },
      { step: '02', title: 'Wireframing & Flow', description: 'We structure the page layouts, content priority, and user pathways.' },
      { step: '03', title: 'Visual & System Design', description: 'We craft high-fidelity screens, tokens, and responsive component states.' },
      { step: '04', title: 'Accessibility Review', description: 'We test contrast ratios, touch targets, and typographic hierarchy against WCAG 2.2 AA.' },
      { step: '05', title: 'Developer Handoff', description: 'We supply clean Figma assets, token specifications, and responsive notes.' }
    ],
    techStack: ['Figma', 'Design Tokens', 'WCAG 2.2 AA', 'Responsive Reflow', 'Prototyping'],
    faqs: [
      {
        question: 'Do you design for both desktop and mobile screens?',
        answer: 'Responsive layouts can be included in the design scope and reviewed across representative viewport sizes.'
      }
    ]
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Strategy',
    shortTitle: 'IT Consulting',
    category: 'STRATEGY',
    badge: 'STRATEGY',
    description: 'Pragmatic technology advisory, architecture audits, stack selection, and digital transformation roadmaps.',
    longDescription: 'Technology decisions affect cost, maintenance, and how well systems support business needs. IT consulting can help clarify requirements, review options, and plan a practical approach for a new or existing system.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    audiences: ['Non-Technical Founders', 'SME Business Owners', 'Growing Real Estate Firms', 'Clinics Expanding Services', 'Enterprises'],
    deliverables: [
      {
        title: 'Technology & Codebase Audits',
        description: 'Comprehensive reviews of site performance, codebase maintainability, security vulnerabilities, and infrastructure efficiency.'
      },
      {
        title: 'Stack & Architecture Selection',
        description: 'Objective guidance on choosing between static sites, SSR frameworks, databases, and third-party SaaS tools.'
      },
      {
        title: 'Digital Modernization Roadmaps',
        description: 'Phased implementation plans that allow you to modernize your digital systems incrementally without disrupting daily business.'
      },
      {
        title: 'Vendor & Agency Evaluation',
        description: 'Independent technical evaluation of third-party proposals, vendor estimates, and contractor deliverables.'
      }
    ],
    process: [
      { step: '01', title: 'Current State Assessment', description: 'We examine your existing digital assets, operational tools, and pain points.' },
      { step: '02', title: 'Gap & Risk Analysis', description: 'We identify security liabilities, performance bottlenecks, and unnecessary costs.' },
      { step: '03', title: 'Strategic Roadmap', description: 'We formulate prioritized, practical recommendations with clear trade-offs.' },
      { step: '04', title: 'Executive Briefing', description: 'We present actionable findings in plain, non-jargon language.' },
      { step: '05', title: 'Implementation Oversight', description: 'We provide technical guidance during execution to ensure architectural integrity.' }
    ],
    techStack: ['Architecture Design', 'Performance Audits', 'Security Assessment', 'Technical Roadmaps'],
    faqs: [
      {
        question: 'Who conducts the IT consulting sessions?',
        answer: 'You work directly with senior technical leadership at SKYON IT SOLUTIONS, not outsourced analysts or junior project coordinators.'
      }
    ]
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO Services',
    category: 'GROWTH',
    badge: 'GET FOUND',
    description: 'Technical and on-page SEO work to help search engines understand and discover a website.',
    longDescription: 'SEO is not about gaming algorithms; it is about structuring your web properties and content so search engines can crawl, understand, index, and rank your expertise accurately. We focus on technical SEO health, Core Web Vitals compliance, structured Schema.org data, and local search optimization for clinics, real estate, and regional businesses.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    audiences: ['Local Clinics & Doctors', 'Real Estate Brokers & Consultants', 'Jewellery Showrooms & Makers', 'Regional SMEs', 'National Brands'],
    deliverables: [
      {
        title: 'Technical SEO & Crawlability Audits',
        description: 'Fixing indexing barriers, canonical conflicts, redirect chains, broken links, XML sitemaps, and robots.txt rules.'
      },
      {
        title: 'Local SEO & Google Business Profile',
        description: 'Optimizing local search visibility, map rankings, regional citations, and location-targeted landing pages.'
      },
      {
        title: 'On-Page Content & Schema Markup',
        description: 'Implementing semantic JSON-LD structured data (Organization, LocalBusiness, Service, Breadcrumbs) and semantic HTML hierarchy.'
      },
      {
        title: 'Core Web Vitals Optimization',
        description: 'Tuning LCP, INP, and CLS performance metrics directly in code to pass search engine page experience standards.'
      }
    ],
    process: [
      { step: '01', title: 'Technical Audit', description: 'We crawl your domain to detect indexing issues, broken links, and metadata flaws.' },
      { step: '02', title: 'Keyword & Intent Mapping', description: 'We analyze the exact commercial terms your potential clients search for.' },
      { step: '03', title: 'On-Page Optimization', description: 'We optimize title tags, meta descriptions, heading structures, and schema data.' },
      { step: '04', title: 'Local Search Alignment', description: 'We synchronize your Google Business Profile and local citation signals.' },
      { step: '05', title: 'Performance Tracking', description: 'We track Google Search Console indexing, impressions, clicks, and rankings.' }
    ],
    techStack: ['Schema.org', 'Google Search Console', 'Astro Sitemap', 'Lighthouse', 'Semantic HTML5'],
    faqs: [
      {
        question: 'How long before we see results from SEO improvements?',
        answer: 'Timing varies with the site, competition, content, and search-engine crawling. No specific ranking or timeline can be guaranteed.'
      }
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    shortTitle: 'Digital Marketing',
    category: 'GROWTH',
    badge: 'REACH',
    description: 'Digital marketing planning, campaign work, and measurement scoped to your goals and channels.',
    longDescription: 'Paid marketing should be an accountable revenue engine, not an ambiguous expense. We engineer targeted digital advertising campaigns across Google Ads and Meta platforms, aligning ad creatives directly with high-converting landing pages and direct WhatsApp inquiry funnels.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    audiences: ['Real Estate Property Launches', 'Specialist Clinics & Healthcare', 'Jewellery Brands', 'Startups & SMEs', 'International Exporters'],
    deliverables: [
      {
        title: 'Google Ads (Search & Performance Max)',
        description: 'Capturing high-intent customer searches with laser-targeted keyword campaigns and negative keyword hygiene.'
      },
      {
        title: 'Meta Ads (Facebook & Instagram)',
        description: 'Visual advertising targeting specific buyer demographics, interests, and geographic radius.'
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Optimizing landing page copy, value propositions, and CTA placement to convert clicks into inquiries.'
      },
      {
        title: 'Analytics & WhatsApp Tracking',
        description: 'Configuring conversion event tracking to measure the cost-per-lead and true return on ad spend.'
      }
    ],
    process: [
      { step: '01', title: 'Audience & Offer Definition', description: 'We clarify your high-margin services, buyer personas, and geographical targets.' },
      { step: '02', title: 'Funnel & Creative Setup', description: 'We design the ad messaging and dedicated landing page experience.' },
      { step: '03', title: 'Campaign Launch', description: 'We configure budget pacing, bid strategies, and conversion tracking.' },
      { step: '04', title: 'A/B Testing & Optimization', description: 'We refine copy, creatives, and negative keywords based on real inquiry data.' },
      { step: '05', title: 'Transparent Reporting', description: 'We provide clear performance reviews focusing on verified leads generated.' }
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'Conversion Tracking', 'WhatsApp Funnels', 'Google Analytics'],
    faqs: [
      {
        question: 'What budget do we need to start paid digital marketing?',
        answer: 'Budgets depend on the channels, audience, and goals. We can discuss an appropriate scope before a campaign begins.'
      }
    ]
  },
  {
    slug: 'social-media',
    title: 'Social Media Management',
    shortTitle: 'Social Media',
    category: 'GROWTH',
    badge: 'ENGAGE',
    description: 'Strategic content planning, visual creative direction, publishing schedules, and community presence to build online credibility.',
    longDescription: 'Active, high-quality social channels establish immediate credibility when prospective clients research your company. We manage your presence across LinkedIn and Instagram with structured content themes, professional graphics, and consistent posting cadence that reinforces your authority.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    audiences: ['Jewellery Makers & Luxury Retail', 'Real Estate Consultants & Builders', 'Healthcare Clinics & Doctors', 'Founder-Led Tech Firms'],
    deliverables: [
      {
        title: 'Monthly Content Strategy',
        description: 'Structured editorial calendar covering educational tips, project proof points, service highlights, and brand storytelling.'
      },
      {
        title: 'Graphic & Carousel Creative Production',
        description: 'Professionally formatted social creatives adhering to your brand typography, colors, and visual standards.'
      },
      {
        title: 'Publishing & Scheduling Management',
        description: 'Consistent, timed distribution across your official LinkedIn and Instagram company channels.'
      },
      {
        title: 'Bio & Profile Optimization',
        description: 'Crafting high-clarity profile bios, highlight covers, and direct WhatsApp inquiry links.'
      }
    ],
    process: [
      { step: '01', title: 'Brand & Channel Audit', description: 'We evaluate your current profiles, audience demographics, and competitor positioning.' },
      { step: '02', title: 'Content Calendar Creation', description: 'We plan monthly themes and review copy drafts with your team.' },
      { step: '03', title: 'Visual Asset Production', description: 'We design customized graphics, carousels, and stories aligned with brand tokens.' },
      { step: '04', title: 'Scheduled Publishing', description: 'We publish at peak engagement times and monitor incoming message activity.' },
      { step: '05', title: 'Monthly Review', description: 'We review reach, engagement, and follower quality to adjust subsequent content.' }
    ],
    techStack: ['LinkedIn', 'Instagram', 'Content Calendars', 'Figma', 'Canva Pro'],
    faqs: [
      {
        question: 'Which social platforms do you recommend prioritizing?',
        answer: 'Channel selection depends on your audience, goals, available content, and the resources you want to commit.'
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
