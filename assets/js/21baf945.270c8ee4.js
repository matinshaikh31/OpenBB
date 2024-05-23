"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80893],{82593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(74848),a=n(28453),r=n(94331);const s={title:"quantile",description:"Understand how to use the 'quantile' function, a key statistical tool used to divide distributions. Learn about parameters including 'n_window' for window length and 'f_quantile' for specifying quantile values.",keywords:["quantile function","distribution","statistics","median","n_window","f_quantile","parameters","data analysis"]},l=void 0,d={id:"terminal/reference/crypto/qa/quantile",title:"quantile",description:"Understand how to use the 'quantile' function, a key statistical tool used to divide distributions. Learn about parameters including 'n_window' for window length and 'f_quantile' for specifying quantile values.",source:"@site/content/terminal/reference/crypto/qa/quantile.md",sourceDirName:"terminal/reference/crypto/qa",slug:"/terminal/reference/crypto/qa/quantile",permalink:"/terminal/reference/crypto/qa/quantile",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/qa/quantile.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"quantile",description:"Understand how to use the 'quantile' function, a key statistical tool used to divide distributions. Learn about parameters including 'n_window' for window length and 'f_quantile' for specifying quantile values.",keywords:["quantile function","distribution","statistics","median","n_window","f_quantile","parameters","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"qqplot",permalink:"/terminal/reference/crypto/qa/qqplot"},next:{title:"raw",permalink:"/terminal/reference/crypto/qa/raw"}},o={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"crypto/qa/quantile - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"The quantiles are values which divide the distribution such that there is a given proportion of observations below the quantile. For example, the median is a quantile. The median is the central value of the distribution, such that half the points are less than or equal to it and half are greater than or equal to it. By default, q is set at 0.5, which effectively is median. Change q to get the desired quantile (0q1)."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"quantile [-w N_WINDOW] [-q F_QUANTILE]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"n_window"}),(0,i.jsx)(t.td,{children:"window length"}),(0,i.jsx)(t.td,{children:"14"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"range(5, 100)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"f_quantile"}),(0,i.jsx)(t.td,{children:"quantile"}),(0,i.jsx)(t.td,{children:"0.5"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35000000000000003, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41000000000000003, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47000000000000003, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.5700000000000001, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.6900000000000001, 0.7000000000000001, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.8200000000000001, 0.8300000000000001, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.9400000000000001, 0.9500000000000001, 0.96, 0.97, 0.98, 0.99"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154307976-868e98e1-5a30-43c7-92fc-f221d09c5bd2.png",alt:"quantile"})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(5260),a=n(74848);function r(e){let{title:t}=e;return(0,a.jsx)(i.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);