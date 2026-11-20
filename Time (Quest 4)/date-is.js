const isValid = (date) => {
  if (!(date instanceof Date) && typeof date !== 'number') return false
  return !isNaN(new Date(date).getTime())
}

const isAfter = (date, dateToCompare) => date > dateToCompare

const isBefore = (date, dateToCompare) => date < dateToCompare

const isFuture = (date) => isValid(date) && isAfter(date, new Date())

const isPast = (date) => isValid(date) && isBefore(date, new Date())