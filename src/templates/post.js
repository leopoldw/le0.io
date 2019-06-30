import React, { memo } from 'react'
import { graphql } from 'gatsby'
import PageConfig from '../PageConfig'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Branding from 'components/blog/Branding'
import mdxComponents from 'components/mdx'
import { animationSpeeds, fontSizes } from 'consts/design'
import ContentContainer from 'components/blog/ContentContainer'
import PostMeta from 'components/site/PostMeta'
import Aside from 'components/blog/Aside'
import A from 'components/mdx/A'

const styles = {
  article: ({ primaryText }) => ({
    transition: `color ${animationSpeeds.normal}ms linear`,
    paddingTop: 100,
    marginBottom: 100,
    color: primaryText,
  }),
  articleHeader: {
    marginBottom: 50,
  },
  heading: {
    fontSize: fontSizes.heading,
    marginBottom: 20,
    fontWeight: `600`,
    lineHeight: `1em`,
  },
  articleBody: {
    lineHeight: `1.45em`,
    letterSpacing: `1px`,
  },
  footer: {
    display: `flex`,
  },
  footerBrandingContainer: {
    flexBasis: `40%`,
  },
  footerMetaContainer: {
    flexBasis: `60%`,
    textAlign: `right`,
  },
}

// TODO: add post back link
// TODO: add post edit link
// TODO: add contact link

// expensive operation, so memoize inner component
const PostContent = memo(({ body }) => (
  <MDXProvider components={mdxComponents}>
    <MDXRenderer>{body}</MDXRenderer>
  </MDXProvider>
))

const Post = ({
  data: { mdx: { timeToRead, frontmatter, code, fields } },
  location: { pathname },
}) => (
  <>
    <PageConfig
      title={frontmatter.title}
      description={frontmatter.description}
      path={pathname}
    />
    <ContentContainer header={<Branding />}>
      <main>
        <article css={styles.article}>
          <header css={styles.articleHeader}>
            <h1 css={styles.heading}>{frontmatter.title}</h1>
            <PostMeta timeToRead={timeToRead} date={frontmatter.date} />
          </header>
          <div css={styles.articleBody}>
            <PostContent body={code.body} />
          </div>
        </article>
      </main>
      <footer css={styles.footer}>
        <div css={styles.footerBrandingContainer}>
          <Branding smaller />
        </div>
        <div css={styles.footerMetaContainer}>
          <Aside header="Spot an issue or want to discuss things further?">
            {`Open a pull request or leave a code comment on `}
            <A href={`https://github.com/leopoldw/le0.io/edit/master/posts/${fields.slug}/index.mdx`}>Github</A>.
          </Aside>
        </div>
      </footer>
    </ContentContainer>
  </>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      frontmatter {
        title
        date
        description
      }
      code {
        body
      }
      fields {
        slug
        path
      }
    }
  }
`

export default Post