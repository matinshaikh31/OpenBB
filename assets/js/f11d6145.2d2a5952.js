"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93121],{69631:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>_,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(74848),s=a(28453),r=a(94331);const i={title:"INSTITUTIONAL",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional function in Python to access the data. Explore the symbol, include_current_quarter, date, and provider parameters. Understand the meaning and usage of the results, provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares, total_invested, ownership_percent, new_positions, closed_positions, total_calls, total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},o=void 0,d={id:"excel/reference/equity/ownership/institutional",title:"INSTITUTIONAL",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional function in Python to access the data. Explore the symbol, include_current_quarter, date, and provider parameters. Understand the meaning and usage of the results, provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares, total_invested, ownership_percent, new_positions, closed_positions, total_calls, total_puts, and put_call_ratio.",source:"@site/content/excel/reference/equity/ownership/institutional.md",sourceDirName:"excel/reference/equity/ownership",slug:"/excel/reference/equity/ownership/institutional",permalink:"/excel/reference/equity/ownership/institutional",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/ownership/institutional.md",tags:[],version:"current",frontMatter:{title:"INSTITUTIONAL",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional function in Python to access the data. Explore the symbol, include_current_quarter, date, and provider parameters. Understand the meaning and usage of the results, provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares, total_invested, ownership_percent, new_positions, closed_positions, total_calls, total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},sidebar:"tutorialSidebar",previous:{title:"INSIDER_TRADING",permalink:"/excel/reference/equity/ownership/insider_trading"},next:{title:"MAJOR_HOLDERS",permalink:"/excel/reference/equity/ownership/major_holders"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function p(t){const e={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"EQUITY.OWNERSHIP.INSTITUTIONAL | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(e.p,{children:"Get data about institutional ownership for a given company over time."}),"\n",(0,n.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-excel",children:"=OBB.EQUITY.OWNERSHIP.INSTITUTIONAL(symbol,[provider],[include_current_quarter],[date])\n"})}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-excel",children:'=OBB.EQUITY.OWNERSHIP.INSTITUTIONAL("AAPL","fmp")\n'})}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Name"}),(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"Description"}),(0,n.jsx)(e.th,{children:"Required"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"symbol"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"Text"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"True"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"provider"}),(0,n.jsx)(e.td,{children:"Text"}),(0,n.jsx)(e.td,{children:"Options: fmp, defaults to fmp."}),(0,n.jsx)(e.td,{children:"False"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"include_current_quarter"}),(0,n.jsx)(e.td,{children:"Boolean"}),(0,n.jsx)(e.td,{children:"Include current quarter data. (provider: fmp)"}),(0,n.jsx)(e.td,{children:"False"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"date"}),(0,n.jsx)(e.td,{children:"Text"}),(0,n.jsx)(e.td,{children:"A specific date to get data for. (provider: fmp)"}),(0,n.jsx)(e.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(e.hr,{})]})}function _(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},94331:(t,e,a)=>{a.d(e,{A:()=>r});a(96540);var n=a(5260),s=a(74848);function r(t){let{title:e}=t;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:e})})}},28453:(t,e,a)=>{a.d(e,{R:()=>i,x:()=>o});var n=a(96540);const s={},r=n.createContext(s);function i(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);