import React from 'react'
import { graphql } from 'gatsby'
import RootLayout from '../rootLayout'
import ContentContainer from 'components/blog/ContentContainer'
import UnstyledLink from 'components/site/UnstyledLink'
import { colors, fontSizes, borderRadii } from 'consts/design'

const styles = {
  pageContainer: {
    paddingTop: 50,
  },
  previewContainer: {
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    padding: 20,
    textAlign: `center`,
    borderRadius: borderRadii.medium,
    '&:hover': {
      borderColor: `white`,
    },
  },
  postHeader: {
    fontSize: fontSizes.heading,
    marginBottom: 40,
    color: colors.yellow,
  },
  postSummary: {
    color: `white`,
  },
}

const PostPreview = ({ post }) => (
  <div css={styles.previewContainer}>
    <h2 css={styles.postHeader}>{post.frontmatter.title}</h2>
    <p css={styles.postSummary}>{post.frontmatter.summary}</p>
  </div>
)

const IndexPage = ({
  data: { allMdx: { edges: posts } },
}) => (
  <RootLayout
    title="Frontend Posts"
    description="TODO"
    backgroundColor={colors.mediumBlue}
  >
    <ContentContainer>
      <main css={styles.pageContainer}>
        {posts.map(({ node: post }) => (
          <UnstyledLink to={post.fields.slug} key={post.id}>
            <PostPreview post={post} />
          </UnstyledLink>
        ))}
      </main>
    </ContentContainer>
  </RootLayout>
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