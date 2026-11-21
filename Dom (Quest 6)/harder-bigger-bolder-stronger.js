export const generateLetters = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const total = 120
  const minSize = 11
  const maxSize = 130

  for (let i = 0; i < total; i++) {
    const div = document.createElement('div')
    div.textContent = alphabet[Math.floor(Math.random() * alphabet.length)]

    const size = minSize + ((maxSize - minSize) * i) / (total - 1)
    div.style.fontSize = `${size}px`

    if (i < total / 3) {
      div.style.fontWeight = '300'
    } else if (i < (2 * total) / 3) {
      div.style.fontWeight = '400'
    } else {
      div.style.fontWeight = '600'
    }

    document.body.append(div)
  }
}