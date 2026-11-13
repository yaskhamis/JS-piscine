const trunc = (n) => {
  if (n !== n || n >= 4503599627370496 || n <= -4503599627370496) return n
  if (n < 0) return -trunc(-n)

  let power = 1
  while (power * 2 <= n) power *= 2

  let result = 0
  while (power >= 1) {
    if (result + power <= n) result += power
    power /= 2
  }
  return result
}

const floor = (n) => {
  const t = trunc(n)
  return t > n ? t - 1 : t
}

const ceil = (n) => {
  const t = trunc(n)
  return t < n ? t + 1 : t
}

const round = (n) => {
  const f = floor(n)
  return n - f >= 0.5 ? f + 1 : f
}