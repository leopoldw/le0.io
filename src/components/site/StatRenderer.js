import React from 'react'

const containerCSS = {
  color: `white`,
  opacity: `0.2`,
}

const keyCSS = {
  fontWeight: `bold`,
}

const StatRenderer = ({ stats }) => (
  <div css={containerCSS}>
    {stats.map(([name, value]) => (
      <div key={name}>
        <span css={keyCSS}>{`${name}: `}</span>
        <span>{value}</span>
      </div>
    ))}
  </div>
)

export default StatRenderer