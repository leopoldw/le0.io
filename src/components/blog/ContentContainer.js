import React from 'react'
import { sizes } from 'consts/design'

const CSS = {
  maxWidth: sizes.contentMaxWidth,
  margin: `0 auto 80px auto`,
  padding: `0 20px`,
}

const ContentContainer = ({ children }) => (
  <div css={CSS}>{children}</div>
)

export default ContentContainer