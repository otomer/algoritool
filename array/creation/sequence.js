module.exports = {
  sequence: (len, from = 0) =>
    Array.from({ length: len }, (value, key) => key + from)
};
