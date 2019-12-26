const swap = (arr, index1, index2) => {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};

// Time Complexity: O (n*n!)
function permute(arr, startIndex, endIndex) {
  let permutedArray = [];
  if (startIndex === endIndex) {
    return arr.join("");
  } else {
    for (let i = startIndex; i <= endIndex; i++) {
      swap(arr, startIndex, i);
      permutedArray = permutedArray.concat(
        permute(arr, startIndex + 1, endIndex)
      );
      swap(arr, i, startIndex); // backtrack
    }
  }
  return permutedArray;
}

function permutations(arr) {
  return permute(arr, 0, arr.length - 1);
}

module.exports = {
  permutations
};
