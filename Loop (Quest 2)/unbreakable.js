const split = (str, sep, limit) => {
  const result = []

  if (sep === undefined) {
    result.push(str)
  } else if (sep === '') {
    for (let i = 0; i < str.length; i++) result.push(str[i])
  } else {
    let current = ''
    let i = 0
    while (i < str.length) {
      if (str.slice(i, i + sep.length) === sep) {
        result.push(current)
        current = ''
        i += sep.length
      } else {
        current += str[i]
        i++
      }
    }
    result.push(current)
  }

  if (limit !== undefined && limit < result.length) result.length = limit
  return result
}

const join = (arr, sep = ',') => {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result += sep
    const item = arr[i]
    if (item !== null && item !== undefined) result += item
  }
  return result
}