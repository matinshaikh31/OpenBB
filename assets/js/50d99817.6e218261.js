"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21338],{65098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var n=r(74848),d=r(28453),i=r(94331),s=r(18228),l=r(19365);const a={title:"historical",description:"Learn how to use the `obb.equity.price.historical` function to load historical  price data for a specific stock ticker. Find out about the available parameters  and providers, as well as the structure of the returned data and the columns it  contains.",keywords:["equity historical price","load stock data","specific ticker","python function","equity data parameters","alpha vantage provider","fmp provider","intrinio provider","polygon provider","yfinance provider","equity historical data returns","equity data columns","alpha vantage data columns","cboe data columns","fmp data columns","intrinio data columns","polygon data columns","yfinance data columns"]},c=void 0,o={id:"platform/reference/crypto/price/historical",title:"historical",description:"Learn how to use the `obb.equity.price.historical` function to load historical  price data for a specific stock ticker. Find out about the available parameters  and providers, as well as the structure of the returned data and the columns it  contains.",source:"@site/content/platform/reference/crypto/price/historical.md",sourceDirName:"platform/reference/crypto/price",slug:"/platform/reference/crypto/price/historical",permalink:"/platform/reference/crypto/price/historical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/crypto/price/historical.md",tags:[],version:"current",frontMatter:{title:"historical",description:"Learn how to use the `obb.equity.price.historical` function to load historical  price data for a specific stock ticker. Find out about the available parameters  and providers, as well as the structure of the returned data and the columns it  contains.",keywords:["equity historical price","load stock data","specific ticker","python function","equity data parameters","alpha vantage provider","fmp provider","intrinio provider","polygon provider","yfinance provider","equity historical data returns","equity data columns","alpha vantage data columns","cboe data columns","fmp data columns","intrinio data columns","polygon data columns","yfinance data columns"]},sidebar:"tutorialSidebar",previous:{title:"Price",permalink:"/platform/reference/crypto/price/"},next:{title:"search",permalink:"/platform/reference/crypto/search"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto/price/historical - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get historical price data for cryptocurrency pair(s) within a provider."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.crypto.price.historical(symbol='BTCUSD', provider='fmp')\nobb.crypto.price.historical(symbol='BTCUSD', start_date='2024-01-01', end_date='2024-01-31', provider='fmp')\nobb.crypto.price.historical(symbol='BTCUSD,ETHUSD', start_date='2024-01-01', end_date='2024-01-31', provider='polygon')\n# Get monthly historical prices from Yahoo Finance for Ethereum.\nobb.crypto.price.historical(symbol='ETH-USD', interval=1m, start_date='2024-01-01', end_date='2024-12-31', provider='yfinance')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'polygon', 'tiingo', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'polygon', 'tiingo', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"Literal['1m', '5m', '15m', '30m', '1h', '4h', '1d']"}),(0,n.jsx)(t.td,{children:"Time interval of the data to return."}),(0,n.jsx)(t.td,{children:"1d"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'polygon', 'tiingo', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Time interval of the data to return. The numeric portion of the interval can be any positive integer. The letter portion can be one of the following: s, m, h, d, W, M, Q, Y"}),(0,n.jsx)(t.td,{children:"1d"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order of the data. This impacts the results in combination with the 'limit' parameter. The results are always returned in ascending order by date."}),(0,n.jsx)(t.td,{children:"asc"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"49999"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"tiingo",label:"tiingo",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'polygon', 'tiingo', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"Literal['1m', '5m', '15m', '30m', '1h', '4h', '1d']"}),(0,n.jsx)(t.td,{children:"Time interval of the data to return."}),(0,n.jsx)(t.td,{children:"1d"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchanges"}),(0,n.jsx)(t.td,{children:"List[str]"}),(0,n.jsx)(t.td,{children:"To limit the query to a subset of exchanges e.g. ['POLONIEX', 'GDAX']"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'polygon', 'tiingo', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q']"}),(0,n.jsx)(t.td,{children:"Time interval of the data to return."}),(0,n.jsx)(t.td,{children:"1d"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CryptoHistorical]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'polygon', 'tiingo', 'yfinance']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vwap"}),(0,n.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,n.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vwap"}),(0,n.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,n.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"adj_close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The adjusted close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in the price from the previous close."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in the price from the previous close, as a normalized percent."})]})]})]})}),(0,n.jsx)(l.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vwap"}),(0,n.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,n.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transactions"}),(0,n.jsx)(t.td,{children:"Annotated[int, Gt(gt=0)]"}),(0,n.jsx)(t.td,{children:"Number of transactions for the symbol in the time period."})]})]})]})}),(0,n.jsx)(l.A,{value:"tiingo",label:"tiingo",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vwap"}),(0,n.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,n.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transactions"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of transactions for the symbol in the time period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume_notional"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The last size done for the asset on the specific date in the quote currency. The volume of the asset on the specific date in the quote currency."})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vwap"}),(0,n.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,n.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const d={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),d=r(74848);function i(e){let{title:t}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),d=r(34164),i=r(23104),s=r(56347),l=r(205),a=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:d}}=e;return{value:t,label:r,attributes:n,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const d=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(d.location.search);t.set(i,e),d.replace({...d.location,search:t.toString()})}),[i,d])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,i=x(e),[s,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=u({queryString:r,groupId:d}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,i]=(0,o.Dv)(r);return[d,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:d}),m=(()=>{const e=c??p;return j({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,s.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),d=a[r].value;d!==n&&(o(t),l(d))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:j,onClick:x,...i,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function g(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,d.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const d={},i=n.createContext(d);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);