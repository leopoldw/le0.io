import React from 'react'
import { sizes, colors } from 'consts/design'

const CSS = {
  margin: `${sizes.paragraphSpacing}px 0`,
  border: 0,
  borderBottom: `1px solid ${colors.mediumGrey}`,
}

const Hr = props =>
  <hr css={CSS} {...props} />

export default Hr