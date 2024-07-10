import{r as n,_ as t,j as s,u as e}from"./index-B2fKK7ki.js";const r=n.lazy((()=>t((()=>import("./Playground-CoxMWDYH-VyeoIKai.js").then((n=>n.P))),__vite__mapDeps([0,1])))),a=()=>{const t=o();return t?s.jsx(n.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:t&&s.jsx(r,{})}):null},o=()=>{const[t,s]=n.useState(!1);return n.useEffect((()=>(s(!0),()=>{s(!1)})),[]),t},i={layout:"landing",content:{horizontalPadding:"0px",width:"100%",verticalPadding:"0px"}};function c(n){return s.jsx(a,{})}function d(n={}){const{wrapper:t}={...e(),...n.components};return t?s.jsx(t,{...n,children:s.jsx(c,{...n})}):c()}export{d as default,i as frontmatter};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Playground-CoxMWDYH-VyeoIKai.js","assets/index-B2fKK7ki.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
