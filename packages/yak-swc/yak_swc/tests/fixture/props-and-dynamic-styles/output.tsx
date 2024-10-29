import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  align-items: var(--FlexContainer__align-items_o1wkyu);
  flex-direction: var(--FlexContainer__flex-direction_o1wkyu);
  justify-content: var(--FlexContainer__justify-content_o1wkyu);
  padding: 20px;
  margin-bottom: var(--FlexContainer__margin-bottom_o1wkyu);
  top: var(--FlexContainer__top_o1wkyu);
  background-color: #f0f0f0;
}
.FlexContainer__ {
  bottom: var(--FlexContainer__bottom_o1wkyu);
}
*/ /*#__PURE__*/ styled.div(__styleYak.FlexContainer, ({ $bottom })=>/*#__PURE__*/ css(__styleYak.FlexContainer__, {
        "style": {
            "--FlexContainer__bottom_o1wkyu": __yak_unitPostFix($bottom * 20, "%")
        }
    }), {
    "style": {
        "--FlexContainer__align-items_o1wkyu": ({ $align })=>$align || 'stretch',
        "--FlexContainer__flex-direction_o1wkyu": ({ $direction })=>$direction || 'row',
        "--FlexContainer__justify-content_o1wkyu": ({ $justify })=>$justify || 'flex-start',
        "--FlexContainer__margin-bottom_o1wkyu": __yak_unitPostFix(({ $marginBottom })=>$marginBottom || '0', "px"),
        "--FlexContainer__top_o1wkyu": __yak_unitPostFix(({ $top })=>$top * 20, "%")
    }
});
