/** @typedef {{ css?: string, styled?: string, keyframes?: string }} YakLocalIdentifierNames */

/**
 * Change css attribute to a named styled component. e.g.
 * @example
 * const x = <div css={css`...`} />
 * // will be transformed to
 * const x = <NewComponent />
 * var NewComponent = styled('div')(css`...`)
 * @param {import("@babel/core").NodePath<import("@babel/types").JSXElement>} path
 * @param {import("@babel/core").NodePath<import("@babel/types").Program>} rootPath
 * @param {import("@babel/types")} t
 * @param {YakLocalIdentifierNames} localVarNames
 */
function transpileCssProp(path, rootPath, t, localVarNames) {
  const openingElement = path.node.openingElement;
  const closingElement = path.node.closingElement;
  const cssPropIndex = openingElement.attributes.findIndex(
    (prop) =>
      t.isJSXAttribute(prop) &&
      t.isJSXIdentifier(prop.name) &&
      prop.name.name === "css"
  );
  if (cssPropIndex === -1) {
    return;
  }

  const cssProp = /** @type {import("@babel/types").JSXAttribute} */ (
    openingElement.attributes[cssPropIndex]
  );

  if (!t.isJSXExpressionContainer(cssProp.value)) {
    return;
  }

  const cssValue = cssProp.value.expression;

  if (!t.isTaggedTemplateExpression(cssValue)) {
    return;
  }

  const expressionType = getYakExpressionType(cssValue.tag, localVarNames, t);

  // todo: should work with references to the css function
  if (expressionType !== "cssLiteral") {
    return;
  }

  if (t.isJSXNamespacedName(openingElement.name)) {
    throw new Error("Namespaced JSX not supported");
  }

  // todo: cache the import declaration for "next-yak"
  // if styled isn't imported, we need to access the module and import it
  // e.g.: import {css} from "next-yak" -> import {css, styled} from "next-yak"
  if (localVarNames.styled == null) {
    const nextYakImport =
      /** @type {import("@babel/types").ImportDeclaration | undefined}  */ (
        rootPath.node.body.find((node) => {
          return (
            t.isImportDeclaration(node) && node.source.value === "next-yak"
          );
        })
      );
    if (nextYakImport) {
      nextYakImport.specifiers.push(
        t.importSpecifier(t.identifier("styled"), t.identifier("styled"))
      );
    }
  }

  openingElement.attributes.splice(cssPropIndex, 1);
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

  openingElement.name = t.jsxIdentifier(styledVar.name);
  if (closingElement) {
    closingElement.name = t.jsxIdentifier(styledVar.name);
  }

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
