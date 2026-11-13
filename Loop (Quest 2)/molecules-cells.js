const dnaToRna = { G: 'C', C: 'G', T: 'A', A: 'U' }
const rnaToDna = { C: 'G', G: 'C', A: 'T', U: 'A' }

const RNA = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result += dnaToRna[str[i]]
  }
  return result
}

const DNA = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result += rnaToDna[str[i]]
  }
  return result
}