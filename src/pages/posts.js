import React from 'react'
import { graphql } from 'gatsby'
import PageConfig from '../PageConfig'
import ContentContainer from 'components/blog/ContentContainer'
import UnstyledLink from 'components/site/UnstyledLink'
import Branding from 'components/blog/Branding'
import PostMeta from 'components/site/PostMeta'
import { colors, fontSizes, borderRadii } from 'consts/design'
import useDarkMode from 'hooks/useDarkMode'

const styles = {
  pageContainer: {
    paddingTop: 50,
  },
  previewContainer: {
    border: `3px solid rgba(0, 0, 0, 0.2)`,
    padding: 20,
    textAlign: `center`,
    borderRadius: borderRadii.medium,
    color: colors.almostBlack,
    '&:hover': {
      borderColor: colors.darkBlue,
    },
  },
  previewContainerDark: {
    borderColor: colors.mediumYellow,
    color: colors.mediumGrey,
    '&:hover': {
      borderColor: colors.yellow,
    },
  },
  postHeader: {
    color: colors.darkBlue,
    fontSize: fontSizes.previewHeading,
    marginBottom: 20,
  },
  postMeta: {
    marginBottom: 20,
  },
  postHeaderDark: {
    color: colors.almostWhite,
  },
  description: {
    lineHeight: `1.1em`,
    color: colors.darkGrey,
  },
  descriptionDark: {
    color: colors.mediumGrey,
  },
}

const PostPreview = ({ post, darkMode }) => (
  <div css={[styles.previewContainer, darkMode && styles.previewContainerDark]}>
    <h2 css={[styles.postHeader, darkMode && styles.postHeaderDark]}>{post.frontmatter.title}</h2>
    <div css={[styles.postMeta]}>
      <PostMeta date={post.frontmatter.date} timeToRead={post.timeToRead} />
    </div>
    <div css={[styles.description, darkMode && styles.descriptionDark]}>{post.frontmatter.description}</div>
  </div>
)

const Posts = ({
  data: { allMdx: { edges: posts } },
  location: { pathname },
}) => {
  const darkMode = useDarkMode()

  return (
    <ContentContainer header={<Branding />}>
      <PageConfig
        title="Posts"
        path={pathname}
      />
      <main css={styles.pageContainer}>
        {posts.map(({ node: post }) => (
          <UnstyledLink to={post.fields.slug} key={post.id}>
            <PostPreview post={post} darkMode={darkMode} />
          </UnstyledLink>
        ))}
      </main>
    </ContentContainer>
  )
}

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