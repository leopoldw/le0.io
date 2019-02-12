import React, { useEffect, useState } from 'react'

const css = {
  position: `fixed`,
  color: `white`,
  opacity: `0.2`,
}

const OFFSET = 20

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMoveListener = document.addEventListener(`mousemove`, ({ clientX, clientY }) => {
      setMousePosition({ x: clientX + OFFSET, y: clientY + OFFSET })
    })

    return () => {
      document.removeEventListener(mouseMoveListener)
    }
  }, [])

  return (
    <div css={css} style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}>
      <div>{`clientX: ${mousePosition.x}`}</div>
      <div>{`clientY: ${mousePosition.y}`}</div>
    </div>
  )
}


export default MouseFollower