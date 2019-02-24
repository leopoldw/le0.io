import React from 'react'
import UAParser from 'ua-parser-js'
import StatRenderer from '../StatRenderer'
import { getStatObject } from './shared'

const UAStats = () => {
  if (typeof navigator === `undefined`)
    return null

  const UA = UAParser(navigator.userAgent)

  const stats = {
    ...getStatObject(`browser`, `Browser`, `${UA.browser.name} ${UA.browser.version}`, UA.browser.name),
    ...getStatObject(`cpu`, `CPU Architecture`, UA.cpu.architecture, UA.cpu.architecture),
    ...getStatObject(`device`, `Device`, `${UA.device.vendor} ${UA.device.model}`, UA.device.vendor),
    ...getStatObject(`engine`, `Engine`, `${UA.engine.name} ${UA.engine.version}`, UA.engine.name),
    ...getStatObject(`os`, `OS`, `${UA.os.name} ${UA.os.version}`, UA.os.name),
  }

  // no need to order
  return (
    <StatRenderer
      stats={Object.values(stats)}
    />
  )
}

export default UAStats
