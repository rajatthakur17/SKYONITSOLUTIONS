export interface InsightSection {
  heading: string;
  paragraphs: string[];
  points?: string[];
}

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  summary: string;
  sections: InsightSection[];
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'plan-a-business-website',
    category: 'Website planning',
    title: 'Plan a business website around what visitors need to do',
    summary: 'A useful website starts with its audience and purpose, then turns those into clear pages, content, and next steps.',
    sections: [
      {
        heading: 'Start with the visitor’s task',
        paragraphs: [
          'List the questions someone needs answered before they contact you: what you offer, who it is for, what working together involves, and how to take the next step.',
          'Use those questions to shape the navigation and page order. A page earns its place when it helps a visitor understand, compare, or act.',
        ],
      },
      {
        heading: 'Make each service understandable',
        paragraphs: [
          'A service page should explain the problem it addresses, the likely scope, and what happens after an enquiry. Specific, approved details are more helpful than broad claims or long lists of technologies.',
        ],
        points: ['Who the service is for', 'What the work can include', 'What information helps scope a project'],
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
    category: 'Custom software',
    title: 'When should a business consider custom software?',
    summary: 'Compare the actual workflow, existing tools, and ongoing ownership costs before deciding whether to build.',
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
        points: ['Purchase and subscription costs', 'Integration and data-export needs', 'Security, access, and support responsibilities', 'Maintenance and future changes'],
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
    category: 'AI and automation',
    title: 'A careful starting point for an AI or automation project',
    summary: 'Choose a bounded workflow, account for exceptions and sensitive data, and keep an appropriate human review path.',
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
        points: ['Use only data approved for the workflow', 'Test normal cases and likely exceptions', 'Record failures without exposing unnecessary personal data', 'Review outcomes before widening usage'],
      },
    ],
  },
];