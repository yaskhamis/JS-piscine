const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const sunnySunday = (date) => {
  const epoch = new Date('0001-01-01')
  const msPerDay = 24 * 60 * 60 * 1000
  const diff = Math.floor((date - epoch) / msPerDay)
  return days[((diff % 6) + 6) % 6]
}