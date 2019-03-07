import React from 'react'
import { colors, sizes, borderRadii, animationSpeeds } from 'consts/design'
import useDarkMode from 'hooks/useDarkMode'

const styles = {
  container: {
    position: `relative`,
    fontStyle: `italic`,
    background: colors.almostWhite,
    borderRadius: borderRadii.small,
    padding: 15,
    marginBottom: sizes.paragraphSpacing,
    transition: `background ${animationSpeeds.normal}ms linear`,
    '& p:last-child': {
      marginBottom: 0,
    },
  },
  bookmark: {
    transition: `background ${animationSpeeds.normal}ms linear`,
    width: 6,
    height: `100%`,
    background: colors.darkBlue,
    position: `absolute`,
    top: 0,
    left: -10,
    borderRadius: borderRadii.small,
  },
  containerDark: {
    background: colors.standoutSubtle,
  },
  bookmarkDark: {
    background: colors.yellow,
  },
}

const Blockquote = ({ children }) => {
  const darkMode = useDarkMode()

  return (
    <div css={[styles.container, darkMode && styles.containerDark]}>
      <div css={[styles.bookmark, darkMode && styles.bookmarkDark]} />
      {children}
    </div>
  )
}

export default Blockquote