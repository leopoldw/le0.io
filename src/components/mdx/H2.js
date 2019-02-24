import React, { useRef } from 'react'
import { fontSizes, sizes, colors } from 'consts/design'
import LinkSVG from 'assets/link.svg'
import uniqid from 'uniqid'


const style = {
  header: {
    fontSize: fontSizes.subheading,
    fontWeight: `600`,
    lineHeight: `1em`,
    marginBottom: sizes.headerSpacing,
    position: `relative`,
    '& a': {
      visibility: `hidden`,
    },
    '&:hover a': {
      visibility: `visible`,
    },
  },
  link: {
    position: `absolute`,
    left: -30,
    top: 1,
    color: colors.darkBlue,
    paddingRight: 10,
    '&:hover': {
      color: colors.mediumBlue,
    },
  },
}

const H2 = ({ children, ...rest }) => {
  const idRef = useRef()

  if (!idRef.current)
    idRef.current = uniqid(`link-`)

  return (
    <h2 css={style.header} id={idRef.current} name={idRef.current} {...rest}>
      <a css={style.link} href={`#${idRef.current}`} aria-hidden>
        <LinkSVG />
      </a>
      {children}
    </h2>
  )
}

export default H2