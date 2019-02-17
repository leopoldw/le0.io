import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import RootLayout from 'rootLayout'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import mdxComponents from 'components/mdx'
import { sizes, colors, animationSpeeds } from 'consts/design'
import MoonSVG from 'assets/moon.svg'
import SunSVG from 'assets/sun.svg'


const styles = {
  container: {
    maxWidth: sizes.contentMaxWidth,
    margin: `0 auto`,
  },
  pageHeader: {
    marginBottom: 40,
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
    fontSize: 40,
    marginBottom: 20,
    fontWeight: `600`,
  },
  subheading: {
    fontSize: 18,
    fontStyle: `italic`,
    letterSpacing: `0.5px`,
  },
  articleBody: {
  },
  darkModeToggle: {
    position: `fixed`,
    right: 10,
    top: 10,
    width: 40,
    height: 40,
    cursor: `pointer`,
    opacity: 0.5,
    '&: hover': {
      opacity: 1,
    },
  },
  darkModeInner: {
    background: `red`,
    display: `relative`,
    '& > svg': {
      width: `100%`,
      height: `100%`,
    },
  },
  SVG: {
    transition: `transform ${animationSpeeds.normal}ms linear`,
    backfaceVisibility: `hidden`,
    position: `absolute`,
    top: 0,
    left: 0,
  },
  SVGHidden: {
    transform: `rotateX(-180deg)`,
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

const getCSS = (key, darkMode) => [
  styles[key],
  darkMode ? darkStyles[key] : lightStyles[key],
].filter(style => style)

// special helper to reduce boilerplate
// for dark mode styling
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
        <div css={getCSS(`darkModeToggle`)} onClick={toggleDarkMode}>
          <div css={getCSS(`darkModeInner`)}>
            <MoonSVG css={[getCSS(`SVG`), darkMode && getCSS(`SVGHidden`)]} />
            <SunSVG css={[getCSS(`SVG`), !darkMode && getCSS(`SVGHidden`)]} />
          </div>
        </div>
        <div css={getCSS(`container`)}>
          <div css={getCSS(`pageHeader`)}>
            <div css={getCSS(`avatar`)} style={{ backgroundImage: `url(${childImageSharp.fixed.src})` }} />
            <div css={getCSS(`logo`, darkMode)}>le0.io</div>
          </div>
          <main>
            <article>
              <header css={getCSS(`articleHeader`)}>
                <h1 css={getCSS(`heading`)}>{frontmatter.title}</h1>
                <div css={getCSS(`subheading`)}>{`${frontmatter.date} - ${timeToRead} min read`}</div>
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