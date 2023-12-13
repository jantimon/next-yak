// @ts-check

/** @typedef {import("@babel/types")} babel */

/**
 * Try to get the name of a styled component from a call or member expression
 *
 * e.g. const MyButton = styled.div`...` -> "MyButton"
 * e.g. const FancyButton = styled(MyButton)`...` -> "FancyButton"
 *
 * @param {babel.NodePath<babel.types.TaggedTemplateExpression>} taggedTemplateExpressionPath
 * @returns {string}
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
    throw new Error(
      "Could not find variable declaration for styled component at " +
        taggedTemplateExpressionPath.node.loc,
    );
  }
  return variableDeclaratorPath.node.id.name;
};

module.exports = getStyledComponentName;
