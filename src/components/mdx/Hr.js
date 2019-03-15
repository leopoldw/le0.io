import React from 'react'

const style = {
  default: ({ border }) => ({
    margin: `10px 0`,
    border: 0,
    borderBottom: `1px solid ${border}`,
  }),
}

const Hr = props => (
  <hr css={style.default} {...props} />
)

export default Hr