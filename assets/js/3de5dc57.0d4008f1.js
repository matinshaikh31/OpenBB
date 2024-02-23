"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),o=r(86010),a=r(67294),i=r(16550);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:s}=(0,i.TH)(),d=s.replace(/\/v\d+/,"");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),l?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},l):null)}},38802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const i={},l="OpenBB Telegram Reference",c={unversionedId:"bot/reference/telegram/index",id:"bot/reference/telegram/index",title:"OpenBB Telegram Reference",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/index.mdx",sourceDirName:"bot/reference/telegram",slug:"/bot/reference/telegram/",permalink:"/bot/reference/telegram/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708675444,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topshortvol",permalink:"/bot/reference/discord/short_data/topshortvol"},next:{title:"charts",permalink:"/bot/reference/telegram/charts/"}},s={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openbb-telegram-reference"},"OpenBB Telegram Reference"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"charts",description:"c c15m c3m c5m cc cd chart chartfib chartsr cm cw",url:"/bot/reference/telegram/charts",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"crypto",description:"bigprints bio compfees defi fees ir prints top tvl",url:"/bot/reference/telegram/crypto",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"darkpool",description:"allblocks alldp allprints bigprintsdp levels sectors summary topsum",url:"/bot/reference/telegram/darkpool",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"discovery",description:"arktrades fgindex halts holidays ipolist pop trendingst wsb",url:"/bot/reference/telegram/discovery",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"duediligence",description:"ah analyst bio_stocks customer divinfo earnings ermove financials insiders instholdings nexter pm pt sec splits supplier ytd",url:"/bot/reference/telegram/duediligence",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"economy",description:"bonds calendar commodities currencies fedrates indices revrepo yieldcurve",url:"/bot/reference/telegram/economy",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"etf",description:"holdings tops",url:"/bot/reference/telegram/etf",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"flow",description:"bigflow sectorsflow summaryflow day open prem unu wk day exp top wk",url:"/bot/reference/telegram/flow",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fun",description:"8ball flip urban",url:"/bot/reference/telegram/fun",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"general",description:"futures news quote ta",url:"/bot/reference/telegram/general",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"government",description:"contracts house senate",url:"/bot/reference/telegram/government",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"info",description:"about start",url:"/bot/reference/telegram/info",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"nft",description:"nftcollection nfttop",url:"/bot/reference/telegram/nft",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"options",description:"chains equitypc gamma highiv hist indexpc itm iv maxpain oi oichart opstats smile topoi topoichange topstrikevol topvol topvoletf unu uoastock vol vsurf",url:"/bot/reference/telegram/options",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"overview",description:"heatchart heatmap markets watchlist watchlist_add watchlist_remove",url:"/bot/reference/telegram/overview",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"screeners",description:"screener ah all pm",url:"/bot/reference/telegram/screeners",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"short_data",description:"borrowed hsi shortrate shortvol topshortvol",url:"/bot/reference/telegram/short_data",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);