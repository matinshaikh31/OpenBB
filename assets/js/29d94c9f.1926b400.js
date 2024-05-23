"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71111],{4069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(74848),s=n(28453),r=n(94331);const i={title:"General Operation",sidebar_position:3,description:"A page providing comprehensive tutorial and help information on enabling developer mode and resolving system-related issues on both Windows and MacOS for OpenBB's software.",keywords:["OpenBB software","Developer mode","System-related issues","Windows","MacOS","Security policy","Software troubleshooting","Firewall & Network Protection","OpenBB's tutorials","Software installation","Coding tools","Terminal.app","Visual Studio Code","User manuals","FAQs","Instructions","How-to guide"]},a=void 0,l={id:"sdk/faqs/general_operation",title:"General Operation",description:"A page providing comprehensive tutorial and help information on enabling developer mode and resolving system-related issues on both Windows and MacOS for OpenBB's software.",source:"@site/content/sdk/faqs/general_operation.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/general_operation",permalink:"/sdk/faqs/general_operation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/general_operation.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,sidebarPosition:3,frontMatter:{title:"General Operation",sidebar_position:3,description:"A page providing comprehensive tutorial and help information on enabling developer mode and resolving system-related issues on both Windows and MacOS for OpenBB's software.",keywords:["OpenBB software","Developer mode","System-related issues","Windows","MacOS","Security policy","Software troubleshooting","Firewall & Network Protection","OpenBB's tutorials","Software installation","Coding tools","Terminal.app","Visual Studio Code","User manuals","FAQs","Instructions","How-to guide"]},sidebar:"tutorialSidebar",previous:{title:"Import Errors",permalink:"/sdk/faqs/import_errors"},next:{title:"Data and Sources",permalink:"/sdk/faqs/data_sources"}},d={},c=[];function h(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{title:"General Operation - Faqs | OpenBB SDK Docs"}),"\n",(0,o.jsx)(t.p,{children:'Both Windows and MacOS provide a "developer mode", and enabling it may help to overcome system-related issues.'}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"MacOS"}),': Go to the System Settings, and under the "Privacy and Security" tab, scroll to the bottom and select the option to "Allow applications downloaded from App Store and identified developers". Then, scroll up to click on, "Developer Tools", and add ',(0,o.jsx)(t.code,{children:"Terminal.app"})," and ",(0,o.jsx)(t.code,{children:"Visual Studio Code"})," (or the preferred code editor) to the list of applications allowed to run software locally that does not meet the system's security policy."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Windows"}),': Go to the Control Panel, and under the "Privacy & Security" tab, click on, "For developers". Under this menu, turn "Developer Mode" on.']}),"\n",(0,o.jsx)(t.p,{children:'From the Windows Security menu, click on the Firewall & Network Protection tab, then click on "Allow an app through firewall". If the applications below are not allowed to communicate through Windows Defender Firewall, change the settings to allow.'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"BranchCache"}),"\n",(0,o.jsx)(t.li,{children:"Hyper-V"}),"\n",(0,o.jsx)(t.li,{children:"VcXsrv"}),"\n",(0,o.jsx)(t.li,{children:"Windows Terminal"}),"\n"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"An example code block does not work."}),(0,o.jsxs)(t.p,{children:["We try to keep example code up-to-date, but sometimes a specific example is left behind. Please submit a bug report and so that we are aware of the issue. Submit a bug report ",(0,o.jsx)(t.a,{href:"https://openbb.co/support",children:"here"})]})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"Why does a specific menu or command not exist?"}),(0,o.jsxs)(t.p,{children:["It could be that you are running an outdated version in which the menu or command is not yet available. Please check the ",(0,o.jsx)(t.a,{href:"https://my.openbb.co/app/sdk/installation",children:"installation guide"})," to download the most recent release."]}),(0,o.jsxs)(t.p,{children:["Do note that it is also possible that the menu or command has been deprecated. If this is oversight, please reach out to us ",(0,o.jsx)(t.a,{href:"https://openbb.co/support",children:"here"}),"."]})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"What is the correct format for entering dates to function variables?"}),(0,o.jsxs)(t.p,{children:["Dates should be entered as a string variable, inside of quotation marks, formatted as ",(0,o.jsx)(t.code,{children:"%Y-%m-%d"})," - YYYY-MM-DD."]})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"Does the portfolio menu allow for dividends, interest, or other distributions?"}),(0,o.jsx)(t.p,{children:"Currently, this is only possible by manually updating the portfolio file."})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"Why does my Portfolio file fail to load?"}),(0,o.jsxs)(t.p,{children:["This can be the result of a formatting error, check the file in a simple text editor to observe any abnormalities in the formatting; or, it could be a bug - check the ",(0,o.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues",children:"GitHub issues page"})," for similar errors."]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Check that all the necessary column titles are present."}),"\n",(0,o.jsx)(t.li,{children:"Inspect the file to see if cells left blank have been filled unintentionally with 0 or NaN values."}),"\n",(0,o.jsx)(t.li,{children:"A particular asset may not be able to load data. Check for valid historical data from the Stocks menu."}),"\n",(0,o.jsx)(t.li,{children:"Format ticker symbols according to yFinance naming convention."}),"\n",(0,o.jsx)(t.li,{children:"All dates must be entered as YYYY-MM-DD."}),"\n",(0,o.jsx)(t.li,{children:"Transactions dated for today will fail to load historical data."}),"\n",(0,o.jsx)(t.li,{children:"MacOS users should attempt to avoid using the Numbers application as it has a habit of changing the formatting while saving."}),"\n"]}),(0,o.jsxs)(t.p,{children:["Files can be formatted as either ",(0,o.jsx)(t.code,{children:".csv"})," or ",(0,o.jsx)(t.code,{children:".xlsx"})," files, and the required column headers are:"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"[Date,Type,Ticker,Side,Price,Quantity,Fees,Investment,Currency,Sector,Industry,Country,Region]"})}),(0,o.jsxs)(t.p,{children:["See the guide ",(0,o.jsx)(t.a,{href:"/sdk/data-available/portfolio/introduction",children:"here"})," for more information."]})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"How do I change the chart styles?"}),(0,o.jsxs)(t.p,{children:["Place style sheets in this folder: ",(0,o.jsx)(t.code,{children:"OpenBBUserData/styles/user"})]}),(0,o.jsx)(t.p,{children:"To select the light themes:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import TerminalStyle\ntheme = TerminalStyle("light", "light", "light")\n'})}),(0,o.jsx)(t.p,{children:"To select the dark themes:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import TerminalStyle\ntheme = TerminalStyle("dark", "dark", "dark")\n'})})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"Where are the included stock screener presets located?"}),(0,o.jsx)(t.p,{children:"The files are located in the folder with the code, under:"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"~/openbb_terminal/miscellaneous/stocks/screener"})}),(0,o.jsxs)(t.p,{children:["Alternatively, the source code on GitHub is ",(0,o.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/develop/openbb_terminal/miscellaneous/stocks/screener",children:"here"})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var o=n(5260),s=n(74848);function r(e){let{title:t}=e;return(0,s.jsx)(o.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);