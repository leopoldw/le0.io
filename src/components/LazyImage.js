import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// no compile time variables in gatsby yet, so query
// all and then filter using JS
const allImagesQuery = graphql`
  {
    allImageSharp {
      edges {
        node {
          id
          fields {
            file {
              base
              relativePath
            }
          }
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

const findMatchingImage = (fileName, data) =>
  data.allImageSharp.edges.find(({ node }) =>
    node.fields.file.base === fileName
  ).node

const LazyImage = ({ fileName, alt, critical = false }) =>
  <StaticQuery
    query={allImagesQuery}
    render={data => {
      const { fluid } = findMatchingImage(fileName, data)
      return (
        <Img
          fluid={fluid}
          alt={alt}
          critical={critical}
        />
      )
    }}
  />

export default LazyImage