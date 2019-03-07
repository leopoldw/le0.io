import React from 'react'
import ReactHelmet from 'react-helmet'

const PageConfig = ({ title, description }) =>
  <ReactHelmet>
    <title>{title ? `${title} - le0.io` : `le0.io`}</title>
    <meta name="description" content={description} />
  </ReactHelmet>

export default PageConfig