import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

const Code = ({ className: lang = ``, children }) => (
  <Highlight {...defaultProps} code={children} language={lang.replace(`language-`, ``)}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default Code