const assertEqual = require('./assertEqual');



function tail(array) {
  let final = [];
  for (let i = 1; i < array.length; i++) {
    final.push(array[i]);
  }
  return final;
}

module.exports = tail