const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof(sampleActivity) === 'string'){
      if(+sampleActivity !== NaN){
        sampleActivity = parseInt(sampleActivity)
        if(sampleActivity > 1 && sampleActivity < 20){
          const k = 0.693 / HALF_LIFE_PERIOD
          const t = Math.round(Math.log(MODERN_ACTIVITY / sampleActivity) / k)
          return t
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }
    else{
        return false
    }
}
