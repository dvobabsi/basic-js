const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currentLetter = '';
  let arr = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== currentLetter) {
      currentLetter = str[i];
      arr.push(currentLetter);
      count = 1;
    } else {
      count++;
      if (count > 1) {
        arr[arr.length - 1] = count + currentLetter;
      } else {
        arr[arr.length - 1] = currentLetter;
      }
    }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
