"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"v3.2.0",version:"3.2.0",date:new Date("2023-07-21T00:00:00.000Z"),description:"Current - v3.2.0",sidebar_position:96},i=void 0,l={unversionedId:"terminal/changelog/version3_2_0",id:"terminal/changelog/version3_2_0",title:"v3.2.0",description:"Current - v3.2.0",source:"@site/content/terminal/changelog/version3_2_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version3_2_0",permalink:"/terminal/changelog/version3_2_0",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version3_2_0.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704905987,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:96,frontMatter:{title:"v3.2.0",version:"3.2.0",date:"2023-07-21T00:00:00.000Z",description:"Current - v3.2.0",sidebar_position:96},sidebar:"tutorialSidebar",previous:{title:"v3.2.1",permalink:"/terminal/changelog/version3_2_1"},next:{title:"v3.1.0",permalink:"/terminal/changelog/version3_1_0"}},s={},p=[{value:"Thank you and welcome to our new contributors \ud83d\udd25",id:"thank-you-and-welcome-to-our-new-contributors-",level:2},{value:"What&#39;s new \ud83c\udf89",id:"whats-new-",level:2},{value:"What&#39;s changed \ud83d\ude80",id:"whats-changed-",level:2},{value:"Links \ud83e\udd8b",id:"links-",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"thank-you-and-welcome-to-our-new-contributors-"},"Thank you and welcome to our new contributors \ud83d\udd25"),(0,r.kt)("p",null,"@harshvardhansharma"),(0,r.kt)("h2",{id:"whats-new-"},"What's new \ud83c\udf89"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New hold functionality for overlaying charts"),(0,r.kt)("li",{parentName:"ul"},"Added the USD Liquidity Index to the economy menu"),(0,r.kt)("li",{parentName:"ul"},"Edited economy/treasury data source"),(0,r.kt)("li",{parentName:"ul"},"Deprecated stocks/ta/rsp"),(0,r.kt)("li",{parentName:"ul"},"Deprecated economy/rtps"),(0,r.kt)("li",{parentName:"ul"},"Updated some older pinned dependencies"),(0,r.kt)("li",{parentName:"ul"},"General bug fixes and enhancements")),(0,r.kt)("h2",{id:"whats-changed-"},"What's changed \ud83d\ude80"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add public routines flag (#5236) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Release Cleanup (#5233) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/ improve tables/charts (#5228) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Adds a matlab like ",(0,r.kt)("inlineCode",{parentName:"li"},"hold on")," to plot on same axis (#5173) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Update routine tags (#5221) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Manually triggered unit test (#5229) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"adds note indicating V3.1.0 is required for loops and keywords (#5219) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Update treasury command to get directly from fed (#5215) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"hotfix / improve autoscaling/dynamic loading, fix forex candle charts, equity reports (#5183) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Close 2 stocks fa issues with polygon (#5217) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Fix prompt typo (#5192) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"hotfix / Moving Averages Export (#5214) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Get oanda back to forex sources to fix the menu (#5204) @piiq"),(0,r.kt)("li",{parentName:"ul"},"Make some improvements to askobb (#5205) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Remove ",(0,r.kt)("inlineCode",{parentName:"li"},"economy/rtps")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/ta/rsp")," (#5181) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"[Update]"," bump langchain and llama (#5202) @martinb-bb"),(0,r.kt)("li",{parentName:"ul"},"Hotfix / Switch ",(0,r.kt)("inlineCode",{parentName:"li"},"download_plotly_js")," to run in thread (#5203) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"feature/usd-liquidity-index: Adds USD Liquidity Index to Economy menu (#5174) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"hotfix/fix-stocks-screener: Fixes the random column header artifacts (#5199) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"feature/examples-optionsChains: Add Notebook example: optionsChains (#5165) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"hotfix/fix-intrinio-load:  (#5188) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"hotfix/economy-index-list: Adds Six Indices to the ",(0,r.kt)("inlineCode",{parentName:"li"},"economy/index")," List (#5185) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"hotfix/docs-sdk-forex: Fixes #5194 (#5196) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"hotfix / Save session on oauth login (#5195) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Adds Topledger on-chain data (#5029) @harshvardhansharma"),(0,r.kt)("li",{parentName:"ul"},"hotfix / TA ma's empty if not enough data for window (#5180) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"hotfix/fix-options-skew: Fixes columns not subtracting (#5170) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Release/3.1.0 (#5168) @jmaslek")),(0,r.kt)("p",null,"We are proud of our community contributors and staunch supporters of open-source ecosystems.\nHelp us promote our community by tagging ",(0,r.kt)("inlineCode",{parentName:"p"},"@openbb_finance")," on Twitter with a link to your pull request,\nand join our Discord server to chat about your contribution! We want to hear about your experience!"),(0,r.kt)("h3",{id:"links-"},"Links \ud83e\udd8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/"},"Website"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/openbb_finance"},"Twitter"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/openbb-finance"},"Linkedin"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.instagram.com/openbb.finance/"},"Instagram"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/openbb/"},"Reddit"),", ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/xPHTuHCmuV"},"Discord")))}m.isMDXComponent=!0}}]);