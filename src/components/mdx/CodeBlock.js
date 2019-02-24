import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { sizes, borderRadii } from 'consts/design'

// mdx always inserts an empty token at the end it seems
const CSS = {
  marginTop: `0px !important`,
  marginBottom: `${sizes.paragraphSpacing}px !important`,
  borderRadius: borderRadii.medium,
  fontSize: `18px !important`,
  '& > div:last-child': {
    display: `none`,
  },
}

const CodeBlock = ({ className: lang = ``, children }) => (
  <Highlight {...defaultProps} code={children} language={lang.replace(`language-`, ``)}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style} css={CSS}>
        {tokens.map((line, key1) => (
          <div key={key1} {...getLineProps({ line, key: key1 })}>
            {line.map((token, key2) => (
              <span key={key2} {...getTokenProps({ token, key: key2 })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default CodeBlock