"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(16550),i=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=i??d;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=r(72389);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),{pathname:f}=(0,s.TH)(),m=e=>{const t=e.currentTarget,r=d.indexOf(t),a=c[r].value;a!==i&&(p(t),u(a))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:b,onClick:m},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",v.tabItem,l?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&f.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&f.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&f.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&f.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&f.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&f.startsWith("/terminal")})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},79001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(88828),l=r(31792),s=r(85162);const i={title:"ewf",description:"The documentation page discusses two functions - openbb.crypto.ov.ewf and openbb.crypto.ov.ewf_chart. The first function scrapes exchange withdrawal fees and returns a DataFrame with details on Exchange, Coins, and various statistics. The second function allows users to export this data into different formats. The source code and use cases of both functions are included.",keywords:["openbb.crypto.ov.ewf","Exchange withdrawal fees","Scrapes exchange withdrawal fees","openbb.crypto.ov.ewf_chart","Model","Chart","Source Code","Export dataframe data"]},u=void 0,c={unversionedId:"sdk/reference/crypto/ov/ewf",id:"sdk/reference/crypto/ov/ewf",title:"ewf",description:"The documentation page discusses two functions - openbb.crypto.ov.ewf and openbb.crypto.ov.ewf_chart. The first function scrapes exchange withdrawal fees and returns a DataFrame with details on Exchange, Coins, and various statistics. The second function allows users to export this data into different formats. The source code and use cases of both functions are included.",source:"@site/content/sdk/reference/crypto/ov/ewf.md",sourceDirName:"sdk/reference/crypto/ov",slug:"/sdk/reference/crypto/ov/ewf",permalink:"/sdk/reference/crypto/ov/ewf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/ov/ewf.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"ewf",description:"The documentation page discusses two functions - openbb.crypto.ov.ewf and openbb.crypto.ov.ewf_chart. The first function scrapes exchange withdrawal fees and returns a DataFrame with details on Exchange, Coins, and various statistics. The second function allows users to export this data into different formats. The source code and use cases of both functions are included.",keywords:["openbb.crypto.ov.ewf","Exchange withdrawal fees","Scrapes exchange withdrawal fees","openbb.crypto.ov.ewf_chart","Model","Chart","Source Code","Export dataframe data"]},sidebar:"tutorialSidebar",previous:{title:"derivatives",permalink:"/sdk/reference/crypto/ov/derivatives"},next:{title:"exchanges",permalink:"/sdk/reference/crypto/ov/exchanges"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],f={toc:p},m="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"crypto.ov.ewf - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Scrapes exchange withdrawal fees"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_model.py#L186"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.crypto.ov.ewf()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This function does not take any parameters."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Exchange, Coins, Lowest, Average, Median, Highest")))),(0,n.kt)("hr",null)),(0,n.kt)(s.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,n.kt)("p",null,"Exchange withdrawal fees"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_view.py#L60"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.crypto.ov.ewf_chart(export: str = "", sheet_name: Optional[str] = None)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null))))}b.isMDXComponent=!0}}]);