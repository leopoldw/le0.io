const getStatObject = (statKey, statName, statValue, condition, fluid = false) =>
  (
    (typeof condition === `string` && condition.length > 0) ||
    typeof condition === `number` ||
    condition === true
  )
    ? { [statKey]: [statName, statValue, fluid] }
    : {}

export { getStatObject }