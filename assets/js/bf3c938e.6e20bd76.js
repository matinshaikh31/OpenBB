"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84508],{48857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=n(74848),i=n(28453),s=n(94331);const c={title:"c",description:"Command for retrieving a detailed candlestick chart for the specified cryptocurrency coin. This includes an opening and closing price, as well as the high and low within a definite time interval. Options to include support/resistant lines and Fibonacci retracement levels are available.",keywords:["Crypto Currency","Crypto Coin","Candlestick Chart","Crypto Exchange","Trading Parameters","Support Resistance Lines","Fibonacci Retracement Levels","Crypto Symbol","Crypto Trading Command"]},a=void 0,l={id:"bot/reference/telegram/charts/c",title:"c",description:"Command for retrieving a detailed candlestick chart for the specified cryptocurrency coin. This includes an opening and closing price, as well as the high and low within a definite time interval. Options to include support/resistant lines and Fibonacci retracement levels are available.",source:"@site/content/bot/reference/telegram/charts/c.md",sourceDirName:"bot/reference/telegram/charts",slug:"/bot/reference/telegram/charts/c",permalink:"/bot/reference/telegram/charts/c",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/charts/c.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"c",description:"Command for retrieving a detailed candlestick chart for the specified cryptocurrency coin. This includes an opening and closing price, as well as the high and low within a definite time interval. Options to include support/resistant lines and Fibonacci retracement levels are available.",keywords:["Crypto Currency","Crypto Coin","Candlestick Chart","Crypto Exchange","Trading Parameters","Support Resistance Lines","Fibonacci Retracement Levels","Crypto Symbol","Crypto Trading Command"]},sidebar:"tutorialSidebar",previous:{title:"charts",permalink:"/bot/reference/telegram/charts/"},next:{title:"c15m",permalink:"/bot/reference/telegram/charts/c15m"}},d={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"charts: c - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,r.jsx)(t.p,{children:"This command will retrieve a candlestick chart for the crypto coin provided. The interval provided must be a valid time interval (default 15 minutes). The chart will be displayed to the user and will contain information such as the opening and closing prices, the high and low, the volume, and any other relevant information."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/c symbol [currency] [exchange] [interval] [srlines] [fibs]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Crypto Symbol"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"currency"}),(0,r.jsx)(t.td,{children:"Crypto Currency. Default: USDT"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange"}),(0,r.jsx)(t.td,{children:"Crypto Exchange. Default: binanceus"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"1m: 1 Minute 3m: 3 Minutes 5m: 5 Minutes 15m: 15 Minutes 30m: 30 Minutes 1hr: 1 Hour 1d: 1 Day 1wk: 1 Week 1mo: 1 Month"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"1m, 3m, 5m, 15m, 30m, 1hr, 1d, 1wk, 1mo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"srlines"}),(0,r.jsx)(t.td,{children:"Show Support/Resistance Lines. Default: False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fibs"}),(0,r.jsx)(t.td,{children:"Show Fibonacci Retracement Levels. Default: False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/c doge\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/c doge interval:3m\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),i=n(74848);function s(e){let{title:t}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);