const { NotImplementedError } = require("../extensions/index.js");

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
  let result = "";
  let numberSymbol = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      numberSymbol++;
    } else if (str[i] !== str[i + 1]) {
      if (numberSymbol === 1) {
        result += `${str[i]}`;
      } else {
        result += `${numberSymbol}${str[i]}`;
      }
      numberSymbol = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
