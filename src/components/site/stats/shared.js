const getStatObject = (statKey, statName, statValue, condition) =>
  (
    (typeof condition === `string` && condition.length > 0) ||
    condition === true
  )
    ? { [statKey]: [statName, statValue] }
    : {}

export { getStatObject }