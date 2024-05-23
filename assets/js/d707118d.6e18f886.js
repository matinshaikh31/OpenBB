"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36293],{89887:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(74848),i=o(28453),r=o(94331);const a={title:"gaintopain",description:"On this page, learn how to use the gaintopain function from the openbb.portfolio.metric package to compute a portfolio's gain-to-pain ratio based on historical data. Examples and source code are provided.",keywords:["openbb.portfolio.metric.gaintopain function","portfolio's gain-to-pain ratio","PortfolioEngine class","compute gain-to-pain ratio"]},s=void 0,l={id:"sdk/reference/portfolio/metric/gaintopain",title:"gaintopain",description:"On this page, learn how to use the gaintopain function from the openbb.portfolio.metric package to compute a portfolio's gain-to-pain ratio based on historical data. Examples and source code are provided.",source:"@site/content/sdk/reference/portfolio/metric/gaintopain.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/gaintopain",permalink:"/sdk/reference/portfolio/metric/gaintopain",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/gaintopain.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"gaintopain",description:"On this page, learn how to use the gaintopain function from the openbb.portfolio.metric package to compute a portfolio's gain-to-pain ratio based on historical data. Examples and source code are provided.",keywords:["openbb.portfolio.metric.gaintopain function","portfolio's gain-to-pain ratio","PortfolioEngine class","compute gain-to-pain ratio"]},sidebar:"tutorialSidebar",previous:{title:"commonsense",permalink:"/sdk/reference/portfolio/metric/commonsense"},next:{title:"information",permalink:"/sdk/reference/portfolio/metric/information"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"portfolio.metric.gaintopain - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get Pain-to-Gain ratio based on historical data"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1313",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.metric.gaintopain(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PortfolioEngine"}),(0,n.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"DataFrame of the portfolio's gain-to-pain ratio"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.gaintopain(p)\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>r});o(96540);var n=o(5260),i=o(74848);function r(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);