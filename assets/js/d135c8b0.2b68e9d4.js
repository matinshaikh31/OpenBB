"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56885],{58002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=t(74848),i=t(28453),s=t(94331);const l={title:"REPORTED_FINANCIALS"},c=void 0,d={id:"excel/reference/equity/fundamental/reported_financials",title:"REPORTED_FINANCIALS",description:"Get financial statements as reported by the company.",source:"@site/content/excel/reference/equity/fundamental/reported_financials.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/reported_financials",permalink:"/excel/reference/equity/fundamental/reported_financials",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/reported_financials.md",tags:[],version:"current",frontMatter:{title:"REPORTED_FINANCIALS"},sidebar:"tutorialSidebar",previous:{title:"RATIOS",permalink:"/excel/reference/equity/fundamental/ratios"},next:{title:"REVENUE_PER_GEOGRAPHY",permalink:"/excel/reference/equity/fundamental/revenue_per_geography"}},a={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function h(e){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"EQUITY.FUNDAMENTAL.REPORTED_FINANCIALS | OpenBB Add-in for Excel Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get financial statements as reported by the company."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.REPORTED_FINANCIALS(symbol,[period],[statement_type],[limit],[provider],[fiscal_year])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.REPORTED_FINANCIALS("AAPL",,,,"intrinio")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.REPORTED_FINANCIALS("AAPL","annual","balance",10,"intrinio")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.REPORTED_FINANCIALS("AAPL",,"income",,"intrinio")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.REPORTED_FINANCIALS("AAPL",,"cash",,"intrinio")\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"symbol"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Text"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Symbol to get data for."})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"True"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"period"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Time period of the data to return."}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statement_type"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"The type of financial statement - i.e, balance, income, cash."}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"limit"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"The number of data entries to return. Although the response object contains multiple results, because of the variance in the fields, year-to-year and quarter-to-quarter, it is recommended to view results in small chunks."}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"provider"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Options: intrinio, defaults to intrinio."}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fiscal_year"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"The specific fiscal year.  Reports do not go beyond 2008. (provider: intrinio)"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(5260),i=t(74848);function s(e){let{title:n}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);