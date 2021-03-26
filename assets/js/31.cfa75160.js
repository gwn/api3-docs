(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{428:function(e,t,s){"use strict";s.r(t);var a=s(9),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("TocHeader"),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#config-themeconfig-sidebardepth"}},[e._v("config.themeConfig.sidebarDepth")])]),s("li",[s("a",{attrs:{href:"#config-themeconfig-sidebar"}},[e._v("config.themeConfig.sidebar")])]),s("li",[s("a",{attrs:{href:"#config-markdown"}},[e._v("config.markdown")])]),s("li",[s("a",{attrs:{href:"#index-styl"}},[e._v("index.styl")])]),s("li",[s("a",{attrs:{href:"#config-themeconfig-smoothscroll"}},[e._v("config.themeConfig.smoothScroll")])])])]),s("p"),e._v(" "),s("p",[e._v("The api3-docs project uses the VuePress default theme. The theme is configured in the .vuepress/config.json file. This document speaks to some of the key theme settings and overrides used by this project.")]),e._v(" "),s("h2",{attrs:{id:"config-themeconfig-sidebardepth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-themeconfig-sidebardepth"}},[e._v("#")]),e._v(" config.themeConfig.sidebarDepth")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("sidebarDepth")]),e._v(" is set to a depth of "),s("em",[e._v("0")]),e._v(" so that only "),s("strong",[e._v("Heading 1")]),e._v(" elements are listed in the sidebar. "),s("strong",[e._v("Headings 2-3")]),e._v(" will appear in the TOC (Table of Contents) to the right of the page content as defined in "),s("a",{attrs:{href:"#config.themeConfig"}},[e._v("config.markdown")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"config-themeconfig-sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-themeconfig-sidebar"}},[e._v("#")]),e._v(" config.themeConfig.sidebar")]),e._v(" "),s("p",[e._v("The sidebar is a JSON object with a set of dynamic path keys. The value of each dynamic path key is the sidebar.json file that will be used for the path. This tells each path where the sidebar for the path is located, usually in the root of the path")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("sidebar"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n'/next/'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("require(`../next/sidebar.js`)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n'/"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),e._v("."),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("/'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("require(`../"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),e._v("."),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("/sidebar.js`)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n'/pre-alpha/'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("require(`../pre-alpha/sidebar.js`)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n'/dev/'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("require(`../dev/sidebar.js`)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"config-markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-markdown"}},[e._v("#")]),e._v(" config.markdown")]),e._v(" "),s("p",[e._v("The markdown key technically is not part of the default theme. It does however impact the UI of the content.")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    lineNumbers"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    toc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" includeLevel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("lineNumbers")]),e._v(": Adds line numbers to code blocks.")]),e._v(" "),s("li",[s("strong",[e._v("toc")]),e._v(": Sets the header levels the TOC will display.")])]),e._v(" "),s("h2",{attrs:{id:"index-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-styl"}},[e._v("#")]),e._v(" index.styl")]),e._v(" "),s("p",[e._v("There are overrides to the default theme in "),s("strong",[e._v(".vuepress/components/index.styl")]),e._v(". Such overrides are common practice when using VuePress. There are four areas that index.styl style changes address. The changes are detailed in index.styl using code comments.")]),e._v(" "),s("ul",[s("li",[e._v("Content")]),e._v(" "),s("li",[e._v("Navbar")]),e._v(" "),s("li",[e._v("Sidebar")]),e._v(" "),s("li",[e._v("TOC")])]),e._v(" "),s("h2",{attrs:{id:"config-themeconfig-smoothscroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-themeconfig-smoothscroll"}},[e._v("#")]),e._v(" config.themeConfig.smoothScroll")]),e._v(" "),s("p",[e._v("As of 2021-02-17 "),s("strong",[e._v("smoothScroll=true")]),e._v(" will cause the TOC hyperlinks to require a "),s("em",[e._v("double click")]),e._v(" for Ubuntu Firefox users. Change this back to true should Firefox remedy the issue.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);