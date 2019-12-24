const { toObject } = require("./array/conversion/toObject");
const { empty } = require("./array/manipulation/empty");
const { removeDuplicates } = require("./array/manipulation/removeDuplicates");
const { clone } = require("./array/manipulation/clone");
const { byAttribute } = require("./array/sorting/byAttribute");
const { repeat } = require("./string/manipulation/repeat");
const { sequence } = require("./array/creation/sequence");
const { chunksSplit } = require("./array/manipulation/chunksSplit");

module.exports = {
  ArrayCreation: {
    sequence
  },
  ArrayConversion: {
    toObject
  },
  ArrayManipulation: {
    empty,
    removeDuplicates,
    clone,
    chunksSplit
  },
  ArraySorting: {
    byAttribute
  },
  StringManipulation: {
    repeat
  }
};
