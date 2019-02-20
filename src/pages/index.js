import React from 'react'
import { graphql } from 'gatsby'
import { colors } from 'consts/design'
import RootLayout from 'rootLayout'
import MouseFollower from 'components/site/MouseFollower'
import Guidelines from 'components/site/Guidelines'
import Stats from 'components/site/Stats'
import Button from 'components/site/Button'

const styles = {
  container: {
    width: `100%`,
    height: `100%`,
    background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.mediumBlue})`,
    position: `relative`,
  },
  headerPosition: {
    position: `absolute`,
    top: 20,
    left: 20,
  },
  header: {
    color: colors.yellow,
    fontFamily: `Archery Black`,
    fontSize: 100,
    marginBottom: 20,
  },
  subheader: {
    // TODO: dedup
    color: colors.yellow,
    fontFamily: `Archery Black`,
    fontSize: 40,
    marginBottom: 40,
  },
}

const IndexPage = () => (
  <RootLayout>
    <div css={styles.container}>
      <main>
        <div css={styles.headerPosition}>
          <Guidelines>
            <h1 css={styles.header}>Leopold Wicht</h1>
          </Guidelines>
          <div>
            <Guidelines>
              <div css={styles.subheader}>Front End Wizard</div>
            </Guidelines>
          </div>
          <div>
            <Guidelines>
              <Button to="/posts">See All Posts</Button>
            </Guidelines>
          </div>
        </div>
        <Stats />
      </main>
    </div>
    <MouseFollower />
  </RootLayout>
)

export default IndexPage