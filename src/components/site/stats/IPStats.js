import React, { useEffect, useState } from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject, convertObjectToOrderedArray } from './shared'
import langlong from 'latlng-to-dms'

const DEFAULT_STATS = {
  ...getStatObject(`ip`, `IP Address`, false, true),
  ...getStatObject(`location`, `Location`, false, true),
  ...getStatObject(`isp`, `ISP`, false, true),
  ...getStatObject(`gps`, `GPS (approx)`, false, true),
}

const requestIPInfo = async () =>
  await fetch(`/.netlify/functions/getipinfo`).then(res => res.json())

const useIPStats = () => {
  const [IPStats, setIPStats] = useState(DEFAULT_STATS)

  useEffect(() => {
    try {
      requestIPInfo()
        .then(({ ip, language, geo }) => {
          setIPStats({
            ...(ip ? getStatObject(`ip`, `IP Address`, ip, true) : {}),
            ...(geo ? getStatObject(`location`, `Location`, `${geo.country_capital}, ${geo.state_prov}, ${geo.country_name}`, true) : {}),
            ...(geo?.isp ? getStatObject(`isp`, `ISP`, geo.isp, geo.isp) : {}),
            ...(geo.latitude ? getStatObject(`gps`, `GPS (approx)`, langlong(`${geo.latitude}, ${geo.longitude}`).replace(`N`, `N,`), true) : {}),
          })
        })
    } catch (e) {
      console.error(e)
    }
  }, [])

  return IPStats
}

const ORDER = [`ip`, `location`, `isp`, `gps`]
const IPStats = () => {
  const stats = useIPStats()
  const statArray = convertObjectToOrderedArray(stats, ORDER)

  return (
    <StatRenderer
      stats={statArray}
    />
  )
}

export default IPStats
