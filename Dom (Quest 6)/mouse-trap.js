let circle = null
let box = null

export const createCircle = () => {
  document.addEventListener('click', (e) => {
    const div = document.createElement('div')
    div.className = 'circle'
    div.style.background = 'white'
    document.body.append(div)

    const { width, height } = div.getBoundingClientRect()
    div.style.left = `${e.clientX - width / 2}px`
    div.style.top = `${e.clientY - height / 2}px`

    circle = div
  })
}

export const moveCircle = () => {
  document.addEventListener('mousemove', (e) => {
    if (!circle) return

    const { width, height } = circle.getBoundingClientRect()
    let left = e.clientX - width / 2
    let top = e.clientY - height / 2

    if (box) {
      const b = box.getBoundingClientRect()
      // the walls are 1px, so the inner area starts 1px inside the box
      const minX = b.left + 1
      const maxX = b.right - 1 - width
      const minY = b.top + 1
      const maxY = b.bottom - 1 - height

      const inside =
        circle.dataset.trapped === 'true' ||
        (left >= minX && left <= maxX && top >= minY && top <= maxY)

      if (inside) {
        circle.dataset.trapped = 'true'
        circle.style.background = 'var(--purple)'
        // once trapped, the circle can never leave the box
        left = Math.min(Math.max(left, minX), maxX)
        top = Math.min(Math.max(top, minY), maxY)
      }
    }

    circle.style.left = `${left}px`
    circle.style.top = `${top}px`
  })
}

export const setBox = () => {
  box = document.createElement('div')
  box.className = 'box'
  document.body.append(box)
}