import React, { useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { sizes, borderRadii, colors } from 'consts/design'
import theme from 'consts/prismTheme'
import { DarkModeContext } from 'pages/post'

// mdx always inserts an empty token at the end it seems
const css = {
  container: {
    border: `1px solid ${colors.darkGrey}`,
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
    fontFamily: `Consolas, Menlo, Monaco, source-code-pro, "Courier New", monospace`,
    '& > div:last-child': {
      display: `none`,
    },
  },
  darkMode: {
    border: `1px solid ${colors.standout}`,
  },
}


const CodeBlock = ({ className: lang = ``, children }) => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style} css={[css.container, darkMode && css.darkMode]}>
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
}

export default CodeBlock