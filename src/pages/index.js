import React from 'react'
import { graphql } from 'gatsby'
import { colors, mediaQueries } from 'consts/design'
import PageConfig from '../PageConfig'
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
      margin: 20,
      zIndex: 10,
    },
  },
  header: {
    color: colors.yellow,
    fontFamily: `Archery Black`,
    fontSize: 100,
    margin: 0,
    lineHeight: `1.2em`,
    [mediaQueries.mobile]: {
      fontSize: 80,
    },
  },
  subheader: {
    color: colors.yellow,
    fontSize: 40,
    lineHeight: `1.2em`,
    [mediaQueries.mobile]: {
      fontSize: 30,
    },
  },
  buttonContainer: {
    marginTop: 20,
    '& > a': {
      marginRight: 15,
    },
    [mediaQueries.mobile]: {
      '& > a': {
        display: `block`,
        marginBottom: 10,
      },
    },
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
    [mediaQueries.mobile]: {
      display: `none`,
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

const IndexPage = ({ data: { site: { siteMetadata: meta } } }) => (
  <>
    <PageConfig themeColor={colors.darkBlue} />
    <div css={styles.container}>
      <div css={styles.headerPosition}>
        <div css={styles.headerWrapper}>
          <Guidelines>
            <h1 css={styles.header}>{meta.author}</h1>
          </Guidelines>
          <div>
            <Guidelines>
              <div css={styles.subheader}>{meta.profession}</div>
            </Guidelines>
          </div>
          <div css={styles.buttonContainer}>
            <Button to="/posts">See All Posts</Button>
            <Button href="https://www.linkedin.com/in/leowicht/">LinkedIn</Button>
            {/* <Button to="/posts">Contact</Button> */}
            {/* TODO: add contact  */}
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
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        profession
      }
    }
  }
`

export default IndexPage