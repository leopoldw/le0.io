import React from 'react'
import { graphql } from 'gatsby'
import { colors } from 'consts/design'
import RootLayout from 'layouts/rootLayout'
import MouseFollower from 'components/site/MouseFollower'
import Stats from 'components/site/Stats'

const containerCSS = {
  width: `100%`,
  height: `100%`,
  background: `linear-gradient(45deg, ${colors.eggplant}, ${colors.sky})`,
}

const IndexPage = () => (
  <RootLayout>
    <div css={containerCSS}>
      <Stats />
    </div>
    <MouseFollower />
  </RootLayout>
)

export default IndexPage