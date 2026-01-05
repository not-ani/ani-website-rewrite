// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [react()],

  markdown: {
    rehypePlugins: [rehypeHeadingIds],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

