import React, { memo } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { sizes, fontSizes } from 'consts/design'

const style = {
  container: {
    marginBottom: sizes.paragraphSpacing,
  },
  caption: {
    textAlign: `center`,
    fontSize: fontSizes.subtext,
    fontStyle: `italic`,
    marginTop: 10,
  },
}

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

const LazyImage = ({ fileName, caption, alt, critical = false }) =>
  <StaticQuery
    query={allImagesQuery}
    render={data => {
      const { fluid } = findMatchingImage(fileName, data)
      return (
        <div css={style.container}>
          <Img
            fluid={fluid}
            alt={alt}
            critical={critical}
          />
          {caption && <div css={style.caption}>{caption}</div>}
        </div>
      )
    }}
  />

export default memo(LazyImage)