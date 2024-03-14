"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>T,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var O=a.createContext({}),c=function(e){var t=a.useContext(O),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},T=function(e){var t=c(e.components);return a.createElement(O.Provider,{value:t},e.children)},N="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,O=e.parentName,T=o(e,["components","mdxType","originalType","parentName"]),N=c(r),A=n,s=N["".concat(O,".").concat(A)]||N[A]||p[A]||i;return r?a.createElement(s,l(l({ref:t},T),{},{components:r})):a.createElement(s,l({ref:t},T))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=A;var o={};for(var O in t)hasOwnProperty.call(t,O)&&(o[O]=t[O]);o.originalType=e,o[N]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}A.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},49909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>O,toc:()=>T});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const l={title:"baas",description:"This documentation is related to the 'baas' function which displays the average bid, ask prices, and spread for a chosen crypto pair over a specified time period. The function can work with various cryptocurrencies and ERC 20 tokens.",keywords:["baas","crypto pair","average bid","average ask prices","spread","time period","ERC20 token","crypto currency","ETH","USD","BTC","USDT"]},o=void 0,O={unversionedId:"terminal/reference/crypto/onchain/baas",id:"terminal/reference/crypto/onchain/baas",title:"baas",description:"This documentation is related to the 'baas' function which displays the average bid, ask prices, and spread for a chosen crypto pair over a specified time period. The function can work with various cryptocurrencies and ERC 20 tokens.",source:"@site/content/terminal/reference/crypto/onchain/baas.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/baas",permalink:"/terminal/reference/crypto/onchain/baas",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/baas.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1710429830,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"baas",description:"This documentation is related to the 'baas' function which displays the average bid, ask prices, and spread for a chosen crypto pair over a specified time period. The function can work with various cryptocurrencies and ERC 20 tokens.",keywords:["baas","crypto pair","average bid","average ask prices","spread","time period","ERC20 token","crypto currency","ETH","USD","BTC","USDT"]},sidebar:"tutorialSidebar",previous:{title:"address",permalink:"/terminal/reference/crypto/onchain/address"},next:{title:"balance",permalink:"/terminal/reference/crypto/onchain/balance"}},c={},T=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],N={toc:T},p="wrapper";function A(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"crypto /onchain/baas - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display average bid, ask prices, spread for given crypto pair for chosen time period ","[Source: https://graphql.bitquery.io/]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"baas [-c COIN] [-vs {ETH,USD,BTC,USDT}] [-l LIMIT] [-s {date,baseCurrency,quoteCurrency,dailySpread,averageBidPrice,averageAskPrice}] [-r]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"coin"),(0,n.kt)("td",{parentName:"tr",align:null},"-c  --coin"),(0,n.kt)("td",{parentName:"tr",align:null},"ERC20 token symbol or address."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"WETH, USDC, USDT, DAI, WBTC, FEI, sUSD, SHIB, SUSHI, ETH, OHM, UNI, LINK, AAVE, renBTC, TUSD, -, sETH, YFI, imBTC, ALCX, TRIBE, HEX, BNT, SPELL, sBTC, BUSD, UST, CVX, KOKO, FRAX, ETH2x-FLI, LUSD, ELON, LEASH, RAI, MC, EDEN, DYDX, 1INCH, EURS, RBN, MKR, ENS, BIT, ILV, CRV, DELTA, SNX, TOKE, MATIC, SQUID, SYN, SAITAMA, COMP, AGLD, FODL, EURT, BONE, DOG, SAND, AMPL, FNK, PAX, BAC, BDP, DPI, MIC, FTM, TRU, BADGER, BAL, HBTC, AXS, FXS, LRC, MOCHI, WISE, UFO, eRSDL, ESD, sLINK, RGT, STARL, DYP, LOBI, DOE, PERP, TKING, PEOPLE, AKITA, BOND, WDOGE, VSP, MM, ICE, LDO, RARE, CENNZ, xSUSHI, BDI, GM, CARDS, DSD, FARM, MIR, KISHU, AMP, RPL, FLOKI, DIGG, MIS, NCR, YGG, cvxCRV, KINE, CEL, ENJ, LON, MANA, GNO, NU, DRC, BGLD, SHKOOBY, NFD, ALPHA, BAS, PICKLE, RLY, ibEUR, NFTX, FEG, GALA, WOO, welp, SCAMMY, generalize fix for rebass tokens, RAD, Ian Laphan fan token, KP3R, SUPER, ROOK, FLX, REN, MIM, PSP, POLS, agEUR, BANK, NEXO, CORE, sETH2, FLOOR, RUNE, VISR, MCB, UNQT, IMX, BMI, LYXe, STRONG, REB, HGT, UMA, KUMA, BOTTO, WTON, BAND, DAO, AUDIO, XOR, SOUL, bALPHA, TORN, GRO, LEND, ERN, XXi, GYEN, DEXTF, INST, CREAM, VEMP, GRPFT, aKLIMA, ZCX, ibBTC, wNXM, USE, FTX Token, VADER, PLUG, PILOT, stETH, WOOL, KEEP, eXRD, ANY, TUBE2, VERSE, 10SET, DODO, STMX, STAKE, FOX, WAXE, GRT, EVN, RACA, COLLAR, KBTC, XSGD, yveCRV-DAO, aEth, LUNA, PUNK, DFX, LQTY, DERC, SHEESHA, SNGJ, ORB, LCX, BRAIN, RC_WETH_750_DAI_2021_3_31, OUSD, CHAIN, FX, SRM, SAK3, LIMIT, QNT, eMax, mIAU, CRO, USDN, HOPR, XMT, wCRES, 3Crv, EPAY, MASK, UFODOGE, $BASED, TTX, YAXIS, HOKK, PPAY, CAPY, DEA, RC_WBTC_25000_DAI_2021_3_31, OCEAN, DEUS, MILF, STA, pBTC, ibGBP, LPOOL, UBOMB, VRA, UNIX, MXS, LMT, LGB, COR, wPE, GERO, DFL, ZKS, DPX, KIMCHI, vBNT, DORA, Metis, PAID, yvBOOST, wstETH, KYL, BFC, NII, COC, BLACKHOLE, HANU, COTI, BEAN, DEV, LESS, sILV, sOHM, PEBBLE, KIRO, XES, Auction, ORN, GUSD, gm, SWAP, REQ, AUSCM, MPL, PAR, XTK, xSNXa, UMX, RBC, WGMI, OPUL, DEXT, uJENNY, HXB, PENDLE, COVER, ArtDeco, mFloki, TEL, KCAL, FREN, MetaCat, vETH, NAUSICAA, GTC, FREE, AXN, BANANA, SALE, AST1, PKF, BLOCKS, AST, BCS, 3DOG, SI, XFOC, BSOCIAL, MTA, BAT, YAM, UOS, $DG, COMBO, DEFI5, WHALE, APY, BOOST, WOOFY, SDT, YUAN, XEND, OGN, RAMP, yyDAI+yUSDC+yUSDT+yTUSD, LEAFA, SHAMAN, NTVRK, LONDON, buidl, SANSHU, SLP, CERTI, PAXG, LYM, eCum, SMINU, MIMO, UNISTAKE, ALBT, mLOOT, SHB5, GPYX, NOS, RKYU, CTX, K9, CZ, C3, 3TH, CHARLOTTE, COIN, PNT, JEJUDOGE, GMGN, ROOM, FEWGO, SKL, MCO2, BONDLY, GDT, XCAD, BNS, FGLD, XFIT, IDTT, EFI, DOGEGF, HUMAN, XP, Eevee Inu , MEME, PLUG-B, LIX, VXV, OCC, DVF, UBT, YAMv2, pBTC35A, GMT, CUBE, MCC, HEZ, DRF, PUSH, TEMP, RAIL, yDAI+yUSDC+yUSDT+yTUSD, AION, PREMIA, Lelouch, DBUY, XAUt, QRDO, wANATHA, TCAP, BEZOGE, SYLO, STAK, RUSD, oneUNI, PSHIB, xAAVEb, SBC DAO, ID, FOMO, SCREAMINU, SqINU, XYO, XTM, WAGMI, STARB, ViCA, DAM, ANGLE, AIOZ, USF, FST, MFG, SOCRAT, BTRST, PAPER, CONV, POLK, SAFE, 69, RVST, WING, CHINU, MSHIBA, GIZMO, COPE, OOP, MTO, METAGOKU, BLACKSTALLION, AKITACASH, Interstellar, RFOX, NBNG, DIADOGE, APED, BTC2x-FLI, HZM, TECH, MOON, pLTC, MPY, WOGE, FLOAT, SHFL, CAKEINU, LEBRON, RSR, RARI, WXT, RULER, ODA, VLT, PKINU, ERC20, MFS, WWT, VOL, HINU, YLD, PICIPO, GNBU, SWAG, TFI-LP, METACEX, ASTRO, OPM, LEECH, Yf-DAI, SHINU, HOUND, LBY, AFT, ANIME, rDPX, RAICHU, DGCL, SPANK, CHININU, MGC, ICHI, ZENDOGE, KOMBAT, KISHIMOTO, LEEEEECH, SAPINU, SPIDEYINU  , ELAND, SCOOP, DONI, SDOG, ZINU, GIVE, SUPER HEAVY , LGBTSHIBA, SHIB2, CIAO, BARK, TOKYOGHOUL, AVINOC, BIN, BID, TMTG, MLINK, NFY, VAMINU, GG, ORION, WASABI, GP, ROLL?, vETH2, CELL, TINYSAITAMA, 1Punch, RAC, MACROHARD, SGT, ODI, SCOOBY, Mononoke-Inu, CLAKE, SAT, TRND, NEWINU, KST, Rainbows, EWTB, SMT, DNXC, PMON, HMF, UBI, SER, MASHIMA, STIMMY, NFTD, GMI, xHDX, SAITO, MINT, YOP, UMB, LID, SPI, wsOHM, wCFG, GN, B20, XDEFI, MATTER, FDT, LBXC, ONX, SDL, FUN, DDOS, CC10, CoShi, LGCY, PXT, MTHD, ENCORE, TCR, mUSD, K21, ibETH, FNX, REVV, BULK, TOWN, SFI, LAYER, DOGE, ITS, TVK, TGX, Hi, WILD, CFi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vs"),(0,n.kt)("td",{parentName:"tr",align:null},"-vs  --vs"),(0,n.kt)("td",{parentName:"tr",align:null},"Quote currency"),(0,n.kt)("td",{parentName:"tr",align:null},"USDT"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"ETH, USD, BTC, USDT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to display data for."),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort by given column."),(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"date, baseCurrency, quoteCurrency, dailySpread, averageBidPrice, averageAskPrice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reverse"),(0,n.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,n.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}A.isMDXComponent=!0}}]);