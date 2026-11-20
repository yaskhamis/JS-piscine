const flow = (funcs) => (...args) => {
  let result = funcs[0](...args)
  for (let i = 1; i < funcs.length; i++) {
    result = funcs[i](result)
  }
  return result
}