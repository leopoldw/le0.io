import React from 'react'
import { sizes } from 'consts/design'

const CSS = {
  marginBottom: sizes.paragraphSpacing,
}

const P = ({ children }) =>
  <div css={CSS}>{children}</div>

export default P