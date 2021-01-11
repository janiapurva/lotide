const assertEqual = function(actual,expected) {
  console.log("actual" , actual , "expected" , expected);
  if (actual === expected) {
    console.log(`Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed  ${actual} !== ${expected}`);
  }
   
};



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
      //item will be loopthrough and and check if key=vslue exit it will add 1 or if not then it will set new one.
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    
  
  }
  return results;

};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);