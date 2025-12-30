// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://redstone-kr.github.io',
  adapter: edgeoneAdapter(),
  output: 'static',
  integrations: [react()]
});