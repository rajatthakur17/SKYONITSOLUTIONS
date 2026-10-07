import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://skyonitsolutions.com',
  integrations: [sitemap()],
  redirects: {
    '/insights': '/blog',
    '/insights/plan-a-business-website': '/blog/plan-a-business-website',
    '/insights/when-custom-software-makes-sense': '/blog/when-custom-software-makes-sense',
    '/insights/start-an-automation-project': '/blog/start-an-automation-project',
  },
  vite: {
    plugins: [tailwindcss()],
  }
});
