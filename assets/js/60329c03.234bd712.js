"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76076],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),l=t(48334);function c(e){let{title:r,url:t,description:c,command:d}=e;const{pathname:s}=(0,i.TH)(),m=s.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&o.createElement(l.Z,{className:"ml-auto mr-4"})),c?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},47228:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},l="calendar",c={unversionedId:"platform/reference/equity/calendar/index",id:"platform/reference/equity/calendar/index",title:"calendar",description:"Commands",source:"@site/content/platform/reference/equity/calendar/index.mdx",sourceDirName:"platform/reference/equity/calendar",slug:"/platform/reference/equity/calendar/",permalink:"/platform/reference/equity/calendar/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/calendar/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"equity",permalink:"/platform/reference/equity/"},next:{title:"dividend",permalink:"/platform/reference/equity/calendar/dividend"}},d={},s=[{value:"Commands",id:"commands",level:3}],m={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calendar"},"calendar"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Dividend",description:"Get historical and upcoming dividend payments",url:"/platform/reference/equity/calendar/dividend",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Earnings",description:"Get historical and upcoming company earnings releases",url:"/platform/reference/equity/calendar/earnings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ipo",description:"Get historical and upcoming initial public offerings (IPOs)",url:"/platform/reference/equity/calendar/ipo",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Splits",description:"Get historical and upcoming stock split operations",url:"/platform/reference/equity/calendar/splits",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);