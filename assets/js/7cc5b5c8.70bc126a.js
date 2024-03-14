"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70995],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),d=a(67392),p=a(50012);function u(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function m(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??u(a);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function h(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=m(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[s,d]=g({queryString:a,groupId:n}),[u,h]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),k=(()=>{const t=s??u;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),d(t),h(t)}),[d,h,l]),tabValues:l}}var k=a(72389);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(t){let{className:e,block:a,selectedValue:s,selectValue:d,tabValues:p}=t;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),g=t=>{const e=t.currentTarget,a=u.indexOf(e),n=p[a].value;n!==s&&(m(e),d(n))},h=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const a=u.indexOf(t.currentTarget)+1;e=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(t.currentTarget)-1;e=u[a]??u[u.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},p.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>u.push(t),onKeyDown:h,onClick:g},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":s===e,"border-b-2 text-[#669dcb] border-[#669dcb]":s===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==e&&c.startsWith("/terminal")})}),a??e)})))}function N(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function _(t){const e=h(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,(0,n.Z)({},t,e)),r.createElement(N,(0,n.Z)({},t,e)))}function y(t){const e=(0,k.Z)();return r.createElement(_,(0,n.Z)({key:String(e)},t))}},90403:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const s={title:"institutional",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional  function in Python to access the data. Explore the symbol, include_current_quarter,  date, and provider parameters. Understand the meaning and usage of the results,  provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions  of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares,  total_invested, ownership_percent, new_positions, closed_positions, total_calls,  total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},d=void 0,p={unversionedId:"platform/reference/equity/ownership/institutional",id:"platform/reference/equity/ownership/institutional",title:"institutional",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional  function in Python to access the data. Explore the symbol, include_current_quarter,  date, and provider parameters. Understand the meaning and usage of the results,  provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions  of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares,  total_invested, ownership_percent, new_positions, closed_positions, total_calls,  total_puts, and put_call_ratio.",source:"@site/content/platform/reference/equity/ownership/institutional.md",sourceDirName:"platform/reference/equity/ownership",slug:"/platform/reference/equity/ownership/institutional",permalink:"/platform/reference/equity/ownership/institutional",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/ownership/institutional.md",tags:[],version:"current",frontMatter:{title:"institutional",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional  function in Python to access the data. Explore the symbol, include_current_quarter,  date, and provider parameters. Understand the meaning and usage of the results,  provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions  of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares,  total_invested, ownership_percent, new_positions, closed_positions, total_calls,  total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},sidebar:"tutorialSidebar",previous:{title:"insider_trading",permalink:"/platform/reference/equity/ownership/insider_trading"},next:{title:"major_holders",permalink:"/platform/reference/equity/ownership/major_holders"}},u={},m=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],c={toc:m},g="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"equity/ownership/institutional - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Get data about institutional ownership for a given company over time."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.equity.ownership.institutional(symbol='AAPL', provider='fmp')\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},"fmp"),(0,r.kt)("td",{parentName:"tr",align:null},"True"))))),(0,r.kt)(o.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},"fmp"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_current_quarter"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Include current quarter data."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,r.kt)("td",{parentName:"tr",align:null},"A specific date to get data for."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : InstitutionalOwnership\n        Serializable results.\n    provider : Literal['fmp']\n        Provider name.\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n    chart : Optional[Chart]\n        Chart object.\n    extra : Dict[str, Any]\n        Extra info.\n\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data."))))),(0,r.kt)(o.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"investors_holding"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of investors holding the stock.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_investors_holding"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of investors holding the stock in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"investors_holding_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the number of investors holding the stock.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_13f_shares"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of 13F shares.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_number_of_13f_shares"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of 13F shares in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_13f_shares_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the number of 13F shares.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_invested"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Total amount invested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_total_invested"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Total amount invested in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_invested_change"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the total amount invested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ownership_percent"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Ownership percent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_ownership_percent"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Ownership percent in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ownership_percent_change"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the ownership percent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"new_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of new positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_new_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of new positions in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"new_positions_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the number of new positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"increased_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of increased positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_increased_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of increased positions in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"increased_positions_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the number of increased positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closed_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of closed positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_closed_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of closed positions in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closed_positions_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the number of closed positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reduced_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reduced positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_reduced_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reduced positions in the last quarter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reduced_positions_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the number of reduced positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_calls"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of call options contracts traded for Apple Inc. on the specified date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_total_calls"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of call options contracts traded for Apple Inc. on the previous reporting date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_calls_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the total number of call options contracts traded between the current and previous reporting dates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_puts"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of put options contracts traded for Apple Inc. on the specified date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_total_puts"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of put options contracts traded for Apple Inc. on the previous reporting date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_puts_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the total number of put options contracts traded between the current and previous reporting dates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"put_call_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Put-call ratio, which is the ratio of the total number of put options to call options traded on the specified date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_put_call_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Put-call ratio on the previous reporting date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"put_call_ratio_change"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in the put-call ratio between the current and previous reporting dates.")))))))}h.isMDXComponent=!0}}]);