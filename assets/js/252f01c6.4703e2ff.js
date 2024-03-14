"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),f=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=f(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=f(r),u=o,d=c["".concat(p,".").concat(u)]||c[u]||s[u]||a;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var f=2;f<a;f++)l[f]=r[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},39454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const l={title:"rpf",description:"This page provides information on the usage and parameters of the 'rpf' function, a tool used for removing portfolios.",keywords:["rpf","portfolio management","command line function","programming documentation","remove portfolios"]},i=void 0,p={unversionedId:"terminal/reference/portfolio/po/rpf",id:"terminal/reference/portfolio/po/rpf",title:"rpf",description:"This page provides information on the usage and parameters of the 'rpf' function, a tool used for removing portfolios.",source:"@site/content/terminal/reference/portfolio/po/rpf.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/rpf",permalink:"/terminal/reference/portfolio/po/rpf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/rpf.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"rpf",description:"This page provides information on the usage and parameters of the 'rpf' function, a tool used for removing portfolios.",keywords:["rpf","portfolio management","command line function","programming documentation","remove portfolios"]},sidebar:"tutorialSidebar",previous:{title:"riskparity",permalink:"/terminal/reference/portfolio/po/riskparity"},next:{title:"show",permalink:"/terminal/reference/portfolio/po/show"}},f={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:m},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"portfolio /po/rpf - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Remove one of the portfolios"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"rpf [-pf PORTFOLIOS]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolios"),(0,o.kt)("td",{parentName:"tr",align:null},"-pf  --portfolios"),(0,o.kt)("td",{parentName:"tr",align:null},"portfolios to be removed from the saved portfolios"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);