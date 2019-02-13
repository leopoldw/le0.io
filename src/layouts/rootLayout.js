import React from 'react'
import emotionReset from 'emotion-reset'
import { Global } from '@emotion/core'
import ReactHelmet from 'react-helmet'

const rootCSS = {
  width: `100%`,
  height: `100%`,
  fontFamily: `Open Sans`,
  letterSpacing: `0.01em`,
  fontWeight: `300`,
}

const globalCSS = {
  'html, body, #___gatsby, #___gatsby > div': {
    width: `100%`,
    height: `100%`,
  },
}

const RootLayout = ({ children }) => (
  <div css={rootCSS}>
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>Leo Site</title>
    </ReactHelmet>
    <Global styles={emotionReset} />
    <Global styles={globalCSS} />
    {children}
  </div>
)

export default RootLayout