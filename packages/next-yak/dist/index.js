var A=(...t)=>{let e=[],n=[],i={};for(let s of t)if(typeof s=="string")e.push(s);else if(typeof s=="function")n.push(s);else if(typeof s=="object"&&"style"in s)for(let r in s.style){let c=s.style[r];typeof c=="function"?n.push(o=>({style:{[r]:String(p(o,c))}})):i[r]=c}if(n.length===0){let s=e.join(" ");return()=>({className:s,style:i})}return s=>{let r=[...e],c={...i};for(let o=0;o<n.length;o++)P(s,n[o],r,c);return{className:r.join(" "),style:c}}},P=(t,e,n,i)=>{let s=e(t);for(;s;){if(typeof s=="function"){s=s(t);continue}else if(typeof s=="object"&&("className"in s&&s.className&&n.push(s.className),"style"in s&&s.style))for(let r in s.style)i[r]=s.style[r];break}},p=(t,e)=>{let n=e(t);if(typeof n=="function")return p(t,n);if(process.env.NODE_ENV==="development"&&typeof n!="string"&&typeof n!="number"&&!(n instanceof String))throw new Error(`Dynamic CSS functions must return a string or number but returned ${JSON.stringify(n)}`);return n},y=A;import g from"react";import{useTheme as k}from"next-yak/context";var C=t=>Object.assign(g.forwardRef(t),{component:t}),x=t=>Object.assign(S(t),{attrs:e=>S(t,e)}),S=(t,e)=>(n,...i)=>{let s=y(n,...i),r=o=>b(o,typeof e=="function"?e(o):e);return C((o,u)=>{let m=e||s.length?k():{},a=r(Object.assign({theme:m},o)),l=s(a);a.theme===m&&delete a.theme;let T=typeof t=="string"?h(a):a;return T.className=d(a.className,l.className),T.style="style"in a?{...a.style,...l.style}:l.style,typeof t!="string"&&"yak"in t?t.yak(T,u):(T.ref=u,g.createElement(t,{...T}))})},I=new Proxy(x,{get(t,e){return t(e)}});function h(t){let e={};for(let n in t)n.startsWith("$")||(e[n]=t[n]);return e}var d=(t,e)=>t?e?t+" "+e:t:e,f=t=>{let e={};for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e},b=(t,e)=>e?{..."$__attrs"in t?{...f(e),...t}:{...t,...f(e)},className:d(t.className,e.className),style:{...t.style||{},...e.style||{}},$__attrs:!0}:t;var N=(...t)=>{let e=t.join(" ");return()=>({className:e})};var F=(t,...e)=>t;import{useTheme as $,YakThemeProvider as L}from"next-yak/context";export{L as YakThemeProvider,N as atoms,y as css,F as keyframes,I as styled,$ as useTheme};
//# sourceMappingURL=index.js.map