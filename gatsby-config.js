const path = require(`path`)
const mdxFeed = require(`gatsby-plugin-mdx/feed`)
const isDev = process.env.NODE_ENV === `development`

if (isDev)
  require(`dotenv`).config({
    path: `./.secrets`,
  })

const NAME = `Leopold Wicht`

module.exports = {
  siteMetadata: {
    title: `le0.io`,
    author: NAME,
    siteUrl: `https://le0.io`,
    description: `Front-End blog by ${NAME}`,
    profession: `Front-End JavaScript Engineer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-resolve-src`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-offline`, // serves broken site from cache
    {
      resolve: `gatsby-plugin-mdx`,
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
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Exo 2`,
            subsets: [`latin`],
            formats: [`woff2`],
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
        component: require.resolve(path.join(__dirname, `src`, `Root.js`)),
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
        theme_color: `#fff600`,
        display: `minimal-ui`,
        icon: `src/assets/leo.png`,
        include_favicon: true,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-netlify`, // always last
  ],
}
