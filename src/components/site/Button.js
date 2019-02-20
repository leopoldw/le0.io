import React from 'react'
import UnstyledLink from './UnstyledLink'

const CSS = {
  color: `white`,
  padding: 8,
  background: `rgba(255, 255, 255, 0.2)`,
  '&:hover': {
    background: `rgba(255, 255, 255, 0.4)`,
  },
}

const Button = ({ to, children }) =>
  <UnstyledLink to={to} css={CSS}>
    <div css={CSS}>{children}</div>
  </UnstyledLink>

export default Button