import React from 'react'
import { sizes } from 'consts/design'

const CSS = {
  marginBottom: sizes.paragraphSpacing,
  marginLeft: 25,
}

const Ul = props =>
  <ul css={CSS} {...props} />

export default Ul