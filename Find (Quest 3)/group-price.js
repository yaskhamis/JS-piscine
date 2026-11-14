const groupPrice = (str) =>
  [...str.matchAll(/(?:USD|\$)(\d+)\.(\d+)/g)].map((m) => [...m].slice(0, 3))