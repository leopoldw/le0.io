import React from 'react'
import { graphql } from 'gatsby'
import { colors } from 'consts/design'
import RootLayout from 'rootLayout'
import MouseFollower from 'components/site/MouseFollower'
import Guidelines from 'components/site/Guidelines'
import UAStats from 'components/site/stats/UAStats'
import WindowStats from 'components/site/stats/WindowStats'
import Button from 'components/site/Button'

const STAT_OFFSET = 10

const styles = {
  container: {
    width: `100%`,
    height: `100%`,
    background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.mediumBlue})`,
    position: `relative`,
  },
  headerPosition: {
    display: `flex`,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  header: {
    color: colors.yellow,
    fontFamily: `Archery Black`,
    fontSize: 100,
    margin: 0,
    lineHeight: `1.2em`,
  },
  subheader: {
    // TODO: dedup
    color: colors.yellow,
    fontFamily: `Archery Black`,
    fontSize: 40,
    lineHeight: `1.2em`,
  },
  buttonContainer: {
    marginTop: 20,
  },
  statsTopRightPosition: {
    position: `fixed`,
    top: STAT_OFFSET,
    right: STAT_OFFSET,
    textAlign: `right`,
  },
  statsBottomRightPosition: {
    position: `fixed`,
    bottom: STAT_OFFSET,
    right: STAT_OFFSET,
    textAlign: `right`,
  },
}

const IndexPage = () => (
  <RootLayout>
    <div css={styles.container}>
      <div css={styles.headerPosition}>
        <div>
          <Guidelines>
            <h1 css={styles.header}>Leopold Wicht</h1>
          </Guidelines>
          <div>
            <Guidelines>
              <div css={styles.subheader}>Front End Wizard</div>
            </Guidelines>
          </div>
          <div css={styles.buttonContainer}>
            <Button to="/posts">See All Posts</Button>
          </div>
        </div>
      </div>
      <div css={styles.statsTopRightPosition}>
        <UAStats />
      </div>
      <div css={styles.statsBottomRightPosition}>
        <WindowStats />
      </div>
    </div>
    <MouseFollower />
  </RootLayout>
)

export default IndexPage