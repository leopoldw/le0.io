import React from 'react'
import { graphql } from 'gatsby'
import PageConfig from '../PageConfig'
import ContentContainer from 'components/blog/ContentContainer'
import UnstyledLink from 'components/site/UnstyledLink'
import Branding from 'components/blog/Branding'
import PostMeta from 'components/site/PostMeta'
import { fontSizes, borderRadii, mediaQueries } from 'consts/design'

const styles = {
  pageContainer: {
    paddingTop: 50,
  },
  previewContainer: ({ bold, border, secondaryText, cardHover }) => ({
    borderLeft: `5px solid ${border}`,
    borderRight: `5px solid ${border}`,
    padding: 20,
    color: secondaryText,
    '&:hover': {
      color: bold,
      borderColor: bold,
      background: cardHover,
    },
    [mediaQueries.tablet]: {
      border: `none`,
      padding: 0,
    },
    [mediaQueries.mobile]: {
      fontSize: fontSizes.smaller,
    },
  }),
  postHeader: ({ bold }) => ({
    color: bold,
    fontSize: fontSizes.previewHeading,
    marginBottom: 20,
    fontWeight: 600,
  }),
  postMeta: {
    marginBottom: 10,
  },
  description: ({ secondaryText }) => ({
    lineHeight: `1.1em`,
    fontSize: fontSizes.smaller,
    [mediaQueries.mobile]: {
      display: `none`,
    },
  }),
}

const PostPreview = ({ post }) => (
  <div css={styles.previewContainer}>
    <div css={[styles.postMeta]}>
      <PostMeta date={post.frontmatter.date} timeToRead={post.timeToRead} />
    </div>
    <h2 css={styles.postHeader}>{post.frontmatter.title}</h2>
    <div css={styles.description}>{post.frontmatter.description}</div>
  </div>
)

const Posts = ({
  data: { allMdx: { edges: posts } },
  location: { pathname },
}) => (
  <ContentContainer header={<Branding />}>
    <PageConfig
      title="Posts"
      path={pathname}
    />
    <main css={styles.pageContainer}>
      {posts.map(({ node: post }) => (
        <UnstyledLink to={post.fields.slug} key={post.id}>
          <PostPreview post={post} />
        </UnstyledLink>
        ))}
    </main>
  </ContentContainer>
)

export default Posts

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`