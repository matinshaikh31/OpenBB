"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97142],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(a),N=r,g=d["".concat(p,".").concat(N)]||d[N]||s[N]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},20994:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>N,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"tcn",description:"This page explains the usage, parameters, and examples of the TCN forecast function used for time series forecasting. The function includes various adjustable parameters for fine-tuning the model's performance and supports the option to save the output data.",keywords:["TCN","forecast","time series forecasting","data modeling","parameters","examples","docusaurus","metadata","marketing website page","code examples","machine learning model"]},o=void 0,p={unversionedId:"terminal/reference/forecast/tcn",id:"terminal/reference/forecast/tcn",title:"tcn",description:"This page explains the usage, parameters, and examples of the TCN forecast function used for time series forecasting. The function includes various adjustable parameters for fine-tuning the model's performance and supports the option to save the output data.",source:"@site/content/terminal/reference/forecast/tcn.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/tcn",permalink:"/terminal/reference/forecast/tcn",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/tcn.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1708675444,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"tcn",description:"This page explains the usage, parameters, and examples of the TCN forecast function used for time series forecasting. The function includes various adjustable parameters for fine-tuning the model's performance and supports the option to save the output data.",keywords:["TCN","forecast","time series forecasting","data modeling","parameters","examples","docusaurus","metadata","marketing website page","code examples","machine learning model"]},sidebar:"tutorialSidebar",previous:{title:"sto",permalink:"/terminal/reference/forecast/sto"},next:{title:"tft",permalink:"/terminal/reference/forecast/tft"}},m={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u},s="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"forecast /tcn - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Perform TCN forecast: ",(0,r.kt)("a",{parentName:"p",href:"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tcn_model.html"},"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tcn_model.html")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"tcn [--num-filters NUM_FILTERS] [--weight-norm WEIGHT_NORM] [--dilation-base DILATION_BASE] [--past-covariates PAST_COVARIATES] [--all-past-covariates] [--naive] [-d {AAPL}] [-c TARGET_COLUMN] [-n N_DAYS] [-t TRAIN_SPLIT] [-i INPUT_CHUNK_LENGTH] [-o OUTPUT_CHUNK_LENGTH] [--force-reset FORCE_RESET] [--save-checkpoints SAVE_CHECKPOINTS] [--model-save-name MODEL_SAVE_NAME] [--n-epochs N_EPOCHS] [--dropout DROPOUT] [--batch-size BATCH_SIZE] [--end S_END_DATE] [--start S_START_DATE] [--learning-rate LEARNING_RATE] [--residuals] [--forecast-only] [--export-pred-raw] [--metric {rmse,mse,mape,smape}]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_filters"),(0,r.kt)("td",{parentName:"tr",align:null},"--num-filters"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of filters in a convolutional layer of the TCN"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weight_norm"),(0,r.kt)("td",{parentName:"tr",align:null},"--weight-norm"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean value indicating whether to use weight normalization."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dilation_base"),(0,r.kt)("td",{parentName:"tr",align:null},"--dilation-base"),(0,r.kt)("td",{parentName:"tr",align:null},"The base of the exponent that will determine the dilation on every level."),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"--past-covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"Past covariates(columns/features) in same dataset. Comma separated."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_past_covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"--all-past-covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds all rows as past covariates except for date and the target column."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"naive"),(0,r.kt)("td",{parentName:"tr",align:null},"--naive"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the naive baseline for a model."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"-d  --dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the dataset you want to select"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"AAPL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_column"),(0,r.kt)("td",{parentName:"tr",align:null},"-c  --target-column"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the specific column you want to use"),(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_days"),(0,r.kt)("td",{parentName:"tr",align:null},"-n  --n-days"),(0,r.kt)("td",{parentName:"tr",align:null},"prediction days."),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"train_split"),(0,r.kt)("td",{parentName:"tr",align:null},"-t  --train-split"),(0,r.kt)("td",{parentName:"tr",align:null},"Start point for rolling training and forecast window. 0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.85"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,r.kt)("td",{parentName:"tr",align:null},"-i  --input-chunk-length"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of past time steps for forecasting module at prediction time."),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,r.kt)("td",{parentName:"tr",align:null},"-o  --output-chunk-length"),(0,r.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model."),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,r.kt)("td",{parentName:"tr",align:null},"--force-reset"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset (all checkpoints will be discarded)."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"--save-checkpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to automatically save the untrained model and checkpoints."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,r.kt)("td",{parentName:"tr",align:null},"--model-save-name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the model to save."),(0,r.kt)("td",{parentName:"tr",align:null},"tcn_model"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,r.kt)("td",{parentName:"tr",align:null},"--n-epochs"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model."),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dropout"),(0,r.kt)("td",{parentName:"tr",align:null},"--dropout"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of neurons affected by Dropout, from 0 to 1."),(0,r.kt)("td",{parentName:"tr",align:null},"0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,r.kt)("td",{parentName:"tr",align:null},"--batch-size"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output) used in each training pass"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"--end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end date (format YYYY-MM-DD) to select for testing"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"--start"),(0,r.kt)("td",{parentName:"tr",align:null},"The start date (format YYYY-MM-DD) to select for testing"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"--learning-rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Learning rate during training."),(0,r.kt)("td",{parentName:"tr",align:null},"0.001"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"residuals"),(0,r.kt)("td",{parentName:"tr",align:null},"--residuals"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the residuals for the model."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forecast_only"),(0,r.kt)("td",{parentName:"tr",align:null},"--forecast-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Do not plot the historical data without forecasts."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export_pred_raw"),(0,r.kt)("td",{parentName:"tr",align:null},"--export-pred-raw"),(0,r.kt)("td",{parentName:"tr",align:null},"Export predictions to a csv file."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metric"),(0,r.kt)("td",{parentName:"tr",align:null},"--metric"),(0,r.kt)("td",{parentName:"tr",align:null},"Calculate precision based on a specific metric (rmse, mse, mape)"),(0,r.kt)("td",{parentName:"tr",align:null},"mape"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"rmse, mse, mape, smape")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Jul 23, 10:36 (\ud83e\udd8b) /forecast/ $ load GME_20220719_123734.csv -a GME\n\n2022 Jul 23, 11:08 (\ud83e\udd8b) /forecast/ $ tcn GME\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 115/115 [00:0100:00, 111.85it/s]\nTCN model obtains MAPE: 19.12%\n\n\n\n       Actual price: $ 146.64\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Datetime            \u2503 Prediction \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-07-19 00:00:00 \u2502 $ 135.73   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-20 00:00:00 \u2502 $ 142.42   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-21 00:00:00 \u2502 $ 140.68   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-22 00:00:00 \u2502 $ 152.98   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-25 00:00:00 \u2502 $ 154.55   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72827203/180615408-ac6f9289-c3e9-486f-b262-701ef1906373.png",alt:"tcn"})),(0,r.kt)("hr",null))}N.isMDXComponent=!0}}]);