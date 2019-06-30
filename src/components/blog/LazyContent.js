import React, { useState, useEffect } from 'react'

// render after mount instead during scroll,
// as this brings blog content to screen faster without
// impacting scroll performance
const LazyContent = ({ children, height = 250 }) => {
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    const render = () => setMounted(true)

    if (`requestIdleCallback` in window)
      window.requestIdleCallback(render, { timeout: 1000 })
    else
      window.setTimeout(render, 0)
  })

  return isMounted
    ? children
    : <div style={{ height }} />
}

export default LazyContent