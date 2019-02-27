import React, { useContext } from 'react'
import { sizes, colors } from 'consts/design'
import { DarkModeContext } from 'pages/post'

const style = {
  default: {
    margin: `${sizes.paragraphSpacing}px 0`,
    border: 0,
    borderBottom: `1px solid ${colors.mediumGrey}`,
  },
  dark: {
    borderBottom: `1px solid ${colors.standout}`,
  },
}

const Hr = props => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <hr css={[style.default, darkMode && style.dark]} {...props} />
  )
}

export default Hr