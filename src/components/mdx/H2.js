import React, { useRef } from 'react'
import { fontSizes, animationSpeeds } from 'consts/design'
import LinkSVG from 'assets/link.svg'

const style = {
  header: {
    fontSize: fontSizes.subheading,
    fontWeight: `600`,
    lineHeight: `1em`,
    marginBottom: 20,
    marginTop: 40,
    position: `relative`,
    '& a': {
      visibility: `hidden`,
    },
    '&:hover a': {
      visibility: `visible`,
    },
  },
  link: ({ bold }) => ({
    position: `absolute`,
    left: -30,
    top: 1,
    paddingRight: 10,
    color: bold,
    opacity: 0.8,
    ':hover': {
      opacity: 1,
    },
    transition: `color ${animationSpeeds.normal}ms linear`,
  }),
}

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
const getHashForKey = key =>
  key
    .split(``)
    .reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0,
    0)


const useUniqueIdForChild = children => {
  const idRefs = useRef()

  // assume header will be either a string
  // or one level deep component
  const key = typeof children === `string`
    ? children
    : children.props.children

  if (!idRefs.current)
  idRefs.current = {}

  if (!idRefs.current[key])
    idRefs.current[key] = getHashForKey(key)

  return idRefs.current[key]
}

const H2 = ({ children, ...rest }) => {
  const id = useUniqueIdForChild(children)

  return (
    <h2 css={style.header} id={id} name={id} {...rest}>
      <a css={style.link} href={`#${id}`} aria-hidden>
        <LinkSVG />
      </a>
      {children}
    </h2>
  )
}

export default H2