import { styled } from "next-yak/internal";
import __styleYak from "./index.yak.module.css!=!./index?./index.yak.module.css";
import { lastChildMixin } from './mixin';
var ListItem = /*YAK Extracted CSS:
.ListItem {
  margin-bottom: 10px;
  &:hover {
    --yak-css-import: url("./mixin:lastChildMixin",mixin);
  }
}
*/ /*#__PURE__*/ styled.li(__styleYak.ListItem);
export default ListItem;