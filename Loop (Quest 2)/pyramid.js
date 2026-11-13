const pyramid = (str, height) => {
  let result = ''
  for (let i = 1; i <= height; i++) {
    if (i > 1) result += '\n'
    for (let s = 0; s < height - i; s++) {
      for (let k = 0; k < str.length; k++) result += ' '
    }
    for (let j = 0; j < 2 * i - 1; j++) result += str
  }
  return result
}