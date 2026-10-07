export interface WorkMetric {
  value: string;
  label: string;
}

export interface WorkItem {
  id: string;
  title: string;
  slug: string;
  category: 'CLIENT' | 'PRODUCT';
  categoryLabel: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  metrics: WorkMetric[];
  techStack: string[];
  liveUrl: string;
  liveUrlLabel: string;
  image?: string;
  imageAlt: string;
  imagePlaceholderNote?: string;
  clientBadge: string;
}

export const CUMULATIVE_WORK_STATS = [
  { value: '99.99%', label: 'Production Uptime', context: 'High-availability edge delivery architecture' },
  { value: '< 1.2s', label: 'Mobile LCP Speed', context: 'Average Largest Contentful Paint across deployed sites' },
  { value: '100k+', label: 'Generated Assets', context: 'PDFs and customer interactions processed client-side' },
  { value: '100%', label: 'Proprietary IP Handoff', context: 'Full source code & database ownership transferred' }
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'r4realty',
    title: 'R4Realty.in',
    slug: 'r4realty',
    category: 'CLIENT',
    categoryLabel: 'Authorized Client Project',
    sector: 'Real Estate & Property Advisory (Noida & NCR)',
    summary: 'A bespoke, high-performance property portal for Noida property consultant Rajveer Singh, engineered for rapid mobile browsing, verified RERA property showcases, and direct-to-WhatsApp buyer consultations.',
    challenge: 'The client faced heavy competition in the NCR real-estate market with high ad bounce rates on mobile. Traditional WordPress portals loaded slowly over mobile 4G, suffered from clunky lead forms, and failed to convert mobile searchers who prefer instant WhatsApp discussions.',
    solution: 'SKYON engineered a lightweight, mobile-first static architecture utilizing Astro and Tailwind CSS. We implemented structured property categorization for commercial and residential RERA developments, sub-second edge routing on Cloudflare, and frictionless one-tap WhatsApp consultation funnels with pre-filled property inquiry tags.',
    keyOutcomes: [
      'Engineered sub-second mobile page loads across 4G and 5G connections in NCR.',
      'Replaced multi-field web forms with one-tap WhatsApp direct consultations.',
      'Achieved 100% Core Web Vitals pass rates with zero server database maintenance fees.',
      'Enabled rapid content updates for newly launched residential and commercial developments.'
    ],
    metrics: [
      { value: '< 1.1s', label: 'Mobile LCP Load Time' },
      { value: '100%', label: 'Core Web Vitals Pass' },
      { value: '0', label: 'Server Maintenance Headaches' }
    ],
    techStack: ['Astro', 'Tailwind CSS v4', 'TypeScript', 'Cloudflare Edge', 'WhatsApp Funnels', 'Schema.org SEO'],
    liveUrl: 'https://r4realty.in/',
    liveUrlLabel: 'Visit Live Site: R4Realty.in',
    imageAlt: 'R4Realty property consulting web portal homepage and RERA project listings',
    imagePlaceholderNote: 'Upload screenshot to public/images/work/r4realty.webp to replace the interactive browser mockup.',
    clientBadge: 'Authorized Client Project'
  },
  {
    id: 'mymarriagebiodata',
    title: 'MyMarriageBiodata',
    slug: 'mymarriagebiodata',
    category: 'PRODUCT',
    categoryLabel: 'Internal Digital Product',
    sector: 'Consumer Digital Utilities & Document Generation',
    summary: 'A free online marriage biodata creator for users across India to generate, customize, and download elegant biodata PDFs with 100% in-browser privacy and zero server latency.',
    challenge: 'Existing online biodata tools required intrusive user account signups, stored sensitive matrimonial details on insecure remote servers, or relied on slow server-side PDF generation queues that broke under high traffic volumes.',
    solution: 'SKYON engineered a zero-cost, privacy-first client-side web application using Astro and React Islands. The PDF rendering engine compiles directly in the user\'s browser via jsPDF and html2canvas without sending sensitive biodata fields across the wire, ensuring instantaneous downloads and zero monthly server compute costs.',
    keyOutcomes: [
      'Processed over 100,000+ custom marriage biodata PDF downloads across India.',
      '100% client-side privacy: personal and matrimonial data never touches remote servers.',
      'Zero server compute and zero database operating expenses through static edge hosting.',
      'Instantaneous client-side PDF rendering with high-resolution typography and print layouts.'
    ],
    metrics: [
      { value: '100k+', label: 'Biodata PDFs Generated' },
      { value: '0ms', label: 'Server Latency (Client-Side)' },
      { value: '100%', label: 'Private & Local Processing' }
    ],
    techStack: ['Astro', 'React Islands', 'Tailwind CSS v4', 'TypeScript', 'jsPDF', 'html2canvas', 'Edge CDN'],
    liveUrl: 'https://www.mymarriagebiodata.com/',
    liveUrlLabel: 'Visit Live Product: MyMarriageBiodata.com',
    imageAlt: 'MyMarriageBiodata online web app interface with real-time PDF preview builder',
    clientBadge: 'Internal Product'
  }
];

export const WORK_METHODOLOGY = [
  {
    step: '01',
    title: 'Discovery & System Blueprint',
    description: 'We diagnose your core business bottleneck, target user friction, data relationships, and speed requirements before designing architecture.'
  },
  {
    step: '02',
    title: 'Figma UI/UX & Interactive Flow',
    description: 'We craft high-fidelity responsive screens and design tokens in Figma, validating information hierarchy and WCAG 2.2 AA accessibility.'
  },
  {
    step: '03',
    title: 'Component Engineering & Type Safety',
    description: 'We write clean, modular Astro or React code with TypeScript and Tailwind CSS v4, keeping runtime footprints minimal and secure.'
  },
  {
    step: '04',
    title: 'Edge Deployment & IP Handover',
    description: 'We deploy to global edge CDN networks with automated CI/CD pipelines, SSL/TLS, and hand over 100% source code ownership.'
  }
];
