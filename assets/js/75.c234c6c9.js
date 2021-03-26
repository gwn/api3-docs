(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{473:function(t,n,e){"use strict";e.r(n);var s=e(9),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("TocHeader"),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#endpointid"}},[t._v("endpointId")])]),e("li",[e("a",{attrs:{href:"#authorizers"}},[t._v("Authorizers")])])])]),e("p"),t._v(" "),e("p",[t._v("Airnode serves APIs to blockchains according to "),e("RouterLink",{attrs:{to:"/next/technology/specifications/ois.html"}},[t._v("Oracle Integration Specifications (OIS)")]),t._v(".\nAPIs are composed of "),e("RouterLink",{attrs:{to:"/next/technology/specifications/ois.html#_4-4-paths"}},[t._v("operations")]),t._v(", which represent individual functionalities that an API offers.\nOIS maps each API operation to an "),e("RouterLink",{attrs:{to:"/next/technology/specifications/ois.html#_5-endpoints"}},[t._v("endpoint")]),t._v(", which can be thought of as an Airnode operation.\nThe endpoints that an Airnode will serve over the request–response protocol are listed under "),e("RouterLink",{attrs:{to:"/next/technology/deployment-files/config-json.html#triggers"}},[t._v("triggers")]),t._v(" of "),e("RouterLink",{attrs:{to:"/next/technology/deployment-files/config-json.html"}},[t._v("config.json")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"endpointid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpointid"}},[t._v("#")]),t._v(" "),e("code",[t._v("endpointId")])]),t._v(" "),e("p",[e("code",[t._v("endpointId")]),t._v(" identifies specific endpoints that a provider serves, and is computed in JS (using ethers.js) as follows:")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("endpointId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ethers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ethers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultAbiCoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OIS_NAME")]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENDPOINT_NAME")]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Note that this means that "),e("code",[t._v("endpointId")]),t._v("s are not unique, and two providers can serve equivalent endpoints using the same ID (in fact, this is the desired outcome).\nThis is not an issue, as requests are made with a "),e("code",[t._v("providerId")]),t._v(" and "),e("code",[t._v("endpointId")]),t._v(" pair.")]),t._v(" "),e("p",[t._v("This convention of determining "),e("code",[t._v("endpointId")]),t._v("s is not enforced at the protocol-level.\nFor example, the provider can choose to generate their "),e("code",[t._v("endpointId")]),t._v("s randomly, and as long as their requesters use correct "),e("code",[t._v("endpointId")]),t._v("s, this will not be an issue.")]),t._v(" "),e("h2",{attrs:{id:"authorizers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authorizers"}},[t._v("#")]),t._v(" Authorizers")]),t._v(" "),e("p",[t._v("Providers can assign a list of authorizers to their endpoints.\nSee the "),e("RouterLink",{attrs:{to:"/next/technology/protocols/request-response/authorizer.html"}},[t._v("section about authorizers")]),t._v(" for more details.")],1)],1)}),[],!1,null,null,null);n.default=a.exports}}]);