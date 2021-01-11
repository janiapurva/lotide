
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
  
  return element;
  }
  


module.exports = middle;