import { styled, css, __yak_unitPostFix } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
// example taken from https://github.com/jantimon/next-yak/issues/208 
const spacing = "20px";
const ContainerFluid = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ContainerFluid_m7uBBu) {
  position: relative;
  margin: 0 auto;
  padding-top: 20px;
  max-width: 100%;
}
// cssmodules-pure-ignore
:global(.ContainerFluid__$isApp_m7uBBu) {
  margin-top: unset;
}
// cssmodules-pure-ignore
:global(.ContainerFluid__not_$isApp_m7uBBu) {
  margin-top: px;
}
// cssmodules-pure-ignore
:global(.ContainerFluid_m7uBBu) {
  margin-top: var(--ContainerFluid__margin-top_m7uBBu);
}
*/ /*#__PURE__*/ styled.div("ContainerFluid_m7uBBu", ({ $isApp, $pageHeaderHeight })=>$isApp ? /*#__PURE__*/ css("ContainerFluid__$isApp_m7uBBu") : /*#__PURE__*/ css("ContainerFluid__not_$isApp_m7uBBu"), {
    "style": {
        "--ContainerFluid__margin-top_m7uBBu": __yak_unitPostFix(({ $pageHeaderHeight })=>$pageHeaderHeight, "px")
    }
});
