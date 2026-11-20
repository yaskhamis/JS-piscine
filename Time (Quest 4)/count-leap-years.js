const countLeapYears = (date) => {
  const year = date.getFullYear() - 1 // count only fully completed years

  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)
}