"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75071],{12705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=r(74848),i=r(28453),s=r(94331),o=r(18228),l=r(19365);const d={title:"ef",description:"The page highlights the use and functioning of the efficient frontier model in portfolio optimization. It includes explanations about parameters used, type of returns, and examples. Furthermore, it details the process for displaying the efficient frontier chart.",keywords:["Efficient Frontier","Portfolio Optimization","Financial Models","Risk Measure","Portfolio Simulation","Stock Portfolio","Data Visualization","Financial Software"]},a=void 0,c={id:"sdk/reference/portfolio/po/ef",title:"ef",description:"The page highlights the use and functioning of the efficient frontier model in portfolio optimization. It includes explanations about parameters used, type of returns, and examples. Furthermore, it details the process for displaying the efficient frontier chart.",source:"@site/content/sdk/reference/portfolio/po/ef.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/ef",permalink:"/sdk/reference/portfolio/po/ef",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/ef.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"ef",description:"The page highlights the use and functioning of the efficient frontier model in portfolio optimization. It includes explanations about parameters used, type of returns, and examples. Furthermore, it details the process for displaying the efficient frontier chart.",keywords:["Efficient Frontier","Portfolio Optimization","Financial Models","Risk Measure","Portfolio Simulation","Stock Portfolio","Data Visualization","Financial Software"]},sidebar:"tutorialSidebar",previous:{title:"dividend",permalink:"/sdk/reference/portfolio/po/dividend"},next:{title:"equal",permalink:"/sdk/reference/portfolio/po/equal"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"portfolio.po.ef - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Get Efficient Frontier"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L1120",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.ef(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PoEngine"}),(0,n.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbols"}),(0,n.jsx)(t.td,{children:"List[str]"}),(0,n.jsx)(t.td,{children:"List of symbols, by default None"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_returns"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"freq"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxnan"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"threshold"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"method"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,n.jsx)("br",{}),"For more information see ",(0,n.jsx)(t.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value_short"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_measure"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["The risk measure used to optimize the portfolio, by default 'MV'",(0,n.jsx)("br",{}),"Possible values are:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"- 'MV': Standard Deviation.",(0,n.jsx)("br",{}),"- 'MAD': Mean Absolute Deviation.",(0,n.jsx)("br",{}),"- 'MSV': Semi Standard Deviation.",(0,n.jsx)("br",{}),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,n.jsx)("br",{}),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,n.jsx)("br",{}),"- 'CVaR': Conditional Value at Risk.",(0,n.jsx)("br",{}),"- 'EVaR': Entropic Value at Risk.",(0,n.jsx)("br",{}),"- 'WR': Worst Realization.",(0,n.jsx)("br",{}),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_free_rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"alpha"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses, by default 0.05"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_portfolios"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of portfolios to simulate, by default 100"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"seed"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Seed used to generate random portfolios, by default 123"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tuple["}),(0,n.jsxs)(t.td,{children:["pd.DataFrame,",(0,n.jsx)("br",{}),"pd.DataFrame,",(0,n.jsx)("br",{}),"pd.DataFrame,",(0,n.jsx)("br",{}),"pd.DataFrame,",(0,n.jsx)("br",{}),"Optional[pd.DataFrame],",(0,n.jsx)("br",{}),"NDArray[floating],",(0,n.jsx)("br",{}),"NDArray[floating],",(0,n.jsx)("br",{}),"rp.Portfolio,"]})]})})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nfrontier = openbb.portfolio.po.ef(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nfrontier = openbb.portfolio.po.ef(portfolio_engine=p)\n'})}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Display efficient frontier"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_view.py#L41",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.ef_chart(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PoEngine"}),(0,n.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbols"}),(0,n.jsx)(t.td,{children:"List[str]"}),(0,n.jsx)(t.td,{children:"List of symbols, by default None"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_returns"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"freq"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxnan"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"threshold"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"method"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,n.jsx)("br",{}),"For more information see ",(0,n.jsx)(t.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value_short"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_measure"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["The risk measure used to optimize the portfolio, by default 'MV'",(0,n.jsx)("br",{}),"Possible values are:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"- 'MV': Standard Deviation.",(0,n.jsx)("br",{}),"- 'MAD': Mean Absolute Deviation.",(0,n.jsx)("br",{}),"- 'MSV': Semi Standard Deviation.",(0,n.jsx)("br",{}),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,n.jsx)("br",{}),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,n.jsx)("br",{}),"- 'CVaR': Conditional Value at Risk.",(0,n.jsx)("br",{}),"- 'EVaR': Entropic Value at Risk.",(0,n.jsx)("br",{}),"- 'WR': Worst Realization.",(0,n.jsx)("br",{}),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_free_rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"alpha"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses, by default 0.05"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_portfolios"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of portfolios to simulate, by default 100"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"seed"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Seed used to generate random portfolios, by default 123"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"examples-1",children:"Examples"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nfrontier = openbb.portfolio.po.ef_chart(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nfrontier = openbb.portfolio.po.ef_chart(portfolio_engine=p)\n'})}),(0,n.jsx)(t.hr,{})]})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>D});var n=r(96540),i=r(34164),s=r(23104),o=r(56347),l=r(205),d=r(57485),a=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=u(e),[o,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[a,h]=f({queryString:r,groupId:i}),[j,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),b=(()=>{const e=a??j;return x({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,s]),tabValues:s}}var p=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:h}=(0,o.zy)(),u=e=>{const t=e.currentTarget,r=a.indexOf(t),i=d[r].value;i!==n&&(c(t),l(i))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:x,onClick:u,...s,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=j(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,m.jsx)(y,{...e,...t}),(0,m.jsx)(g,{...e,...t})]})}function D(e){const t=(0,p.A)();return(0,m.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);