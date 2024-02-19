"use strict";var b=Object.create;var l=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty;var R=(t,e)=>{for(var s in e)l(t,s,{get:e[s],enumerable:!0})},g=(t,e,s,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of F(e))!O.call(t,n)&&n!==s&&l(t,n,{get:()=>e[n],enumerable:!(o=N(e,n))||o.enumerable});return t};var j=(t,e,s)=>(s=t!=null?b(w(t)):{},g(e||!t||!t.__esModule?l(s,"default",{value:t,enumerable:!0}):s,t)),v=t=>g(l({},"__esModule",{value:!0}),t);var X={};R(X,{YakThemeProvider:()=>u.YakThemeProvider,atoms:()=>I,css:()=>y,keyframes:()=>h,styled:()=>C,useTheme:()=>u.useTheme});module.exports=v(X);var E=(...t)=>{let e=[],s=[],o={};for(let n of t)if(typeof n=="string")e.push(n);else if(typeof n=="function")s.push(n);else if(typeof n=="object"&&"style"in n)for(let r in n.style){let T=n.style[r];typeof T=="function"?s.push(a=>({style:{[r]:String(d(a,T))}})):o[r]=T}if(s.length===0){let n=e.join(" ");return()=>({className:n,style:o})}return n=>{let r=[...e],T={...o};for(let a=0;a<s.length;a++)_(n,s[a],r,T);return{className:r.join(" "),style:T}}},_=(t,e,s,o)=>{let n=e(t);for(;n;){if(typeof n=="function"){n=n(t);continue}else if(typeof n=="object"&&("className"in n&&n.className&&s.push(n.className),"style"in n&&n.style))for(let r in n.style)o[r]=n.style[r];break}},d=(t,e)=>{let s=e(t);if(typeof s=="function")return d(t,s);if(process.env.NODE_ENV==="development"&&typeof s!="string"&&typeof s!="number"&&!(s instanceof String))throw new Error(`Dynamic CSS functions must return a string or number but returned ${JSON.stringify(s)}`);return s},y=E;var p=j(require("react"),1),k=require("next-yak/context"),B=t=>Object.assign(p.default.forwardRef(t),{component:t}),M=t=>Object.assign(A(t),{attrs:e=>A(t,e)}),A=(t,e)=>(s,...o)=>{let n=y(s,...o),r=a=>J(a,typeof e=="function"?e(a):e);return B((a,S)=>{let f=e||n.length?(0,k.useTheme)():void 0,i=r({theme:f,...a}),m=n(i);i.theme===f&&(i.theme=void 0);let c=typeof t=="string"?Y(i):i;return c.className=x(i.className,m.className),c.style="style"in i?{...i.style,...m.style}:m.style,typeof t!="string"&&"yak"in t?t.yak(c,S):(c.ref=S,p.default.createElement(t,{...c}))})},C=new Proxy(M,{get(t,e){return t(e)}});function Y(t){let e={};for(let s in t)s.startsWith("$")||(e[s]=t[s]);return e}var x=(t,e)=>t?e?t+" "+e:t:e,P=t=>{let e={};for(let s in t)t[s]!==void 0&&(e[s]=t[s]);return e},J=(t,e)=>e?{..."$__attrs"in t?{...P(e),...t}:{...t,...P(e)},className:x(t.className,e.className),style:{...t.style||{},...e.style||{}},$__attrs:!0}:t;var I=(...t)=>{let e=t.join(" ");return()=>({className:e})};var h=(t,...e)=>t;var u=require("next-yak/context");0&&(module.exports={YakThemeProvider,atoms,css,keyframes,styled,useTheme});
//# sourceMappingURL=index.cjs.map