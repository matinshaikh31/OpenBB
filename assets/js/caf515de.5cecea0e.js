"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92007],{37928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=r(74848),n=r(28453),a=r(94331),o=r(18228),l=r(19365);const i={title:"top",description:"This content describes two features: 'Model' and 'Chart'. 'Model' gets repositories sorted by stars or forks with possible category filtering. 'Chart' plots a repo summary. Both procedures involve parameters like 'sortby', 'categories', 'limit', 'export', and 'external_axes'.",keywords:["Documentation","Model","Chart","Repositories","Stars","Forks","Filtering","Parameters","Sortby","Categories","Limit","Export","External_axes"]},d=void 0,c={id:"sdk/reference/alt/oss/top",title:"top",description:"This content describes two features: 'Model' and 'Chart'. 'Model' gets repositories sorted by stars or forks with possible category filtering. 'Chart' plots a repo summary. Both procedures involve parameters like 'sortby', 'categories', 'limit', 'export', and 'external_axes'.",source:"@site/content/sdk/reference/alt/oss/top.md",sourceDirName:"sdk/reference/alt/oss",slug:"/sdk/reference/alt/oss/top",permalink:"/sdk/reference/alt/oss/top",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/alt/oss/top.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"top",description:"This content describes two features: 'Model' and 'Chart'. 'Model' gets repositories sorted by stars or forks with possible category filtering. 'Chart' plots a repo summary. Both procedures involve parameters like 'sortby', 'categories', 'limit', 'export', and 'external_axes'.",keywords:["Documentation","Model","Chart","Repositories","Stars","Forks","Filtering","Parameters","Sortby","Categories","Limit","Export","External_axes"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/sdk/reference/alt/oss/summary"},next:{title:"candles",permalink:"/sdk/reference/crypto/candles"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"alt.oss.top - Reference | OpenBB SDK Docs"}),"\n","\n",(0,s.jsxs)(o.A,{children:[(0,s.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,s.jsx)(t.p,{children:"Get repos sorted by stars or forks. Can be filtered by categories."}),(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_model.py#L135",children:"link"}),"]"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.alt.oss.top(sortby: str, limit: int = 50, categories: str = "")\n'})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sortby"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Sort repos by {stars, forks}"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"categories"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Check for repo categories. If more than one separate with a comma: e.g., finance,investment. Default: None"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of repos to search for"}),(0,s.jsx)(t.td,{children:"50"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"Dataframe with repos"})]})})]}),(0,s.jsx)(t.hr,{})]}),(0,s.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,s.jsxs)(t.p,{children:["Plots repo summary [Source: ",(0,s.jsx)(t.a,{href:"https://api.github.com",children:"https://api.github.com"}),"]."]}),(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_view.py#L65",children:"link"}),"]"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.alt.oss.top_chart(sortby: str, categories: str = "", limit: int = 10, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sortby"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Sort repos by {stars, forks}"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"categories"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Check for repo categories. If more than one separate with a comma: e.g., finance,investment. Default: None"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of repos to look at"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"export"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"external_axes"}),(0,s.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,s.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,s.jsx)(t.p,{children:"This function does not return anything"}),(0,s.jsx)(t.hr,{})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var s=r(5260),n=r(74848);function a(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>k});var s=r(96540),n=r(34164),a=r(23104),o=r(56347),l=r(205),i=r(57485),d=r(31682),c=r(89466);function u(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[d,u]=x({queryString:r,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),f=(()=>{const e=d??b;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:u}=(0,o.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),n=i[r].value;n!==s&&(c(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...a,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function k(e){const t=(0,m.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);