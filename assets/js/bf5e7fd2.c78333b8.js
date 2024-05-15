"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7820],{57772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var n=r(74848),s=r(28453),d=r(94331),i=r(18228),a=r(19365);const l={title:"earnings",description:"Learn how to retrieve upcoming and historical earnings calendar data  using the OBB.equity.calendar.earnings Python function. The function allows you  to specify symbols, limit the number of data entries, and choose a data provider.  The returned data includes EPS, revenue, and other important details for the specified  symbols and dates.",keywords:["earnings calendar","upcoming earnings","historical earnings","Python function","earnings data retrieval","symbol","limit","provider","data entries","chart","metadata","data","EPS","revenue","estimated EPS","estimated revenue","date","time","updated from date","fiscal date ending"]},c=void 0,h={id:"platform/reference/equity/calendar/earnings",title:"earnings",description:"Learn how to retrieve upcoming and historical earnings calendar data  using the OBB.equity.calendar.earnings Python function. The function allows you  to specify symbols, limit the number of data entries, and choose a data provider.  The returned data includes EPS, revenue, and other important details for the specified  symbols and dates.",source:"@site/content/platform/reference/equity/calendar/earnings.md",sourceDirName:"platform/reference/equity/calendar",slug:"/platform/reference/equity/calendar/earnings",permalink:"/platform/reference/equity/calendar/earnings",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/calendar/earnings.md",tags:[],version:"current",frontMatter:{title:"earnings",description:"Learn how to retrieve upcoming and historical earnings calendar data  using the OBB.equity.calendar.earnings Python function. The function allows you  to specify symbols, limit the number of data entries, and choose a data provider.  The returned data includes EPS, revenue, and other important details for the specified  symbols and dates.",keywords:["earnings calendar","upcoming earnings","historical earnings","Python function","earnings data retrieval","symbol","limit","provider","data entries","chart","metadata","data","EPS","revenue","estimated EPS","estimated revenue","date","time","updated from date","fiscal date ending"]},sidebar:"tutorialSidebar",previous:{title:"dividend",permalink:"/platform/reference/equity/calendar/dividend"},next:{title:"ipo",permalink:"/platform/reference/equity/calendar/ipo"}},o={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"equity/calendar/earnings - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get historical and upcoming company earnings releases. Includes earnings per share (EPS) and revenue data."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.calendar.earnings(provider='fmp')\n# Get earnings calendar for specific dates.\nobb.equity.calendar.earnings(start_date='2024-02-01', end_date='2024-02-07', provider='fmp')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."}),(0,n.jsx)(t.td,{children:"fmp"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CalendarEarnings]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'nasdaq', 'tmx']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the earnings report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_previous"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The earnings-per-share from the same previously reported period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The analyst conesus earnings-per-share estimate."})]})]})]})}),(0,n.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the earnings report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_previous"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The earnings-per-share from the same previously reported period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The analyst conesus earnings-per-share estimate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_actual"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The actual earnings per share announced."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revenue_actual"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The actual reported revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revenue_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The revenue forecast consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The fiscal period end date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reporting_time"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The reporting time - e.g. after market close."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"updated_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date the data was updated last."})]})]})]})}),(0,n.jsx)(a.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the earnings report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_previous"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The earnings-per-share from the same previously reported period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The analyst conesus earnings-per-share estimate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_actual"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The actual earnings per share (USD) announced."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"surprise_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The earnings surprise as normalized percentage points."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num_estimates"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of analysts providing estimates for the consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period end date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"previous_report_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The previous report date for the same period last year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reporting_time"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The reporting time - e.g. after market close."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"market_cap"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The market cap (USD) of the reporting entity."})]})]})]})}),(0,n.jsx)(a.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the earnings report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The company's name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_previous"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The earnings-per-share from the same previously reported period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The consensus estimated EPS in dollars."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_actual"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The actual EPS in dollars."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_surprise"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The EPS surprise in dollars."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"surprise_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The EPS surprise as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reporting_time"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The time of the report - i.e., before or after market."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var d=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(5260),s=r(74848);function d(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),d=r(23104),i=r(56347),a=r(205),l=r(57485),c=r(31682),h=r(89466);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,d=u(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[c,o]=j({queryString:r,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,h.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:s}),m=(()=>{const e=c??p;return x({value:e,tabValues:d})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),f(e)}),[o,f,d]),tabValues:d}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.a_)(),{pathname:o}=(0,i.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=l[r].value;s!==n&&(h(t),a(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...d,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);