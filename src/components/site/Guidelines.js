import React, { useState, useRef, useLayoutEffect } from 'react'
import isEqual from 'lodash/isEqual'

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

// 2 fast 2 furious
const FLUID_QUERY_INTERVAL = 50

const getPositionsFromRect = rect =>
  rect
    ? ({
        left: Math.round(rect.x),
        right: Math.round(rect.x + rect.width),
        top: Math.round(rect.y),
        bottom: Math.round(rect.y + rect.height),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      })
    : false

const useGuidelinePositions = ({ ref, fluid, hasHover }) => {
  const [positions, setPositions] = useState(false)
  const intervalRef = useRef()

  const queryAndSetPositions = () => {
    let rect
    if (hasHover && ref.current)
      rect = ref.current.getBoundingClientRect()

    const newPositions = getPositionsFromRect(rect)

    if (!isEqual(positions, newPositions))
      setPositions(newPositions)
  }

  queryAndSetPositions()

  useLayoutEffect(() => {
    const clear = () => intervalRef.current && clearInterval(intervalRef.current)

    if (fluid)
      if (hasHover)
        intervalRef.current = setInterval(queryAndSetPositions, FLUID_QUERY_INTERVAL)
      else
        clear()

    return clear
  }, [hasHover])

  return positions
}

const Guidelines = ({ children, disabled, fluid }) => {
  if (disabled)
    return children

  const containerRef = useRef()
  const [hasHover, setHasHover] = useState(false)

  const positions = useGuidelinePositions({ ref: containerRef, fluid, hasHover })

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHasHover(true)}
      onMouseLeave={() => setHasHover(false)}
      css={styles.container}
    >
      {(hasHover && positions) && (
        <>
          <div css={styles.info}>{`${Math.round(positions.width)} x ${Math.round(positions.height)}`}</div>
          <div css={[styles.dottedLine, styles.vertical]} style={{ left: `${positions.left}px` }} />
          <div css={[styles.dottedLine, styles.vertical]} style={{ left: `${positions.right}px` }} />
          <div css={[styles.dottedLine, styles.horizontal]} style={{ top: `${positions.top}px` }} />
          <div css={[styles.dottedLine, styles.horizontal]} style={{ top: `${positions.bottom}px` }} />
          <div css={styles.hover} />
        </>
      )}

      {children}
    </div>
  )
}

export default Guidelines