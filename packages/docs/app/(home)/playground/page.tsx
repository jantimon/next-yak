"use client";
import MonacoEditor from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import { createHighlighterCoreSync } from "shiki";
import cssStyled from "../../../lib/langs/css-styled";
import styled from "../../../lib/langs/styled";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import ts from "shiki/langs/typescript.mjs";
import css from "shiki/langs/css.mjs";
import vitesseDark from "shiki/themes/vitesse-dark.mjs";
import vitesseLight from "shiki/themes/vitesse-light.mjs";
import { useRef, useState } from "react";
import { Primitive } from "fumadocs-ui/components/tabs";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const highlighter = createHighlighterCoreSync({
  themes: [vitesseLight, vitesseDark],
  langs: [ts, css, cssStyled, styled],
  engine: createJavaScriptRegexEngine(),
});

export default function Home() {
  const [tab, setTab] = useState<keyof typeof files>("index.tsx");
  // list of refs to keep track of the models
  const modelRefs = useRef<Array<any>>([]);
  const [response, setResponse] = useState<
    Record<
      `file:///${keyof typeof files}`,
      {
        original: string;
        transformed: string;
        css: string | undefined;
      }
    >
  >();

  return (
    <PanelGroup autoSaveId="example" direction="horizontal">
      <Panel defaultSize={66}>
        <Primitive.Tabs
          onValueChange={(v) => setTab(v as keyof typeof files)}
          value={tab}
        >
          <Primitive.TabsList>
            <Primitive.TabsTrigger value="index.tsx">
              index.tsx
            </Primitive.TabsTrigger>
            <Primitive.TabsTrigger value="other.tsx">
              other.tsx
            </Primitive.TabsTrigger>
            <Primitive.TabsTrigger value="different.yak.ts">
              different.yak.ts
            </Primitive.TabsTrigger>
          </Primitive.TabsList>
          <MonacoEditor
            height="100vh"
            language="typescript"
            theme="vitesse-dark"
            path={tab}
            options={{
              fontFamily: "Geist Mono",
              fontSize: 20,
              padding: { top: 16 },
              minimap: { enabled: false },
              automaticLayout: true,
              wordWrap: "on",
              formatOnType: true,
              lineDecorationsWidth: 1,
              lineNumbersMinChars: 4,
              tabSize: 2,
            }}
            beforeMount={(monaco) => {
              // LANGS.forEach((lang) => {
              //   if (!monaco) return;
              //   monaco.languages.register({
              //     id: MONACO_SHIKI_LANGS[lang as keyof typeof MONACO_SHIKI_LANGS],
              //   });
              // });

              // maybe clone this to change that the highlighter sets tsx coloring to typescript language of the editor
              // because the editor has to be set to typescript to get type information and shiki wants to be set to tsx for the
              // correct coloring
              shikiToMonaco(highlighter, monaco);

              monaco.editor.setTheme("vitesse-dark");
              monaco.editor.getModels().forEach((model) => model.dispose());

              // add files from the files object to the editor
              Object.entries(files).forEach(([path, { value, language }]) => {
                const model = monaco.editor.createModel(
                  value,
                  language,
                  monaco.Uri.parse(`file:///${path}`)
                );
                modelRefs.current.push(model);
              });
            }}
            onMount={async (editor, monaco) => {
              const react = await (
                await fetch(
                  "https://unpkg.com/@types/react@18.3.1/ts5.0/index.d.ts",
                  {
                    method: "GET",
                  }
                )
              ).text();

              const reactJSXRuntime = await (
                await fetch(
                  "https://unpkg.com/@types/react@18.3.1/ts5.0/jsx-runtime.d.ts",
                  {
                    method: "GET",
                  }
                )
              ).text();

              const nextYak = await (
                await fetch(
                  "https://unpkg.com/next-yak@0.3.1/dist/index.d.ts",
                  {
                    method: "GET",
                  }
                )
              ).text();
              const nextYakJSXRuntime = await (
                await fetch(
                  "https://unpkg.com/next-yak@0.3.1/dist/jsx-runtime.d.ts",
                  {
                    method: "GET",
                  }
                )
              ).text();

              monaco.languages.typescript.typescriptDefaults.addExtraLib(
                nextYak,
                "file:///node_modules/next-yak/index.d.ts"
              );

              monaco.languages.typescript.typescriptDefaults.addExtraLib(
                nextYakJSXRuntime,
                "file:///node_modules/next-yak/jsx-runtime.d.ts"
              );

              monaco.languages.typescript.typescriptDefaults.addExtraLib(
                react,
                "file:///node_modules/@types/react/index.d.ts"
              );

              monaco.languages.typescript.typescriptDefaults.addExtraLib(
                reactJSXRuntime,
                "file:///node_modules/@types/react/jsx-runtime.d.ts"
              );

              monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
                {
                  jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
                  jsxImportSource: "next-yak",
                  esModuleInterop: true,
                  paths: {
                    react: ["/node_modules/@types/react"],
                  },
                }
              );
            }}
            onChange={async () => {
              const code = modelRefs.current.reduce((acc, model) => {
                acc[model.uri] = model.getValue();
                return acc;
              }, {});
              const response = await (
                await fetch("http://localhost:3000/api/transform", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(code),
                })
              ).json();
              setResponse(response);
            }}
          />
        </Primitive.Tabs>
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={34}>
        <PanelGroup autoSaveId="example2" direction="vertical">
          <Panel defaultSize={98}>
            <Primitive.Tabs
              onValueChange={(v) => setTab(v as keyof typeof files)}
              value={tab}
            >
              <Primitive.TabsList>
                <Primitive.TabsTrigger value="index.tsx">
                  index.module.css
                </Primitive.TabsTrigger>
                <Primitive.TabsTrigger value="other.tsx">
                  other.module.css
                </Primitive.TabsTrigger>
              </Primitive.TabsList>
              <div
                dangerouslySetInnerHTML={{
                  __html: highlighter.codeToHtml(
                    response?.[`file:///${tab}`].css ?? "",
                    {
                      lang: "css",
                      // themes: { dark: "vitesse-dark", light: "vitesse-light" },
                      theme: "vitesse-dark",
                    }
                  ),
                }}
              />
            </Primitive.Tabs>
          </Panel>
          <PanelResizeHandle />
          <Panel collapsible collapsedSize={0} defaultSize={2}>
            <Primitive.Tabs
              onValueChange={(v) => setTab(v as keyof typeof files)}
              value={tab}
            >
              <Primitive.TabsList>
                <Primitive.TabsTrigger value="index.tsx">
                  index.tsx
                </Primitive.TabsTrigger>
                <Primitive.TabsTrigger value="other.tsx">
                  other.tsx
                </Primitive.TabsTrigger>
                <Primitive.TabsTrigger value="different.yak.ts">
                  different.yak.ts
                </Primitive.TabsTrigger>
              </Primitive.TabsList>
              <div
                dangerouslySetInnerHTML={{
                  __html: highlighter.codeToHtml(
                    response?.[`file:///${tab}`].transformed ?? "",
                    {
                      lang: "typescript",
                      // themes: { dark: "vitesse-dark", light: "vitesse-light" },
                      theme: "vitesse-dark",
                    }
                  ),
                }}
              />
            </Primitive.Tabs>
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
}

const files = {
  "other.tsx": {
    value: `import { styled } from "next-yak";

export const OtherButton = styled.div\`
  color: blue;
\`;`,
    language: "typescript",
  },
  "different.yak.ts": {
    value: `const green = "00ff00";
export const myColor = \`#\${ green }\`;`,
    language: "typescript",
  },

  "index.tsx": {
    value: `import { styled } from "next-yak";
import { OtherButton } from "./other";
import { myColor } from "./different.yak";

const Button = styled.div\`
  color: \${myColor};
\`;

const Component = () => {
  return (
  <>
    <Button>
      Hello, world!
    </Button>
    <OtherButton>
      Hello, world!
    </OtherButton>
  </>
  );
};`,
    language: "typescript",
  },
};
