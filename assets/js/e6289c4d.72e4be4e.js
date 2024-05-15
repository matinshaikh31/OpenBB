"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1176],{8161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=n(74848),s=n(28453),i=n(94331);const d={title:"FILINGS",description:"Get the most-recent filings submitted to the SEC",keywords:["equity","discovery","filings"]},l=void 0,c={id:"excel/reference/equity/discovery/filings",title:"FILINGS",description:"Get the most-recent filings submitted to the SEC",source:"@site/content/excel/reference/equity/discovery/filings.md",sourceDirName:"excel/reference/equity/discovery",slug:"/excel/reference/equity/discovery/filings",permalink:"/excel/reference/equity/discovery/filings",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/discovery/filings.md",tags:[],version:"current",frontMatter:{title:"FILINGS",description:"Get the most-recent filings submitted to the SEC",keywords:["equity","discovery","filings"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.DISCOVERY",permalink:"/excel/reference/equity/discovery/"},next:{title:"EQUITY.ESTIMATES",permalink:"/excel/reference/equity/estimates/"}},a={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"EQUITY.DISCOVERY.FILINGS | OpenBB Add-in for Excel Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more. SEC filings include Form 10-K, Form 10-Q, Form 8-K, the proxy statement, Forms 3, 4, and 5, Schedule 13, Form 114, Foreign Investment Disclosures and others. The annual 10-K report is required to be filed annually and includes the company's financial statements, management discussion and analysis, and audited financial statements."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.DISCOVERY.FILINGS([start_date],[end_date],[form_type],[limit],[provider],[isDone])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.DISCOVERY.FILINGS(,,,,"fmp")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.DISCOVERY.FILINGS("2023-01-01","2023-12-31",,100,"fmp")\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"form_type"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsxs)(t.td,{children:["Filter by form type. Visit ",(0,r.jsx)(t.a,{href:"https://www.sec.gov/forms",children:"https://www.sec.gov/forms"})," for a list of supported form types."]}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Number"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"Options: fmp, defaults to fmp."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isDone"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Flag for whether or not the filing is done. (provider: fmp)"}),(0,r.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);