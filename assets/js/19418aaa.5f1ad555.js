"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15018],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),g=a,c=s["".concat(d,".").concat(g)]||s[g]||u[g]||i;return n?r.createElement(c,l(l({ref:e},m),{},{components:n})):r.createElement(c,l({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89009:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},l=void 0,o={unversionedId:"excel/reference/equity/ownership/insider_trading",id:"excel/reference/equity/ownership/insider_trading",title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",source:"@site/content/excel/reference/equity/ownership/insider_trading.md",sourceDirName:"excel/reference/equity/ownership",slug:"/excel/reference/equity/ownership/insider_trading",permalink:"/excel/reference/equity/ownership/insider_trading",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/ownership/insider_trading.md",tags:[],version:"current",frontMatter:{title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},sidebar:"tutorialSidebar",previous:{title:"ownership",permalink:"/excel/reference/equity/ownership/"},next:{title:"institutional",permalink:"/excel/reference/equity/ownership/institutional"}},d={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:p},s="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Insider Trading. Information about insider trading."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.OWNERSHIP.INSIDER_TRADING(symbol;[limit];[provider];[transactionType];[start_date];[end_date];[ownership_type];[sort_by])\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.OWNERSHIP.INSIDER_TRADING("AAPL")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"symbol")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Text")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"True"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, defaults to fmp."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transactionType"),(0,a.kt)("td",{parentName:"tr",align:null},"Any"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the transaction. (provider: fmp)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownership_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of ownership. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort_by"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Field to sort by. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return-data"},"Return Data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"company_cik"),(0,a.kt)("td",{parentName:"tr",align:null},"Company CIK of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Transaction date of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_cik"),(0,a.kt)("td",{parentName:"tr",align:null},"Reporting CIK of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_name"),(0,a.kt)("td",{parentName:"tr",align:null},"Reporting name of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_title"),(0,a.kt)("td",{parentName:"tr",align:null},"Designation of owner of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Transaction type of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"acquisition_or_disposition"),(0,a.kt)("td",{parentName:"tr",align:null},"Acquisition or disposition of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"security_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Security type of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"securities_owned"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of securities owned in the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"securities_transacted"),(0,a.kt)("td",{parentName:"tr",align:null},"Securities transacted of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_price"),(0,a.kt)("td",{parentName:"tr",align:null},"Price of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,a.kt)("td",{parentName:"tr",align:null},"Link of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"form_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Form type of the insider trading. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"company_name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the company. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conversion_exercise_price"),(0,a.kt)("td",{parentName:"tr",align:null},"Conversion/Exercise price of the insider trading. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deemed_execution_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Deemed execution date of the insider trading. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exercise_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Exercise date of the insider trading. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiration_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration date of the insider trading. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"underlying_security_title"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the underlying non-derivative security related to this derivative transaction. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"underlying_shares"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of underlying shares related to this derivative transaction. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nature_of_ownership"),(0,a.kt)("td",{parentName:"tr",align:null},"Nature of ownership of the insider trading. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"director"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is a director. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"officer"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is an officer. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ten_percent_owner"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is a 10% owner. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"other_relation"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is having another relation. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"derivative_transaction"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is having a derivative transaction. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"report_line_number"),(0,a.kt)("td",{parentName:"tr",align:null},"Report line number of the insider trading. (provider: intrinio)")))))}u.isMDXComponent=!0}}]);