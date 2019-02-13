import React, { useState, useRef } from 'react'

const dottedLineCSS = {
  position: `fixed`,
  background: `red`,
  opacity: 0.5,
}

const verticalCSS = {
  ...dottedLineCSS,
  width: 1,
  height: `100vh`,
  top: 0,
}

const horizontalCSS = {
  ...dottedLineCSS,
  height: 1,
  width: `100vw`,
  left: 0,
}

const Guidelines = ({ children }) => {
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
    >
      {hasHover && (
        <>
          <div css={verticalCSS} style={{ left: `${rect.x}px` }} />
          <div css={verticalCSS} style={{ left: `${rect.x + rect.width}px` }} />
          <div css={horizontalCSS} style={{ top: `${rect.y}px` }} />
          <div css={horizontalCSS} style={{ top: `${rect.y + rect.height}px` }} />
        </>
      )}

      {children}
    </div>
  )
}

export default Guidelines