"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96520],{84178:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(74848),a=s(28453),r=s(94331);const i={title:"dcf",description:"Discover the dcf command, a powerful and flexible tool that allows users to predict and analyze the value of a company based on future cash flows and the present value. This tool allows for customizable parameters, includes linear regression estimates, discount factors, and multiple prediction models.",keywords:["dcf","discounted cash flow","financial statements prediction","linear regression","Fama French","CAPM","cash flow analysis","present value","company value","stock analysis","financial tool"]},c=void 0,o={id:"terminal/reference/stocks/fa/dcf",title:"dcf",description:"Discover the dcf command, a powerful and flexible tool that allows users to predict and analyze the value of a company based on future cash flows and the present value. This tool allows for customizable parameters, includes linear regression estimates, discount factors, and multiple prediction models.",source:"@site/content/terminal/reference/stocks/fa/dcf.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/dcf",permalink:"/terminal/reference/stocks/fa/dcf",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/dcf.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"dcf",description:"Discover the dcf command, a powerful and flexible tool that allows users to predict and analyze the value of a company based on future cash flows and the present value. This tool allows for customizable parameters, includes linear regression estimates, discount factors, and multiple prediction models.",keywords:["dcf","discounted cash flow","financial statements prediction","linear regression","Fama French","CAPM","cash flow analysis","present value","company value","stock analysis","financial tool"]},sidebar:"tutorialSidebar",previous:{title:"data",permalink:"/terminal/reference/stocks/fa/data"},next:{title:"dcfc",permalink:"/terminal/reference/stocks/fa/dcfc"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"stocks/fa/dcf - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"A discounted cash flow statement looks to analyze the value of a company. To do this we need to predict the future cash flows and then determine how much those cash flows are worth to us today. We predict the future expected cash flows by predicting what the financial statements will look like in the future, and then using this to determine the cash the company will have in the future. This cash is paid to share holders. We use linear regression to predict the future financial statements. Once we have our predicted financial statements we need to determine how much the cash flows are worth today. This is done with a discount factor. Our DCF allows users to choose between Fama French and CAPM for the factor. This allows us to calculate the present value of the future cash flows. The present value of all of these cash payments is the companies' value. Dividing this value by the number of shares outstanding allows us to calculate the value of each share in a company."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"dcf [-a] [--no-ratios] [--no-filter] [-p PREDICTION] [-s SIMILAR] [-g]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"audit"}),(0,n.jsx)(t.td,{children:"Generates a tie-out for financial statement information pulled from online."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ratios"}),(0,n.jsx)(t.td,{children:"Removes ratios from DCF."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ratios"}),(0,n.jsx)(t.td,{children:"Allow similar companies of any market cap to be shown."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prediction"}),(0,n.jsx)(t.td,{children:"Number of years to predict before using terminal value."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"similar"}),(0,n.jsx)(t.td,{children:"Number of similar companies to generate ratios for."}),(0,n.jsx)(t.td,{children:"6"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth"}),(0,n.jsx)(t.td,{children:"Whether to replace a linear regression estimate with a growth estimate."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154241001-42be82e5-f001-4fd1-bcf4-cd55c7cef358.png",alt:"dcf financials"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154241130-f52c580e-710d-4cac-a8f3-f9bfece7865a.png",alt:"dcf free cash flows"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154241408-5476f0ea-4789-4691-a063-6b43c382fce6.png",alt:"dcf explanations"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154241575-f931c05a-c765-4abd-9cc1-0a0795aeaec3.png",alt:"dcf ratios"})}),"\n",(0,n.jsx)(t.hr,{})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(5260),a=s(74848);function r(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(96540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);