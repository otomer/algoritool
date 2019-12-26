const swap = (arr, index1, index2) => {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};

// Time Complexity: O (n*n!)
function permute(arr, startIndex, endIndex) {
  let arr = [];
  if (startIndex === endIndex) {
    return arr.join("");
  } else {
    var i;
    for (i = startIndex; i <= endIndex; i++) {
      swap(arr, startIndex, i);
      arr = arr.concat(permute(arr, startIndex + 1, endIndex));
      swap(arr, i, startIndex); // backtrack
    }
  }
  return arr;
}

function permutations(arr) {
  return permute(arr, 0, arr.length - 1);
}

module.exports = {
  permutations
};
