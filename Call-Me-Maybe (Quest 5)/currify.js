const currify = (fn) => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (next) => curried(...args, next)
  return curried
}