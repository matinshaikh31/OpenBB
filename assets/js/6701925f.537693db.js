"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23235],{65658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453),o=t(94331);const r={title:"Installation",sidebar_position:1,description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",keywords:["OpenBB Platform","Python","System requirements","Supported environments","Installation","Docker","Python virtual environment","Installation from source","Windows 10","Mac OS Big Sur","Linux","Package installation","VS Code","PyCharm","Jupyter","GitHub","Conda","venv","API","Repository","pip","Poetry","Toml","PyPI","Node.js","npm"]},l=void 0,a={id:"platform/installation",title:"Installation",description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",source:"@site/content/platform/installation.md",sourceDirName:"platform",slug:"/platform/installation",permalink:"/platform/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/installation.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:171579722e4,sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",keywords:["OpenBB Platform","Python","System requirements","Supported environments","Installation","Docker","Python virtual environment","Installation from source","Windows 10","Mac OS Big Sur","Linux","Package installation","VS Code","PyCharm","Jupyter","GitHub","Conda","venv","API","Repository","pip","Poetry","Toml","PyPI","Node.js","npm"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/platform/"},next:{title:"OpenBB Platform Extensions",permalink:"/platform/extensions/"}},d={},c=[{value:"General System Requirements",id:"general-system-requirements",level:2},{value:"Supported Environments",id:"supported-environments",level:2},{value:"Installation",id:"installation",level:2},{value:"PyPI",id:"pypi",level:3},{value:"Docker",id:"docker",level:3},{value:"Source",id:"source",level:3},{value:"Post-Installation",id:"post-installation",level:2},{value:"Hub Synchronization",id:"hub-synchronization",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Generate Markdown Files",id:"generate-markdown-files",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Start Development Server",id:"start-development-server",level:4},{value:"Build",id:"build",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{title:"Installation | OpenBB Platform Docs"}),"\n",(0,s.jsx)(n.h2,{id:"general-system-requirements",children:"General System Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Most systems capable of running Python 3.8-3.11 will be compatible with the OpenBB Platform. A modern processor (five years or less), running an up-to-date operating system, with at least 4GB of RAM, is recommended. Maintaining the system with current patches ensures maximum compatibility. At a minimum, Windows and macOS should be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Windows 10"}),"\n",(0,s.jsx)(n.li,{children:"Mac OS Big Sur"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Linux users should run the command line update for the package manager, prior to installation."}),"\n",(0,s.jsx)(n.h2,{id:"supported-environments",children:"Supported Environments"}),"\n",(0,s.jsxs)(n.p,{children:["The OpenBB Platform is installed within a Python virtual environment. It is compatible with versions of Python between 3.8 and 3.11, inclusively. The method for creating the environment will be a matter of user preference, from the command line - ",(0,s.jsx)(n.a,{href:"https://docs.conda.io/projects/miniconda/en/latest/miniconda-install.html",children:"Conda"}),", ",(0,s.jsx)(n.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"}),", etc. - or in a code editor and IDE - ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/docs/languages/python",children:"VS Code"}),", ",(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/pycharm/",children:"PyCharm"}),", ",(0,s.jsx)(n.a,{href:"https://jupyter.org/",children:"Jupyter"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're interested in using the ",(0,s.jsx)(n.a,{href:"/platform/installation#docker",children:"Docker"})," container, skip ahead to the specific section ",(0,s.jsx)(n.a,{href:"/platform/installation#docker",children:"below"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For those new to Python, ",(0,s.jsx)(n.a,{href:"https://www.infoworld.com/article/3306656/python-virtualenv-and-venv-dos-and-donts.html",children:"this article"})," shares some tips on getting started and why environments are important."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/docs/python/environments",children:"this guide"})," for creating a Python environment in VS Code."]}),"\n",(0,s.jsx)(n.p,{children:"With the environment created, and activated, begin the installation process."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Before installation, update the package manager so that ",(0,s.jsx)(n.code,{children:"pip"})," is current, then create the environment with the desired version of Python."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Installing packages directly to the system Python or ",(0,s.jsx)(n.code,{children:"base"})," environment is not recommended.  Create a new environment first (can be any name, using openbb here for example)."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"conda create -n openbb python=3.11\nconda activate openbb\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"pypi",children:"PyPI"}),"\n",(0,s.jsx)(n.p,{children:"Install from PyPI with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will install the core OpenBB Platform, along with officially supported extensions and providers."}),"\n",(0,s.jsx)(n.p,{children:"To install all extensions and providers (both officially supported and community maintained ones):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb[all]\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["In a macOS ",(0,s.jsx)(n.code,{children:"zsh"})," Terminal shell, add quotation marks around the library name."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'"openbb[all]"'})})]}),"\n",(0,s.jsx)(n.p,{children:"To install a single extension:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb[charting]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb[ta]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or install a single provider:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb[yfinance]\n"})}),"\n",(0,s.jsx)(n.p,{children:"To install the Nightly distribution (this installs all extras by default):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb-nightly\n"})}),"\n",(0,s.jsx)(n.p,{children:"From your python interpreter, import the OpenBB Platform:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"from openbb import obb\n"})}),"\n",(0,s.jsx)(n.p,{children:"When the package is imported, any installed extensions will be discovered, imported and available for use."}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Currently if you wish to have the bare-bones openbb package with no extensions or providers, you can install with:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb-core && pip install openbb --no-deps\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,s.jsxs)(n.p,{children:["OpenBB provides a ",(0,s.jsx)(n.code,{children:".dockerfile"})," on ",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal",children:"GitHub"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Run the following command from the repo root to build the image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -f build/docker/api.dockerfile -t openbb-platform:latest .\n"})}),"\n",(0,s.jsx)(n.p,{children:"To run it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --rm -p 8000:8000 -v ~/.openbb_platform:/root/.openbb_platform openbb-platform:latest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will mount the local ",(0,s.jsx)(n.code,{children:"~/.openbb_platform"})," directory into the Docker container to use with the API keys and preferences from there, and it will expose the API on port ",(0,s.jsx)(n.code,{children:"8000"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,s.jsxs)(n.p,{children:["To build the OpenBB Platform from the source code, first install ",(0,s.jsx)(n.code,{children:"git"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install git\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, clone the repository from GitHub:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"git clone git@github.com:OpenBB-finance/OpenBBTerminal.git\n"})}),"\n",(0,s.jsx)(n.p,{children:"When it is done, checkout the branch where the code is living:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"git checkout develop\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, ",(0,s.jsx)(n.code,{children:"cd"})," into the directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"cd openbb_platform\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install required packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install poetry toml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, run the developer installation script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"python dev_install.py\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To install all extensions and providers, run: ",(0,s.jsx)(n.code,{children:"python dev_install.py -e"})]})}),"\n",(0,s.jsx)(n.h2,{id:"post-installation",children:"Post-Installation"}),"\n",(0,s.jsxs)(n.p,{children:["With a fresh installation, and upon installing or uninstalling extensions, the Python interface needs to be built.  This is done automatically, but can be manually triggered if required. Start a Python session and then ",(0,s.jsx)(n.code,{children:"import openbb"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"python\n\nfrom openbb import obb\n\nexit()\n"})}),"\n",(0,s.jsx)(n.p,{children:"To manually trigger the build:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import openbb\nopenbb.build()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Restart the Python interpreter and then begin using the OpenBB Platform."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb import obb\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start the REST API with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See more information about using the REST API in the ",(0,s.jsx)(n.a,{href:"/platform/usage/rest_api",children:"usage section"})]}),"\n",(0,s.jsx)(n.h2,{id:"hub-synchronization",children:"Hub Synchronization"}),"\n",(0,s.jsxs)(n.p,{children:["Once you have installed the OpenBB Platform with the desired providers and extensions, you can synchronize with the ",(0,s.jsx)(n.a,{href:"my.openbb.co",children:"OpenBB Hub"}),". The main benefit of this is that you can use your single login to access your saved credentials and preferences from any instance. To login, you can use the ",(0,s.jsx)(n.code,{children:"login"})," method, either using your email and password:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"obb.account.login(email='my_email_here', password='my_password_here')\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or using your personal access token:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"obb.account.login(pat='my_pat_here')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(n.p,{children:["The documentation and packages are kept in the ",(0,s.jsx)(n.code,{children:"/website"})," folder, at the base of the repository. Navigate there to install the dependencies and start the development server."]}),"\n",(0,s.jsx)(n.h3,{id:"generate-markdown-files",children:"Generate Markdown Files"}),"\n",(0,s.jsx)(n.p,{children:"Markdown files for the Reference and Data Models pages need to be generated.\nThis will generate content based on what is actually installed and contained locally, so it may appear different than what is on this website."}),"\n",(0,s.jsxs)(n.p,{children:["Open a terminal command line to the ",(0,s.jsx)(n.code,{children:"/OpenBBTerminal/website"})," folder, then enter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python generate_platform_v4_markdown.py\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," >= 16.13.0\nTo check if Node.js installed, run this command:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node --version # should be v16.13.0 or higher\n"})}),"\n",(0,s.jsx)(n.h4,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,s.jsx)(n.h4,{id:"start-development-server",children:"Start Development Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This starts a local development server at: ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,s.jsx)(n.p,{children:"Most changes are reflected live without having to restart the server."}),"\n",(0,s.jsx)(n.h4,{id:"build",children:"Build"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command generates static content into the ",(0,s.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service. OpenBB uses Github Pages to host our website, it's deployed in the ",(0,s.jsx)(n.code,{children:"gh-pages"})," branch."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(5260),i=t(74848);function o(e){let{title:n}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);