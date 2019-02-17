import React from 'react'
import { graphql } from 'gatsby'
import { colors } from 'consts/design'
import RootLayout from 'rootLayout'
import MouseFollower from 'components/site/MouseFollower'
import Guidelines from 'components/site/Guidelines'
import Stats from 'components/site/Stats'

const containerCSS = {
  width: `100%`,
  height: `100%`,
  background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.mediumBlue})`,
  position: `relative`,
}

const headerPositionCSS = {
  position: `absolute`,
  top: `50%`,
  left: `10%`,
}

const headerCSS = {
  color: colors.yellow,
  fontFamily: `Archery Black`,
  fontSize: 100,
}

const IndexPage = () => (
  <RootLayout>
    <div css={containerCSS}>
      <div>
        <div css={headerPositionCSS}>
          <Guidelines>
            <h1 css={headerCSS}>Leopold Wicht</h1>
          </Guidelines>
        </div>
        <Stats />
      </div>
    </div>
    <MouseFollower />
  </RootLayout>
)

export default IndexPage