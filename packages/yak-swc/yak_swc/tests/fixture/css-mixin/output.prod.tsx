import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*#__PURE__*/ css(({ $active })=>$active && /*#__PURE__*/ css("ym7uBBu1", {
        "style": {
            "--ym7uBBu2": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), function({ $letters }) {
    return $letters > 5 && /*#__PURE__*/ css("ym7uBBu4");
}, {
    "style": {
        "--ym7uBBu3": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
export const ThemedButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBu5) {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
// cssmodules-pure-ignore
:global(.ym7uBBu6) {
  background-color: #f0f0f0;
  max-width: var(--ym7uBBu7);
}
// cssmodules-pure-ignore
:global(.ym7uBBu5) {
  width: var(--ym7uBBu8);
}
// cssmodules-pure-ignore
:global(.ym7uBBu9) {
  color: red;
}
*/ /*#__PURE__*/ styled.button("ym7uBBu5", ({ $active })=>$active && /*#__PURE__*/ css("ym7uBBu6", {
        "style": {
            "--ym7uBBu7": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), function({ $letters }) {
    return $letters > 5 && /*#__PURE__*/ css("ym7uBBu9");
}, {
    "style": {
        "--ym7uBBu8": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
export const CustomThemedButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBuA) {
  color: red;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
// cssmodules-pure-ignore
:global(.ym7uBBuB) {
  background-color: #f0f0f0;
  max-width: var(--ym7uBBuC);
}
// cssmodules-pure-ignore
:global(.ym7uBBuA) {
  width: var(--ym7uBBuD);
}
// cssmodules-pure-ignore
:global(.ym7uBBuE) {
  color: red;
}
*/ /*#__PURE__*/ styled.button("ym7uBBuA", ({ $active })=>$active && /*#__PURE__*/ css("ym7uBBuB", {
        "style": {
            "--ym7uBBuC": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), function({ $letters }) {
    return $letters > 5 && /*#__PURE__*/ css("ym7uBBuE");
}, {
    "style": {
        "--ym7uBBuD": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
