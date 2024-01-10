"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"REST API",sidebar_position:1,description:"Learn how to configure and deploy the OpenBB Platform's REST API using FastAPI, including detailed guidelines on API documentation, authorization, CORS settings, and server configurations.",keywords:["OpenBB Platform","REST API","FastAPI","API Documentation","API Authorization","CORS Configuration","Server Settings","API Deployment","Swagger Documentation","Basic Auth","API Security","System Settings JSON","API Keys","Public Internet Deployment","Production Deployment","API Endpoints","Uvicorn Command","Base64 Encoding","HTTP Headers","Python Requests","Local Network API","OpenAPI JSON"]},i=void 0,s={unversionedId:"platform/usage/rest_api",id:"platform/usage/rest_api",title:"REST API",description:"Learn how to configure and deploy the OpenBB Platform's REST API using FastAPI, including detailed guidelines on API documentation, authorization, CORS settings, and server configurations.",source:"@site/content/platform/usage/rest_api.md",sourceDirName:"platform/usage",slug:"/platform/usage/rest_api",permalink:"/platform/usage/rest_api",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/rest_api.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704905987,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:1,frontMatter:{title:"REST API",sidebar_position:1,description:"Learn how to configure and deploy the OpenBB Platform's REST API using FastAPI, including detailed guidelines on API documentation, authorization, CORS settings, and server configurations.",keywords:["OpenBB Platform","REST API","FastAPI","API Documentation","API Authorization","CORS Configuration","Server Settings","API Deployment","Swagger Documentation","Basic Auth","API Security","System Settings JSON","API Keys","Public Internet Deployment","Production Deployment","API Endpoints","Uvicorn Command","Base64 Encoding","HTTP Headers","Python Requests","Local Network API","OpenAPI JSON"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/platform/usage/"},next:{title:"Basic Syntax",permalink:"/platform/usage/basic_syntax"}},l={},p=[{value:"API Documentation",id:"api-documentation",level:2},{value:"Data API Keys",id:"data-api-keys",level:2},{value:"API Authorization",id:"api-authorization",level:2},{value:"Advanced API Settings",id:"advanced-api-settings",level:2},{value:"CORS Configuration",id:"cors-configuration",level:2},{value:"Servers List",id:"servers-list",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The OpenBB Platform comes with a FastAPI application that serves platform commands as REST API endpoints."),(0,o.kt)("p",null,"Activate the Python environment and then start the server from a Terminal command line with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"uvicorn openbb_core.api.rest_api:app\n")),(0,o.kt)("p",null,"You can add arguments that are supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"uvicorn")," to customize how the API is launched.\nFor example this command will be useful if you are developing. It will launch the API in a way it's reachable on your local network and reload every time the code changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n")),(0,o.kt)("p",null,"To learn more about how you can run the API in different scenarios refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.uvicorn.org/#command-line-options"},"uvicorn's documentation")),(0,o.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,o.kt)("p",null,"The Fast API app comes with a swagger documentation page. When running the API locally, navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/docs"},"http://127.0.0.1:8000/docs"),"."),(0,o.kt)("p",null,"The API Docs provide interactive descriptions of all available endpoints that you can call right from the documentation web page."),(0,o.kt)("h2",{id:"data-api-keys"},"Data API Keys"),(0,o.kt)("p",null,"The API keys to your data providers are loaded from the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.openbb_platform/user_settings.json")," file. You can find more information about the structure of the file and environment variables in the ",(0,o.kt)("a",{parentName:"p",href:"/platform/usage#local-environment"},"Local Environment")," section."),(0,o.kt)("h2",{id:"api-authorization"},"API Authorization"),(0,o.kt)("p",null,"By default, no authorization is required. Basic authorization can be enabled with environment variables. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.openbb_platform")," folder, next to the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_settings.json"),", create a new file, ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),", if it does not yet exist. Set your Basic Auth credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-.env"},'OPENBB_API_AUTH="True"\nOPENBB_API_USERNAME="my_email"\nOPENBB_API_PASSWORD="my_password"\n')),(0,o.kt)("p",null,"The application will expect a header that contains username and password in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"Basic <username:password>"),', where "username:password" is encoded in Base64. Pass this in every request to the API inside the headers "Authorization" field.'),(0,o.kt)("p",null,"Here is an example of calling the API that has Basic Authorization enabled from python."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base64\nimport requests\n\nmsg = "some_user:some_pass"\nmsg_bytes = msg.encode(\'ascii\')\nbase64_bytes = base64.b64encode(msg_bytes)\nbase64_msg = base64_bytes.decode(\'ascii\')\n\n\nsymbol="SPY"\nurl = f"http://127.0.0.1:8000/api/v1/equity/price/quote?provider=intrinio&symbol={symbol}&source=intrinio_mx"\nheaders = {"accept": "application/json", "Authorization": f"Basic {base64_msg}"}\n\nresponse = requests.get(url=url, headers=headers)\n\nresponse.json()\n')),(0,o.kt)("p",null,"Refer to the Developer Guidelines for custom authorization procedures."),(0,o.kt)("h2",{id:"advanced-api-settings"},"Advanced API Settings"),(0,o.kt)("p",null,'When deploying the API to the public internet, it\'s crucial to configure it in a way you ensure the application functions correctly and securely. Two critical aspects to consider are Cross-Origin Resource Sharing (CORS) and the configuration of the "servers" list.'),(0,o.kt)("p",null,"The configuration for these settings is managed through the ",(0,o.kt)("inlineCode",{parentName:"p"},"system_settings.json")," file, which should be located in the same directory as your ",(0,o.kt)("inlineCode",{parentName:"p"},"user_settings.json"),". This JSON file allows you to specify various settings that affect the behavior of the API. Here's an example structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"system_settings.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "api_settings": {\n        "version": "1",\n        "title": "OpenBB Platform API",\n        "description": "This is the OpenBB Platform API.",\n        "terms_of_service": "http://example.com/terms/",\n        "contact_name": "OpenBB Team",\n        "contact_url": "https://openbb.co",\n        "contact_email": "hello@openbb.co",\n        "license_name": "MIT",\n        "license_url": "https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/LICENSE",\n        "servers": [\n            {\n                "url": "http://localhost:8000",\n                "description": "Local OpenBB development server"\n            }\n        ],\n        "cors": {\n            "allow_origins": [\n                "*"\n            ],\n            "allow_methods": [\n                "*"\n            ],\n            "allow_headers": [\n                "*"\n            ]\n        },\n        "prefix": "/api/v1"\n    }\n}\n')),(0,o.kt)("h2",{id:"cors-configuration"},"CORS Configuration"),(0,o.kt)("p",null,"The cors section within the api_settings is particularly important for web applications. It defines the rules for which external domains are allowed to access your API."),(0,o.kt)("p",null,'In the example above, the settings are permissive ("',"*",'" for origins, methods, and headers), which means any external domain can request resources from your API. This setting might be suitable for development, but when deploying to public internet, you should specify the exact domains, methods, and headers to tighten security.'),(0,o.kt)("h2",{id:"servers-list"},"Servers List"),(0,o.kt)("p",null,"The servers array is used to specify the different environments where your API can be accessed."),(0,o.kt)("p",null,"In the example, there is only one server defined, which is the local development server. For deployment to public internet, you would add an entry for the public server URL and any other environments where your API is accessible."))}d.isMDXComponent=!0}}]);