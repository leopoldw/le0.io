import React from 'react'
import { sizes } from 'consts/design'

const CSS = {
  marginBottom: sizes.paragraphSpacing,
}

const Ul = props =>
  <ul css={CSS} {...props} />

export default Ul