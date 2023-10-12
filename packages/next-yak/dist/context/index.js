"use client";

// runtime/context/index.tsx
import React, {
  createContext,
  useContext
} from "react";

// runtime/context/baseContext.tsx
function getYakThemeContext() {
  return {};
}

// runtime/context/index.tsx
var YakContext = createContext(getYakThemeContext());
var useTheme = () => useContext(YakContext);
var YakThemeProvider = ({
  children,
  theme = getYakThemeContext()
}) => /* @__PURE__ */ React.createElement(YakContext.Provider, { value: theme }, children);
export {
  YakThemeProvider,
  useTheme
};
//# sourceMappingURL=index.js.map