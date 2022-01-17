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

/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false*/
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

