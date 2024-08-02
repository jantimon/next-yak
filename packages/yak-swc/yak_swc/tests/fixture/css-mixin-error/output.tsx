import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*#__PURE__*/ css(__styleYak.buttonStyles, ({ $active })=>$active && /*#__PURE__*/ css(__styleYak.buttonStyles__$active, {
        "style": {
            "--buttonStyles__max-width_o1wkyu": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), function({ $letters }) {
    return $letters > 5 && /*#__PURE__*/ css(__styleYak.buttonStyles__);
}, {
    "style": {
        "--buttonStyles__width_o1wkyu": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
export const Wrapper = /*YAK Extracted CSS:
.Wrapper {
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f0f0f0;
    max-width: var(--Wrapper__max-width_o1wkyu);
    width: var(--Wrapper__width_o1wkyu);
    color: red;
  }
}
*/ /*#__PURE__*/ styled.button(__styleYak.Wrapper);
