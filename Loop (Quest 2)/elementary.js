const multiply = (a, b) => {
  if (b < 0) return 0 - multiply(a, 0 - b)
  let result = 0
  for (let i = 0; i < b; i++) {
    result += a
  }
  return result
}

const divide = (a, b) => {
  if (a < 0) return 0 - divide(0 - a, b)
  if (b < 0) return 0 - divide(a, 0 - b)
  let count = 0
  while (a >= b) {
    a -= b
    count++
  }
  return count
}

const modulo = (a, b) => a - multiply(divide(a, b), b)