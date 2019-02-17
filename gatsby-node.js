const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  // add page for each blog node
  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode, basePath: `./posts` })
    const fileName = filePath.split(`/`)[2]

    actions.createNodeField({
      node,
      name: `slug`,
      value: `/posts/${fileName}`,
    })
  }

  // add filename data to image nodes for querying
  if (node.internal.type === `ImageSharp`) {
    const parent = getNode(node.parent)
    // for some reason, calling getNode will always make this value
    // a parentNode instead of a field from a parent node
    actions.createNodeField({
      node,
      name: `file`,
      value: `${parent.base}`,
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
            component: path.resolve(`./src/pages/post.js`),
          })
        })

      resolve()
    })
  })