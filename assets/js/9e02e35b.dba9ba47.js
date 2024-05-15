"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36106],{18089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(74848),a=n(28453),d=n(94331);const i={title:"CPI",description:"Get Consumer Price Index (CPI) data for various countries and calculate inflation measurements. This economic indicator provides insights into the growth rate of prices on a monthly, quarterly, and annual basis. Harmonized CPI data is also available. Specify the start and end dates for the desired data range. The data provider and metadata information are included in the results.",keywords:["Consumer Price Index (CPI) Data","CPI data","CPI calculation","inflation measurement","economic indicator","country-wise CPI data","growth rate","monthly CPI","quarterly CPI","annual CPI","harmonized CPI","start date","end date","data provider","metadata info"]},s=void 0,o={id:"excel/reference/economy/cpi",title:"CPI",description:"Get Consumer Price Index (CPI) data for various countries and calculate inflation measurements. This economic indicator provides insights into the growth rate of prices on a monthly, quarterly, and annual basis. Harmonized CPI data is also available. Specify the start and end dates for the desired data range. The data provider and metadata information are included in the results.",source:"@site/content/excel/reference/economy/cpi.md",sourceDirName:"excel/reference/economy",slug:"/excel/reference/economy/cpi",permalink:"/excel/reference/economy/cpi",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/economy/cpi.md",tags:[],version:"current",frontMatter:{title:"CPI",description:"Get Consumer Price Index (CPI) data for various countries and calculate inflation measurements. This economic indicator provides insights into the growth rate of prices on a monthly, quarterly, and annual basis. Harmonized CPI data is also available. Specify the start and end dates for the desired data range. The data provider and metadata information are included in the results.",keywords:["Consumer Price Index (CPI) Data","CPI data","CPI calculation","inflation measurement","economic indicator","country-wise CPI data","growth rate","monthly CPI","quarterly CPI","annual CPI","harmonized CPI","start date","end date","data provider","metadata info"]},sidebar:"tutorialSidebar",previous:{title:"COMPOSITE_LEADING_INDICATOR",permalink:"/excel/reference/economy/composite_leading_indicator"},next:{title:"FRED_REGIONAL",permalink:"/excel/reference/economy/fred_regional"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:"ECONOMY.CPI | OpenBB Add-in for Excel Docs"}),"\n",(0,r.jsx)(t.p,{children:"Consumer Price Index (CPI).  Returns either the rescaled index value, or a rate of change (inflation)."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:"=OBB.ECONOMY.CPI(country,[units],[frequency],[harmonized],[start_date],[end_date],[provider])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:'=OBB.ECONOMY.CPI("japan,china,turkey",,,,,,"fred")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:'=OBB.ECONOMY.CPI("united_states,united_kingdom","growth_previous",,,,,"fred")\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"country"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Text"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"The country to get data. Multiple comma separated items allowed for provider(s): fred."})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"True"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"units"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsxs)(t.td,{children:["The unit of measurement for the data. Options: - ",(0,r.jsx)(t.code,{children:"growth_previous"}),": Percent growth from the previous period. If monthly data, this is month-over-month, etc - ",(0,r.jsx)(t.code,{children:"growth_same"}),": Percent growth from the same period in the previous year. If looking at monthly data, this would be year-over-year, etc. - ",(0,r.jsx)(t.code,{children:"index_2015"}),": Rescaled index value, such that the value in 2015 is 100."]}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"frequency"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsxs)(t.td,{children:["The frequency of the data. Options: ",(0,r.jsx)(t.code,{children:"monthly"}),", ",(0,r.jsx)(t.code,{children:"quarter"}),", and ",(0,r.jsx)(t.code,{children:"annual"}),"."]}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"harmonized"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Whether you wish to obtain harmonized data."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"Options: fred, defaults to fred."}),(0,r.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(5260),a=n(74848);function d(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},d=r.createContext(a);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);