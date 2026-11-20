// 1. Cities Only
const citiesOnly = (arr) => arr.map((obj) => obj.city)

// 2. Upper Casing States
const upperCasingStates = (arr) =>
  arr.map((state) =>
    state
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )

// 3. Fahrenheit to Celsius
const fahrenheitToCelsius = (arr) =>
  arr.map((temp) => {
    const f = parseInt(temp)
    return Math.floor(((f - 32) * 5) / 9) + '°C'
  })

// 4. Trim Temp
const trimTemp = (arr) =>
  arr.map((obj) => ({
    ...obj,
    temperature: obj.temperature.replaceAll(' ', ''),
  }))

// 5. Temp Forecasts
const tempForecasts = (arr) =>
  arr.map((obj) => {
    const celsius = fahrenheitToCelsius([obj.temperature])[0].replace('°C', '')
    const state = upperCasingStates([obj.state])[0]
    return `${celsius}°Celsius in ${obj.city}, ${state}`
  })