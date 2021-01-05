const assertArraysEqual = function(actual,expected) {
  if(actual.length !== expected.length){
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`Assertion failed  ${actual} !== ${expected}`);
    }
  }
  console.log(`Assertion passed : ${actual} === ${expected}`);
};
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]) )
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) 