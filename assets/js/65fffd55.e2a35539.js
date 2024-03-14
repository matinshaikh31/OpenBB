"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72863],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(a),g=r,k=u["".concat(p,".").concat(g)]||u[g]||s[g]||l;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),p=a(91980),d=a(67392),m=a(50012);function u(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function s(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??u(a);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function g(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:a}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function f(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=s(t),[o,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[p,d]=k({queryString:a,groupId:n}),[u,f]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),c=(()=>{const t=p??u;return g({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{c&&i(c)}),[c]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!g({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),d(t),f(t)}),[d,f,l]),tabValues:l}}var c=a(72389);const N={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(t){let{className:e,block:a,selectedValue:p,selectValue:d,tabValues:m}=t;const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),{pathname:g}=(0,i.TH)(),k=t=>{const e=t.currentTarget,a=u.indexOf(e),n=m[a].value;n!==p&&(s(e),d(n))},f=t=>{let e=null;switch(t.key){case"Enter":k(t);break;case"ArrowRight":{const a=u.indexOf(t.currentTarget)+1;e=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(t.currentTarget)-1;e=u[a]??u[u.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},m.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===e?0:-1,"aria-selected":p===e,key:e,ref:t=>u.push(t),onKeyDown:f,onClick:k},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",N.tabItem,o?.className,{"border-b-2 pointer-events-none":p===e,"border-b-2 text-[#669dcb] border-[#669dcb]":p===e&&g.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":p===e&&g.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":p!==e&&g.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":p===e&&g.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":p!==e&&g.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":p!==e&&g.startsWith("/terminal")})}),a??e)})))}function b(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=f(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(h,(0,n.Z)({},t,e)),r.createElement(b,(0,n.Z)({},t,e)))}function w(t){const e=(0,c.Z)();return r.createElement(y,(0,n.Z)({key:String(e)},t))}},95816:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(88828),o=a(31792),i=a(85162);const p={title:"income_growth",description:"Explore the growth of a company's income statement with the Python function  obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit,  period, and provider, and get detailed information on various aspects of the income  statement growth.",keywords:["income statement growth","company income statement","python obb.equity.fundamental.income_growth","symbol","limit","period","provider","data entries","time period","provider name","warnings","chart object","metadata","symbol data","date","growth revenue","cost of goods sold","gross profit","gross profit ratio","research and development expenses","general and administrative expenses","selling and marketing expenses","operating expenses","total costs and expenses","interest expenses","depreciation and amortization expenses","ebitda","ebitda ratio","operating income","operating income ratio","total other income expenses net","income before tax","income tax expenses","net income","eps","eps diluted","weighted average shares outstanding"]},d=void 0,m={unversionedId:"platform/reference/equity/fundamental/income_growth",id:"platform/reference/equity/fundamental/income_growth",title:"income_growth",description:"Explore the growth of a company's income statement with the Python function  obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit,  period, and provider, and get detailed information on various aspects of the income  statement growth.",source:"@site/content/platform/reference/equity/fundamental/income_growth.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/income_growth",permalink:"/platform/reference/equity/fundamental/income_growth",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/fundamental/income_growth.md",tags:[],version:"current",frontMatter:{title:"income_growth",description:"Explore the growth of a company's income statement with the Python function  obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit,  period, and provider, and get detailed information on various aspects of the income  statement growth.",keywords:["income statement growth","company income statement","python obb.equity.fundamental.income_growth","symbol","limit","period","provider","data entries","time period","provider name","warnings","chart object","metadata","symbol data","date","growth revenue","cost of goods sold","gross profit","gross profit ratio","research and development expenses","general and administrative expenses","selling and marketing expenses","operating expenses","total costs and expenses","interest expenses","depreciation and amortization expenses","ebitda","ebitda ratio","operating income","operating income ratio","total other income expenses net","income before tax","income tax expenses","net income","eps","eps diluted","weighted average shares outstanding"]},sidebar:"tutorialSidebar",previous:{title:"income",permalink:"/platform/reference/equity/fundamental/income"},next:{title:"latest_attributes",permalink:"/platform/reference/equity/fundamental/latest_attributes"}},u={},s=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],g={toc:s},k="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"equity/fundamental/income_growth - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Get the growth of a company's income statement items over time."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.equity.fundamental.income_growth(symbol='AAPL', provider='fmp')\nobb.equity.fundamental.income_growth(symbol='AAPL', limit=10, period='annual', provider='fmp')\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['annual', 'quarter']"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,r.kt)("td",{parentName:"tr",align:null},"annual"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},"fmp"),(0,r.kt)("td",{parentName:"tr",align:null},"True"))))),(0,r.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['annual', 'quarter']"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,r.kt)("td",{parentName:"tr",align:null},"annual"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},"fmp"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : IncomeStatementGrowth\n        Serializable results.\n    provider : Literal['fmp']\n        Provider name.\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n    chart : Optional[Chart]\n        Chart object.\n    extra : Dict[str, Any]\n        Extra info.\n\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Period the statement is returned for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_cost_of_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of cost of goods sold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_gross_profit"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of gross profit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_gross_profit_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of gross profit as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_research_and_development_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of expenses on research and development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_general_and_administrative_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of general and administrative expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_selling_and_marketing_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of expenses on selling and marketing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_other_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of other operating expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total operating expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_cost_and_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total costs and expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_interest_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of interest expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_depreciation_and_amortization"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of depreciation and amortization expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_ebitda"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of Earnings Before Interest, Taxes, Depreciation, and Amortization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_ebitda_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of EBITDA as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_income"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of operating income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of operating income as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_total_other_income_expenses_net"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net total other income and expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_before_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income before taxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_before_tax_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income before taxes as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_tax_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income tax expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_net_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net income as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_eps"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of Earnings Per Share (EPS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_eps_diluted"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of diluted Earnings Per Share (EPS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_weighted_average_shs_out"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of weighted average shares outstanding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_weighted_average_shs_out_dil"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of diluted weighted average shares outstanding."))))),(0,r.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Period the statement is returned for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_cost_of_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of cost of goods sold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_gross_profit"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of gross profit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_gross_profit_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of gross profit as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_research_and_development_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of expenses on research and development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_general_and_administrative_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of general and administrative expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_selling_and_marketing_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of expenses on selling and marketing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_other_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of other operating expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total operating expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_cost_and_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total costs and expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_interest_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of interest expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_depreciation_and_amortization"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of depreciation and amortization expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_ebitda"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of Earnings Before Interest, Taxes, Depreciation, and Amortization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_ebitda_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of EBITDA as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_income"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of operating income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of operating income as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_total_other_income_expenses_net"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net total other income and expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_before_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income before taxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_before_tax_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income before taxes as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_tax_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income tax expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_net_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net income as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_eps"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of Earnings Per Share (EPS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_eps_diluted"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of diluted Earnings Per Share (EPS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_weighted_average_shs_out"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of weighted average shares outstanding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_weighted_average_shs_out_dil"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of diluted weighted average shares outstanding.")))))))}f.isMDXComponent=!0}}]);