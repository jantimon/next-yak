import { styled } from "next-yak/internal";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  flex-direction: ;
  justify-content: ;
  align-items: ;
  padding: 20px;
  background-color: #f0f0f0;
}
*/ /*#__PURE__*/ styled.div("FlexContainer", ({ $direction })=>$direction || 'row', ({ $justify })=>$justify || 'flex-start', ({ $align })=>$align || 'stretch');
