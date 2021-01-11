const assertArraysEqual = function(actual,expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`Assertion failed  ${actual} !== ${expected}`);
    }
  }
  console.log(`Assertion passed : ${actual} === ${expected}`);
};


const eqArrays = function(actual,expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
      
    }
  }
  return true;
};

const without = function(source,itemRemove) {
  let diffrence = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemRemove[i]) {
      diffrence.push(source[i]);

    }
  
  }
  return diffrence;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);