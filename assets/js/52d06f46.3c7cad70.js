"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53038],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>N});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var o=r.createContext({}),g=function(t){var a=r.useContext(o),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},m=function(t){var a=g(t.components);return r.createElement(o.Provider,{value:a},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=g(e),s=n,N=d["".concat(o,".").concat(s)]||d[s]||k[s]||i;return e?r.createElement(N,l(l({ref:a},m),{},{components:e})):r.createElement(N,l({ref:a},m))}));function N(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,l=new Array(i);l[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=t,p[d]="string"==typeof t?t:n,l[1]=p;for(var g=2;g<i;g++)l[g]=e[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}s.displayName="MDXCreateElement"},88828:(t,a,e)=>{e.d(a,{Z:()=>i});var r=e(67294),n=e(35742);function i(t){let{title:a}=t;return r.createElement(n.Z,null,r.createElement("title",null,a))}},37970:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>g,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=e(87462),n=(e(67294),e(3905)),i=e(88828);const l={title:"Options",description:"This documentation page explains how to use the Options module in the OpenBB SDK that allows programmatic access to trading data. It covers a range of functions that correspond to many aspects of stock option data, from Unusual Options Activity to Put-Call Ratios.",keywords:["Options Module","OpenBB SDK","Trading Data","Stock Option Data","Unusual Options Activity","Put-Call Ratios","Programmatic Access","Terminal Commands","Data Processing","Documentation"]},p=void 0,o={unversionedId:"sdk/data-available/stocks/options",id:"sdk/data-available/stocks/options",title:"Options",description:"This documentation page explains how to use the Options module in the OpenBB SDK that allows programmatic access to trading data. It covers a range of functions that correspond to many aspects of stock option data, from Unusual Options Activity to Put-Call Ratios.",source:"@site/content/sdk/data-available/stocks/options.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/options",permalink:"/sdk/data-available/stocks/options",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/stocks/options.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Options",description:"This documentation page explains how to use the Options module in the OpenBB SDK that allows programmatic access to trading data. It covers a range of functions that correspond to many aspects of stock option data, from Unusual Options Activity to Put-Call Ratios.",keywords:["Options Module","OpenBB SDK","Trading Data","Stock Option Data","Unusual Options Activity","Put-Call Ratios","Programmatic Access","Terminal Commands","Data Processing","Documentation"]},sidebar:"tutorialSidebar",previous:{title:"Options Chains",permalink:"/sdk/data-available/stocks/options-chains"},next:{title:"Stocks Screener",permalink:"/sdk/data-available/stocks/stocks-screener"}},g={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Unusual Options",id:"unusual-options",level:3},{value:"PCR",id:"pcr",level:3},{value:"Chains",id:"chains",level:3}],d={toc:m},k="wrapper";function s(t){let{components:a,...e}=t;return(0,n.kt)(k,(0,r.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Options - Stocks - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The Options module wraps the Terminal commands for the SDK layer, providing programmatic access and greater flexibility for processing data."),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"The functions in the Options sub-module are listed below, along with a short description."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.pcr"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Put-Call Ratio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.info"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Option Information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.unu"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Unusual Options Activity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.hist"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical Option Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.chains"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Option Chain Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"stocks.options.eodchain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.vol"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Display Volume plot")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.oi"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Display open interest plot")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.voi"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Display plot of volume and open interest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.expirations"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get Option Expirations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stocks.options.vsurf"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Show volatility surface")))),(0,n.kt)("p",null,"Alternatively, the contents of the menu or a function's docstrings can be printed using Python's built-in help."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.stocks.options)\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"import-statements"},"Import Statements"),(0,n.kt)("p",null,"The examples in this section will assume these statements are included at the top of the file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n")),(0,n.kt)("h3",{id:"unusual-options"},"Unusual Options"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openbb.stocks.options.unu")," returns a DataFrame with the current day's unusual options, those having a very high volume/open interest ratio. This function returns a Tuple containing the DataFrame and a string. Unpack it like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"unu_df,unu_ts = openbb.stocks.options.unu(limit = 500)\nunu_df = unu_df.sort_values(by = 'Vol/OI', ascending = False)\n\nunu_df\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exp"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Strike"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Vol/OI"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Vol"),(0,n.kt)("th",{parentName:"tr",align:"right"},"OI"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Bid"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ask"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Call"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8598"),(0,n.kt)("td",{parentName:"tr",align:"right"},"141"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.03"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10173"),(0,n.kt)("td",{parentName:"tr",align:"right"},"250"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.39"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCHW"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"87.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Call"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4317"),(0,n.kt)("td",{parentName:"tr",align:"right"},"123"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.35")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"192.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"179688"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5774"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.02")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"FDX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"190"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Call"),(0,n.kt)("td",{parentName:"tr",align:"right"},"29.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7098"),(0,n.kt)("td",{parentName:"tr",align:"right"},"243"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.69")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"FCX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1513"),(0,n.kt)("td",{parentName:"tr",align:"right"},"729"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.06")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"402"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CAT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"227.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"601"),(0,n.kt)("td",{parentName:"tr",align:"right"},"280"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.14")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"401"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NKE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"111"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"651"),(0,n.kt)("td",{parentName:"tr",align:"right"},"306"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NVDA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"160"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8668"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4059"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.08")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"425"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PG"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"241"),(0,n.kt)("td",{parentName:"tr",align:"right"},"113"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.69")))),(0,n.kt)("h3",{id:"pcr"},"PCR"),(0,n.kt)("p",null,"Get up to ten years of historical Put-Call Ratios."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.options.pcr(start_date = '2012-01-01', window = 10, symbol = 'SPY')\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"PCR"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2012-12-05 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.1815")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2012-12-06 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.7403")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2012-12-07 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.7023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2012-12-10 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.8997")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2012-12-11 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.5384")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-28 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.2491")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-29 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.135")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-30 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.5901")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.9842")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-02 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.1346")))),(0,n.kt)("h3",{id:"chains"},"Chains"),(0,n.kt)("p",null,"Get the current option chain for a selected ticker.  We support the following sources: YahooFinance, Nasdaq,\nTradier (Sandbox) and Intrinio.  Note that each API returns slightly different data fields."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.options.chains(symbol = 'SPY')\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"contractSymbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"optionType"),(0,n.kt)("th",{parentName:"tr",align:"left"},"expiration"),(0,n.kt)("th",{parentName:"tr",align:"right"},"strike"),(0,n.kt)("th",{parentName:"tr",align:"right"},"lastPrice"),(0,n.kt)("th",{parentName:"tr",align:"right"},"bid"),(0,n.kt)("th",{parentName:"tr",align:"right"},"ask"),(0,n.kt)("th",{parentName:"tr",align:"right"},"openInterest"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"impliedVolatility"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL230210C00050000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"call"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50"),(0,n.kt)("td",{parentName:"tr",align:"right"},"101.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"101.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"102.8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"153"),(0,n.kt)("td",{parentName:"tr",align:"right"},"44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.73438")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL230210C00055000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"call"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"96.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"96.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97.85"),(0,n.kt)("td",{parentName:"tr",align:"right"},"81"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.53125")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL230210C00070000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"call"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"70"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.39"),(0,n.kt)("td",{parentName:"tr",align:"right"},"81.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"82.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.63281")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL230210C00075000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"call"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"79.45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.50781")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL230210C00080000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"call"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"80"),(0,n.kt)("td",{parentName:"tr",align:"right"},"72.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"71.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.21094")))))}s.isMDXComponent=!0}}]);