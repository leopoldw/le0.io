import React, { useState, useEffect } from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject } from './shared'

const getConnection = () => getStatObject(`connection`, `Connection`, navigator.connection.type || navigator.connection.effectiveType, navigator.connection.type || navigator.connection.effectiveType)

const getPowerSource = battery => getStatObject(`power`, `Charging`, battery.charging ? `yes` : `no`, battery.charging !== undefined)

const getBatteryLevel = battery => getStatObject(`battery`, `Battery Level`, `${battery.level * 100}%`, battery.level)

const DEFAULT_STATS = {
  ...getConnection(),
  ...getStatObject(`power`, `Power Source`, false, true),
  ...getStatObject(`battery`, `Battery Level`, false, true),
}

const useNavigatorStats = () => {
  const [navigatorStats, setNavigatorStats] = useState(DEFAULT_STATS)

  useEffect(() => {
    if (`getBattery` in navigator)
      navigator
        .getBattery()
        .then(battery => {
          const setStats = () =>
            setNavigatorStats({
              ...navigatorStats,
              ...getPowerSource(battery),
              ...getBatteryLevel(battery),
            })

          setStats()
          battery.onchargingchange = setStats
          battery.onlevelchange = setStats
        })

    return () => {
      // ok
    }
  }, [])

  return navigatorStats
}

const NavigatorStats = () => {
  const stats = useNavigatorStats()

  return (
    <StatRenderer
      stats={Object.values(stats)}
    />
  )
}

export default NavigatorStats