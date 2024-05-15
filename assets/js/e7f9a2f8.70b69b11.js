"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56879],{31296:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var n=t(74848),i=t(28453),c=t(94331);const a={title:"SEARCH",description:"Learn how to search for ETFs with parameters like query, provider, exchange code, and more. Retrieve key details about ETFs, including market cap, industry, sector, beta, current price, annual dividend, trading volume, exchange, and country. Find actively trading ETFs and their symbol representation.",keywords:["search for ETFs","ETF search query","ETF provider","ETF exchange code","ETF trading volume","ETF market cap","ETF sector","ETF industry","ETF beta","ETF current price","ETF annual dividend","ETF exchange","ETF country","actively trading ETF"]},d=void 0,s={id:"excel/reference/etf/search",title:"SEARCH",description:"Learn how to search for ETFs with parameters like query, provider, exchange code, and more. Retrieve key details about ETFs, including market cap, industry, sector, beta, current price, annual dividend, trading volume, exchange, and country. Find actively trading ETFs and their symbol representation.",source:"@site/content/excel/reference/etf/search.md",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/search",permalink:"/excel/reference/etf/search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/search.md",tags:[],version:"current",frontMatter:{title:"SEARCH",description:"Learn how to search for ETFs with parameters like query, provider, exchange code, and more. Retrieve key details about ETFs, including market cap, industry, sector, beta, current price, annual dividend, trading volume, exchange, and country. Find actively trading ETFs and their symbol representation.",keywords:["search for ETFs","ETF search query","ETF provider","ETF exchange code","ETF trading volume","ETF market cap","ETF sector","ETF industry","ETF beta","ETF current price","ETF annual dividend","ETF exchange","ETF country","actively trading ETF"]},sidebar:"tutorialSidebar",previous:{title:"PRICE_PERFORMANCE",permalink:"/excel/reference/etf/price_performance"},next:{title:"SECTORS",permalink:"/excel/reference/etf/sectors"}},l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function h(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{title:"ETF.SEARCH | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(r.p,{children:"Search for ETFs.  An empty query returns the full list of ETFs from the provider."}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:"=OBB.ETF.SEARCH([query],[provider],[exchange],[is_active])\n"})}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:'=OBB.ETF.SEARCH(,"fmp")\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:'=OBB.ETF.SEARCH("commercial real estate","fmp")\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"Options: fmp, intrinio, defaults to fmp."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exchange"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"The exchange code the ETF trades on. (provider: fmp); Target a specific exchange by providing the MIC code. (provider: intrinio)"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"is_active"}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{children:"Whether the ETF is actively trading. (provider: fmp)"}),(0,n.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(r.hr,{})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>c});t(96540);var n=t(5260),i=t(74848);function c(e){let{title:r}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>d});var n=t(96540);const i={},c=n.createContext(i);function a(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);