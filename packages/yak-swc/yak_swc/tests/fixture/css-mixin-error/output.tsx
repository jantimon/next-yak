import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*YAK Extracted CSS:
.buttonStyles {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.buttonStyles__$active {
  background-color: #f0f0f0;
  max-width: var(--buttonStyles__max-width_o1wkyu);
}
.buttonStyles {
  width: var(--buttonStyles__width_o1wkyu);
}
.buttonStyles__ {
  color: red;
}
*/ /*#__PURE__*/ css(__styleYak.buttonStyles, ({ $active })=>$active && /*#__PURE__*/ css(__styleYak.buttonStyles__$active, {
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
export const Wrapper = /*#__PURE__*/ styled.button(buttonStyles);
