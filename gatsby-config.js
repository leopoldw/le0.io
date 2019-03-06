const path = require(`path`)
const mdxFeed = require(`gatsby-mdx/feed`)
const isDev = process.env.NODE_ENV === `development`

if (isDev)
  require(`dotenv`).config({
    path: `./.secrets`,
  })

module.exports = {
  siteMetadata: {
    title: `le0.io`,
    siteUrl: `https://le0.io`,
    description: `Front End JavaScript blog by Leopold Wicht`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-resolve-src`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-mdx`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `assets`),
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/functions/`,
        functionsOutput: `${__dirname}/functions/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Exo 2`,
            subsets: [`latin`],
            variants: [`300`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(path.join(__dirname, `src`, `RootLayout.js`)),
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `le0.io`,
        short_name: `le0.io`,
        start_url: `/`,
        background_color: `#00207f`,
        theme_color: `#fec763`,
        display: `minimal-ui`,
        icon: `src/assets/leo.png`,
        include_favicon: true,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-netlify`, // always last
  ],
}
