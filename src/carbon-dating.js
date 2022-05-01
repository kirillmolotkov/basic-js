const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'){
    return false;
}
  let numberSampleActivity = Number(sampleActivity);
  const K = Math.log(2) / HALF_LIFE_PERIOD;
  let result;
  if(typeof numberSampleActivity === 'number'){
    result = Math.ceil(Math.log(MODERN_ACTIVITY/numberSampleActivity)/K);
  }else if(typeof numberSampleActivity === 'NaN'){
      return NaN;
  }
  if(result > 0 && result < Infinity){
      return result;
  }else if(result === Infinity){
      return false;
  }
  return false;
}

module.exports = {
  dateSample
};
