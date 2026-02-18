import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站标题，显示在浏览器标签页上
  title: '我的知识库',
  // 网站描述，用于SEO
  description: '一个由 VitePress 驱动的文档站点',
  // 设置语言
  lang: 'zh-CN',

  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '参考', link: '/reference/' },
      {
        text: '更多',
        items: [
          { text: 'GitHub', link: 'https://github.com' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],

    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          collapsed: false,
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        },
        {
          text: '高级',
          items: [
            { text: '部署', link: '/guide/deployment' }
          ]
        }
      ],
      '/reference/': [
        { text: 'API 概览', link: '/reference/' }
      ]
    },

    // 其他实用配置
    logo: '/logo.svg', // 导航栏logo
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path'
    },
    lastUpdatedText: '上次更新'
  }
})