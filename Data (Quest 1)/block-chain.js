const blockChain = (data, prev = { index: 0, hash: '0' }) => {
  const index = prev.index + 1
  const block = {
    index,
    hash: hashCode(index + prev.hash + JSON.stringify(data)),
    data,
    prev,
    chain: (nextData) => blockChain(nextData, block),
  }
  return block
}