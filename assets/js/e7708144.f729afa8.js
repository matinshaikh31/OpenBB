"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44183],{30148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=r(74848),a=r(28453),l=r(18228),s=r(19365);const d={title:"EU Yield Curve",description:"Euro Area Yield Curve"},i=void 0,o={id:"platform/data_models/EUYieldCurve",title:"EU Yield Curve",description:"Euro Area Yield Curve",source:"@site/content/platform/data_models/EUYieldCurve.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EUYieldCurve",permalink:"/platform/data_models/EUYieldCurve",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/EUYieldCurve.md",tags:[],version:"current",frontMatter:{title:"EU Yield Curve",description:"Euro Area Yield Curve"},sidebar:"tutorialSidebar",previous:{title:"ETF Losers",permalink:"/platform/data_models/ETFLosers"},next:{title:"Earnings Call Transcript",permalink:"/platform/data_models/EarningsCallTranscript"}},c={},u=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EUYieldCurve"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EUYieldCurveQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EUYieldCurveData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.eu_yield_curve import (\nEUYieldCurveData,\nEUYieldCurveQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"A specific date to get data for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['ecb']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'ecb' if there is no default."}),(0,n.jsx)(t.td,{children:"ecb"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(s.A,{value:"ecb",label:"ecb",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"A specific date to get data for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['ecb']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'ecb' if there is no default."}),(0,n.jsx)(t.td,{children:"ecb"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rating"}),(0,n.jsx)(t.td,{children:"Literal['aaa', 'all_ratings']"}),(0,n.jsx)(t.td,{children:"The rating type, either 'aaa' or 'all_ratings'."}),(0,n.jsx)(t.td,{children:"aaa"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"yield_curve_type"}),(0,n.jsx)(t.td,{children:"Literal['spot_rate', 'instantaneous_forward', 'par_yield']"}),(0,n.jsx)(t.td,{children:"The yield curve type."}),(0,n.jsx)(t.td,{children:"spot_rate"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maturity, in years."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Yield curve rate, as a normalized percent."})]})]})]})}),(0,n.jsx)(s.A,{value:"ecb",label:"ecb",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maturity, in years."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Yield curve rate, as a normalized percent."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var l=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(96540),a=r(34164),l=r(23104),s=r(56347),d=r(205),i=r(57485),o=r(31682),c=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=p({queryString:r,groupId:a}),[j,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=o??j;return x({value:e,tabValues:l})?e:null})();(0,d.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const t=e.currentTarget,r=o.indexOf(t),a=i[r].value;a!==n&&(c(t),d(a))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:x,onClick:h,...l,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,l?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function C(e){const t=(0,m.A)();return(0,f.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var n=r(96540);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);