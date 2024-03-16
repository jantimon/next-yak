// todo: Move this to next-yak and reference it from there
import { ComponentStyles } from "next-yak";
import "react";
declare module "react" {
  interface Attributes {
    css?: ComponentStyles<{}>;
  }
}
