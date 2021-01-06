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

// if array lenght is one or  two  return empty array
// if length is odd return middle element
// if  length is  even return two elenment in array


  const middle = function (array){
  let element = [];
  if(array.length === 1 || array.length === 2){
    return [];
  } else if(array.length % 2 === 1) {
      element.push(Math.floor(array.length/2))
  } else {
      element.push(array.length/2);
      element.push((array.length/2) + 1)
  }


  /*
  for (let i = 0; i < array.length; i++) {
    if(array.length % === 0) {

    }
  if(array[i]!==array[0] && array[i]!== array[array.length-1]){
    element.push(array[i]);
  
  
  }*/

  
  return element;
  }
  console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))


