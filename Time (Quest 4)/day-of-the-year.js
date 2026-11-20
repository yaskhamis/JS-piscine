const dayOfTheYear = (date) => {
  const startOfYear = new Date(date)
  startOfYear.setMonth(0, 1)
  startOfYear.setHours(0, 0, 0, 0)

  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)

  const msPerDay = 24 * 60 * 60 * 1000
  return Math.round((startOfDay - startOfYear) / msPerDay) + 1
}