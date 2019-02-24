import React, { useRef, useContext } from 'react'
import { fontSizes, sizes, colors } from 'consts/design'
import LinkSVG from 'assets/link.svg'
import uniqid from 'uniqid'
import { DarkModeContext } from 'pages/post'


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
    paddingRight: 10,
    opacity: 0.8,
    ':hover': {
      opacity: 1,
    },
  },
  linkLight: {
    color: colors.darkBlue,
  },
  linkDark: {
    color: colors.yellow,
  },
}

const H2 = ({ children, ...rest }) => {
  const idRef = useRef()

  if (!idRef.current)
    idRef.current = uniqid(`link-`)

  const { darkMode } = useContext(DarkModeContext)

  return (
    <h2 css={style.header} id={idRef.current} name={idRef.current} {...rest}>
      <a css={[style.link, darkMode ? style.linkDark : style.linkLight]} href={`#${idRef.current}`} aria-hidden>
        <LinkSVG />
      </a>
      {children}
    </h2>
  )
}

export default H2