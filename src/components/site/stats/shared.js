const getStatObject = (statKey, statName, statValue, condition, fluid = false) =>
  (
    (typeof condition === `string` && condition.length > 0) ||
    typeof condition === `number` ||
    condition === true
  )
    ? { [statKey]: [statName, `${statValue}`.replace(/undefined/g, ``), fluid] }
    : {}

const convertObjectToOrderedArray = (object, order) =>
  order
    .reduce((acc, key) => {
      acc.push(object[key])
      return acc
    }, [])
    .filter(item => item)

export { getStatObject, convertObjectToOrderedArray }