const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual,expected) {
  let result = eqArrays(actual,expected);
  if (result === true) {
    console.log(`🟢 🟢 🟢 Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion failed  ${actual} !== ${expected}`);
    
  }
   
};


module.exports = assertArraysEqual;