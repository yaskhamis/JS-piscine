// 1. Every element is a string with at least 5 characters
const longWords = (arr) =>
  arr.every((el) => typeof el === 'string' && el.length >= 5)

// 2. At least one element is a string with 10+ characters
const oneLongWord = (arr) =>
  arr.some((el) => typeof el === 'string' && el.length >= 10)

// 3. No element is a string with 7+ characters
const noLongWords = (arr) =>
  !arr.some((el) => typeof el === 'string' && el.length >= 7)