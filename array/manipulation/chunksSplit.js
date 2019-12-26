function chunksSplit(arr, chunkSize) {
  const arrLength = arr.length;
  const tempArray = [];

  for (let index = 0; index < arrLength; index += chunkSize) {
    chunk = arr.slice(index, index + chunkSize);
    tempArray.push(chunk);
  }

  return tempArray;
}

module.exports = {
  chunksSplit
};
