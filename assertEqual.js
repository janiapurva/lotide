// const assertEqual = function(actual, expected) {
//   console.assert(actual === expected, 'Assertion Passed:', [actual] === [expected])
//   console.assert(actual !== expected, 'Asssertiona Failed:', [actual] !== [expected])

// };


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const assertEqual = function(actual,expected) {
  console.log("actual" , actual , "expected" , expected);
  if (actual === expected) {
    console.log(`Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed  ${actual} !== ${expected}`);
  }
   
};
assertEqual("Lighthouse Labs", "Bootcamp");
