import React from 'react'
import Guidelines from './Guidelines'
import { fontSizes } from 'consts/design'

const style = {
  text: {
    color: `white`,
    lineHeight: `1.2em`,
    letterSpacing: 0.5,
    fontSize: fontSizes.smaller,
  },
  key: {
    fontWeight: `600`,
    opacity: `0.4`,
    marginRight: 8,
  },
  value: {
    fontWeight: `300`,
    opacity: `0.2`,
    fontStyle: `italic`,
  },
  redacted: {
    filter: `blur(1px)`,
  },
}

const StatRenderer = ({ stats, guidelines = true }) => (
  stats.map(([name, value]) => (
    <div key={name}>
      <Guidelines disabled={!guidelines}>
        <div css={style.text}>
          <span css={style.key}>{`${name}`}</span>
          <span css={style.value}>
            {
            value === false
              ? <span css={style.redacted}>{`<REDACTED>`}</span>
              : value
            }
          </span>
        </div>
      </Guidelines>
    </div>
  ))
)

export default StatRenderer