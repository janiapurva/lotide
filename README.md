# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @janiapurva/lotide`

**Require it:**

`const _ = require('@janiapurva/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual (array)`: Takes array and both length then comapre if they have same element. 
* `assertEqual(actual,expected)`: Takes two parameters and compare it both same or not.
* `assertObjectEqual(object1, object2)`: Takes two object as a parameter and compare it with both have same element,
* `countLetters(string)`: Take one parameter as as string and return howmany times letter is in the string.
*`countonly(array,item to count)`: Takes two parameter, on is array with element andsecond parameter is object to count if itme exit it return total incremnt with an object.
* `eqArrays(array)`: Takes one parameter as array and check length and each element is it's same or not.
* `eqObject(object1,object2)`: Takes two parameter as and object and check if both contain same element.
* `findKey(object,callback)`: Takes two parameter one object and callfunction, result return by callback function will be value and it find key matching and return key.
* `findKeyByValue`(list,value): Takes two parameter and is list of object and second is value and returns key which is match with value paramter.
* `head(array)`: Take one parameter as array and return first element of array;
* `letterPositions(string)`: Take one parameter and return object with which letter is located at which position;
* `map(array,callback)`: Take two parameter and first list of number and react with each element and return new array.
* `middle(array)`: Takes and array and return middle element of array.
* `tail(array)`: Takes on parameter and return all accept first element.
* `takeUntil(array,callback)`: Takes two parameter one array and second is callback. return new array with all element untill the result of callback function.
* `without(array,itemRemove)`: Takes two parameter one is array and second is list of item to be removed and return new array.

