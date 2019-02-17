import React from 'react'
import { sizes } from 'consts/design'

const CSS = {
  marginBottom: sizes.paragraphSpacing,
}

const P = props =>
  <p css={CSS} {...props} />

export default P