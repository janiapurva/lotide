const assertEqual = function(actual,expected) {
  console.log("actual" , actual , "expected" , expected);
  if (actual === expected) {
    console.log(`Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed  ${actual} !== ${expected}`);
  }
   
};


function countLetters (string) {
  let final = {};
  for (const letter of string) {
    if(letter === " "){
      continue;
    }
    if(final[letter]) {
      final[letter] += 1;
    }else  {
      final[letter] = 1;
    }
    
  }
  return final;
}

console.log(countLetters("lighthouse in the house"))