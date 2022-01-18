// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (assertEqual(array1[i], array2[i])) {
      count++;
    }
  }
  if (count === array1.length) {
    return true;
  } else {
    return false;
  }
};
module.exports = eqArrays;

