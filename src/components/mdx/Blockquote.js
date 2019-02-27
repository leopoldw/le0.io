import React, { useContext } from 'react'
import { colors, sizes, borderRadii } from 'consts/design'
import { DarkModeContext } from 'pages/post'

const styles = {
  container: {
    position: `relative`,
    fontStyle: `italic`,
    background: colors.almostWhite,
    borderRadius: borderRadii.small,
    padding: 15,
    marginBottom: sizes.paragraphSpacing,
    '& p:last-child': {
      marginBottom: 0,
    },
  },
  bookmark: {
    width: 5,
    height: `100%`,
    background: colors.darkBlue,
    position: `absolute`,
    top: 0,
    left: -15,
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
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div css={[styles.container, darkMode && styles.containerDark]}>
      <div css={[styles.bookmark, darkMode && styles.bookmarkDark]} />
      {children}
    </div>
  )
}

export default Blockquote