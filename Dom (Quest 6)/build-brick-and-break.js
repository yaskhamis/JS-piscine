export const build = (amount) => {
  let i = 1
  const interval = setInterval(() => {
    if (i > amount) {
      clearInterval(interval)
      return
    }
    const brick = document.createElement('div')
    brick.id = `brick-${i}`
    if (i % 3 === 2) {
      brick.dataset.foundation = 'true'
    }
    document.body.append(brick)
    i++
  }, 100)
}

export const repair = (...ids) => {
  ids.forEach((id) => {
    const brick = document.getElementById(id)
    if (!brick) return
    if (brick.hasAttribute('data-foundation')) {
      brick.dataset.repaired = 'in progress'
    } else {
      brick.dataset.repaired = 'true'
    }
  })
}

export const destroy = () => {
  const bricks = document.querySelectorAll('div[id^="brick-"]')
  const last = bricks[bricks.length - 1]
  if (last) last.remove()
}