"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=l(r),p=a,u=s["".concat(c,".").concat(p)]||s[p]||f[p]||i;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[s]="string"==typeof e?e:a,o[1]=m;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),a=r(86010),i=r(67294),o=r(16550),m=r(48334);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:d}=(0,o.TH)(),s=d.replace(/\/v\d+/,""),f=!s.includes("/reference")&&!s.includes("/widgets-library/")&&!s.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":s.startsWith("/terminal")||s.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":s.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":s.startsWith("/sdk")||s.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":s.startsWith("/excel"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/pro")||s.startsWith("/excel")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),f&&i.createElement(m.Z,{className:"ml-auto mr-4"})),c?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},20339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(26515);const o={},m="fundamental",c={unversionedId:"platform/reference/equity/fundamental/index",id:"platform/reference/equity/fundamental/index",title:"fundamental",description:"Commands",source:"@site/content/platform/reference/equity/fundamental/index.mdx",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/",permalink:"/platform/reference/equity/fundamental/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/fundamental/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"peers",permalink:"/platform/reference/equity/compare/peers"},next:{title:"balance",permalink:"/platform/reference/equity/fundamental/balance"}},l={},d=[{value:"Commands",id:"commands",level:3}],s={toc:d},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fundamental"},"fundamental"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Balance",description:"Get the balance sheet for a given company",url:"/platform/reference/equity/fundamental/balance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Balance Growth",description:"Get the growth of a company's balance sheet items over time",url:"/platform/reference/equity/fundamental/balance_growth",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cash",description:"Get the cash flow statement for a given company",url:"/platform/reference/equity/fundamental/cash",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cash Growth",description:"Get the growth of a company's cash flow statement items over time",url:"/platform/reference/equity/fundamental/cash_growth",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Dividends",description:"Get historical dividend data for a given company",url:"/platform/reference/equity/fundamental/dividends",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Employee Count",description:"Get historical employee count data for a given company",url:"/platform/reference/equity/fundamental/employee_count",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Filings",description:"Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more",url:"/platform/reference/equity/fundamental/filings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Historical Attributes",description:"Get the historical values of a data tag from Intrinio",url:"/platform/reference/equity/fundamental/historical_attributes",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Historical Eps",description:"Get historical earnings per share data for a given company",url:"/platform/reference/equity/fundamental/historical_eps",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Historical Splits",description:"Get historical stock splits for a given company",url:"/platform/reference/equity/fundamental/historical_splits",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Income",description:"Get the income statement for a given company",url:"/platform/reference/equity/fundamental/income",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Income Growth",description:"Get the growth of a company's income statement items over time",url:"/platform/reference/equity/fundamental/income_growth",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Latest Attributes",description:"Get the latest value of a data tag from Intrinio",url:"/platform/reference/equity/fundamental/latest_attributes",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Management",description:"Get executive management team data for a given company",url:"/platform/reference/equity/fundamental/management",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Management Compensation",description:"Get executive management team compensation for a given company over time",url:"/platform/reference/equity/fundamental/management_compensation",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Metrics",description:"Get fundamental metrics for a given company",url:"/platform/reference/equity/fundamental/metrics",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Multiples",description:"Get equity valuation multiples for a given company",url:"/platform/reference/equity/fundamental/multiples",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Overview",description:"Get company general business and stock data for a given company",url:"/platform/reference/equity/fundamental/overview",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ratios",description:"Get an extensive set of financial and accounting ratios for a given company over time",url:"/platform/reference/equity/fundamental/ratios",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Reported Financials",description:"Get financial statements as reported by the company",url:"/platform/reference/equity/fundamental/reported_financials",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Revenue Per Geography",description:"Get the revenue geographic breakdown for a given company over time",url:"/platform/reference/equity/fundamental/revenue_per_geography",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Revenue Per Segment",description:"Get the revenue breakdown by business segment for a given company over time",url:"/platform/reference/equity/fundamental/revenue_per_segment",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Search Attributes",description:"Search Intrinio data tags to search in latest or historical attributes",url:"/platform/reference/equity/fundamental/search_attributes",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Trailing Dividend Yield",description:"Get the 1 year trailing dividend yield for a given company over time",url:"/platform/reference/equity/fundamental/trailing_dividend_yield",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Transcript",description:"Get earnings call transcripts for a given company",url:"/platform/reference/equity/fundamental/transcript",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);