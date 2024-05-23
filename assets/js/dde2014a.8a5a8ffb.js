"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33094],{58505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=r(74848),n=r(28453),i=r(94331),d=r(18228),l=r(19365);const a={title:"nhits",description:"This is a Docusaurus page that displays in-depth information on forecasting using the OpenBB's NhitsModel. It provides details on parameters, returns and also provides source code links to the OpenBB finance's Github repository.",keywords:["Docusaurus","nhits","forecasting","NhitsModel","nhits_chart","pd.Series","title","description","keywords","metadata","marketing","analysis","TimeSeries","NHiTSModel"]},o=void 0,c={id:"sdk/reference/forecast/nhits",title:"nhits",description:"This is a Docusaurus page that displays in-depth information on forecasting using the OpenBB's NhitsModel. It provides details on parameters, returns and also provides source code links to the OpenBB finance's Github repository.",source:"@site/content/sdk/reference/forecast/nhits.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/nhits",permalink:"/sdk/reference/forecast/nhits",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forecast/nhits.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1716458171e3,frontMatter:{title:"nhits",description:"This is a Docusaurus page that displays in-depth information on forecasting using the OpenBB's NhitsModel. It provides details on parameters, returns and also provides source code links to the OpenBB finance's Github repository.",keywords:["Docusaurus","nhits","forecasting","NhitsModel","nhits_chart","pd.Series","title","description","keywords","metadata","marketing","analysis","TimeSeries","NHiTSModel"]},sidebar:"tutorialSidebar",previous:{title:"nbeats",permalink:"/sdk/reference/forecast/nbeats"},next:{title:"plot",permalink:"/sdk/reference/forecast/plot"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"forecast.nhits - Reference | OpenBB SDK Docs"}),"\n","\n",(0,s.jsxs)(d.A,{children:[(0,s.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,s.jsx)(t.p,{children:"Performs Nhits forecasting"}),(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/nhits_model.py#L22",children:"link"}),"]"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.forecast.nhits(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", n_predict: int = 5, train_split: float = 0.85, past_covariates: str = None, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, num_stacks: int = 3, num_blocks: int = 1, num_layers: int = 2, layer_widths: int = 512, pooling_kernel_sizes: Optional[Tuple[Tuple[int]]] = None, n_freq_downsample: Optional[Tuple[Tuple[int]]] = None, dropout: float = 0.1, activation: str = "ReLU", max_pool_1d: bool = True, batch_size: int = 32, n_epochs: int = 100, learning_rate: float = 0.001, model_save_name: str = "brnn_model", force_reset: bool = True, save_checkpoints: bool = True)\n'})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"Union[pd.Series, pd.DataFrame]"}),(0,s.jsx)(t.td,{children:"Input Data"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"target_column"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_predict"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Days to predict. Defaults to 5."}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"train_split"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Train/val split. Defaults to 0.85."}),(0,s.jsx)(t.td,{children:"0.85"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"past_covariates"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Multiple secondary columns to factor in when forecasting. Defaults to None."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"forecast_horizon"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Forecast horizon when performing historical forecasting. Defaults to 5."}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"input_chunk_length"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."}),(0,s.jsx)(t.td,{children:"14"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"output_chunk_length"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The length of the forecast of the model. Defaults to 5."}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_stacks"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of stacks that make up the whole model."}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_blocks"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of blocks making up every stack."}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_layers"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsxs)(t.td,{children:["The number of fully connected layers preceding the final forking layers in each block",(0,s.jsx)("br",{}),"of every stack."]}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"layer_widths"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsxs)(t.td,{children:["Determines the number of neurons that make up each fully connected layer in each",(0,s.jsx)("br",{}),"block of every stack. If a list is passed, it must have a length equal to num_stacks",(0,s.jsx)("br",{}),"and every entry in that list corresponds to the layer width of the corresponding stack.",(0,s.jsx)("br",{}),"If an integer is passed, every stack will have blocks with FC layers of the same width."]}),(0,s.jsx)(t.td,{children:"512"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pooling_kernel_size"}),(0,s.jsx)(t.td,{children:"Optional[Tuple[Tuple[int]]]:"}),(0,s.jsxs)(t.td,{children:["If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,s.jsx)("br",{}),"specifying the kernel size for each block in each stack used for the input pooling",(0,s.jsx)("br",{}),"layer. If left to None, some default values will be used based on input_chunk_length."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_freq_downsample"}),(0,s.jsx)(t.td,{children:"Optional[Tuple[Tuple[int]]]"}),(0,s.jsxs)(t.td,{children:["If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,s.jsx)("br",{}),"specifying the downsampling factors before interpolation, for each block in each stack.",(0,s.jsx)("br",{}),"If left to None, some default values will be used based on output_chunk_length."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dropout"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The dropout probability to be used in fully connected layers."}),(0,s.jsx)(t.td,{children:"0.1"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"activation"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Supported activations: [\u2018ReLU\u2019,\u2019RReLU\u2019, \u2018PReLU\u2019, \u2018Softplus\u2019, \u2018Tanh\u2019, \u2018SELU\u2019, \u2018LeakyReLU\u2019, \u2018Sigmoid\u2019]"}),(0,s.jsx)(t.td,{children:"ReLU"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_pool_1d"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Use max_pool_1d pooling. False uses AvgPool1d."}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"batch_size"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of time series (input and output sequences) used in each training pass. Defaults to 32."}),(0,s.jsx)(t.td,{children:"32"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_epochs"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of epochs over which to train the model. Defaults to 100."}),(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"learning_rate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Defaults to 1e-3."}),(0,s.jsx)(t.td,{children:"0.001"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"model_save_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:'Name for model. Defaults to "brnn_model".'}),(0,s.jsx)(t.td,{children:"brnn_model"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"force_reset"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsxs)(t.td,{children:["If set to True, any previously-existing model with the same name will be reset (all checkpoints will be",(0,s.jsx)("br",{}),"discarded). Defaults to True."]}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"save_checkpoints"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether or not to automatically save the untrained model and checkpoints from training. Defaults to True."}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], Optional[float], type[NHiTSModel]]"}),(0,s.jsxs)(t.td,{children:["Adjusted Data series,",(0,s.jsx)("br",{}),"Historical forecast by best RNN model,",(0,s.jsx)("br",{}),"list of Predictions,",(0,s.jsx)("br",{}),"Mean average precision error,",(0,s.jsx)("br",{}),"Best BRNN Model."]})]})})]}),(0,s.jsx)(t.hr,{})]}),(0,s.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,s.jsx)(t.p,{children:"Display Nhits forecast"}),(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/nhits_view.py#L20",children:"link"}),"]"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.forecast.nhits_chart(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", dataset_name: str = "", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, num_stacks: int = 3, num_blocks: int = 1, num_layers: int = 2, layer_widths: int = 512, pooling_kernel_sizes: Optional[Tuple[Tuple[int]]] = None, n_freq_downsample: Optional[Tuple[Tuple[int]]] = None, dropout: float = 0.1, activation: str = "ReLU", max_pool_1d: bool = True, batch_size: int = 32, n_epochs: int = 100, learning_rate: float = 0.001, model_save_name: str = "rnn_model", force_reset: bool = True, save_checkpoints: bool = True, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None)\n'})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"Union[pd.Series, pd.DataFrame]"}),(0,s.jsx)(t.td,{children:"Input Data"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"target_column"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dataset_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The name of the ticker to be predicted"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_predict"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Days to predict. Defaults to 5."}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"train_split"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Train/val split. Defaults to 0.85."}),(0,s.jsx)(t.td,{children:"0.85"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"past_covariates"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Multiple secondary columns to factor in when forecasting. Defaults to None."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"forecast_horizon"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Forecast horizon when performing historical forecasting. Defaults to 5."}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"input_chunk_length"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."}),(0,s.jsx)(t.td,{children:"14"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"output_chunk_length"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The length of the forecast of the model. Defaults to 5."}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_stacks"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of stacks that make up the whole model."}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_blocks"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of blocks making up every stack."}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_layers"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsxs)(t.td,{children:["The number of fully connected layers preceding the final forking layers in each block",(0,s.jsx)("br",{}),"of every stack."]}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"layer_widths"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsxs)(t.td,{children:["Determines the number of neurons that make up each fully connected layer in each",(0,s.jsx)("br",{}),"block of every stack. If a list is passed, it must have a length equal to num_stacks",(0,s.jsx)("br",{}),"and every entry in that list corresponds to the layer width of the corresponding stack.",(0,s.jsx)("br",{}),"If an integer is passed, every stack will have blocks with FC layers of the same width."]}),(0,s.jsx)(t.td,{children:"512"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pooling_kernel_size"}),(0,s.jsx)(t.td,{children:"Optional[Tuple[Tuple[int]]]"}),(0,s.jsxs)(t.td,{children:["If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,s.jsx)("br",{}),"specifying the kernel size for each block in each stack used for the input pooling",(0,s.jsx)("br",{}),"layer. If left to None, some default values will be used based on input_chunk_length."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_freq_downsample"}),(0,s.jsx)(t.td,{children:"Optional[Tuple[Tuple[int]]]"}),(0,s.jsxs)(t.td,{children:["If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,s.jsx)("br",{}),"specifying the downsampling factors before interpolation, for each block in each stack.",(0,s.jsx)("br",{}),"If left to None, some default values will be used based on output_chunk_length."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dropout"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The dropout probability to be used in fully connected layers."}),(0,s.jsx)(t.td,{children:"0.1"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"activation"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Supported activations: [[\u2018ReLU\u2019,\u2019RReLU\u2019, \u2018PReLU\u2019, \u2018Softplus\u2019, \u2018Tanh\u2019, \u2018SELU\u2019, \u2018LeakyReLU\u2019, \u2018Sigmoid\u2019]"}),(0,s.jsx)(t.td,{children:"ReLU"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_pool_1d"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Use max_pool_1d pooling. False uses AvgPool1d."}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"batch_size"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of time series (input and output sequences) used in each training pass. Defaults to 32."}),(0,s.jsx)(t.td,{children:"32"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_epochs"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of epochs over which to train the model. Defaults to 100."}),(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"learning_rate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Defaults to 1e-3."}),(0,s.jsx)(t.td,{children:"0.001"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"model_save_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:'Name for model. Defaults to "brnn_model".'}),(0,s.jsx)(t.td,{children:"rnn_model"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"force_reset"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsxs)(t.td,{children:["If set to True, any previously-existing model with the same name will be reset",(0,s.jsx)("br",{}),"(all checkpoints will be discarded). Defaults to True."]}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"save_checkpoints"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsxs)(t.td,{children:["Whether or not to automatically save the untrained model and checkpoints from training.",(0,s.jsx)("br",{}),"Defaults to True."]}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"export"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Format to export data"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"residuals"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether to show residuals for the model. Defaults to False."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"forecast_only"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether to only show dates in the forecasting range. Defaults to False."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start_date"}),(0,s.jsx)(t.td,{children:"Optional[datetime]"}),(0,s.jsx)(t.td,{children:"The starting date to perform analysis, data before this is trimmed. Defaults to None."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"end_date"}),(0,s.jsx)(t.td,{children:"Optional[datetime]"}),(0,s.jsx)(t.td,{children:"The ending date to perform analysis, data after this is trimmed. Defaults to None."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"naive"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsxs)(t.td,{children:["Whether to show the naive baseline. This just assumes the closing price will be the same",(0,s.jsx)("br",{}),"as the previous day's closing price. Defaults to False."]}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"external_axes"}),(0,s.jsx)(t.td,{children:"Optional[List[plt.axes]]"}),(0,s.jsx)(t.td,{children:"External axes to plot on"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,s.jsx)(t.p,{children:"This function does not return anything"}),(0,s.jsx)(t.hr,{})]})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(96540),n=r(34164),i=r(23104),d=r(56347),l=r(205),a=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const n=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=u(e),[d,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[o,h]=j({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),m=(()=>{const e=o??p;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:d,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function _(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),n=a[r].value;n!==s&&(c(t),l(n))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...i,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,i?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function T(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,b.jsx)(_,{...e,...t}),(0,b.jsx)(T,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);