const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday',
  'secondFriday', 'secondSaturday', 'secondSunday',
]

const addWeek = (date) => {
  const epoch = new Date('0001-01-01')
  const msPerDay = 24 * 60 * 60 * 1000
  const diff = Math.floor((date - epoch) / msPerDay)
  return days[((diff % 14) + 14) % 14]
}

const timeTravel = ({ date, hour, minute, second }) => {
  const result = new Date(date)
  result.setHours(hour, minute, second)
  return result
}