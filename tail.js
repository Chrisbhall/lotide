// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const head = require('./head');


const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};
module.exports = tail;
// TEST CODE

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
