import type { NodePath, types as babelTypes } from "@babel/core";

/**
 * Returns the name of the expression
 */
export const getConstantName = (
  expression: babelTypes.Expression,
  t: typeof babelTypes
) => {
  // e.g. styled.div`color: ${x};`
  if (t.isIdentifier(expression)) {
    // e.g. x
    return expression.name;
  } else if (
    t.isMemberExpression(expression) &&
    t.isIdentifier(expression.object)
  ) {
    // e.g. x for x.y
    return expression.object.name;
  } else if (
    t.isCallExpression(expression) &&
    t.isIdentifier(expression.callee)
  ) {
    // e.g. x for x()
    return expression.callee.name;
  } else if (
    t.isCallExpression(expression) &&
    t.isMemberExpression(expression.callee) &&
    t.isIdentifier(expression.callee.object)
  ) {
    // e.g. x for x.y()
    return expression.callee.object.name;
  } else {
    return null;
  }
};

/**
 * Extracts all top level constant values from a program path
 */
export function getConstantValues(
  path: NodePath<babelTypes.Program>,
  t: typeof babelTypes
) {
  const topLevelConstBindings = new Map<string, string | number | null>();
  const bindings = Object.entries(path.scope.bindings);
  for (const [name, binding] of bindings) {
    if (binding.kind === "module") {
      topLevelConstBindings.set(name, null);
      continue;
    }
    if (
      binding.kind === "let" ||
      binding.kind === "var" ||
      binding.kind === "const"
    ) {
      // don't consider function declarations or arrow functions as constants
      if (
        !("init" in binding.path.node) ||
        t.isFunctionDeclaration(binding.path.node.init) ||
        t.isArrowFunctionExpression(binding.path.node.init)
      ) {
        topLevelConstBindings.set(name, null);
        continue;
      }
      const value = binding.path.node.init;
      topLevelConstBindings.set(
        name,
        t.isStringLiteral(value) || t.isNumericLiteral(value)
          ? value.value
          : null
      );
    }
  }
  return topLevelConstBindings;
}
