const findExpression = (target) => {
  const failed = {}

  const find = (current, history) => {
    if (current === target) return history
    if (current > target || failed[current]) return undefined

    const found =
      find(current + 4, history + ' ' + add4) ||
      find(current * 2, history + ' ' + mul2)

    if (found === undefined) failed[current] = true
    return found
  }

  return find(1, '1')
}