import type { BabelFile, NodePath, types as babelTypes } from "@babel/core";
import { objectExpression, type JSXAttribute, type JSXElement } from "@babel/types";
import { InvalidPositionError } from "../babel-yak-plugin.js";

export const transpileCssProp = (
  t: typeof babelTypes,
  path: NodePath<JSXElement>,
  runtimeInternalHelpers: Set<string>,
  file: BabelFile,
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
    if(cssPropValue){
    throw new InvalidPositionError(
            `CSS prop must be an expression.`,
            cssPropValue,
            file,
            "Use the css prop like this: <div css={css`...`} />",
          );
    } else {
      throw new Error(`css prop must be an expression but found ${cssPropValue}. Please use the css prop like this: <div css={css\`...\`} />`);
    }
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

  // relevant props are the ones that we need to merge with the css prop
  // like className, style, and other spread props
  const relevantProps = openingElement.attributes.filter(
    (prop) =>
      t.isJSXSpreadAttribute(prop) ||
      (t.isJSXAttribute(prop) &&
        t.isJSXIdentifier(prop.name) &&
        (prop.name.name === "className" ||
          prop.name.name === "style")),
  );

  // simple case where we don't have any other relevant props
  // e.g. <div css={css`color: red;`} />
  if (relevantProps.length === 0) {
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

  // map the relevant props to an object 
  // e.g. <div className="x" css={css`...`} style={{y:true}} {...p} /> gets converted to
  // { className: "x", style: {y:true}, ...p }
  const mapped = relevantProps
    .map((prop) => {
      if (t.isJSXAttribute(prop)) {
        if (t.isJSXNamespacedName(prop.name)) {
          throw new Error("Namespaced JSX not supported");
        }
        if (!prop.value) {
          return null;
        }
        // if (prop.name.name === "css") {
        //   return t.callExpression(cssExpression, [t.objectExpression([])]);
        // }

        if (t.isJSXExpressionContainer(prop.value)) {
          if (t.isJSXEmptyExpression(prop.value.expression)) {
            return null;
          }
          return  t.objectProperty(
              t.identifier(prop.name.name),
              prop.value.expression,
            );
        }
        return t.objectProperty(t.identifier(prop.name.name), prop.value);
      }
      return t.spreadElement(prop.argument);
    })
    .filter(Boolean) as Array<babelTypes.ObjectProperty | babelTypes.SpreadElement>;

  // remove all properties that are in the relevant props
  openingElement.attributes = openingElement.attributes.filter(
    (prop, index) => !relevantProps.includes(prop) && index !== cssPropIndex,
  );

  // add the spread attribute
  openingElement.attributes.push(
    t.jsxSpreadAttribute(
      t.callExpression(t.identifier("__yak_mergeCssProp"), [t.objectExpression(mapped), t.callExpression(cssExpression, [t.objectExpression([])])]),
    ),
  );

  // add import to the custom merge function to the top of the file
  // import { __yak_mergeCssProp } from "next-yak/runtime-internals";
  runtimeInternalHelpers.add("__yak_mergeCssProp");
};
