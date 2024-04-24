import{r as n,_ as t,j as s,u as e}from"./index-GkqzFEuw.js";const r=n.lazy((()=>t((()=>import("./Playground-Dp7WwkjT-55phbQd0.js").then((n=>n.P))),__vite__mapDeps([0,1])))),a=()=>{const t=o();return t?s.jsx(n.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:t&&s.jsx(r,{})}):null},o=()=>{const[t,s]=n.useState(!1);return n.useEffect((()=>(s(!0),()=>{s(!1)})),[]),t},i={layout:"landing",content:{horizontalPadding:"0px",width:"100%",verticalPadding:"0px"}};function d(n){return s.jsx(a,{})}function c(n={}){const{wrapper:t}={...e(),...n.components};return t?s.jsx(t,{...n,children:s.jsx(d,{...n})}):d()}export{c as default,i as frontmatter};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Playground-Dp7WwkjT-55phbQd0.js","assets/index-GkqzFEuw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
