const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};
const eqArrays = function(array1, array2) {
  let count = 0;
  if (array1.length > array2.length || array2.length > array1.length) {
    return false;
  }
  for (let i = 0; i < array2.length; i++) {
    if (assertEqual(array1[i], array2[i])) {
      count++;
    }
  }
  if (count === array2.length) {
    return true;
  } else {
    return false;
  }
};
const eqObjects = function(object1, object2) {
  const listOfKeys1 = Object.keys(object1);
  const listOfKeys2 = Object.keys(object2);
  let count = 0;

  if (listOfKeys1.length !== listOfKeys2.length) {
    return false;
  }
  for (const key of listOfKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && eqArrays(object1[key], object2[key])) {
      count++;
    } else if (assertEqual(object1[key], object2[key])) {
      count++;
    }
  }
  if (count === listOfKeys1.length){
    return true;
  }
return false;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual, expected)) {
    return console.log("✅ Assertion Passed: " + JSON.stringify(actual) + " ===  " + JSON.stringify(expected));
  }
    return console.log("🛑 Assertion Failed: " + JSON.stringify(actual) + " !== " + JSON.stringify(expected));
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd2, dc);