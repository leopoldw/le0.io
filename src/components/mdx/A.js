import React from 'react'
import { colors, animationSpeeds } from 'consts/design'
import useDarkMode from 'hooks/useDarkMode'

const style = {
  default: {
    color: colors.darkBlue,
    transition: `color ${animationSpeeds.normal}ms linear`,
    '&:hover': {
      textDecoration: `none`,
    },
  },
  darkMode: {
    color: colors.yellow,
  },
}

const A = props => {
  const darkMode = useDarkMode()

  return (
    <a css={[style.default, darkMode && style.darkMode]} target="_blank" {...props} />
  )
}

export default A
