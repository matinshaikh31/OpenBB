"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72793],{56805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=r(74848),s=r(28453),i=r(94331);const a={title:"TCM"},d=void 0,c={id:"excel/reference/fixedincome/spreads/tcm",title:"TCM",description:"Treasury Constant Maturity.  Get data for 10-Year Treasury Constant Maturity Minus Selected Treasury Constant Maturity. Constant maturity is the theoretical value of a U.S. Treasury that is based on recent values of auctioned U.S. Treasuries. The value is obtained by the U.S. Treasury on a daily basis through interpolation of the Treasury yield curve which, in turn, is based on closing bid-yields of actively-traded Treasury securities.",source:"@site/content/excel/reference/fixedincome/spreads/tcm.md",sourceDirName:"excel/reference/fixedincome/spreads",slug:"/excel/reference/fixedincome/spreads/tcm",permalink:"/excel/reference/fixedincome/spreads/tcm",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/fixedincome/spreads/tcm.md",tags:[],version:"current",frontMatter:{title:"TCM"},sidebar:"tutorialSidebar",previous:{title:"FIXEDINCOME.SPREADS",permalink:"/excel/reference/fixedincome/spreads/"},next:{title:"TCM_EFFR",permalink:"/excel/reference/fixedincome/spreads/tcm_effr"}},l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"FIXEDINCOME.SPREADS.TCM | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Treasury Constant Maturity.  Get data for 10-Year Treasury Constant Maturity Minus Selected Treasury Constant Maturity. Constant maturity is the theoretical value of a U.S. Treasury that is based on recent values of auctioned U.S. Treasuries. The value is obtained by the U.S. Treasury on a daily basis through interpolation of the Treasury yield curve which, in turn, is based on closing bid-yields of actively-traded Treasury securities."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.FIXEDINCOME.SPREADS.TCM([start_date],[end_date],[maturity],[provider])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.FIXEDINCOME.SPREADS.TCM(,,,"fred")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.FIXEDINCOME.SPREADS.TCM(,,"2y","fred")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"The maturity"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Options: fred, defaults to fred."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);