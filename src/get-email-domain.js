const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = [];

  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] !== "@") {
      result.unshift(email[i]);
    } else {
      break;
    }
  }
  return result.join("");
}

module.exports = {
  getEmailDomain,
};
