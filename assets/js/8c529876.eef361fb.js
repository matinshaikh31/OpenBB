"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56201],{51460:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=s(74848),n=s(28453),a=s(94331),l=s(18228),i=s(19365);const o={title:"splits",description:"This page pertains to the splits and reverse splits events details of stocks, showcasing how to fetch them using the openbb.stocks.fa.splits() function and display them with openbb.stocks.fa.splits_chart() function.",keywords:["Stock splits","Reverse stock splits","openbb.stocks.fa.splits","openbb.stocks.fa.splits_chart","Fundamental analysis","Yahoo Finance"]},c=void 0,d={id:"sdk/reference/stocks/fa/splits",title:"splits",description:"This page pertains to the splits and reverse splits events details of stocks, showcasing how to fetch them using the openbb.stocks.fa.splits() function and display them with openbb.stocks.fa.splits_chart() function.",source:"@site/content/sdk/reference/stocks/fa/splits.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/splits",permalink:"/sdk/reference/stocks/fa/splits",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/splits.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"splits",description:"This page pertains to the splits and reverse splits events details of stocks, showcasing how to fetch them using the openbb.stocks.fa.splits() function and display them with openbb.stocks.fa.splits_chart() function.",keywords:["Stock splits","Reverse stock splits","openbb.stocks.fa.splits","openbb.stocks.fa.splits_chart","Fundamental analysis","Yahoo Finance"]},sidebar:"tutorialSidebar",previous:{title:"similar_dfs",permalink:"/sdk/reference/stocks/fa/similar_dfs"},next:{title:"sust",permalink:"/sdk/reference/stocks/fa/sust"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"stocks.fa.splits - Reference | OpenBB SDK Docs"}),"\n","\n",(0,r.jsxs)(l.A,{children:[(0,r.jsxs)(i.A,{value:"model",label:"Model",default:!0,children:[(0,r.jsx)(t.p,{children:"Get splits and reverse splits events. [Source: Yahoo Finance]"}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_model.py#L326",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.stocks.fa.splits(symbol: str)\n"})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Ticker to get forward and reverse splits"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe of forward and reverse splits"})]})})]}),(0,r.jsx)(t.hr,{})]}),(0,r.jsxs)(i.A,{value:"view",label:"Chart",children:[(0,r.jsx)(t.p,{children:"Display splits and reverse splits events. [Source: Yahoo Finance]"}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_view.py#L261",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.stocks.fa.splits_chart(symbol: str, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Stock ticker symbol"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Format to export data"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"external_axes"}),(0,r.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,r.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,r.jsx)(t.p,{children:"This function does not return anything"}),(0,r.jsx)(t.hr,{})]})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var r=s(34164);const n={tabItem:"tabItem_Ymn6"};var a=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:s,children:t})}},94331:(e,t,s)=>{s.d(t,{A:()=>a});s(96540);var r=s(5260),n=s(74848);function a(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,s)=>{s.d(t,{A:()=>g});var r=s(96540),n=s(34164),a=s(23104),l=s(56347),i=s(205),o=s(57485),c=s(31682),d=s(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??u(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const n=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:s,groupId:n}),[b,x]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),m=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=s(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=s(74848);function v(e){let{className:t,block:s,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),{pathname:u}=(0,l.zy)(),h=e=>{const t=e.currentTarget,s=c.indexOf(t),n=o[s].value;n!==r&&(d(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...a,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,a?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&u.startsWith("/terminal")}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:n}=e;if(s=Array.isArray(s)?s:[s],t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function g(e){const t=(0,x.A)();return(0,j.jsx)(k,{...e},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>i});var r=s(96540);const n={},a=r.createContext(n);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);