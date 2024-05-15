"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29664],{27431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var n=r(74848),i=r(28453),s=r(94331),d=r(18228),a=r(19365);const o={title:"cash_growth",description:"Learn about Cash Flow Statement Growth and how to retrieve cash growth  data using the Python function obb.equity.fundamental.cash_growth(). This page provides  details on the function's parameters and the data it returns, including information  on net income, depreciation and amortization, working capital, investments, financing  activities, and more.",keywords:["Cash Flow Statement Growth","company cash flow","cash growth","Python","function","parameters","symbol","limit","provider","data","returns","net income","depreciation and amortization","deferred income tax","stock-based compensation","working capital","accounts receivables","inventory","accounts payables","other non-cash items","net cash provided by operating activities","investments in property, plant, and equipment","net acquisitions","purchases of investments","sales maturities of investments","net cash used for investing activities","debt repayment","common stock issued","common stock repurchased","dividends paid","net cash used/provided by financing activities","foreign exchange changes on cash","net change in cash","cash at end of period","cash at beginning of period","operating cash flow","capital expenditure","free cash flow"]},c=void 0,h={id:"platform/reference/equity/fundamental/cash_growth",title:"cash_growth",description:"Learn about Cash Flow Statement Growth and how to retrieve cash growth  data using the Python function obb.equity.fundamental.cash_growth(). This page provides  details on the function's parameters and the data it returns, including information  on net income, depreciation and amortization, working capital, investments, financing  activities, and more.",source:"@site/content/platform/reference/equity/fundamental/cash_growth.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/cash_growth",permalink:"/platform/reference/equity/fundamental/cash_growth",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/fundamental/cash_growth.md",tags:[],version:"current",frontMatter:{title:"cash_growth",description:"Learn about Cash Flow Statement Growth and how to retrieve cash growth  data using the Python function obb.equity.fundamental.cash_growth(). This page provides  details on the function's parameters and the data it returns, including information  on net income, depreciation and amortization, working capital, investments, financing  activities, and more.",keywords:["Cash Flow Statement Growth","company cash flow","cash growth","Python","function","parameters","symbol","limit","provider","data","returns","net income","depreciation and amortization","deferred income tax","stock-based compensation","working capital","accounts receivables","inventory","accounts payables","other non-cash items","net cash provided by operating activities","investments in property, plant, and equipment","net acquisitions","purchases of investments","sales maturities of investments","net cash used for investing activities","debt repayment","common stock issued","common stock repurchased","dividends paid","net cash used/provided by financing activities","foreign exchange changes on cash","net change in cash","cash at end of period","cash at beginning of period","operating cash flow","capital expenditure","free cash flow"]},sidebar:"tutorialSidebar",previous:{title:"cash",permalink:"/platform/reference/equity/fundamental/cash"},next:{title:"dividends",permalink:"/platform/reference/equity/fundamental/dividends"}},l={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function f(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"equity/fundamental/cash_growth - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the growth of a company's cash flow statement items over time."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.cash_growth(symbol='AAPL', provider='fmp')\nobb.equity.fundamental.cash_growth(symbol='AAPL', limit=10, provider='fmp')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CashFlowStatementGrowth]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Period the statement is returned for."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_income"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_depreciation_and_amortization"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of depreciation and amortization."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_deferred_income_tax"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of deferred income tax."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_stock_based_compensation"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of stock-based compensation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_change_in_working_capital"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of change in working capital."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_accounts_receivables"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of accounts receivables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_inventory"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of inventory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_accounts_payables"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of accounts payables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_working_capital"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other working capital."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_non_cash_items"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other non-cash items."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_cash_provided_by_operating_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net cash provided by operating activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_investments_in_property_plant_and_equipment"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of investments in property, plant, and equipment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_acquisitions_net"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net acquisitions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_purchases_of_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of purchases of investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_sales_maturities_of_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of sales maturities of investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_investing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other investing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_cash_used_for_investing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net cash used for investing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_debt_repayment"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of debt repayment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_common_stock_issued"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of common stock issued."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_common_stock_repurchased"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of common stock repurchased."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_dividends_paid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of dividends paid."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_financing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other financing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_cash_used_provided_by_financing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net cash used/provided by financing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_effect_of_forex_changes_on_cash"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of the effect of foreign exchange changes on cash."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_change_in_cash"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net change in cash."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cash_at_end_of_period"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cash at the end of the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cash_at_beginning_of_period"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cash at the beginning of the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_cash_flow"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of operating cash flow."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_capital_expenditure"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of capital expenditure."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_free_cash_flow"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of free cash flow."})]})]})]})}),(0,n.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Period the statement is returned for."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_income"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_depreciation_and_amortization"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of depreciation and amortization."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_deferred_income_tax"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of deferred income tax."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_stock_based_compensation"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of stock-based compensation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_change_in_working_capital"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of change in working capital."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_accounts_receivables"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of accounts receivables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_inventory"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of inventory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_accounts_payables"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of accounts payables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_working_capital"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other working capital."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_non_cash_items"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other non-cash items."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_cash_provided_by_operating_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net cash provided by operating activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_investments_in_property_plant_and_equipment"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of investments in property, plant, and equipment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_acquisitions_net"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net acquisitions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_purchases_of_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of purchases of investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_sales_maturities_of_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of sales maturities of investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_investing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other investing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_cash_used_for_investing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net cash used for investing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_debt_repayment"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of debt repayment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_common_stock_issued"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of common stock issued."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_common_stock_repurchased"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of common stock repurchased."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_dividends_paid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of dividends paid."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_financing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other financing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_cash_used_provided_by_financing_activities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net cash used/provided by financing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_effect_of_forex_changes_on_cash"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of the effect of foreign exchange changes on cash."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_change_in_cash"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net change in cash."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cash_at_end_of_period"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cash at the end of the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cash_at_beginning_of_period"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cash at the beginning of the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_cash_flow"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of operating cash flow."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_capital_expenditure"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of capital expenditure."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_free_cash_flow"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of free cash flow."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),i=r(34164),s=r(23104),d=r(56347),a=r(205),o=r(57485),c=r(31682),h=r(89466);function l(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??l(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const i=(0,d.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function u(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=x(e),[d,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,l]=j({queryString:r,groupId:i}),[u,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,h.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),m=(()=>{const e=c??u;return f({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{m&&o(m)}),[m]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),l(e),p(e)}),[l,p,s]),tabValues:s}}var p=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var _=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),{pathname:l}=(0,d.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),i=o[r].value;i!==n&&(h(t),a(i))},f=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:f,onClick:x,...s,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&l.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&l.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&l.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&l.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&l.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&l.startsWith("/terminal")}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function b(e){const t=u(e);return(0,_.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,_.jsx)(g,{...e,...t}),(0,_.jsx)(w,{...e,...t})]})}function v(e){const t=(0,p.A)();return(0,_.jsx)(b,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var n=r(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);