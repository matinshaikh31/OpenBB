"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15235],{52085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var s=n(74848),r=n(28453),i=n(94331);const d={title:"fipo",description:"The 'fipo' page provides information on the future IPOs dates using the Finnhub source. It includes an OpenBB python method to retrieve upcoming IPO dates within a specified number of days. The result is displayed as a DataFrame.",keywords:["Future IPOs","IPO dates","Finnhub source","Financial data","Stocks discovery","Fipo"]},o=void 0,a={id:"sdk/reference/stocks/disc/fipo",title:"fipo",description:"The 'fipo' page provides information on the future IPOs dates using the Finnhub source. It includes an OpenBB python method to retrieve upcoming IPO dates within a specified number of days. The result is displayed as a DataFrame.",source:"@site/content/sdk/reference/stocks/disc/fipo.md",sourceDirName:"sdk/reference/stocks/disc",slug:"/sdk/reference/stocks/disc/fipo",permalink:"/sdk/reference/stocks/disc/fipo",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/disc/fipo.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"fipo",description:"The 'fipo' page provides information on the future IPOs dates using the Finnhub source. It includes an OpenBB python method to retrieve upcoming IPO dates within a specified number of days. The result is displayed as a DataFrame.",keywords:["Future IPOs","IPO dates","Finnhub source","Financial data","Stocks discovery","Fipo"]},sidebar:"tutorialSidebar",previous:{title:"dividends",permalink:"/sdk/reference/stocks/disc/dividends"},next:{title:"gainers",permalink:"/sdk/reference/stocks/disc/gainers"}},c={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks.disc.fipo - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Future IPOs dates. [Source: Finnhub]"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/finnhub_model.py#L115",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.stocks.disc.fipo(num_days_ahead: int = 5, end_date: Optional[str] = None)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_days_ahead"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of days to look ahead for IPOs dates"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"end_date"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"The end date (format YYYY-MM-DD) to look for IPOs from today onwards"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"Get dataframe with future IPOs"})]})})]}),"\n",(0,s.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);