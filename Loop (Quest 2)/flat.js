const flat = (arr, depth = 1) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      const inner = flat(arr[i], depth - 1)
      for (let j = 0; j < inner.length; j++) result.push(inner[j])
    } else {
      result.push(arr[i])
    }
  }
  return result
}