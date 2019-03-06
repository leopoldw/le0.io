const colors = {
  darkBlue: `#00207f`,
  mediumBlue: `#00528b`,
  yellow: `#fff600`,
  lightYellow: `#fff7e9`,
  mediumYellow: `#fff1d8`,
  almostBlack: `#1c1c1c`,
  almostWhite: `#fffbf3`,
  darkGrey: `#222222`,
  mediumGrey: `#c0c0c0`,
  standout: `rgba(255, 255, 255, 0.2)`,
  standoutSubtle: `rgba(255, 255, 255, 0.05)`,
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
  subheading: `1.25em`,
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