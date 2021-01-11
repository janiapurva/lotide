const assertEqual = function(actual,expected) {
  console.log("actual" , actual , "expected" , expected);
  if (actual === expected) {
    console.log(`Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed  ${actual} !== ${expected}`);
  }
   
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

const eqObjects = function(object1, object2) {
  
  //string value of Object keys
  let objectsKeysArray = Object.keys(object1).sort();
  let objectsKeysArray2 = Object.keys(object2).sort();
  if (objectsKeysArray.length !== objectsKeysArray2.length) {

    return false;
  }
  for (const key of objectsKeysArray) {

    if (!objectsKeysArray2.includes(key)) {
      return false;
    }
    let value1 = object1[key];
    let value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1,value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  
  }
  return true;

};



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

