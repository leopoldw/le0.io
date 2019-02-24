import React from 'react'
import { colors, fontSizes, sizes, borderRadii } from 'consts/design'
import RightChevron from 'assets/chevrons-right.svg'

const style = {
  container: {
    fontSize: fontSizes.subtext,
    marginBottom: sizes.paragraphSpacing,
    background: colors.lightYellowOffset,
    fontStyle: `italic`,
    padding: 10,
    paddingLeft: 40,
    borderRadius: borderRadii.medium,
    position: `relative`,
  },
  SVG: {
    color: colors.darkGrey,
    position: `absolute`,
    top: 12,
    left: 10,
  },
}

const Aside = ({ children }) =>
  <div css={style.container}>
    <RightChevron css={style.SVG} />
    {children}
  </div>

export default Aside