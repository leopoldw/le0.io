import React, { useEffect, useState } from 'react'
import StatRenderer from './StatRenderer'
import { mediaQueries } from 'consts/design'

const css = {
  position: `fixed`,
  [mediaQueries.mobile]: {
    display: `none`,
  },
}

const OFFSET = 15

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = ({ clientX: x, clientY: y }) => {
      setMousePosition({ x, y })
    }

    document.addEventListener(`mousemove`, onMouseMove)

    return () => {
      document.removeEventListener(`mousemove`, onMouseMove)
    }
  }, [])

  return (
    <div css={css} style={{ top: `${mousePosition.y + OFFSET}px`, left: `${mousePosition.x + OFFSET}px` }}>
      <StatRenderer
        guidelines={false}
        stats={[
          [`X`, mousePosition.x],
          [`Y`, mousePosition.y],
        ]}
      />
    </div>
  )
}


export default MouseFollower