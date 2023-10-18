// runtime/context/index.server.tsx
import React, { cache } from "react";
import { YakThemeProvider as YakThemeClientProvider } from "./index.js";
import { getYakThemeContext } from "next-yak/context/baseContext";
var useTheme = cache(() => getYakThemeContext());
var YakThemeProvider = ({ children }) => {
  return /* @__PURE__ */ React.createElement(YakThemeClientProvider, { theme: useTheme() }, children);
};
export {
  YakThemeProvider,
  useTheme
};
//# sourceMappingURL=index.server.js.map