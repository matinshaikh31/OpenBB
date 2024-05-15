"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31394],{78120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(74848),s=a(28453),r=a(94331);const n={title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},d=void 0,o={id:"excel/reference/equity/estimates/historical",title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",source:"@site/content/excel/reference/equity/estimates/historical.md",sourceDirName:"excel/reference/equity/estimates",slug:"/excel/reference/equity/estimates/historical",permalink:"/excel/reference/equity/estimates/historical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/estimates/historical.md",tags:[],version:"current",frontMatter:{title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},sidebar:"tutorialSidebar",previous:{title:"CONSENSUS",permalink:"/excel/reference/equity/estimates/consensus"},next:{title:"PRICE_TARGET",permalink:"/excel/reference/equity/estimates/price_target"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function m(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"EQUITY.ESTIMATES.HISTORICAL | OpenBB Add-in for Excel Docs"}),"\n",(0,i.jsx)(t.p,{children:"Get historical analyst estimates for earnings and revenue."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.ESTIMATES.HISTORICAL(symbol,[provider],[period],[limit])\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.ESTIMATES.HISTORICAL("AAPL","fmp")\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"symbol"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Text"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Symbol to get data for. Multiple comma separated items allowed for provider(s): fmp."})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"True"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"provider"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"Options: fmp, defaults to fmp."}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"Time period of the data to return. (provider: fmp)"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsx)(t.td,{children:"The number of data entries to return. (provider: fmp)"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var i=a(5260),s=a(74848);function r(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>d});var i=a(96540);const s={},r=i.createContext(s);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);