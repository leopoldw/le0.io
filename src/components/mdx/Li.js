import React from 'react'
import { fontSizes } from 'consts/design'

const CSS = {
  listStyleType: `square`,
  fontSize: fontSizes.smaller,
  marginBottom: 10,
  '&:last-child': {
    marginBottom: 0,
  },
}

const Li = props =>
  <li css={CSS} {...props} />

export default Li