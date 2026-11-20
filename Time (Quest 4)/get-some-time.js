const firstDayWeek = (week, year) => {
  const jan1 = new Date(0)
  jan1.setUTCFullYear(Number(year), 0, 1)
  jan1.setUTCHours(0, 0, 0, 0)

  // days since the Monday on or before Jan 1 (Mon = 0 ... Sun = 6)
  const offset = (jan1.getUTCDay() + 6) % 7
  const msPerDay = 24 * 60 * 60 * 1000

  const monday = new Date(jan1.getTime() + ((week - 1) * 7 - offset) * msPerDay)

  // if the Monday falls in the previous year, use Jan 1 instead
  const result = monday < jan1 ? jan1 : monday

  const dd = String(result.getUTCDate()).padStart(2, '0')
  const mm = String(result.getUTCMonth() + 1).padStart(2, '0')
  const yyyy = String(result.getUTCFullYear()).padStart(4, '0')

  return `${dd}-${mm}-${yyyy}`
}