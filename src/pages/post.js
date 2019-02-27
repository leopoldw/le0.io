import React, { useState, useEffect, createContext, memo } from 'react'
import { graphql } from 'gatsby'
import RootLayout from 'rootLayout'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Branding from 'components/blog/Branding'
import mdxComponents from 'components/mdx'
import { colors, animationSpeeds, fontSizes } from 'consts/design'
import MoonSVG from 'assets/moon.svg'
import SunSVG from 'assets/sun.svg'
import dateformat from 'dateformat'
import ContentContainer from 'components/blog/ContentContainer'


const styles = {
  pageHeader: {
    marginTop: 60,
    marginBottom: 100,
  },
  article: {
    transition: `color ${animationSpeeds.normal}ms linear`,
    marginBottom: 120,
  },
  articleHeader: {
    marginBottom: 50,
  },
  heading: {
    fontSize: fontSizes.heading,
    marginBottom: 20,
    fontWeight: `600`,
    lineHeight: `1em`,
  },
  subheading: {
    fontSize: fontSizes.subtext,
    fontStyle: `italic`,
    letterSpacing: `0.5px`,
  },
  articleBody: {
    lineHeight: `1.45em`,
    letterSpacing: `1px`,
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
  article: {
    color: colors.almostBlack,
  },
}

const darkStyles = {
  backgroundColor: colors.darkGrey,
  article: {
    color: colors.almostWhite,
  },
  SVG: {
    color: colors.almostWhite,
  },
  blogFooterDescription: {
    color: colors.yellow,
  },
}

const getCSS = (key, darkMode) => [
  styles[key],
  darkMode ? darkStyles[key] : lightStyles[key],
].filter(style => style)

// special helper to reduce boilerplate
// for dark mode styling
const DarkModeContext = createContext()
const DARK_MODE_STORAGE_KEY = `DARK_MODE`
const withDarkMode = () => {
  const hasLocalStorage = typeof window === `object` && `localStorage` in window

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

// TODO: add post back link
// TODO: add post edit link
// TODO: add contact link

// expensive operation, so memoize inner component
const PostContent = memo(({ body }) => (
  <MDXProvider components={mdxComponents}>
    <MDXRenderer>{body}</MDXRenderer>
  </MDXProvider>
))

const Post = ({ data: { mdx: { timeToRead, frontmatter, code } } }) => {
  const { darkMode, toggleDarkMode } = withDarkMode()

  return (
    <DarkModeContext.Provider value={{ darkMode }}>
      <RootLayout
        title={frontmatter.title}
        description={frontmatter.description}
        backgroundColor={getCSS(`backgroundColor`, darkMode)}
      >
        <div css={getCSS(`darkModeToggle`)} onClick={toggleDarkMode}>
          <div css={getCSS(`darkModeInner`)}>
            <MoonSVG css={[getCSS(`SVG`, darkMode), darkMode && getCSS(`SVGHidden`, darkMode)]} />
            <SunSVG css={[getCSS(`SVG`, darkMode), !darkMode && getCSS(`SVGHidden`, darkMode)]} />
          </div>
        </div>
        <ContentContainer>
          <header css={getCSS(`pageHeader`)}>
            <Branding />
          </header>
          <main>
            <article css={getCSS(`article`, darkMode)}>
              <header css={getCSS(`articleHeader`)}>
                <h1 css={getCSS(`heading`)}>{frontmatter.title}</h1>
                <div css={getCSS(`subheading`)}>{`${dateformat(frontmatter.date, `dS mmmm, yyyy`)} - ${timeToRead} min read`}</div>
              </header>
              <div css={getCSS(`articleBody`, darkMode)}>
                <PostContent body={code.body} />
              </div>
            </article>
          </main>
          <footer>
            <Branding smaller />
          </footer>
        </ContentContainer>
      </RootLayout>
    </DarkModeContext.Provider>
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
      }
      code {
        body
      }
    }
  }
`

export default Post
export { DarkModeContext }