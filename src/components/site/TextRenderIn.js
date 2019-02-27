import React from 'react'
import { useSpring, animated } from 'react-spring'

const style = {
  container: {
    position: `relative`,
  },
  overlay: {
    height: `100%`,
    width: `100%`,
    top: 0,
    left: 0,
    position: `absolute`,
    zIndex: 10,
  },
}

const START_DELAY = 500

const TextRenderIn = ({ children, color, delay = 0 }) => {
  const overlaySpring = useSpring({
    from: {
      width: `100%`,
    },
    to: {
      width: `0%`,
    },
    delay: START_DELAY + delay,
    config: {
      mass: 1,
      tension: 150,
      friction: 50,
    },
  })

  return (
    <div css={style.container}>
      <animated.div css={[style.overlay, { backgroundColor: color }]} style={overlaySpring} />
      {children}
    </div>
  )
}

export default TextRenderIn