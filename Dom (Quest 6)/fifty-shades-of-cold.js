import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
  const style = document.createElement('style')
  style.textContent = colors
    .map((color) => `.${color} {\n  background: ${color};\n}`)
    .join('\n')
  document.head.append(style)
}

export const generateColdShades = () => {
  const cold = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']

  colors
    .filter((color) => cold.some((name) => color.includes(name)))
    .forEach((color) => {
      const div = document.createElement('div')
      div.className = color
      div.textContent = color
      div.addEventListener('click', () => choseShade(color))
      document.body.append(div)
    })
}

export const choseShade = (shade) => {
  document.querySelectorAll('div').forEach((div) => {
    if (div.className !== shade) {
      div.className = shade
    }
  })
}