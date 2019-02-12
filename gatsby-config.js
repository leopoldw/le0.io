const mdxFeed = require(`gatsby-mdx/feed`)
const path = require(`path`)
const isDev = process.env.NODE_ENV === `development`

module.exports = {
  siteMetadata: {
    title: `Leopold W Site`,
    description: `Leopold W Description`,
    author: `leopoldw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-resolve-src`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-mdx`,
      options: {
        // gatsbyRemarkPlugins: [{
        //   resolve: `gatsby-remark-prismjs`,
        //   options: {
        //     showLineNumbers: true,
        //   },
        // }],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: !isDev,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `posts`),
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: mdxFeed,
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
