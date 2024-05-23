"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97180],{21217:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=s(74848),n=s(28453),a=s(94331);const d={title:"lasttrades",description:"This page provides documentation for the 'lasttrades' function which fetches last government trading data. It includes parameters such as 'gov_type', 'limit', and 'representative', and returns a pandas DataFrame.",keywords:["lasttrades","government trading","quiverquant.com source","openbb.stocks.gov.lasttrades","congress","senate","house","representative"]},i=void 0,o={id:"sdk/reference/stocks/gov/lasttrades",title:"lasttrades",description:"This page provides documentation for the 'lasttrades' function which fetches last government trading data. It includes parameters such as 'gov_type', 'limit', and 'representative', and returns a pandas DataFrame.",source:"@site/content/sdk/reference/stocks/gov/lasttrades.md",sourceDirName:"sdk/reference/stocks/gov",slug:"/sdk/reference/stocks/gov/lasttrades",permalink:"/sdk/reference/stocks/gov/lasttrades",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/gov/lasttrades.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"lasttrades",description:"This page provides documentation for the 'lasttrades' function which fetches last government trading data. It includes parameters such as 'gov_type', 'limit', and 'representative', and returns a pandas DataFrame.",keywords:["lasttrades","government trading","quiverquant.com source","openbb.stocks.gov.lasttrades","congress","senate","house","representative"]},sidebar:"tutorialSidebar",previous:{title:"lastcontracts",permalink:"/sdk/reference/stocks/gov/lastcontracts"},next:{title:"lobbying",permalink:"/sdk/reference/stocks/gov/lobbying"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"stocks.gov.lasttrades - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get last government trading [Source: quiverquant.com]"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L164",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.stocks.gov.lasttrades(gov_type: str = "congress", limit: int = -1, representative: str = "")\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"gov_type"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Type of government data between: congress, senate and house"}),(0,r.jsx)(t.td,{children:"congress"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Number of days to look back"}),(0,r.jsx)(t.td,{children:"-1"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"representative"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Specific representative to look at"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Last government trading"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>a});s(96540);var r=s(5260),n=s(74848);function a(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>i});var r=s(96540);const n={},a=r.createContext(n);function d(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);