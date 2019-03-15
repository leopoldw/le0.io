import React, { memo, useState } from 'react'
import emotionReset from 'emotion-reset'
import { Global } from '@emotion/core'
import { animationSpeeds, colors } from 'consts/design'
import { ThemeProvider } from 'emotion-theming'
import themes from 'consts/themes'
import MoonSVG from 'assets/moon.svg'
import SunSVG from 'assets/sun.svg'

const styles = {
  global: ({ background }) => ({
    'html, body': {
      background,
    },
    'html, body, #___gatsby, #___gatsby > div': {
      width: `100%`,
      height: `100%`,
      transition: `background ${animationSpeeds.normal}ms linear`,
    },
    body: {
      fontFamily: `"Exo 2", Helvetica, Arial, sans-serif`,
      fontWeight: 300,
      fontSize: 20,
      textRendering: `optimizeLegibility`,
    },
  }),
  root: {
    width: `100%`,
    height: `100%`,
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
    width: `100%`,
    height: `100%`,
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
  SVGSun: {
    color: colors.almostBlack,
  },
  SVGMoon: {
    color: colors.almostWhite,
  },
  SVGHidden: {
    transform: `rotateX(-180deg)`,
  },
}

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return {
    darkMode,
    toggleDarkMode,
  }
}

const Root = ({ children, location }) => {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const theme = darkMode ? themes.dark : themes.light

  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <Global styles={emotionReset} />
        <Global styles={styles.global(theme)} />

        {children}

        {location.pathname !== `/` && (
          <div css={styles.darkModeToggle} onClick={toggleDarkMode}>
            <div css={styles.darkModeInner}>
              <MoonSVG css={[styles.SVG, styles.SVGSun, darkMode && styles.SVGHidden]} />
              <SunSVG css={[styles.SVG, styles.SVGMoon, !darkMode && styles.SVGHidden]} />
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Root