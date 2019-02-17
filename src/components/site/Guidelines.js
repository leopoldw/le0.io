import React, { useState, useRef } from 'react'

const containerCSS = {
  position: `relative`,
  display: `inline-block`,
}

const infoCSS = {
  backgroundColor: `white`,
  top: 0,
  left: 0,
  position: `absolute`,
  padding: 3,
  opacity: 0.6,
  // design?
  fontSize: 12,
  transform: `translateY(-100%)`,
}

const hoverCSS = {
  backgroundColor: `white`,
  opacity: 0.1,
  width: `100%`,
  height: `100%`,
  position: `absolute`,
  top: 0,
  left: 0,
}

const dottedLineCSS = {
  position: `fixed`,
}

const verticalCSS = {
  ...dottedLineCSS,
  width: 0,
  height: `100vh`,
  top: 0,
  borderLeft: `1px dotted white`,
}

const horizontalCSS = {
  ...dottedLineCSS,
  height: 0,
  width: `100vw`,
  left: 0,
  borderTop: `1px dotted white`,
}

const Guidelines = ({ children, disabled }) => {
  if (disabled)
    return children

  const containerRef = useRef()
  const [hasHover, setHasHover] = useState(false)

  let rect
  if (hasHover && containerRef.current)
    rect = containerRef.current.getBoundingClientRect()


  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHasHover(true)}
      onMouseLeave={() => setHasHover(false)}
      css={containerCSS}
    >
      {hasHover && (
        <>
          <div css={infoCSS}>{`${Math.round(rect.width)} x ${Math.round(rect.height)}`}</div>
          <div css={verticalCSS} style={{ left: `${rect.x}px` }} />
          <div css={verticalCSS} style={{ left: `${rect.x + rect.width}px` }} />
          <div css={horizontalCSS} style={{ top: `${rect.y}px` }} />
          <div css={horizontalCSS} style={{ top: `${rect.y + rect.height}px` }} />
          <div css={hoverCSS} />
        </>
      )}

      {children}
    </div>
  )
}

export default Guidelines