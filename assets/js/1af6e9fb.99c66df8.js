"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94739],{58088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),o=t(28453),s=t(94331);const r={title:"Hub Synchronization",sidebar_position:6,description:"This page outlines the `/account` menu within the OpenBB Platform CLI, and integrations with the OpenBB Hub.",keywords:["OpenBB Platform CLI","OpenBB Hub","Registration","Login process","API Keys management","Theme","Style","Dark","Light","Script Routines","Personal Access Tokens","PAT","Credentials","Customization"]},l=void 0,a={id:"cli/hub",title:"Hub Synchronization",description:"This page outlines the `/account` menu within the OpenBB Platform CLI, and integrations with the OpenBB Hub.",source:"@site/content/cli/hub.md",sourceDirName:"cli",slug:"/cli/hub",permalink:"/cli/hub",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/cli/hub.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,sidebarPosition:6,frontMatter:{title:"Hub Synchronization",sidebar_position:6,description:"This page outlines the `/account` menu within the OpenBB Platform CLI, and integrations with the OpenBB Hub.",keywords:["OpenBB Platform CLI","OpenBB Hub","Registration","Login process","API Keys management","Theme","Style","Dark","Light","Script Routines","Personal Access Tokens","PAT","Credentials","Customization"]},sidebar:"tutorialSidebar",previous:{title:"Configuration & Settings",permalink:"/cli/configuration"},next:{title:"Data Sources",permalink:"/cli/data-sources"}},c={},d=[{value:"Registration",id:"registration",level:2},{value:"Login",id:"login",level:2},{value:"PAT",id:"pat",level:3},{value:"Email &amp; Password",id:"email--password",level:3},{value:"API Keys",id:"api-keys",level:2},{value:"Theme Styles",id:"theme-styles",level:2},{value:"Script Routines",id:"script-routines",level:2},{value:"Refresh",id:"refresh",level:2},{value:"Logout",id:"logout",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"Hub Synchronization | OpenBB Platform CLI Docs"}),"\n",(0,i.jsxs)(n.p,{children:["This page outlines the ",(0,i.jsx)(n.code,{children:"/account"})," menu within the OpenBB Platform CLI and integrations with the OpenBB Hub."]}),"\n",(0,i.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,i.jsxs)(n.p,{children:["To get started, you'll need to create an account on the OpenBB Hub by visiting ",(0,i.jsx)(n.a,{href:"https://my.openbb.co",children:"https://my.openbb.co"})]}),"\n",(0,i.jsx)(n.p,{children:"By registering with the OpenBB Hub, you can easily access our products on multiple devices and maintain consistent settings for an improved user experience."}),"\n",(0,i.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,i.jsx)(n.p,{children:"Once you're successfully registered on the OpenBB Hub, you can log in to access all the benefits it has to offer."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"OpenBB recommends logging in via the Personal Access Token (PAT) method. This revokable token allows users to login without transmitting any personally identifiable information, like an email address, which makes it an ideal solution for shared machines and public network connections."})}),"\n",(0,i.jsxs)(n.p,{children:["To login, enter the ",(0,i.jsx)(n.code,{children:"/account"})," menu and then use the ",(0,i.jsx)(n.code,{children:"login"})," command with your choice of login method."]}),"\n",(0,i.jsx)(n.h3,{id:"pat",children:"PAT"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/account\nlogin --pat REPLACE_WITH_PAT\n"})}),"\n",(0,i.jsx)(n.h3,{id:"email--password",children:"Email & Password"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/account\nlogin --email my@emailaddress.com --password totallysecurepassword\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api-keys",children:"API Keys"}),"\n",(0,i.jsx)(n.p,{children:"The OpenBB Platform acts as a mediator between users and data providers."}),"\n",(0,i.jsxs)(n.p,{children:["With an OpenBB Hub account, you can manage your API keys on ",(0,i.jsx)(n.a,{href:"https://my.openbb.co/app/platform/credentials",children:"this page"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Upon logging in, the CLI will automatically retrieve the API keys associated with your account."}),"\n",(0,i.jsx)(n.p,{children:"If you have not saved them on the OpenBB Hub, they will be loaded from your local environment by default."}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"If an API key is saved on the OpenBB Hub, it will take precedence over the local environment key."})}),"\n",(0,i.jsx)(n.p,{children:"The CLI will need to be restarted, or refreshed, when changes are made on the Hub."}),"\n",(0,i.jsx)(n.h2,{id:"theme-styles",children:"Theme Styles"}),"\n",(0,i.jsxs)(n.p,{children:['Theme styles correspond to the ability to change the terminal "skin" (i.e. coloring of the ',(0,i.jsx)(n.code,{children:"menu"}),", ",(0,i.jsx)(n.code,{children:"commands"}),", ",(0,i.jsx)(n.code,{children:"data source"}),", ",(0,i.jsx)(n.code,{children:"parameters"}),", ",(0,i.jsx)(n.code,{children:"information"})," and ",(0,i.jsx)(n.code,{children:"help"}),"), as well as the chart and table styles."]}),"\n",(0,i.jsx)(n.p,{children:"In the OpenBB Hub, you can select the text colours for the CLI. After customizing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the theme to your styles directory (",(0,i.jsx)(n.code,{children:"/home/your-user/OpenBBUserData/styles/user"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Apply it by selecting the style from the ",(0,i.jsx)(n.code,{children:"/settings"})," menu."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/settings\nconsole_style -s openbb_config\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"openbb_config"})," with the name of the downloaded (JSON) file."]}),"\n",(0,i.jsx)(n.h2,{id:"script-routines",children:"Script Routines"}),"\n",(0,i.jsx)(n.p,{children:"The OpenBB Hub allows users to create, edit, manage, and share their script routines that can be run in the OpenBB Platform CLI."}),"\n",(0,i.jsxs)(n.p,{children:['The "Download" button will save the file locally. Add it to ',(0,i.jsx)(n.code,{children:"/home/your-user/OpenBBUserData/routines"}),", for the script to populate as a choice for the ",(0,i.jsx)(n.code,{children:"exe"})," command on next launch."]}),"\n",(0,i.jsx)(n.h2,{id:"refresh",children:"Refresh"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"refresh"})," command will update any changes without the need to logout and login."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/account\nrefresh\n"})}),"\n",(0,i.jsx)(n.h2,{id:"logout",children:"Logout"}),"\n",(0,i.jsxs)(n.p,{children:["Logging out will restore any local credentials and preferences defined in the ",(0,i.jsx)(n.code,{children:"user_settings.json"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/account\nlogout\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(5260),o=t(74848);function s(e){let{title:n}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);