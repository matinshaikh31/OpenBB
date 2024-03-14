"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65701],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),p=a(91980),d=a(67392),m=a(50012);function u(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function s(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??u(a);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function y(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=s(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[p,d]=k({queryString:a,groupId:n}),[u,y]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),g=(()=>{const t=p??u;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),d(t),y(t)}),[d,y,l]),tabValues:l}}var g=a(72389);const N={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(t){let{className:e,block:a,selectedValue:p,selectValue:d,tabValues:m}=t;const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),k=t=>{const e=t.currentTarget,a=u.indexOf(e),n=m[a].value;n!==p&&(s(e),d(n))},y=t=>{let e=null;switch(t.key){case"Enter":k(t);break;case"ArrowRight":{const a=u.indexOf(t.currentTarget)+1;e=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(t.currentTarget)-1;e=u[a]??u[u.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},m.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===e?0:-1,"aria-selected":p===e,key:e,ref:t=>u.push(t),onKeyDown:y,onClick:k},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",N.tabItem,i?.className,{"border-b-2 pointer-events-none":p===e,"border-b-2 text-[#669dcb] border-[#669dcb]":p===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":p===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":p!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":p===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":p!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":p!==e&&c.startsWith("/terminal")})}),a??e)})))}function f(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function b(t){const e=y(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(h,(0,n.Z)({},t,e)),r.createElement(f,(0,n.Z)({},t,e)))}function v(t){const e=(0,g.Z)();return r.createElement(b,(0,n.Z)({key:String(e)},t))}},33211:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const p={title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},d=void 0,m={unversionedId:"excel/reference/equity/profile",id:"excel/reference/equity/profile",title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",source:"@site/content/excel/reference/equity/profile.md",sourceDirName:"excel/reference/equity",slug:"/excel/reference/equity/profile",permalink:"/excel/reference/equity/profile",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/profile.md",tags:[],version:"current",frontMatter:{title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},sidebar:"tutorialSidebar",previous:{title:"MARKET_SNAPSHOTS",permalink:"/excel/reference/equity/market_snapshots"},next:{title:"SCREENER",permalink:"/excel/reference/equity/screener"}},u={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],c={toc:s},k="wrapper";function y(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"EQUITY.PROFILE | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Get general information about a company. This includes company name, industry, sector and price data."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.EQUITY.PROFILE(symbol,[provider])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.EQUITY.PROFILE("AAPL")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Common name of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cusip"),(0,r.kt)("td",{parentName:"tr",align:null},"CUSIP identifier for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isin"),(0,r.kt)("td",{parentName:"tr",align:null},"International Securities Identification Number.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lei"),(0,r.kt)("td",{parentName:"tr",align:null},"Legal Entity Identifier assigned to the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Official legal name of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock exchange where the company is traded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sic"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Industrial Classification code for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_description"),(0,r.kt)("td",{parentName:"tr",align:null},"Short description of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_description"),(0,r.kt)("td",{parentName:"tr",align:null},"Long description of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ceo"),(0,r.kt)("td",{parentName:"tr",align:null},"Chief Executive Officer of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the company's website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"business_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mailing_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Mailing address of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"business_phone_no"),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_2"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_city"),(0,r.kt)("td",{parentName:"tr",align:null},"City of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_postal_code"),(0,r.kt)("td",{parentName:"tr",align:null},"Zip code of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_state"),(0,r.kt)("td",{parentName:"tr",align:null},"State of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inc_state"),(0,r.kt)("td",{parentName:"tr",align:null},"State in which the company is incorporated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inc_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country in which the company is incorporated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employees"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of employees working for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity_legal_form"),(0,r.kt)("td",{parentName:"tr",align:null},"Legal form of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity_status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest_filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's latest filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"irs_number"),(0,r.kt)("td",{parentName:"tr",align:null},"IRS number assigned to the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sector"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_category"),(0,r.kt)("td",{parentName:"tr",align:null},"Category of industry in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_group"),(0,r.kt)("td",{parentName:"tr",align:null},"Group of industry in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"template"),(0,r.kt)("td",{parentName:"tr",align:null},"Template used to standardize the company's financial statements.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"standardized_active"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the company is active or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_fundamental_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's first fundamental.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_fundamental_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's last fundamental.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_stock_price_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's first stock price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_stock_price_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's last stock price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_etf"),(0,r.kt)("td",{parentName:"tr",align:null},"If the symbol is an ETF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_actively_trading"),(0,r.kt)("td",{parentName:"tr",align:null},"If the company is actively trading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_adr"),(0,r.kt)("td",{parentName:"tr",align:null},"If the stock is an ADR.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_fund"),(0,r.kt)("td",{parentName:"tr",align:null},"If the company is a fund.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"Image of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency in which the stock is traded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"market_cap"),(0,r.kt)("td",{parentName:"tr",align:null},"Market capitalization of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_price"),(0,r.kt)("td",{parentName:"tr",align:null},"The last traded price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"year_high"),(0,r.kt)("td",{parentName:"tr",align:null},"The one-year high of the price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"year_low"),(0,r.kt)("td",{parentName:"tr",align:null},"The one-year low of the price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volume_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"Average daily trading volume.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annualized_dividend_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"The annualized dividend payment based on the most recent regular dividend payment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beta"),(0,r.kt)("td",{parentName:"tr",align:null},"Beta of the stock relative to the market."))))),(0,r.kt)(o.Z,{value:"intrinio",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Common name of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cusip"),(0,r.kt)("td",{parentName:"tr",align:null},"CUSIP identifier for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isin"),(0,r.kt)("td",{parentName:"tr",align:null},"International Securities Identification Number.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lei"),(0,r.kt)("td",{parentName:"tr",align:null},"Legal Entity Identifier assigned to the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Official legal name of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock exchange where the company is traded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sic"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Industrial Classification code for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_description"),(0,r.kt)("td",{parentName:"tr",align:null},"Short description of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_description"),(0,r.kt)("td",{parentName:"tr",align:null},"Long description of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ceo"),(0,r.kt)("td",{parentName:"tr",align:null},"Chief Executive Officer of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the company's website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"business_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mailing_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Mailing address of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"business_phone_no"),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_2"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_city"),(0,r.kt)("td",{parentName:"tr",align:null},"City of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_postal_code"),(0,r.kt)("td",{parentName:"tr",align:null},"Zip code of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_state"),(0,r.kt)("td",{parentName:"tr",align:null},"State of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inc_state"),(0,r.kt)("td",{parentName:"tr",align:null},"State in which the company is incorporated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inc_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country in which the company is incorporated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employees"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of employees working for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity_legal_form"),(0,r.kt)("td",{parentName:"tr",align:null},"Legal form of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity_status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest_filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's latest filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"irs_number"),(0,r.kt)("td",{parentName:"tr",align:null},"IRS number assigned to the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sector"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_category"),(0,r.kt)("td",{parentName:"tr",align:null},"Category of industry in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_group"),(0,r.kt)("td",{parentName:"tr",align:null},"Group of industry in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"template"),(0,r.kt)("td",{parentName:"tr",align:null},"Template used to standardize the company's financial statements.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"standardized_active"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the company is active or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_fundamental_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's first fundamental.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_fundamental_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's last fundamental.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_stock_price_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's first stock price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_stock_price_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's last stock price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Intrinio ID for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thea_enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the company has been enabled for Thea.")))))))}y.isMDXComponent=!0}}]);