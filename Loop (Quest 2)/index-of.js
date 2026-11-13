const indexOf = (arr, value, from = 0) => {
  let start = from < 0 ? arr.length + from : from
  if (start < 0) start = 0
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) return i
  }
  return -1
}

const lastIndexOf = (arr, value, from = arr.length - 1) => {
  let start = from < 0 ? arr.length + from : from
  if (start >= arr.length) start = arr.length - 1
  for (let i = start; i >= 0; i--) {
    if (arr[i] === value) return i
  }
  return -1
}

const includes = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true
    if (arr[i] !== arr[i] && value !== value) return true // NaN case
  }
  return false
}