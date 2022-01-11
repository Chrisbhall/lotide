// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    //console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

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
// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
