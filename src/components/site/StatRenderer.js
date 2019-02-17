import React from 'react'
import Guidelines from './Guidelines'

const textCSS = {
  color: `white`,
  opacity: `0.2`,
  fontFamily: `Exo2Light`,
}

const keyCSS = {
  fontFamily: `Exo2`,
}

const StatRenderer = ({ stats, guidelines = true }) => (
  stats.map(([name, value]) => (
    <div key={name}>
      <Guidelines disabled={!guidelines}>
        <div css={textCSS}>
          <span css={keyCSS}>{`${name}: `}</span>
          <span>{value}</span>
        </div>
      </Guidelines>
    </div>
  ))
)

export default StatRenderer