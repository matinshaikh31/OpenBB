"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},42362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const i={title:"donchian",description:"This page provides in-depth details on Donchian Channels - an indicator formed by upper and lower bands around a midrange or median band, and how to use it with parameters in python.",keywords:["Donchian Channels","moving average calculations","security price","upper band","lower band","midrange","median band","parameters","n_length_upper","n_length_lower"]},o=void 0,p={unversionedId:"terminal/reference/stocks/ta/donchian",id:"terminal/reference/stocks/ta/donchian",title:"donchian",description:"This page provides in-depth details on Donchian Channels - an indicator formed by upper and lower bands around a midrange or median band, and how to use it with parameters in python.",source:"@site/content/terminal/reference/stocks/ta/donchian.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/donchian",permalink:"/terminal/reference/stocks/ta/donchian",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ta/donchian.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708675444,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"donchian",description:"This page provides in-depth details on Donchian Channels - an indicator formed by upper and lower bands around a midrange or median band, and how to use it with parameters in python.",keywords:["Donchian Channels","moving average calculations","security price","upper band","lower band","midrange","median band","parameters","n_length_upper","n_length_lower"]},sidebar:"tutorialSidebar",previous:{title:"demark",permalink:"/terminal/reference/stocks/ta/demark"},next:{title:"ema",permalink:"/terminal/reference/stocks/ta/ema"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /ta/donchian - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Donchian Channels are three lines generated by moving average calculations that comprise an indicator formed by upper and lower bands around a midrange or median band. The upper band marks the highest price of a security over N periods while the lower band marks the lowest price of a security over N periods. The area between the upper and lower bands represents the Donchian Channel."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"donchian [-u N_LENGTH_UPPER] [-l N_LENGTH_LOWER]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length_upper"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --length_upper"),(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length_lower"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --length_lower"),(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154310472-6cd5805f-b87f-4668-85a1-3e5dd7267848.png",alt:"donchian"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);