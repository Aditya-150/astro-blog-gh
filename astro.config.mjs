import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://aditya-150.github.io',
	base: '/astro-blog-gh',
	integrations: [mdx(), sitemap()],
});
