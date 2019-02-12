import React from 'react'
import { graphql } from 'gatsby'
import { colors } from 'consts/design'
import RootLayout from 'layouts/rootLayout'

const containerCSS = {
  width: `100%`,
  height: `100%`,
  background: `linear-gradient(45deg, ${colors.eggplant}, ${colors.sky})`,
}

const IndexPage = () => (
  <RootLayout>
    <div css={containerCSS}>
      {/* gd */}
    </div>
  </RootLayout>
)

export default IndexPage