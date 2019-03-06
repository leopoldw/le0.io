import React from 'react'

const CSS = {
  fontWeight: `bold`,
  lineHeight: `3em`,
}

const H3 = props =>
  <h3 css={CSS} {...props} />

export default H3