

const tail = function(array) {
  let final = [];
  for (let i = 1; i < array.length; i++) {
    final.push(array[i]);
  }
  return final;
};

module.exports = tail;