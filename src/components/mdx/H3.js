import React from 'react'
import { fontSizes } from 'consts/design'

const CSS = {
  fontSize: fontSizes.larger,
  fontWeight: `bold`,
  lineHeight: `1em`,
  marginBottom: 20,
}

const H3 = props =>
  <h3 css={CSS} {...props} />

export default H3