'use strict';

const RomanNepali = require('../lib/romanNepali.js');

const romanText = "maa";
const convertedText = RomanNepali.convert(romanText);


console.log("Input: " + romanText);
console.log("Output: " + convertedText);
