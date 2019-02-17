import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import RootLayout from 'rootLayout'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import mdxComponents from 'components/mdx'
import { sizes, colors } from 'consts/design'

const styles = {
  container: {
    maxWidth: sizes.contentMaxWidth,
    margin: `0 auto`,
    fontFamily: `Exo2`,
  },
  pageHeader: {
    marginBottom: 20,
    textAlign: `center`,
  },
  logo: {
    fontSize: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: `100%`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    margin: `0 auto`,
  },
  articleHeader: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 50,
    marginBottom: 20,
  },
  subheading: {

  },
  articleBody: {
    fontSize: 20,
    lineHeight: `1.5em`,
  },
}

const lightStyles = {
  backgroundColor: colors.lightYellow,
  logo: {
    color: colors.darkBlue,
  },
  articleBody: {
    color: colors.almostBlack,
  },
}

const darkStyles = {
  backgroundColor: colors.darkBlue,
  logo: {
    color: colors.yellow,
  },
  articleBody: {
    color: `#fff`,
  },
}

// special helper to reduce boilerplate
// for dark mode styling
const getCSS = (key, darkMode) => [
  styles[key],
  darkMode ? darkStyles[key] : lightStyles[key],
].filter(style => style)

const DARK_MODE_STORAGE_KEY = `DARK_MODE`
const withDarkMode = () => {
  const hasLocalStorage = `localStorage` in window

  const [darkModeString, setDarkMode] = useState(
    hasLocalStorage
      ? JSON.parse(window.localStorage.getItem(DARK_MODE_STORAGE_KEY))
      : false
  )

  const darkMode = JSON.parse(darkModeString)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  useEffect(() => {
    if (hasLocalStorage)
      window.localStorage.setItem(DARK_MODE_STORAGE_KEY, darkMode)
  }, [darkMode])

  return {
    darkMode,
    toggleDarkMode,
  }
}


const Post = ({ data: { mdx: { timeToRead, frontmatter, code }, file: { childImageSharp } } }) => {
  const { darkMode, toggleDarkMode } = withDarkMode()

  return (
    <RootLayout
      title={`${frontmatter.title} - le0.io`}
      description={frontmatter.description}
      backgroundColor={getCSS(`backgroundColor`, darkMode)}
    >
      <MDXProvider components={mdxComponents}>
        <button onClick={toggleDarkMode}>DM</button>
        <div css={getCSS(`container`)}>
          <div css={getCSS(`pageHeader`)}>
            <div css={getCSS(`avatar`)} style={{ backgroundImage: `url(${childImageSharp.fixed.src})` }} />
            <div css={getCSS(`logo`, darkMode)}>le0.io</div>
          </div>
          <main>
            <article>
              <header css={getCSS(`articleHeader`)}>
                <h1 css={getCSS(`heading`)}>{frontmatter.title}</h1>
                <div css={getCSS(`subheading`)}>{`${frontmatter.date} . ${timeToRead} min read`}</div>
              </header>
              <div css={getCSS(`articleBody`, darkMode)}>
                <MDXRenderer>{code.body}</MDXRenderer>
              </div>
            </article>
          </main>
        </div>
      </MDXProvider>
    </RootLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      frontmatter {
        title
        date
        description
        keywords
      }
      code {
        body
      }
    }
    file(name: { eq: "leo" }, extension: { eq: "png" }) {
      childImageSharp {
        id
        fixed(width: 100, height: 100, quality: 75) {
          base64
          src
        }
      }
    }
  }
`

export default Post