/** @typedef {{ css?: string, styled?: string, keyframes?: string }} YakLocalIdentifierNames */

/**
 * Change css attribute to a named styled component. e.g.
 * @example
 * const x = <div css={css`...`} />
 * // will be transformed to
 * const x = <NewComponent />
 * var NewComponent = styled('div')(css`...`)
 * @param {{
 * path: import("@babel/core").NodePath<import("@babel/types").JSXElement>;
 * rootPath: import("@babel/core").NodePath<import("@babel/types").Program>;
 * t: import("@babel/types");
 * localVarNames: YakLocalIdentifierNames;
 * topLevelConstBindings: Map<string, number | string | null>;
 * yakImportPath: import("@babel/core").NodePath<import("@babel/core").types.ImportDeclaration>
 * }} props
 */
function transpileCssProp({
  path,
  rootPath,
  t,
  localVarNames,
  topLevelConstBindings,
  yakImportPath
}) {
  const openingElement = path.node.openingElement;
  const closingElement = path.node.closingElement;
  const cssPropIndex = openingElement.attributes.findIndex(
    (prop) =>
      t.isJSXAttribute(prop) &&
      t.isJSXIdentifier(prop.name) &&
      prop.name.name === "css"
  );
  // if the css prop is not present, we don't need to do anything
  if (cssPropIndex === -1) {
    return;
  }

  const cssProp = /** @type {import("@babel/types").JSXAttribute} */ (
    openingElement.attributes[cssPropIndex]
  );

  // if the css prop is not an expression, we don't need to do anything
  // e.g. <div css="..." /> instead of <div css={css`...`} />
  if (!t.isJSXExpressionContainer(cssProp.value)) {
    return;
  }

  const cssValue = cssProp.value.expression;

  // the css prop must be a css template literal or a variable that is a css template literal
  // e.g.:
  // const cssValue = css`...`
  // <div css={cssValue} />
  // or
  // <div css={css`...`} />
  if (
    !(t.isIdentifier(cssValue) && topLevelConstBindings.has(cssValue.name)) &&
    !(
      t.isTaggedTemplateExpression(cssValue) &&
      getYakExpressionType(cssValue.tag, localVarNames, t) === "cssLiteral"
    )
  ) {
    return;
  }


  // namespaced JSX is not supported (even by React itself)
  // e.g. <MyComponent:div css={css`...`} />
  if (t.isJSXNamespacedName(openingElement.name)) {
    throw new Error("Namespaced JSX not supported");
  }

  // if styled isn't imported, we need to access the module and add the import to it
  // e.g.: import {css} from "next-yak" -> import {css, styled} from "next-yak"
  if (localVarNames.styled == null) {
    if (yakImportPath) {
      yakImportPath.node.specifiers.push(
        t.importSpecifier(t.identifier("styled"), t.identifier("styled"))
      );
    }
  }

  // remove the css prop
  openingElement.attributes.splice(cssPropIndex, 1);

  // generate a new variable name for the styled component
  // e.g.:
  // const _YakComp = styled('div')(css`...`)
  const styledVar = path.scope.generateUidIdentifier("YakComp");
  const styledDeclaration = t.variableDeclaration("var", [
    t.variableDeclarator(
      styledVar,
      t.callExpression(
        t.callExpression(t.identifier(localVarNames.styled ?? "styled"), [
          t.isJSXIdentifier(openingElement.name)
            ? /^\p{Lu}/u.test(openingElement.name.name)
              ? t.identifier(openingElement.name.name)
              : t.stringLiteral(openingElement.name.name)
            : jsxMemberExpressionToMemberExpression(openingElement.name, t),
        ]),
        [cssValue]
      )
    ),
  ]);

  // replace the original JSX element with the new component
  openingElement.name = t.jsxIdentifier(styledVar.name);
  if (closingElement) {
    closingElement.name = t.jsxIdentifier(styledVar.name);
  }

  // add the new component to the bottom of the file (it's automatically hoisted to the top as it's a var declaration)
  rootPath.pushContainer("body", styledDeclaration);
}

/**
 * Converts a JSXMemberExpression that can be deeply nested JSXMemberExpressions to a MemberExpression and every JSXIdentifier to an Identifier
 * @param {import("@babel/types").JSXMemberExpression} jsxMemberExpression
 * @param {import("@babel/types")} t
 * @returns {import("@babel/types").MemberExpression}
 */
const jsxMemberExpressionToMemberExpression = (jsxMemberExpression, t) => {
  const { object, property } = jsxMemberExpression;
  if (t.isJSXMemberExpression(object)) {
    return t.memberExpression(
      jsxMemberExpressionToMemberExpression(object, t),
      t.identifier(property.name)
    );
  }
  return t.memberExpression(
    t.identifier(object.name),
    t.identifier(property.name)
  );
};

/**
 * Returns wether the given tag is matching a yak import
 *
 * e.g.:
 * - css`...` -> cssLiteral
 * - styled.div`...` -> styledLiteral
 * - styled(Component)`...` -> styledCall
 * - styled.div.attrs({})`...` -> attrsCall
 * - keyframes`...` -> keyframesLiteral
 *
 * @param {babel.types.Expression} tag
 * @param {YakLocalIdentifierNames} localVarNames
 * @param {import("@babel/types")} t
 * @returns {"cssLiteral" | "keyframesLiteral" | "styledLiteral" | "styledCall" | "attrsCall" | "unknown"}
 */
function getYakExpressionType(tag, localVarNames, t) {
  if (t.isIdentifier(tag)) {
    if (tag.name === localVarNames.css) {
      return "cssLiteral";
    }
    if (tag.name === localVarNames.keyframes) {
      return "keyframesLiteral";
    }
  }
  if (
    t.isMemberExpression(tag) &&
    t.isIdentifier(tag.object) &&
    tag.object.name === localVarNames.styled
  ) {
    return "styledLiteral";
  }
  if (
    t.isCallExpression(tag) &&
    t.isIdentifier(tag.callee) &&
    tag.callee.name === localVarNames.styled
  ) {
    return "styledCall";
  }
  if (
    t.isCallExpression(tag) &&
    t.isMemberExpression(tag.callee) &&
    t.isIdentifier(tag.callee.property) &&
    tag.callee.property.name === "attrs"
  ) {
    return "attrsCall";
  }
  return "unknown";
}

module.exports = transpileCssProp;
