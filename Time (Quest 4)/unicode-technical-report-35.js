const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const weekdays = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
]

const pad = (n, size = 2) => String(n).padStart(size, '0')

const format = (date, str) => {
  const year = date.getFullYear()
  const eraYear = Math.abs(year) // -585 -> 585
  const hours = date.getHours()

  const tokens = {
    y: String(eraYear),
    yyyy: pad(eraYear, 4),
    G: year > 0 ? 'AD' : 'BC',
    GGGG: year > 0 ? 'Anno Domini' : 'Before Christ',
    M: String(date.getMonth() + 1),
    MM: pad(date.getMonth() + 1),
    MMM: months[date.getMonth()].slice(0, 3),
    MMMM: months[date.getMonth()],
    d: String(date.getDate()),
    dd: pad(date.getDate()),
    E: weekdays[date.getDay()].slice(0, 3),
    EEEE: weekdays[date.getDay()],
    h: String(hours % 12 || 12),
    hh: pad(hours % 12 || 12),
    m: String(date.getMinutes()),
    mm: pad(date.getMinutes()),
    s: String(date.getSeconds()),
    ss: pad(date.getSeconds()),
    H: String(hours),
    HH: pad(hours),
    a: hours < 12 ? 'AM' : 'PM',
  }

  // longer tokens come first so "yyyy" isn't read as four separate "y"s
  const regex = /yyyy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|hh|h|mm|m|ss|s|HH|H|a/g

  return str.replace(regex, (token) => tokens[token])
}