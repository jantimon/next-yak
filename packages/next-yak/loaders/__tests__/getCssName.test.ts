import { parse, traverse } from "@babel/core";
import { NodePath } from "@babel/core";
import getCssName from "../lib/getCssName.cjs";
import type { TaggedTemplateExpression } from "@babel/types";
import { describe, it, expect } from "vitest";

function extractConditionsWithBabel(code: string) {
  let result: string = "";
  const ast = parse(code);
  if (!ast) {
    throw new Error("Could not parse code");
  }
  traverse(ast, {
    TaggedTemplateExpression(path: NodePath<TaggedTemplateExpression>) {
      if (path.node.tag.type === "Identifier" && path.node.tag.name === "css") {
        result = getCssName(path);
      }
    },
  });
  return result;
}

describe("getCssName", () => {
  it("should guess the css name from the condition of a logical expression", () => {
    const code = `({$active}) => $active && css\`\``;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_active");
  });

  it("should guess the css name from the condition of a ternary expression", () => {
    const code = `({$active}) => $active ? css\`\` : null`;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_active");
  });

  it("should guess the css name from the condition of a logical expression with negation", () => {
    const code = `({$active}) => !$active && css\`\``;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_not_active");
  });

  it("should guess the css name from the condition of a ternary expression for the else case", () => {
    const code = `({$active}) => $active ? null : css\`\``;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_not_active");
  });

  it("should guess the css name from the condition of a logical expression with multiple conditions", () => {
    const code = `({$active, $visible}) => $active && $visible && css\`\``;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_active_and_visible");
  });

  it("should guess the css name from the condition of a ternary expression with multiple conditions", () => {
    const code = `({$active, $visible}) => $active ? ($visible ? css\`\` : null) : null`;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_active_and_visible");
  });

  it("should guess the css name from the condition of a logical expression with negation and multiple conditions", () => {
    const code = `({$active, $visible}) => !$active && $visible && css\`\``;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_not_active_and_visible");
  });

  it("should guess the css name from the condition of a ternary expression with negation and multiple conditions", () => {
    const code = `({$active, $visible}) => !$active ? ($visible ? css\`\`: null) : null`;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_not_active_and_visible");
  });

  it("should guess the css name from the condition of a logical expression with negation and multiple conditions for the else case", () => {
    const code = `({$active, $visible}) => $active && !$visible && css\`\``;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_active_and_not_visible");
  });

  it("should guess the css name from the condition of a ternary expression with negation and multiple conditions for the else case", () => {
    const code = `({$active, $visible}) => $active ? ($visible ? null : css\`\`) : null`;
    const cssName = extractConditionsWithBabel(code);
    expect(cssName).toBe("is_active_and_not_visible");
  });
});
