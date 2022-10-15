const { NotImplementedError } = require("../extensions/index.js");

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
  const arrayStringNumber = String(n).split("");
  let copyArrayStringNumber = arrayStringNumber.slice();
  const arrayResultValue = [];

  for (let i = 0; i < arrayStringNumber.length; i++) {
    copyArrayStringNumber = arrayStringNumber.slice();
    copyArrayStringNumber.splice(i, 1);
    arrayResultValue.push(Number(copyArrayStringNumber.join("")));
  }
  return Math.max(...arrayResultValue);
}

module.exports = {
  deleteDigit,
};
