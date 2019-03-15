import React from 'react'
import { fontSizes, sizes, borderRadii, animationSpeeds } from 'consts/design'
import RightChevron from 'assets/chevrons-right.svg'

const style = {
  container: theme => ({
    fontSize: fontSizes.subtext,
    marginBottom: sizes.paragraphSpacing,
    background: theme.standout,
    fontStyle: `italic`,
    padding: 10,
    paddingLeft: 40,
    borderRadius: borderRadii.medium,
    position: `relative`,
    transition: `background ${animationSpeeds.normal}ms linear`,
  }),
  header: {
    fontWeight: `600`,
  },
  SVG: theme => ({
    color: theme.bold,
    transition: `color ${animationSpeeds.normal}ms linear`,
    position: `absolute`,
    top: 12,
    left: 10,
  }),
}

const Aside = ({ children, header }) => (
  <div css={style.container}>
    <RightChevron css={style.SVG} />
    {header && <div css={style.header}>{header}</div>}
    {children}
  </div>
)

export default Aside