"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39332],{61101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=r(74848),a=r(28453),o=r(94331),i=r(18228),s=r(19365);const l={title:"sortino_ratio",description:"Get rolling Sortino Ratio",keywords:["quantitative","performance","sortino_ratio"]},d=void 0,c={id:"platform/reference/quantitative/performance/sortino_ratio",title:"sortino_ratio",description:"Get rolling Sortino Ratio",source:"@site/content/platform/reference/quantitative/performance/sortino_ratio.md",sourceDirName:"platform/reference/quantitative/performance",slug:"/platform/reference/quantitative/performance/sortino_ratio",permalink:"/platform/reference/quantitative/performance/sortino_ratio",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/performance/sortino_ratio.md",tags:[],version:"current",frontMatter:{title:"sortino_ratio",description:"Get rolling Sortino Ratio",keywords:["quantitative","performance","sortino_ratio"]},sidebar:"tutorialSidebar",previous:{title:"sharpe_ratio",permalink:"/platform/reference/quantitative/performance/sharpe_ratio"},next:{title:"Rolling",permalink:"/platform/reference/quantitative/rolling/"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"quantitative/performance/sortino_ratio - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get rolling Sortino Ratio."}),"\n",(0,n.jsx)(t.p,{children:"The Sortino Ratio enhances the evaluation of investment returns by distinguishing harmful volatility\nfrom total volatility. Unlike other metrics that treat all volatility as risk, this command specifically assesses\nthe volatility of negative returns relative to a target or desired return.\nIt's particularly useful for investors who are more concerned with downside risk than with overall volatility.\nBy calculating the Sortino Ratio, investors can better understand the risk-adjusted return of their investments,\nfocusing on the likelihood and impact of negative returns.\nThis approach offers a more nuanced tool for portfolio optimization, especially in strategies aiming\nto minimize the downside."}),"\n",(0,n.jsxs)(t.p,{children:["For method & terminology see:\n",(0,n.jsx)(t.a,{href:"http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf",children:"http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf"})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get Rolling Sortino Ratio.\nstock_data = obb.equity.price.historical(symbol=\"TSLA\", start_date=\"2023-01-01\", provider=\"fmp\").to_df()\nreturns = stock_data[\"close\"].pct_change().dropna()\nobb.quantitative.performance.sortino_ratio(data=stock_data, target=\"close\")\nobb.quantitative.performance.sortino_ratio(data=stock_data, target=\"close\", target_return=0.01, window=126, adjusted=True)\nobb.quantitative.performance.sortino_ratio(target='close', window=2, data=[{'date': '2023-01-02', 'close': 0.05}, {'date': '2023-01-03', 'close': 0.08}, {'date': '2023-01-04', 'close': 0.07}, {'date': '2023-01-05', 'close': 0.06}, {'date': '2023-01-06', 'close': 0.06}])\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http"}),(0,n.jsxs)(t.td,{children:["//",(0,n.jsx)(t.a,{href:"http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf",children:"www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf"})]}),(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"List[Data]"}),(0,n.jsx)(t.td,{children:"Time series data."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Target column name."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_return"}),(0,n.jsx)(t.td,{children:"float, optional"}),(0,n.jsx)(t.td,{children:"Target return, by default 0.0"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"window"}),(0,n.jsx)(t.td,{children:"PositiveInt, optional"}),(0,n.jsx)(t.td,{children:"Window size, by default 252"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"adjusted"}),(0,n.jsx)(t.td,{children:"bool, optional"}),(0,n.jsx)(t.td,{children:"Adjust sortino ratio to compare it to sharpe ratio, by default False"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Index column for input data"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[Data]\n        Sortino ratio.\n"})})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(5260),a=r(74848);function o(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),a=r(34164),o=r(23104),i=r(56347),s=r(205),l=r(57485),d=r(31682),c=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,u]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),x=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=r(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),a=l[r].value;a!==n&&(c(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...o,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,o?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.A)();return(0,v.jsx)(_,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);