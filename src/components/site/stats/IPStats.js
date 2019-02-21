import React, { useEffect, useState } from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject } from './shared'

// const getWindowStats = () => getStatObject(`size`, `Resolution`, `${window.innerWidth}x${window.innerHeight}`, true)

const withIPStats = () => {
  const [IPStats, setIPStats] = useState({})

  useEffect(() => {

  }, [])

  return IPStats
}

const IPStats = () => {
  const stats = withIPStats()

  return (
    <StatRenderer
      stats={Object.values(stats)}
    />
  )
}

export default IPStats
