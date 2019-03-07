import React from 'react'
import { Link } from 'gatsby'

const CSS = {
  color: `inherit`,
  textDecoration: `none`,
}

const UnstyledLink = ({ to, children }) =>
  <Link css={CSS} to={to}>{children}</Link>

export default UnstyledLink