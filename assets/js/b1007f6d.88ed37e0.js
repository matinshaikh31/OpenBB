"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85205],{64899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),d=n(94331),a=n(18228),i=n(19365);const l={title:"index",description:"This page provides documentation for the OpenBB Terminal SDK functions for fetching and visualizing economic indices data from Yahoo Finance. It provides Python code examples and explains parameters and returns in detail.",keywords:["Docusaurus documentation","OpenBB Terminal SDK","Economy indices","Yahoo Finance data","Data visualization","Python code examples","Data intervals","Data start and end dates","Adjusted Close","Cumulative returns on index","Export data"]},o=void 0,c={id:"sdk/reference/economy/index_cmd",title:"index",description:"This page provides documentation for the OpenBB Terminal SDK functions for fetching and visualizing economic indices data from Yahoo Finance. It provides Python code examples and explains parameters and returns in detail.",source:"@site/content/sdk/reference/economy/index_cmd.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/index_cmd",permalink:"/sdk/reference/economy/index_cmd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/index_cmd.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"index",description:"This page provides documentation for the OpenBB Terminal SDK functions for fetching and visualizing economic indices data from Yahoo Finance. It provides Python code examples and explains parameters and returns in detail.",keywords:["Docusaurus documentation","OpenBB Terminal SDK","Economy indices","Yahoo Finance data","Data visualization","Python code examples","Data intervals","Data start and end dates","Adjusted Close","Cumulative returns on index","Export data"]},sidebar:"tutorialSidebar",previous:{title:"glbonds",permalink:"/sdk/reference/economy/glbonds"},next:{title:"indices",permalink:"/sdk/reference/economy/indices"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:"economy.index - Reference | OpenBB SDK Docs"}),"\n","\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(i.A,{value:"model",label:"Model",default:!0,children:[(0,r.jsx)(t.p,{children:"Get data on selected indices over time [Source: Yahoo Finance]"}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/yfinance_model.py#L672",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.economy.index(indices: list, interval: str = "1d", start_date: int = None, end_date: int = None, column: str = "Adj Close", returns: bool = False)\n'})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indices"}),(0,r.jsx)(t.td,{children:"list"}),(0,r.jsx)(t.td,{children:"A list of indices to get data. Available indices can be accessed through economy.available_indices()."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsxs)(t.td,{children:["Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo",(0,r.jsx)("br",{}),"Intraday data cannot extend last 60 days"]}),(0,r.jsx)(t.td,{children:"1d"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31.'}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05.'}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"column"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'Which column to load in, by default "Adjusted Close".'}),(0,r.jsx)(t.td,{children:"Adj Close"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"returns"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to show cumulative returns on index"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.Dataframe"}),(0,r.jsx)(t.td,{children:"Dataframe with historical data on selected indices."})]})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.economy.available_indices()\nopenbb.economy.index(["^GSPC", "sp400"])\n'})}),(0,r.jsx)(t.hr,{})]}),(0,r.jsxs)(i.A,{value:"view",label:"Chart",children:[(0,r.jsx)(t.p,{children:"Load (and show) the selected indices over time [Source: Yahoo Finance]"}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/yfinance_view.py#L30",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.economy.index_chart(indices: list, interval: str = "1d", start_date: int = None, end_date: int = None, column: str = "Adj Close", returns: bool = False, raw: bool = False, external_axes: Optional[List[axes]] = None, export: str = "")\n'})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indices"}),(0,r.jsx)(t.td,{children:"list"}),(0,r.jsxs)(t.td,{children:["A list of indices you wish to load (and plot).",(0,r.jsx)("br",{}),"Available indices can be accessed through economy.available_indices()."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsxs)(t.td,{children:["Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo",(0,r.jsx)("br",{}),"Intraday data cannot extend last 60 days"]}),(0,r.jsx)(t.td,{children:"1d"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31.'}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05.'}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"column"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Which column to load in, by default this is the Adjusted Close."}),(0,r.jsx)(t.td,{children:"Adj Close"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"returns"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to show cumulative returns on index"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"raw"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to display the raw output."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"external_axes"}),(0,r.jsx)(t.td,{children:"Optional[List[plt.axes]]"}),(0,r.jsx)(t.td,{children:"External axes to plot on"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Export data to csv,json,xlsx or png,jpg,pdf,svg file"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Plots the Series."}),(0,r.jsx)(t.td,{})]})})]}),(0,r.jsx)(t.hr,{})]})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var d=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(5260),s=n(74848);function d(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(96540),s=n(34164),d=n(23104),a=n(56347),i=n(205),l=n(57485),o=n(31682),c=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),d=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(d),(0,r.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,d=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:d}))),[o,h]=m({queryString:n,groupId:s}),[j,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&d.set(e)}),[n,d])]}({groupId:s}),b=(()=>{const e=o??j;return x({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,d]),tabValues:d}}var p=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(c(t),i(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:n,attributes:d}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...d,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,d?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&h.startsWith("/terminal")}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function T(e){const t=(0,p.A)();return(0,f.jsx)(g,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},d=r.createContext(s);function a(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);