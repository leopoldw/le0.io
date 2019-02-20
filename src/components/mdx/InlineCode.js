import React from 'react'
import { colors, borderRadii } from 'consts/design'

const CSS = {
  background: colors.standout,
  border: `1px solid rgba(0, 0, 0, 0.1)`,
  padding: `0.1em 0.3em`,
  margin: `0em 0.2em`,
  borderRadius: borderRadii.small,
  fontFamily: `Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace`,
  fontSize: `0.75em`,
}

const InlineCode = props =>
  <code css={CSS} {...props} />

export default InlineCode