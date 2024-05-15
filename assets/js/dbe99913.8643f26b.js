"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46445],{32747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),d=n(28453),a=n(94331);const s={title:"ex",description:"An in-depth guide to using the 'ex' command to retrieve and manipulate data from various crypto exchanges. Learn how to limit query results, sort data by important parameters such as id and volume, and switch between ascending and descending order.",keywords:["exchanges","coin","crypto","parameters","sorted data","ascend","descend","limit","fiats","id","name","adjusted_volume_24h_share"]},i=void 0,o={id:"terminal/reference/crypto/dd/ex",title:"ex",description:"An in-depth guide to using the 'ex' command to retrieve and manipulate data from various crypto exchanges. Learn how to limit query results, sort data by important parameters such as id and volume, and switch between ascending and descending order.",source:"@site/content/terminal/reference/crypto/dd/ex.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/ex",permalink:"/terminal/reference/crypto/dd/ex",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/ex.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"ex",description:"An in-depth guide to using the 'ex' command to retrieve and manipulate data from various crypto exchanges. Learn how to limit query results, sort data by important parameters such as id and volume, and switch between ascending and descending order.",keywords:["exchanges","coin","crypto","parameters","sorted data","ascend","descend","limit","fiats","id","name","adjusted_volume_24h_share"]},sidebar:"tutorialSidebar",previous:{title:"events",permalink:"/terminal/reference/crypto/dd/events"},next:{title:"fr",permalink:"/terminal/reference/crypto/dd/fr"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"crypto/dd/ex - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get all exchanges found for given coin. You can display only top N number of exchanges with --top parameter. You can sort data by id, name, adjusted_volume_24h_share, fiats --sort parameter and also with --reverse flag to sort ascending. Displays: id, name, adjusted_volume_24h_share, fiats"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"ex [-l LIMIT] [-s {id,name,adjusted_volume_24h_share,fiats}] [-r]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Limit of records"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortby"}),(0,r.jsx)(t.td,{children:"Sort by given column. Default: date"}),(0,r.jsx)(t.td,{children:"adjusted_volume_24h_share"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"id, name, adjusted_volume_24h_share, fiats"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reverse"}),(0,r.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(5260),d=n(74848);function a(e){let{title:t}=e;return(0,d.jsx)(r.A,{children:(0,d.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const d={},a=r.createContext(d);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);