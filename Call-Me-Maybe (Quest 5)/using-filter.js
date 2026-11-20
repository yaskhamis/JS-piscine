// 1. Short state names (less than 7 characters)
const filterShortStateName = (arr) => arr.filter((str) => str.length < 7)

// 2. Starts with a vowel (case-insensitive)
const filterStartVowel = (arr) => arr.filter((str) => /^[aeiou]/i.test(str))

// 3. At least 5 vowels
const filter5Vowels = (arr) =>
  arr.filter((str) => (str.match(/[aeiou]/gi) || []).length >= 5)

// 4. Exactly one distinct vowel
const filter1DistinctVowel = (arr) =>
  arr.filter((str) => {
    const vowels = str.toLowerCase().match(/[aeiou]/g) || []
    return new Set(vowels).size === 1
  })

// 5. Multi filter
const multiFilter = (arr) =>
  arr.filter(
    (obj) =>
      obj.capital.length >= 8 &&
      !/^[aeiou]/i.test(obj.name) &&
      /[aeiou]/i.test(obj.tag) &&
      obj.region !== 'South'
  )