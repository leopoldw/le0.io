import React, { useEffect, useState } from 'react'
import UAParser from 'ua-parser-js'
import StatRenderer from './StatRenderer'

const css = {
  position: `fixed`,
  bottom: 20,
  right: 20,
  textAlign: `right`,
}

const getStatObject = (statKey, statName, statValue, condition) =>
  (
    (typeof condition === `string` && condition.length > 0) ||
    condition === true
  )
    ? { [statKey]: [statName, statValue] }
    : {}

// UA stats
const withUAStats = () => {
  const [UAStats, setUAStats] = useState({})

  useEffect(() => {
    const UA = UAParser(navigator.userAgent)

    const stats = {
      ...getStatObject(`browser`, `Browser`, `${UA.browser.name} ${UA.browser.version}`, UA.browser.name),
      ...getStatObject(`cpu`, `CPU Architecture`, UA.cpu.architecture, UA.cpu.architecture),
      ...getStatObject(`device`, `Device`, `${UA.device.vendor} ${UA.device.model}`, UA.device.vendor),
      ...getStatObject(`engine`, `Engine`, `${UA.engine.name} ${UA.engine.version}`, UA.engine.name),
      ...getStatObject(`os`, `OS`, `${UA.os.name} ${UA.os.version}`, UA.os.name),
    }

    setUAStats(stats)
  }, [])

  return UAStats
}

// WINDOW stats
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

const Stats = () => {
  const UAStats = withUAStats()
  const windowStats = withWindowStats()

  return (
    <div css={css}>
      <StatRenderer
        stats={Object.values({
          ...UAStats,
          ...windowStats,
        })}
      />
    </div>
  )
}

export default Stats
