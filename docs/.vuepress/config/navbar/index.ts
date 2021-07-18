import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '参考',
    children: [
      {
        text: 'VuePress',
        children: [
          '/reference/cli.md',
          '/reference/config.md',
          '/reference/frontmatter.md',
          '/reference/components.md',
          '/reference/plugin-api.md',
          '/reference/theme-api.md',
          '/reference/client-api.md',
          '/reference/node-api.md',
        ],
      },
      {
        text: '打包工具',
        children: [
          '/reference/bundler/webpack.md',
          '/reference/bundler/vite.md',
        ],
      },
      {
        text: '默认主题',
        children: [
          '/reference/default-theme/config.md',
          '/reference/default-theme/frontmatter.md',
          '/reference/default-theme/components.md',
          '/reference/default-theme/markdown.md',
          '/reference/default-theme/styles.md',
        ],
      },
    ],
  },
  {
    text: '插件',
    children: [
      {
        text: '常用功能',
        children: [
          '/reference/plugin/back-to-top.md',
          '/reference/plugin/container.md',
          '/reference/plugin/docsearch.md',
          '/reference/plugin/google-analytics.md',
          '/reference/plugin/medium-zoom.md',
          '/reference/plugin/nprogress.md',
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
          '/reference/plugin/register-components.md',
          '/reference/plugin/search.md',
        ],
      },
      {
        text: '语法高亮',
        children: [
          '/reference/plugin/prismjs.md',
          '/reference/plugin/shiki.md',
        ],
      },
      {
        text: '主题开发',
        children: [
          '/reference/plugin/active-header-links.md',
          '/reference/plugin/debug.md',
          '/reference/plugin/git.md',
          '/reference/plugin/palette.md',
          '/reference/plugin/theme-data.md',
          '/reference/plugin/toc.md',
        ],
      },
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/advanced/architecture.md',
          '/advanced/plugin.md',
          '/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        children: [
          '/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],
  },
  {
    text: `v1.1`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/',
      },
    ],
  },
]
