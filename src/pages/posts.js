import React from 'react'
import { graphql, Link } from 'gatsby'

const IndexPage = ({
  data: { allMdx: { edges: posts } },
}) => (
  <div>
    <h1>BLOG INDEX</h1>
    <ul>
      {posts.map(({ node: post }) => (
        <li key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
        </li>
      ))
      }
    </ul>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`