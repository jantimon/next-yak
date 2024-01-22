import { parse, traverse } from "@babel/core";
import { NodePath } from "@babel/core";
import getCssName from "../lib/getCssName.cjs";
import type { TaggedTemplateExpression } from "@babel/types";
import { describe, it, expect } from "vitest";

function getCssLiteral(code: string) {
  let result: NodePath<TaggedTemplateExpression> | null = null;
  const ast = parse(code);
  if (!ast) {
    throw new Error("Could not parse code");
  }
  traverse(ast, {
    TaggedTemplateExpression(path: NodePath<TaggedTemplateExpression>) {
      if (path.node.tag.type === "Identifier" && path.node.tag.name === "css") {
        result = path;
      }
    },
  });
  if (!result) {
    throw new Error("Could not find css literal");
  }
  return result;
}

describe("getCssName", () => {
  it("should guess the css name from the condition of a logical expression", () => {
    const literal = getCssLiteral(`({$active}) => $active && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active");
  });

  it("should guess the css name from the condition of a ternary expression", () => {
    const literal = getCssLiteral(`({$active}) => $active ? css\`\` : null`);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active");
  });

  it("should guess the css name from the condition of a logical expression with negation", () => {
    const literal = getCssLiteral(`({$active}) => !$active && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("not_active");
  });

  it("should guess the css name from the condition of a ternary expression for the else case", () => {
    const literal = getCssLiteral(`({$active}) => $active ? null : css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("not_active");
  });

  it("should guess the css name from the condition of a logical expression with multiple conditions", () => {
    const literal = getCssLiteral(
      `({$active, $visible}) => $active && $visible && css\`\``
    );
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_and_visible");
  });

  it("should guess the css name from the condition of a ternary expression with multiple conditions", () => {
    const literal = getCssLiteral(
      `({$active, $visible}) => $active ? ($visible ? css\`\` : null) : null`
    );
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_and_visible");
  });

  it("should guess the css name from the condition of a logical expression with negation and multiple conditions", () => {
    const literal = getCssLiteral(
      `({$active, $visible}) => !$active && $visible && css\`\``
    );
    const cssName = getCssName(literal);
    expect(cssName).toBe("not_active_and_visible");
  });

  it("should guess the css name from the condition of a ternary expression with negation and multiple conditions", () => {
    const literal = getCssLiteral(
      `({$active, $visible}) => !$active ? ($visible ? css\`\`: null) : null`
    );
    const cssName = getCssName(literal);
    expect(cssName).toBe("not_active_and_visible");
  });

  it("should guess the css name from the condition of a logical expression with negation and multiple conditions for the else case", () => {
    const literal = getCssLiteral(
      `({$active, $visible}) => $active && !$visible && css\`\``
    );
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_and_not_visible");
  });

  it("should guess the css name from the condition of a ternary expression with negation and multiple conditions for the else case", () => {
    const literal = getCssLiteral(
      `({$active, $visible}) => $active ? ($visible ? null : css\`\`) : null`
    );
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_and_not_visible");
  });

  it("should guess the css name from the condition of a nested logical expression", () => {
    const literal = getCssLiteral(
      `({ $visible }) => $visible && (({ $active }) => $active && css\`\`)`
    );
    const cssName = getCssName(literal);
    expect(cssName).toBe("visible_and_active");
  });

  it("should guess the css name from a complex expression using AND and OR operators", () => {
    const literal = getCssLiteral(`({$active, $visible, $enabled}) => ($active || $visible) && $enabled && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_or_visible_and_enabled");
  });

  it("should guess the css name from nested logical expressions", () => {
    const literal = getCssLiteral(`({$active, $visible, $enabled}) => ($active && ($visible || $enabled)) && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_and_visible_or_enabled");
  });

  it("should guess the css name from an expression with multiple OR conditions", () => {
    const literal = getCssLiteral(`({$active, $visible, $enabled}) => $active || $visible || $enabled && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_or_visible_or_enabled");
  });

  it("should guess the css name from a complex combination of AND and OR operators", () => {
    const literal = getCssLiteral(`({$active, $visible, $enabled}) => ($active && $visible) || ($visible && $enabled) && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active_and_visible_or_visible_and_enabled");
  });

  it("should guess the css name from a condition using Boolean() function", () => {
    const literal = getCssLiteral(`({$active}) => Boolean($active) && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active");
  });

  it("should guess the css name from a condition using double negation", () => {
    const literal = getCssLiteral(`({$active}) => !!$active && css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("active");
  });

  it("should guess the css name from the variable name", () => {
    const literal = getCssLiteral(`const Mixin = css\`\``);
    const cssName = getCssName(literal);
    expect(cssName).toBe("Mixin");
  });
});
