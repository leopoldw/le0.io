import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'

const IndexPage = ({
  data: { allMdx: { edges }}
}) => (
  <>
    <h1>ROOT</h1>
    {edges.map(post => (
      <MDXRenderer>{post.node.code.body}</MDXRenderer>
    ))}
  </>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          code {
            body
          }
        }
      }
    }
  }
`