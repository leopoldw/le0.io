import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { sizes, borderRadii } from 'consts/design'
import theme from 'consts/prismTheme'
import LazyContent from 'components/blog/LazyContent'

// mdx always inserts an empty token at the end it seems
const css = {
  container: ({ border }) => ({
    border: `1px solid ${border}`,
    marginTop: `0px`,
    marginBottom: sizes.paragraphSpacing,
    borderRadius: borderRadii.medium,
    fontFeatureSettings: `normal`,
    fontSize: 15,
    lineHeight: 1.5,
    padding: 20,
    fontWeight: `100`,
    tabSize: `4`,
    hyphens: `none`,
    whiteSpace: `pre-wrap`,
    overflowY: `auto`,
    fontFamily: `Consolas, Menlo, Monaco, source-code-pro, "Courier New", monospace`,
    '& > div:last-child': {
      display: `none`,
    },
  }),
}


const CodeBlock = ({ className: lang = ``, children }) => (
  <LazyContent>
    <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style} css={css.container}>
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
  </LazyContent>
)

export default CodeBlock