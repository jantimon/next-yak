import type { NodePath, types as babelTypes } from "@babel/core";
import type { JSXAttribute, JSXElement } from "@babel/types";

export const transpileCssProp = (
  t: typeof babelTypes,
  path: NodePath<JSXElement>,
  runtimeInternalHelpers: Set<string>,
) => {
  const openingElement = path.node.openingElement;
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

  // can only be a JSXAttribute, as we checked above
  const cssPropValue = (openingElement.attributes[cssPropIndex] as JSXAttribute)
    .value;

  // if the css prop is not an expression, we don't need to do anything
  // e.g. <div css="..." /> instead of <div css={css`...`} />
  if (!t.isJSXExpressionContainer(cssPropValue)) {
    return;
  }

  // namespaced JSX is not supported (even by React itself)
  // e.g. <MyComponent:div css={css`...`} />
  if (t.isJSXNamespacedName(openingElement.name)) {
    throw new Error("Namespaced JSX not supported");
  }

  const cssExpression = cssPropValue.expression;

  if (t.isJSXEmptyExpression(cssExpression)) {
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
    // remove the css prop
    openingElement.attributes.splice(cssPropIndex, 1);

    // adding a spread attribute with the css prop, in order to be able to use `className` and `style` props that are
    // returned from the css prop
    openingElement.attributes.push(
      t.jsxSpreadAttribute(
        t.callExpression(cssExpression, [t.objectExpression([])]),
      ),
    );
    return;
  }

  // add the className, styleProp and spreadProps onto the opening element but keep the same ordering
  // e.g. <div className="x" css={css`...`} style={{y:true}} {...p} />
  // get converted to <div {...mergeCssProp({className: "x"}, {css: css`...`}, {style: {y:true}, {...p})} />
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
          return t.callExpression(cssExpression, [t.objectExpression([])]);
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

  // delete the relevant props
  relevantProps.forEach((prop) => {
    const index = openingElement.attributes.indexOf(prop);
    openingElement.attributes.splice(index, 1);
  });

  // add the spread attribute
  openingElement.attributes.push(
    t.jsxSpreadAttribute(
      t.callExpression(t.identifier("__yak_mergeCssProp"), mapped),
    ),
  );

  // add import to the custom merge function to the top of the file
  // import { __yak_mergeCssProp } from "next-yak/runtime-internals";
  runtimeInternalHelpers.add("__yak_mergeCssProp");
};
