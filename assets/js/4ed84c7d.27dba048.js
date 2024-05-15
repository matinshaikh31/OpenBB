"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47604],{61409:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(74848),s=t(28453),l=t(94331),d=t(18228),a=t(19365);const i={title:"country_profile",description:"Get a profile of country statistics and economic indicators",keywords:["economy","country_profile"]},o=void 0,c={id:"platform/reference/economy/country_profile",title:"country_profile",description:"Get a profile of country statistics and economic indicators",source:"@site/content/platform/reference/economy/country_profile.md",sourceDirName:"platform/reference/economy",slug:"/platform/reference/economy/country_profile",permalink:"/platform/reference/economy/country_profile",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/economy/country_profile.md",tags:[],version:"current",frontMatter:{title:"country_profile",description:"Get a profile of country statistics and economic indicators",keywords:["economy","country_profile"]},sidebar:"tutorialSidebar",previous:{title:"composite_leading_indicator",permalink:"/platform/reference/economy/composite_leading_indicator"},next:{title:"cpi",permalink:"/platform/reference/economy/cpi"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{title:"economy/country_profile - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get a profile of country statistics and economic indicators."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.economy.country_profile(provider='econdb', country='united_kingdom')\n# Enter the country as the full name, or iso code. If `latest` is False, the complete history for each series is returned.\nobb.economy.country_profile(country='united_states,jp', latest=False, provider='econdb')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"country"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"The country to get data. Multiple items allowed for provider(s): econdb."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['econdb']"}),(0,n.jsx)(r.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'econdb' if there is no default."}),(0,n.jsx)(r.td,{children:"econdb"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"econdb",label:"econdb",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"country"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"The country to get data. Multiple items allowed for provider(s): econdb."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['econdb']"}),(0,n.jsx)(r.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'econdb' if there is no default."}),(0,n.jsx)(r.td,{children:"econdb"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"latest"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"If True, return only the latest data. If False, return all available data for each indicator."}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"use_cache"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"If True, the request will be cached for one day.Using cache is recommended to avoid needlessly requesting the same data."}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CountryProfile]\n        Serializable results.\n\n    provider : Optional[Literal['econdb']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"country"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"population"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Population."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gdp_usd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Gross Domestic Product, in billions of USD."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gdp_qoq"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"GDP growth quarter-over-quarter change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gdp_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"GDP growth year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cpi_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Consumer Price Index year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"core_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Core Consumer Price Index year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"retail_sales_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Retail Sales year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"industrial_production_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Industrial Production year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"policy_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Short term policy rate, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"yield_10y"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"10-year government bond yield, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"govt_debt_gdp"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Government debt as a percent (normalized) of GDP."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"current_account_gdp"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Current account balance as a percent (normalized) of GDP."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"jobless_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Unemployment rate, as a normalized percent."})]})]})]})}),(0,n.jsx)(a.A,{value:"econdb",label:"econdb",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"country"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"population"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Population."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gdp_usd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Gross Domestic Product, in billions of USD."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gdp_qoq"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"GDP growth quarter-over-quarter change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gdp_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"GDP growth year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cpi_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Consumer Price Index year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"core_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Core Consumer Price Index year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"retail_sales_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Retail Sales year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"industrial_production_yoy"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Industrial Production year-over-year change, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"policy_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Short term policy rate, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"yield_10y"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"10-year government bond yield, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"govt_debt_gdp"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Government debt as a percent (normalized) of GDP."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"current_account_gdp"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Current account balance as a percent (normalized) of GDP."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"jobless_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Unemployment rate, as a normalized percent."})]})]})]})})]})]})}function j(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var l=t(74848);function d(e){let{children:r,hidden:t,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(5260),s=t(74848);function l(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var n=t(96540),s=t(34164),l=t(23104),d=t(56347),a=t(205),i=t(57485),o=t(31682),c=t(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,d.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(s.location.search);r.set(l,e),s.replace({...s.location,search:r.toString()})}),[l,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,l=u(e),[d,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[o,h]=j({queryString:t,groupId:s}),[p,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,l]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),m=(()=>{const e=o??p;return x({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{m&&i(m)}),[m]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),s=i[t].value;s!==n&&(c(r),a(s))},x=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:x,onClick:u,...l,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,l?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=p(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,y.jsx)(b,{...e,...r}),(0,y.jsx)(v,{...e,...r})]})}function _(e){const r=(0,f.A)();return(0,y.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>a});var n=t(96540);const s={},l=n.createContext(s);function d(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);