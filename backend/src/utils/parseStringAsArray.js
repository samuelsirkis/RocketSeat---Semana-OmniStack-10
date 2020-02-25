module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(techs => techs.trim())
}

// module.exports = arrayAsString =>
//   arrayAsString.split(',').map(item => item.trim());
