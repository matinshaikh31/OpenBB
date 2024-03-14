"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95126],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,b=p["".concat(d,".").concat(u)]||p[u]||h[u]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},20630:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(15569);function o(e){let{youtubeLink:t,videoLegend:a="Tutorial video"}=e;const[o,i]=(0,n.useState)(!0);return n.createElement("div",{style:{textAlign:"center"}},n.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},n.createElement("p",null,a),n.createElement("div",{style:{transform:"scale(0.7)"}},n.createElement(r.Toggle,{isOn:o,handleChange:()=>i(!o)}))),o&&n.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},n.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},52884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88828),i=a(20630);const s={title:"Dashboards",sidebar_position:0,description:"This documentation page explains the functionalities of OpenBB Terminal Pro's dashboard feature. Learn how to add widgets, text, rename, duplicate, and interact with dashboards in various ways for efficient data visualization.",keywords:["Dashboard Usage","Data Visualization","Add Widgets","Manage Dashboards","Dashboard export","Dashboard settings","Create new dashboard"]},d=void 0,l={unversionedId:"pro/dashboards/index",id:"pro/dashboards/index",title:"Dashboards",description:"This documentation page explains the functionalities of OpenBB Terminal Pro's dashboard feature. Learn how to add widgets, text, rename, duplicate, and interact with dashboards in various ways for efficient data visualization.",source:"@site/content/pro/dashboards/index.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/",permalink:"/pro/dashboards/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/dashboards/index.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:0,frontMatter:{title:"Dashboards",sidebar_position:0,description:"This documentation page explains the functionalities of OpenBB Terminal Pro's dashboard feature. Learn how to add widgets, text, rename, duplicate, and interact with dashboards in various ways for efficient data visualization.",keywords:["Dashboard Usage","Data Visualization","Add Widgets","Manage Dashboards","Dashboard export","Dashboard settings","Create new dashboard"]},sidebar:"tutorialSidebar",previous:{title:"Data providers",permalink:"/pro/widgets/data-provider"},next:{title:"Grouping Mechanism",permalink:"/pro/dashboards/grouping"}},c={},p=[{value:"The plus icon at the bottom right",id:"the-plus-icon-at-the-bottom-right",level:3},{value:"The settings icon on the Dashboard&#39;s sidebar",id:"the-settings-icon-on-the-dashboards-sidebar",level:3},{value:"The plus icon on the sidebar",id:"the-plus-icon-on-the-sidebar",level:3}],h={toc:p},u="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Dashboards | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/kSZvLAPmwvo?si=O6FaSchvvxpBWtDR",videoLegend:"Short introduction to dashboards",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"Dashboards are a collection of widgets. In the image above you can see that there are 3 different dashboards and the one selected can be seen in the working area."),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"dash",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/156b080a-e32b-4d56-baf6-bb04038f2d63"}),(0,r.kt)("p",null,"There are 2 ways to interact with dashboards."),(0,r.kt)("h3",{id:"the-plus-icon-at-the-bottom-right"},"The plus icon at the bottom right"),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"add widget",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/e8a79a68-1712-4c9d-8a63-797aaa7fd541"}),(0,r.kt)("p",null,"This allows to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add widget - Allows to add widgets to dashboard"),(0,r.kt)("li",{parentName:"ul"},"Add text - Allows to add text to the dashboard"),(0,r.kt)("li",{parentName:"ul"},"Export report - Exports dashboard into a PDF or PNG format")),(0,r.kt)("h3",{id:"the-settings-icon-on-the-dashboards-sidebar"},"The settings icon on the Dashboard's sidebar"),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"dash settings",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/13f536e7-dd5a-4f22-be1c-c65fd31eec6d"}),(0,r.kt)("p",null,"This allows to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rename - Rename dashboard's name"),(0,r.kt)("li",{parentName:"ul"},"Move to - Move that dashboard into a folder"),(0,r.kt)("li",{parentName:"ul"},"Duplicate - Duplicate dashboard"),(0,r.kt)("li",{parentName:"ul"},"Open in a new window - For users wanting to leverage multiple screens"),(0,r.kt)("li",{parentName:"ul"},"Delete - Delete dashboard"),(0,r.kt)("li",{parentName:"ul"},"Export report - Exports dashboard into a PDF or PNG format")),(0,r.kt)("h3",{id:"the-plus-icon-on-the-sidebar"},"The plus icon on the sidebar"),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"add dash",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5104df11-8cf4-4c80-b9ac-c6e831d28294"}),(0,r.kt)("p",null,"Which allows the creation of a new dashboard, or a new folder."))}b.isMDXComponent=!0},15569:(e,t,a)=>{e.exports=a(42285)},42285:(e,t,a)=>{var n,r=(n=a(67294))&&"object"==typeof n&&"default"in n?n.default:n;!function(e,t){void 0===t&&(t={});var a=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);