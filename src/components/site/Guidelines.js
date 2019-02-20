import React, { useState, useRef } from 'react'

const styles = {
  container: {
    position: `relative`,
    display: `inline-block`,
  },
  info: {
    backgroundColor: `white`,
    top: 0,
    left: 0,
    position: `absolute`,
    padding: 3,
    opacity: 0.6,
    // TODO: design?
    fontSize: 12,
    transform: `translateY(-100%)`,
  },
  hover: {
    backgroundColor: `white`,
    opacity: 0.1,
    width: `100%`,
    height: `100%`,
    position: `absolute`,
    top: 0,
    left: 0,
    pointerEvents: `none`,
  },
  dottedLine: {
    position: `fixed`,
  },
  vertical: {
    width: 0,
    height: `100vh`,
    top: 0,
    borderLeft: `1px dotted white`,
  },
  horizontal: {
    height: 0,
    width: `100vw`,
    left: 0,
    borderTop: `1px dotted white`,
  },
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
      css={styles.container}
    >
      {hasHover && (
        <>
          <div css={styles.info}>{`${Math.round(rect.width)} x ${Math.round(rect.height)}`}</div>
          <div css={[styles.dottedLine, styles.vertical]} style={{ left: `${rect.x}px` }} />
          <div css={[styles.dottedLine, styles.vertical]} style={{ left: `${rect.x + rect.width}px` }} />
          <div css={[styles.dottedLine, styles.horizontal]} style={{ top: `${rect.y}px` }} />
          <div css={[styles.dottedLine, styles.horizontal]} style={{ top: `${rect.y + rect.height}px` }} />
          <div css={styles.hover} />
        </>
      )}

      {children}
    </div>
  )
}

export default Guidelines