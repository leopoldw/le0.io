import React from 'react'
import useDarkMode from 'hooks/useDarkMode'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { colors, fontSizes, animationSpeeds } from 'consts/design'

const style = {
  link: {
    textDecoration: `none`,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: `100%`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    marginBottom: 10,
  },
  text: {
    color: colors.darkBlue,
    transition: `color ${animationSpeeds.normal}ms linear`,
  },
  textDark: {
    color: colors.yellow,
  },
  logo: {
    fontFamily: `Archery Black`,
  },
  logoLarge: {
    fontSize: 80,
  },
  logoSmall: {
    fontSize: 40,
  },
  description: {
    fontSize: fontSizes.smaller,
    marginTop: 5,
  },
}

const useStaticData = () => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      file(name: { eq: "leo" }, extension: { eq: "png" }) {
        childImageSharp {
          id
          fixed(width: 200, height: 200, quality: 75) {
            base64
            src
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return {
    avatar: data.file.childImageSharp.fixed.src,
    meta: data.site.siteMetadata,
  }
}


const Branding = ({ smaller }) => {
  const { avatar, meta } = useStaticData()
  const darkMode = useDarkMode()

  return (
    <Link to="/" css={style.link}>
      <div css={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
      <div css={[style.text, darkMode && style.textDark, style.logo, smaller ? style.logoSmall : style.logoLarge]}>{meta.title}</div>
      { smaller &&
        <div css={[style.text, darkMode && style.textDark, style.description]}>{meta.description}</div>
      }
    </Link>
  )
}

export default Branding