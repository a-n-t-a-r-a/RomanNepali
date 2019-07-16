'use strict';

const independentVowels = {
  a:    "\u0905", // "अ"
  aa:   "\u0906", // "आ"
  i:    "\u0907", // "इ"
  ii:   "\u0908", // "ई"
  u:    "\u0909", // "उ"
  uu:   "\u090A", // "ऊ"
  e:    "\u090F", // "ए"
  ai:   "\u090E", // "ऐ"
  o:    "\u0913", // "ओ"
  au:   "\u0914", // "औ"
  am:   "\u0973", // "अं"
  rri:  "\u090B", // "ऋ"
  rree: "\u0960"  // "ॠ"
}

const signs = {
  om:   "\u0950", // "ॐ"
  ".":  "\u0964", // "।"
  A:    "\u0902", // "ं"
  AA:   "\u0901"  // "ँ"
}

const digits =  {
  "0": "\u0966",  // "०"
  "1": "\u0967",  // "१"
  "2": "\u0968",  // "२"
  "3": "\u0969",  // "३"
  "4": "\u096A",  // "४"
  "5": "\u096B",  // "५"
  "6": "\u096C",  // "६"
  "7": "\u096D",  // "७"
  "8": "\u096E",  // "८"
  "9": "\u096F"   // "९"
}

const consonants = {
  ka:   "\u0915",   // "क"
  kha:  "\u0916",   // "ख"
  ga:   "\u0917",   // "ग"
  gha:  "\u0918",   // "घ"
  nga:  "\u0919",   // "ङ"
  cha:  "\u091A",   // "च"
  chha: "\u091B",   // "छ"
  ja:   "\u091C",   // "ज"
  jha:  "\u091D",   // "झ"
  yna:  "\u091E",   // "ञ"
  Ta:   "\u091F",   // "ट"
  Tha:  "\u0920",   // "ठ"
  Da:   "\u0921",   // "ड"
  Dha:  "\u0922",   // "ढ"
  Na:   "\u0923",   // "ण"
  ta:   "\u0924",   // "त"
  tha:  "\u0925",   // "थ"
  da:   "\u0926",   // "द"
  dha:  "\u0927",   // "ध"
  na:   "\u0928",   // "न"
  pa:   "\u092A",   // "प"
  pha:  "\u092B",   // "फ"
  ba:   "\u092C",   // "ब"
  bha:  "\u092D",   // "भ"
  ma:   "\u092E",   // "म"
  ya:   "\u092F",   // "य"
  ra:   "\u0930",   // "र"
  la:   "\u0932",   // "ल"
  wa:   "\u0935",   // "व"
  sha:  "\u0936",   // "श"
  Sha:  "\u0937",   // "ष"
  sa:   "\u0938",   // "स"
  ha:   "\u0939",   // "ह"
  ksha: "\u0935",   // "क्ष"
  tra:  "त्र",        // combination of ज	\u091C, ्	\u094D and ञ \u091E
  gyna: "ज्ञ"         // combination of ज	\u091C, ्	\u094D and ञ \u091E
}
}

const dependentVowelSigns = {
  aa: "\u093E", // "ा"
  i:  "\u093F", // "ि"
  ii: "\u0940", // "ी"
  ee: "\u0940", // "ी"
  u:  "\u0941", // "ु"
  oo: "\u0942", // "ू"
  e:  "\u0947", // "े"
  ai: "\u0948", // "ै"
  o:  "\u094B", // "ो"
  au: "\u094C", // "ौ"
  A:  "\u0902", // "ं"
  aA: "\u0902", // "ं"
  AA: "\u0901", // "ँ"
}


const getCodes = function() {
  // Merge all the objects to get unicode block
  let unicodes = [];

  Object.assign(unicodes, independentVowels);
  Object.assign(unicodes, signs);
  Object.assign(unicodes, digits);
  Object.assign(unicodes, consonants);

  return unicodes;
}

const RomaNepali = {
  unicodes: getCodes(),
  convert(text) {
    //convert the roman english text to unicode in recursive
    // @params text: string
    // @output unicode: string

    if (text == "") return "";

    // text conversion starts from each character string
    for (let len = text.length; len > 0; len--) {
      let selectString = text.substring(0, len);
      let remainString = (len == text.length) ? "" : text.substring(len);

      if (selectString in this.unicodes) {
        return this.unicodes[selectString] + this.convert(remainString);
      }

      if (selectString.length == 1) {
        return selectString + this.convert(remainString);
      }
    }

    // if not matched return input
    return text;
  }
}

module.exports = RomaNepali;
