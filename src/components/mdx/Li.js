import React from 'react'

const CSS = {
  listStyleType: `square`,
  marginBottom: 5,
  '&:last-child': {
    marginBottom: 0,
  },
}

const Li = props =>
  <li css={CSS} {...props} />

export default Li