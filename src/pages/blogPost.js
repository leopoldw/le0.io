import React from 'react'
import { graphql } from 'gatsby'
import RootLayout from 'layouts/rootLayout'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import mdxComponents from 'components/mdx'

// TODO: turn this into a blog renderer with a render prop
// extract blog layout to another file
const BlogPost = ({ data: { mdx: { timeToRead, frontmatter, code } } }) => (
  <RootLayout
    title={`${frontmatter.title} - le0.io`}
    description={frontmatter.description}
  >
    <MDXProvider components={mdxComponents}>
      <div>
        <h1>frontmatter.title</h1>
        <MDXRenderer>{code.body}</MDXRenderer>
      </div>
    </MDXProvider>
  </RootLayout>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      frontmatter {
        title
        date
        description
        keywords
      }
      code {
        body
      }
    }
  }
`

export default BlogPost