const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const string = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = String(options.additionSeparator || '|');
  let addition = String(options.addition),
    res = '';

  addition = addition === 'undefined' ? '' : addition;

  for (let index = 0; index < repeatTimes; index++) {
    res += string;

    for (let j = 0; j < additionRepeatTimes; j++) {

      res += addition;

      if (j !== additionRepeatTimes - 1) {
        res += additionSeparator;
      }
    }

    if (index !== repeatTimes - 1) {
      res += separator;
    }
  }

  return res;
}

module.exports = {
  repeater
};
