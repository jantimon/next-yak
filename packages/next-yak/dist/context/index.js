"use client";

// runtime/context/index.tsx
import React, { createContext, useContext } from "react";
var YakContext = createContext({});
var useTheme = () => useContext(YakContext);
var YakThemeProvider = ({
  children,
  theme = {}
}) => /* @__PURE__ */ React.createElement(YakContext.Provider, { value: theme }, children);
export {
  YakThemeProvider,
  useTheme
};
//# sourceMappingURL=index.js.map