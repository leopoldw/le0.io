import React from 'react'
import dateformat from 'dateformat'
import { fontSizes } from 'consts/design'

const styles = {
  postMeta: {
    fontSize: fontSizes.subtext,
    fontStyle: `italic`,
    letterSpacing: `0.5px`,
  },
}

const PostMeta = ({ date, timeToRead }) => (
  <div css={styles.postMeta}>
    {`${dateformat(new Date(date), `dS mmmm, yyyy`)} - ${timeToRead} min read`}
  </div>
)

export default PostMeta