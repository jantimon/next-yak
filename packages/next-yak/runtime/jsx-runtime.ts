import ReactJSXRuntime from "react/jsx-runtime";
import type { StaticCSSProp } from "./cssLiteral.js";

// @ts-ignore
const Fragment = ReactJSXRuntime.Fragment;
// @ts-ignore
const jsx = ReactJSXRuntime.jsx;
// @ts-ignore
const jsxs = ReactJSXRuntime.jsxs;

export declare namespace YakJSX {
  export type Element = React.JSX.Element;
  export type ElementType = React.JSX.ElementType;
  export type ElementClass = React.JSX.ElementClass;
  export type ElementAttributesProperty = React.JSX.ElementAttributesProperty;
  export type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute;
  export type LibraryManagedAttributes<C, P> =
    React.JSX.LibraryManagedAttributes<C, P>;
  export type IntrinsicAttributes = React.JSX.IntrinsicAttributes;
  export type IntrinsicClassAttributes<T> =
    React.JSX.IntrinsicClassAttributes<T>;
  export type IntrinsicElements = {
    [K in keyof JSX.IntrinsicElements]: React.JSX.IntrinsicElements[K] & {
      css?: StaticCSSProp;
    };
  };
}

export { type YakJSX as JSX, Fragment, jsx, jsxs };
