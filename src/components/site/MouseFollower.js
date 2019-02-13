import React, { useEffect, useState } from 'react'
import StatRenderer from './StatRenderer'

const css = {
  position: `fixed`,
}

const OFFSET = 20

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMoveListener = document.addEventListener(`mousemove`, ({ clientX, clientY }) => {
      setMousePosition({ x: clientX + OFFSET, y: clientY + OFFSET })
    })

    return () => {
      document.removeEventListener(`mousemove`, mouseMoveListener)
    }
  }, [])

  return (
    <div css={css} style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}>
      <StatRenderer
        stats={[
          [`clientX`, mousePosition.x],
          [`clientY`, mousePosition.y],
        ]}
      />
    </div>
  )
}


export default MouseFollower