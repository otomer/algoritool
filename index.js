const { toObject } = require("./array/conversion/toObject");
const { sequence } = require("./array/creation/sequence");
const { empty } = require("./array/manipulation/empty");
const { removeDuplicates } = require("./array/manipulation/removeDuplicates");
const { clone } = require("./array/manipulation/clone");
const { repeat } = require("./string/manipulation/repeat");
const { chunksSplit } = require("./array/manipulation/chunksSplit");
const { permutations } = require("./array/manipulation/permutations");
const { shuffle } = require("./array/manipulation/shuffle");
const { byAttribute } = require("./array/sorting/byAttribute");
const { isArray } = require("./array/validation/isArray");

module.exports = {
  ArrayCreation: {
    sequence
  },
  ArrayConversion: {
    toObject
  },
  ArrayManipulation: {
    chunksSplit,
    clone,
    empty,
    permutations,
    removeDuplicates,
    shuffle
  },
  ArraySorting: {
    byAttribute
  },
  ArrayValidation: {
    isArray
  },
  StringManipulation: {
    repeat
  }
};
