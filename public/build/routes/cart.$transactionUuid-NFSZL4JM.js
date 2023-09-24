import{a as L}from"/build/_shared/chunk-LDPKBUL2.js";import{h as F}from"/build/_shared/chunk-6L2EXQIA.js";import{a as se,b as B}from"/build/_shared/chunk-GDLBX7ER.js";import{b as ie,c as D}from"/build/_shared/chunk-Q3IECNXJ.js";var $=ie((Oe,be)=>{be.exports={h1:"Order details",p:[""]}});var i=D(se());var f;(function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"})(f||(f={}));var b;(function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"})(b||(b={}));var K;(function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"})(K||(K={}));var l=function(){return l=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},l.apply(this,arguments)};function w(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function x(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var T="data-react-paypal-script-id",y={DATA_CLIENT_TOKEN:"dataClientToken",DATA_USER_ID_TOKEN:"dataUserIdToken",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource",DATA_SDK_INTEGRATION_SOURCE_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace"},ce="Failed to load the PayPal JS SDK script.";var G="3.84.0",Se="https://js.braintreegateway.com/web/".concat(G,"/js/client.min.js"),Te="https://js.braintreegateway.com/web/".concat(G,"/js/paypal-checkout.min.js"),q="paypal";var de="usePayPalScriptReducer must be used within a PayPalScriptProvider";function k(e){return e===void 0&&(e=q),window[e]}function le(e){for(var t="",r=0;r<e.length;r++){var n=e[r].charCodeAt(0)*r;e[r+1]&&(n+=e[r+1].charCodeAt(0)*(r-1)),t+=String.fromCharCode(97+Math.abs(n)%26)}return t}function U(e){var t=e.reactComponentName,r=e.sdkComponentKey,n=e.sdkRequestedComponents,a=n===void 0?"":n,o=e.sdkDataNamespace,s=o===void 0?q:o,d=r.charAt(0).toUpperCase().concat(r.substring(1)),u="Unable to render <".concat(t," /> because window.").concat(s,".").concat(d," is undefined.");if(!a.includes(r)){var p=[a,r].filter(Boolean).join();u+=`
To fix the issue, add '`.concat(r,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(p,"'}}>`.")}return u}function V(e){var t=e,r=T;t[r];var n=w(t,[r+""]);return"react-paypal-js-".concat(le(JSON.stringify(n)))}function ue(e){var t=self.document.querySelector("script[".concat(T,'="').concat(e,'"]'));t?.parentNode&&t.parentNode.removeChild(t)}function pe(e,t){var r,n;switch(t.type){case b.LOADING_STATUS:return typeof t.value=="object"?l(l({},e),{loadingStatus:t.value.state,loadingStatusErrorMessage:t.value.message}):l(l({},e),{loadingStatus:t.value});case b.RESET_OPTIONS:return ue(e.options[T]),l(l({},e),{loadingStatus:f.PENDING,options:l(l((r={},r[y.DATA_SDK_INTEGRATION_SOURCE]=y.DATA_SDK_INTEGRATION_SOURCE_VALUE,r),t.value),(n={},n[T]="".concat(V(t.value)),n))});case b.SET_BRAINTREE_INSTANCE:return l(l({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var W=(0,i.createContext)(null);function fe(e){if(typeof e?.dispatch=="function"&&e.dispatch.length!==0)return e;throw new Error(de)}function I(){var e=fe((0,i.useContext)(W)),t=l(l({},e),{isInitial:e.loadingStatus===f.INITIAL,isPending:e.loadingStatus===f.PENDING,isResolved:e.loadingStatus===f.RESOLVED,isRejected:e.loadingStatus===f.REJECTED});return[t,e.dispatch]}var Ie=(0,i.createContext)({});var O=function(e){var t=e.className,r=t===void 0?"":t,n=e.disabled,a=n===void 0?!1:n,o=e.children,s=e.forceReRender,d=s===void 0?[]:s,u=w(e,["className","disabled","children","forceReRender"]),p=a?{opacity:.38}:{},E="".concat(r," ").concat(a?"paypal-buttons-disabled":"").trim(),v=(0,i.useRef)(null),m=(0,i.useRef)(null),N=I()[0],R=N.isResolved,h=N.options,A=(0,i.useState)(null),g=A[0],te=A[1],j=(0,i.useState)(!0),re=j[0],ne=j[1],ae=(0,i.useState)(null),C=ae[1];function P(){m.current!==null&&m.current.close().catch(function(){})}return(0,i.useEffect)(function(){if(R===!1)return P;var _=k(h.dataNamespace);if(_===void 0||_.Buttons===void 0)return C(function(){throw new Error(U({reactComponentName:O.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:h.components,sdkDataNamespace:h[y.DATA_NAMESPACE]}))}),P;var oe=function(S,M){te(M),typeof u.onInit=="function"&&u.onInit(S,M)};try{m.current=_.Buttons(l(l({},u),{onInit:oe}))}catch(S){return C(function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(S))})}return m.current.isEligible()===!1?(ne(!1),P):(v.current&&m.current.render(v.current).catch(function(S){v.current===null||v.current.children.length===0||C(function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(S))})}),P)},x(x([R],d,!0),[u.fundingSource],!1)),(0,i.useEffect)(function(){g!==null&&(a===!0?g.disable().catch(function(){}):g.enable().catch(function(){}))},[a,g]),i.default.createElement(i.default.Fragment,null,re?i.default.createElement("div",{ref:v,style:p,className:E}):o)};O.displayName="PayPalButtons";function ve(e,t){var r=document.querySelector('script[src="'.concat(e,'"]'));if(r===null)return null;var n=z(e,t),a=r.cloneNode();if(delete a.dataset.uidAuto,Object.keys(a.dataset).length!==Object.keys(n.dataset).length)return null;var o=!0;return Object.keys(a.dataset).forEach(function(s){a.dataset[s]!==n.dataset[s]&&(o=!1)}),o?r:null}function me(e){var t=e.url,r=e.attributes,n=e.onSuccess,a=e.onError,o=z(t,r);o.onerror=a,o.onload=n,document.head.insertBefore(o,document.head.firstElementChild)}function Ee(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseUrl&&(t=e.sdkBaseUrl,delete e.sdkBaseUrl);var r=e,n=Object.keys(r).filter(function(s){return typeof r[s]<"u"&&r[s]!==null&&r[s]!==""}).reduce(function(s,d){var u=r[d].toString();return d=he(d),d.substring(0,4)==="data"?s.dataAttributes[d]=u:s.queryParams[d]=u,s},{queryParams:{},dataAttributes:{}}),a=n.queryParams,o=n.dataAttributes;return a["merchant-id"]&&a["merchant-id"].indexOf(",")!==-1&&(o["data-merchant-id"]=a["merchant-id"],a["merchant-id"]="*"),{url:"".concat(t,"?").concat(Ae(a)),dataAttributes:o}}function he(e){var t=function(r,n){return(n?"-":"")+r.toLowerCase()};return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,t)}function Ae(e){var t="";return Object.keys(e).forEach(function(r){t.length!==0&&(t+="&"),t+=r+"="+e[r]}),t}function z(e,t){t===void 0&&(t={});var r=document.createElement("script");return r.src=e,Object.keys(t).forEach(function(n){r.setAttribute(n,t[n]),n==="data-csp-nonce"&&r.setAttribute("nonce",t["data-csp-nonce"])}),r}function Ne(e,t){if(t===void 0&&(t=Promise),X(e,t),typeof document>"u")return t.resolve(null);var r=Ee(e),n=r.url,a=r.dataAttributes,o=a["data-namespace"]||"paypal",s=H(o);return ve(n,a)&&s?t.resolve(s):ye({url:n,attributes:a},t).then(function(){var d=H(o);if(d)return d;throw new Error("The window.".concat(o," global variable is not available."))})}function ye(e,t){t===void 0&&(t=Promise),X(e,t);var r=e.url,n=e.attributes;if(typeof r!="string"||r.length===0)throw new Error("Invalid url.");if(typeof n<"u"&&typeof n!="object")throw new Error("Expected attributes to be an object.");return new t(function(a,o){if(typeof document>"u")return a();me({url:r,attributes:n,onSuccess:function(){return a()},onError:function(){var s=new Error('The script "'.concat(r,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));return o(s)}})})}function H(e){return window[e]}function X(e,t){if(typeof e!="object"||e===null)throw new Error("Expected an options object.");if(typeof t<"u"&&typeof t!="function")throw new Error("Expected PromisePonyfill to be a function.")}var J=function(e){var t=e.className,r=t===void 0?"":t,n=e.children,a=w(e,["className","children"]),o=I()[0],s=o.isResolved,d=o.options,u=(0,i.useRef)(null),p=(0,i.useState)(!0),E=p[0],v=p[1],m=(0,i.useState)(null),N=m[1],R=function(h){var A=u.current;if(!A||!h.isEligible())return v(!1);A.firstChild&&A.removeChild(A.firstChild),h.render(A).catch(function(g){A===null||A.children.length===0||N(function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(g))})})};return(0,i.useEffect)(function(){if(s!==!1){var h=k(d[y.DATA_NAMESPACE]);if(h===void 0||h.Marks===void 0)return N(function(){throw new Error(U({reactComponentName:J.displayName,sdkComponentKey:"marks",sdkRequestedComponents:d.components,sdkDataNamespace:d[y.DATA_NAMESPACE]}))});R(h.Marks(l({},a)))}},[s,a.fundingSource]),i.default.createElement(i.default.Fragment,null,E?i.default.createElement("div",{ref:u,className:r}):n)};J.displayName="PayPalMarks";var Y=function(e){var t=e.className,r=t===void 0?"":t,n=e.forceReRender,a=n===void 0?[]:n,o=w(e,["className","forceReRender"]),s=I()[0],d=s.isResolved,u=s.options,p=(0,i.useRef)(null),E=(0,i.useRef)(null),v=(0,i.useState)(null),m=v[1];return(0,i.useEffect)(function(){if(d!==!1){var N=k(u[y.DATA_NAMESPACE]);if(N===void 0||N.Messages===void 0)return m(function(){throw new Error(U({reactComponentName:Y.displayName,sdkComponentKey:"messages",sdkRequestedComponents:u.components,sdkDataNamespace:u[y.DATA_NAMESPACE]}))});E.current=N.Messages(l({},o)),E.current.render(p.current).catch(function(R){p.current===null||p.current.children.length===0||m(function(){throw new Error("Failed to render <PayPalMessages /> component. ".concat(R))})})}},x([d],a,!0)),i.default.createElement("div",{ref:p,className:r})};Y.displayName="PayPalMessages";var Z=function(e){var t,r,n=e.options,a=n===void 0?{clientId:"test"}:n,o=e.children,s=e.deferLoading,d=s===void 0?!1:s,u=(0,i.useReducer)(pe,{options:l(l((t={},t[y.DATA_SDK_INTEGRATION_SOURCE]=y.DATA_SDK_INTEGRATION_SOURCE_VALUE,t),a),(r={},r[T]="".concat(V(a)),r)),loadingStatus:d?f.INITIAL:f.PENDING}),p=u[0],E=u[1];return(0,i.useEffect)(function(){if(d===!1&&p.loadingStatus===f.INITIAL)return E({type:b.LOADING_STATUS,value:f.PENDING});if(p.loadingStatus===f.PENDING){var v=!0;return Ne(p.options).then(function(){v&&E({type:b.LOADING_STATUS,value:f.RESOLVED})}).catch(function(m){console.error("".concat(ce," ").concat(m)),v&&E({type:b.LOADING_STATUS,value:{state:f.REJECTED,message:String(m)}})}),function(){v=!1}}},[p.options,d,p.loadingStatus]),i.default.createElement(W.Provider,{value:l(l({},p),{dispatch:E})},o)};var c=D(B()),Re=({showSpinner:e})=>{let[{isPending:t}]=I();return(0,c.jsxs)(c.Fragment,{children:[e&&t&&(0,c.jsx)("div",{className:"spinner"}),(0,c.jsx)(O,{style:Q,disabled:!1,forceReRender:[Q],fundingSource:void 0,createOrder:ge,onApprove:Pe})]})},Q={layout:"vertical"};function ge(){return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:[{sku:"1blwyeo8",quantity:2}]})}).then(e=>e.json()).then(e=>e.id)}function Pe(e){return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderID:e.orderID})}).then(t=>t.json()).then(t=>{})}function ee(){let e=$(),{subProject:t,transaction:r}=F();return(0,c.jsx)("div",{className:"bg-background-teal text-light-black min-h-screen",children:(0,c.jsxs)("div",{className:"px-8 sm:max-w-screen-lg sm:mx-auto",children:[(0,c.jsx)("section",{className:"mb-4 sm:max-w-screen-lg sm:mx-auto",children:(0,c.jsx)("div",{className:"pt-20",children:(0,c.jsx)("h1",{className:"text-3xl leading-none mb-6 sm:mb-8",children:e.h1})})}),(0,c.jsxs)("section",{className:"bg-white bg-opacity-20 rounded-xl px-8 py-8 mb-8 sm:max-w-screen-lg sm:mx-auto text-xl",children:[(0,c.jsxs)("div",{className:"flex mb-6",children:[(0,c.jsx)("p",{className:" w-1/3",children:r.product.name}),(0,c.jsx)("p",{className:" w-1/3 text-center",children:"x"}),(0,c.jsx)("p",{className:" w-1/3 text-right",children:r.quantity})]}),(0,c.jsx)("div",{className:"flex bg-white bg-opacity-50 py-4 mb-24 rounded-md",children:(0,c.jsxs)("p",{className:" w-full text-center",children:[r.totalCarbon," tonnes of carbon"]})}),(0,c.jsx)("div",{className:"my-8 border-b-2 border-green-underline"}),(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsx)("p",{children:"Total cost"}),(0,c.jsxs)("p",{children:["\xA3",r.quantity*r.product.units/1e3*t.tonCost.value]})]})]}),(0,c.jsx)("section",{className:"w-3/5 mx-auto mb-8 flex justify-center sm:max-w-screen-lg sm:mx-auto",children:(0,c.jsx)(L,{linkTo:"/success",text:"Pay now"})}),(0,c.jsx)("section",{className:"sm:max-w-screen-md sm:mx-auto",children:(0,c.jsx)(Z,{options:{clientId:"test",components:"buttons",currency:"USD"},children:(0,c.jsx)(Re,{showSpinner:!1})})})]})})}export{ee as default};
/*! Bundled license information:

@paypal/react-paypal-js/dist/esm/react-paypal-js.js:
  (*!
   * react-paypal-js v8.1.3 (2023-08-16T17:57:48.377Z)
   * Copyright 2020-present, PayPal, Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/