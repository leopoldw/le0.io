const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const BASE_POST_PATH = `./posts`

exports.onCreateNode = ({ node, actions, getNode }) => {
  // add page for each blog node
  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode, basePath: BASE_POST_PATH })
    const fileName = filePath.split(`/`)[2]

    actions.createNodeField({
      node,
      name: `slug`,
      value: `/blog/${fileName}`,
    })
  }

  // add filename data to image nodes for querying
  if (node.internal.type === `ImageSharp`) {
    const parentNode = getNode(node.parent)

    // for some reason, calling getNode will always make this value
    // a parentNode instead of a field from a parent node
    actions.createNodeField({
      node,
      name: `file`,
      // not sure why this works, but ok...
      value: `${parentNode.base}`,
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