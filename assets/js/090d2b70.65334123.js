"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57663],{99475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(74848),n=r(28453),i=r(94331);const s={title:"METRICS",description:"Learn about key metrics for a given company using the `obb.equity.fundamental.metrics` Python function. This API endpoint provides data such as revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Explore the available parameters and returned data to analyze financial performance. Full documentation and usage examples available.",keywords:["key metrics","python function","documentation","API","parameters","returns","data","symbol","period","limit","provider","with_ttm","revenue per share","net income per share","operating cash flow per share","free cash flow per share","cash per share","book value per share","tangible book value per share","shareholders equity per share","interest debt per share","market capitalization","enterprise value","price-to-earnings ratio","price-to-sales ratio","price-to-operating cash flow ratio","price-to-free cash flow ratio","price-to-book ratio","price-to-tangible book ratio","earnings yield","free cash flow yield","debt-to-equity ratio","debt-to-assets ratio","net debt-to-EBITDA ratio","current ratio","interest coverage","income quality","dividend yield","payout ratio","sales general and administrative expenses-to-revenue ratio","research and development expenses-to-revenue ratio","intangibles-to-total assets ratio","capital expenditures-to-operating cash flow ratio","capital expenditures-to-revenue ratio","capital expenditures-to-depreciation ratio","stock-based compensation-to-revenue ratio","Graham number","return on invested capital","return on tangible assets","Graham net-net working capital","working capital","tangible asset value","net current asset value","invested capital","average receivables","average payables","average inventory","days sales outstanding","days payables outstanding","days of inventory on hand","receivables turnover","payables turnover","inventory turnover","return on equity","capital expenditures per share","calendar year"]},o=void 0,l={id:"excel/reference/equity/fundamental/metrics",title:"METRICS",description:"Learn about key metrics for a given company using the `obb.equity.fundamental.metrics` Python function. This API endpoint provides data such as revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Explore the available parameters and returned data to analyze financial performance. Full documentation and usage examples available.",source:"@site/content/excel/reference/equity/fundamental/metrics.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/metrics",permalink:"/excel/reference/equity/fundamental/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/metrics.md",tags:[],version:"current",frontMatter:{title:"METRICS",description:"Learn about key metrics for a given company using the `obb.equity.fundamental.metrics` Python function. This API endpoint provides data such as revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Explore the available parameters and returned data to analyze financial performance. Full documentation and usage examples available.",keywords:["key metrics","python function","documentation","API","parameters","returns","data","symbol","period","limit","provider","with_ttm","revenue per share","net income per share","operating cash flow per share","free cash flow per share","cash per share","book value per share","tangible book value per share","shareholders equity per share","interest debt per share","market capitalization","enterprise value","price-to-earnings ratio","price-to-sales ratio","price-to-operating cash flow ratio","price-to-free cash flow ratio","price-to-book ratio","price-to-tangible book ratio","earnings yield","free cash flow yield","debt-to-equity ratio","debt-to-assets ratio","net debt-to-EBITDA ratio","current ratio","interest coverage","income quality","dividend yield","payout ratio","sales general and administrative expenses-to-revenue ratio","research and development expenses-to-revenue ratio","intangibles-to-total assets ratio","capital expenditures-to-operating cash flow ratio","capital expenditures-to-revenue ratio","capital expenditures-to-depreciation ratio","stock-based compensation-to-revenue ratio","Graham number","return on invested capital","return on tangible assets","Graham net-net working capital","working capital","tangible asset value","net current asset value","invested capital","average receivables","average payables","average inventory","days sales outstanding","days payables outstanding","days of inventory on hand","receivables turnover","payables turnover","inventory turnover","return on equity","capital expenditures per share","calendar year"]},sidebar:"tutorialSidebar",previous:{title:"MANAGEMENT_COMPENSATION",permalink:"/excel/reference/equity/fundamental/management_compensation"},next:{title:"MULTIPLES",permalink:"/excel/reference/equity/fundamental/multiples"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{title:"EQUITY.FUNDAMENTAL.METRICS | OpenBB Add-in for Excel Docs"}),"\n",(0,a.jsx)(t.p,{children:"Get fundamental metrics for a given company."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.METRICS(symbol,[period],[limit],[provider],[with_ttm])\n"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.METRICS("AAPL",,,"fmp")\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.METRICS("AAPL","annual",100,"intrinio")\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"symbol"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Text"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Symbol to get data for. Multiple comma separated items allowed for provider(s): fmp, intrinio."})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"True"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"period"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"Time period of the data to return."}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"limit"}),(0,a.jsx)(t.td,{children:"Number"}),(0,a.jsx)(t.td,{children:"The number of data entries to return."}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"provider"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"Options: fmp, intrinio, defaults to fmp."}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"with_ttm"}),(0,a.jsx)(t.td,{children:"Boolean"}),(0,a.jsx)(t.td,{children:"Include trailing twelve months (TTM) data. (provider: fmp)"}),(0,a.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,a.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var a=r(96540);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);