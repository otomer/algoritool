module.exports = {
  chunksSplit: (arr, chunkSize) => {
    var index = 0;
    var arrayLength = arr.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunkSize) {
      chunk = arr.slice(index, index + chunkSize);
      tempArray.push(chunk);
    }

    return tempArray;
  }
};
