import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carpentermeghannb.ca',
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [sitemap()],
  build: {
    assets: 'assets',
    // Inline stylesheets into the HTML so the page paints fully styled on first
    // load: no flash of unstyled content, no off-canvas menu sliding in/out,
    // and one fewer render-blocking request.
    inlineStylesheets: 'always'
  }
});