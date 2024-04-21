import type { NodePath, types as babelTypes } from "@babel/core";
import type { JSXElement } from "@babel/types";

export const transpileCssProp = (
  t: typeof babelTypes,
  path: NodePath<JSXElement>,
) => {
  const openingElement = path.node.openingElement;
  const closingElement = path.node.closingElement;
  const cssPropIndex = openingElement.attributes.findIndex(
    (prop) =>
      t.isJSXAttribute(prop) &&
      t.isJSXIdentifier(prop.name) &&
      prop.name.name === "css",
  );
  // if the css prop is not present, we don't need to do anything
  if (cssPropIndex === -1) {
    return;
  }

  const cssProp =
    /** @type {import("@babel/types").JSXAttribute} */ openingElement
      .attributes[cssPropIndex];

  //todo: check
  if (t.isJSXSpreadAttribute(cssProp)) {
    return;
  }

  // if the css prop is not an expression, we don't need to do anything
  // e.g. <div css="..." /> instead of <div css={css`...`} />
  if (!t.isJSXExpressionContainer(cssProp.value)) {
    return;
  }

  // namespaced JSX is not supported (even by React itself)
  // e.g. <MyComponent:div css={css`...`} />
  if (t.isJSXNamespacedName(openingElement.name)) {
    throw new Error("Namespaced JSX not supported");
  }

  const cssValue = cssProp.value.expression;

  // remove the css prop
  // openingElement.attributes.splice(cssPropIndex, 1);

  if (t.isJSXEmptyExpression(cssValue)) {
    return;
  }

  // simple case where we don't have any other relevant props
  if (
    !openingElement.attributes.some(
      (prop) =>
        t.isJSXSpreadAttribute(prop) ||
        prop.name.name === "className" ||
        prop.name.name === "style",
    )
  ) {
    openingElement.attributes.splice(cssPropIndex, 1);

    openingElement.attributes.push(
      t.jsxSpreadAttribute(
        t.callExpression(t.callExpression(t.identifier("css"), [cssValue]), [
          // todo: check if we need access to the other props and maybe theme? Or throw an error?
          t.objectExpression([]),
        ]),
      ),
    );
    return;
  }

  // add the className, styleProp and spreadProps onto the opening element but keep the same ordering
  // e.g. <div className="x" css={css`...`} style={{y:true}} {...p} />
  // get converted to <div {yakMerge({className: "x"}, {css: css`...`}, {style: {y:true}, {...p})} />

  const relevantProps = openingElement.attributes.filter(
    (prop) =>
      t.isJSXSpreadAttribute(prop) ||
      (t.isJSXAttribute(prop) &&
        t.isJSXIdentifier(prop.name) &&
        (prop.name.name === "className" ||
          prop.name.name === "style" ||
          prop.name.name === "css")),
  );

  //map the props to an object
  const mapped = relevantProps
    .map((prop) => {
      if (t.isJSXAttribute(prop)) {
        if (t.isJSXNamespacedName(prop.name)) {
          throw new Error("Namespaced JSX not supported");
        }
        if (!prop.value) {
          return null;
        }
        if (prop.name.name === "css") {
          return t.callExpression(t.identifier("css"), [cssValue]);
        }

        if (t.isJSXExpressionContainer(prop.value)) {
          if (t.isJSXEmptyExpression(prop.value.expression)) {
            return null;
          }
          return t.objectExpression([
            t.objectProperty(
              t.identifier(prop.name.name),
              prop.value.expression,
            ),
          ]);
        }
        return t.objectExpression([
          t.objectProperty(t.identifier(prop.name.name), prop.value),
        ]);
      }
      return t.objectExpression([t.spreadElement(prop.argument)]);
    })
    .filter(Boolean) as babelTypes.ObjectExpression[];

  // console.log(relevantProps, mapped);

  // delete the relevant props
  relevantProps.forEach((prop) => {
    const index = openingElement.attributes.indexOf(prop);
    openingElement.attributes.splice(index, 1);
  });

  // add the spread attribute
  openingElement.attributes.push(
    t.jsxSpreadAttribute(
      t.callExpression(t.identifier("_yak_css_prop"), mapped),
    ),
  );
};
