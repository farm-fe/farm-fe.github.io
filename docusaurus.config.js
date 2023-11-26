// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const progress = require("./scripts/progress_translate_lang.json");
import { themes as prismThemes } from "prism-react-renderer";
// darkCodeTheme.styles.push({
//   types: ["token", "color"],
//   style: {
//     color: "rgb(189, 147, 249)",
//   },
// });
// lightCodeTheme.styles.push({
//   types: ["token", "color"],
//   style: {
//     color: "rgb(189, 147, 249)",
//   },
// });

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Farm",
  tagline: "Super fast web build tool written in Rust",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://farm-fe.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "farm-fe", // Usually your GitHub org/user name.
  projectName: "farm-fe.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: "ignore",
  // onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
      },
      zh: {
        label: `简体中文`,
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/farm-fe/farm-fe.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // themes: ["@docusaurus/theme-search-algolia"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Farm",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "quick-start",
            position: "right",
            label: "Guides",
          },
          {
            type: "doc",
            docId: "config/farm-config",
            position: "right",
            label: "Config",
          },
          {
            type: "doc",
            docId: "plugins/official-plugins/overview",
            position: "right",
            label: "Plugins",
          },
          {
            type: "localeDropdown",
            position: "right",
          },

          {
            href: "https://github.com/farm-fe/farm",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Guide",
            items: [
              {
                label: "Quick Start",
                to: "/docs/quick-start",
              },
              {
                label: "Introduction",
                to: "/docs/why-farm",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "WeChat Group",
                href: "https://github.com/farm-fe/farm#chat-with-us",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/mDErq9aFnF",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/farm-fe/farm",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/@farm-fe",
              },
            ],
          },
        ],
        logo: {
          alt: "Farm Logo",
          src: "/img/logo-farm.png",
          href: "https://github.com/farm-fe/farm",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Farm, Inc. Built with Docusaurus.`,
      },

      announcementBar: {
        id: "announcementBar-2", // Increment on change
        content: `🎉 Farm will release 1.0 soon. If you like Farm, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/farm-fe/farm">GitHub</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-highlight-line",
            line: "c-highlight-next-line",
            block: { start: "c-highlight-start", end: "c-highlight-end" },
          },
        ],
      },
      algolia: {
        appId: "G3J92PUFY2",
        apiKey: "2b0f3f1f06f381249d44682a21206f4f",
        indexName: "farm-feio",
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
