import React, { useState, useEffect } from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject, convertObjectToOrderedArray } from './shared'

const getConnection = () => {
  if (typeof navigator === `undefined`)
    return {}

  const { connection = {} } = navigator

  return getStatObject(`connection`, `Connection`, connection.type || connection.effectiveType, connection &&connection.type || connection.effectiveType)
}

const getPowerSource = battery => getStatObject(`power`, `Charging`, battery.charging === false ? `no` : `yes`, true, battery.charging)

const getBatteryLevel = battery => getStatObject(`battery`, `Battery Level`, `${Math.round(battery.level * 100)}%`, battery.level)

const getCPU = () => {
  if (typeof navigator === `undefined`)
    return {}

  return getStatObject(`cpu`, `CPU Cores`, navigator.hardwareConcurrency, navigator.hardwareConcurrency)
}

// https://gist.github.com/cvan/042b2448fcecefafbb6a91469484cdf8
const getGPU = () => {
  try {
    const canvas = document.createElement(`canvas`)
    const context = canvas.getContext(`webgl`) || canvas.getContext(`experimental-webgl`)
    const debugInfo = context.getExtension(`WEBGL_debug_renderer_info`)
    const renderer = context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    return getStatObject(`gpu`, `GPU`, renderer, renderer)
  } catch (e) {
    return {}
  }
}

const DEFAULT_STATS = {
  ...getConnection(),
  ...getStatObject(`power`, `Power Source`, false, true),
  ...getStatObject(`battery`, `Battery Level`, false, true),
  ...getCPU(),
  ...getGPU(),
}

const useNavigatorStats = () => {
  const [navigatorStats, setNavigatorStats] = useState(DEFAULT_STATS)

  useEffect(() => {
    if (`getBattery` in navigator)
      navigator
        .getBattery()
        .then(battery => {
          const setStats = () => {
            setNavigatorStats({
              ...navigatorStats,
              ...getPowerSource(battery),
              ...getBatteryLevel(battery),
            })
          }

          setStats()
          battery.onchargingchange = setStats
          battery.onlevelchange = setStats
        })
    else
      setNavigatorStats(getConnection())
  }, [])

  return navigatorStats
}

const ORDER = [`connection`, `charging`, `battery`, `cpu`, `gpu`]
const NavigatorStats = () => {
  const stats = useNavigatorStats()
  const statArray = convertObjectToOrderedArray(stats, ORDER)

  return (
    <StatRenderer
      stats={statArray}
    />
  )
}

export default NavigatorStats