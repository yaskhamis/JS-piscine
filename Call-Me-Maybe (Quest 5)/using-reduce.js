// 1. Adder
const adder = (arr, initial = 0) => arr.reduce((acc, n) => acc + n, initial)

// 2. Sum or Mul
const sumOrMul = (arr, initial = 0) =>
  arr.reduce((acc, n) => (n % 2 === 0 ? acc * n : acc + n), initial)

// 3. Function executor
const funcExec = (arr, initial) =>
  arr.reduce((acc, fn) => fn(acc), initial)