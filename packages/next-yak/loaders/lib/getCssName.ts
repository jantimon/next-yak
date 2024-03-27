import type { NodePath, types as babelTypes } from "@babel/core";

/**
 * Extracts the conditions from a path
 */
function extractConditions(
  path: NodePath<babelTypes.TaggedTemplateExpression>
) {
  const conditions: string[] = [];
  const visitedNodes = new Set();
  const getConditions = (
    node: babelTypes.Node,
    previousNode: babelTypes.Node,
    isNegated = false
  ) => {
    if (visitedNodes.has(node)) return;
    visitedNodes.add(node);
    // Support for && and || operators e.g. disabled && "disabled"
    if (node.type === "LogicalExpression") {
      if (node.operator === "&&") {
        getConditions(node.right, previousNode, isNegated);
        conditions.push("and");
        getConditions(node.left, previousNode, isNegated);
      } else if (node.operator === "||") {
        getConditions(node.right, previousNode, isNegated);
        conditions.push("or");
        getConditions(node.left, previousNode, isNegated);
      }
    }
    // Support for ternary operator e.g. disabled ? "disabled" : "enabled"
    else if (node.type === "ConditionalExpression") {
      conditions.push("and");
      getConditions(node.test, previousNode, node.alternate === previousNode);
    }
    // Support for ! operator e.g. !disabled
    else if (node.type === "UnaryExpression" && node.operator === "!") {
      getConditions(node.argument, previousNode, !isNegated);
    }
    // Support for Boolean() function e.g. Boolean(disabled)
    else if (
      node.type === "CallExpression" &&
      node.callee.type === "Identifier" &&
      node.callee.name === "Boolean"
    ) {
      getConditions(node.arguments[0], previousNode, isNegated);
    }
    // Get the name of the variable e.g. disabled
    else if (node.type === "Identifier") {
      conditions.push((isNegated ? "not_" : "") + node.name);
    }
    // Get the name of a member expression e.g. props.disabled
    else if (node.type === "MemberExpression") {
      conditions.push(
        (isNegated ? "not_" : "") + getMemberExpressionName(node)
      );
    }
  };
  let currentPath: NodePath | null = path;
  let previousPath: NodePath = path;
  while (currentPath) {
    getConditions(currentPath.node, previousPath.node);
    previousPath = currentPath;
    currentPath = currentPath.parentPath;
  }
  if (conditions[0] === "or" || conditions[0] === "and") {
    conditions.shift();
  }
  return conditions.reverse();
}

/**
 * Try to get the name of a css component from a literal expression
 *
 * e.g. const mixin = css`...` -> "mixin"
 */
const getStyledComponentName = (
  taggedTemplateExpressionPath: NodePath<babelTypes.TaggedTemplateExpression>
) => {
  const variableDeclaratorPath = taggedTemplateExpressionPath.findParent(
    (path) => path.isVariableDeclarator()
  );
  if (
    !variableDeclaratorPath ||
    !("id" in variableDeclaratorPath.node) ||
    variableDeclaratorPath.node.id?.type !== "Identifier"
  ) {
    return null;
  }
  return variableDeclaratorPath.node.id.name;
};

/**
 * Try to get the name of a member expression
 *
 * e.g. props.disabled -> "propsDisabled"
 * e.g. props.user.disabled -> "propsUserDisabled
 */
function getMemberExpressionName(node: babelTypes.MemberExpression): string {
  if (
    !node.object ||
    !node.property ||
    (node.object.type !== "Identifier" &&
      node.object.type !== "MemberExpression")
  ) {
    return "";
  }
  const objectName =
    node.object.type === "Identifier"
      ? node.object.name
      : getMemberExpressionName(node.object);
  const property = node.property;
  let propertyName = "";
  if (property.type === "Identifier") {
    propertyName = property.name;
  } else if (property.type === "StringLiteral") {
    propertyName = property.value;
  }
  if (!propertyName) {
    return "";
  }
  return objectName + propertyName[0].toUpperCase() + propertyName.slice(1);
}

/**
 * Try to get the name of a css literal
 *
 * e.g. ({$disabled}) => $disabled && css`...` -> "is_$disabled"
 */
export default function getCssName(
  literal: NodePath<babelTypes.TaggedTemplateExpression>
) {
  const conditions = extractConditions(literal);
  if (conditions.length === 0) {
    const mixinName = getStyledComponentName(literal);
    return mixinName ? mixinName : "yak";
  }
  return conditions.join("_").replace(/\$/g, "");
}
