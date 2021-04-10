module.exports = {
  pathPrefix: "/linktree",
  siteMetadata: {
    title: `Hi, this is my personal linktree.`,
    description: `Here you can find the links that are most important to me at the moment.`,
    author: `@litc0de`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `litc0de-linktree`,
        short_name: `litc0de`,
        start_url: `/`,
        background_color: `#171f28`,
        theme_color: `#171f28`,
        display: `minimal-ui`,
        icon: `src/images/link-variant.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg-icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-owa`,
      options: {
        siteId: "b9dc8e3311dee27d01acde3118a4eccf",
        owaUrl: "https://litcode.uber.space/",
      },
    },
  ],
}
