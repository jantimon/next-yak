/// <reference types="vitest" />
/// <reference types="vite/client" />
import { fileURLToPath, URL } from 'url';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    // Use typescript files during tests
    alias: {
      "next-yak": fileURLToPath(new URL('./runtime', import.meta.url)),
    },
  },
});
