const assertEqual = require('./assertEqual');

const eqArrays = function(actual,expected) {
  if(actual.length !== expected.length){
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
      
    }
  }
   return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),[1,2,3] )
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),[3,2,1])

module.exports = eqArrays;