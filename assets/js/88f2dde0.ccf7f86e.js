"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},30653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const o={title:"dwat",description:"The 'dwat' documentation page provides comprehensive information about Durbin-Watson autocorrelation test, its usage with Ordinary Least Squares (OLS) regression, and potential issues and solutions with multi-collinearity and numerical problems. The page features examples with a Python command, its parameters, and regression results to provide a practical understanding of the concepts.",keywords:["dwat","autocorrelation tests","Durbin-Watson","OLS","independent variables","dependent variables","regression results","plot","residuals","multicollinearity","numerical problems","analytics","statistics","econometrics","statistical analysis"]},s=void 0,l={unversionedId:"terminal/reference/econometrics/dwat",id:"terminal/reference/econometrics/dwat",title:"dwat",description:"The 'dwat' documentation page provides comprehensive information about Durbin-Watson autocorrelation test, its usage with Ordinary Least Squares (OLS) regression, and potential issues and solutions with multi-collinearity and numerical problems. The page features examples with a Python command, its parameters, and regression results to provide a practical understanding of the concepts.",source:"@site/content/terminal/reference/econometrics/dwat.md",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/dwat",permalink:"/terminal/reference/econometrics/dwat",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/econometrics/dwat.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"dwat",description:"The 'dwat' documentation page provides comprehensive information about Durbin-Watson autocorrelation test, its usage with Ordinary Least Squares (OLS) regression, and potential issues and solutions with multi-collinearity and numerical problems. The page features examples with a Python command, its parameters, and regression results to provide a practical understanding of the concepts.",keywords:["dwat","autocorrelation tests","Durbin-Watson","OLS","independent variables","dependent variables","regression results","plot","residuals","multicollinearity","numerical problems","analytics","statistics","econometrics","statistical analysis"]},sidebar:"tutorialSidebar",previous:{title:"desc",permalink:"/terminal/reference/econometrics/desc"},next:{title:"eval",permalink:"/terminal/reference/econometrics/eval"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"econometrics /dwat - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Show autocorrelation tests from Durbin-Watson. Needs OLS to be run in advance with independent and dependent variables"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"dwat [-p]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plot"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --plot"),(0,a.kt)("td",{parentName:"tr",align:null},"Plot the residuals"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 24, 05:59 (\ud83e\udd8b) /econometrics/ $ ols -d adj_close-msft -i adj_close-aapl -i adj_close-googl -i adj_close-tsla\n                            OLS Regression Results\n==============================================================================\nDep. Variable:         adj_close_msft   R-squared:                       0.977\nModel:                            OLS   Adj. R-squared:                  0.977\nMethod:                 Least Squares   F-statistic:                 1.068e+04\nDate:                Thu, 24 Feb 2022   Prob (F-statistic):               0.00\nTime:                        12:00:01   Log-Likelihood:                -2830.6\nNo. Observations:                 759   AIC:                             5669.\nDf Residuals:                     755   BIC:                             5688.\nDf Model:                           3\nCovariance Type:            nonrobust\n===================================================================================\n                      coef    std err          t      P|t|      [0.025      0.975]\n-----------------------------------------------------------------------------------\nIntercept          27.7984      2.166     12.832      0.000      23.546      32.051\nadj_close_aapl      0.8662      0.034     25.503      0.000       0.800       0.933\nadj_close_googl     0.0508      0.002     30.374      0.000       0.048       0.054\nadj_close_tsla     -0.0007      0.004     -0.181      0.856      -0.009       0.007\n==============================================================================\nOmnibus:                       41.445   Durbin-Watson:                   0.044\nProb(Omnibus):                  0.000   Jarque-Bera (JB):               47.398\nSkew:                           0.612   Prob(JB):                     5.10e-11\nKurtosis:                       2.995   Cond. No.                     1.16e+04\n==============================================================================\n\nNotes:\n[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n[2] The condition number is large, 1.16e+04. This might indicate that there are\nstrong multicollinearity or other numerical problems.\n\n2022 Feb 24, 06:00 (\ud83e\udd8b) /statistics/ $ dwat -p\nThe result 0.04 is outside the range 1.5 and 2.5 and therefore autocorrelation can be problematic.\nPlease consider lags of the dependent or independent variable.\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/155514788-caaa65a2-1f5f-41d0-8db2-06e682d5a53e.png",alt:"durbin_watson example"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);