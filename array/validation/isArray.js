function isArray(value) {
  return (
    (typeof Array.isArray === "function" && Array.isArray(value)) || // ECMAScript 5 feature
    Object.prototype.toString.call(value) === "[object Array]" ||
    value.constructor.name === "Array" ||
    value instanceof Array
  );
}

module.exports = {
  isArray
};
