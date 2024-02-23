"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,h=d["".concat(l,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(35742);function r(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(15569);function r(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[r,i]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(o.Toggle,{isOn:r,handleChange:()=>i(!r)}))),r&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},65580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(88828),i=n(20630);const s={title:"Commands and arguments",sidebar_position:2,description:"This documentation page includes a tutorial video that provides a short introduction on commands and arguments for the OpenBB Terminal. It further explains the help dialogue for functions, the auto-completion feature, and global commands such as help, about, support, cls, quit, exit, and reset. Also, tips for submitting support requests are provided.",keywords:["tutorial video","help arguments","auto-complete","global commands","support command","reset command","command line interface","metadata"]},l=void 0,u={unversionedId:"terminal/usage/overview/commands-and-arguments",id:"terminal/usage/overview/commands-and-arguments",title:"Commands and arguments",description:"This documentation page includes a tutorial video that provides a short introduction on commands and arguments for the OpenBB Terminal. It further explains the help dialogue for functions, the auto-completion feature, and global commands such as help, about, support, cls, quit, exit, and reset. Also, tips for submitting support requests are provided.",source:"@site/content/terminal/usage/overview/commands-and-arguments.md",sourceDirName:"terminal/usage/overview",slug:"/terminal/usage/overview/commands-and-arguments",permalink:"/terminal/usage/overview/commands-and-arguments",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/overview/commands-and-arguments.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708675444,formattedLastUpdatedAt:"Feb 23, 2024",sidebarPosition:2,frontMatter:{title:"Commands and arguments",sidebar_position:2,description:"This documentation page includes a tutorial video that provides a short introduction on commands and arguments for the OpenBB Terminal. It further explains the help dialogue for functions, the auto-completion feature, and global commands such as help, about, support, cls, quit, exit, and reset. Also, tips for submitting support requests are provided.",keywords:["tutorial video","help arguments","auto-complete","global commands","support command","reset command","command line interface","metadata"]},sidebar:"tutorialSidebar",previous:{title:"Structure and Navigation",permalink:"/terminal/usage/overview/structure-and-navigation"},next:{title:"Customization",permalink:"/terminal/usage/overview/customizing-the-terminal"}},m={},d=[{value:"Help arguments",id:"help-arguments",level:2},{value:"Auto-complete",id:"auto-complete",level:2},{value:"Global commands",id:"global-commands",level:2},{value:"Help",id:"help",level:3},{value:"About",id:"about",level:3},{value:"Support",id:"support",level:3},{value:"CLS",id:"cls",level:3},{value:"Quit",id:"quit",level:3},{value:"Exit",id:"exit",level:3},{value:"Reset",id:"reset",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{title:"Commands and arguments - Overview - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/y8J7fGW9ZpY?si=ioMxKMCgD2X-MQ2j",videoLegend:"Short introduction on commands and arguments",mdxType:"TutorialVideo"}),(0,o.kt)("h2",{id:"help-arguments"},"Help arguments"),(0,o.kt)("p",null,"A help dialogue for any function at the current location is printed to the screen by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," after the command. The information returned contains a short description of the function and all accepted arguments. For example the ",(0,o.kt)("inlineCode",{parentName:"p"},"news")," command will return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"(\ud83e\udd8b) / $ news -h\n\nusage: news [-t TERM [TERM ...]] [-s SOURCES] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]] [-l LIMIT]\n\ndisplay news articles based on term and data sources\n\noptions:\n  -t TERM [TERM ...], --term TERM [TERM ...]\n                        search for a term on the news\n  -s SOURCES, --sources SOURCES\n                        sources from where to get news from (separated by comma)\n  -h, --help            show this help message\n  --export EXPORT       Export raw data into csv, json, xlsx\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files.\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data.\n\nFor more information and examples, use 'about news' to access the related guide.\n")),(0,o.kt)("p",null,'To search for news containing the term, "Federal Reserve", you can use this command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"(\ud83e\udd8b) / $ news --term Federal Reserve\n")),(0,o.kt)("h2",{id:"auto-complete"},"Auto-complete"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247702-f707531c-2c65-4380-a662-cd4bc2ae0199.png",alt:"Auto Complete"})),(0,o.kt)("p",null,"The OpenBB Terminal is equipped with an auto completion engine that presents choices based on the current menu and command. Whenever you start typing, suggestion prompts will appear for existing commands and menus. When the command contains arguments, pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"space bar")," after typing the command will present the list of available arguments. Note that a menu doesn't has arguments attached."),(0,o.kt)("p",null,"This functionality dramatically reduces the number of key strokes required to perform tasks and, in many cases, eliminates the need to consult the help dialogue for reminders. Choices - where they are bound by a defined list - are searchable with the up and down arrow keys."),(0,o.kt)("h2",{id:"global-commands"},"Global commands"),(0,o.kt)("p",null,"These are commands that can be used throughout the terminal and will work regardless of the menu where they belong."),(0,o.kt)("h3",{id:"help"},"Help"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"help")," command shows the current menu you are in and all the commands and menus that exist, including a short description for each of these."),(0,o.kt)("p",null,"This is arguably one of the most helpful commands that the terminal. If you are familiar to navigating in a command line interface, it's the equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -ll"),"."),(0,o.kt)("h3",{id:"about"},"About"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"about")," command opens the browser to the OpenBB documentation pages for the specific command or menu. Note that this will depend on where the user is located within the terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"(\ud83e\udd8b) / $ about stocks\n")),(0,o.kt)("p",null,"The command above will open a browser to ",(0,o.kt)("a",{parentName:"p",href:"/terminal/menus/stocks"},"Introduction to the Stocks menu"),"."),(0,o.kt)("h3",{id:"support"},"Support"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"support")," command allows to submit a new request for support, a general question, or a bug report. The command will pre-populate a form with key information, like the command or menu name specific to the issue. Use the up and down arrow keys to browse and select the appropriate item for the ticket."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233577183-fbeb7be2-1d00-4ca0-86b3-42f1b71081e8.png",alt:"Support"})),(0,o.kt)("p",null,"Naturally, this command has a help dialogue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"(\ud83e\udd8b) / $ support -h\n\nSubmit your support request\n\noptions:\n  -c {search,load,quote,tob,candle,news,resources,codes,ta,ba,qa,disc,dps,scr,sia,ins,gov,res,dd,fa,bt,ca,options,th,forecast}, --command {generic,search,load,quote,tob,candle,news,resources,codes,ta,ba,qa,disc,dps,scr,sia,ins,gov,res,dd,fa,bt,ca,options,th,forecast}\n                        Command that needs support (default: None)\n  --msg MSG [MSG ...], -m MSG [MSG ...]\n                        Message to send. Enclose it with double quotes (default: )\n  --type {bug,suggestion,question,generic}, -t {bug,suggestion,question,generic}\n                        Support ticket type (default: generic)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,"An example of a valid support ticket could be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'/stocks/ $ support search --type question --msg "How do I find stocks from India with OpenBB?"\n')),(0,o.kt)("p",null,"The command opens a browser window to a pre-populated form on the OpenBB website.  If you are signed-in to the Hub, all that is left to do is click ",(0,o.kt)("inlineCode",{parentName:"p"},"Submit"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233577448-3e426a88-d0cf-4338-8f4c-21b9fd01d8b2.png",alt:"Submit Form"})),(0,o.kt)("p",null,"PS: The answer to this question is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"(\ud83e\udd8b) /stocks/ $ search --country india --exchange-country india\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tips for submitting a support request:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Tell us what version number is installed."),(0,o.kt)("li",{parentName:"ul"},"Tell us what operating system and version the machine has."),(0,o.kt)("li",{parentName:"ul"},"What is the installation type?  Installer, Source, PyPi, Docker, other?"),(0,o.kt)("li",{parentName:"ul"},"Tell us the command and parameter combination causing the error."),(0,o.kt)("li",{parentName:"ul"},"Tell us what symbol (ticker) is, or was trying to be, loaded."),(0,o.kt)("li",{parentName:"ul"},"Show us the complete error message."),(0,o.kt)("li",{parentName:"ul"},"Let us know any contextual information that will help us replicate and accurately identify the problem."))),(0,o.kt)("h3",{id:"cls"},"CLS"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cls")," command clears the entire terminal screen."),(0,o.kt)("h3",{id:"quit"},"Quit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"quit")," command (can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"q")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".."),") allows to leave the current menu to go one menu above. If the user is on the root, that will mean leaving the terminal."),(0,o.kt)("h3",{id:"exit"},"Exit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"exit")," command allows the user to exit the terminal."),(0,o.kt)("h3",{id:"reset"},"Reset"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," command (or ",(0,o.kt)("inlineCode",{parentName:"p"},"r"),") allows a developer that is using the terminal through source code to quickly test it's code changes by re-starting the terminal with the code changes. This allows to improve speed of development."),(0,o.kt)("p",null,"For more information on contributing to the OpenBB Terminal read our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/main/CONTRIBUTING.md"},"contribution guidelines"),"."))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,o=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}}}]);