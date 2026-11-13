const nasa = (N) => {
  let result = ''
  for (let i = 1; i <= N; i++) {
    let word
    if (i % 15 === 0) word = 'NASA'
    else if (i % 3 === 0) word = 'NA'
    else if (i % 5 === 0) word = 'SA'
    else word = String(i)

    result += i === 1 ? word : ' ' + word
  }
  return result
}