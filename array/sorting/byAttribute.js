module.exports = {
  byAttribute: (arr, attr, asc = true) =>
    arr.sort((a, b) => (a[attr] > b[attr] ? (asc ? -1 : 1) : asc ? 1 : -1))
};