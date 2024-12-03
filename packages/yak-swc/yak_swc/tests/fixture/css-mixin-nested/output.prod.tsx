import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*#__PURE__*/ css(({ $active })=>$active && /*#__PURE__*/ css("ym7uBBu1", {
        "style": {
            "--ym7uBBu2": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), {
    "style": {
        "--ym7uBBu3": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
export const ThemedButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBu4) {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
// cssmodules-pure-ignore
:global(.ym7uBBu5) {
  @media (max-width: 600px) {
    background-color: #f0f0f0;
    max-width: var(--ym7uBBu6);
  }
}
// cssmodules-pure-ignore
:global(.ym7uBBu4) {
  width: var(--ym7uBBu7);
}
*/ /*#__PURE__*/ styled.button("ym7uBBu4", ({ $active })=>$active && /*#__PURE__*/ css("ym7uBBu5", {
        "style": {
            "--ym7uBBu6": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), {
    "style": {
        "--ym7uBBu7": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
export const CustomThemedButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBu8) {
  color: red;
  &:not([disabled]) {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
// cssmodules-pure-ignore
:global(.ym7uBBu9) {
  &:not([disabled]) {
    @media (max-width: 600px) {
      background-color: #f0f0f0;
      max-width: var(--ym7uBBuA);
    }
  }
}
// cssmodules-pure-ignore
:global(.ym7uBBu8) {
  &:not([disabled]) {
    width: var(--ym7uBBuB);
  }
}
*/ /*#__PURE__*/ styled.button("ym7uBBu8", ({ $active })=>$active && /*#__PURE__*/ css("ym7uBBu9", {
        "style": {
            "--ym7uBBuA": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), {
    "style": {
        "--ym7uBBuB": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
