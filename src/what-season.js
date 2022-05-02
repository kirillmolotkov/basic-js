const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }else if(Date.prototype.toString !== date.toString) {
      throw new Error('Invalid date!');
  }else if(date.toDateString().slice(4,7) === 'Dec' || date.toDateString().slice(4,7) === 'Jan' || date.toDateString().slice(4,7) === 'Feb'){
    return 'winter';
  }else if(date.toDateString().slice(4,7) === 'Mar' || date.toDateString().slice(4,7) === 'Apr' || date.toDateString().slice(4,7) === 'May'){
    return 'spring';
  }else if(date.toDateString().slice(4,7) === 'Jun' || date.toDateString().slice(4,7) === 'Jul' || date.toDateString().slice(4,7) === 'Aug'){
    return 'summer';
  }else if(date.toDateString().slice(4,7) === 'Sep' || date.toDateString().slice(4,7) === 'Oct' || date.toDateString().slice(4,7) === 'Nov'){
    return 'autumn';
  }
}
module.exports = {
  getSeason
};
