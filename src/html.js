import React from 'react'
import fonts from './fonts'

const HTML = props => (
  <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="preload" as="font" type="font/woff" crossOrigin="anonymous" href={fonts.ArcheryBlack} />
      <style
        dangerouslySetInnerHTML={{
          __html: `@font-face{font-family:'Archery Black';src:url(${fonts.ArcheryBlack}) format("woff");font-weight:400;font-style:normal;font-display:block;}`,
        }}
      />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)

export default HTML