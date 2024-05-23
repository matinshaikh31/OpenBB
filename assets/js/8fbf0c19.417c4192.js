"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73240],{18126:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>h,toc:()=>x});var s=l(74848),i=l(28453),n=l(94331);const r={title:"Behavioral Analysis",description:"This page provides insightful information on how to use the BA module within the OpenBB Terminal. It gives detailed examples of utilizing various functions in Python for stock sentiment analysis, region-based popularity, trending queries, and more.",keywords:["BA module","Stock sentiment analysis","Region-based popularity","Trending queries","Stocktwit's messages","stock due diligence","function and modules","stock market","sentiment prediction","programming","code completion"]},d=void 0,h={id:"sdk/data-available/stocks/behavioral-analysis",title:"Behavioral Analysis",description:"This page provides insightful information on how to use the BA module within the OpenBB Terminal. It gives detailed examples of utilizing various functions in Python for stock sentiment analysis, region-based popularity, trending queries, and more.",source:"@site/content/sdk/data-available/stocks/behavioral-analysis.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/behavioral-analysis",permalink:"/sdk/data-available/stocks/behavioral-analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/stocks/behavioral-analysis.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"Behavioral Analysis",description:"This page provides insightful information on how to use the BA module within the OpenBB Terminal. It gives detailed examples of utilizing various functions in Python for stock sentiment analysis, region-based popularity, trending queries, and more.",keywords:["BA module","Stock sentiment analysis","Region-based popularity","Trending queries","Stocktwit's messages","stock due diligence","function and modules","stock market","sentiment prediction","programming","code completion"]},sidebar:"tutorialSidebar",previous:{title:"Stocks",permalink:"/sdk/data-available/stocks/"},next:{title:"Comparison Analysis",permalink:"/sdk/data-available/stocks/comparison-analysis"}},c={},x=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"headlines",id:"headlines",level:3},{value:"regions",id:"regions",level:3},{value:"rise",id:"rise",level:3}];function g(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"Behavioral Analysis - Stocks - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,s.jsxs)(e.p,{children:["The BA module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,s.jsx)(e.code,{children:"."}),", after, ",(0,s.jsx)(e.code,{children:"openbb.ba"}),"\n\u200b"]}),"\n",(0,s.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(e.p,{children:"\u200b\nThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u200b\nA brief description below highlights the main Functions and Modules available in the BA SDK"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.bullbear"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Estimate Quick Sentiment"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.headlines"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Sentiment from 15+ News Headlines"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.spacc"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Shows SPAC announcements from SPAC subreddit"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.watchlist"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Show Other User's Watchlists"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.messages"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Output last 30 messages on the board"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.mentions"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Interest Over Time Based on Mentions"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.hist"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Plot Historical RHI and AHI"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.snews"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Stock Price Plotted Over Sentiment"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.redditsent"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Search for Tickers and Find Sentiment"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.popular"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Show Popular Tickers"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.spac"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Shows Other User's SPAC Announcements"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.getdd"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Get Due Diligence"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.regions"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Regions Showing the Highest Interest"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.trending"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Trending Stocks"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.wsb"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Highlights from WSB Subreddit"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.queries"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Top Related Queries"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.sentiment"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Stock Sentiment Prediction from Last Tweets"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.infer"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Stock Sentiment from Last Tweets"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.stalker"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Stocktwit's last messages"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.ba.rise"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"Top Rising Related Queries"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"Alternatively you can print the contents of the BA SDK with:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"help(openbb.stocks.ba)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.h3,{id:"headlines",children:"headlines"}),"\n",(0,s.jsx)(e.p,{children:"Sentiment from over 15 news headlines for each day. This data can be used for further analysis of the stock"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'openbb.stocks.ba.headlines("TSLA")\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"Sentiment Analysis"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-09 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.209"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-10 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-0.025"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-11 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.027"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-14 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-0.402"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-15 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-0.122"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-16 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-0.35"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-17 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.156"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-18 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0.216"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-21 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-0.071"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-22 00:00:00"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"-0.003"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"regions",children:"regions"}),"\n",(0,s.jsx)(e.p,{children:"See the top regions where a stock is searched"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'openbb.stocks.ba.regions("TSLA")\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"geoName"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"TSLA"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Canada"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"100"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"United States"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"95"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Singapore"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"94"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Estonia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"51"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Taiwan"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"50"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Slovenia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"40"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Switzerland"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"36"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Denmark"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"36"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"New Zealand"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"33"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Sweden"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"31"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Finland"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"24"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Australia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"24"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Belgium"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"22"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Czechia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Bulgaria"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"18"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"United Arab Emirates"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"17"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"United Kingdom"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"15"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Portugal"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"12"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Austria"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"11"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Romania"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"10"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"South Africa"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Saudi Arabia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Germany"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Argentina"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Spain"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"France"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Colombia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Philippines"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Brazil"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Thailand"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Poland"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Vietnam"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Russia"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Turkey"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Pakistan"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"rise",children:"rise"}),"\n",(0,s.jsx)(e.p,{children:"See which search queries are popular right now"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'openbb.stocks.ba.rise("AAPL")\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"right"}}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"query"}),(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"value"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"nio"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"220300"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"nio stock"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"106650"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"pltr stock"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"64750"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"mrna stock"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"59750"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"nio stock price"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"53450"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"5"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"zm stock"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"49500"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"6"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bynd"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"44850"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"7"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"pltr"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"41000"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"8"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"spce"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"37350"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"9"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"zm"}),(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"31650"})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(g,{...t})}):g(t)}},94331:(t,e,l)=>{l.d(e,{A:()=>n});l(96540);var s=l(5260),i=l(74848);function n(t){let{title:e}=t;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:e})})}},28453:(t,e,l)=>{l.d(e,{R:()=>r,x:()=>d});var s=l(96540);const i={},n=s.createContext(i);function r(t){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(n.Provider,{value:e},t.children)}}}]);