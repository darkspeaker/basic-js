const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = ''
  let helpRes = ''
  if(options.repeatTimes === undefined && options.additionRepeatTimes === undefined){
    res = str + options.addition
  }
  if(options.separator === undefined){
    options.separator = '+'
  }
  if(options.additionSeparator === undefined){
    options.additionSeparator = '|'
  }

  if(options.additionSeparator){
    for(let i = 0; i < options.additionRepeatTimes; i++){
      helpRes += options.addition + '' + options.additionSeparator
    }
    for(let i = 0; i < options.repeatTimes; i++){
      res += str + '' + options.separator
    }
  }
  else{
    for(let i = 0; i < options.repeatTimes; i++){
      if(options.addition){
        res += str + '' + options.addition + '' + options.separator
      }
      else{
        res += str + '' + options.separator
      }
    }  
  }

  res = res.split(`${options.separator}`).filter(i => i !== "").join(`${options.separator}`)

  helpRes = helpRes.split(`${options.additionSeparator}`).filter(i => i !== "").join(`${options.additionSeparator}`)
  
  res = res.split(`${options.separator}`).map(i => i + helpRes).join(`${options.separator}`)

  return res
}; 
