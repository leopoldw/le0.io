import React, { useContext } from 'react'
import { colors, fontSizes, sizes, borderRadii } from 'consts/design'
import RightChevron from 'assets/chevrons-right.svg'
import { DarkModeContext } from 'pages/post'

const style = {
  container: {
    fontSize: fontSizes.subtext,
    marginBottom: sizes.paragraphSpacing,
    background: colors.mediumYellow,
    fontStyle: `italic`,
    padding: 10,
    paddingLeft: 40,
    borderRadius: borderRadii.medium,
    position: `relative`,
  },
  containerDark: {
    background: colors.standoutSubtle,
  },
  SVG: {
    color: colors.darkBlue,
    position: `absolute`,
    top: 12,
    left: 10,
  },
  SVGDark: {
    color: colors.yellow,
  },
}

const Aside = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div css={[style.container, darkMode && style.containerDark]}>
      <RightChevron css={[style.SVG, darkMode && style.SVGDark]} />
      {children}
    </div>
  )
}

export default Aside