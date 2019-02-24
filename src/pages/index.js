import React from 'react'
import { graphql } from 'gatsby'
import { colors, mediaQueries, borderRadii } from 'consts/design'
import RootLayout from 'rootLayout'
import MouseFollower from 'components/site/MouseFollower'
import Guidelines from 'components/site/Guidelines'
import UAStats from 'components/site/stats/UAStats'
import IPStats from 'components/site/stats/IPStats'
import WindowStats from 'components/site/stats/WindowStats'
import NavigatorStats from 'components/site/stats/NavigatorStats'
import Button from 'components/site/Button'

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
  headerWrapper: {
    padding: 20,
    [mediaQueries.mobile]: {
      background: colors.mediumBlueTransparent,
      margin: 20,
      borderRadius: borderRadii.medium,
      zIndex: 10,
      // one day...
      backdropFilter: `blur(5px)`,
    },
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
  statsContainer: {
    display: `flex`,
    width: `100%`,
    position: `absolute`,
    justifyContent: `space-between`,
    padding: 10,
    boxSizing: `border-box`,
    [mediaQueries.tablet]: {
      flexDirection: `column`,
    },
  },
  statsContainerTop: {
    top: 0,
  },
  statsContainerBottom: {
    bottom: 0,
  },
  topLeft: {},
  topRight: {
    textAlign: `right`,
    [mediaQueries.tablet]: {
      textAlign: `left`,
    },
  },
  bottomLeft: {
    alignSelf: `flex-end`,
    textAlign: `left`,
    [mediaQueries.tablet]: {
      textAlign: `right`,
    },
  },
  bottomRight: {
    alignSelf: `flex-end`,
    textAlign: `right`,
  },
}

const IndexPage = () => (
  <RootLayout>
    <div css={styles.container}>
      <div css={styles.headerPosition}>
        <div css={styles.headerWrapper}>
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
    </div>
    <div css={[styles.statsContainer, styles.statsContainerTop]}>
      <div css={styles.topLeft}>
        <IPStats />
      </div>
      <div css={styles.topRight}>
        <UAStats />
      </div>
    </div>
    <div css={[styles.statsContainer, styles.statsContainerBottom]}>
      <div css={styles.bottomLeft}>
        <WindowStats />
      </div>
      <div css={styles.bottomRight}>
        <NavigatorStats />
      </div>
    </div>
    <MouseFollower />
  </RootLayout>
)

export default IndexPage