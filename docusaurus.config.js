module.exports = {
  title: 'Quinn',
  tagline: 'Programmer',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Quinn', // Usually your GitHub org/user name.
  projectName: 'Blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Quinn',
      logo: {
        alt: 'Quinn Logo',
        // src: 'img/logo.svg',
        src: 'img/logo.jpeg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/StandOutstar',
          label: 'GitHub',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'blog/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/StandOutstar',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quinn, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/StandOutstar/it-blog/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/StandOutstar/it-blog/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
