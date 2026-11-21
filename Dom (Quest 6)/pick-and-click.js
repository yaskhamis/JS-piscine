export const pick = () => {
  const NS = 'http://www.w3.org/2000/svg'

  // displayed values
  const hsl = document.createElement('div')
  hsl.className = 'hsl'
  const hue = document.createElement('div')
  hue.className = 'hue text'
  const luminosity = document.createElement('div')
  luminosity.className = 'luminosity text'
  document.body.append(hsl, hue, luminosity)

  // crosshair lines
  const svg = document.createElementNS(NS, 'svg')
  const axisX = document.createElementNS(NS, 'line')
  axisX.setAttribute('id', 'axisX')
  const axisY = document.createElementNS(NS, 'line')
  axisY.setAttribute('id', 'axisY')
  svg.append(axisX, axisY)
  document.body.append(svg)

  let current = ''

  document.addEventListener('mousemove', (e) => {
    const h = Math.round((e.clientX / window.innerWidth) * 360)
    const l = Math.round((e.clientY / window.innerHeight) * 100)
    current = `hsl(${h}, 50%, ${l}%)`

    document.body.style.background = current
    hsl.textContent = current
    hue.textContent = `Hue: ${h}`
    luminosity.textContent = `Luminosity: ${l}`

    // vertical line follows X
    axisX.setAttribute('x1', e.clientX)
    axisX.setAttribute('x2', e.clientX)
    axisX.setAttribute('y1', 0)
    axisX.setAttribute('y2', window.innerHeight)

    // horizontal line follows Y
    axisY.setAttribute('y1', e.clientY)
    axisY.setAttribute('y2', e.clientY)
    axisY.setAttribute('x1', 0)
    axisY.setAttribute('x2', window.innerWidth)
  })

  document.addEventListener('click', () => {
    if (current) navigator.clipboard.writeText(current)
  })
}