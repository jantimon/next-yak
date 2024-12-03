import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*#__PURE__*/ css(({ $active })=>$active && /*#__PURE__*/ css("buttonStyles__$active_m7uBBu", {
        "style": {
            "--buttonStyles__max-width_m7uBBu": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), {
    "style": {
        "--buttonStyles__width_m7uBBu": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
export const ThemedButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ThemedButton_m7uBBu) {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
// cssmodules-pure-ignore
:global(.ThemedButton__$active_m7uBBu) {
  @media (max-width: 600px) {
    background-color: #f0f0f0;
    max-width: var(--ThemedButton__max-width_m7uBBu);
  }
}
// cssmodules-pure-ignore
:global(.ThemedButton_m7uBBu) {
  width: var(--ThemedButton__width_m7uBBu);
}
*/ /*#__PURE__*/ styled.button("ThemedButton_m7uBBu", ({ $active })=>$active && /*#__PURE__*/ css("ThemedButton__$active_m7uBBu", {
        "style": {
            "--ThemedButton__max-width_m7uBBu": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), {
    "style": {
        "--ThemedButton__width_m7uBBu": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
export const CustomThemedButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.CustomThemedButton_m7uBBu) {
  color: red;
  &:not([disabled]) {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
// cssmodules-pure-ignore
:global(.CustomThemedButton__$active_m7uBBu) {
  &:not([disabled]) {
    @media (max-width: 600px) {
      background-color: #f0f0f0;
      max-width: var(--CustomThemedButton__max-width_m7uBBu);
    }
  }
}
// cssmodules-pure-ignore
:global(.CustomThemedButton_m7uBBu) {
  &:not([disabled]) {
    width: var(--CustomThemedButton__width_m7uBBu);
  }
}
*/ /*#__PURE__*/ styled.button("CustomThemedButton_m7uBBu", ({ $active })=>$active && /*#__PURE__*/ css("CustomThemedButton__$active_m7uBBu", {
        "style": {
            "--CustomThemedButton__max-width_m7uBBu": __yak_unitPostFix(({ $letters })=>$letters * 15, "px")
        }
    }), {
    "style": {
        "--CustomThemedButton__width_m7uBBu": __yak_unitPostFix(({ $letters })=>$letters * 10, "px")
    }
});
