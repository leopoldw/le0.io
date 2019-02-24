import React from 'react'
import { colors } from 'consts/design'

const CSS = {
  color: colors.darkBlue,
  '&:hover': {
    color: colors.mediumBlue,
  },
}

const A = props =>
  <a css={CSS} target="_blank" {...props} />

export default A
