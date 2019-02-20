import React from 'react'
import { Link } from 'gatsby'
import { colors } from 'consts/design'

const CSS = {
  color: colors.nearlyBlack,
  textDecoration: `none`,
}

const UnstyledLink = ({ to, children }) =>
  <Link css={CSS} to={to}>{children}</Link>

export default UnstyledLink