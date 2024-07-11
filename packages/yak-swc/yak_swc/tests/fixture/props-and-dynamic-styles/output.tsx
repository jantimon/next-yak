import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
import { styled } from "next-yak/internal";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  flex-direction: var(--flex-direction-d617d);
  justify-content: var(--justify-content-d617d);
  align-items: var(--align-items-d617d);
  padding: 20px;
  background-color: #f0f0f0;
}
*/ /*#__PURE__*/ styled.div(__styleYak["FlexContainer"], {
    "align-items-d617d": ({ $align })=>$align || 'stretch',
    "flex-direction-d617d": ({ $direction })=>$direction || 'row',
    "justify-content-d617d": ({ $justify })=>$justify || 'flex-start'
});
