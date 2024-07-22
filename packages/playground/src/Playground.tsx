import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { YakEditor } from "./editor/YakEditor";
import { setupMonaco } from "./monaco";
import { readStateFromURL } from "./editor/shareableState";
import { compileTS } from "./useYakCompiler/compileTS";
import { compileCSS } from "./useYakCompiler/compileCSS";

const defaultInputValue = `import { styled } from "next-yak";

export const Button = styled.button\`
  font-size: 2rem;
  font-weight: bold;
  color: blue;
  &:hover {
    color: red;
  }
\`;`;

const compile = async (code: string, yakVersion: string = "0.2.6") => {
  const highlighter = await setupMonaco();
  const tsOutput = await compileTS(code, yakVersion);
  const cssOutput = await compileCSS(tsOutput, yakVersion);
  return {
    code,
    tsOutput: highlighter.codeToHtml(tsOutput, {
      lang: "tsx",
      themes: { dark: "vitesse-dark", light: "vitesse-light" },
    }),
    cssOutput: highlighter.codeToHtml(cssOutput, {
      lang: "css-styled",
      themes: { dark: "vitesse-dark", light: "vitesse-light" },
    }),
  };
};

export function Playground() {
  const [code, setCode] = useState<Awaited<ReturnType<typeof compile>>>();

  useEffect(() => {
    const code = readStateFromURL() ?? defaultInputValue;
    compile(code).then(setCode);
  }, []);

  if (!code) return null;

  return (
    <>
      <select
        onChange={(e) => {
          compile(code.code, e.currentTarget.value).then(setCode);
        }}
      >
        <option value="0.2.6">0.2.6</option>
        <option value="0.2.5">0.2.5</option>
        <option value="0.2.4">0.2.4</option>
      </select>
      <PanelGroup
        autoSaveId="example"
        direction="horizontal"
        style={{ width: "100%", minHeight: "90vh", height: "100%" }}
      >
        <Panel
          defaultSize={60}
          style={{
            border: "1px solid #27272a",
          }}
        >
          <YakEditor
            initialValue={code.code}
            onChange={(value) => {
              compile(value).then(setCode);
            }}
          />
        </Panel>
        <PanelResizeHandle
          style={{
            width: 5,
          }}
        />
        <Panel defaultSize={40}>
          <PanelGroup direction="vertical">
            <Panel
              defaultSize={60}
              style={{
                border: "1px solid #27272a",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <p>Output TypeScript</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: code.tsOutput,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "scroll",
                  paddingLeft: 10,
                }}
              ></div>
            </Panel>
            <PanelResizeHandle style={{ height: 5 }} />
            <Panel
              style={{
                border: "1px solid #27272a",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <p>Output CSS</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: code.cssOutput,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "scroll",
                  paddingLeft: 10,
                }}
              ></div>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </>
  );
}

export default Playground;
