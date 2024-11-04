import { styled, __yak_unitPostFix } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  z-index: var(--FlexContainer__z-index_pMS1gk);
  margin-bottom: var(--FlexContainer__margin-bottom_pMS1gk);
}
*/ /*#__PURE__*/ styled.div(__styleYak.FlexContainer, {
    "style": {
        "--FlexContainer__margin-bottom_pMS1gk": __yak_unitPostFix(spacing[40].toString(), "px"),
        "--FlexContainer__z-index_pMS1gk": getZIndex()
    }
});
