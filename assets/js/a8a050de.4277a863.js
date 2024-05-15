"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77649],{2553:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=a(74848),s=a(28453),o=a(94331),i=a(69396);const r={title:"Data sources",sidebar_position:1,description:"This page provides useful information on dealing with different data vendors when using OpenBB's Terminal. It outlines how to select a default data source, acquire API keys, and switch the data vendor using specific commands, all in an effort to streamline and improve the user's experience.",keywords:["Terminal","data vendors","API keys","data sources","FinancialModelingPrep","Polygon","AlphaVantage","EODHD","YahooFinance","source","stocks/fa/income","changing data source","Default data source","/sources","get --cmd","set --cmd"]},l=void 0,d={id:"terminal/usage/data/data-sources",title:"Data sources",description:"This page provides useful information on dealing with different data vendors when using OpenBB's Terminal. It outlines how to select a default data source, acquire API keys, and switch the data vendor using specific commands, all in an effort to streamline and improve the user's experience.",source:"@site/content/terminal/usage/data/data-sources.md",sourceDirName:"terminal/usage/data",slug:"/terminal/usage/data/data-sources",permalink:"/terminal/usage/data/data-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/data/data-sources.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,sidebarPosition:1,frontMatter:{title:"Data sources",sidebar_position:1,description:"This page provides useful information on dealing with different data vendors when using OpenBB's Terminal. It outlines how to select a default data source, acquire API keys, and switch the data vendor using specific commands, all in an effort to streamline and improve the user's experience.",keywords:["Terminal","data vendors","API keys","data sources","FinancialModelingPrep","Polygon","AlphaVantage","EODHD","YahooFinance","source","stocks/fa/income","changing data source","Default data source","/sources","get --cmd","set --cmd"]},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/terminal/usage/data/"},next:{title:"API Keys",permalink:"/terminal/usage/data/api-keys"}},c={},h=[{value:"Relationship With Data Vendors",id:"relationship-with-data-vendors",level:2},{value:"Changing the Data Source In-Command",id:"changing-the-data-source-in-command",level:2},{value:"Setting Default Source Through Hub (easy)",id:"setting-default-source-through-hub-easy",level:3},{value:"Setting Default Source Through Terminal",id:"setting-default-source-through-terminal",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{title:"Data sources - Data - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,t.jsx)(i.A,{youtubeLink:"https://www.youtube.com/embed/cvSwG96Yf4o?si=oswcJYUH51F206Hu",videoLegend:"Short video on where the data comes from"}),"\n",(0,t.jsx)(n.h2,{id:"relationship-with-data-vendors",children:"Relationship With Data Vendors"}),"\n",(0,t.jsxs)(n.p,{children:["Most commands will require obtaining API keys from various data providers. OpenBB provides methods for consuming these data feeds, but has no control over the quality or quantity of data provided to an end-user. ",(0,t.jsx)(n.strong,{children:"No API Keys are required to get started using the Terminal"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See the list of data providers ",(0,t.jsx)(n.a,{href:"/terminal/usage/data/api-keys",children:"here"}),", along with instructions for entering the credentials into the OpenBB Terminal. You can also request a new data source through this ",(0,t.jsx)(n.a,{href:"https://openbb.co/request-a-feature",children:"form"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"OpenBB doesn't store any financial data in its servers. We aggregate access to multiple data sources through API calls and standardize that interaction to provide users a seamless experience when dealing with different data vendors"})}),"\n",(0,t.jsx)(n.h2,{id:"changing-the-data-source-in-command",children:"Changing the Data Source In-Command"}),"\n",(0,t.jsxs)(n.p,{children:["Many commands have multiple data sources associated with it. A great example is ",(0,t.jsx)(n.code,{children:"/stocks/fa/income"}),", which allows you to select FinancialModelingPrep, Polygon, AlphaVantage, EODHD or YahooFinance. In order to specify the data vendor for that particular command, use the ",(0,t.jsx)(n.code,{children:"--source"})," argument."]}),"\n",(0,t.jsx)(n.p,{children:"This also becomes clear from the help menu."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/fa/income -h\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"usage: income [-t TICKER] [-q] [-r] [-p column] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]] [-l LIMIT] [--source {FinancialModelingPrep,Polygon,AlphaVantage,EODHD,YahooFinance}]\n\nPrints a complete income statement over time. This can be either quarterly or annually.\n\noptional arguments:\n  -t TICKER, --ticker TICKER\n                        Ticker to analyze (default: None)\n  -q, --quarter         Quarter fundamental data flag. (default: False)\n  -r, --ratios          Shows percentage change of values. (default: False)\n  -p column, --plot column\n                        Rows to plot, comma separated. (-1 represents invalid data) (default: None)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files. (default: None)\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data. (default: 5)\n  --source {FinancialModelingPrep,Polygon,AlphaVantage,EODHD,YahooFinance}\n                        Data source to select from (default: FinancialModelingPrep)\n\nFor more information and examples, use 'about income' to access the related guide.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Within the source arguments it shows the available sources. An API key may be required to use a source, see this ",(0,t.jsx)(n.a,{href:"/terminal/usage/data/api-keys",children:"page"})," for insructions on obtaining and setting credentials."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/233730763-54fd6400-f3ad-44a0-9c73-254d91ac2085.png",alt:"Selecting a new Data Source"})}),"\n",(0,t.jsxs)(n.p,{children:["The available sources for each command are displayed on the right of the command, and they can be distinguished by the square brackets and distinct font color group. By default, if the user doesn't specify ",(0,t.jsx)(n.code,{children:"--source"})," the Terminal will use the first data provider displayed."]}),"\n",(0,t.jsx)(n.h3,{id:"setting-default-source-through-hub-easy",children:"Setting Default Source Through Hub (easy)"}),"\n",(0,t.jsxs)(n.p,{children:["The default data vendor can be selected with more ease through the OpenBB Hub. Instructions can be found ",(0,t.jsx)(n.a,{href:"/terminal/usage/hub",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"setting-default-source-through-terminal",children:"Setting Default Source Through Terminal"}),"\n",(0,t.jsxs)(n.p,{children:["The default data source for each command (where multiple sources are available) can be defined within the ",(0,t.jsx)(n.a,{href:"/terminal/usage/data/data-sources",children:(0,t.jsx)(n.code,{children:"/sources"})})," menu."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, changing the default data provider for the ",(0,t.jsx)(n.code,{children:"income"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/sources/get --cmd stocks/fa/income\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conole",children:"Default   : FinancialModelingPrep\nAvailable : FinancialModelingPrep, Polygon, AlphaVantage, EODHD, YahooFinance\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, change the default data provider with the, ",(0,t.jsx)(n.code,{children:"set"}),", command. For example, change the data provider to ",(0,t.jsx)(n.code,{children:"Polygon"})," with\nthe following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/sources/set --cmd stocks/fa/income --source Polygon\n"})}),"\n",(0,t.jsx)(n.p,{children:"A confirmation message is displayed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Default data source for 'stocks/fa/income' set to 'Polygon'.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Using, ",(0,t.jsx)(n.code,{children:"get"}),", once more will confirm the update:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/sources/get --cmd stocks/fa/income\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Default   : Polygon\nAvailable : Polygon, FinancialModelingPrep, AlphaVantage, EODHD, YahooFinance\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},94331:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(5260),s=a(74848);function o(e){let{title:n}=e;return(0,s.jsx)(t.A,{children:(0,s.jsx)("title",{children:n})})}},69396:(e,n,a)=>{a.d(n,{A:()=>i});var t=a(96540),s=a(23174),o=a(74848);function i(e){let{youtubeLink:n,videoLegend:a="Tutorial video"}=e;const[i,r]=(0,t.useState)(!0);return(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,o.jsx)("p",{children:a}),(0,o.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,o.jsx)(s.Toggle,{isOn:i,handleChange:()=>r(!i)})})]}),i&&(0,o.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,a)=>{e.exports=a(49793)},49793:(e,n,a)=>{var t,s=(t=a(96540))&&"object"==typeof t&&"default"in t?t.default:t;!function(e,n){void 0===n&&(n={});var a=n.insertAt;if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===a&&t.firstChild?t.insertBefore(s,t.firstChild):t.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return s.createElement("label",{"data-testid":"Toggle-label",className:"switch"},s.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),s.createElement("span",{className:"slider round"}))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);