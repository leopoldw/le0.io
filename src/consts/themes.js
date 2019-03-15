import { colors } from 'consts/design'

const dark = {
  dark: true,
  background: colors.darkGrey,
  bold: colors.yellow,
  standout: colors.standoutSubtle,
  border: colors.standout,
  primaryText: colors.almostWhite,
  secondaryText: colors.mediumGrey,
}

const light = {
  dark: false,
  background: colors.lightYellow,
  bold: colors.darkBlue,
  standout: colors.mediumYellow,
  border: colors.darkGrey,
  primaryText: colors.almostBlack,
  secondaryText: colors.almostBlack,
}

export default { dark, light }