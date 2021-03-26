(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{462:function(t,e,o){"use strict";o.r(e);var a=o(9),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"frontmatter-title"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),o("TocHeader"),t._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#evm-support"}},[t._v("EVM support")])]),o("li",[o("a",{attrs:{href:"#ethereum-json-rpc-api-compatibility"}},[t._v("Ethereum JSON-RPC API compatibility")]),o("ul",[o("li",[o("a",{attrs:{href:"#http-vs-wss"}},[t._v("HTTP vs WSS")])])])]),o("li",[o("a",{attrs:{href:"#what-next"}},[t._v("What next?")])])])]),o("p"),t._v(" "),o("p",[t._v("We are receiving an overwhelming amount of demand by teams of smart contract platforms and decentralized applications built on these about integrating Airnode to gain access to API data and services.\nThese guides are for you to be able to self-serve to assess the feasibility of an integration, and even prototype the integration yourself.")]),t._v(" "),o("p",[t._v("A lot of the smart contract platforms are directly compatible with Airnode, meaning that the integration effort will be trivial and can even be done with minimal support from API3.\nIn this guide, we will go over different factors that determine compatibility.")]),t._v(" "),o("h2",{attrs:{id:"evm-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#evm-support"}},[t._v("#")]),t._v(" EVM support")]),t._v(" "),o("p",[t._v("Airnode is composed of two parts: The protocol contract and the node application.\nThe Airnode protocol contract is implemented in Solidity.")]),t._v(" "),o("p",[t._v("Solidity typically compiles to EVM bytecode, which means that your smart contract platform should be EVM-compatible.\nIn theory, you can also compile Solidity into other types of bytecode (e.g., WASM) that would run natively on your smart contract platform, yet the resulting integration will need to be tested extensively.")]),t._v(" "),o("p",[o("strong",[t._v("TL;DR")]),t._v(" If your smart contract platform runs Solidity contracts, you are good.\nIf it does not, the protocol will have to be implemented in the native smart contract language.")]),t._v(" "),o("h2",{attrs:{id:"ethereum-json-rpc-api-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-json-rpc-api-compatibility"}},[t._v("#")]),t._v(" Ethereum JSON-RPC API compatibility")]),t._v(" "),o("p",[t._v("The node component of the Airnode uses "),o("code",[t._v("ethers.js")]),t._v(" to interact with the blockchain, which expects to communicate with an Ethereum JSON-RPC API-compatible endpoint.")]),t._v(" "),o("p",[t._v("Typically, chains that do not support EVM will also not be compatible in this regard.\nHowever, EVM support does not guarantee node API compatibility.\nYou can compare your node API with the "),o("a",{attrs:{href:"https://eth.wiki/json-rpc/API",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Ethereum JSON-RPC API"),o("OutboundLink")],1),t._v(" to see if it is any different.")]),t._v(" "),o("p",[t._v("Here, the most obvious tell of a chain supporting the required API functionality is it being compatible with Metamask.\nThis is because Metamask has similar requirements to Airnode.\nOn the other hand, if your smart contract platform requires customized versions of "),o("code",[t._v("web3.js")]),t._v(", "),o("code",[t._v("ethers.js")]),t._v(", "),o("code",[t._v("truffle")]),t._v(", etc. being used, that is probably because the node API is not identical to Ethereum's.")]),t._v(" "),o("h3",{attrs:{id:"http-vs-wss"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-vs-wss"}},[t._v("#")]),t._v(" HTTP vs WSS")]),t._v(" "),o("p",[t._v("Airnode uses the HTTP endpoint to access the JSON-RPC API.\nTherefore, not supporting WSS endpoints/not having them widely available is not a problem.")]),t._v(" "),o("p",[o("strong",[t._v("TL;DR")]),t._v(" If your users can use Metamask to interact with your smart contract platform, you are good.\nOtherwise, the parts of Airnode that interacts with the chain will need to be customized.")]),t._v(" "),o("h2",{attrs:{id:"what-next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-next"}},[t._v("#")]),t._v(" What next?")]),t._v(" "),o("p",[t._v("If your platform is compatible, the integration will be trivial, so you can even attempt to "),o("RouterLink",{attrs:{to:"/next/grp-requesters/guides/smart-contracts-platform/self-serve-integration.html"}},[t._v("do it yourself")]),t._v(".\nDo not hesitate to drop by "),o("a",{attrs:{href:"https://discord.gg/qnRrcfnm5W",target:"_blank",rel:"noopener noreferrer"}},[t._v("our Discord"),o("OutboundLink")],1),t._v(" and ask for support.")],1),t._v(" "),o("p",[t._v("If your platform is not directly compatible, this means that a significant amount of development will need to be undertaken for porting Airnode to your chain.\nHere are some reasons to carry through with this:")]),t._v(" "),o("ul",[o("li",[t._v("Airnode and its protocol are designed to enable standardized and set-and-forget oracle nodes.\nIts value-add comes from its design philosophy as much as its implementation.")]),t._v(" "),o("li",[t._v("The integration effort will only cover the parts of Airnode that interact with the chain.\nThe part that interacts with APIs does not need to be modified at all, and that constitutes roughly 50% of the node.")]),t._v(" "),o("li",[t._v("Porting Airnode to your chain will make the existing API–oracle integrations made for Airnode available to your chain.\nTherefore, you would not only be porting a piece of software, but all the APIs that will be made available as a result.")])]),t._v(" "),o("p",[t._v("As mentioned above, this porting effort is significant, and will require you to allocate resources.\nTo find out about how we can help, contact us at contact@api3.org")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);