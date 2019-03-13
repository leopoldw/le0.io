import React from 'react'
import { sizes } from 'consts/design'

const style = {
  container: {
    maxWidth: sizes.contentMaxWidth,
    margin: `0 auto`,
    padding: `20px 20px 80px 20px`,
  },
  header: {
    marginTop: 60,
  },
}

const ContentContainer = ({ children, header }) => (
  <div css={style.container}>
    {header &&
      <header css={style.header}>{header}</header>
    }
    {children}
  </div>
)

export default ContentContainer