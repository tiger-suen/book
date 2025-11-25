// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: '开始',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/getting-started',
          '/guide/configuration'
        ]
      },
      {
        title: '功能特性',
        collapsable: false,
        children: [
          '/features/introduction',
          '/features/core-concepts',
          '/features/architecture'
        ]
      },
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/development/environment-setup',
          '/development/contributing',
          '/development/style-guide'
        ]
      }
    ]
  }
}