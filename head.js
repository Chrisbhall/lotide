// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array) {
    return array[0];
  } else {
    return undefined;
  }
}
module.exports = head;
// TEST CODE

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
