import React from 'react'
import StatRenderer from '../StatRenderer'
import { getStatObject } from './shared'

const NavigatorStats = () => {
  const { connection } = navigator

  const stats = {
    ...getStatObject(`connection`, `Connection`, connection.type || connection.effectiveType, connection.type || connection.effectiveType),
  }

  return (
    <StatRenderer
      stats={Object.values(stats)}
    />
  )
}

export default NavigatorStats
