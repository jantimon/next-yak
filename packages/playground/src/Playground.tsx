import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { YakEditor } from "./editor/YakEditor";
import { setupMonaco } from "./monaco";
import { useYakCompiler } from "./useYakCompiler/useYakCompiler";

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
  const [code, setCode] = useState(defaultInputValue);
  const result = useHighlighter(code);
  return (
    <>
      <PanelGroup
        autoSaveId="example"
        direction="horizontal"
        style={{ width: "90vw", height: "90vh" }}
      >
        <Panel
          defaultSize={50}
          style={{
            border: "1px solid #27272a",
          }}
        >
          <YakEditor initialValue={
            defaultInputValue
          } onChange={
            (value) => {
              setCode(value);
            }
          } />
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={50}>
          <PanelGroup direction="vertical">
            <Panel
              defaultSize={50}
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
                style={{ width: "100%", height: "100%", overflow: "scroll", paddingLeft: 10 }}
              ></div>
            </Panel>
            <PanelResizeHandle />
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
                  __html: result.cssOutput
                }}
                style={{ width: "100%", height: "100%", overflow: "scroll", paddingLeft: 10 }}
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
          theme: "vitesse-dark",
        }),
        cssOutput: highlighter.codeToHtml(result.cssOutput, {
          lang: "css-styled",
          theme: "vitesse-dark",
        }),
      });
    });
  }, [result]);
  return highlightedResult;
};

export default Playground;