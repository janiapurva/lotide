const assertEqual = require('./assertEqual');



function tail(array) {
  let final = [];
  for (let i = 1; i < array.length; i++) {
    final.push(array[i]);
  }
  return final;
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0], "Lighthouse"); "Lighthouse";
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);