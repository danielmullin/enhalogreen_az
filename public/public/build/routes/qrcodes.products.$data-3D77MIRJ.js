import{a as v}from"/build/_shared/chunk-2ELPQVOV.js";import{a as h}from"/build/_shared/chunk-RZUQJXOQ.js";import{b as d,h as g,i as w}from"/build/_shared/chunk-6L2EXQIA.js";import{b as u}from"/build/_shared/chunk-GDLBX7ER.js";import{c}from"/build/_shared/chunk-Q3IECNXJ.js";var r=c(u()),D=s=>{let{allocation:a,opacity:m,units:n}=s,i=m;return(0,r.jsx)(r.Fragment,{children:a=="green"?(0,r.jsx)("div",{className:`bg-block-green w-3u h-3u m-2 opacity-${i}`}):a=="gold"?(0,r.jsxs)(d,{method:"post",children:[(0,r.jsx)("button",{type:"submit",className:`bg-block-gold w-${n}u h-${n}u m-2 opacity-${i} flex`}),(0,r.jsx)("input",{id:"blockDetailShow",name:"blockDetailShow",type:"hidden",value:"true"})]}):(0,r.jsx)("div",{className:`bg-block-grey w-${n}u h-${n}u m-2 opacity-${i}`})})},f=D;var e=c(u()),N=s=>{let{name:a,quantity:m,sequence:n,units:i}=s;return(0,e.jsx)(d,{children:(0,e.jsxs)("div",{className:"w-40 h-40 bg-white bg-opacity-70 absolute top-[calc(10vh+2.5rem)] left-[calc(50vw-5rem)] text-center p-4 flex justify-between flex-col sm:w-80",children:[(0,e.jsxs)("div",{className:"flex justify-between",children:[(0,e.jsx)("p",{children:a}),(0,e.jsxs)("p",{children:[n,"/",m]})]}),(0,e.jsxs)("div",{className:"flex justify-between",children:[(0,e.jsx)("p",{children:"Units"}),(0,e.jsx)("p",{children:i})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(h,{type:"submit",text:"Close"}),(0,e.jsx)("input",{id:"blockDetailShow",name:"blockDetailShow",type:"hidden",value:"false"})]})]})})},k=N;var t=c(u()),P=s=>{let{blockShow:a,error:m,name:n,quantity:i,sequence:p,units:l}=s,b=100;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex flex-wrap px-8",children:[Array.from({length:1e3/l},(B,y)=>y+1<p?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(f,{allocation:"green",opacity:b,units:l})}):y+1==p?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(f,{allocation:"gold",opacity:b,units:l})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(f,{allocation:"grey",opacity:b,units:l})})),a?(0,t.jsx)(k,{name:n,quantity:i,sequence:p,units:l}):null]})})},x=P;var o=c(u());function q(){let s=w(),{error:a,name:m,quantity:n,sequence:i,units:p}=g(),l=!1;return s!==void 0&&(l=s.blockDetail),(0,o.jsxs)(o.Fragment,{children:[a?(0,o.jsxs)("div",{className:"absolute top-[calc(50vh-5rem)] z-30 flex justify-center items-center bg-error-red h-40 w-full text-white",children:[(0,o.jsx)("span",{className:"w-10 h-10 bg-red-500 rounded-full flex items-center justify-center",children:(0,o.jsx)("span",{className:"text-white font-bold text-lg",children:"X"})}),(0,o.jsx)("span",{children:"Something went wrong"})]}):null,(0,o.jsx)("img",{src:v,className:(a?"grayscale":null)+" absolute h-[100vh] -z-20 top-0 object-cover sm:w-full"}),(0,o.jsx)("div",{className:(a?"grayscale":null)+" sm:max-w-screen-lg sm:mx-auto sm:h-full",children:(0,o.jsx)(x,{blockShow:l,error:a,name:m,quantity:n,sequence:i,total:1e3,units:p})})]})}export{q as default};
