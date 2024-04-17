import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // used for bundling @babel/core into the browser bundle
    nodePolyfills({
      include: ["path", "fs"],
      globals: {
        process: true,
      },
    }),
  ],
  build: {
    // used for correct minification, otherwise we would have errors
    // not sure why tbh
    minify: "terser",
  },
});
