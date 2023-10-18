//
// This file is the react-server component version of index.tsx
//

// @ts-ignore - in the current @types/react "cache" is not typed
import React, { ReactNode, cache } from "react";
import { YakThemeProvider as YakThemeClientProvider } from "./index.js";

// the following import might be changed by
// the user config in withYak to point to their own
// context
import { getYakThemeContext } from "next-yak/context/baseContext";

export const useTheme = cache(() => getYakThemeContext());
export const YakThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <YakThemeClientProvider theme={useTheme()}>
      {children}
    </YakThemeClientProvider>
  );
};
