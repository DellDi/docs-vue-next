import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/asset.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
        '/guide/migration.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: '深入',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-app-enhance.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/extending-a-theme.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'VuePress 参考',
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
  ],
  '/reference/bundler/': [
    {
      text: '打包工具参考',
      children: ['/reference/bundler/webpack.md', '/reference/bundler/vite.md'],
    },
  ],
  '/reference/default-theme/': [
    {
      text: '默认主题参考',
      children: [
        '/reference/default-theme/config.md',
        '/reference/default-theme/frontmatter.md',
        '/reference/default-theme/components.md',
        '/reference/default-theme/markdown.md',
        '/reference/default-theme/styles.md',
      ],
    },
  ],
  '/reference/plugin/': [
    {
      text: '官方插件参考',
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
  ],
}
