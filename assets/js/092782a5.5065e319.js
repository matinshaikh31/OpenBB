"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(35742);function i(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},41588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const o={title:"Integrating Data Sources and Points",sidebar_position:3,description:"This comprehensive guide is designed to assist developers in integrating custom data sources and adding new data points to the OpenBB Platform. It covers the creation of custom extensions, standardization of data, definition of models, and the construction of a Fetcher class. This document is essential for developers looking to enhance the platform with new data capabilities.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","OpenBB custom data sources","Data standardization","Pydantic models","OpenBB extensions"]},l=void 0,d={unversionedId:"platform/development/developer-guidelines/add_data_point",id:"platform/development/developer-guidelines/add_data_point",title:"Integrating Data Sources and Points",description:"This comprehensive guide is designed to assist developers in integrating custom data sources and adding new data points to the OpenBB Platform. It covers the creation of custom extensions, standardization of data, definition of models, and the construction of a Fetcher class. This document is essential for developers looking to enhance the platform with new data capabilities.",source:"@site/content/platform/development/developer-guidelines/add_data_point.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/add_data_point",permalink:"/platform/development/developer-guidelines/add_data_point",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/add_data_point.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704905987,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:3,frontMatter:{title:"Integrating Data Sources and Points",sidebar_position:3,description:"This comprehensive guide is designed to assist developers in integrating custom data sources and adding new data points to the OpenBB Platform. It covers the creation of custom extensions, standardization of data, definition of models, and the construction of a Fetcher class. This document is essential for developers looking to enhance the platform with new data capabilities.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","OpenBB custom data sources","Data standardization","Pydantic models","OpenBB extensions"]},sidebar:"tutorialSidebar",previous:{title:"DevTools",permalink:"/platform/development/developer-guidelines/devtools"},next:{title:"Building Extensions for OpenBB Platform",permalink:"/platform/development/developer-guidelines/build_openbb_extensions"}},s={},p=[{value:"Identify your data",id:"identify-your-data",level:2},{value:"Check if the standard model exists",id:"check-if-the-standard-model-exists",level:2},{value:"Create Query Parameters model",id:"create-query-parameters-model",level:3},{value:"Create Data Output model",id:"create-data-output-model",level:3},{value:"Optional vs Required fields when creating models",id:"optional-vs-required-fields-when-creating-models",level:3},{value:"Build the Fetcher",id:"build-the-fetcher",level:3},{value:"Make the provider visible",id:"make-the-provider-visible",level:2},{value:"OpenBB Platform Commands",id:"openbb-platform-commands",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Integrating Data Sources and Points - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"In this section, we'll be adding a new data point to the OpenBB Platform. We will add a new provider with an existing model, imported from: ",(0,r.kt)("a",{parentName:"p",href:"/platform/data_models"},"openbb_core.provider.standard_models"),"."),(0,r.kt)("h2",{id:"identify-your-data"},"Identify your data"),(0,r.kt)("p",null,"You will get your data either from a CSV file, local database or from an API endpoint."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you don't want or don't need to partake in the data standardization framework, you have the option to add all the logic straight inside the router file. This is usually the case when you are returning custom data from your local CSV file, or similar. Keep in mind that we also serve the REST API and that you shouldn't send non-serializable objects as a response (e.g. a pandas dataframe).")),(0,r.kt)("p",null,"We highly recommend following the standardization framework, as it will make your life easier in the long run and unlock a set of features that are only available to standardized data."),(0,r.kt)("p",null,"When standardizing, all data is defined using two different pydantic models:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/provider/openbb_core/provider/abstract/query_params.py"},"query parameters")," model."),(0,r.kt)("li",{parentName:"ol"},"Define the resulting ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/provider/openbb_core/provider/abstract/data.py"},"data schema")," model.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The models can be entirely custom, or inherit from the OpenBB standardized models.\nThey enforce a safe and consistent data structure, validation and type checking.")),(0,r.kt)("p",null,"We call this the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Know-Your-Data"))," principle."),(0,r.kt)("p",null,"In the following example, we'll be adding historical, end-of-day OHLC (open, high, low, close) equity data that is used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.equity.price.historical")," command."),(0,r.kt)("p",null,"Note that if no command exists for your data, we need to add one under the right router."),(0,r.kt)("p",null,"Each router is categorized under the relevant extension (equity, currency, crypto, etc.)."),(0,r.kt)("h2",{id:"check-if-the-standard-model-exists"},"Check if the standard model exists"),(0,r.kt)("p",null,"Given the fact that there's already an endpoint for historical equity data, we can check for the existing standard model."),(0,r.kt)("p",null,"In this case, it's ",(0,r.kt)("inlineCode",{parentName:"p"},"EquityHistorical")," which can be found in the list of data models ",(0,r.kt)("a",{parentName:"p",href:"/platform/data_models"},"here"),"."),(0,r.kt)("p",null,"If the standard model doesn't exist:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you won't need to inherit from it in the next steps."),(0,r.kt)("li",{parentName:"ul"},"all your provider query parameters will be under the ",(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," in the python interface."),(0,r.kt)("li",{parentName:"ul"},"it might not work out-of-the box with other extensions that follow standardization e.g. the ",(0,r.kt)("inlineCode",{parentName:"li"},"charting")," extension")),(0,r.kt)("h3",{id:"create-query-parameters-model"},"Create Query Parameters model"),(0,r.kt)("p",null,"Query Parameters are the parameters that are passed to the API endpoint in order to make the request."),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"EquityHistorical")," example, this would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nclass <ProviderName>EquityHistoricalQueryParams(EquityHistoricalQueryParams):\n    """<ProviderName> Equity Historical Query.\n\n    Source: https://www.<provider_name>.co/documentation/\n    """\n\n    # provider specific query parameters if any\n\n')),(0,r.kt)("h3",{id:"create-data-output-model"},"Create Data Output model"),(0,r.kt)("p",null,"The data output model is a data class containing Fields mapping the response of the API."),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"StockHistorical")," example, this would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nclass <ProviderName>EquityHistoricalData(EquityHistoricalData):\n    """<ProviderName> Equity Historical Data.\n\n    Source: https://www.<provider_name>.co/documentation/\n    """\n\n    # provider specific data output fields if any\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that, since ",(0,r.kt)("inlineCode",{parentName:"p"},"EquityHistoricalData")," inherits from pydantic's ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseModel"),", we can leverage validators to perform additional checks on the output model. A very good example of this, would be to transform a string date into a datetime object.")),(0,r.kt)("h3",{id:"optional-vs-required-fields-when-creating-models"},"Optional vs Required fields when creating models"),(0,r.kt)("p",null,"When creating a new model, you need to decide whether a field is required or not."),(0,r.kt)("p",null,"This is done by using ",(0,r.kt)("inlineCode",{parentName:"p"},"typing"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," when defining the field type."),(0,r.kt)("p",null,"In the context of the ",(0,r.kt)("strong",{parentName:"p"},"Standard Models"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Required: all the providers use that field (either to query or to present data)."),(0,r.kt)("li",{parentName:"ul"},"Optional: at least two providers use that field (either to query or to present data).")),(0,r.kt)("p",null,"In the context of the ",(0,r.kt)("strong",{parentName:"p"},"Provider Models"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Required: the provider uses that field:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Needs the field to query the API."),(0,r.kt)("li",{parentName:"ul"},"The data presented by the provider contains that field."))),(0,r.kt)("li",{parentName:"ul"},"Optional: the may or may not use that field:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the user uses that field, the provider will also use it to query the API."),(0,r.kt)("li",{parentName:"ul"},"The data presented by the provider may or may not contain that field.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more about Pydantic's fields ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/latest/concepts/fields/"},"here"),".")),(0,r.kt)("h3",{id:"build-the-fetcher"},"Build the Fetcher"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," class is responsible for processing the Query and turning that into an API request and finally returning the data model. Each fetcher contains three methods that are implemented by its abstract definition:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transform_query"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Convert a standard query into a provider-specific query"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extract_data"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Get the data from the API endpoint"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transform_data"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Convert the API response data into a list of standard data models.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more on the ",(0,r.kt)("inlineCode",{parentName:"p"},"TET")," pattern ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/developer-guidelines/architectural_considerations#the-tet-pattern"},"here"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," should inherit from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/provider/openbb_core/provider/abstract/fetcher.py"},(0,r.kt)("inlineCode",{parentName:"a"},"Fetcher"))," class, which is a generic class that receives the query parameters and the data model as type parameters.")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"EquityHistorical")," example, this would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class <ProviderName>EquityHistoricalFetcher(\n    Fetcher[\n        <ProviderName>EquityHistoricalQueryParams,\n        List[<ProviderName>EquityHistoricalData],\n    ]\n):\n    """Transform the query, extract and transform the data."""\n\n    @staticmethod\n    def transform_query(params: Dict[str, Any]) -> <ProviderName>EquityHistoricalQueryParams:\n        """Transform the query parameters."""\n\n        return <ProviderName>EquityHistoricalQueryParams(**transformed_params)\n\n    @staticmethod\n    def extract_data(\n        query: <ProviderName>EquityHistoricalQueryParams,\n        credentials: Optional[Dict[str, str]],\n        **kwargs: Any,\n    ) -> dict:\n        """Return the raw data from the endpoint."""\n\n        obtained_data = my_request(query, credentials, **kwargs)\n\n        return obtained_data\n\n    @staticmethod\n    def transform_data(\n        data: dict,\n    ) -> List[<ProviderName>EquityHistoricalData]:\n        """Transform the data to the standard format."""\n\n        return [<ProviderName>EquityHistoricalData.model_validate(d) for d in data]\n')),(0,r.kt)("h2",{id:"make-the-provider-visible"},"Make the provider visible"),(0,r.kt)("p",null,"After finalizing your models, you need to make them visible to the Openbb Platform.\nThis is done by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__.py")," file of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<your_package_name>/<your_module_name>")," folder as part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/provider/openbb_core/provider/abstract/provider.py"},(0,r.kt)("inlineCode",{parentName:"a"},"Provider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""<Provider Name> Provider module."""\nfrom openbb_core.provider.abstract.provider import Provider\n\nfrom openbb_<provider_name>.models.equity_historical import <ProviderName>EquityHistoricalFetcher\n\n<provider_name>_provider = Provider(\n    name="<provider_name>",\n    website="<URL to the provider website>",\n    description="Provider description goes here",\n    credentials=["api_key"],\n    fetcher_dict={\n        "EquityHistorical": <ProviderName>EquityHistoricalFetcher,\n    },\n)\n')),(0,r.kt)("p",null,"Any command, that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," class you've just defined, will be calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform_query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"extract_data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transform_data")," methods under the hood in order to get the data and output it do the end user."),(0,r.kt)("p",null,"If the provider does not require any credentials, you can remove that parameter. On the other hand, if it requires more than 2 items to authenticate, you can add a list of all the required items to the ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials")," list."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After running ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install .")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb_platform/providers/<provider_name>")," your provider should be ready for usage, both from the Python interface and the API.")),(0,r.kt)("p",null,"If you're not sure what's a command and why is it even using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," class, follow along!"),(0,r.kt)("h2",{id:"openbb-platform-commands"},"OpenBB Platform Commands"),(0,r.kt)("p",null,"The OpenBB Platform will enable you to query and output your data in a very simple way."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Any Platform endpoint will be available both from a Python interface and the API.")),(0,r.kt)("p",null,"The command definition on the Platform follows ",(0,r.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},"FastAPI")," conventions, meaning that you'll be creating ",(0,r.kt)("strong",{parentName:"p"},"endpoints"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/openbb-cookiecutter"},"Cookiecutter template")," generates for you a ",(0,r.kt)("inlineCode",{parentName:"p"},"router.py")," file with a set of examples that you can follow, namely:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Perform a simple ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," request - without worrying on any custom data definition."),(0,r.kt)("li",{parentName:"ul"},"Using a custom data definition so you get your data the exact way you want it.")),(0,r.kt)("p",null,"You can expect the following endpoint structure when using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," to serve the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@router.command(model="Example")\ndef model_example(\n    cc: CommandContext,\n    provider_choices: ProviderChoices,\n    standard_params: StandardParams,\n    extra_params: ExtraParams,\n) -> OBBject[BaseModel]:\n    """Example Data."""\n    return OBBject(results=Query(**locals()).execute())\n')),(0,r.kt)("p",null,"Let's break it down:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@router.command(...)")," - this tells the OpenBB Platform that this is a command."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'model="Example"')," - this is the name of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Fetcher")," dictionary key that you've defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__.py")," file of the ",(0,r.kt)("inlineCode",{parentName:"li"},"<your_package_name>/<your_module_name>")," folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cc: CommandContext")," - this contains a set of user and system settings that is useful during the execution of the command - eg. api keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider_choices: ProviderChoices")," - all the providers that implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"Example")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Fetcher"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"standard_params: StandardParams")," - standardized parameters that are common to all providers that implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"Example")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Fetcher"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extra_params: ExtraParams")," - it contains the provider specific arguments that are not standardized.")),(0,r.kt)("p",null,"You only need to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," parameter to the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," dictionary key and everything else will be handled by the OpenBB Platform."))}c.isMDXComponent=!0}}]);