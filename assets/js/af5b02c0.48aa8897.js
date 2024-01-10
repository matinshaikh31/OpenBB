"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,y=u["".concat(m,".").concat(s)]||u[s]||d[s]||l;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},52634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"management_compensation",description:"Learn how to retrieve executive compensation data for a company using the equity management compensation function in Python. Understand the parameters, return values, and available data fields such as symbol, salary, bonus, stock award, and more.",keywords:["executive compensation","company executive compensation","equity management compensation","symbol parameter","provider parameter","return values","data","symbol","cik","filing date","accepted date","name and position","year of compensation","salary","bonus","stock award","incentive plan compensation","all other compensation","total compensation","URL"]},o=void 0,i={unversionedId:"excel/reference/equity/fundamental/management_compensation",id:"excel/reference/equity/fundamental/management_compensation",title:"management_compensation",description:"Learn how to retrieve executive compensation data for a company using the equity management compensation function in Python. Understand the parameters, return values, and available data fields such as symbol, salary, bonus, stock award, and more.",source:"@site/content/excel/reference/equity/fundamental/management_compensation.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/management_compensation",permalink:"/excel/reference/equity/fundamental/management_compensation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/management_compensation.md",tags:[],version:"current",frontMatter:{title:"management_compensation",description:"Learn how to retrieve executive compensation data for a company using the equity management compensation function in Python. Understand the parameters, return values, and available data fields such as symbol, salary, bonus, stock award, and more.",keywords:["executive compensation","company executive compensation","equity management compensation","symbol parameter","provider parameter","return values","data","symbol","cik","filing date","accepted date","name and position","year of compensation","salary","bonus","stock award","incentive plan compensation","all other compensation","total compensation","URL"]},sidebar:"tutorialSidebar",previous:{title:"management",permalink:"/excel/reference/equity/fundamental/management"},next:{title:"metrics",permalink:"/excel/reference/equity/fundamental/metrics"}},m={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get Executive Compensation. Information about the executive compensation for a given company."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.MANAGEMENT_COMPENSATION(symbol;[provider])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.FUNDAMENTAL.MANAGEMENT_COMPENSATION("AAPL")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepted_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date the filing was accepted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name_and_position"),(0,r.kt)("td",{parentName:"tr",align:null},"Name and position of the executive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"year"),(0,r.kt)("td",{parentName:"tr",align:null},"Year of the compensation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"salary"),(0,r.kt)("td",{parentName:"tr",align:null},"Salary of the executive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bonus"),(0,r.kt)("td",{parentName:"tr",align:null},"Bonus of the executive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock_award"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock award of the executive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incentive_plan_compensation"),(0,r.kt)("td",{parentName:"tr",align:null},"Incentive plan compensation of the executive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_other_compensation"),(0,r.kt)("td",{parentName:"tr",align:null},"All other compensation of the executive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total"),(0,r.kt)("td",{parentName:"tr",align:null},"Total compensation of the executive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the filing data.")))))}d.isMDXComponent=!0}}]);