import{h as K}from"/build/_shared/chunk-6L2EXQIA.js";import{b as g}from"/build/_shared/chunk-GDLBX7ER.js";import{c as t}from"/build/_shared/chunk-Q3IECNXJ.js";var L="/build/_assets/qrcode-2AYDRDBO.svg";var H="/build/_assets/qrcodes-6OC7ZRE7.svg";var A=t(g());function C(){let{transaction:e,transactionProducts:d}=K();return(0,A.jsxs)("div",{className:"px-8 sm:max-w-screen-lg sm:mx-auto",children:[(0,A.jsxs)("h1",{className:"text-3xl leading-none",children:[e.project.name," ",e.quantity," ",e.product.name]}),(0,A.jsxs)("div",{className:"pt-2 flex justify-between",children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{children:e.project.name}),(0,A.jsxs)("p",{children:[e.product.name," ",e.quantity]})]}),(0,A.jsx)("div",{children:(0,A.jsx)("a",{href:`/qrcodes?productName=${e.productId.name}&productUuid=${e.productId.id}&quantity=${e.quantity}&transactionUuid=${e.transactionId}&units=${e.product.units}`,download:`/qrcodes?productName=${e.productId.name}&productUuid=${e.productId.productUuid}&quantity=${e.quantity}&transactionUuid=${e.uuid}&units=${e.product.units}`,children:(0,A.jsx)("img",{src:H,className:"mb-2"})})})]}),(0,A.jsx)("section",{children:d.map(i=>(0,A.jsxs)("div",{className:"flex justify-between items-center sm:text-2xl",children:[(0,A.jsx)("div",{children:i.name}),(0,A.jsxs)("div",{children:[i.sequence," of ",e.quantity]}),(0,A.jsx)("div",{children:(0,A.jsx)("a",{href:`/qrcode?sequence=${i.sequence}&transactionUuid=${i.transactionUuid}&units=${i.units}&productUuid=${i.productUuid}`,download:`/qrcode?sequence=${i.sequence}&transactionUuid=${i.transactionUuid}&units=${i.units}&uuid=${i.productUuid}`,children:(0,A.jsx)("img",{src:L,className:"mb-2"})})})]}))})]})}export{C as default};