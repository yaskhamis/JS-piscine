import { gossips } from './gossip-grid.data.js'

export const grid = () => {
  // ranges
  const ranges = document.createElement('div')
  ranges.className = 'ranges'

  const makeRange = (id, min, max) => {
    const input = document.createElement('input')
    input.type = 'range'
    input.id = id
    input.className = 'range'
    input.min = min
    input.max = max
    input.value = min
    return input
  }

  const width = makeRange('width', 200, 800)
  const fontSize = makeRange('fontSize', 20, 40)
  const background = makeRange('background', 20, 75)
  ranges.append(width, fontSize, background)

  // grid
  const gridEl = document.createElement('div')
  gridEl.className = 'gossip-grid'

  // style applied to every card (current slider values)
  const applyStyle = (card) => {
    card.style.width = `${width.value}px`
    card.style.fontSize = `${fontSize.value}px`
    card.style.backgroundColor = `hsl(280, 50%, ${background.value}%)`
  }

  const addGossip = (text) => {
    const card = document.createElement('div')
    card.className = 'gossip'
    card.textContent = text
    applyStyle(card)
    return card
  }

  // first card: the form
  const form = document.createElement('form')
  form.className = 'gossip'
  const textarea = document.createElement('textarea')
  const button = document.createElement('button')
  button.type = 'submit'
  button.textContent = 'Share gossip!'
  form.append(textarea, button)
  applyStyle(form)
  gridEl.append(form)

  // existing gossips, in dataset order
  gossips.forEach((text) => gridEl.append(addGossip(text)))

  // submit: new gossip goes right after the form (first gossip position)
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = textarea.value.trim()
    if (!text) return
    form.after(addGossip(text))
    textarea.value = ''
  })

  // live updates
  const update = () =>
    gridEl.querySelectorAll('.gossip').forEach((card) => applyStyle(card))

  ;[width, fontSize, background].forEach((r) =>
    r.addEventListener('input', update)
  )

  document.body.append(ranges, gridEl)
}