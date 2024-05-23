"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20270],{74053:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(74848),n=a(28453),t=a(94331);const l={title:"nft",description:"Page covers usage and parameters of an NFT command for Dappradar. Allows sorting NFTs by name, protocols, floor price, average price, market cap, and volume.",keywords:["NFT","Dappradar","Sort","Market Cap","Volume","Floor Price","Avg Price","Protocols"]},c=void 0,i={id:"terminal/reference/crypto/disc/nft",title:"nft",description:"Page covers usage and parameters of an NFT command for Dappradar. Allows sorting NFTs by name, protocols, floor price, average price, market cap, and volume.",source:"@site/content/terminal/reference/crypto/disc/nft.md",sourceDirName:"terminal/reference/crypto/disc",slug:"/terminal/reference/crypto/disc/nft",permalink:"/terminal/reference/crypto/disc/nft",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/disc/nft.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"nft",description:"Page covers usage and parameters of an NFT command for Dappradar. Allows sorting NFTs by name, protocols, floor price, average price, market cap, and volume.",keywords:["NFT","Dappradar","Sort","Market Cap","Volume","Floor Price","Avg Price","Protocols"]},sidebar:"tutorialSidebar",previous:{title:"losers",permalink:"/terminal/reference/crypto/disc/losers"},next:{title:"search",permalink:"/terminal/reference/crypto/disc/search"}},m={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",hr:"hr",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.A,{title:"crypto/disc/nft - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsxs)(s.p,{children:["Shows top NFT collections [Source: ",(0,r.jsx)(s.a,{href:"https://dappradar.com/",children:"https://dappradar.com/"}),"]"," Accepts --sort {Name,Protocols,Floor Price [",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"A"}),(0,r.jsx)(s.mi,{children:"v"}),(0,r.jsx)(s.mi,{children:"g"}),(0,r.jsx)(s.mi,{children:"P"}),(0,r.jsx)(s.mi,{children:"r"}),(0,r.jsx)(s.mi,{children:"i"}),(0,r.jsx)(s.mi,{children:"c"}),(0,r.jsx)(s.mi,{children:"e"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"],Avg Price ["})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mclose",children:"]"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"vg"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,r.jsx)(s.span,{className:"mopen",children:"["})]})})]}),"],Market Cap,Volume [$]} to sort by column"]}),"\n",(0,r.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"nft [-l LIMIT] [-s SORTBY [SORTBY ...]]\n"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Optional"}),(0,r.jsx)(s.th,{children:"Choices"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"limit"}),(0,r.jsx)(s.td,{children:"Number of records to display"}),(0,r.jsx)(s.td,{children:"15"}),(0,r.jsx)(s.td,{children:"True"}),(0,r.jsx)(s.td,{children:"None"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sortby"}),(0,r.jsx)(s.td,{children:"Sort by given column. Default: Market Cap"}),(0,r.jsx)(s.td,{children:"Market Cap"}),(0,r.jsx)(s.td,{children:"True"}),(0,r.jsxs)(s.td,{children:["Name, Protocols, Floor Price [",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"A"}),(0,r.jsx)(s.mi,{children:"v"}),(0,r.jsx)(s.mi,{children:"g"}),(0,r.jsx)(s.mi,{children:"P"}),(0,r.jsx)(s.mi,{children:"r"}),(0,r.jsx)(s.mi,{children:"i"}),(0,r.jsx)(s.mi,{children:"c"}),(0,r.jsx)(s.mi,{children:"e"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"], Avg Price ["})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mclose",children:"]"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"vg"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,r.jsx)(s.span,{className:"mopen",children:"["})]})})]}),"], Market Cap [",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"V"}),(0,r.jsx)(s.mi,{children:"o"}),(0,r.jsx)(s.mi,{children:"l"}),(0,r.jsx)(s.mi,{children:"u"}),(0,r.jsx)(s.mi,{children:"m"}),(0,r.jsx)(s.mi,{children:"e"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"], Volume ["})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mclose",children:"]"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(s.span,{className:"mopen",children:"["})]})})]}),"]"]})]})]})]}),"\n",(0,r.jsx)(s.hr,{})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},94331:(e,s,a)=>{a.d(s,{A:()=>t});a(96540);var r=a(5260),n=a(74848);function t(e){let{title:s}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:s})})}},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>c});var r=a(96540);const n={},t=r.createContext(n);function l(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);