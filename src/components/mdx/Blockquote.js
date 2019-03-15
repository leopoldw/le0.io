import React from 'react'
import { sizes, borderRadii, animationSpeeds } from 'consts/design'

const styles = {
  container: ({ standout }) => ({
    position: `relative`,
    fontStyle: `italic`,
    background: standout,
    borderRadius: borderRadii.small,
    padding: 15,
    marginBottom: sizes.paragraphSpacing,
    transition: `background ${animationSpeeds.normal}ms linear`,
    '& p:last-child': {
      marginBottom: 0,
    },
  }),
  bookmark: ({ bold }) => ({
    transition: `background ${animationSpeeds.normal}ms linear`,
    width: 6,
    height: `100%`,
    background: bold,
    position: `absolute`,
    top: 0,
    left: -10,
    borderRadius: borderRadii.small,
  }),
}

const Blockquote = ({ children }) => (
  <div css={styles.container}>
    <div css={styles.bookmark} />
    {children}
  </div>
)

export default Blockquote