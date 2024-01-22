// @ts-check

/** @typedef {import("@babel/types")} babel */

/**
 * Try to get the name of a css literal
 *
 * e.g. ({$disabled}) => $disabled && css`...` -> "is_$disabled"
 *
 * @param {babel.NodePath<babel.types.TaggedTemplateExpression>} path
 * @returns {string}
 */
function getCssName(path) {
  const conditions = extractConditions(path);
  if (conditions.length === 0) {
    return "yak";
  }
  return conditions
    .map((condition) => {
      if (condition === "&&") {
        return "and";
      }
      if (condition === "||") {
        return "or";
      }
      return condition;
    })
    .join("_")
    .replace(/\$/g, "")
    .replace(/!/g, "not_");
}

/**
 * Extracts the conditions from a given path.
 *
 * @param {babel.NodePath} path - The path to extract conditions from.
 */
function extractConditions(path) {
  const conditions = [];
  let currentPath = path.parentPath;
  let child = path.node;
  while (
    currentPath &&
    (currentPath.isLogicalExpression() || currentPath.isConditionalExpression())
  ) {
    if (currentPath.isConditionalExpression() && conditions.length > 0) {
      conditions.push(operatorToWord("&&", false));
    }
    let left = currentPath.isLogicalExpression()
      ? currentPath.node.left
      : currentPath.node.test;
    const negated = currentPath.isConditionalExpression() && currentPath.node.alternate === child;
    const leftName = extractIdentifier(left, negated);
    if (leftName) {
      conditions.push(leftName);
    }
    while (left && left.type === "LogicalExpression") {
      if (left.type === "LogicalExpression" && left.right !== path.node) {
        const rightName = extractIdentifier(left.right, negated);
        if (rightName) {
          conditions.push(rightName);
          conditions.push(operatorToWord(left.operator, negated));
        }
      }
      left = left.left;
      const leftName = extractIdentifier(left, negated);
      if (leftName) {
        conditions.push(leftName);
      }
    }
    child = currentPath.node;
    currentPath = currentPath.parentPath;
  }
  return conditions.reverse();
}

/**
 * Extracts the identifier from a given node.
 * @param {babel.types.Node} node - The node to extract the identifier from.
 * @param {boolean} negated - Whether the node is negated.
 */
function extractIdentifier(node, negated) {
  if (node.type === "Identifier") {
    return prepend(node.name, "!", negated);
  }
  if (node.type === "MemberExpression" && node.object.type === "Identifier" &&  node.property.type === "Identifier") {
    return prepend(node.object.name + node.property.name[0].toUpperCase() + node.property.name.slice(1), "!", negated);
  }
  if (node.type === "UnaryExpression" && node.argument.type === "Identifier") {
    return prepend(node.argument.name, "!", !negated);
  }
  if (
    node.type === "UnaryExpression" &&
    node.argument.type === "UnaryExpression" &&
    node.argument.argument.type === "Identifier"
  ) {
    return prepend(node.argument.argument.name, "!", negated);
  }
  return null;
}


/**
 * Negates the operator if negated is true.
 *
 * @param {string} operator
 * @param {boolean} negated

 */
function operatorToWord(operator, negated) {
  switch (operator) {
    case "&&":
      return negated ? "or" : "and";
    case "||":
      return negated ? "and" : "or";
    default:
      return operator;
  }  
}

/**
 * Prepends a prefix to a string if active is true.
 * @param {string} str - The string to prepend the prefix to.
 * @param {string} prefix - The prefix to prepend.
 * @param {boolean} active - Whether to prepend the prefix.
 */
function prepend(str, prefix, active) {
  return active ? prefix + str : str;
}

module.exports = getCssName;
