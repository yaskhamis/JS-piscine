is.num = (x) => typeof x === 'number'
is.nan = (x) => Number.isNaN(x)
is.str = (x) => typeof x === 'string'
is.bool = (x) => typeof x === 'boolean'
is.undef = (x) => x === undefined
is.def = (x) => x !== undefined
is.arr = (x) => Array.isArray(x)
is.obj = (x) => typeof x === 'object' && x !== null && !Array.isArray(x)
is.fun = (x) => typeof x === 'function'
is.truthy = (x) => !!x
is.falsy = (x) => !x