import React, { useContext } from 'react'
import { colors } from 'consts/design'
import { DarkModeContext } from 'pages/post'

const style = {
  default: {
    color: colors.darkBlue,
    '&:hover': {
      textDecoration: `none`,
    },
  },
  darkMode: {
    color: colors.yellow,
  },
}

const A = props => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <a css={[style.default, darkMode && style.darkMode]} target="_blank" {...props} />
  )
}

export default A
