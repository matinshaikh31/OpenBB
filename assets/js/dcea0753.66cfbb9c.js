"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25553],{60224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(74848),i=r(28453),a=r(94331);const o={title:"RATIOS",description:"Learn about financial ratios for a given company over time. Explore various equity ratios, such as current ratio, quick ratio, and cash conversion cycle. Understand key profitability metrics like return on equity and profit margin. Analyze debt ratios, inventory turnover, and operating and free cash flows. Evaluate the price to earnings ratio and dividend yield.",keywords:["financial ratios","company ratios","ratios over time","equity ratios","current ratio","quick ratio","cash conversion cycle","return on equity","profit margin","debt ratio","inventory turnover","operating cash flow","free cash flow","price to earnings ratio","dividend yield"]},s=void 0,d={id:"excel/reference/equity/fundamental/ratios",title:"RATIOS",description:"Learn about financial ratios for a given company over time. Explore various equity ratios, such as current ratio, quick ratio, and cash conversion cycle. Understand key profitability metrics like return on equity and profit margin. Analyze debt ratios, inventory turnover, and operating and free cash flows. Evaluate the price to earnings ratio and dividend yield.",source:"@site/content/excel/reference/equity/fundamental/ratios.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/ratios",permalink:"/excel/reference/equity/fundamental/ratios",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/ratios.md",tags:[],version:"current",frontMatter:{title:"RATIOS",description:"Learn about financial ratios for a given company over time. Explore various equity ratios, such as current ratio, quick ratio, and cash conversion cycle. Understand key profitability metrics like return on equity and profit margin. Analyze debt ratios, inventory turnover, and operating and free cash flows. Evaluate the price to earnings ratio and dividend yield.",keywords:["financial ratios","company ratios","ratios over time","equity ratios","current ratio","quick ratio","cash conversion cycle","return on equity","profit margin","debt ratio","inventory turnover","operating cash flow","free cash flow","price to earnings ratio","dividend yield"]},sidebar:"tutorialSidebar",previous:{title:"OVERVIEW",permalink:"/excel/reference/equity/fundamental/overview"},next:{title:"REPORTED_FINANCIALS",permalink:"/excel/reference/equity/fundamental/reported_financials"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"EQUITY.FUNDAMENTAL.RATIOS | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get an extensive set of financial and accounting ratios for a given company over time."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.RATIOS(symbol,[period],[limit],[provider],[with_ttm],[fiscal_year])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.RATIOS("AAPL",,,"fmp")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.RATIOS("AAPL","annual",12,"intrinio")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for. Multiple comma separated items allowed for provider(s): fmp."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Options: fmp, intrinio, defaults to fmp."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"with_ttm"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"Include trailing twelve months (TTM) data. (provider: fmp)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The specific fiscal year.  Reports do not go beyond 2008. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),i=r(74848);function a(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(96540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);