"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(35742);function s(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},2458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),s=r(88828);const i={title:"Futures",description:"This documentation helps users understand how to use the Futures menu, including capabilities like accessing historical prices, understanding the current term structure of an asset, and using the search, curve and historical functions. It also explains how to view categories, use ticker symbols, and export data.",keywords:["Futures","Historical Prices","Asset","Term Structure","Search","Curve","Historical","Futures Search Function","Category Flag","Ticker Symbol","Eurodollar Futures","Raw Data","Export","Historical Command","Continuous Chart"]},o=void 0,u={unversionedId:"terminal/menus/futures",id:"terminal/menus/futures",title:"Futures",description:"This documentation helps users understand how to use the Futures menu, including capabilities like accessing historical prices, understanding the current term structure of an asset, and using the search, curve and historical functions. It also explains how to view categories, use ticker symbols, and export data.",source:"@site/content/terminal/menus/futures.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/futures",permalink:"/terminal/menus/futures",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/futures.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704905987,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Futures",description:"This documentation helps users understand how to use the Futures menu, including capabilities like accessing historical prices, understanding the current term structure of an asset, and using the search, curve and historical functions. It also explains how to view categories, use ticker symbols, and export data.",keywords:["Futures","Historical Prices","Asset","Term Structure","Search","Curve","Historical","Futures Search Function","Category Flag","Ticker Symbol","Eurodollar Futures","Raw Data","Export","Historical Command","Continuous Chart"]},sidebar:"tutorialSidebar",previous:{title:"Forex",permalink:"/terminal/menus/forex"},next:{title:"Mutual Funds",permalink:"/terminal/menus/mutualfunds"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Search",id:"search",level:3},{value:"Curve",id:"curve",level:3},{value:"Historical",id:"historical",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{title:"Futures - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The Futures menu provides historical prices and the current term structure for an asset. This menu is accessible from the Main menu by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"futures")," and pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"enter")," key - or with the absolute path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/futures\n")),(0,a.kt)("img",{width:"800",alt:"image",src:"https://user-images.githubusercontent.com/46355364/218993274-c4802f49-9016-424f-b875-a4c1bc3e77be.png"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"There are three basic functions within this menu Search, Historical and Curve."),(0,a.kt)("h3",{id:"search"},"Search"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Search")," allows the user to find which instruments are supported, and can be searched by the description. For example, searching for silver will return these results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"search -d silver\n")),(0,a.kt)("img",{width:"603",alt:"Search Futures",src:"https://user-images.githubusercontent.com/85772166/197641622-8e90785a-f758-4911-9068-eb4f528f42e9.png"}),(0,a.kt)("p",null,"To view an entire category, attach the ",(0,a.kt)("inlineCode",{parentName:"p"},"--category")," flag to the function and select using the arrow keys."),(0,a.kt)("img",{width:"275",alt:"Futures Categories",src:"https://user-images.githubusercontent.com/85772166/197641664-3e63b68b-a4be-4dd6-a7a8-47e0cbef0b61.png"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"search --category currency\n")),(0,a.kt)("img",{width:"493",alt:"Currency Futures",src:"https://user-images.githubusercontent.com/85772166/197641730-b488d1d0-3f82-4da4-8f07-8973b86e9585.png"}),(0,a.kt)("h3",{id:"curve"},"Curve"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"curve")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"historical")," use the ticker symbol shown by the search function, for example, to see a chart of the current Eurodollar Futures term structure, simply enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curve GE\n")),(0,a.kt)("img",{width:"1218",alt:"Eurodollar Futures Curve",src:"https://user-images.githubusercontent.com/85772166/197641789-dc56b59f-e5c3-4186-b88c-9f899cdf650a.png"}),(0,a.kt)("p",null,"The raw data can be printed as a table or exported to a file, by attaching the optional arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"--raw"),", or, ",(0,a.kt)("inlineCode",{parentName:"p"},"--export {filetype}"),". For example, Global Emissions Offset Futures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curve GEO --raw\n")),(0,a.kt)("img",{width:"386",alt:"Futures Raw Data",src:"https://user-images.githubusercontent.com/85772166/197641865-aa3c8649-21c2-4217-b921-f426776430b1.png"}),(0,a.kt)("h3",{id:"historical"},"Historical"),(0,a.kt)("p",null,"The continuous chart is displayed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"historical")," command + the symbol. To see the optional arguments available for the command, deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," flag. For example, the Eurodollar Futures contract for December 2024 expiry is displayed with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"historical GE -s 2015-01-01 -e 2024-12\n")),(0,a.kt)("img",{width:"1205",alt:"Historical Price of GEZ24.CME",src:"https://user-images.githubusercontent.com/85772166/197641999-599e2b0a-4578-4d36-b5c5-704c5ac9a0fa.png"}),(0,a.kt)("p",null,"Multiple continuous charts can be plotted on the same chart by using a comma-separated list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"historical GE,ZQ -s 2007-01-01\n")),(0,a.kt)("img",{width:"1233",alt:"Historical Price of GE=F & ZQ=F",src:"https://user-images.githubusercontent.com/85772166/197642051-a5a02f15-6e5b-464f-9ba9-0d2299488021.png"}))}d.isMDXComponent=!0}}]);