// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://cesarparra.github.io',
  base: 'blog',
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  integrations: [mdx(), sitemap(), react(), tailwind({
    applyBaseStyles: true
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),],
});
