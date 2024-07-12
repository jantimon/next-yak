import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FlexContainer = /*YAK Extracted CSS:
.FlexContainer {
  display: flex;
  flex-direction: var(--FlexContainer\#0-flex-direction_d617d);
  justify-content: var(--FlexContainer\#0-justify-content_d617d);
  align-items: var(--FlexContainer\#0-align-items_d617d);
  padding: 20px;
  background-color: #f0f0f0;
}
*/ /*#__PURE__*/ styled.div(__styleYak["FlexContainer"], {
    "style": {
        "--FlexContainer\\#0-align-items_d617d": ({ $align })=>$align || 'stretch',
        "--FlexContainer\\#0-flex-direction_d617d": ({ $direction })=>$direction || 'row',
        "--FlexContainer\\#0-justify-content_d617d": ({ $justify })=>$justify || 'flex-start'
    }
});
