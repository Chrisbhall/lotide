const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const countLetters = function(sentence) {
  const letters = {};
    for (const letter of sentence){
      if (letter in letters){
        letters[letter] += 1;
      } else {
      letters[letter] = 1;
      }
    }
    return letters;
};

console.log(countLetters("hello"));