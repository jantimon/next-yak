var T=(...n)=>{let o=[],e=[],p={};for(let t=0;t<n.length;t++){let s=n[t];if(typeof s=="string")o.push(s);else if(typeof s=="function")e.push(s);else if(typeof s=="object"&&"style"in s)for(let a in s.style){let i=s.style[a];typeof i=="function"?e.push(r=>({style:{[a]:String(c(r,i))}})):p[a]=i}}if(e.length===0){let t=o.join(" ");return()=>({className:t,style:p})}let l=(t,s,a,i)=>{let r=s(t);if(typeof r=="function")l(t,r,a,i);else if(typeof r=="object"&&r&&("className"in r&&r.className&&a.push(r.className),"style"in r&&r.style))for(let y in r.style){let f=r.style[y];i[y]=f}};return t=>{let s=[...o],a={...p};for(let i=0;i<e.length;i++)l(t,e[i],s,a);return{className:s.join(" "),style:a}}},c=(n,o)=>{let e=o(n);if(typeof e=="function")return c(n,e);if(process.env.NODE_ENV==="development"&&typeof e!="string"&&typeof e!="number"&&!(e instanceof String))throw new Error(`Dynamic CSS functions must return a string or number but returned ${JSON.stringify(e)}`);return e},m=T;import u from"react";import{useTheme as g}from"next-yak/context";var d=n=>Object.assign(u.forwardRef(n),{component:n}),S=n=>(e,...p)=>d((t,s)=>{let a={...t,theme:g()},i=m(e,...p)(a),y={...typeof n=="string"?C(t):t,style:{...t.style||{},...i.style},className:(t.className?t.className+" ":"")+i.className};return typeof n!="string"&&"yak"in n?n.yak(y,s):u.createElement(n,{ref:s,...y})}),P=new Proxy(S,{get(n,o){return n(o)}});function C(n){let o={};for(let e in n)e.startsWith("$")||(o[e]=n[e]);return o}var k=(...n)=>{let o=n.join(" ");return()=>({className:o})};var x=(n,...o)=>n;import{useTheme as H,YakThemeProvider as X}from"next-yak/context";export{X as YakThemeProvider,k as atoms,m as css,x as keyframes,P as styled,H as useTheme};
//# sourceMappingURL=index.js.map