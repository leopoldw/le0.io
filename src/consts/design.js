const colors = {
  darkBlue: `#00207f`,
  mediumBlue: `#00528b`,
  mediumBlueTransparent: `rgba(0, 82, 139, 1)`,
  yellow: `#fff600`,
  lightYellow: `#fff7e9`,
  almostBlack: `#1c1c1c`,
  almostWhite: `#ffffff`,
  darkGrey: `#1d1d1d`,
  standout: `rgba(255, 255, 255, 0.3)`,
}

const sizes = {
  contentMaxWidth: 800,
  paragraphSpacing: 40,
}

// root is 22px
const fontSizes = {
  subtext: `0.75em`,
  smaller: `0.9em`,
  larger: `1.1em`,
  heading: `2.2em`,
}

const animationSpeeds = {
  normal: 400,
}

const borderRadii = {
  small: 5,
  medium: 10,
}

const breakpoints = {
  tablet: 800,
  mobile: 400,
}

const mediaQueries = Object
  .entries(breakpoints)
  .reduce((acc, [key, width]) => ({
    ...acc,
    [key]: `@media (max-width: ${width}px)`,
  }), {})

export { colors, sizes, animationSpeeds, borderRadii, fontSizes, breakpoints, mediaQueries }