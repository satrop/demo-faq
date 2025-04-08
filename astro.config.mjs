// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  build: {
    format: "directory",
    inlineStylesheets: "never",
  },
  vite: {
    build: {
      cssMinify: false,
      minify: false,
    },
  },
});
