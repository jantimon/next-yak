var C=(...t)=>{let e=[],n=[],i={};for(let s of t)if(typeof s=="string")e.push(s);else if(typeof s=="function")n.push(s);else if(typeof s=="object"&&"style"in s)for(let r in s.style){let c=s.style[r];typeof c=="function"?n.push(o=>({style:{[r]:String(f(o,c))}})):i[r]=c}if(n.length===0){let s=e.join(" ");return()=>({className:s,style:i})}return s=>{let r=[...e],c={...i};for(let o=0;o<n.length;o++)x(s,n[o],r,c);return{className:r.join(" "),style:c}}},x=(t,e,n,i)=>{let s=e(t);for(;s;){if(typeof s=="function"){s=s(t);continue}else if(typeof s=="object"&&("className"in s&&s.className&&n.push(s.className),"style"in s&&s.style))for(let r in s.style)i[r]=s.style[r];break}},f=(t,e)=>{let n=e(t);if(typeof n=="function")return f(t,n);if(process.env.NODE_ENV==="development"&&typeof n!="string"&&typeof n!="number"&&!(n instanceof String))throw new Error(`Dynamic CSS functions must return a string or number but returned ${JSON.stringify(n)}`);return n},y=C;import A from"react";import{useTheme as I}from"next-yak/context";var h={},b=t=>Object.assign(A.forwardRef(t),{yak:t}),N=t=>Object.assign(g(t),{attrs:e=>g(t,e)}),g=(t,e)=>(n,...i)=>{let s=y(n,...i),r=o=>O(o,typeof e=="function"?e(o):e);return b((o,m)=>{let u=e||s.length?I():h,T=r({theme:u,...o}),l=s(T),{theme:k,...p}=T,S=typeof t!="string"&&"yak"in t,a=S?k===u?p:T:w(p);return a.className=P(a.className,l.className),a.style="style"in a?{...a.style,...l.style}:l.style,S?t.yak(a,m):(a.ref=m,A.createElement(t,{...a}))})},F=new Proxy(N,{get(t,e){return t(e)}});function w(t){let e={};for(let n in t)n.startsWith("$")||(e[n]=t[n]);return e}var P=(t,e)=>t?e?t+" "+e:t:e,d=t=>{let e={};for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e},O=(t,e)=>e?{..."$__attrs"in t?{...d(e),...t}:{...t,...d(e)},className:P(t.className,e.className),style:{...t.style||{},...e.style||{}},$__attrs:!0}:t;var R=(...t)=>{let e=t.join(" ");return()=>({className:e})};var j=(t,...e)=>t;import{useTheme as W,YakThemeProvider as V}from"next-yak/context";export{V as YakThemeProvider,R as atoms,y as css,j as keyframes,F as styled,W as useTheme};
//# sourceMappingURL=index.js.map