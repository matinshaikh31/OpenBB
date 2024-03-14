"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,k=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"v3.0.1",version:"3.0.1",date:new Date("2023-05-15T00:00:00.000Z"),description:"v3.0.1",sidebar_position:99},o=void 0,l={unversionedId:"terminal/changelog/version3_0_1",id:"terminal/changelog/version3_0_1",title:"v3.0.1",description:"v3.0.1",source:"@site/content/terminal/changelog/version3_0_1.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version3_0_1",permalink:"/terminal/changelog/version3_0_1",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version3_0_1.mdx",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:99,frontMatter:{title:"v3.0.1",version:"3.0.1",date:"2023-05-15T00:00:00.000Z",description:"v3.0.1",sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"v3.1.0",permalink:"/terminal/changelog/version3_1_0"},next:{title:"v3.0.0",permalink:"/terminal/changelog/version3_0_0"}},s={},m=[{value:"Thank you and welcome to our new contributors \ud83d\udd25",id:"thank-you-and-welcome-to-our-new-contributors-",level:2},{value:"What&#39;s new \ud83c\udf89",id:"whats-new-",level:2},{value:"What&#39;s changed \ud83d\ude80",id:"whats-changed-",level:2}],d={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"thank-you-and-welcome-to-our-new-contributors-"},"Thank you and welcome to our new contributors \ud83d\udd25"),(0,r.kt)("p",null,"@Disorrder, @LOne2three, @marban, @skhan59bbk and @the-praxs"),(0,r.kt)("h2",{id:"whats-new-"},"What's new \ud83c\udf89"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added BizToc news"),(0,r.kt)("li",{parentName:"ul"},"Added GARCH forecast in econometrics"),(0,r.kt)("li",{parentName:"ul"},"Heikin Ashi Candles available using candle --ha"),(0,r.kt)("li",{parentName:"ul"},"Support for multiple tickers in stocks/quote"),(0,r.kt)("li",{parentName:"ul"},"General Bug fixing and enhancements")),(0,r.kt)("h2",{id:"whats-changed-"},"What's changed \ud83d\ude80"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update gamma command in docs (#5021) @andrewkenreich"),(0,r.kt)("li",{parentName:"ul"},"Retire old doc pages (#5012) @piiq"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/ Candle Lines, Tables/Charts Save (",(0,r.kt)("inlineCode",{parentName:"li"},"MacOS"),") (#5019) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Hotfix / Fix ",(0,r.kt)("inlineCode",{parentName:"li"},"reset")," command error force closing terminal (#5017) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Feature/improve posthog logs (#4951) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"feature / Refactor Interactive Charts to React (#4941) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"fix biztoc print on launch (#5004) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"feature/heikin-ashi-candles: Adds a flag for Heikin Ashi Candles on stocks/candle (#4979) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Keyboard hotkey macros to website docs (#5002) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Fix api-key md file in docs (#5001) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"First introduction of news_biztoc \u2014 A new partnership with BizToc.com (#4864) @marban"),(0,r.kt)("li",{parentName:"ul"},"Tables component: Clear filters (#4996) @Disorrder"),(0,r.kt)("li",{parentName:"ul"},"Add linux docker launch command notes (#4999) @piiq"),(0,r.kt)("li",{parentName:"ul"},"Adding GARCH (#4815) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Create KEYBOARD_HOTKEY_MACROS.md (#4986) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Fix windows integration coverage workflow (#4998) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Integration test coverage (#4969) @IgorWounds"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/databento + bugs (#4973) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"[Bug]"," Restores Portfolio Optimization Parameters Template File (#4976) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Fixed equity report (#4991) @the-praxs"),(0,r.kt)("li",{parentName:"ul"},"Removes Instances of Global Pandas Display Setting Being Set in ",(0,r.kt)("inlineCode",{parentName:"li"},"fmp_view")," (#4983) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("inlineCode",{parentName:"li"},"pytrends")," dependency in config files and remove temp workaround (#4989) @the-praxs"),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"date")," format for ",(0,r.kt)("inlineCode",{parentName:"li"},"crypto.dd.twitter")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"crypto.dd.events")," in SDK (#4990) @the-praxs"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/ stocks/fa/dcf (#4992) @IgorWounds"),(0,r.kt)("li",{parentName:"ul"},"hotfix/forecast-export: Fixes Forecast Menu's Export Command. (#4994) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"hotfix/fix-edebt: Patches economy/edebt and updates tests (#4981) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/routine default file overwrite (#4927) @LOne2three"),(0,r.kt)("li",{parentName:"ul"},"Docs/Terminal FAQ: adds libzlma workaround. (#4974) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"search")," command issues (#4845) @the-praxs"),(0,r.kt)("li",{parentName:"ul"},"Updates Terminal Intro Guide for Economy Menu's Recent Changes. (#4967) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Updates SDK Intro Guide for Fundamental Analysis Module's Recent Changes (#4964) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"fixing equity report issue (#4922) @andrewkenreich"),(0,r.kt)("li",{parentName:"ul"},"Fixed column names for ",(0,r.kt)("inlineCode",{parentName:"li"},"economy\\performance")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"economy\\valuation")," (#4968) @the-praxs"),(0,r.kt)("li",{parentName:"ul"},"feat(docs): add math katex support (#4972) @Disorrder"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/kill cov (#4971) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"hotfix/stock-screener-remove-delimiter: Gets rid of commas in Company column. (#4954) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," arg not working for some commands in ",(0,r.kt)("inlineCode",{parentName:"li"},"keys")," menu (#4956) @the-praxs"),(0,r.kt)("li",{parentName:"ul"},"Removing wrong transposition (#4959) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/stocks quote help description: replaces help dialogue description for ",(0,r.kt)("inlineCode",{parentName:"li"},"--ticker"),". (#4953) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"crypto/disc DappRadar update (#4918) @IgorWounds"),(0,r.kt)("li",{parentName:"ul"},'hotfix/docs-api-keys-title - Changes title of page from "Settings & API Keys" to "Setting API Keys" (#4949) @deeleeramone'),(0,r.kt)("li",{parentName:"ul"},"Remove commas from i18n (#4952) @IgorWounds"),(0,r.kt)("li",{parentName:"ul"},"Fix Index not showing for FMP (#4948) @IgorWounds"),(0,r.kt)("li",{parentName:"ul"},"Enhances ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/quote")," to allow for multiple tickers (#4928) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Fix ",(0,r.kt)("inlineCode",{parentName:"li"},"--std")," argument in bbands command (#4866) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/docs Updates Terminal Intro for Options, Creates Terminal Intro for Mutual Funds (#4917) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Correct sentence in the SDK portfolio intro documentation (#4945) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Adds options helper function for DTE, updates SDK trail map to not use yFinance. (#4937) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Adds type to the version on the SystemModel (#4944) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect data display using ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/fa/est")," command (#4940) @the-praxs"),(0,r.kt)("li",{parentName:"ul"},"Adds shroom command and removes old ones (#4246) @jose-donato"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/ tables export (#4924) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Feature / Logging (#4923) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Futures Curve: minor cosmetic improvements  (#4901) @skhan59bbk"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/ Improve setting/loading Streamlit session state variables (#4905) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Remove stocks/disc/cnews command  (#4920) @piiq"),(0,r.kt)("li",{parentName:"ul"},"hofix / sync with main post (#4911) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"hotfix/ fix windows pyinstaller subprocess fail if space in path (#4910) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Increase integration test coverage (#4902) @IgorWounds"),(0,r.kt)("li",{parentName:"ul"},"Release/3.0.0 (#4909) @jmaslek")))}c.isMDXComponent=!0}}]);