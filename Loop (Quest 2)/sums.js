const sums = (n) => {
  const result = []

  const build = (remaining, min, current) => {
    if (remaining === 0) {
      if (current.length > 1) result.push(current)
      return
    }
    for (let p = min; p <= remaining; p++) {
      build(remaining - p, p, [...current, p])
    }
  }

  build(n, 1, [])
  return result
}