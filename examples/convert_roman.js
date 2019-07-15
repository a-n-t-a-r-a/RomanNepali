'use strict';

const RomaNepali = require('../lib/romaNepali.js');

const romanText = "ma";
const convertedText = RomaNepali.convert(romanText);


console.log("Input: " + romanText);
console.log("Output: " + convertedText);
