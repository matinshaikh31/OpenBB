"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77657],{80933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>h,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var d=r(74848),s=r(28453),n=r(18228),i=r(19365);const l={title:"Etf Holdings",description:"Get the holdings for an individual ETF"},h=void 0,c={id:"platform/data_models/EtfHoldings",title:"Etf Holdings",description:"Get the holdings for an individual ETF",source:"@site/content/platform/data_models/EtfHoldings.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EtfHoldings",permalink:"/platform/data_models/EtfHoldings",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/EtfHoldings.md",tags:[],version:"current",frontMatter:{title:"Etf Holdings",description:"Get the holdings for an individual ETF"},sidebar:"tutorialSidebar",previous:{title:"Etf Historical",permalink:"/platform/data_models/EtfHistorical"},next:{title:"Etf Holdings Date",permalink:"/platform/data_models/EtfHoldingsDate"}},a={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,d.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Model name"}),(0,d.jsx)(t.th,{children:"Parameters class"}),(0,d.jsx)(t.th,{children:"Data class"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"EtfHoldings"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"EtfHoldingsQueryParams"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"EtfHoldingsData"})})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.etf_holdings import (\nEtfHoldingsData,\nEtfHoldingsQueryParams,\n)\n"})}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.A,{children:[(0,d.jsx)(i.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. (ETF)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'sec', 'tmx']"}),(0,d.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,d.jsx)(t.td,{children:"fmp"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. (ETF)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'sec', 'tmx']"}),(0,d.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,d.jsx)(t.td,{children:"fmp"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[Union[str, date], str]"}),(0,d.jsxs)(t.td,{children:["A specific date to get data for. Entering a date will attempt to return the NPORT-P filing for the entered date. This needs to be ",(0,d.jsx)(t.em,{children:"exactly"})," the date of the filing. Use the holdings_date command/endpoint to find available filing dates for the ETF."]}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cik"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The CIK of the filing entity. Overrides symbol."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(i.A,{value:"intrinio",label:"intrinio",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. (ETF)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'sec', 'tmx']"}),(0,d.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,d.jsx)(t.td,{children:"fmp"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"A specific date to get data for."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(i.A,{value:"sec",label:"sec",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. (ETF)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'sec', 'tmx']"}),(0,d.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,d.jsx)(t.td,{children:"fmp"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[Union[str, date], str]"}),(0,d.jsx)(t.td,{children:"A specific date to get data for. The date represents the period ending. The date entered will return the closest filing."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"use_cache"}),(0,d.jsx)(t.td,{children:"bool"}),(0,d.jsx)(t.td,{children:"Whether or not to use cache for the request."}),(0,d.jsx)(t.td,{children:"True"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(i.A,{value:"tmx",label:"tmx",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. (ETF)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'sec', 'tmx']"}),(0,d.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,d.jsx)(t.td,{children:"fmp"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"use_cache"}),(0,d.jsx)(t.td,{children:"bool"}),(0,d.jsx)(t.td,{children:"Whether to use a cached request. All ETF data comes from a single JSON file that is updated daily. To bypass, set to False. If True, the data will be cached for 4 hours."}),(0,d.jsx)(t.td,{children:"True"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,d.jsxs)(n.A,{children:[(0,d.jsx)(i.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (ETF)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Name of the ETF holding."})]})]})]})}),(0,d.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (ETF)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Name of the ETF holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lei"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The LEI of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"title"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The title of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cusip"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The CUSIP of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isin"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The ISIN of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"balance"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"The balance of the holding, in shares or units."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"units"}),(0,d.jsx)(t.td,{children:"Union[str, float]"}),(0,d.jsx)(t.td,{children:"The type of units."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The value of the holding, in dollars."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"weight"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The weight of the holding, as a normalized percent."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"payoff_profile"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The payoff profile of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"asset_category"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The asset category of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"issuer_category"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The issuer category of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"country"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The country of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_restricted"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is restricted."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fair_value_level"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"The fair value level of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_cash_collateral"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is cash collateral."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_non_cash_collateral"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is non-cash collateral."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_loan_by_fund"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is loan by fund."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cik"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The CIK of the filing."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"acceptance_datetime"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The acceptance datetime of the filing."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"updated"}),(0,d.jsx)(t.td,{children:"Union[date, datetime]"}),(0,d.jsx)(t.td,{children:"The date the data was updated."})]})]})]})}),(0,d.jsx)(i.A,{value:"intrinio",label:"intrinio",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (ETF)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The common name for the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"security_type"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The type of instrument for this holding. Examples(Bond='BOND', Equity='EQUI')"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isin"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The International Securities Identification Number."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ric"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The Reuters Instrument Code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sedol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The Stock Exchange Daily Official List."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"share_class_figi"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The OpenFIGI symbol for the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"country"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The country or region of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maturity_date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The maturity date for the debt security, if available."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"contract_expiry_date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Expiry date for the futures contract held, if available."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"coupon"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The coupon rate of the debt security, if available."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"balance"}),(0,d.jsx)(t.td,{children:"Union[int, float]"}),(0,d.jsx)(t.td,{children:"The number of units of the security held, if available."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"unit"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The units of the 'balance' field."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"units_per_share"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Number of units of the security held per share outstanding of the ETF, if available."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"face_value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The face value of the debt security, if available."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"derivatives_value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The notional value of derivatives contracts held."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The market value of the holding, on the 'as_of' date."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"weight"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The weight of the holding, as a normalized percent."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"updated"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The 'as_of' date for the holding."})]})]})]})}),(0,d.jsx)(i.A,{value:"sec",label:"sec",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (ETF)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Name of the ETF holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lei"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The LEI of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cusip"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The CUSIP of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isin"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The ISIN of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"other_id"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Internal identifier for the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"balance"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The balance of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"weight"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The weight of the holding in ETF in %."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The value of the holding in USD."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"payoff_profile"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The payoff profile of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"units"}),(0,d.jsx)(t.td,{children:"Union[str, float]"}),(0,d.jsx)(t.td,{children:"The units of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"asset_category"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The asset category of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"issuer_category"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The issuer category of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"country"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The country of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_restricted"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is restricted."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fair_value_level"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"The fair value level of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_cash_collateral"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is cash collateral."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_non_cash_collateral"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is non-cash collateral."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_loan_by_fund"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Whether the holding is loan by fund."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"loan_value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The loan value of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"issuer_conditional"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The issuer conditions of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"asset_conditional"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The asset conditions of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maturity_date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The maturity date of the debt security."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"coupon_kind"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The type of coupon for the debt security."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate_type"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The type of rate for the debt security, floating or fixed."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"annualized_return"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The annualized return on the debt security."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_default"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the debt security is defaulted."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"in_arrears"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the debt security is in arrears."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_paid_kind"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the debt security payments are paid in kind."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"derivative_category"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The derivative category of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"counterparty"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The counterparty of the derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"underlying_name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The name of the underlying asset associated with the derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"option_type"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The type of option."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"derivative_payoff"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The payoff profile of the derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"expiry_date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The expiry or termination date of the derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exercise_price"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The exercise price of the option."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exercise_currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the option exercise price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"shares_per_contract"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The number of shares per contract."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"delta"}),(0,d.jsx)(t.td,{children:"Union[str, float]"}),(0,d.jsx)(t.td,{children:"The delta of the option."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate_type_rec"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The type of rate for receivable portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"receive_currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The receive currency of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"upfront_receive"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The upfront amount received of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"floating_rate_index_rec"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The floating rate index for receivable portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"floating_rate_spread_rec"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The floating rate spread for reveivable portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate_tenor_rec"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The rate tenor for receivable portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate_tenor_unit_rec"}),(0,d.jsx)(t.td,{children:"Union[int, str]"}),(0,d.jsx)(t.td,{children:"The rate tenor unit for receivable portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"reset_date_rec"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The reset date for receivable portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"reset_date_unit_rec"}),(0,d.jsx)(t.td,{children:"Union[int, str]"}),(0,d.jsx)(t.td,{children:"The reset date unit for receivable portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate_type_pmnt"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The type of rate for payment portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"payment_currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The payment currency of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"upfront_payment"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The upfront amount received of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"floating_rate_index_pmnt"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The floating rate index for payment portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"floating_rate_spread_pmnt"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The floating rate spread for payment portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate_tenor_pmnt"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The rate tenor for payment portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate_tenor_unit_pmnt"}),(0,d.jsx)(t.td,{children:"Union[int, str]"}),(0,d.jsx)(t.td,{children:"The rate tenor unit for payment portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"reset_date_pmnt"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The reset date for payment portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"reset_date_unit_pmnt"}),(0,d.jsx)(t.td,{children:"Union[int, str]"}),(0,d.jsx)(t.td,{children:"The reset date unit for payment portion of the swap."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"repo_type"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The type of repo."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_cleared"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the repo is cleared."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"is_tri_party"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the repo is tri party."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"principal_amount"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The principal amount of the repo."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"principal_currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the principal amount."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"collateral_type"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The collateral type of the repo."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"collateral_amount"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The collateral amount of the repo."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"collateral_currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the collateral amount."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exchange_currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the exchange rate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exchange_rate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The exchange rate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency_sold"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency sold in a Forward Derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency_amount_sold"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The amount of currency sold in a Forward Derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency_bought"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency bought in a Forward Derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency_amount_bought"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The amount of currency bought in a Forward Derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"notional_amount"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The notional amount of the derivative."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"notional_currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the derivative's notional amount."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"unrealized_gain"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The unrealized gain or loss on the derivative."})]})]})]})}),(0,d.jsx)(i.A,{value:"tmx",label:"tmx",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The ticker symbol of the asset."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The name of the asset."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"weight"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The weight of the asset in the portfolio, as a normalized percentage."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"shares"}),(0,d.jsx)(t.td,{children:"Union[int, str]"}),(0,d.jsx)(t.td,{children:"The value of the assets under management."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"market_value"}),(0,d.jsx)(t.td,{children:"Union[str, float]"}),(0,d.jsx)(t.td,{children:"The market value of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The currency of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"share_percentage"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The share percentage of the holding, as a normalized percentage."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"share_change"}),(0,d.jsx)(t.td,{children:"Union[str, float]"}),(0,d.jsx)(t.td,{children:"The change in shares of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"country"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The country of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exchange"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The exchange code of the holding."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"type_id"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The holding type ID of the asset."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fund_id"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"The fund ID of the asset."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var d=r(34164);const s={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,d.A)(s.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>v});var d=r(96540),s=r(34164),n=r(23104),i=r(56347),l=r(205),h=r(57485),c=r(31682),a=r(89466);function o(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:d,default:s}}=e;return{value:t,label:r,attributes:d,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,h.aZ)(n),(0,d.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=x(e),[i,h]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const d=r.find((e=>e.default))??r[0];if(!d)throw new Error("Unexpected error: 0 tabValues");return d.value}({defaultValue:t,tabValues:n}))),[c,o]=u({queryString:r,groupId:s}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,a.Dv)(r);return[s,(0,d.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),m=(()=>{const e=c??f;return j({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&h(m)}),[m]);return{selectedValue:i,selectValue:(0,d.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);h(e),o(e),p(e)}),[o,p,n]),tabValues:n}}var p=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=r(74848);function b(e){let{className:t,block:r,selectedValue:d,selectValue:l,tabValues:h}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,n.a_)(),{pathname:o}=(0,i.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),s=h[r].value;s!==d&&(a(t),l(s))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:h.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>c.push(e),onKeyDown:j,onClick:x,...n,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function T(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,y.jsx)(b,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function v(e){const t=(0,p.A)();return(0,y.jsx)(T,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var d=r(96540);const s={},n=d.createContext(s);function i(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);