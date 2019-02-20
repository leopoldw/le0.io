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
      // transition: `background ${animationSpeeds.normal}ms linear`,
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
}

const RootLayout = ({ children, title, description, backgroundColor }) => (
  <div css={styles.root}>
    <ReactHelmet>
      <title>{title ? `${title} - le0.io` : `le0.io`}</title>
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