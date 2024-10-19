import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenAPIPreset from 'docusaurus-preset-openapi';

const config: Config = {
  title: 'Filen Docs',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.filen.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JupiterPi', // Usually your GitHub org/user name.
  projectName: 'filen-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    /*[
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JupiterPi/filen-docs/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],*/
    [
      "docusaurus-preset-openapi",
      {
        api: {
          path: "docs/api/endpoints/openapi.json",
          routeBasePath: "/api/endpoints",
        },
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: "/",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies OpenAPIPreset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    announcementBar: {
      id: 'unfinished-disclaimer',
      content: '<span style="font-weight: 500">These docs are still work in progress. Do not use them.</span>',
      backgroundColor: '#ec4545',
      isCloseable: false,
    },
    navbar: {
      title: 'Filen Docs',
      logo: {
        alt: 'Filen Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'webAppSidebar',
          position: 'left',
          label: 'Web',
        },
        {
          type: 'docSidebar',
          sidebarId: 'desktopAppSidebar',
          position: 'left',
          label: 'Desktop',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mobileAppSidebar',
          position: 'left',
          label: 'Mobile',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cliSidebar',
          position: 'left',
          label: 'CLI',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sdkSidebar',
          position: 'left',
          label: 'SDK',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/FilenCloudDienste',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'GitHub',
          items: [
            {
              label: '@FilenCloudDienste',
              href: 'https://github.com/FilenCloudDienste',
            },
            {
              label: 'SDK',
              href: 'https://github.com/FilenCloudDienste/filen-sdk-ts',
            },
            {
              label: 'Docs',
              href: 'https://github.com/JupiterPi/filen-docs',
            },
          ],
        },
      ],
      copyright: `<a href="https://filen.io" target="_blank">Filen</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
