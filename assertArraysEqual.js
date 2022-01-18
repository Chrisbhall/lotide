const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)){
    console.log("The arrays are equivalent");
  } else {
    console.log("The arrays are not equivalent");
  }
}

module.exports = assertArraysEqual;