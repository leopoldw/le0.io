import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import mdxComponents from 'components/mdx'

// TODO: turn this into a blog renderer with a render prop
// extract blog layout to another file
const BlogPost = ({ data: { mdx } }) => (
  <MDXProvider components={mdxComponents}>
    <div>
      <h1>{`BLOG POST - ${mdx.frontmatter.title}`}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
  </MDXProvider>
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

export default BlogPost