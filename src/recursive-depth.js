const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr){
    let maxdepth = 0; 
    if (Array.isArray(arr)){
      for(let key in arr){
        let itemArr = this.calculateDepth(arr[key]); 
        if (itemArr > maxdepth) 
          maxdepth = itemArr; 
      }
      return maxdepth + 1; 
    } 
  };
};