import{a as u}from"/build/_shared/chunk-RZUQJXOQ.js";import{h as v,j as h}from"/build/_shared/chunk-6L2EXQIA.js";import{b as l}from"/build/_shared/chunk-GDLBX7ER.js";import{b as y,c as m}from"/build/_shared/chunk-Q3IECNXJ.js";var N=y((L,A)=>{A.exports={cta:{next:"Next"},h1:"Offset Your Products",p:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}});function c(s){return!!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)}function f(s){return!!(Number.isInteger(s)&&s>0)}var t=m(l());function p(s){let e=h(),{contact:a,content:o,offsetProducts:w,subProject:b}=s,x={emailAddress:!1,numberOfProucts:!1,productUuid:!1},n="",d=0,P="";return e.formData&&(n=String(e.formData.get("emailAddress")),d=Number(e.formData.get("numberOfProducts")),P=String(e.formData.get("offSetProductUuid")),x.emailAddress=c(n),x.numberOfProucts=f(d)),console.log(b),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(e.Form,{action:"/offset-products-transaction",className:"w-full flex flex-wrap sm:max-w-screen-lg sm:mx-auto sm:items-end",method:"post",children:[(0,t.jsx)("input",{name:"accountUuid",type:"hidden",defaultValue:a.uuid}),(0,t.jsx)("input",{name:"accountUuid",type:"hidden",defaultValue:a.emailAddress}),(0,t.jsx)("div",{className:"flex sm:w-5/12",children:(0,t.jsx)("div",{className:"w-full",children:(0,t.jsxs)("div",{className:"mb-8 pl-1 sm:mb-0 sm:mr-4",children:[(0,t.jsx)("label",{className:"{ errors.emailAddress ? 'text-red' }",children:"Email Address"}),(0,t.jsx)("input",{className:"inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none",defaultValue:n,id:"labelValue",name:"emailAddress",type:"text"})]})})}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)("p",{className:"text-2xl leading-tight font-light mb-4 sm:w-1/2 sm:mr-2",children:o.p[1]})})}),(0,t.jsxs)("div",{className:"flex mb-8 sm:w-5/12 sm:mb-0",children:[(0,t.jsx)("div",{className:"w-8/12 mr-2 sm:mr-0",children:(0,t.jsxs)("div",{className:"pl-1 sm:mr-4",children:[(0,t.jsx)("label",{children:"Offset Product"}),(0,t.jsx)("select",{className:"inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none",defaultValue:P,id:"productUuid",name:"productUuid",placeholder:"Product",children:w.map(i=>{let O=b.tonCost.value/1e3*i.units;return(0,t.jsx)("option",{value:i.uuid,children:`${i.name} (GBP ${O.toFixed(2)})`},i.uuid)})})]})}),(0,t.jsx)("div",{className:"w-4/12 ml-2 sm:ml-0",children:(0,t.jsxs)("div",{className:"pl-1 sm:mr-4",children:[(0,t.jsx)("label",{children:"Quantity"}),(0,t.jsx)("input",{className:(e.state==="submitting","inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none"),defaultValue:d,id:"labelValue",name:"numberOfProducts",type:"text"})]})})]}),(0,t.jsx)("div",{className:"w-full text-center sm:hidden",children:(0,t.jsx)(u,{text:o.cta.next,type:"submit"})}),(0,t.jsx)("div",{className:"hidden sm:flex sm:w-2/12 sm:h-14",children:(0,t.jsx)(u,{text:o.cta.next,type:"submit"})})]})})}var r=m(l());function g(){let{contact:s,offsetProducts:e,subProject:a}=v(),o=N();return(0,r.jsxs)("div",{className:"px-8 sm:max-w-screen-lg sm:mx-auto",children:[(0,r.jsx)("h1",{className:"mb-8 text-3xl leading-none ",children:o.h1}),(0,r.jsx)("section",{className:"mb-4",children:(0,r.jsx)("p",{className:"text-2xl leading-tight font-light mb-4 sm:w-1/2 sm:mr-2",children:o.p[0]})}),(0,r.jsx)(p,{contact:s,content:o,subProject:a,offsetProducts:e})]})}export{g as default};
