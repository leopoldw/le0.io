import React from 'react'
import useDarkMode from 'hooks/useDarkMode'
import { useStaticQuery, graphql } from 'gatsby'

console.log(useStaticQuery, graphql)

const style = {
  avatar: {
    width: 50,
    height: 50,
    borderRadius: `100%`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    marginBottom: 10,
  },
}

const useAvatar = () => {
  // const data = useStaticQuery(graphql`
  //   query AvatarQuery {
  //     file(name: { eq: "leo" }, extension: { eq: "png" }) {
  //       childImageSharp {
  //         id
  //         fixed(width: 100, height: 100, quality: 75) {
  //           base64
  //           src
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log(data)
  // return data.childImageSharp.fixed.src
}

const Branding = ({ theme }) => {
  const avatar = useAvatar()
  const darkMode = useDarkMode()

  return (
    <>
      <div css={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
      <div css={{}}>le0.io</div>
      <div css={{}}>Front End blog by Leopold Wicht</div>
    </>
  )
}

export default Branding