// this file helps to reuse types for constants like
// breakpoints, colors, spacings, etc.
//
// next-yak will replace those constants during build
// time
// 
// we might change this approach in the future
// to allow direct imports to `.yak.ts` files
// e.g. `import { queries } from "./theme.yak"`
// vanilla extract is using this approach
// and it provides a very nice DX

import { queries } from "@/theme";

export const replaces = {
  queries,
};
