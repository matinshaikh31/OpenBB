"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34967],{72799:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(74848),r=s(28453),o=s(94331);const i={title:"Dark Pools & Short Data",description:"This documentation page introduces the dark pool and short data menu, which provides the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in NMS securities.",keywords:["dark pool","short data","ftd","off-exchange volume","short interest","nms","short","sidtc","cover","fail"]},l=void 0,a={id:"terminal/menus/stocks/dark-pool-shorts",title:"Dark Pools & Short Data",description:"This documentation page introduces the dark pool and short data menu, which provides the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in NMS securities.",source:"@site/content/terminal/menus/stocks/dark-pool-shorts.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/dark-pool-shorts",permalink:"/terminal/menus/stocks/dark-pool-shorts",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/dark-pool-shorts.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"Dark Pools & Short Data",description:"This documentation page introduces the dark pool and short data menu, which provides the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in NMS securities.",keywords:["dark pool","short data","ftd","off-exchange volume","short interest","nms","short","sidtc","cover","fail"]},sidebar:"tutorialSidebar",previous:{title:"Comparison Analysis",permalink:"/terminal/menus/stocks/comparison"},next:{title:"Discovery",permalink:"/terminal/menus/stocks/disc"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Shorted",id:"shorted",level:3},{value:"HSI",id:"hsi",level:3},{value:"PROM",id:"prom",level:3},{value:"CTB",id:"ctb",level:3},{value:"FTD",id:"ftd",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"Dark Pool & Short Data - Stocks - Menus | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(t.p,{children:["The purpose of this menu is to provide the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in a ",(0,n.jsx)("a",{href:"https://www.law.cornell.edu/cfr/text/17/242.600",target:"_blank",rel:"noreferrer noopener",children:"NMS security"}),". There are also commands for looking at market as a whole."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Enter the ",(0,n.jsx)(t.code,{children:"dps"})," menu from the ",(0,n.jsx)(t.code,{children:"/stocks"})," menu, or through the absolute path:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/64775307-b79e-4ff6-95dd-ec676e1ab677",alt:"Screenshot 2023-11-01 at 8 33 58\u202fAM"})}),"\n",(0,n.jsx)(t.p,{children:"The commands which are not ticker-specific are grouped at the top of the menu, and they provide screener-like utility."}),"\n",(0,n.jsx)(t.h3,{id:"shorted",children:"Shorted"}),"\n",(0,n.jsxs)(t.p,{children:["A list of the most-shorted stocks, according to Yahoo Finance, is displayed with the ",(0,n.jsx)(t.code,{children:"shorted"})," command. It should be noted that this menu is only able to provide data for SEC-regulated equities."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps/shorted\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/d1361b8f-0795-439f-b9f6-ace9cbde068a",alt:"Screenshot 2023-11-01 at 8 38 12\u202fAM"})}),"\n",(0,n.jsx)(t.h3,{id:"hsi",children:"HSI"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"hsi"})," command includes the percent of short interest relative to the float size."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps/hsi\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/1287e58b-dbed-44a0-821a-769daebb3f29",alt:"Screenshot 2023-11-01 at 8 40 39\u202fAM"})}),"\n",(0,n.jsx)(t.h3,{id:"prom",children:"PROM"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"prom"})," performs a linear regression to scan for tickers with growing trade activity on ATS tapes, reported to ",(0,n.jsx)("a",{href:"https://otctransparency.finra.org/otctransparency/AtsIssueData",target:"_blank",rel:"noreferrer noopener",children:"FINRA"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps/prom -n 50 -l 5 -t T1\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Processing Tier T1 ...\nProcessing regression on 50 promising tickers ...\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/13b67056-9d94-45f0-b483-41c1da773f0e",alt:"Screenshot 2023-11-01 at 8 45 21\u202fAM"})}),"\n",(0,n.jsx)(t.p,{children:"Tier 2 NMS Tickers:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps/prom -n 50 -l 5 -t T2\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Processing Tier T2 ...\nProcessing regression on 50 promising tickers ...\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/fab9bb45-fec9-4d51-8b77-0bb9697d8888",alt:"Screenshot 2023-11-01 at 8 48 32\u202fAM"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"pos"})," provides a summary for the last reported trading day (information is updated in the early evening). Position represents a rolling twenty-day total and directional trends can be identified by watching the changes over time. Adding the ",(0,n.jsx)(t.code,{children:"-a"})," flag will sort the list from the bottom up - the most negative - and creates a fuller picture when watching in tandom with the positive side of the ledger. Monitor the rate of change in position sizes, or a reversal in directional flow. This ",(0,n.jsx)("a",{href:"https://squeezemetrics.com/monitor/download/pdf/short_is_long.pdf?",target:"_blank",rel:"noreferrer noopener",children:"white paper"}),", written by SqueezeMetrics, sheds some light on the trading activity reported here."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps pos\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/8075ab29-cbac-448c-bfc4-a2ca250f6288",alt:"Screenshot 2023-11-01 at 8 55 25\u202fAM"})}),"\n",(0,n.jsx)(t.p,{children:"The other end of the spectrum:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps/pos -a\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9bd6d148-ae36-4b7b-9faa-79db4dcb93ad",alt:"Screenshot 2023-11-01 at 8 58 27\u202fAM"})}),"\n",(0,n.jsx)(t.h3,{id:"ctb",children:"CTB"}),"\n",(0,n.jsxs)(t.p,{children:["The cost-to-borrow is used as a proxy-measurement for an equity's specialness. ",(0,n.jsx)(t.code,{children:"ctb"})," shows the  most expensive equities to short, and the number shares available to short, on Interactive Brokers."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps/ctb -n 5\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Symbol"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Fees"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Available"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ALPSQ"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1187.0287%"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"500000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LEO"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1034.2946%"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"300000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"NIM"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"872.2794%"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SVRE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"801.5519%"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"15000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"APLM"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"753.8133%"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"65000"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"ftd",children:"FTD"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ftd"})," command will lookup the SEC-reported fails-to-deliver data for a single company.  Use ",(0,n.jsx)(t.code,{children:"load"})," to set the symbol."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/dps/load cvna/ftd --start 2022-01-01\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/43409271-e306-4f13-9153-8cc322dde851",alt:"Screenshot 2023-11-01 at 9 28 34\u202fAM"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var n=s(5260),r=s(74848);function o(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);