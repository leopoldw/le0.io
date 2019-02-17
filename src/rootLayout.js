import React from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'
import ReactHelmet from 'react-helmet'
import fonts from './fonts'
import { animationSpeeds } from 'consts/design'

const styles = {
  global: {
    'html, body, #___gatsby, #___gatsby > div': {
      width: `100%`,
      height: `100%`,
      transition: `background ${animationSpeeds.normal}ms linear`,
    },
  },
  fonts: css`
    @font-face {
      font-family: 'Archery Black';
      src: url('${fonts.ArcheryBlack}') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Exo2Light';
      src: url('${fonts.Exo2Light_woff2}') format('woff2'),
          url('${fonts.Exo2Light_woff}') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Exo2';
      src: url('${fonts.Exo2Regular_woff2}') format('woff2'),
          url('${fonts.Exo2Regular_woff}') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Exo2Bold';
      src: url('${fonts.Exo2Bold_woff2}') format('woff2'),
          url('${fonts.Exo2Bold_woff}') format('woff');
      font-weight: normal;
      font-style: normal;
    }
  `,
  root: {
    width: `100%`,
    height: `100%`,
    fontFamily: `Exo2`,
    letterSpacing: `0.05em`,
    fontWeight: `300`,
  },
}

const RootLayout = ({ children, title, description, backgroundColor }) => (
  <div css={styles.root}>
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </ReactHelmet>
    <Global styles={styles.fonts} />
    <Global styles={emotionReset} />
    <Global styles={styles.global} />
    <Global styles={{ 'html, body': { background: backgroundColor } }} />
    {children}
  </div>
)

export default RootLayout