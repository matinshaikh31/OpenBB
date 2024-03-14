"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46888],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),g=n,N=s["".concat(p,".").concat(g)]||s[g]||k[g]||l;return a?r.createElement(N,i(i({ref:e},m),{},{components:a})):r.createElement(N,i({ref:e},m))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},48503:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"Alternative",description:"This documentation page explains the functionalities provided by the Alternative module of the OpenBB SDK, offering programmatic access to commands within the OpenBB Terminal. It covers functions related to open source software (OSS) and Covid data, and provides examples of usage using the Python language.",keywords:["OpenBB SDK","Alternative module","open source software","Covid data","programmatic access","GitHub API key","repositories statistics","global deaths","cases slope"]},o=void 0,p={unversionedId:"sdk/data-available/alternative",id:"sdk/data-available/alternative",title:"Alternative",description:"This documentation page explains the functionalities provided by the Alternative module of the OpenBB SDK, offering programmatic access to commands within the OpenBB Terminal. It covers functions related to open source software (OSS) and Covid data, and provides examples of usage using the Python language.",source:"@site/content/sdk/data-available/alternative.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/alternative",permalink:"/sdk/data-available/alternative",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/alternative.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Alternative",description:"This documentation page explains the functionalities provided by the Alternative module of the OpenBB SDK, offering programmatic access to commands within the OpenBB Terminal. It covers functions related to open source software (OSS) and Covid data, and provides examples of usage using the Python language.",keywords:["OpenBB SDK","Alternative module","open source software","Covid data","programmatic access","GitHub API key","repositories statistics","global deaths","cases slope"]},sidebar:"tutorialSidebar",previous:{title:"Portfolio Optimization",permalink:"/sdk/data-available/portfolio/po"},next:{title:"Econometrics",permalink:"/sdk/data-available/econometrics"}},d={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"OSS",id:"oss",level:3},{value:"Covid",id:"covid",level:3},{value:"Examples - OSS",id:"examples---oss",level:2},{value:"alt.oss.top",id:"altosstop",level:3},{value:"alt.oss.summary",id:"altosssummary",level:3},{value:"Examples - Covid",id:"examples---covid",level:2},{value:"alt.covid.global_deaths",id:"altcovidglobal_deaths",level:3},{value:"alt.covid.slopes",id:"altcovidslopes",level:3}],s={toc:m},k="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"Alternative - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The Alternative module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.alt")),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"\u200b\nThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n")),(0,n.kt)("p",null,"A brief description below highlights the main Functions and Modules available in the Alternative SDK"),(0,n.kt)("h3",{id:"oss"},"OSS"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.top"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get top repositories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.search"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Search repositories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.history"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Display a repo star history")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.ross"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Startups from ross index")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.github_data"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get repository stats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.oss.summary"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get repository summary")))),(0,n.kt)("h3",{id:"covid"},"Covid"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.global_deaths"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"historical deaths for given country")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.slopes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Load cases and find slope over period")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.stat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Show historical cases and deaths by country")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.global_cases"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"historical cases for given country")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.alt.covid.ov"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"overview historical cases and deaths by country")))),(0,n.kt)("p",null,"Alternatively you can print the contents of the Alternative SDK with:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.alt.covid)\nhelp(openbb.alt.oss)\n")),(0,n.kt)("h2",{id:"examples---oss"},"Examples - OSS"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To use some of the OSS SDK commands you will need a GitHub API key - you can get one ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"here"))),(0,n.kt)("h3",{id:"altosstop"},"alt.oss.top"),(0,n.kt)("p",null,"\u200b\nThe alt.oss.top SDK command lets you display top repositories - You can pass different parameters like ",(0,n.kt)("inlineCode",{parentName:"p"},"sortby")," ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"limit")," to enhance the output.\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"summary = pd.DataFrame.from_dict(openbb.alt.oss.top(sortby='stars', categories='finance', limit=10))\nprint(summary[['full_name', 'open_issues', 'stargazers_count']])\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"full_name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"open_issues"),(0,n.kt)("th",{parentName:"tr",align:"right"},"stargazers_count"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vnpy/vnpy"),(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19487")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OpenBB-finance/OpenBBTerminal"),(0,n.kt)("td",{parentName:"tr",align:"center"},"149"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17645")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"plotly/dash"),(0,n.kt)("td",{parentName:"tr",align:"center"},"707"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17645")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"waditu/tushare"),(0,n.kt)("td",{parentName:"tr",align:"center"},"556"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11829")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"wilsonfreitas/awesome-quant"),(0,n.kt)("td",{parentName:"tr",align:"center"},"9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10874")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"microsoft/qlib"),(0,n.kt)("td",{parentName:"tr",align:"center"},"232"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9926")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"firefly-iii/firefly-iii"),(0,n.kt)("td",{parentName:"tr",align:"center"},"103"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9228")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ranaroussi/yfinance"),(0,n.kt)("td",{parentName:"tr",align:"center"},"441"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7938")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mrjbq7/ta-lib"),(0,n.kt)("td",{parentName:"tr",align:"center"},"181"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7157")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"QuantConnect/Lean"),(0,n.kt)("td",{parentName:"tr",align:"center"},"417"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6773")))),(0,n.kt)("h3",{id:"altosssummary"},"alt.oss.summary"),(0,n.kt)("p",null,"The alt.oss.summary SDK command gets you some info on a reposity - You just pass the repo path and can see all kinds of interesting information."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'summary = pd.DataFrame.from_dict(openbb.alt.oss.summary(repo="openbb-finance/openbbterminal"))\nprint(summary)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("td",{parentName:"tr",align:"right"},"OpenBBTerminal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Owner"),(0,n.kt)("td",{parentName:"tr",align:"right"},"OpenBB-finance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Creation Date"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2020-12-20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Last Update"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2022-11-17")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Topics"),(0,n.kt)("td",{parentName:"tr",align:"right"},"artificial-intelligence, crypto, cryptocurrenc...")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Stars"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17643")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Forks"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1849")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Open Issues"),(0,n.kt)("td",{parentName:"tr",align:"right"},"152")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Language"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Python")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"License"),(0,n.kt)("td",{parentName:"tr",align:"right"},"MIT License")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Releases"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Last Release Downloads"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10201")))),(0,n.kt)("p",null,"\u200b"),(0,n.kt)("h2",{id:"examples---covid"},"Examples - Covid"),(0,n.kt)("h3",{id:"altcovidglobal_deaths"},"alt.covid.global_deaths"),(0,n.kt)("p",null,"The global_deaths command lets you check quickly the global deaths for any ",(0,n.kt)("inlineCode",{parentName:"p"},"country"),"\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'global_deaths = pd.DataFrame.from_dict(openbb.alt.covid.global_deaths(country="US"))\nprint(global_deaths)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"US"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-24"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-26"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"...")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-40.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"216.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"387.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"825.0")))),(0,n.kt)("h3",{id:"altcovidslopes"},"alt.covid.slopes"),(0,n.kt)("p",null,"The slopes command lets you check the slopes per country"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"covid_slopes = pd.DataFrame.from_dict(openbb.alt.covid.slopes())\nprint(covid_slopes)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Country"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Slope"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Japan"),(0,n.kt)("td",{parentName:"tr",align:"right"},"52199.941713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Korea, South"),(0,n.kt)("td",{parentName:"tr",align:"right"},"42252.945717")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Germany"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40376.811123")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"US"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38365.586207")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Taiwan*"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28677.574861")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"France"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24898.053393")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Italy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20608.297664")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Greece"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7841.223359")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Australia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6222.661846")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Russia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5837.264739")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Chile"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5792.311457")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Brazil"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5605.621802")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"United Kingdom"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4755.022692")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Singapore"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3867.323471")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Switzerland"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3393.054950")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Malaysia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3154.148387")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"...")))),(0,n.kt)("p",null,"You can pass ",(0,n.kt)("inlineCode",{parentName:"p"},"days_back")," ",(0,n.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ascend")," to further drill down in your data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"covid_slopes_params = pd.DataFrame.from_dict(\n    openbb.alt.covid.slopes(days_back=30, limit=10, ascend=True)\n)\nprint(covid_slopes_params)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Country"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Slope"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Colombia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-9917.200222")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Iran"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-4000.273415")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Slovakia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-3553.934372")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Poland"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-563.439600")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Lebanon"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-364.833815")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bangladesh"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-175.475640")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Albania"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-96.862736")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bulgaria"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-39.990656")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Turkey"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-31.636263")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Belarus"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-21.939043")))))}g.isMDXComponent=!0}}]);