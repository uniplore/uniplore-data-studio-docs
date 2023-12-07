// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Uniplore Data Studio Documentation',
  tagline: 'Uniplore Data Studio 平台是数据资产定义、加工、管理、服务的全流程平台，提供数据查询、数据同步、数据标准、数据建模、数据质量、数据服务、数据资产运营、数据资产中心、数据标签、画像分析等功能，为智能数据应用持续稳定供给全量、标准、干净的数据资源。',
  // github部署
  url: 'https://uniplore.github.io', // 部署版本需要调整此处的域名
  baseUrl: '/uniplore-data-studio-docs/',

  // 腾讯云部署
  // url: 'https://doc.datastudio.uniplore.cn', // 部署版本需要调整此处的域名
  // baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jy_RM_c', // Usually your GitHub org/user name.
  projectName: 'uniplore-data-studio-docs', // Usually your repo name.
  deploymentBranch: 'main', // deploy branch name
  //staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: '1.2.0',
          //     path: '1.2.0'
          //   }
          // }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 头部导航栏配置
      navbar: {
        title: 'Uniplore Data Studio',
        logo: {
          alt: 'uniplore Logo',
          src: 'img/logo.svg',
        },
        items: [{
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{
              to: '/',
              label: 'All versions'
            }],
            dropdownActiveClassDisabled: false,
          },
          {
            href: 'https://github.com/uniplore/uniplore-data-studio',
            label: 'Github',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 页脚导航配置
      footer: {
        style: 'light',
        // style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [{
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [{
                label: 'GitHub',
                href: 'https://github.com/uniplore/uniplore-data-studio',
              },
              {
                label: 'Official Website',
                href: 'https://www.uniplore.cn',
              },
            ],
          },
        ],
        copyright: `Copyright © 2016~${new Date().getFullYear()} Uniplore, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 发布文档网站配置
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {
          // facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],
        },
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;