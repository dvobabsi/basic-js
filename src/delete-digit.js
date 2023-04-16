const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let stringN = n.toString();
  let max = +stringN.replace(stringN[0], '');

  for (let i = 0; i < n.toString().length; i++) {

    let checking = +stringN.replace(stringN[i], '');
    max = Math.max(max, checking);
  };

  return max;
}

module.exports = {
  deleteDigit
};
