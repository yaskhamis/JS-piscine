const sameAmount = (str, regex1, regex2) => {
  const count = (re) => {
    const flags = re.flags.includes('g') ? re.flags : re.flags + 'g'
    return (str.match(new RegExp(re.source, flags)) || []).length
  }
  return count(regex1) === count(regex2)
}