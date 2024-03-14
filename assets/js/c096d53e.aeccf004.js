"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"v3.2.4",version:"3.2.4",date:new Date("2023-11-09T00:00:00.000Z"),description:"v3.2.4",sidebar_position:93},o=void 0,l={unversionedId:"terminal/changelog/version3_2_4",id:"terminal/changelog/version3_2_4",title:"v3.2.4",description:"v3.2.4",source:"@site/content/terminal/changelog/version3_2_4.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version3_2_4",permalink:"/terminal/changelog/version3_2_4",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version3_2_4.mdx",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:93,frontMatter:{title:"v3.2.4",version:"3.2.4",date:"2023-11-09T00:00:00.000Z",description:"v3.2.4",sidebar_position:93},sidebar:"tutorialSidebar",previous:{title:"Current - v3.2.5",permalink:"/terminal/changelog/version3_2_5"},next:{title:"v3.2.3",permalink:"/terminal/changelog/version3_2_3"}},s={},p=[{value:"Thank you and welcome to our new contributors \ud83d\udd25",id:"thank-you-and-welcome-to-our-new-contributors-",level:2},{value:"What&#39;s new \ud83c\udf89",id:"whats-new-",level:2},{value:"What&#39;s changed \ud83d\ude80",id:"whats-changed-",level:2},{value:"Links \ud83e\udd8b",id:"links-",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"thank-you-and-welcome-to-our-new-contributors-"},"Thank you and welcome to our new contributors \ud83d\udd25"),(0,r.kt)("p",null,"@AdiSai, @AdwaitSalankar, @FarukhS52, @abhishek-amar, @bimbolimbo, @fadilparves, @joshuabuildsthings, @maxxsh, @polooner, @professssor, @ramazanguvenc and @ssahaxd"),(0,r.kt)("h2",{id:"whats-new-"},"What's new \ud83c\udf89"),(0,r.kt)("p",null,"We have been pushing away at the OpenBB Platform for our V4 release.  This 3.2 patch comes with some terminal bug fixes and a dependency pin for pip installation/"),(0,r.kt)("h2",{id:"whats-changed-"},"What's changed \ud83d\ude80"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"improved market cap value extraction (#5169) @bimbolimbo"),(0,r.kt)("li",{parentName:"ul"},"Clarified stocks/ta empty recom object message (#5468) @polooner"),(0,r.kt)("li",{parentName:"ul"},"Pin openai (#5685) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"hotfix/stock-screener-sort:  Fix for #5671 - sort by ",(0,r.kt)("inlineCode",{parentName:"li"},"fwdp/e")," in Stock Screener (#5675) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"hotfix/fix-gov-histcont: Fix #5650 - /stocks/gov/histcont (#5676) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/reports model render report sanitize inputs (#5669) @joshuabuildsthings"),(0,r.kt)("li",{parentName:"ul"},"#5633 adding comma every 1000 (#5652) @ramazanguvenc"),(0,r.kt)("li",{parentName:"ul"},"improve docs structure for V4 (#5586) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"fix front matter (#5667) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Update settings.md (#5665) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Improve Pro documentation further (#5641) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Fix the redirect for intro to the correct url for docs (#5658) @fadilparves"),(0,r.kt)("li",{parentName:"ul"},"fix docs (#5646) @andrewkenreich"),(0,r.kt)("li",{parentName:"ul"},"Add light blue banner, blue when clicking sidebar + fix link in docusaurus.config.js (#5627) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Docs/terminalpro and improvement (#5622) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Patch 1 (#5604) @maxxsh"),(0,r.kt)("li",{parentName:"ul"},"Fix typo errors in CONTRIBUTING.md (#5623) @FarukhS52"),(0,r.kt)("li",{parentName:"ul"},"Change Ultima paragraph (#5624) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"FIX #5600 Updated the Twitter logo to X logo (#5601) @professssor"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/econometrics export filename fix (#5508) @ssahaxd"),(0,r.kt)("li",{parentName:"ul"},"Update README.md with new demo (#5598) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"fix: A value is trying to be set on a copy of a slice from a DataFrame (#5591) @abhishek-amar"),(0,r.kt)("li",{parentName:"ul"},"Updating Ultima urls (#5587) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Add columns to ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/search")," (#5565) @AdwaitSalankar"),(0,r.kt)("li",{parentName:"ul"},"added platform API integration test to Nightly build (#5571) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"fix: Modify 'load' behavior to append data to existing sheet (#5503) @ssahaxd"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/ultima improvements (#5553) @AdiSai"),(0,r.kt)("li",{parentName:"ul"},"add new bot command autopost docs (#5530) @andrewkenreich"),(0,r.kt)("li",{parentName:"ul"},"Updating showcase page (#5543) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Ultima Insights description update (#5541) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Add the v4 tests to default branch (#5536) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Release/3.2.3 (#5529) @jmaslek")),(0,r.kt)("p",null,"We are proud of our community contributors and staunch supporters of open-source ecosystems.\nHelp us promote our community by tagging ",(0,r.kt)("inlineCode",{parentName:"p"},"@openbb_finance")," on Twitter with a link to your pull request,\nand join our Discord server to chat about your contribution! We want to hear about your experience!"),(0,r.kt)("h3",{id:"links-"},"Links \ud83e\udd8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/"},"Website"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/openbb_finance"},"Twitter"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/openbb-finance"},"Linkedin"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.instagram.com/openbb.finance/"},"Instagram"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/openbb/"},"Reddit"),", ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/xPHTuHCmuV"},"Discord")))}m.isMDXComponent=!0}}]);