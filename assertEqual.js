
const assertEqual = function(actual,expected) {
  //console.log("actual" , actual , "expected" , expected);
  if (actual === expected) {
    console.log(`🟢 🟢 🟢 Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion failed  ${actual} !== ${expected}`);
  }
   
};


module.exports = assertEqual;
