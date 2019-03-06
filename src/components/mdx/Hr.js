import React from 'react'
import { sizes, colors } from 'consts/design'
import useDarkMode from 'hooks/useDarkMode'

const style = {
  default: {
    margin: `10px 0`,
    border: 0,
    borderBottom: `1px solid ${colors.mediumGrey}`,
  },
  dark: {
    borderBottom: `1px solid ${colors.standout}`,
  },
}

const Hr = props => {
  const darkMode = useDarkMode()
  return (
    <hr css={[style.default, darkMode && style.dark]} {...props} />
  )
}

export default Hr