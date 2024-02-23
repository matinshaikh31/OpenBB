"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,u=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(u,l(l({ref:t},f),{},{components:r})):o.createElement(u,l({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(39960),n=r(86010),a=r(67294),l=r(16550);function i(e){let{title:t,url:r,description:i,command:c}=e;const{pathname:s}=(0,l.TH)(),f=s.replace(/\/v\d+/,"");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:f.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":f.startsWith("/sdk")||f.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":f.startsWith("/bot"),header_docs:!(f.startsWith("/terminal")||f.startsWith("/sdk")||f.startsWith("/platform")||f.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},92299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var o=r(87462),n=(r(67294),r(3905)),a=r(62872);const l={},i="flow",c={unversionedId:"bot/reference/telegram/flow/index",id:"bot/reference/telegram/flow/index",title:"flow",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/flow/index.mdx",sourceDirName:"bot/reference/telegram/flow",slug:"/bot/reference/telegram/flow/",permalink:"/bot/reference/telegram/flow/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/flow/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708675444,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tops",permalink:"/bot/reference/telegram/etf/tops"},next:{title:"bigflow",permalink:"/bot/reference/telegram/flow/bigflow"}},s={},f=[],m={toc:f},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flow"},"flow"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"flow",description:"day open prem unu wk",url:"/bot/reference/telegram/flow/flow",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"flowsum",description:"day exp top wk",url:"/bot/reference/telegram/flow/flowsum",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"bigflow",description:"This command retrieves the top 20 largest flow by premium for a stock. We calculate the largest flow by...",url:"/bot/reference/telegram/flow/bigflow",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"sectorsflow",description:"This command retrieves a summary of all flows by MarketCap percentage per sector over the past x days.",url:"/bot/reference/telegram/flow/sectorsflow",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"summaryflow",description:"This command allows the user to retrieve a summary of all the flow per stock over the last x days, with the...",url:"/bot/reference/telegram/flow/summaryflow",mdxType:"ReferenceCard"})))}d.isMDXComponent=!0}}]);