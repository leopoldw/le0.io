import React, { useEffect, useState } from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject } from './shared'

const getWindowStats = () => getStatObject(`size`, `Resolution`, `${window.innerWidth}x${window.innerHeight}`, true)

const withWindowStats = () => {
  const [windowStats, setWindowStats] = useState({})

  useEffect(() => {
    setWindowStats(getWindowStats())

    const resizeWatcher = window.addEventListener(`resize`, () => {
      setWindowStats(getWindowStats())
    })

    return () => window.removeEventListener(`resize`, resizeWatcher)
  }, [])

  return windowStats
}

const WindowStats = () => {
  const stats = withWindowStats()

  return (
    <StatRenderer
      stats={Object.values(stats)}
    />
  )
}

export default WindowStats
