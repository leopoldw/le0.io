import React from 'react'
import { colors, sizes, borderRadii, fontSizes } from 'consts/design'

const styles = {
  container: {
    fontSize: fontSizes.larger,
    position: `relative`,
    fontStyle: `italic`,
    background: colors.standout,
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
    background: colors.yellow,
    position: `absolute`,
    top: 0,
    left: -15,
    borderRadius: borderRadii.small,
  },
}

const Blockquote = ({ children }) =>
  <div css={styles.container}>
    <div css={styles.bookmark} />
    {children}
  </div>

export default Blockquote