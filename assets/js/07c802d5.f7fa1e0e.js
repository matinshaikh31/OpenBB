"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70658],{94180:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=t(74848),o=t(28453),l=t(94331),s=t(18228),a=t(19365);const i={title:"mret",description:"This page provides comprehensive guides and source codes on how to get and display monthly returns using the functions 'mret' and 'mret_chart' respectively, both under openbb.portfolio of the OpenBB Terminal.",keywords:["portfolio","mret","mret_chart","Monthly returns","PortfolioEngine","portfolio.load","openbb.portfolio.load"]},d=void 0,c={id:"sdk/reference/portfolio/mret",title:"mret",description:"This page provides comprehensive guides and source codes on how to get and display monthly returns using the functions 'mret' and 'mret_chart' respectively, both under openbb.portfolio of the OpenBB Terminal.",source:"@site/content/sdk/reference/portfolio/mret.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/mret",permalink:"/sdk/reference/portfolio/mret",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/mret.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"mret",description:"This page provides comprehensive guides and source codes on how to get and display monthly returns using the functions 'mret' and 'mret_chart' respectively, both under openbb.portfolio of the OpenBB Terminal.",keywords:["portfolio","mret","mret_chart","Monthly returns","PortfolioEngine","portfolio.load","openbb.portfolio.load"]},sidebar:"tutorialSidebar",previous:{title:"volatility",permalink:"/sdk/reference/portfolio/metric/volatility"},next:{title:"om",permalink:"/sdk/reference/portfolio/om"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{title:"portfolio.mret - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Get monthly returns"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L267",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.portfolio.mret(portfolio_engine: portfolio_engine.PortfolioEngine, window: str = "all")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"portfolio_engine"}),(0,n.jsx)(r.td,{children:"PortfolioEngine"}),(0,n.jsxs)(r.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(r.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"window"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"interval to compare cumulative returns and benchmark"}),(0,n.jsx)(r.td,{children:"all"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"DataFrame with monthly returns"})]})})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.mret(p)\n'})}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Display monthly returns"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L457",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.portfolio.mret_chart(portfolio_engine: portfolio_engine.PortfolioEngine, window: str = "all", raw: bool = False, show_vals: bool = False, export: str = "", external_axes: Optional[matplotlib.axes._axes.Axes] = None)\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"portfolio_engine"}),(0,n.jsx)(r.td,{children:"PortfolioEngine"}),(0,n.jsxs)(r.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(r.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"window"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"interval to compare cumulative returns and benchmark"}),(0,n.jsx)(r.td,{children:"all"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"raw"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"Display raw data from cumulative return"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"show_vals"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"Show values on heatmap"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export certain type of data"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"external_axes"}),(0,n.jsx)(r.td,{children:"plt.Axes"}),(0,n.jsx)(r.td,{children:"Optional axes to display plot on"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const o={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(5260),o=t(74848);function l(e){let{title:r}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),o=t(34164),l=t(23104),s=t(56347),a=t(205),i=t(57485),d=t(31682),c=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const o=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(o.location.search);r.set(l,e),o.replace({...o.location,search:r.toString()})}),[l,o])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,l=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[d,u]=f({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,l]=(0,c.Dv)(t);return[o,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),b=(()=>{const e=d??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const r=e.currentTarget,t=d.indexOf(r),o=i[t].value;o!==n&&(c(r),a(o))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:p,onClick:h,...l,className:(0,o.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,l?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:o}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=x(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...r}),(0,j.jsx)(g,{...e,...r})]})}function w(e){const r=(0,m.A)();return(0,j.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const o={},l=n.createContext(o);function s(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);