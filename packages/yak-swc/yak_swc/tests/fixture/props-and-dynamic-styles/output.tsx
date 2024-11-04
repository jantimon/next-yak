import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  align-items: var(--FlexContainer__align-items_pMS1gk);
  flex-direction: var(--FlexContainer__flex-direction_pMS1gk);
  justify-content: var(--FlexContainer__justify-content_pMS1gk);
  padding: 20px;
  margin-bottom: var(--FlexContainer__margin-bottom_pMS1gk);
  top: var(--FlexContainer__top_pMS1gk);
  background-color: #f0f0f0;
}
.FlexContainer__ {
  bottom: var(--FlexContainer__bottom_pMS1gk);
}
*/ /*#__PURE__*/ styled.div(__styleYak.FlexContainer, ({ $bottom })=>/*#__PURE__*/ css(__styleYak.FlexContainer__, {
        "style": {
            "--FlexContainer__bottom_pMS1gk": __yak_unitPostFix($bottom * 20, "%")
        }
    }), {
    "style": {
        "--FlexContainer__align-items_pMS1gk": ({ $align })=>$align || 'stretch',
        "--FlexContainer__flex-direction_pMS1gk": ({ $direction })=>$direction || 'row',
        "--FlexContainer__justify-content_pMS1gk": ({ $justify })=>$justify || 'flex-start',
        "--FlexContainer__margin-bottom_pMS1gk": __yak_unitPostFix(({ $marginBottom })=>$marginBottom || '0', "px"),
        "--FlexContainer__top_pMS1gk": __yak_unitPostFix(({ $top })=>$top * 20, "%")
    }
});
