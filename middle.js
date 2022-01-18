const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array){
  result =[];
  if (array.length <= 2) {
    return result;
  }else if (array.length % 2 === 0){
    result[0] = array.length / 2;
    result[1] = array.length / 2 + 1;
    return result;
  } else {
    result[0] = Math.ceil(array.length / 2); 
  }
  return result;
};
module.exports = middle;