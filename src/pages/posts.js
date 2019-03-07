import React from 'react'
import { graphql } from 'gatsby'
import PageConfig from '../PageConfig'
import ContentContainer from 'components/blog/ContentContainer'
import UnstyledLink from 'components/site/UnstyledLink'
import Branding from 'components/blog/Branding'
import { colors, fontSizes, borderRadii } from 'consts/design'
import useDarkMode from 'hooks/useDarkMode'

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
  previewContainerDark: {
    color: colors.almostWhite,
    borderColor: colors.mediumYellow,
    '&:hover': {
      borderColor: colors.yellow,
    },
  },
  postHeader: {
    fontSize: fontSizes.heading,
    marginBottom: 40,
  },
  postHeaderDark: {
    '&:hover': {
      color: colors.yellow,
    },
  },
}

const PostPreview = ({ post, darkMode }) => (
  <div css={[styles.previewContainer, darkMode && styles.previewContainerDark]}>
    <h2 css={[styles.postHeader, darkMode && styles.postHeaderDark]}>{post.frontmatter.title}</h2>
    <p>{post.frontmatter.description}</p>
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`