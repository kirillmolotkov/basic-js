const { NotImplementedError } = require("../extensions/index.js");

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
function getCommonCharacterCount(string_1, string_2) {
  const array_1 = string_1.split("");
  const array_2 = string_2.split("");
  let result = 0;
  for (let i = 0; i < array_1.length; i++) {
    for (let j = 0; j < array_2.length; j++) {
      if (array_1[i] === array_2[j]) {
        array_2.splice(j, 1);
        array_1.splice(i, 1);

        i = 0;
        j = 0;
        result++;
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
