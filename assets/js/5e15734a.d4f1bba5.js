"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5512],{32082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var n=r(74848),s=r(28453),a=r(18228),d=r(19365);const l={title:"COT",description:"Get Commitment of Traders Reports"},i=void 0,o={id:"platform/data_models/COT",title:"COT",description:"Get Commitment of Traders Reports",source:"@site/content/platform/data_models/COT.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/COT",permalink:"/platform/data_models/COT",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/COT.md",tags:[],version:"current",frontMatter:{title:"COT",description:"Get Commitment of Traders Reports"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/platform/data_models/CLI"},next:{title:"COT Search",permalink:"/platform/data_models/COTSearch"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"COT"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"COTQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"COTData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.cot import (\nCOTData,\nCOTQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The series ID string for the report. Default report is Two-Year Treasury Note Futures."}),(0,n.jsx)(t.td,{children:"042601"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'nasdaq' if there is no default."}),(0,n.jsx)(t.td,{children:"nasdaq"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"CFTC series ID. Use search_cot() to find the ID.       IDs not listed in the curated list, but are published on the Nasdaq Data Link website, are valid.       Certain symbols, such as 'ES=F', or exact names are also valid.       Default report is Two-Year Treasury Note Futures."}),(0,n.jsx)(t.td,{children:"042601"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'nasdaq' if there is no default."}),(0,n.jsx)(t.td,{children:"nasdaq"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data_type"}),(0,n.jsx)(t.td,{children:"Literal['F', 'FO', 'CITS']"}),(0,n.jsx)(t.td,{children:"The type of data to reuturn. Default is 'FO'.       F = Futures only       FO = Futures and Options       CITS = Commodity Index Trader Supplemental. Only valid for commodities."}),(0,n.jsx)(t.td,{children:"FO"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"legacy_format"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Returns the legacy format of report. Default is False."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_type"}),(0,n.jsx)(t.td,{children:"Literal['ALL', 'CHG', 'OLD', 'OTR']"}),(0,n.jsx)(t.td,{children:"The type of report to return. Default is 'ALL'.       ALL = All       CHG = Change in Positions       OLD = Old Crop Years       OTR = Other Crop Years"}),(0,n.jsx)(t.td,{children:"ALL"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"measure"}),(0,n.jsx)(t.td,{children:"Literal['CR', 'NT', 'OI', 'CHG']"}),(0,n.jsx)(t.td,{children:"The measure to return. Default is None.       CR = Concentration Ratios       NT = Number of Traders       OI = Percent of Open Interest       CHG = Change in Positions. Only valid when data_type is 'CITS'."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['diff', 'rdiff', 'cumul', 'normalize']"}),(0,n.jsx)(t.td,{children:"Transform the data as difference, percent change, cumulative, or normalize."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"collapse"}),(0,n.jsx)(t.td,{children:"Literal['daily', 'weekly', 'monthly', 'quarterly', 'annual']"}),(0,n.jsx)(t.td,{children:"Collapse the frequency of the time series."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]})})]})}),(0,n.jsx)(d.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]})})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(96540),s=r(34164),a=r(23104),d=r(56347),l=r(205),i=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=u(e),[d,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,h]=j({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),p=(()=>{const e=o??m;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{p&&i(p)}),[p]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=i[r].value;s!==n&&(c(t),l(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function T(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(T,{...e,...t})]})}function C(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);