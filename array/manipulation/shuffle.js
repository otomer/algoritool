const { clone } = require("./clone");

function shuffle(arr) {
  const arrLength = arr.length;
  const shuffled = clone(arr);

  for (let i = arrLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

module.exports = {
  shuffle
};
