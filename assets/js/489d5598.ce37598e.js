"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75985],{19199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=t(74848),a=t(28453),s=t(94331);const d={title:"rename",description:"The rename function in openbb.forecast allows the renaming of a column in a dataframe. Contains details on parameters, returns and a link to the source code.",keywords:["rename column","dataframe","openbb forecast"]},c=void 0,o={id:"sdk/reference/forecast/rename",title:"rename",description:"The rename function in openbb.forecast allows the renaming of a column in a dataframe. Contains details on parameters, returns and a link to the source code.",source:"@site/content/sdk/reference/forecast/rename.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/rename",permalink:"/sdk/reference/forecast/rename",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forecast/rename.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"rename",description:"The rename function in openbb.forecast allows the renaming of a column in a dataframe. Contains details on parameters, returns and a link to the source code.",keywords:["rename column","dataframe","openbb forecast"]},sidebar:"tutorialSidebar",previous:{title:"regr",permalink:"/sdk/reference/forecast/regr"},next:{title:"rnn",permalink:"/sdk/reference/forecast/rnn"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"forecast.rename - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Rename a column in a dataframe"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L477",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"openbb.forecast.rename(data: pd.DataFrame, old_column: str, new_column: str)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"The dataframe to have a column renamed"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"old_column"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"The column that will have its name changed"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"new_column"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"The name to update to"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"The dataframe with the renamed column"})]})})]}),"\n",(0,r.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(5260),a=t(74848);function s(e){let{title:n}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(96540);const a={},s=r.createContext(a);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);