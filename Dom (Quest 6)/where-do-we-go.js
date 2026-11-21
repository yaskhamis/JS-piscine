import { places } from './where-do-we-go.data.js'

// convert "36°50'08.7"N 2°27'44.8"W" to a decimal latitude (used for sorting)
const latitude = (coords) => {
  const [, d, m, s, hemi] = coords.match(/(\d+)°(\d+)'([\d.]+)"([NS])/)
  const value = Number(d) + Number(m) / 60 + Number(s) / 3600
  return hemi === 'S' ? -value : value
}

export const explore = () => {
  // north to south
  const sorted = [...places].sort(
    (a, b) => latitude(b.coordinates) - latitude(a.coordinates),
  )

  sorted.forEach((place) => {
    const section = document.createElement('section')
    const file = place.name.split(',')[0].toLowerCase().replace(/\s+/g, '-')
    section.style.background = `url("./where-do-we-go_images/${file}.jpg")`
    document.body.append(section)
  })

  const location = document.createElement('a')
  location.className = 'location'
  location.target = '_blank'
  document.body.append(location)

  const direction = document.createElement('div')
  direction.className = 'direction'
  direction.textContent = 'N'
  document.body.append(direction)

  let current = -1
  let lastScroll = window.scrollY

  const update = () => {
    const middle = window.scrollY + window.innerHeight / 2
    let index = Math.floor(middle / window.innerHeight)
    index = Math.max(0, Math.min(index, sorted.length - 1))

    if (index !== current) {
      current = index
      const place = sorted[index]
      location.textContent = `${place.name}\n${place.coordinates}`
      location.style.color = place.color
      // coordinates in the path so the browser keeps the ' unencoded
      location.href = `https://www.google.com/maps/place/${place.coordinates}`
    }
  }

  window.addEventListener('scroll', () => {
    const y = window.scrollY
    if (y > lastScroll) direction.textContent = 'S'
    else if (y < lastScroll) direction.textContent = 'N'
    lastScroll = y
    update()
  })

  update()
}