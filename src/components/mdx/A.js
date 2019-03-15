import React from 'react'
import { animationSpeeds } from 'consts/design'

const style = {
  default: ({ bold }) => ({
    color: bold,
    transition: `color ${animationSpeeds.normal}ms linear`,
    '&:hover': {
      textDecoration: `none`,
    },
  }),
}

const A = props => (
  <a css={style.default} target="_blank" rel="noopener" {...props} />
)

export default A
