import React from 'react'
import useDarkMode from 'hooks/useDarkMode'
import { colors, fontSizes, sizes, borderRadii, animationSpeeds } from 'consts/design'
import RightChevron from 'assets/chevrons-right.svg'

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
    transition: `background ${animationSpeeds.normal}ms linear`,
  },
  containerDark: {
    background: colors.standoutSubtle,
  },
  header: {
    fontWeight: `600`,
  },
  SVG: {
    color: colors.darkBlue,
    transition: `color ${animationSpeeds.normal}ms linear`,
    position: `absolute`,
    top: 12,
    left: 10,
  },
  SVGDark: {
    color: colors.yellow,
  },
}

const Aside = ({ children, header }) => {
  const darkMode = useDarkMode()
  return (
    <div css={[style.container, darkMode && style.containerDark]}>
      <RightChevron css={[style.SVG, darkMode && style.SVGDark]} />
      {header && <div css={style.header}>{header}</div>}
      {children}
    </div>
  )
}

export default Aside