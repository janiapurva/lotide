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











const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];

    }

    
  }
  // logic to update results here
  return results;
};
console.log(letterPositions("lighhouse in the house"));