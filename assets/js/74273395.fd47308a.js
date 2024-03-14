"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||n;return r?a.createElement(y,s(s({ref:t},i),{},{components:r})):a.createElement(y,s({ref:t},i))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<n;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),o=r(35742);function n(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},17622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var a=r(87462),o=(r(67294),r(3905)),n=r(88828);const s={title:"topsum",description:"The documentation page is about the 'topsum' command, which retrieves a total block and dark pool data summary. It also sums all darkpool prints and provides a table of the largest data by symbol along with a comparison graph. This command does not require any parameters.",keywords:["topsum command","block and dark pool data summary","sum darkpool prints","largest data by symbol","comparison graph","command usage","no parameters command"]},l=void 0,p={unversionedId:"bot/reference/discord/darkpool/topsum",id:"bot/reference/discord/darkpool/topsum",title:"topsum",description:"The documentation page is about the 'topsum' command, which retrieves a total block and dark pool data summary. It also sums all darkpool prints and provides a table of the largest data by symbol along with a comparison graph. This command does not require any parameters.",source:"@site/content/bot/reference/discord/darkpool/topsum.md",sourceDirName:"bot/reference/discord/darkpool",slug:"/bot/reference/discord/darkpool/topsum",permalink:"/bot/reference/discord/darkpool/topsum",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/darkpool/topsum.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"topsum",description:"The documentation page is about the 'topsum' command, which retrieves a total block and dark pool data summary. It also sums all darkpool prints and provides a table of the largest data by symbol along with a comparison graph. This command does not require any parameters.",keywords:["topsum command","block and dark pool data summary","sum darkpool prints","largest data by symbol","comparison graph","command usage","no parameters command"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/bot/reference/discord/darkpool/summary"},next:{title:"discovery",permalink:"/bot/reference/discord/discovery/"}},d={},i=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:i},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{title:"darkpool: topsum - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve total block and dark pool data summary. It sums all darkpool prints and gives a table of the largest by symbol as well as a graph for comparison."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dp topsum\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/dp topsum\n")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);