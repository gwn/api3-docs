module.exports = {
  env: process.env.NODE_ENV,
  versions:[
    {name:'next', url:'/next/'},
    {name:'pre-alpha', url:'/pre-alpha/'},
  ],
  head: [
    ['link', { rel: 'icon', href: '/img/small-logo.png' }]
  ],
  title: 'Documentation',
  base: '/',
  description: 'Technical Documentation for API3 ',
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3] },
  },
  themeConfig: {
    startPath:'/pre-alpha/',
    sidebarDepth: 0,
    displayAllHeaders: false,
    logo: '/img/logo.png',
    nav: [
      { text: 'Discord (Dev)', link: 'https://discord.gg/qnRrcfnm5W' },
      { text: 'Telegram (Chat)', link: 'https://t.me/API3DAO' },
      { text: 'GitHub', link: 'https://github.com/api3dao/api3-docs' },
    ],
    sidebar: {'/next/':require(`../next/sidebar.js`),
              '/pre-alpha/':require(`../pre-alpha/sidebar.js`),
              '/dev/':require(`../dev/sidebar.js`),
             },
    /* 
      2021-02-17: wkande: 
      smoothScroll=true will cause the TOC to require a double click for Ubuntu Firefox.
      Try true again after Firefox gets an update.
    */
    smoothScroll: false 
  },
  plugins: [
      ['@vuepress/medium-zoom'],
      ['vuepress-plugin-element-tabs'],
      ['@vuepress/last-updated'],
      ['@vuepress/back-to-top', true],
      ['@vuepress/search', {
          searchMaxSuggestions: 15,
          /*
            2021-03-10: wkande:  Do not use "test:", version filtering has been 
            added to .vuepress.components/SearchBox.vue
          */
        }
      ]
  ]
}
