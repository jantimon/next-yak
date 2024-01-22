// @ts-check

/** @typedef {import("@babel/types")} babel */

/**
 * Extracts the conditions from a path
 * @param {babel.NodePath<babel.types.TaggedTemplateExpression>} path
 */
function extractConditions(path) {
  /** @type {string[]} */
  const conditions = [];
  const visitedNodes = new Set();
  /**
   * @param {babel.types.Node} node
   * @param {babel.types.Node} previousNode
   * @param {boolean} isNegated
   */
  const getConditions = (node, previousNode, isNegated = false) => {
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
    } else if (node.type === "Identifier") {
      conditions.push((isNegated ? "not_" : "") + node.name);
    } 
  };
  /** @type {babel.NodePath | null} */
  let currentPath = path;
  /** @type {babel.NodePath} */
  let previousPath = path;
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
 *
 * @param {babel.NodePath<babel.types.TaggedTemplateExpression>} taggedTemplateExpressionPath
 * @returns {string | null}
 */
const getStyledComponentName = (taggedTemplateExpressionPath) => {
  const variableDeclaratorPath = taggedTemplateExpressionPath.findParent(
    (path) => path.isVariableDeclarator(),
  );
  if (
    !variableDeclaratorPath ||
    !("id" in variableDeclaratorPath.node) ||
    variableDeclaratorPath.node.id?.type !== "Identifier"
  ) {
    return null
  }
  return variableDeclaratorPath.node.id.name;
}

/**
 * Try to get the name of a css literal
 *
 * e.g. ({$disabled}) => $disabled && css`...` -> "is_$disabled"
 *
 * @param {babel.NodePath<babel.types.TaggedTemplateExpression>} literal
 * @returns {string}
 */
function getCssName(literal) {
  const conditions = extractConditions(literal);
  if (conditions.length === 0) {
    const mixinName = getStyledComponentName(literal);
    return mixinName ? mixinName : "yak";
  }
  return conditions.join("_").replace(/\$/g, "");
}

module.exports = getCssName;
