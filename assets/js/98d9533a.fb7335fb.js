"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34225],{96773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453),i=t(94331);const d={title:"fdols",description:"This documentation page provides information on First Differencing (fdols) - an alternative to using fixed effects when there is possible correlation. It contains the source code link, explanation of parameters and return details.",keywords:["First Differencing","fdols","Fixed effects","Dependent variable","Independent variable","Regression variables","OLS model"]},o=void 0,a={id:"sdk/reference/econometrics/fdols",title:"fdols",description:"This documentation page provides information on First Differencing (fdols) - an alternative to using fixed effects when there is possible correlation. It contains the source code link, explanation of parameters and return details.",source:"@site/content/sdk/reference/econometrics/fdols.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/fdols",permalink:"/sdk/reference/econometrics/fdols",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/econometrics/fdols.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,frontMatter:{title:"fdols",description:"This documentation page provides information on First Differencing (fdols) - an alternative to using fixed effects when there is possible correlation. It contains the source code link, explanation of parameters and return details.",keywords:["First Differencing","fdols","Fixed effects","Dependent variable","Independent variable","Regression variables","OLS model"]},sidebar:"tutorialSidebar",previous:{title:"dwat",permalink:"/sdk/reference/econometrics/dwat"},next:{title:"fe",permalink:"/sdk/reference/econometrics/fe"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"econometrics.fdols - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"First differencing is an alternative to using fixed effects when there might be correlation."}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L399",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"openbb.econometrics.fdols(Y: pd.DataFrame, X: pd.DataFrame)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regression_variables"}),(0,r.jsx)(n.td,{children:"list"}),(0,r.jsxs)(n.td,{children:["The regressions variables entered where the first variable is",(0,r.jsx)("br",{}),"the dependent variable."]}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"dict"}),(0,r.jsx)(n.td,{children:"A dictionary containing the datasets."}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tuple[DataFrame, Any, List[Any], Any]"}),(0,r.jsxs)(n.td,{children:["The dataset used,",(0,r.jsx)("br",{}),"Dependent variable,",(0,r.jsx)("br",{}),"Independent variable,",(0,r.jsx)("br",{}),"First Difference OLS model"]})]})})]}),"\n",(0,r.jsx)(n.hr,{})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(5260),s=t(74848);function i(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);