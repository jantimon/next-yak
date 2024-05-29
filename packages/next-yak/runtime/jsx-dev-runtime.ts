import ReactJSXRuntimeDev from "react/jsx-dev-runtime";

// @ts-expect-error as the types are not exported
const Fragment = ReactJSXRuntimeDev.Fragment;
// @ts-expect-error as the types are not exported
const jsxDEV = ReactJSXRuntimeDev.jsxDEV;

export { Fragment, jsxDEV };
