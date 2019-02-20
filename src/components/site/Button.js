import React from 'react'
import UnstyledLink from './UnstyledLink'
import { borderRadii } from 'consts/design'

const CSS = {
  color: `white`,
  display: `inline-block`,
  padding: 8,
  borderRadius: borderRadii.small,
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