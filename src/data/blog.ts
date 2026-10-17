export interface BlogSection {
  heading: string;
  paragraphs: string[];
  points?: string[];
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'plan-a-business-website',
    category: 'Website Planning',
    title: 'Plan a business website around what visitors need to do',
    summary: 'A useful website starts with its audience and purpose, then turns those into clear pages, structured content, and focused next steps.',
    date: 'Oct 2024',
    readTime: '4 min read',
    author: 'SKYON Team',
    featured: true,
    sections: [
      {
        heading: 'Start with the visitor’s task',
        paragraphs: [
          'List the questions someone needs answered before they contact you: what you offer, who it is for, what working together involves, and how to take the next step.',
          'Use those questions to shape the navigation and page order. A page earns its place when it helps a visitor understand, compare, or take action.',
        ],
      },
      {
        heading: 'Make each service understandable',
        paragraphs: [
          'A service page should explain the problem it addresses, the likely scope, and what happens after an enquiry. Specific, approved details are more helpful than broad claims or long lists of technologies.',
        ],
        points: [
          'Who the service is for',
          'What the work can include',
          'What information helps scope a project',
        ],
      },
      {
        heading: 'Treat access and maintenance as requirements',
        paragraphs: [
          'Plan for keyboard use, readable contrast, mobile reflow, image alternatives, and reduced motion from the beginning. Also decide who will update the content and how changes will be checked before publishing.',
        ],
      },
    ],
  },
  {
    slug: 'when-custom-software-makes-sense',
    category: 'Custom Software',
    title: 'When should a business consider custom software?',
    summary: 'Compare the actual workflow, existing tools, and ongoing ownership costs before deciding whether to build a tailored solution.',
    date: 'Nov 2024',
    readTime: '5 min read',
    author: 'SKYON Team',
    sections: [
      {
        heading: 'Describe the workflow before choosing a tool',
        paragraphs: [
          'Write down who does each step, what information they need, where delays or duplicate entry occur, and which systems are already involved. This keeps the discussion tied to an observed business process rather than a feature wish list.',
        ],
      },
      {
        heading: 'Compare buying, configuring, and building',
        paragraphs: [
          'An existing product may already cover the need. Configuration or integration can sometimes address the gap with less ongoing responsibility than a custom system. Custom development is worth evaluating when important workflow or integration requirements remain unmet.',
        ],
        points: [
          'Purchase and subscription costs',
          'Integration and data-export needs',
          'Security, access, and support responsibilities',
          'Maintenance and future changes',
        ],
      },
      {
        heading: 'Define a small first release',
        paragraphs: [
          'Agree on the users, essential tasks, data boundaries, acceptance checks, and handoff plan before expanding scope. A bounded first release makes it easier to evaluate whether the system solves the original problem.',
        ],
      },
    ],
  },
  {
    slug: 'start-an-automation-project',
    category: 'AI & Automation',
    title: 'A careful starting point for an AI or automation project',
    summary: 'Choose a bounded workflow, account for exceptions and sensitive data, and keep an appropriate human review path in place.',
    date: 'Dec 2024',
    readTime: '4 min read',
    author: 'SKYON Team',
    sections: [
      {
        heading: 'Choose a repeated task with clear boundaries',
        paragraphs: [
          'Map the trigger, input, expected output, and exceptions. Prefer a workflow where the team can explain what a correct result looks like and what should happen when the system is uncertain.',
        ],
      },
      {
        heading: 'Decide where people stay in control',
        paragraphs: [
          'Some outputs can be prepared automatically; others need review before they affect customers, money, or business records. Decide who checks the result and how they can correct or stop the process.',
        ],
      },
      {
        heading: 'Review data and failure handling',
        paragraphs: [
          'Identify sensitive information, access limits, retention needs, third-party services, and the consequences of an incorrect result. Provide a manual fallback and a way to notice failed or incomplete runs.',
        ],
        points: [
          'Use only data approved for the workflow',
          'Test normal cases and likely exceptions',
          'Record failures without exposing unnecessary personal data',
          'Review outcomes before widening usage',
        ],
      },
    ],
  },
  {
    slug: 'workflow-automation-for-growing-businesses',
    category: 'AI & Automation',
    title: 'How workflow automation reduces operational overhead for SMEs',
    summary: 'Eliminate repetitive manual data entry, streamline client communications, and connect fragmented business tools without bloated enterprise software.',
    date: 'Jan 2025',
    readTime: '5 min read',
    author: 'SKYON Team',
    sections: [
      {
        heading: 'Identify the highest-friction bottlenecks',
        paragraphs: [
          'Every growing business has workflows where team members act as human bridges between disconnected apps—copying lead data from emails into spreadsheets, sending routine reminders, or manually generating invoices.',
          'Automation starts by auditing these high-frequency, low-variance administrative cycles to discover where team hours are consistently consumed.',
        ],
      },
      {
        heading: 'Connect existing tools before replacing them',
        paragraphs: [
          'Replacing software stacks wholesale is expensive and disruptive. Often, orchestrating secure API integrations between CRM systems, accounting platforms, and messaging apps delivers immediate efficiency gains at a fraction of the cost.',
        ],
        points: [
          'Instant lead notifications and WhatsApp/email follow-ups',
          'Automatic invoice generation from completed orders',
          'Centralized reporting dashboards without manual exports',
        ],
      },
      {
        heading: 'Build reliability and auditability into every step',
        paragraphs: [
          'Automated systems must log every execution, notify admins upon external service timeouts, and gracefully handle rate limits so business operations remain smooth and transparent.',
        ],
      },
    ],
  },
  {
    slug: 'cloud-infrastructure-checklist',
    category: 'Cloud Solutions',
    title: 'A practical checklist before migrating applications to the cloud',
    summary: 'Key considerations around security, predictable monthly costs, database backups, and architecture before deploying production workloads.',
    date: 'Feb 2025',
    readTime: '4 min read',
    author: 'SKYON Team',
    sections: [
      {
        heading: 'Right-size your infrastructure from day one',
        paragraphs: [
          'Cloud costs expand quickly if compute instances and managed databases are provisioned beyond realistic traffic levels. Start with lean, scalable tiers and implement auto-scaling policies based on observed metrics.',
        ],
      },
      {
        heading: 'Isolate environments and manage secrets securely',
        paragraphs: [
          'Development, staging, and production workloads should never share database instances or access keys. Use environment-variable vaults and strict least-privilege IAM roles across all service accounts.',
        ],
        points: [
          'Separate production data from testing environments',
          'Automated daily database backups with tested restore routines',
          'SSL/TLS encryption in transit and at rest',
          'Uptime monitoring with immediate team alerts',
        ],
      },
      {
        heading: 'Design for graceful degradation',
        paragraphs: [
          'Ensure third-party dependency outages or regional latency spikes do not crash your core application. Implement caching layers, connection pools, and clear health check endpoints.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-rank-in-google-ai-overviews',
    category: 'SEO & Digital Marketing',
    title: 'How to Rank in Google AI Overviews: A Practical SEO Guide',
    summary: 'Search is evolving. Learn how Google AI Overviews select cited sources and which SEO fundamentals, content strategies, and formatting techniques help your website earn visibility in AI-generated search summaries.',
    date: 'Oct 2026',
    readTime: '7 min read',
    author: 'SKYON Team',
    sections: [
      {
        heading: 'What Are Google AI Overviews?',
        paragraphs: [
          'Google AI Overviews are dynamic summaries generated by machine learning models that synthesize information from multiple web sources. They appear near the top of search results for complex, multi-step, or informational queries.',
          'For example, a user searching for "how to improve a small business website\'s SEO" might see an overview covering technical performance, content quality, and internal linking, paired with direct links to helpful websites.',
          'Appearing as a cited source here offers massive brand visibility, but it is never guaranteed — even if your page ranks well organically.',
        ],
      },
      {
        heading: 'How Does Google Select Sources for AI Overviews?',
        paragraphs: [
          'Google\'s AI search features pull from its core search indexing systems. It evaluates query intent, scans related follow-up questions, and selects pages that demonstrate exceptional relevance, authority, and factual clarity.',
          'While there is no guaranteed formula for earning a citation, several foundational practices help search systems discover, understand, and trust your content.',
        ],
      },
      {
        heading: '1. Create Helpful, Original Content',
        paragraphs: [
          'If your content reads like a recycled version of everything else on page one, Google\'s AI has no reason to cite it.',
        ],
        points: [
          'Solve real-world problems: Identify the specific questions your target audience asks and provide comprehensive answers accompanied by practical examples.',
          'Share first-hand insights: Incorporate original data, practical observations, and real project experience that automated summaries cannot replicate.',
        ],
      },
      {
        heading: '2. Answer Important Questions Clearly',
        paragraphs: [
          'Users and AI models love clarity. When people search using explicit questions, they want direct answers fast.',
        ],
        points: [
          'Front-load your definitions: Open your core sections or definitions within the first 40 to 60 words using straightforward, unambiguous language.',
          'Use question-based headings: Frame your H2 and H3 subheadings as natural queries your audience searches for.',
          'Structure for extraction: Organize information using bulleted lists, numbered steps, and comparison tables, which AI models heavily favor for quick synthesis.',
        ],
      },
      {
        heading: '3. Strengthen E-E-A-T and Fact Density',
        paragraphs: [
          'Trust is non-negotiable when users rely on search engines to guide their decisions. Research shows that pages cited in AI Overviews often feature a higher concentration of facts, statistics, and verifiable data points.',
        ],
        points: [
          'Demonstrate first-hand experience through documented workflows, transparent case studies, and clear author bylines.',
          'Never fabricate statistics or client outcomes. If you cite external research, link directly to the original source.',
        ],
      },
      {
        heading: '4. Fortify Technical SEO and Crawlability',
        paragraphs: [
          'Google must be able to crawl, index, and render your public pages before they can be considered for AI features.',
        ],
        points: [
          'Crawlability and Indexability: Ensure your canonical URLs are fully accessible to Googlebot and free of accidental noindex blocks.',
          'Internal Linking: Tie related articles and core service pages together to establish robust topical depth.',
          'Page Performance: Maintain fast loading speeds and a seamless mobile experience through strong Core Web Vitals scores.',
        ],
      },
      {
        heading: '5. Utilize Standard Structured Data',
        paragraphs: [
          'While Google has clarified that there is no special AI-only markup requirement, implementing standard structured data such as Article, Organization, FAQPage, and BreadcrumbList helps machine-learning crawlers accurately parse your content architecture and entities.',
        ],
      },
      {
        heading: 'Common AI SEO Myths to Avoid',
        paragraphs: [
          'Myth 1: There is a secret AI ranking trick. There is no hidden shortcut — standard SEO compliance and helpful content rules apply.',
          'Myth 2: You need special AI text files. You do not need to publish markdown files or specialized text formats just to appear in AI search. Focus on clean technical architecture and crawlable text.',
          'Myth 3: Pumping out mass AI articles boosts visibility. Publishing massive volumes of unedited, generic content can trigger spam policies. Use AI strictly to assist your workflow, not to replace human expertise and fact-checking.',
        ],
      },
      {
        heading: 'How to Measure Your AI Search Visibility',
        paragraphs: [
          'Evaluate your performance by monitoring holistic organic metrics and search console behaviour.',
        ],
        points: [
          'Google Search Console: Review impressions, clicks, query trends, and dedicated AI feature reporting where available.',
          'Organic Landing Pages: Track which resource guides consistently pull in qualified traffic.',
          'Conversions and Engagement: Monitor meaningful user actions such as contact form submissions, service page views, and direct inquiries.',
        ],
      },
      {
        heading: 'A Practical 30-Day Action Plan',
        paragraphs: [
          'Improve your AI search visibility systematically with this four-week framework.',
        ],
        points: [
          'Week 1 — Technical Audit: Review sitemap accuracy, indexation health, internal link structures, and mobile responsiveness.',
          'Week 2 — Content Refinement: Update key articles, front-load direct answers, and strip out redundant background fluff.',
          'Week 3 — Publish Deep-Dive Resources: Launch an original, highly authoritative guide tackling a core niche topic backed by real data.',
          'Week 4 — Review and Adapt: Analyse Search Console data, check query patterns, and refine your approach based on real performance evidence.',
        ],
      },
      {
        heading: 'Can a New Website Appear in Google AI Overviews?',
        paragraphs: [
          'Potentially, yes. A new site must meet core search eligibility requirements and provide uniquely useful content, though inclusion is never guaranteed.',
        ],
      },
      {
        heading: 'Does Ranking Number One Guarantee an AI Overview Citation?',
        paragraphs: [
          'No. Traditional organic rankings are closely tied to Google\'s core search engine, but holding the top spot does not automatically secure an AI summary citation.',
        ],
      },
      {
        heading: 'Is Traditional SEO Still Important for AI Overviews?',
        paragraphs: [
          'Yes. Google\'s documentation explicitly notes that established SEO best practices remain mandatory for visibility in both traditional and AI-driven search experiences.',
        ],
      },
      {
        heading: 'Does Google Require Special Schema Markup for AI Overviews?',
        paragraphs: [
          'No. Google does not require special AI-specific structured data. Use standard schema that accurately represents the visible text on your pages.',
        ],
      },
    ],
  },
];

export const BLOG_CATEGORIES = [
  'All',
  'Website Planning',
  'Custom Software',
  'AI & Automation',
  'Cloud Solutions',
  'SEO & Digital Marketing',
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
