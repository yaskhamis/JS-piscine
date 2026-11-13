const triangle = (str, height) => {
  let result = ''
  for (let i = 1; i <= height; i++) {
    if (i > 1) result += '\n'
    result += str.repeat(i)
  }
  return result
}