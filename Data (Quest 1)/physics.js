const getAcceleration = ({ f, m, Δv, Δt, d, t }) => {
  if (typeof f === 'number' && typeof m === 'number' && m !== 0) {
    return f / m
  }
  if (typeof Δv === 'number' && typeof Δt === 'number' && Δt !== 0) {
    return Δv / Δt
  }
  if (typeof d === 'number' && typeof t === 'number' && t !== 0) {
    return (2 * d) / t ** 2
  }
  return 'impossible'
}