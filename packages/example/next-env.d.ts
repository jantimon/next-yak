/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

// todo: Move this to next-yak and reference it from there
import "react";
declare module "react" {
  interface Attributes {
    css?: ComponentStyles<{}>;
  }
}
