import type { NodePath, types as babelTypes } from "@babel/core";

/**
 * Try to get the name of a styled component from a call or member expression
 *
 * e.g. const MyButton = styled.div`...` -> "MyButton"
 * e.g. const FancyButton = styled(MyButton)`...` -> "FancyButton"
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
    throw new Error(
      "Could not find variable declaration for styled component at " +
        taggedTemplateExpressionPath.node.loc
    );
  }
  return variableDeclaratorPath.node.id.name;
};

export default getStyledComponentName;
