"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"rss_litigation",description:"Learn how to use the RSS feed to access litigation releases, including civil lawsuits brought by the Commission in federal court. This documentation provides details about the 'obb.regulators.sec.rss_litigation' python function, its parameters and return values, as well as the data structure used for the releases.",keywords:["RSS feed","litigation releases","civil lawsuits","Commission","federal court","python","obb.regulators.sec.rss_litigation","provider","parameters","returns","data","published","title","summary","id","link"]},l=void 0,s={unversionedId:"excel/reference/regulators/sec/rss_litigation",id:"excel/reference/regulators/sec/rss_litigation",title:"rss_litigation",description:"Learn how to use the RSS feed to access litigation releases, including civil lawsuits brought by the Commission in federal court. This documentation provides details about the 'obb.regulators.sec.rss_litigation' python function, its parameters and return values, as well as the data structure used for the releases.",source:"@site/content/excel/reference/regulators/sec/rss_litigation.md",sourceDirName:"excel/reference/regulators/sec",slug:"/excel/reference/regulators/sec/rss_litigation",permalink:"/excel/reference/regulators/sec/rss_litigation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/regulators/sec/rss_litigation.md",tags:[],version:"current",frontMatter:{title:"rss_litigation",description:"Learn how to use the RSS feed to access litigation releases, including civil lawsuits brought by the Commission in federal court. This documentation provides details about the 'obb.regulators.sec.rss_litigation' python function, its parameters and return values, as well as the data structure used for the releases.",keywords:["RSS feed","litigation releases","civil lawsuits","Commission","federal court","python","obb.regulators.sec.rss_litigation","provider","parameters","returns","data","published","title","summary","id","link"]},sidebar:"tutorialSidebar",previous:{title:"institutions_search",permalink:"/excel/reference/regulators/sec/institutions_search"},next:{title:"schema_files",permalink:"/excel/reference/regulators/sec/schema_files"}},o={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The RSS feed provides links to litigation releases concerning civil lawsuits brought by the Commission in federal court."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.REGULATORS.SEC.RSS_LITIGATION([provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.REGULATORS.SEC.RSS_LITIGATION()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: sec, defaults to sec."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"published"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of publication. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"The title of the release. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"summary"),(0,n.kt)("td",{parentName:"tr",align:null},"Short summary of the release. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"The identifier associated with the release. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"link"),(0,n.kt)("td",{parentName:"tr",align:null},"URL to the release. (provider: sec)")))))}d.isMDXComponent=!0}}]);