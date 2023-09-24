import{a as d}from"/build/_shared/chunk-RZUQJXOQ.js";import{h as p,j as b}from"/build/_shared/chunk-6L2EXQIA.js";import{b as a}from"/build/_shared/chunk-GDLBX7ER.js";import{b as v,c as o}from"/build/_shared/chunk-Q3IECNXJ.js";var x=v((j,h)=>{h.exports={h1:"Account"}});var e=o(a());function f(r){let{account:n}=r,t=b(),m=n.contact.emailAddress,s=n.contact.firstName,u=n.contact.lastName,c=n.contact.phoneNumber,i=!0;return t.formData&&(m=String(t.formData.get("emailAddress")),s=String(t.formData.get("firstName")),u=String(t.formData.get("lastName")),c=String(t.formData.get("phoneNumber")),i=Boolean(t.formData.get("edit")=="true"?"false":"true")),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(t.Form,{action:"/account-update",className:"w-full flex flex-wrap sm:mx-auto sm:items-end text-light-black ",method:"post",onSubmit:N=>{i==!0&&t.submit(N.currentTarget,{replace:!0})},children:[(0,e.jsx)("input",{name:"accountUuid",type:"hidden",defaultValue:n.uuid}),(0,e.jsxs)("div",{className:"mb-8 w-full",children:[(0,e.jsx)("label",{children:"Email Address"}),i?(0,e.jsx)("input",{className:t.state==="submitting"?"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black",name:"emailAddress",type:"text",defaultValue:m}):(0,e.jsx)("div",{className:"pt-4 pl-2 mb-2",children:m})]}),(0,e.jsxs)("div",{className:"w-47.5 mr-[5%] mb-8",children:[(0,e.jsx)("label",{children:"First name"}),i?(0,e.jsx)("input",{className:(t.state==="submitting","bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none"),name:"firstName",type:"text",defaultValue:s}):(0,e.jsx)("div",{className:"pt-4 pl-2 mb-2",children:s})]}),(0,e.jsxs)("div",{className:"w-47.5 mb-8",children:[(0,e.jsx)("label",{children:"Last name"}),i?(0,e.jsx)("input",{className:(t.state==="submitting","bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none"),name:"lastName",type:"text",defaultValue:u}):(0,e.jsx)("div",{className:"pt-4 pl-2 mb-2",children:u})]}),(0,e.jsxs)("div",{className:"mb-8 w-full",children:[(0,e.jsx)("label",{children:"Phone number"}),i?(0,e.jsx)("input",{className:(t.state==="submitting","bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none"),name:"phoneNumber",type:"text",defaultValue:c}):(0,e.jsx)("div",{className:"pt-4 pl-2 mb-2",children:c})]}),(0,e.jsx)("div",{className:"w-full"}),(0,e.jsx)("div",{className:"w-full flex justify-center sm:h-14",children:i?(0,e.jsxs)("div",{className:"w-1/2",children:[(0,e.jsx)(d,{text:"Submit",type:"submit"}),(0,e.jsx)("input",{name:"edit",title:"edit",type:"hidden",value:"false"})]}):(0,e.jsx)("div",{className:"w-1/2",children:(0,e.jsx)(d,{text:"Edit",type:"submit"})})})]})})}var l=o(a());function g(){let{account:r}=p(),n=x();return(0,l.jsxs)("div",{className:"px-8 sm:max-w-screen-sm sm:mx-auto",children:[(0,l.jsx)("h1",{className:"mb-8 text-3xl leading-none ",children:n.h1}),(0,l.jsx)("div",{children:(0,l.jsx)(f,{account:r})})]})}export{g as default};
