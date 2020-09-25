const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 
  if(typeof(date) === "undefined"){
    return 'Unable to determine the time of year!'
  }
  else if(typeof(date) !== "object") throw new Error() 
  else if(isNaN(date.valueOf()) && date instanceof Date) throw new Error()
  else if(date instanceof Date){
    const numberMonth = date.getMonth()
    if(numberMonth === 11 || numberMonth === 0 || numberMonth === 1 ){
      return "winter"
    }
    else if(numberMonth === 2 || numberMonth ===3 || numberMonth === 4 ){
      return "spring"
    }
    else if(numberMonth === 5 || numberMonth === 6 || numberMonth === 7 ){
      return "summer"
    }
    else{
      return "fall"
    }
  }
  
};
