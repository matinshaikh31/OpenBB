"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68590],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(35742);function l(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},53319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const o={title:"Econometrics",description:"This documentation page introduces the Econometrics menu, in the OpenBB Terminal.  The menu has features for performing statistical analysis on custom datasets.",keywords:["econometrics","statistics","statistical research","custom datasets","panel regression","autocorrelation tests","heteroscedasticity","OpenBBUserData","panel","normality","co-integration","unitroot","garch","linear regression"]},i=void 0,s={unversionedId:"terminal/menus/econometrics",id:"terminal/menus/econometrics",title:"Econometrics",description:"This documentation page introduces the Econometrics menu, in the OpenBB Terminal.  The menu has features for performing statistical analysis on custom datasets.",source:"@site/content/terminal/menus/econometrics.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/econometrics",permalink:"/terminal/menus/econometrics",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/econometrics.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708675444,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"Econometrics",description:"This documentation page introduces the Econometrics menu, in the OpenBB Terminal.  The menu has features for performing statistical analysis on custom datasets.",keywords:["econometrics","statistics","statistical research","custom datasets","panel regression","autocorrelation tests","heteroscedasticity","OpenBBUserData","panel","normality","co-integration","unitroot","garch","linear regression"]},sidebar:"tutorialSidebar",previous:{title:"Alternative",permalink:"/terminal/menus/alternative"},next:{title:"Economy",permalink:"/terminal/menus/economy"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Sample Datasets",id:"sample-datasets",level:3},{value:"Load",id:"load",level:3},{value:"Show",id:"show",level:3},{value:"Index",id:"index",level:3},{value:"Type",id:"type",level:3},{value:"RET",id:"ret",level:3},{value:"Clean",id:"clean",level:3},{value:"Plot",id:"plot",level:3},{value:"OLS",id:"ols",level:3},{value:"Norm",id:"norm",level:3},{value:"Working With Panel Data",id:"working-with-panel-data",level:3},{value:"Scripts &amp; Routines",id:"scripts--routines",level:3}],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Econometrics - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Econometrics functions are for performing statistical analysis on custom datasets.  Multiple data sets can be loaded from local storage and modified with basic DataFrame operations. Statistical tests - (e.g. ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Breusch%E2%80%93Godfrey_test",target:"_blank",rel:"noreferrer noopener"},"Breusch-Godfrey autocorrelation tests"),") or OLS and Panel regressions (e.g. ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Random_effects_model",target:"_blank",rel:"noreferrer noopener"},"Random Effects")," and ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Fixed_effects_model",target:"_blank",rel:"noreferrer noopener"},"Fixed Effects"),") - are performed on any of the loaded files."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Enter the Econometrics menu from the main menu by typing, ",(0,r.kt)("inlineCode",{parentName:"p"},"econometrics"),", into the Terminal.  The absolute path for the menu is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/econometrics\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b1720a35-d5d0-44c8-9826-b0cfffe29ee0",alt:"Screenshot 2023-11-02 at 9 03 24\u202fAM"})),(0,r.kt)("h3",{id:"sample-datasets"},"Sample Datasets"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/44cf93ce-96f9-4c6b-bed1-611f27738de9",alt:"Screenshot 2023-11-02 at 12 12 07\u202fPM"})),(0,r.kt)("p",null,"There are sample datasets included in the Scipy library, those are listed by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"--examples")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," command. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"longley"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load longley\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Due to the small size of the dataset, many of these tests are not statistically significant.")),(0,r.kt)("h3",{id:"load"},"Load"),(0,r.kt)("p",null,'The first step in using the Econometrics menu is to load in some data.  Place files in the paths displayed at the top of the menu, under "Looking for data in:".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/aabd6f32-2495-45f4-84b7-3d6686875e66",alt:"Screenshot 2023-11-02 at 9 15 17\u202fAM"})),(0,r.kt)("p",null,"This file contains historical monthly levels of the S&P 500 price and P/E ratio.  It was populated from: ",(0,r.kt)("a",{parentName:"p",href:"https://data.nasdaq.com/data/MULTPL-sp-500-ratios"},"Nasdaq Data Link"),"."),(0,r.kt)("p",null,"After loading a file, refreshing the screen (",(0,r.kt)("inlineCode",{parentName:"p"},"?")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),' with no command) updates the information printed under "Loaded files and data columns:".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Loaded files and data columns:\n        sp500_pe : date, pe, price\n")),(0,r.kt)("h3",{id:"show"},"Show"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," command to inspect a a loaded file.  If more than one file has been loaded, specify the target's name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"show sp500_pe\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"pe"),(0,r.kt)("th",{parentName:"tr",align:"right"},"price"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1871-01-31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"11.1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1871-02-28"),(0,r.kt)("td",{parentName:"tr",align:"right"},"11.25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"..."),(0,r.kt)("td",{parentName:"tr",align:"right"},"..."),(0,r.kt)("td",{parentName:"tr",align:"right"},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-10-31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"23.94"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4193.8")))),(0,r.kt)("h3",{id:"index"},"Index"),(0,r.kt)("p",null,"Set the index by using a similar syntax to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"index sp500_pe -i date\n")),(0,r.kt)("p",null,"A confirmation message will print:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Successfully updated 'sp500_pe' index to be 'date'\n")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("p",null,"Format any column as one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"int"),(0,r.kt)("li",{parentName:"ul"},"float"),(0,r.kt)("li",{parentName:"ul"},"str"),(0,r.kt)("li",{parentName:"ul"},"bool"),(0,r.kt)("li",{parentName:"ul"},"cataegory"),(0,r.kt)("li",{parentName:"ul"},"date")),(0,r.kt)("p",null,"To see what a column is defined as already:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"type sp500_pe.pe\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"The type of 'sp500_pe.pe' is 'float64'\n")),(0,r.kt)("p",null,"Change it by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--format")," argument and one of the choices listed above."),(0,r.kt)("p",null,"If this column of numbers was defined as a string, it could be changed with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"type -n sp500_pe.pe --format float\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Update 'sp500_pe.pe' with type 'float'\n")),(0,r.kt)("h3",{id:"ret"},"RET"),(0,r.kt)("p",null,"Add a column to the time series for returns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ret -v sp500_pe.price\n")),(0,r.kt)("h3",{id:"clean"},"Clean"),(0,r.kt)("p",null,"If NaN values exist, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"clean")," command to handle them.  The example below removes rows where they exist.  The new ",(0,r.kt)("inlineCode",{parentName:"p"},"returns")," column will contain a NaN in the first row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"clean sp500_pe -d rdrop\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Successfully cleaned 'sp500_pe' dataset\n")),(0,r.kt)("h3",{id:"plot"},"Plot"),(0,r.kt)("p",null,"Plot columns from a loaded dataset using the ",(0,r.kt)("inlineCode",{parentName:"p"},"plot")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"plot sp500_pe.pe\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/316104d9-17a7-4c96-9516-57a4074fd221",alt:"Screenshot 2023-11-02 at 9 40 47\u202fAM"})),(0,r.kt)("h3",{id:"ols"},"OLS"),(0,r.kt)("p",null,"Fit an OLS regression model to a loaded data set by defining the dependent and independent variables as column names."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ols sp500_pe.pe -i sp500_pe.price,sp500_pe.price_returns\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6ba43577-aa95-4c17-b1d4-77561629972f",alt:"Screenshot 2023-11-02 at 11 15 11\u202fAM"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bgod")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"bpag")," commands require running ",(0,r.kt)("inlineCode",{parentName:"strong"},"OLS")," first.")),(0,r.kt)("h3",{id:"norm"},"Norm"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"norm")," is used to determine whether the data is normally distributed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"norm sp500_pe.price_returns\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"Kurtosis"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Skewness"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Jarque-Bera"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Shapiro-Wilk"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Kolmogorov-Smirnov"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Statistic"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20.5784"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.20623"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20258.4"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.903374"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.454473")))),(0,r.kt)("p",null,"A histogram of the distribution is displayed by adding a, ",(0,r.kt)("inlineCode",{parentName:"p"},"-p"),", flag to the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"norm sp500_pe.price_returns -p\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/4aa0ff4a-b3c5-4a88-acd5-25c754724b9f",alt:"Screenshot 2023-11-02 at 12 25 22\u202fPM"})),(0,r.kt)("h3",{id:"working-with-panel-data"},"Working With Panel Data"),(0,r.kt)("p",null,"Within the examples of ",(0,r.kt)("inlineCode",{parentName:"p"},"load --examples")," there is one panel dataset available named ",(0,r.kt)("inlineCode",{parentName:"p"},"wage_panel"),". This is a dataset from the paper by Vella and M. Verbeek (1998), \u201cWhose Wages Do Unions Raise? A Dynamic Model of Unionism and Wage Rate Determination for Young Men,\u201d Journal of Applied Econometrics 13, 163-183. This is a well-known dataset also used within Chapter 14 of ",(0,r.kt)("a",{href:"https://www.amazon.com/Introductory-Econometrics-Modern-Approach-Economics/dp/1111531048",target:"_blank",rel:"noreferrer noopener"},"Introduction to Econometrics by Jeffrey Wooldridge"),"."),(0,r.kt)("p",null,"In the example below, the dataset is loaded and given an alias by adding the, ",(0,r.kt)("inlineCode",{parentName:"p"},"-a"),", argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/econometrics/load --file wage_panel -a wp\n")),(0,r.kt)("p",null,"To run panel regressions, it is important to define both ",(0,r.kt)("em",{parentName:"p"},"entity")," (e.g. company) and ",(0,r.kt)("em",{parentName:"p"},"time")," (e.g. year). Trying to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"panel")," command would right now result in the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"The column 'lwage' from the dataset 'wp' is not a MultiIndex.\n\nMake sure you set the index correctly with the index (e.g. index wp -i lwage,nr) command where the first level is the entity (e.g. Tesla Inc.) and the second level the date (e.g. 2021-03-31)\n")),(0,r.kt)("p",null,"Within this dataset the ",(0,r.kt)("inlineCode",{parentName:"p"},"nr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"year")," columns define the ",(0,r.kt)("em",{parentName:"p"},"entity")," and ",(0,r.kt)("em",{parentName:"p"},"time"),". To allow panel regression estimations, they will need to be defined using the ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"index wp -i nr,year\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Successfully updated 'wp' index to be 'nr, year'\n")),(0,r.kt)("p",null,"The columns ",(0,r.kt)("inlineCode",{parentName:"p"},"nr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"year")," still exists within the dataset and could have been dropped with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," argument if desired. However, in this case the ",(0,r.kt)("inlineCode",{parentName:"p"},"year")," column is relevant for generating time effects in Pooled OLS, Fixed Effects and Random Effects estimations. To be able to do this, the type of the year column needs to be changed."),(0,r.kt)("p",null,"For the panel regressions, it can be beneficial to see time effects from ",(0,r.kt)("inlineCode",{parentName:"p"},"year"),". Therefore, the type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"year")," column should be altered to ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),". This can be done with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"type wp.year --format category\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Update 'wp.year' with type 'category'\n")),(0,r.kt)("p",null,"The dataset is now properly configured to allow for proper panel regressions.  The type of regression used is a choice of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r pols")," (Pooled OLS)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r re")," (Random Effects)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r bols")," (Between OLS)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r fe")," (Fixed Effects)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r fdols")," (First Difference OLS).")),(0,r.kt)("p",null,"For example, a ",(0,r.kt)("strong",{parentName:"p"},"Random Effects")," regression is performed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year -r re\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/1b576690-53b6-4ca2-9aa7-bc19cb3ac4f1",alt:"Screenshot 2023-11-02 at 1 03 57\u202fPM"})),(0,r.kt)("h3",{id:"scripts--routines"},"Scripts & Routines"),(0,r.kt)("p",null,"Doing research, both as a student or professor for a university or as a professional, often requires the findings to be easily replicated. As many steps could be required, the ability to make small adjustments without needing to re-do every single step again. This is where ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/routines/introduction-to-routines"},"OpenBB Routines")," play an important role."),(0,r.kt)("p",null,"Use the contents below as a demo file, copying and pasting into a file saved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/routines")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"# Go into the econometrics context\neconometrics\n\n# Load the wage_panel dataset and include an alias\nload wage_panel -a wp\n\n# Set the MultiIndex, allowing for Panel regressions to be performed\nindex wp -i nr,year\n\n# Change the type of the year column so it can be included as time effects within the regressions\ntype wp.year --format category\n\n# Perform a Pooled OLS, Random Effects and Fixed Effects estimation\npanel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year\npanel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year -r re\npanel -d wp.lwage -i wp.expersq,wp.union,wp.married,wp.year -r fe\n\n# Compare the results obtained from these regressions\ncompare\n")),(0,r.kt)("p",null,"Run the routine from the Main menu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/exe -f name_of_file.openbb\n")))}u.isMDXComponent=!0}}]);