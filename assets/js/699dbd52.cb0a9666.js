"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95160],{14298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(74848),a=n(28453),s=n(94331),i=n(18228),d=n(19365);const l={title:"management_compensation",description:"Learn how to retrieve executive compensation data for a company using  the equity management compensation function in Python. Understand the parameters,  return values, and available data fields such as symbol, salary, bonus, stock award,  and more.",keywords:["executive compensation","company executive compensation","equity management compensation","symbol parameter","provider parameter","return values","data","symbol","cik","filing date","accepted date","name and position","year of compensation","salary","bonus","stock award","incentive plan compensation","all other compensation","total compensation","URL"]},o=void 0,c={id:"platform/reference/equity/fundamental/management_compensation",title:"management_compensation",description:"Learn how to retrieve executive compensation data for a company using  the equity management compensation function in Python. Understand the parameters,  return values, and available data fields such as symbol, salary, bonus, stock award,  and more.",source:"@site/content/platform/reference/equity/fundamental/management_compensation.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/management_compensation",permalink:"/platform/reference/equity/fundamental/management_compensation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/fundamental/management_compensation.md",tags:[],version:"current",frontMatter:{title:"management_compensation",description:"Learn how to retrieve executive compensation data for a company using  the equity management compensation function in Python. Understand the parameters,  return values, and available data fields such as symbol, salary, bonus, stock award,  and more.",keywords:["executive compensation","company executive compensation","equity management compensation","symbol parameter","provider parameter","return values","data","symbol","cik","filing date","accepted date","name and position","year of compensation","salary","bonus","stock award","incentive plan compensation","all other compensation","total compensation","URL"]},sidebar:"tutorialSidebar",previous:{title:"management",permalink:"/platform/reference/equity/fundamental/management"},next:{title:"metrics",permalink:"/platform/reference/equity/fundamental/metrics"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function m(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"equity/fundamental/management_compensation - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Get executive management team compensation for a given company over time."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.management_compensation(symbol='AAPL', provider='fmp')\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['fmp']"}),(0,r.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,r.jsx)(t.td,{children:"fmp"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['fmp']"}),(0,r.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,r.jsx)(t.td,{children:"fmp"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Year of the compensation."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[ExecutiveCompensation]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cik"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"company_name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The name of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"industry"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The industry of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Year of the compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name_and_position"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name and position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"salary"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Salary."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bonus"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Bonus payments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stock_award"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Stock awards."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"incentive_plan_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Incentive plan compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"all_other_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"All other compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"total"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Total compensation."})]})]})]})}),(0,r.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cik"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"company_name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The name of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"industry"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The industry of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Year of the compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name_and_position"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name and position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"salary"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Salary."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bonus"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Bonus payments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stock_award"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Stock awards."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"incentive_plan_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Incentive plan compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"all_other_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"All other compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"total"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Total compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Date of the filing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accepted_date"}),(0,r.jsx)(t.td,{children:"datetime"}),(0,r.jsx)(t.td,{children:"Date the filing was accepted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"URL to the filing data."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),s=n(23104),i=n(56347),d=n(205),l=n(57485),o=n(31682),c=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,h]=x({queryString:n,groupId:a}),[p,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:d,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:h}=(0,i.zy)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:m,onClick:u,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,s?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&h.startsWith("/terminal")}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);