"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47704],{48440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(74848),s=t(28453),a=t(94331);const i={title:"raw",description:"This Docusaurus page provides instructions on how to print raw data to the console using Python. It includes details on parameters such as limit, reverse, and sortby. Examples of usage and output are provided.",keywords:["Raw data","sort","Limit","reverse","sortby","ascending","descending","stocks","display"]},o=void 0,d={id:"terminal/reference/crypto/qa/raw",title:"raw",description:"This Docusaurus page provides instructions on how to print raw data to the console using Python. It includes details on parameters such as limit, reverse, and sortby. Examples of usage and output are provided.",source:"@site/content/terminal/reference/crypto/qa/raw.md",sourceDirName:"terminal/reference/crypto/qa",slug:"/terminal/reference/crypto/qa/raw",permalink:"/terminal/reference/crypto/qa/raw",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/qa/raw.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"raw",description:"This Docusaurus page provides instructions on how to print raw data to the console using Python. It includes details on parameters such as limit, reverse, and sortby. Examples of usage and output are provided.",keywords:["Raw data","sort","Limit","reverse","sortby","ascending","descending","stocks","display"]},sidebar:"tutorialSidebar",previous:{title:"quantile",permalink:"/terminal/reference/crypto/qa/quantile"},next:{title:"rolling",permalink:"/terminal/reference/crypto/qa/rolling"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"crypto/qa/raw - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(n.p,{children:"Print raw data to console"}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"raw [-l LIMIT] [-r] [-s {open,high,low,close,adjclose,volume,date_id,oc_high,oc_low,returns,logret}]\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Choices"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"limit"}),(0,r.jsx)(n.td,{children:"Number to show"}),(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reverse"}),(0,r.jsx)(n.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sortby"}),(0,r.jsx)(n.td,{children:"The column to sort by"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"open, high, low, close, adjclose, volume, date_id, oc_high, oc_low, returns, logret"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"2022 Feb 16, 11:05 (\ud83e\udd8b) /stocks/qa/ $ raw\n        Raw Data\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503            \u2503 Adjclose \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-01-19 \u2502 995.650  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-20 \u2502 996.270  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-21 \u2502 943.900  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-24 \u2502 930.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-25 \u2502 918.400  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-26 \u2502 937.410  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-27 \u2502 829.100  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-28 \u2502 846.350  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-31 \u2502 936.720  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-01 \u2502 931.250  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-02 \u2502 905.660  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-03 \u2502 891.140  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-04 \u2502 923.320  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-07 \u2502 907.340  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-08 \u2502 922.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-09 \u2502 932.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-10 \u2502 904.550  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-11 \u2502 860.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-14 \u2502 875.760  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-15 \u2502 922.430  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(5260),s=t(74848);function a(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);