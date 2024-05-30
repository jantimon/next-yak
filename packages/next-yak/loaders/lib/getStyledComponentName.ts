import type { NodePath, types as babelTypes } from "@babel/core";

/**
 * Try to get the name of a styled component from a call or member expression
 *
 * e.g. const MyButton = styled.div`...` -> "MyButton"
 * e.g. const FancyButton = styled(MyButton)`...` -> "FancyButton"
 */
const getStyledComponentName = (
  taggedTemplateExpressionPath: NodePath<babelTypes.TaggedTemplateExpression>,
) => {
  const variableOrFunctionDeclaratorPath =
    taggedTemplateExpressionPath.findParent(
      (path) => path.isVariableDeclarator() || path.isFunctionDeclaration(),
    );

  if (
    variableOrFunctionDeclaratorPath?.isFunctionDeclaration() &&
    "id" in variableOrFunctionDeclaratorPath.node &&
    variableOrFunctionDeclaratorPath.node.id === null
  ) {
    const parent = variableOrFunctionDeclaratorPath.parentPath;
    if (parent.isExportDefaultDeclaration()) {
      return "defaultExp";
    }
  }

  if (
    !variableOrFunctionDeclaratorPath ||
    !("id" in variableOrFunctionDeclaratorPath.node) ||
    variableOrFunctionDeclaratorPath.node.id?.type !== "Identifier"
  ) {
    throw new Error(
      "Could not find variable declaration for styled component at " +
        JSON.stringify(taggedTemplateExpressionPath.node.loc),
    );
  }
  return variableOrFunctionDeclaratorPath.node.id.name;
};

export default getStyledComponentName;
