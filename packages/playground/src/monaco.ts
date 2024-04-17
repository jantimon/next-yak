import * as monaco from "monaco-editor";
import { getHighlighterCore } from "shiki/core";
import getWasm from "shiki/wasm";
import { shikiToMonaco } from "@shikijs/monaco";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

export const setupMonaco = async () => {
  window.MonacoEnvironment = {
    getWorker: function (_, label) {
      switch (label) {
        case "typescript":
        case "javascript":
          return new tsWorker();
        case "html":
          return new htmlWorker();
        case "json":
        case "css":
        case "scss":
        case "less":
        case "handlebars":
        case "razor":
        default:
          return new editorWorker();
      }
    },
  };

  const highlighter = await getHighlighterCore({
    themes: [
      import("shiki/themes/vitesse-dark.mjs"),
      import("shiki/themes/vitesse-light.mjs"),
    ],
    langs: [
      import("shiki/langs/javascript.mjs"),
      import("shiki/langs/typescript.mjs"),
      import("shiki/langs/css.mjs"),
      import("shiki/langs/jsx.mjs"),
      import("shiki/langs/tsx.mjs"),
    ],
    loadWasm: getWasm,
    langAlias: {
      // this is needed, as monaco doesn't support jsx and tsx as language
      typescript: "tsx",
      javascript: "jsx",
    },
  });

  monaco.languages.register({ id: "typescript" });
  monaco.languages.register({ id: "javascript" });
  monaco.languages.register({ id: "css" });
  monaco.languages.register({ id: "jsx" });
  monaco.languages.register({ id: "tsx" });

  const yakTypes = import.meta.glob("/node_modules/next-yak/dist/**/*.d.ts", {
    eager: true,
    query: "?raw",
    import: "default",
  });

  for (const path in yakTypes) {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      String(yakTypes[path]),
      `file://${path.replace("/dist", "")}`
    );
  }

  const reactTypes = import.meta.glob(
    "/node_modules/@types/{react, react-dom}/**/*.d.ts",
    {
      eager: true,
      query: "?raw",
      import: "default",
    }
  );

  for (const path in reactTypes) {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      String(reactTypes[path]),
      `file://${path}`
    );
  }

  // typescript version of monaco-editor is < 5.1.0, so we need to ignore the error
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    diagnosticCodesToIgnore: [2786],
  });

  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
    esModuleInterop: true,
    paths: {
      react: ["/node_modules/@types/react"],
    },
  });

  // Register the themes from Shiki, and provide syntax highlighting for Monaco.
  shikiToMonaco(highlighter, monaco);
  return highlighter;
};
