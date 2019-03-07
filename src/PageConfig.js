import React from 'react'
import ReactHelmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        siteUrl
        description
      }
    }
    file(name: { eq: "title" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          src
        }
      }
    }
  }
`

const PageConfig = ({ title, description, path = `` }) => {
  const {
    site: { siteMetadata: meta },
    file: { childImageSharp: { fluid: { src: image } } },
  } = useStaticQuery(query)


  const brandedTitle = title ? `${title} - ${meta.title}` : meta.title
  const metaDescription = description || meta.description
  const url = `${meta.siteUrl}${path}`

  return (
    <ReactHelmet
      htmlAttributes={{ lang: `en` }}
      title={brandedTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        }, {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:title`,
          content: brandedTitle,
        },
        {
          name: `og:description`,
          content: description,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: brandedTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        }, {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ]}
    />
  )
}

export default PageConfig