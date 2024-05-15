"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65970],{80573:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>h,toc:()=>x});var i=l(74848),n=l(28453),s=l(94331);const r={title:"ETF",description:"This documentation page provides a comprehensive guide on how to use the ETF module of the OpenBB Terminal SDK for programmatic access. It covers a list of functions within the ETF module, how to import the SDK, how to print contents of the SDK, how to use the ETF module in various situations such as getting list of ETF categories, getting ETF tickers, comparing performance metrics, getting the holdings of a specific ETF, performing ETF screening, and retrieving current top gainers, losers, and volume for ETFs.",keywords:["OpenBB Terminal SDK","ETF module","programmatic access","import SDK","perform ETF screening","get ETF holdings","compare performance metrics","retrieve top gainers and losers","retrieve top volume for ETFs"]},d=void 0,h={id:"sdk/data-available/etf",title:"ETF",description:"This documentation page provides a comprehensive guide on how to use the ETF module of the OpenBB Terminal SDK for programmatic access. It covers a list of functions within the ETF module, how to import the SDK, how to print contents of the SDK, how to use the ETF module in various situations such as getting list of ETF categories, getting ETF tickers, comparing performance metrics, getting the holdings of a specific ETF, performing ETF screening, and retrieving current top gainers, losers, and volume for ETFs.",source:"@site/content/sdk/data-available/etf.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/etf",permalink:"/sdk/data-available/etf",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/etf.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"ETF",description:"This documentation page provides a comprehensive guide on how to use the ETF module of the OpenBB Terminal SDK for programmatic access. It covers a list of functions within the ETF module, how to import the SDK, how to print contents of the SDK, how to use the ETF module in various situations such as getting list of ETF categories, getting ETF tickers, comparing performance metrics, getting the holdings of a specific ETF, performing ETF screening, and retrieving current top gainers, losers, and volume for ETFs.",keywords:["OpenBB Terminal SDK","ETF module","programmatic access","import SDK","perform ETF screening","get ETF holdings","compare performance metrics","retrieve top gainers and losers","retrieve top volume for ETFs"]},sidebar:"tutorialSidebar",previous:{title:"Economy",permalink:"/sdk/data-available/economy"},next:{title:"Fixed Income",permalink:"/sdk/data-available/fixedincome"}},c={},x=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"etf_by_category",id:"etf_by_category",level:3},{value:"ETF Tickers",id:"etf-tickers",level:3},{value:"Performance Metrics",id:"performance-metrics",level:3},{value:"Holdings",id:"holdings",level:3},{value:"Disc",id:"disc",level:3}];function g(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"ETF - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,i.jsxs)(e.p,{children:["The ETF module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,i.jsx)(e.code,{children:"."}),", after, ",(0,i.jsx)(e.code,{children:"openbb.etf"}),"\n\u200b"]}),"\n",(0,i.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsx)(e.p,{children:"\u200bThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nimport pandas as pd\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u200bBelow is a brief description of each function within the ETF module:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.candle"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Chart OHLC + Volume + Moving Averages"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.disc"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Sub-Module"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Best/Worst/Highest Volume ETFs Today"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.etf_by_category"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Lookup by Category"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.etf_by_name"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Lookup by Name"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.holdings"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Holdings and Weights"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.ld"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Lookup by Description"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.load"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Get Historical Price Data"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.ln"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:["Lookup by Name (More Details Than ",(0,i.jsx)(e.code,{children:"by_name"}),")"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.news"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"News Headlines for a Ticker"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.overview"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Basic Statistics for an ETF"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.scr"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Sub-Module"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"ETF Screener"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.summary"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Text Description and Summary of an ETF"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.symbols"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Dictionary"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:["Dictionary of ",(0,i.jsx)(e.code,{children:"{Ticker:Name}"})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.etf.weights"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Table or Pie Graph of Sector Weightings"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"Alternatively you can print the contents of the ETF SDK with:\n\u200b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"help(openbb.etf)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.h3,{id:"etf_by_category",children:"etf_by_category"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\nETFs are categorized into different buckets. Use the code block below as a way to generate a list of all categories:\n\u200b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"etf_list = pd.DataFrame.from_dict(openbb.etf.etf_by_category(''))\ncategories = list(etf_list['category'].drop_duplicates())\ncategories = pd.DataFrame(categories[1::], columns = ['Type'])\n\ncategories.head(6)\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Type"})})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Financials"})}),(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Emerging Markets"})}),(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Industrials"})}),(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Factors"})}),(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Utilities"})}),(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Bonds"})})]})]}),"\n",(0,i.jsx)(e.p,{children:"\u200bReplacing the empty category in the syntax above will return the ETFs within that category:\n\u200b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"etf_category = pd.DataFrame.from_dict(openbb.etf.etf_by_category('Emerging Markets'))\netf_category.head(2)\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"symbol"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"name"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"currency"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"summary"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"category_group"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"category"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"family"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"exchange"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"market"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AAXJ"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"iShares MSCI All Country Asia ex Japan ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"The investment seeks to track the investment results of the MSCI AC Asia ex Japan Index."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Equities"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Emerging Markets"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"BlackRock Asset Management"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"NMS"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"us_market"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"The fund will invest at least 90% of its assets in the component securities of the index and in investments that have economic characteristics that are substantially identical to the component securities of the index. The index is a free float-adjusted market capitalization index designed to measure equity market performance of securities from the following 11 developed and emerging market countries or regions: China, Hong Kong, India, Indonesia, Malaysia, Pakistan, the Philippines, Singapore, South Korea, Taiwan and Thailand."}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"JHEM"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"John Hancock Multifactor Emerging Markets ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"The investment seeks to provide investment results that closely correspond, before fees and expenses, to the performance of the John Hancock Dimensional Emerging Markets Index (the index)."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Equities"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Emerging Markets"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"John Hancock"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"PCX"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"us_market"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"The fund normally invests at least 80% of its net assets (plus any borrowings for investment purposes) in securities included in the index, in depositary receipts representing securities included in the index, and in underlying stocks in respect of depositary receipts included in the index. The index is designed to comprise a subset of securities associated with emerging markets, which may include frontier markets (emerging markets in an earlier stage of development)."}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"etf-tickers",children:"ETF Tickers"}),"\n",(0,i.jsxs)(e.p,{children:["A list of all tickers in the specific category can be generated from the index of the above DataFrame, ",(0,i.jsx)(e.code,{children:"etf_category"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"symbols = etf_category.index.to_list()\n"})}),"\n",(0,i.jsx)(e.h3,{id:"performance-metrics",children:"Performance Metrics"}),"\n",(0,i.jsx)(e.p,{children:"This list of tickers can then be used for comparison analysis, or portfolio optimization. For example, comparing the performance metrics of the Emerging Market category:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"performance = openbb.stocks.ca.screener(similar = symbols, data_type = 'performance')\nperformance = performance.sort_values(by=['3M'], ascending=False)\nperformance.head(5)\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Ticker"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"1W"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"1M"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"3M"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"6M"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"1Y"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"YTD"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"1W Volatility"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"1M Volatility"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Recom"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Avg Volume"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Rel Volume"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Price"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Change"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Volume"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CHB"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0301"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"-0.015"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.1123"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0086"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"-0.132"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"-0.1277"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0105"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0048"}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1130"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.04"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8.22"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0123"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"21"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"INCO"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0193"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0716"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.1092"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.1543"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.2706"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.3171"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0066"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0049"}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"17810"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.62"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"59.77"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0073"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"14060"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GLIN"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0251"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0733"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.1083"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.221"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.2704"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.3319"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0105"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0079"}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"20360"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.89"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"43.5"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0133"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8833"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"ILF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0497"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0631"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.1032"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.062"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.3082"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.2768"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0141"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0135"}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.18e+06"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.16"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"29.23"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0215"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1237337"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"SMIN"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0174"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0573"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0914"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.2128"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.2848"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.3447"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0078"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0074"}),(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"99980"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5.61"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"69.6"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.0053"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"272774"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"holdings",children:"Holdings"}),"\n",(0,i.jsx)(e.p,{children:"To peer into the holdings of a specific ETF:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"holdings = openbb.etf.holdings('DIA').reset_index()\nholdings.head(5)\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"right"}}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Symbol"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"% Of Etf"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Shares"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"UNH"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"UnitedHealth Group Incorporated"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"10.09%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5985297"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GS"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"The Goldman Sachs Group, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"7.51%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5985297"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"HD"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"The Home Depot, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"6.03%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5985297"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AMGN"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Amgen Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"5.61%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5985297"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"MCD"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"McDonald's Corporation"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"5.35%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5985297"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"disc",children:"Disc"}),"\n",(0,i.jsx)(e.p,{children:"The current top gainers, losers, and volume for ETFs is returned with:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"openbb.etf.disc.mover(sort_type = 'decliners')\n\nopenbb.etf.disc.mover(sort_type = 'gainers')\n\nopenbb.etf.disc.mover(sort_type = 'active')\n"})}),"\n",(0,i.jsxs)(e.p,{children:["With no ",(0,i.jsx)(e.code,{children:"sort_type"})," chosen, it will default to ",(0,i.jsx)(e.code,{children:"gainers"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"movers = openbb.etf.disc.mover()\nmovers.head(5)\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"right"}}),(0,i.jsx)(e.th,{style:{textAlign:"left"}}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Price"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Chg"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"%Chg"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Vol"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Semiconductor Bear 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"35.3101"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.3101"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"10.34"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"24.5M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"ProShares UltraShort Bloomberg Natural Gas"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"18.09"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.19"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.04"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"4.4M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"MicroSectors FANG & Innovation -3x Inverse Leveraged ETN"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"28.98"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.83"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.74"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"160.1K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Dow Jones Internet Bear 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"32.14"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.91"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.32"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"554.2K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily S&P 500 High Beta Bear 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.4652"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.3752"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.16"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.2M"})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(g,{...t})}):g(t)}},94331:(t,e,l)=>{l.d(e,{A:()=>s});l(96540);var i=l(5260),n=l(74848);function s(t){let{title:e}=t;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:e})})}},28453:(t,e,l)=>{l.d(e,{R:()=>r,x:()=>d});var i=l(96540);const n={},s=i.createContext(n);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);