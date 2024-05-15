"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41481],{67159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=r(74848),s=r(28453),c=r(94331);const i={title:"EQUITY_EXPOSURE"},l=void 0,d={id:"excel/reference/etf/equity_exposure",title:"EQUITY_EXPOSURE",description:"Get the exposure to ETFs for a specific stock.",source:"@site/content/excel/reference/etf/equity_exposure.md",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/equity_exposure",permalink:"/excel/reference/etf/equity_exposure",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/equity_exposure.md",tags:[],version:"current",frontMatter:{title:"EQUITY_EXPOSURE"},sidebar:"tutorialSidebar",previous:{title:"COUNTRIES",permalink:"/excel/reference/etf/countries"},next:{title:"HISTORICAL",permalink:"/excel/reference/etf/historical"}},o={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{title:"ETF.EQUITY_EXPOSURE | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the exposure to ETFs for a specific stock."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.ETF.EQUITY_EXPOSURE(symbol,[provider])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.ETF.EQUITY_EXPOSURE("MSFT","fmp")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.ETF.EQUITY_EXPOSURE("MSFT,AAPL","fmp")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for. (Stock) Multiple comma separated items allowed for provider(s): fmp."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Options: fmp, defaults to fmp."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var n=r(5260),s=r(74848);function c(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},c=n.createContext(s);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);