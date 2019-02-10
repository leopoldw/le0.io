import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

// TODO: turn this into a blog renderer with a render prop
// extract blog layout to another file
const BlogLayout = ({ data: { mdx } }) => (
  <div>
    <h1>{`BLOG POST - ${mdx.frontmatter.title}`}</h1>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </div>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

export default BlogLayout