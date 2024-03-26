import { defineConfig } from "tsup";

export default defineConfig([
  // runtime
  {
    entryPoints: ["runtime/index.ts"],
    format: ["cjs", "esm"],
    minify: true,
    sourcemap: true,
    clean: true,
    external: ["react", "next-yak/context"],
    target: "es2022",
    outDir: "dist",
  },
  // runtime types (has to be separate because it includes context types)
  {
    entryPoints: ["runtime/index.ts"],
    format: ["cjs", "esm"],
    dts: {
      only: true,
    },
    external: ["react"],
    target: "es2022",
    outDir: "dist",
  },
  // runtime internals (helpers which get injected by the compiler)
  {
    entryPoints: ["runtime/internals/index.ts"],
    format: ["cjs", "esm"],
    minify: true,
    sourcemap: true,
    clean: true,
    external: ["react"],
    target: "es2022",
    outDir: "dist/runtime-internals",
  },
  // static
  {
    entryPoints: ["static/index.ts"],
    format: ["cjs", "esm"],
    minify: true,
    sourcemap: true,
    clean: true,
    dts: true,
    external: ["react"],
    target: "es2022",
    outDir: "dist/static",
  },
  // baseContext
  {
    entryPoints: ["runtime/context/baseContext.tsx"],
    format: ["cjs", "esm"],
    minify: false,
    sourcemap: true,
    clean: false,
    dts: true,
    external: ["react"],
    target: "es2022",
    outDir: "dist/context",
  },
  // client context
  {
    entryPoints: ["runtime/context/index.tsx"],
    format: ["cjs", "esm"],
    minify: false,
    sourcemap: true,
    clean: false,
    dts: true,
    external: ["react"],
    target: "es2022",
    outDir: "dist/context",
  },
  // server context
  {
    entryPoints: ["runtime/context/index.server.tsx"],
    format: ["cjs", "esm"],
    minify: false,
    sourcemap: true,
    clean: false,
    external: ["react", "next-yak/context/baseContext", "./index.js"],
    target: "es2022",
    outDir: "dist/context",
  },
  // withYak (next.js config plugin)
  {
    entryPoints: ["withYak/index.ts"],
    format: ["cjs", "esm"],
    minify: false,
    sourcemap: true,
    clean: false,
    dts: true,
    external: ["../loaders/tsloader.cjs", "../loaders/cssloader.cjs"],
    target: "es2022",
    outDir: "withYak",
  },
]);
