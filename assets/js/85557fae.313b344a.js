"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},63682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"sectorsflow",description:"The sectorsflow command page details how to retrieve a summary of all flows by MarketCap percentage per sector over past specified days. It includes nuances on usage and different parameters like sector and number of days.",keywords:["sectorsflow","MarketCap percentage","sector","days","flow summary","Basic Materials","Energy","Communication Services","Consumer Cyclical","Consumer Defensive","Financial","Healthcare","Industrials","Real Estate","Technology","Utilities"]},s=void 0,i={unversionedId:"bot/reference/telegram/flow/sectorsflow",id:"bot/reference/telegram/flow/sectorsflow",title:"sectorsflow",description:"The sectorsflow command page details how to retrieve a summary of all flows by MarketCap percentage per sector over past specified days. It includes nuances on usage and different parameters like sector and number of days.",source:"@site/content/bot/reference/telegram/flow/sectorsflow.md",sourceDirName:"bot/reference/telegram/flow",slug:"/bot/reference/telegram/flow/sectorsflow",permalink:"/bot/reference/telegram/flow/sectorsflow",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/flow/sectorsflow.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704905987,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"sectorsflow",description:"The sectorsflow command page details how to retrieve a summary of all flows by MarketCap percentage per sector over past specified days. It includes nuances on usage and different parameters like sector and number of days.",keywords:["sectorsflow","MarketCap percentage","sector","days","flow summary","Basic Materials","Energy","Communication Services","Consumer Cyclical","Consumer Defensive","Financial","Healthcare","Industrials","Real Estate","Technology","Utilities"]},sidebar:"tutorialSidebar",previous:{title:"wk",permalink:"/bot/reference/telegram/flow/flowsum/wk"},next:{title:"summaryflow",permalink:"/bot/reference/telegram/flow/summaryflow"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"flow: sectorsflow - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command retrieves a summary of all flows by MarketCap percentage per sector over the past x days."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/sectorsflow days sector\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sector"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector to filter by: ",(0,n.kt)("inlineCode",{parentName:"td"},"bm")," (Basic Materials), ",(0,n.kt)("inlineCode",{parentName:"td"},"e")," (Energy), ",(0,n.kt)("inlineCode",{parentName:"td"},"cs")," (Communication Services), ",(0,n.kt)("inlineCode",{parentName:"td"},"cc")," (Consumer Cyclical), ",(0,n.kt)("inlineCode",{parentName:"td"},"cd")," (Consumer Defensive), ",(0,n.kt)("inlineCode",{parentName:"td"},"f")," (Financial), ",(0,n.kt)("inlineCode",{parentName:"td"},"h")," (Healthcare), ",(0,n.kt)("inlineCode",{parentName:"td"},"i")," (Industrials), ",(0,n.kt)("inlineCode",{parentName:"td"},"re")," (Real Estate), ",(0,n.kt)("inlineCode",{parentName:"td"},"t")," (Technology), ",(0,n.kt)("inlineCode",{parentName:"td"},"u")," (Utilities)"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/sectorsflow 5 cs\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/sectorsflow 5 bm\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);