const assertEqual = require('../eqArrays');
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),[1,2,3] )
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),[3,2,1])