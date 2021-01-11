const assertEqual = require("../assertEqual");
const middle = require("../middle")
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require('./eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),[1,2,3] )
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),[3,2,1])

middle(assertEqual([1,2,3]))
