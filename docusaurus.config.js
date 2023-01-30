// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Penguin Empire Robotics',
  tagline: 'Code Documentation for FRC Team 2551',
  url: 'https://penguinempire.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PenguinEmpire', // Usually your GitHub org/user name.
  projectName: 'PenguinEmpire.github.io', // Usually your repo name.
  deploymentBranch: 'PenguinEmpire/PenguinEmpire.github.io/tree/gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PenguinEmpire/PenguinEmpire.github.io/tree/main/',
        },
        blog:  {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PenguinEmpire/PenguinEmpire.github.io/tree/main/',
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
      navbar: {
        title: 'Penguin Empire Robotics',
        logo: {
          alt: 'Penguin Empire Robotics Logo',
          src: 'img/2551.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://www.penguinempirerobotics.org/',
            label: 'to penguinempirerobotics.org',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn to Code',
                to: '/docs/category/learn-to-code',
              },
              {
                label: 'FRC and WPIlib',
                to: '/docs/category/frc-and-wpilib',
              },
              {
                label: 'Advanced Topics',
                to: '/docs/category/advanced-topics',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/penguinempirerobotics/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/penguinempirerobotics',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@penguinempirerobotics8439',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }, 
              {
                label: 'GitHub',
                href: 'https://github.com/PenguinEmpire',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
