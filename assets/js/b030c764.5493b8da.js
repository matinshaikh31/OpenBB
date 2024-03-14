"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||l;return r?a.createElement(m,o(o({ref:t},f),{},{components:r})):a.createElement(m,o({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},9050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"acf",description:"The page provides explanation and usage for acf- the Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff crypto data. It includes parameters details and illustrative plot.",keywords:["acf","Auto-Correlation","Partial Auto-Correlation","diff","diff diff","crypto data","lags","plots"]},i=void 0,c={unversionedId:"terminal/reference/crypto/qa/acf",id:"terminal/reference/crypto/qa/acf",title:"acf",description:"The page provides explanation and usage for acf- the Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff crypto data. It includes parameters details and illustrative plot.",source:"@site/content/terminal/reference/crypto/qa/acf.md",sourceDirName:"terminal/reference/crypto/qa",slug:"/terminal/reference/crypto/qa/acf",permalink:"/terminal/reference/crypto/qa/acf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/qa/acf.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"acf",description:"The page provides explanation and usage for acf- the Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff crypto data. It includes parameters details and illustrative plot.",keywords:["acf","Auto-Correlation","Partial Auto-Correlation","diff","diff diff","crypto data","lags","plots"]},sidebar:"tutorialSidebar",previous:{title:"Quantitative Analysis",permalink:"/terminal/reference/crypto/qa/"},next:{title:"bw",permalink:"/terminal/reference/crypto/qa/bw"}},p={},f=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:f},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"crypto /qa/acf - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff crypto data"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"acf [-l LAGS]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lags"),(0,n.kt)("td",{parentName:"tr",align:null},"-l  --lags"),(0,n.kt)("td",{parentName:"tr",align:null},"maximum lags to display in plots"),(0,n.kt)("td",{parentName:"tr",align:null},"15"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"range(5, 100)")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154305242-176c3ba1-ebfc-43e7-a027-46251fb02463.png",alt:"acf"})),(0,n.kt)("hr",null))}s.isMDXComponent=!0}}]);