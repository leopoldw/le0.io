import React, { useEffect, useState } from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject } from './shared'
import langlong from 'latlng-to-dms'

const DEFAULT = {
  ...getStatObject(`ip`, `IP Address`, false, true),
  ...getStatObject(`location`, `Location`, false, true),
  ...getStatObject(`isp`, `ISP`, false, true),
  ...getStatObject(`gps`, `GPS (approx)`, false, true),
}

const requestIPInfo = async () =>
  await fetch(`/.netlify/functions/getipinfo`).then(res => res.json())

const withIPStats = () => {
  const [IPStats, setIPStats] = useState(DEFAULT)

  useEffect(() => {
    try {
      requestIPInfo()
        .then(({ ip, language, geo }) => {
          setIPStats({
            ...getStatObject(`ip`, `IP Address`, ip, true),
            ...getStatObject(`location`, `Location`, `${geo.country_capital}, ${geo.state_prov}, ${geo.country_name}`, true),
            ...getStatObject(`isp`, `ISP`, geo.isp, geo.isp),
            ...getStatObject(`gps`, `GPS (approx)`, langlong(`${geo.latitude}, ${geo.longitude}`), true),
          })
        })
    } catch (e) {
      console.error(e)
    }
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
