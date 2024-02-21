"use strict";var w=Object.create;var T=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var E=(t,e)=>{for(var s in e)T(t,s,{get:e[s],enumerable:!0})},A=(t,e,s,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of R(e))!v.call(t,n)&&n!==s&&T(t,n,{get:()=>e[n],enumerable:!(o=O(e,n))||o.enumerable});return t};var _=(t,e,s)=>(s=t!=null?w(j(t)):{},A(e||!t||!t.__esModule?T(s,"default",{value:t,enumerable:!0}):s,t)),Y=t=>A(T({},"__esModule",{value:!0}),t);var L={};E(L,{YakThemeProvider:()=>y.YakThemeProvider,atoms:()=>b,css:()=>l,keyframes:()=>N,styled:()=>I,useTheme:()=>y.useTheme});module.exports=Y(L);var B=(...t)=>{let e=[],s=[],o={};for(let n of t)if(typeof n=="string")e.push(n);else if(typeof n=="function")s.push(n);else if(typeof n=="object"&&"style"in n)for(let r in n.style){let c=n.style[r];typeof c=="function"?s.push(a=>({style:{[r]:String(P(a,c))}})):o[r]=c}if(s.length===0){let n=e.join(" ");return()=>({className:n,style:o})}return n=>{let r=[...e],c={...o};for(let a=0;a<s.length;a++)M(n,s[a],r,c);return{className:r.join(" "),style:c}}},M=(t,e,s,o)=>{let n=e(t);for(;n;){if(typeof n=="function"){n=n(t);continue}else if(typeof n=="object"&&("className"in n&&n.className&&s.push(n.className),"style"in n&&n.style))for(let r in n.style)o[r]=n.style[r];break}},P=(t,e)=>{let s=e(t);if(typeof s=="function")return P(t,s);if(process.env.NODE_ENV==="development"&&typeof s!="string"&&typeof s!="number"&&!(s instanceof String))throw new Error(`Dynamic CSS functions must return a string or number but returned ${JSON.stringify(s)}`);return s},l=B;var p=_(require("react"),1),x=require("next-yak/context"),J={},X=t=>Object.assign(p.default.forwardRef(t),{component:t}),H=t=>Object.assign(k(t),{attrs:e=>k(t,e)}),k=(t,e)=>(s,...o)=>{let n=l(s,...o),r=a=>$(a,typeof e=="function"?e(a):e);return X((a,S)=>{let f=e||n.length?(0,x.useTheme)():J,m=r({theme:f,...a}),u=n(m),{theme:F,...g}=m,d=typeof t!="string"&&"yak"in t,i=d?F===f?g:m:K(g);return i.className=h(i.className,u.className),i.style="style"in i?{...i.style,...u.style}:u.style,d?t.yak(i,S):(i.ref=S,p.default.createElement(t,{...i}))})},I=new Proxy(H,{get(t,e){return t(e)}});function K(t){let e={};for(let s in t)s.startsWith("$")||(e[s]=t[s]);return e}var h=(t,e)=>t?e?t+" "+e:t:e,C=t=>{let e={};for(let s in t)t[s]!==void 0&&(e[s]=t[s]);return e},$=(t,e)=>e?{..."$__attrs"in t?{...C(e),...t}:{...t,...C(e)},className:h(t.className,e.className),style:{...t.style||{},...e.style||{}},$__attrs:!0}:t;var b=(...t)=>{let e=t.join(" ");return()=>({className:e})};var N=(t,...e)=>t;var y=require("next-yak/context");0&&(module.exports={YakThemeProvider,atoms,css,keyframes,styled,useTheme});
//# sourceMappingURL=index.cjs.map