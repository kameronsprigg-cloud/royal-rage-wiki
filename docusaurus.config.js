// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Royal Rage',
  tagline: 'Where Drama goes to Die',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
     navbar: {
        title: 'ROYAL RAGE', // Matches your Gold Title [cite: 16]
        logo: {
          alt: 'Royal Rage Logo',
          src: 'img/logo.svg', // Keep this or comment out if you only want text
          style: {display: 'none'}, // Hides logo image to prioritize the text [cite: 20]
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The Codex',
          },
          {to: '/valor', label: 'Hall of Valor', position: 'left'},
          
          // --- NEW LINK ---
          {to: '/command', label: 'Chain of Command', position: 'left'},
          // ----------------
          
          {
            href: 'https://github.com/facebook/docusaurus', // Change to Discord link soon
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Intel',
            items: [
              { label: 'The Codex', to: '/docs/intro' },
              { label: 'Hall of Valor', to: '/valor' },
              { label: 'Chain of Command', to: '/command' },
            ],
          },
          {
            title: 'Alliance',
            items: [
              { label: 'Enlist Now', to: '/enlist' }, // Link to the new page
              { label: 'Discord', href: 'https://discord.gg/YOUR_CODE' },
              { label: 'Diplomacy (Mail)', href: 'mailto:diplomacy@royalrage.com' }, // Optional
            ],
          },
        ],
        // The Copyright Line
        copyright: `Copyright © ${new Date().getFullYear()} Royal Rage. Built for War.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
