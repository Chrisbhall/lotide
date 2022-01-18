/*const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!*/


const assert = require('chai').assert;
const tail   = require('../tail');
const assertEqual = require('../assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns :Labs for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(assertEqual(tail(words, "Labs")));
  });
});