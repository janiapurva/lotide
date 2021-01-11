// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callabck) {
  const results = [];
  for (let item of array) {
    results.push(callabck(item));
     
  }
  return results;
  
};

// const result1 = map(words,word => word [0]);
// console.log(result1);


// const assertArraysEqual = function(actual,expected) {
//   if (actual.length !== expected.length) {
//     return false;
//   }
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       console.log(`Assertion failed  ${actual} !== ${expected}`);
//     }
//   }
//   console.log(`Assertion passed : ${actual} === ${expected}`);
// };


// const eqArrays = function(actual,expected) {
//   if (actual.length !== expected.length) {
//     return false;
//   }
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return false;
      
//     }
//   }
//   return true;
// };

// const input = [1,2,3,4,5];
// const output = map(input, a => a * 2);
// console.log(eqArrays(output,[2,4,6,8,10]));
// console.log(eqArrays(output,[2,4,8,8,10]));
// console.log(eqArrays(output,[2,3,8,8,10]));