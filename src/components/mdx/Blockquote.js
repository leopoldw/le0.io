import React from 'react'
import { colors } from 'consts/design'

const styles = {
  container: {
    fontSize: 20,
    position: `relative`,
  },
  bookmark: {
    width: 5,
    height: `100%`,
    background: colors.yellow,
    position: `absolute`,
    top: 0,
    left: -20,
  },
}

const Blockquote = ({ children }) =>
  <div css={styles.container}>
    <div css={styles.bookmark} />
    {children}
  </div>

export default Blockquote