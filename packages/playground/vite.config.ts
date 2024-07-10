import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";

export default defineConfig({
  build: {
    // compile node code to a browser bundle
    lib: {
      entry: {
        playground: "./src/index.tsx",
      },
      formats: ["es"],
      fileName: (_format, name) => `${name}.js`,
    },
    rollupOptions: {
      external: [
        // Exclude react and react-dom from the bundle
        "react",
        "react/jsx-runtime",
        "react-dom",

        // Exclude monaco-editor from the bundle
        "monaco-editor",
        "monaco-editor/esm/vs/language/typescript/ts.worker?worker",
        "monaco-editor/esm/vs/language/html/html.worker?worker",
        "monaco-editor/esm/vs/editor/editor.worker?worker",

        // Packing breaks variable hoisting of var function declaration:
        // https://github.com/babel/babel/blob/main/packages/babel-plugin-syntax-typescript/src/index.ts
        "@babel/plugin-syntax-typescript",
      ],
    },
  },
  plugins: [
    react(),
    // used for bundling @babel/core into the browser bundle
    nodePolyfills({
      include: ["path", "fs"],
    }),
  ],
  resolve: {
    alias: {
      // @babel/core can only be bundled from the typescript files
      "next-yak/css-loader": path.resolve(
        __dirname,
        "../next-yak/loaders/css-loader.ts"
      ),
      "next-yak/ts-loader": path.resolve(
        __dirname,
        "../next-yak/loaders/ts-loader.ts"
      ),
      "next-yak/ts-post-loader": path.resolve(
        __dirname,
        "../next-yak/loaders/ts-post-loader.ts"
      ),
      // use the dev version of useYakCompiler
      "next-yak-playground/useYakCompiler": path.resolve(
        __dirname,
        "./src/useYakCompiler/useYakCompiler.ts"
      ),
      // patch getCssModuleLocalIdent to not use unaccessible globals
      "next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.js": path.resolve(
        __dirname,
        "./src/fixes/getCssModuleLocalIdent.ts"
      ),
    },
  },
});
