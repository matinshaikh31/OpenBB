"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36789],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),r=n(35742);function l(t){let{title:e}=t;return a.createElement(r.Z,null,a.createElement("title",null,e))}},65082:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const i={title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",keywords:["option chains","parameters","python usage","call options","put options","strike price","ask size","bid size","volume","open interest","delta","gamma","theta","vega","ask iv","bid iv","mid iv"]},o=void 0,p={unversionedId:"terminal/reference/stocks/options/chains",id:"terminal/reference/stocks/options/chains",title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",source:"@site/content/terminal/reference/stocks/options/chains.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/chains",permalink:"/terminal/reference/stocks/options/chains",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/chains.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",keywords:["option chains","parameters","python usage","call options","put options","strike price","ask size","bid size","volume","open interest","delta","gamma","theta","vega","ask iv","bid iv","mid iv"]},sidebar:"tutorialSidebar",previous:{title:"calc",permalink:"/terminal/reference/stocks/options/calc"},next:{title:"eodchain",permalink:"/terminal/reference/stocks/options/eodchain"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:c},m="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"stocks /options/chains - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Display option chains"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"chains [-c] [-p] [-m MIN_SP] [-M MAX_SP] [-d TO_DISPLAY] [-e {2024-03-15,2024-03-22,2024-03-28,2024-04-05,2024-04-12,2024-04-19,2024-04-26,2024-05-17,2024-06-21,2024-07-19,2024-08-16,2024-09-20,2024-10-18,2024-11-15,2024-12-20,2025-01-17,2025-03-21,2025-06-20,2025-09-19,2025-12-19,2026-01-16,2026-06-18,}]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calls"),(0,r.kt)("td",{parentName:"tr",align:null},"-c  --calls"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to show calls only"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"puts"),(0,r.kt)("td",{parentName:"tr",align:null},"-p  --puts"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to show puts only"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_sp"),(0,r.kt)("td",{parentName:"tr",align:null},"-m  --min"),(0,r.kt)("td",{parentName:"tr",align:null},"minimum strike price to consider."),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_sp"),(0,r.kt)("td",{parentName:"tr",align:null},"-M  --max"),(0,r.kt)("td",{parentName:"tr",align:null},"maximum strike price to consider."),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to_display"),(0,r.kt)("td",{parentName:"tr",align:null},"-d  --display"),(0,r.kt)("td",{parentName:"tr",align:null},"Columns to display"),(0,r.kt)("td",{parentName:"tr",align:null},"contractSymbol,optionType,expiration,strike,lastPrice,bid,ask,openInterest,volume,impliedVolatility"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exp"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --expiration"),(0,r.kt)("td",{parentName:"tr",align:null},"Select expiration date (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-03-15, 2024-03-22, 2024-03-28, 2024-04-05, 2024-04-12, 2024-04-19, 2024-04-26, 2024-05-17, 2024-06-21, 2024-07-19, 2024-08-16, 2024-09-20, 2024-10-18, 2024-11-15, 2024-12-20, 2025-01-17, 2025-03-21, 2025-06-20, 2025-09-19, 2025-12-19, 2026-01-16, 2026-06-18,")))),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);