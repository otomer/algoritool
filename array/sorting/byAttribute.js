function byAttribute(arr, attr, asc = true) {
  return arr.sort((a, b) =>
    a[attr] > b[attr] ? (asc ? -1 : 1) : asc ? 1 : -1
  );
}

module.exports = {
  byAttribute
};
