import React from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'
import ReactHelmet from 'react-helmet'
import fonts from '../fonts'

const rootCSS = {
  width: `100%`,
  height: `100%`,
  fontFamily: `Exo2`,
  letterSpacing: `0.05em`,
  fontWeight: `300`,
}

const globalFonts = css`
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
`

const globalCSS = {
  'html, body, #___gatsby, #___gatsby > div': {
    width: `100%`,
    height: `100%`,
  },
}

const RootLayout = ({ children, title, description }) => (
  <div css={rootCSS}>
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </ReactHelmet>
    <Global styles={globalFonts} />
    <Global styles={emotionReset} />
    <Global styles={globalCSS} />
    {children}
  </div>
)

export default RootLayout