"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45590],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),o=t(86010),a=t(67294),i=t(16550),c=t(48334);function s(e){let{title:r,url:t,description:s,command:d}=e;const{pathname:l}=(0,i.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(c.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},84963:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const i={},c="discovery",s={unversionedId:"platform/reference/equity/discovery/index",id:"platform/reference/equity/discovery/index",title:"discovery",description:"Commands",source:"@site/content/platform/reference/equity/discovery/index.mdx",sourceDirName:"platform/reference/equity/discovery",slug:"/platform/reference/equity/discovery/",permalink:"/platform/reference/equity/discovery/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/discovery/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"splits",permalink:"/platform/reference/equity/calendar/splits"},next:{title:"active",permalink:"/platform/reference/equity/discovery/active"}},d={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discovery"},"discovery"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Active",description:"Get the most actively traded stocks based on volume",url:"/platform/reference/equity/discovery/active",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Aggressive Small Caps",description:"Get top small cap stocks based on earnings growth",url:"/platform/reference/equity/discovery/aggressive_small_caps",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Filings",description:"Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more",url:"/platform/reference/equity/discovery/filings",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Gainers",description:"Get the top price gainers in the stock market",url:"/platform/reference/equity/discovery/gainers",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Growth Tech",description:"Get top tech stocks based on revenue and earnings growth",url:"/platform/reference/equity/discovery/growth_tech",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Losers",description:"Get the top price losers in the stock market",url:"/platform/reference/equity/discovery/losers",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Top Retail",description:"Tracks over $30B USD/day of individual investors trades",url:"/platform/reference/equity/discovery/top_retail",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Undervalued Growth",description:"Get potentially undervalued growth stocks",url:"/platform/reference/equity/discovery/undervalued_growth",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Undervalued Large Caps",description:"Get potentially undervalued large cap stocks",url:"/platform/reference/equity/discovery/undervalued_large_caps",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Upcoming Release Days",description:"Get upcoming earnings release dates",url:"/platform/reference/equity/discovery/upcoming_release_days",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);