import React, { useLayoutEffect, useState } from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject, convertObjectToOrderedArray } from './shared'
import dateformat from 'dateformat'

const getResolution = () => {
  if (typeof window === `undefined`)
    return {}

    return getStatObject(`size`, `Resolution`, `${window.innerWidth}x${window.innerHeight}`, true)
}

const getTime = () => {
  const date = new Date()

  return {
    ...getStatObject(`date`, `Local Date`, dateformat(date, `dS mmm, yyyy`), true),
    ...getStatObject(`time`, `Local Time`, dateformat(date, `h:MM:ss TT`), true, true),
  }
}

const useWindowStats = () => {
  const [windowStats, setWindowStats] = useState({
    ...getResolution(),
    ...getTime(),
  })

  useLayoutEffect(() => {
    const resizeWatcher = window.addEventListener(`resize`, () => {
      setWindowStats({
        ...windowStats,
        ...getResolution(),
      })
    })

    const interval = setInterval(() => {
      setWindowStats({
        ...windowStats,
        ...getTime(),
      })
    }, 1000)

    return () => {
      window.removeEventListener(`resize`, resizeWatcher)
      clearInterval(interval)
    }
  }, [])

  return windowStats
}

const ORDER = [`size`, `date`, `time`]
const WindowStats = () => {
  const stats = useWindowStats()
  const statArray = convertObjectToOrderedArray(stats, ORDER)

  return (
    <StatRenderer
      stats={statArray}
    />
  )
}

export default WindowStats
