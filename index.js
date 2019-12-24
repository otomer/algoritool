const cloneArray = arr => [].concat(arr);

const createSequence = (len, from = 0) =>
  Array.from({ length: len }, (value, key) => key + from);

const chunkArray = (arr, chunkSize) => {
  var index = 0;
  var arrayLength = arr.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    chunk = arr.slice(index, index + chunkSize);
    tempArray.push(chunk);
  }

  return tempArray;
};

const sortByAttribute = (arr, attr, asc = true) =>
  arr.sort((a, b) => (a[attr] > b[attr] ? (asc ? -1 : 1) : asc ? 1 : -1));

module.exports = {
  cloneArray,
  createSequence,
  chunkArray,
  sortByAttribute
};
