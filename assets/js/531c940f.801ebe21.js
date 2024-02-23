"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(_,o(o({ref:t},p),{},{components:r})):n.createElement(_,o({ref:t},p))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},92367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const o={title:"technical",description:"This page provides a comprehensive guide to the 'technical' functionality of our platform. It explains how to use presets to filter and print technical data of companies, and describes the functions of different parameters.",keywords:["technical data","stock filtering","stock analytics","financial tools","preset filters","stock parameters","data sorting","financial data analysis"]},s=void 0,i={unversionedId:"terminal/reference/stocks/screener/technical",id:"terminal/reference/stocks/screener/technical",title:"technical",description:"This page provides a comprehensive guide to the 'technical' functionality of our platform. It explains how to use presets to filter and print technical data of companies, and describes the functions of different parameters.",source:"@site/content/terminal/reference/stocks/screener/technical.md",sourceDirName:"terminal/reference/stocks/screener",slug:"/terminal/reference/stocks/screener/technical",permalink:"/terminal/reference/stocks/screener/technical",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/technical.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708675444,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"technical",description:"This page provides a comprehensive guide to the 'technical' functionality of our platform. It explains how to use presets to filter and print technical data of companies, and describes the functions of different parameters.",keywords:["technical data","stock filtering","stock analytics","financial tools","preset filters","stock parameters","data sorting","financial data analysis"]},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/terminal/reference/stocks/screener/set"},next:{title:"valuation",permalink:"/terminal/reference/stocks/screener/valuation"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /screener/technical - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Prints technical data of the companies that meet the pre-set filtering."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"technical [-p Desired preset.] [-l LIMIT] [-r] [-s {ticker,beta,atr,sma20,sma50,sma200,52whigh,52wlow,rsi,price,change,fromopen,gap,volume}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"preset"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --preset"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,a.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"top_performers_healthcare, oversold_under_3dol, short_squeeze_scan, sp500_industrials_sector, sexy_year, undervalue, oversold_under_5dol, sp500_consumer_defensive_sector, cheap_oversold, rosenwald, top_performers_all, recent_growth_and_support, unusual_volume, golden_cross_penny, break_out_stocks, modified_neff, potential_reversals, under_15dol_stocks, cheap_bottom_dividend, sdk_guide_preset, sp500_consumer_cyclical_sector, sp500_financial_sector, cheap_dividend, death_cross, value_stocks, heavy_inst_ins, sp500_basic_materials_sector, sp500_healthcare_sector, buffett_like, oversold, 5pct_above_low, sp500_real_estate_sector, simplistic_momentum_scanner_under_7dol, sp500_utilities_sector, continued_momentum_scan, sp500_energy_sector, rosenwald_gtfo, golden_cross, sp500_technology_sector, channel_up_and_low_debt_and_sma_50and200, sp500_communication_services_sector, top_performers_tech, analyst_strong_buy, modified_dreman, stocks_strong_support_levels, growth_stocks, bull_runs_over_10pct, djia_components, weak_support_and_top_performers, high_vol_and_low_debt, news_scanner, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,a.kt)("td",{parentName:"tr",align:null},"rsi"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ticker, beta, atr, sma20, sma50, sma200, 52whigh, 52wlow, rsi, price, change, fromopen, gap, volume")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);