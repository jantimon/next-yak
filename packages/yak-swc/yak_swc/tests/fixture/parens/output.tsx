import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const Card = /*YAK Extracted CSS:
.Card {
  background: url("/card-bg.jpg") no-repeat;
}
.Card__$active {
  backgorund: url(/card-bg-active.jpg) no-repeat;
}
*/ /*#__PURE__*/ styled.div(__styleYak.Card, ({ $active })=>$active && /*#__PURE__*/ css(__styleYak.Card__$active), ({ index })=>-index * 30, {
    "style": {
        "--Card__transform_m7uBBu": __yak_unitPostFix(({ index })=>index * 30, "deg")
    }
});
