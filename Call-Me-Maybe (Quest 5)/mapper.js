const map = (arr, fn) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr))
  }
  return result
}

const flatMap = (arr, fn) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const value = fn(arr[i], i, arr)
    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        result.push(value[j])
      }
    } else {
      result.push(value)
    }
  }
  return result
}