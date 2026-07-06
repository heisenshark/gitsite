import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://heisenshark.dev',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
