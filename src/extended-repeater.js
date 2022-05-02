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
 const DEFAULT_VALUE_OPTIONS = {
  'repeatTimes': 1,
  'separator': '+',
  'addition': '',
  'additionRepeatTimes': 1,
  'additionSeparator': '|',
}
function repeater(str, options = DEFAULT_VALUE_OPTIONS) {
  let result = '';
  let additionPhrase= '';
  let phrase = str + '';
  let repeatTimes = options['repeatTimes'] || DEFAULT_VALUE_OPTIONS['repeatTimes'];
  let separator = options['separator'] || DEFAULT_VALUE_OPTIONS['separator'];
  let addition = String(options['addition']) || DEFAULT_VALUE_OPTIONS['addition'];
  let additionRepeatTimes = options['additionRepeatTimes'] || DEFAULT_VALUE_OPTIONS['additionRepeatTimes'];
  let additionSeparator = options['additionSeparator'] || DEFAULT_VALUE_OPTIONS['additionSeparator'];
  if(options['addition'] === undefined){
    addition = '';
  }
  for(let i = 0; i < additionRepeatTimes; i++){
          additionPhrase += `${addition}`;
      if(i < additionRepeatTimes - 1){
          additionPhrase += `${additionSeparator}`
      }
  }
  for(let i = 0; i < repeatTimes; i++){
      result += `${phrase}${additionPhrase}`
      if(i < repeatTimes - 1){
          result += `${separator}`;
      }
  }
  
  return result
}

module.exports = {
  repeater
};
