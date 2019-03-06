import React, { createContext, useState } from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'
import fonts from './fonts'
import { animationSpeeds, colors } from 'consts/design'
import MoonSVG from 'assets/moon.svg'
import SunSVG from 'assets/sun.svg'

const styles = {
  global: {
    'html, body, #___gatsby, #___gatsby > div': {
      width: `100%`,
      height: `100%`,
      transition: `background ${animationSpeeds.normal}ms linear`,
    },
    body: {
      fontFamily: `"Exo 2"`,
      fontWeight: `300`,
      fontSize: 20,
      textRendering: `optimizeLegibility`,
    },
  },
  fonts: css`
    @font-face {
      font-family: 'Archery Black';
      src: url('${fonts.ArcheryBlack}') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }
  `,
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

const DarkModeContext = createContext()
const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return {
    darkMode,
    toggleDarkMode,
  }
}

const Root = ({ children, location }) => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <DarkModeContext.Provider value={{ darkMode }}>
      <div css={styles.root}>
        <Global styles={styles.fonts} />
        <Global styles={emotionReset} />
        <Global styles={styles.global} />
        <Global styles={{ 'html, body': { background: darkMode ? colors.darkGrey : colors.lightYellow } }} />

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
    </DarkModeContext.Provider>
  )
}

export default Root
export { DarkModeContext }