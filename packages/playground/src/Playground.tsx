import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { YakEditor } from "./editor/YakEditor";
import { setupMonaco } from "./monaco";
import { useYakCompiler } from "./useYakCompiler/useYakCompiler";
import { readStateFromURL } from "./editor/shareableState";

const defaultInputValue = `import { styled } from "next-yak";

export const Button = styled.button\`
  font-size: 2rem;
  font-weight: bold;
  color: blue;
  &:hover {
    color: red;
  }
\`;`;

export function Playground() {
  const [code, setCode] = useState(
    () => readStateFromURL() ?? defaultInputValue
  );
  const result = useHighlighter(code);
  return (
    <>
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
            initialValue={code}
            onChange={(value) => {
              setCode(value);
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
                  __html: result.tsOutput,
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
                  __html: result.cssOutput,
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

const useHighlighter = (code: string) => {
  const result = useYakCompiler(code);
  const [highlightedResult, setHighlightedResult] = useState({
    tsOutput: "",
    cssOutput: "",
  });
  useEffect(() => {
    const highlighter = setupMonaco();
    highlighter.then((highlighter) => {
      setHighlightedResult({
        tsOutput: highlighter.codeToHtml(result.tsOutput, {
          lang: "tsx",
          themes: { dark: "vitesse-dark", light: "vitesse-light" },
        }),
        cssOutput: highlighter.codeToHtml(result.cssOutput, {
          lang: "css-styled",
          themes: { dark: "vitesse-dark", light: "vitesse-light" },
        }),
      });
    });
  }, [result]);
  return highlightedResult;
};

export default Playground;
