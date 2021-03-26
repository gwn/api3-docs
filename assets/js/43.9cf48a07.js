(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{441:function(e,t,a){"use strict";a.r(t);var s=a(9),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("TocHeader"),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#statelessness"}},[e._v("Statelessness")]),a("ul",[a("li",[a("a",{attrs:{href:"#non-idempotent-operations"}},[e._v("Non-idempotent operations")])])])]),a("li",[a("a",{attrs:{href:"#fully-serverless-stack"}},[e._v("Fully-serverless stack")])]),a("li",[a("a",{attrs:{href:"#approach-to-security"}},[e._v("Approach to security")])])])]),a("p"),e._v(" "),a("p",[a("em",[e._v("See our article, "),a("a",{attrs:{href:"https://medium.com/api3/getting-to-know-airnode-162e50ea243e",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting to know Airnode"),a("OutboundLink")],1),e._v(" for a technical overview of the software.")])]),e._v(" "),a("h2",{attrs:{id:"statelessness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statelessness"}},[e._v("#")]),e._v(" Statelessness")]),e._v(" "),a("p",[e._v("Oracle nodes typically keep persistent track of the blockchain and the state of the requests they receive (i.e., at what stage of fulfillment they are at), either in-memory or in a database.\nIn systems terminology, they are not memoryless.\nDoing so comes with many disadvantages:")]),e._v(" "),a("ol",[a("li",[e._v("The database becomes a single point of failure.\nOrchestrating redundancy is costly and not trivial.")]),e._v(" "),a("li",[e._v("Any anomaly that happens on the blockchain (block reorgs, ommer blocks, etc.) results in the oracle node state to fall out of sync with the chain, which is not trivial to correct.")]),e._v(" "),a("li",[e._v("A highly stateful application has many edge cases.\nThese are difficult to cover with tests completely and are likely to result in bugs that incapacitate the node.")])]),e._v(" "),a("p",[e._v("These disadvantages result in an unstable oracle node, which is the essential reason why traditional oracle nodes require "),a("em",[e._v("professional node operators")]),e._v(" that need to be ready to respond to incidents 24/7.\nSince this is not a realistic requirement for first-party oracles, an oracle node that is designed for first-party oracles has to be stateless.")]),e._v(" "),a("p",[e._v("Another way to look at keeping oracle node state is this:\nThe blockchain (e.g., Ethereum) node that the oracle node uses already keeps the state on behalf of the oracle node.\nThe duplication of this responsibility also duplicates the points of failure (where failure in either of them results in total failure).\nThen, the oracle node should depend on the blockchain node to keep its state, which requires the protocol to be designed to fit this scheme.")]),e._v(" "),a("h3",{attrs:{id:"non-idempotent-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-idempotent-operations"}},[e._v("#")]),e._v(" Non-idempotent operations")]),e._v(" "),a("p",[e._v("An API operation is idempotent if calling it multiple times has the same effect as calling it once.\nFor example, using a GET operation of an exchange API to get the ETH/USD price data is typically an idempotent operation.\nCalling it once or more will not make any difference at the API server-side.\nIn contrast, using a POST operation of a remittance service provider API to send $100 to another party would be a non-idempotent operation.\nEach call would send an additional $100, and thus using the operation multiple times would have a different effect than using it once.")]),e._v(" "),a("p",[e._v('The oracle node being stateless means that it would not be able to "remember" if it has made an API call associated with a request, and may repeat it under certain conditions.\nThis is not an issue at the moment, because presently, oracles are only used for idempotent operations.\nHowever, we aim for Airnode to be able to support non-idempotent operations as well, so we are researching alternative methods to achieve this while protecting the resiliency that statelessness provides.')]),e._v(" "),a("h2",{attrs:{id:"fully-serverless-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fully-serverless-stack"}},[e._v("#")]),e._v(" Fully-serverless stack")]),e._v(" "),a("p",[e._v("Although serverless functions are better known for scaling automatically even with extreme concurrent usage (which may also come in handy in a bright future), we use it for different reasons:")]),e._v(" "),a("ul",[a("li",[e._v("Serverless functions are stateless.\nThis means that whatever problem occurs in an invocation, the next invocation will start with a clean slate.\nThis provides great resiliency against internal (from Airnode itself) or external (from the API, Ethereum node) bugs.\nIn other words, the oracle node "),a("em",[e._v("turns itself off and on again")]),e._v(" very frequently, which automatically fixes the majority of the potential problems.")]),e._v(" "),a("li",[e._v("Serverless functions are fully managed.\nThey provide the closest experience to "),a("em",[e._v("set-and-forget")]),e._v(" possible.")]),e._v(" "),a("li",[e._v("Serverless functions are priced on-demand.\nEspecially considering that Airnode will not require major concurrent usage, this will result in great cost-efficiency (and even let the user stay below "),a("a",{attrs:{href:"https://aws.amazon.com/free",target:"_blank",rel:"noopener noreferrer"}},[e._v("Free Tier"),a("OutboundLink")],1),e._v(" limits).")]),e._v(" "),a("li",[e._v("Bare serverless functions are easy to port across cloud providers (e.g., using "),a("a",{attrs:{href:"https://www.serverless.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless Framework"),a("OutboundLink")],1),e._v("), especially when their cloud provider-specific dependencies are limited.")])]),e._v(" "),a("h2",{attrs:{id:"approach-to-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approach-to-security"}},[e._v("#")]),e._v(" Approach to security")]),e._v(" "),a("p",[e._v("For an optimally hands-off user experience, Airnode should utilize fully-managed services whenever possible.\nTo allow this to be done securely, the node is designed in a defensive way.")]),e._v(" "),a("p",[e._v("There are two external parties that Airnode interacts with:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("APIs:")]),e._v(" Although Airnode is designed for first-party oracles, we also consider serving data from third-party APIs as a valid usage scenario.\nIn this case, calls made to all APIs are contained in separate serverless function invocations so that they cannot induce node-level failure.")]),e._v(" "),a("li",[a("strong",[e._v("Blockchain nodes:")]),e._v(" Similarly, using blockchain (e.g., Ethereum) nodes run by third party service providers is considered as a valid usage scenario.\nAirnode uses all providers simultaneously (i.e., not through a Quorum-based consensus or behind a load balancer) for maximum availability, which is made possible by its unique stateless design.\nThe interactions made with each provider is contained in a separate serverless function invocation so that a malicious provider cannot induce node-level failure.")])]),e._v(" "),a("p",[e._v("In addition, the protocol is implemented in a way that a blockchain service provider cannot tamper with the parameters of a request, but only deny service.\nNote that this is not the case with alternative solutions, as they treat the blockchain service provider as a trusted party.")]),e._v(" "),a("p",[e._v("We recommend cloud hosting over hosting on-premises due to the superior availability of serverless functions, and also for their set-and-forget qualities.\nAs a precaution, redundancy on multiple cloud providers can be provisioned easily and virtually at no cost thanks to the fully-serverless design of Airnode.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);