import React from 'react'

const CSS = {
  fontWeight: `bold`,
  lineHeight: `1em`,
  paddingBottom: 20,
  paddingTop: 40,
}

const H3 = props =>
  <h3 css={CSS} {...props} />

export default H3