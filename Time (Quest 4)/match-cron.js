const matchCron = (cron, date) => {
  const [minute, hour, dayOfMonth, month, dayOfWeek] = cron.split(' ')

  // JS: Sunday = 0 ... Saturday = 6, but cron here uses 1-7 with 1 = Monday, 7 = Sunday
  const weekday = date.getDay() === 0 ? 7 : date.getDay()

  const values = [
    [minute, date.getMinutes()],
    [hour, date.getHours()],
    [dayOfMonth, date.getDate()],
    [month, date.getMonth() + 1],
    [dayOfWeek, weekday],
  ]

  return values.every(([field, value]) => field === '*' || Number(field) === value)
}