"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,h=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},60405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const l={title:"chart",description:"This documentation page provides detailed information about the Chart command in our tool. The command retrieves a candlestick chart based on the provided ticker and time interval, displaying vital trading data such as opening/closing prices and volume for the specified number of previous days.",keywords:["Chart Command","Candlestick Chart","Stock Ticker","Time Interval","Opening and Closing Prices","Trading Volume","Past Days Display"]},o=void 0,c={unversionedId:"bot/reference/telegram/charts/chart",id:"bot/reference/telegram/charts/chart",title:"chart",description:"This documentation page provides detailed information about the Chart command in our tool. The command retrieves a candlestick chart based on the provided ticker and time interval, displaying vital trading data such as opening/closing prices and volume for the specified number of previous days.",source:"@site/content/bot/reference/telegram/charts/chart.md",sourceDirName:"bot/reference/telegram/charts",slug:"/bot/reference/telegram/charts/chart",permalink:"/bot/reference/telegram/charts/chart",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/charts/chart.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"chart",description:"This documentation page provides detailed information about the Chart command in our tool. The command retrieves a candlestick chart based on the provided ticker and time interval, displaying vital trading data such as opening/closing prices and volume for the specified number of previous days.",keywords:["Chart Command","Candlestick Chart","Stock Ticker","Time Interval","Opening and Closing Prices","Trading Volume","Past Days Display"]},sidebar:"tutorialSidebar",previous:{title:"cd",permalink:"/bot/reference/telegram/charts/cd"},next:{title:"chartfib",permalink:"/bot/reference/telegram/charts/chartfib"}},d={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"charts: chart - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command will retrieve a candlestick chart for the ticker/interval provided, with data for the past number of days specified. The interval provided must be a valid time interval (e.g. 5 minute, 15 minute, etc.). The chart will be displayed to the user and will contain information such as the opening and closing prices, the high and low, the volume, and any other relevant information."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/chart ticker interval [past_days]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1m"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"5m"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"10m"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"15m"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"30m"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"60m"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"1d"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"1wk"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"1mo")," Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"15m")),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"1d, 1wk, 1mo, 1m, 5m, 10m, 15m, 30m, 1hr")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"past_days"),(0,n.kt)("td",{parentName:"tr",align:null},"Past Days to Display. Default: 0"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/chart AMD 1d 10\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/chart AMD 1d\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);