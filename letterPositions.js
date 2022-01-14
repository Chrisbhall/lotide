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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("The arrays are equivalent");
  } else {
    console.log("The arrays are not equivalent");
  }
};


const letterPositions = function(sentence) {
  const results = {};
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence.charAt(i)]) {
      results[sentence.charAt(i)] = [i];
    } else {
      results[sentence.charAt(i)].push(i);
    }
  }
  return results;
};
console.log(letterPositions("Hello World"));