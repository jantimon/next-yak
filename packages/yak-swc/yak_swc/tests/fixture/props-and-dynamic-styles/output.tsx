import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  flex-direction: var(--FlexContainer__flex-direction_d617d);
  justify-content: var(--FlexContainer__justify-content_d617d);
  align-items: var(--FlexContainer__align-items_d617d);
  padding: 20px;
  background-color: #f0f0f0;
}
*/ /*#__PURE__*/ styled.div(__styleYak.FlexContainer, {
    "style": {
        "--FlexContainer__align-items_d617d": ({ $align })=>$align || 'stretch',
        "--FlexContainer__flex-direction_d617d": ({ $direction })=>$direction || 'row',
        "--FlexContainer__justify-content_d617d": ({ $justify })=>$justify || 'flex-start'
    }
});
