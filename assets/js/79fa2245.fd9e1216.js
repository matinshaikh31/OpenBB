"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65701],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(a),s=n,k=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},33211:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"profile",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},i=void 0,o={unversionedId:"excel/reference/equity/profile",id:"excel/reference/equity/profile",title:"profile",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",source:"@site/content/excel/reference/equity/profile.md",sourceDirName:"excel/reference/equity",slug:"/excel/reference/equity/profile",permalink:"/excel/reference/equity/profile",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/profile.md",tags:[],version:"current",frontMatter:{title:"profile",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},sidebar:"tutorialSidebar",previous:{title:"market_snapshots",permalink:"/excel/reference/equity/market_snapshots"},next:{title:"screener",permalink:"/excel/reference/equity/screener"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:d},c="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Equity Info. Get general price and performance metrics of a stock."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.PROFILE(symbol;[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.PROFILE("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: intrinio, defaults to intrinio."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Common name of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lei"),(0,n.kt)("td",{parentName:"tr",align:null},"Legal Entity Identifier assigned to the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"legal_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Official legal name of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stock_exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock exchange where the company is traded.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sic"),(0,n.kt)("td",{parentName:"tr",align:null},"Standard Industrial Classification code for the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"short_description"),(0,n.kt)("td",{parentName:"tr",align:null},"Short description of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"long_description"),(0,n.kt)("td",{parentName:"tr",align:null},"Long description of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ceo"),(0,n.kt)("td",{parentName:"tr",align:null},"Chief Executive Officer of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"company_url"),(0,n.kt)("td",{parentName:"tr",align:null},"URL of the company's website.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"business_address"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mailing_address"),(0,n.kt)("td",{parentName:"tr",align:null},"Mailing address of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"business_phone_no"),(0,n.kt)("td",{parentName:"tr",align:null},"Phone number of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hq_address1"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hq_address2"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hq_address_city"),(0,n.kt)("td",{parentName:"tr",align:null},"City of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hq_address_postal_code"),(0,n.kt)("td",{parentName:"tr",align:null},"Zip code of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hq_state"),(0,n.kt)("td",{parentName:"tr",align:null},"State of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hq_country"),(0,n.kt)("td",{parentName:"tr",align:null},"Country of the company's headquarters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"inc_state"),(0,n.kt)("td",{parentName:"tr",align:null},"State in which the company is incorporated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"inc_country"),(0,n.kt)("td",{parentName:"tr",align:null},"Country in which the company is incorporated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"employees"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of employees working for the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"entity_legal_form"),(0,n.kt)("td",{parentName:"tr",align:null},"Legal form of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"entity_status"),(0,n.kt)("td",{parentName:"tr",align:null},"Status of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"latest_filing_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Date of the company's latest filing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"irs_number"),(0,n.kt)("td",{parentName:"tr",align:null},"IRS number assigned to the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sector"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector in which the company operates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"industry_category"),(0,n.kt)("td",{parentName:"tr",align:null},"Category of industry in which the company operates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"industry_group"),(0,n.kt)("td",{parentName:"tr",align:null},"Group of industry in which the company operates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"template"),(0,n.kt)("td",{parentName:"tr",align:null},"Template used to standardize the company's financial statements.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"standardized_active"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the company is active or not.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"first_fundamental_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Date of the company's first fundamental.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_fundamental_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Date of the company's last fundamental.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"first_stock_price_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Date of the company's first stock price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_stock_price_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Date of the company's last stock price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of asset. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_id"),(0,n.kt)("td",{parentName:"tr",align:null},"The Exchange ID number. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tick"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the last sale was an up or down tick. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid"),(0,n.kt)("td",{parentName:"tr",align:null},"Current bid price. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid_size"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid lot size. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask"),(0,n.kt)("td",{parentName:"tr",align:null},"Current ask price. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask_size"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask lot size. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock volume for the current trading day. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iv30"),(0,n.kt)("td",{parentName:"tr",align:null},"The 30-day implied volatility of the stock. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iv30_change"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in 30-day implied volatility of the stock. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_trade_timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"Last trade timestamp for the stock. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iv30_annual_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The 1-year high of implied volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hv30_annual_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The 1-year high of realized volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iv30_annual_low"),(0,n.kt)("td",{parentName:"tr",align:null},"The 1-year low of implied volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hv30_annual_low"),(0,n.kt)("td",{parentName:"tr",align:null},"The 1-year low of realized volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iv60_annual_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The 60-day high of implied volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hv60_annual_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The 60-day high of realized volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iv60_annual_low"),(0,n.kt)("td",{parentName:"tr",align:null},"The 60-day low of implied volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hv60_annual_low"),(0,n.kt)("td",{parentName:"tr",align:null},"The 60-day low of realized volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iv90_annual_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The 90-day high of implied volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hv90_annual_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The 90-day high of realized volatility. (provider: cboe)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"Intrinio ID for the company. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"thea_enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the company has been enabled for Thea. (provider: intrinio)")))))}u.isMDXComponent=!0}}]);