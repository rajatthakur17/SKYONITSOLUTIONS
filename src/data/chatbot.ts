// src/data/chatbot.ts
import { BUDGET_RANGES } from './budget';
import { SERVICES } from './services';
import { SITE } from '../config/site';

export interface ChatQuickAnswer {
  id: string;
  question: string;
  answer: string;
  links?: { label: string; url: string }[];
}

export const CHAT_DISCLAIMER =
  "I'm SKYON's automated assistant. Choose a question below or tell us about your project.";

export const CHAT_FREE_TEXT_FALLBACK =
  "I can't read free text yet. Choose an option or send us a message on WhatsApp.";

export const QUICK_ANSWERS: Record<string, ChatQuickAnswer> = {
  offerings: {
    id: 'offerings',
    question: 'What do you offer?',
    answer:
      'We offer 9 core services: Website Development, Custom Software Development, Cloud Solutions, AI & Automation, UI/UX Design, IT Consulting, Search Engine Optimization (SEO), Digital Marketing, and Social Media Management.',
    links: SERVICES.map((s) => ({
      label: s.title,
      url: `/services/${s.slug}`,
    })),
  },
  cost: {
    id: 'cost',
    question: 'How much does a project cost?',
    answer:
      'It depends on the scope. Share your project details and we will reply with a quote.',
  },
  timeline: {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'Website timelines depend on the scope, content, and requirements of the project.',
  },
  small_biz: {
    id: 'small_biz',
    question: 'Do you work with small businesses?',
    answer:
      'Yes. We serve Indian SMEs and MSMEs, local clinics, and growing businesses with websites, custom software, and workflow automation.',
  },
  contact: {
    id: 'contact',
    question: 'How do I contact you?',
    answer: `You can reach us directly via WhatsApp (${SITE.whatsapp}), email (${SITE.email}), or phone (${SITE.phone}). You can also submit an inquiry on our Contact page.`,
    links: [{ label: 'Contact Page', url: '/contact' }],
  },
  about: {
    id: 'about',
    question: 'About SKYON',
    answer:
      'SKYON IT SOLUTIONS is a technology and digital growth partner helping businesses build their digital foundation, automate operations, use data intelligently, and grow online.',
    links: [{ label: 'About Page', url: '/about' }],
  },
};

export const FLOW_B_SERVICES = [
  ...SERVICES.map((s) => s.shortTitle),
  'Not sure yet',
];

export const FLOW_B_BUDGETS = [
  ...BUDGET_RANGES,
  'Not sure yet',
];

export const FLOW_B_TIMELINES = [
  'ASAP',
  '1-2 months',
  '2-3 months',
  'Flexible',
];
