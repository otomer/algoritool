function sequence(len, from = 0) {
  return Array.from({ length: len }, (value, key) => key + from);
}

module.exports = {
  sequence
};
