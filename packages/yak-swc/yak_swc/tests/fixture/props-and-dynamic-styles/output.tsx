import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  flex-direction: var(--FlexContainer__flex-direction_o1wkyu);
  justify-content: var(--FlexContainer__justify-content_o1wkyu);
  align-items: var(--FlexContainer__align-items_o1wkyu);
  padding: 20px;
  background-color: #f0f0f0;
}
*/ /*#__PURE__*/ styled.div(__styleYak.FlexContainer, {
    "style": {
        "--FlexContainer__align-items_o1wkyu": ({ $align })=>$align || 'stretch',
        "--FlexContainer__flex-direction_o1wkyu": ({ $direction })=>$direction || 'row',
        "--FlexContainer__justify-content_o1wkyu": ({ $justify })=>$justify || 'flex-start'
    }
});
