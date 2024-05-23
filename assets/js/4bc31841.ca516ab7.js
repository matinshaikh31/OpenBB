"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84837],{34674:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(74848),o=t(28453),i=t(94331);const s={title:"sharpe",description:"Get sharpe ratio for a portfolio and benchmark using the OpenBB Terminal. This page provides a detailed description of how to use the Sharpe ratio function with code examples in Python.",keywords:["Sharpe ratio","portfolio","PortfolioEngine","risk_free_rate","openbb.portfolio.metric.sharpe","financial metrics","OpenBB finance","portfolio analysis","benchmark","portfolio management","risk analysis"]},a=void 0,l={id:"sdk/reference/portfolio/metric/sharpe",title:"sharpe",description:"Get sharpe ratio for a portfolio and benchmark using the OpenBB Terminal. This page provides a detailed description of how to use the Sharpe ratio function with code examples in Python.",source:"@site/content/sdk/reference/portfolio/metric/sharpe.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/sharpe",permalink:"/sdk/reference/portfolio/metric/sharpe",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/sharpe.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"sharpe",description:"Get sharpe ratio for a portfolio and benchmark using the OpenBB Terminal. This page provides a detailed description of how to use the Sharpe ratio function with code examples in Python.",keywords:["Sharpe ratio","portfolio","PortfolioEngine","risk_free_rate","openbb.portfolio.metric.sharpe","financial metrics","OpenBB finance","portfolio analysis","benchmark","portfolio management","risk analysis"]},sidebar:"tutorialSidebar",previous:{title:"rsquare",permalink:"/sdk/reference/portfolio/metric/rsquare"},next:{title:"skew",permalink:"/sdk/reference/portfolio/metric/skew"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"portfolio.metric.sharpe - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(r.p,{children:"Get sharpe ratio for portfolio and benchmark selected"}),"\n",(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1160",children:"link"}),"]"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"openbb.portfolio.metric.sharpe(portfolio_engine: portfolio_engine.PortfolioEngine, risk_free_rate: float = 0)\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"portfolio_engine"}),(0,n.jsx)(r.td,{children:"PortfolioEngine"}),(0,n.jsxs)(r.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(r.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_free_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Risk free rate value"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"DataFrame with sharpe ratio for portfolio and benchmark for different periods"})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.sharpe(p)\n'})}),"\n",(0,n.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),o=t(74848);function i(e){let{title:r}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);