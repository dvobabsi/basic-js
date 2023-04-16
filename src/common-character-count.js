const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let arr1 = s1.split("");
  let arr2 = s2.split("");

  for (let i = 0; i < arr1.length; i++) {
    const charIndex = arr2.indexOf(arr1[i]);
    if (charIndex !== -1) {
      result++;
      arr2.splice(charIndex, 1);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
