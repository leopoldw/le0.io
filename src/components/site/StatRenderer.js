import React from 'react'
import Guidelines from './Guidelines'
import { fontSizes, mediaQueries } from 'consts/design'

console.log(mediaQueries)
const style = {
  text: {
    color: `white`,
    lineHeight: `1.2em`,
    letterSpacing: 0.5,
    fontSize: fontSizes.smaller,
    whiteSpace: `nowrap`,
    overflow: `hidden`,
    [mediaQueries.tablet]: {
      fontSize: fontSizes.subtext,
    },
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
  stats.map(([name, value, fluid = false]) => (
    <div key={name}>
      <Guidelines disabled={!guidelines} fluid={fluid}>
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