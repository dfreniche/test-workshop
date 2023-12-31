// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Change here to customise config

// Name of the Github Repo
const workshopName = 'test-workshop';

// Main page config
const title = "Docusaurus2 Meta Workshop";
const tagLine = "A Workshop written in Docusaurus2 to teach you how to write Workshops using docusaurus";
const startButtonTitle = "Enter Inception";

// Main Page Features
const featureList = [
  {
    title: 'A 100% Meta Workshop on how to build workshops',
    illustration: 'img/docu.svg',
    description: `
        Built using Docusaurus2
    `,
  },
  {
    title: 'Quick, no-nonsense approach',
    illustration: 'img/typing.gif',
    description: `
        We want to help you build workshops quickly
    `,
  },
  {
    title: 'Expaaaandable',
    illustration: 'img/expanded-leafy.png',
    description: `
        Can't wait for your PRs!
    `,
  },
];

// UTM stuff

const utmAdvocateName = `diego.freniche`;
const utmWorkshopName = 'docusaurus_workshop'

const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

// Footer links (probably no need to change them)

const footerLinks = [
  {
    label: 'Try MongoDB Atlas',
    href: `https://www.mongodb.com/try?${utmParams}`,
  },
  {
    label: 'Forums',
    href: `https://www.mongodb.com/community/forums/${utmParams}`,
  },
  {
    label: 'Developer Center',
    href: `https://www.mongodb.com/developer/${utmParams}`,
  },
  {
    label: 'MongoDB University',
    href: `https://learn.mongodb.com/${utmParams}`,
  },
  {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#",
  },
];

///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://${workshopName}.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: "mongodb-developer.github.io",
  organizationName: "mongodb-developer",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  deploymentBranch: "gh-pages",
  staticDirectories: ["static"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    startButtonTitle: `${startButtonTitle}`,
    featureList: featureList,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/mongodb-developer/${workshopName}/blob/main`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-ZJ28V71VTQ",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: "MongoDB Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          className: "navbar-logo",
          width: "135px",
          height: "100%",
        },
        items: [
          {
            href: `https://github.com/mongodb-developer/${workshopName}`,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell", "swift", "kotlin"],
      },
    }),
};

module.exports = config;
