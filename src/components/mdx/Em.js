import React from 'react'

const CSS = {
  fontStyle: `italic`,
}

const Em = props =>
  <em css={CSS} {...props} />

export default Em