const reverse = (input) => {
  if (typeof input === 'string') {
    let result = ''
    for (let i = input.length - 1; i >= 0; i--) {
      result += input[i]
    }
    return result
  }

  for (let i = 0, j = input.length - 1; i < j; i++, j--) {
    const tmp = input[i]
    input[i] = input[j]
    input[j] = tmp
  }
  return input
}