"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41186],{39667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=r(74848),c=r(28453),i=r(94331);const s={title:"coin_market_chart",description:"The page provides details about the 'coin_market_chart' function in the OpenBB crypto module. This function fetches and displays coin prices based on specified parameters.",keywords:["coin market chart","cryptocurrency prices","openbb crypto","Python data fetching","coin prices API","data frame","pycoingecko model","currency","coin pricing data"]},d=void 0,o={id:"sdk/reference/crypto/dd/coin_market_chart",title:"coin_market_chart",description:"The page provides details about the 'coin_market_chart' function in the OpenBB crypto module. This function fetches and displays coin prices based on specified parameters.",source:"@site/content/sdk/reference/crypto/dd/coin_market_chart.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/coin_market_chart",permalink:"/sdk/reference/crypto/dd/coin_market_chart",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/dd/coin_market_chart.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"coin_market_chart",description:"The page provides details about the 'coin_market_chart' function in the OpenBB crypto module. This function fetches and displays coin prices based on specified parameters.",keywords:["coin market chart","cryptocurrency prices","openbb crypto","Python data fetching","coin prices API","data frame","pycoingecko model","currency","coin pricing data"]},sidebar:"tutorialSidebar",previous:{title:"coin",permalink:"/sdk/reference/crypto/dd/coin"},next:{title:"eb",permalink:"/sdk/reference/crypto/dd/eb"}},a={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto.dd.coin_market_chart - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get prices for given coin. [Source: CoinGecko]"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_model.py#L222",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.crypto.dd.coin_market_chart(symbol: str = "", vs_currency: str = "usd", days: int = 30, kwargs: Any)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vs_currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"currency vs which display data"}),(0,n.jsx)(t.td,{children:"usd"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"days"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"number of days to display the data"}),(0,n.jsx)(t.td,{children:"30"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"kwargs"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"unspecified keyword arguments"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsxs)(t.td,{children:["Prices for given coin",(0,n.jsx)("br",{}),"Columns: time, price, currency"]})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),c=r(74848);function i(e){let{title:t}=e;return(0,c.jsx)(n.A,{children:(0,c.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var n=r(96540);const c={},i=n.createContext(c);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);