import { colors } from 'consts/design'

const dark = {
  dark: true,
  background: colors.darkGrey,
  bold: colors.yellow,
  standout: colors.standoutSubtle,
  border: colors.standout,
  cardHover: `linear-gradient(135deg, ${colors.yellowTransparent}, transparent, ${colors.yellowTransparent})`,
  primaryText: colors.almostWhite,
  secondaryText: colors.mediumGrey,
}

const light = {
  dark: false,
  background: colors.lightYellow,
  bold: colors.mediumBlue,
  standout: colors.mediumYellow,
  cardHover: `linear-gradient(135deg, ${colors.mediumBlueTransparent}, transparent, ${colors.mediumBlueTransparent})`,
  border: colors.mediumGrey,
  primaryText: colors.almostBlack,
  secondaryText: colors.grey,
}

export default { dark, light }