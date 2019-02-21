const getStatObject = (statKey, statName, statValue, condition, fluid = false) =>
  (
    (typeof condition === `string` && condition.length > 0) ||
    typeof condition === `number` ||
    typeof condition === `boolean`
  )
    ? { [statKey]: [statName, statValue, fluid] }
    : {}

export { getStatObject }