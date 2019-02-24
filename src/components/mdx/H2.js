import React from 'react'
import { fontSizes } from 'consts/design'

const CSS = {
  fontSize: fontSizes.subheading,
  fontWeight: `bold`,
  lineHeight: `1em`,
  marginBottom: 20,
}

const H2 = props =>
  <h2 css={CSS} {...props} />

export default H2