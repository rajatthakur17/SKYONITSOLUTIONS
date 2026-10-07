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
];

export const BLOG_CATEGORIES = [
  'All',
  'Website Planning',
  'Custom Software',
  'AI & Automation',
  'Cloud Solutions',
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
