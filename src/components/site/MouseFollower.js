import React, { useEffect, useState } from 'react'
import StatRenderer from './StatRenderer'

const css = {
  position: `fixed`,
}

const OFFSET = 20

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMoveListener = document.addEventListener(`mousemove`, ({ clientX: x, clientY: y }) => {
      setMousePosition({ x, y })
    })

    return () => {
      document.removeEventListener(`mousemove`, mouseMoveListener)
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