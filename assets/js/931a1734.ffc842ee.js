"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43312],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},43064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const o={title:"cashflow",description:"This page discusses the cashflow data from Marketwatch. It explains how to use the openbb.stocks.ca.cashflow function, its parameters, and outputs, emphasizing on a dataframe of cashflow comparisons.",keywords:["cashflow data","marketwatch source code","openbb.stocks.ca.cashflow function","parameters","dataframe of cashflow comparisons","timeframe","quarter","export"]},s=void 0,c={unversionedId:"sdk/reference/stocks/ca/cashflow",id:"sdk/reference/stocks/ca/cashflow",title:"cashflow",description:"This page discusses the cashflow data from Marketwatch. It explains how to use the openbb.stocks.ca.cashflow function, its parameters, and outputs, emphasizing on a dataframe of cashflow comparisons.",source:"@site/content/sdk/reference/stocks/ca/cashflow.md",sourceDirName:"sdk/reference/stocks/ca",slug:"/sdk/reference/stocks/ca/cashflow",permalink:"/sdk/reference/stocks/ca/cashflow",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/ca/cashflow.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704905987,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"cashflow",description:"This page discusses the cashflow data from Marketwatch. It explains how to use the openbb.stocks.ca.cashflow function, its parameters, and outputs, emphasizing on a dataframe of cashflow comparisons.",keywords:["cashflow data","marketwatch source code","openbb.stocks.ca.cashflow function","parameters","dataframe of cashflow comparisons","timeframe","quarter","export"]},sidebar:"tutorialSidebar",previous:{title:"balance",permalink:"/sdk/reference/stocks/ca/balance"},next:{title:"hcorr",permalink:"/sdk/reference/stocks/ca/hcorr"}},i={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks.ca.cashflow - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get cashflow data. ","[Source: Marketwatch]"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/marketwatch_model.py#L139"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.stocks.ca.cashflow(similar: List[str], timeframe: str = "2023", quarter: bool = False)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"similar"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,n.kt)("td",{parentName:"tr",align:null},"List of tickers to compare.",(0,n.kt)("br",null),"Comparable companies can be accessed through",(0,n.kt)("br",null),"finnhub_peers(), finviz_peers(), polygon_peers()."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeframe"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Column header to compare"),(0,n.kt)("td",{parentName:"tr",align:null},"2023"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quarter"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to use quarterly statements, by default False"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Dataframe of cashflow comparisons")))),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);