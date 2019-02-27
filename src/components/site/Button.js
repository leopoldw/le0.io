import React from 'react'
import { Link } from 'gatsby'
import { borderRadii } from 'consts/design'

const CSS = {
  color: `rgba(255, 255, 255, 0.8)`,
  display: `inline-block`,
  textDecoration: `none`,
  padding: 8,
  borderRadius: borderRadii.small,
  background: `rgba(255, 255, 255, 0.2)`,
  '&:hover': {
    background: `rgba(255, 255, 255, 0.4)`,
    color: `white`,
  },
}

const To = ({ to, children }) =>
  <Link to={to} css={CSS}>
    {children}
  </Link>

const Href = ({ href, children }) =>
  <a href={href} css={CSS} target="_blank noopener">
    {children}
  </a>

const Button = ({ to, href, children }) =>
  href
    ? <Href href={href}>{children}</Href>
    : <To to={to}>{children}</To>

export default Button