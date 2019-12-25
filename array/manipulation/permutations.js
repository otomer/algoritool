const swap = (alphabets, index1, index2) => {
  var temp = alphabets[index1];
  alphabets[index1] = alphabets[index2];
  alphabets[index2] = temp;
  return alphabets;
};

module.exports = {
  permutations: (alphabets, startIndex, endIndex) => {
    let arr = [];
    if (startIndex === endIndex) {
      return alphabets.join("");
    } else {
      var i;
      for (i = startIndex; i <= endIndex; i++) {
        swap(alphabets, startIndex, i);
        arr = arr.concat(permutations(alphabets, startIndex + 1, endIndex));
        swap(alphabets, i, startIndex); // backtrack
      }
    }
    return arr;
  }
};
