import React from 'react'
import { graphql } from 'gatsby'
// import PageConfig from '../PageConfig'
import ContentContainer from 'components/blog/ContentContainer'
import UnstyledLink from 'components/site/UnstyledLink'
import { colors, fontSizes, borderRadii } from 'consts/design'

const styles = {
  pageContainer: {
    paddingTop: 50,
  },
  previewContainer: {
    border: `1px solid rgba(0, 0, 0, 0.2)`,
    padding: 20,
    textAlign: `center`,
    borderRadius: borderRadii.medium,
    '&:hover': {
      borderColor: `black`,
    },
  },
  postHeader: {
    fontSize: fontSizes.heading,
    marginBottom: 40,
  },
  postSummary: {
    // color: `white`,
  },
}

const PostPreview = ({ post }) => (
  <div css={styles.previewContainer}>
    <h2 css={styles.postHeader}>{post.frontmatter.title}</h2>
    <p css={styles.postSummary}>{post.frontmatter.summary}</p>
  </div>
)

// title="Front End Posts"
// description="leopold wicht front end posts about javascript and react"
// backgroundColor={colors.lightYellow}

const IndexPage = ({
  data: { allMdx: { edges: posts } },
}) => (
  <ContentContainer>
    <main css={styles.pageContainer}>
      {posts.map(({ node: post }) => (
        <UnstyledLink to={post.fields.slug} key={post.id}>
          <PostPreview post={post} />
        </UnstyledLink>
      ))}
    </main>
  </ContentContainer>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            summary
          }
          fields {
            slug
          }
        }
      }
    }
  }
`