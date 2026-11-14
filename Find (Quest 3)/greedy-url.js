const getURL = (dataSet) => dataSet.match(/https?:\/\/[^\s]+/g) || []

const greedyQuery = (dataSet) =>
  dataSet.match(/https?:\/\/[^\s?]+\?[^\s&]+(?:&[^\s&]+){2,}/g) || []

const notSoGreedy = (dataSet) =>
  dataSet.match(/https?:\/\/[^\s?]+\?[^\s&]+(?:&[^\s&]+){1,2}(?=\s|$)/g) || []