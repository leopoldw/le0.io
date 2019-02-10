const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const BASE_POST_PATH = `./posts`

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode, basePath: BASE_POST_PATH })
    const filename = filePath.split(`/`)[2]

    // action to extend current node with a field
    actions.createNodeField({
      node,
      name: `slug`,
      value: `/blog/${filename}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) =>
  new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              tableOfContents
              parent {
                ... on File {
                  absolutePath
                  name
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `).then(({ data, errors }) => {
      if ( errors )
        return reject(errors)

        data.allMdx.edges.forEach(({ node }) => {
          actions.createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/layouts/BlogLayout.js`),
            // context: {
            //   absPath: node.parent.absolutePath,
            //   tableOfContents: node.tableOfContents,
            //   id: node.id,
            // },
          })
        })

      resolve()
    })
  })