"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(35742);function o(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},48791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const i={title:"Validators",sidebar_position:4,description:"This guide provides detailed instructions on how and where validators should be used.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","validator","field","param","Fast API"]},l=void 0,s={unversionedId:"platform/development/developer-guidelines/validators",id:"platform/development/developer-guidelines/validators",title:"Validators",description:"This guide provides detailed instructions on how and where validators should be used.",source:"@site/content/platform/development/developer-guidelines/validators.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/validators",permalink:"/platform/development/developer-guidelines/validators",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/validators.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:4,frontMatter:{title:"Validators",sidebar_position:4,description:"This guide provides detailed instructions on how and where validators should be used.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","validator","field","param","Fast API"]},sidebar:"tutorialSidebar",previous:{title:"Building Extensions for OpenBB Platform",permalink:"/platform/development/developer-guidelines/build_openbb_extensions"},next:{title:"Architectural Considerations",permalink:"/platform/development/developer-guidelines/architectural_considerations"}},d={},p=[{value:"Why Use Validators?",id:"why-use-validators",level:2},{value:"Examples",id:"examples",level:2},{value:"String or List of Strings",id:"string-or-list-of-strings",level:3},{value:"Dynamic Default Date",id:"dynamic-default-date",level:3},{value:"Formatting Dates",id:"formatting-dates",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Validators - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Both QueryParams and Data models can benefit from the tactical use of Pydantic validators. This page will outline some of the key scenarios where they are deployed. Overall, they assist with enforcing Fast API compliance for both inputs and outputs."),(0,n.kt)("h2",{id:"why-use-validators"},"Why Use Validators?"),(0,n.kt)("p",null,"Some situations where they are used include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A query  parameter accepts a List."),(0,n.kt)("li",{parentName:"ul"},"A query parameter is a date."),(0,n.kt)("li",{parentName:"ul"},"A query parameter requires a dynamic default state."),(0,n.kt)("li",{parentName:"ul"},"A data field is a date."),(0,n.kt)("li",{parentName:"ul"},"A data field is a number but the source values contain string elements.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"string-or-list-of-strings"},"String or List of Strings"),(0,n.kt)("p",null,"To enforce compliance with Fast API, a list needs to be converted to a comma-separated string.  This type of validator works on the ",(0,n.kt)("strong",{parentName:"p"},"input")," of the model, and it ensures that both the Python interface and the Rest API are able to accept a list of symbols, or just one."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from typing import List, Optional, Set, Union\nfrom datetime import (\n    date as dateType,\n    datetime,\n    timedelta,\n)\nfrom dateutil import parser\nfrom openbb_core.provider.abstract.query_params import QueryParams\nfrom openbb_core.provider.utils.descriptions import QUERY_DESCRIPTIONS\nfrom pydantic import Field, field_validator, model_validator\n\nclass EquityHistoricalQueryParams(QueryParams):\n    """Equity Historical Price Query."""\n\n    symbol: str = Field(description=QUERY_DESCRIPTIONS.get("symbol", ""))\n    interval: Optional[str] = Field(\n        default="1d",\n        description=QUERY_DESCRIPTIONS.get("interval", ""),\n    )\n    start_date: Optional[dateType] = Field(\n        default=None,\n        description=QUERY_DESCRIPTIONS.get("start_date", ""),\n    )\n    end_date: Optional[dateType] = Field(\n        default=None,\n        description=QUERY_DESCRIPTIONS.get("end_date", ""),\n    )\n\n    @field_validator("symbol", mode="before", check_fields=False)\n    @classmethod\n    def upper_symbol(cls, v: Union[str, List[str], Set[str]]):\n        """Convert symbol to uppercase."""\n        if isinstance(v, str):\n            return v.upper()\n        return ",".join([symbol.upper() for symbol in list(v)])\n\nsymbols = ["AAPL", "MSFT", "GOOG"]\nparams = EquityHistoricalQueryParams(symbol=symbols)\n\nparams.model_dump()\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"{'symbol': 'AAPL,MSFT,GOOG',\n 'interval': '1d',\n 'start_date': None,\n 'end_date': None}\n")),(0,n.kt)("p",null,"The list of symbols can also be entered as a comma-separated string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'symbols = "AAPL,MSFT,GOOG"\nparams = EquityHistoricalQueryParams(symbol=symbols)\nparams.model_dump()\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"{'symbol': 'AAPL,MSFT,GOOG',\n 'interval': '1d',\n 'start_date': None,\n 'end_date': None}\n")),(0,n.kt)("h3",{id:"dynamic-default-date"},"Dynamic Default Date"),(0,n.kt)("p",null,"It might be desirable to have a default date parameter that is not static.  To allow this, we must set the default as ",(0,n.kt)("inlineCode",{parentName:"p"},"None"),", and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"model_validator"),".  The block below is added to the class defined above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'    @model_validator(mode="before")\n    @classmethod\n    def validate_dates(cls, values) -> dict:\n        """Validate the query parameters."""\n        if values.get("start_date") is None:\n            values["start_date"] = (datetime.now() - timedelta(days=90)).strftime(\n                "%Y-%m-%d"\n            )\n        if values.get("end_date") is None:\n            values["end_date"] = datetime.now().strftime("%Y-%m-%d")\n        return values\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"params = EquityHistoricalQueryParams(symbol=symbols)\nparams.model_dump()\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"{'symbol': 'AAPL,MSFT,GOOG',\n 'interval': '1d',\n 'start_date': datetime.date(2023, 8, 30),\n 'end_date': datetime.date(2023, 11, 28)}\n")),(0,n.kt)("h3",{id:"formatting-dates"},"Formatting Dates"),(0,n.kt)("p",null,"Providers will format dates in a number of ways.  OpenBB uses YYYY-MM-DD as the standard convention.  Validators are setup to parse the date from the source format to the desired one.  The validator below is used in some data models to convert date values to a datetime object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'    @field_validator("date", mode="before", check_fields=False)\n    def date_validate(cls, v):  # pylint: disable=E0213\n        """Return formatted datetime."""\n        return parser.isoparse(str(v))\n')))}c.isMDXComponent=!0}}]);