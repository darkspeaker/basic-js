const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error() 
  }
  let res = [...arr]
  let doubleNext = "--double-next";
  let doublePrev = "--double-prev";
  let discordNext = "--discard-next";
  let discordPrev = "--discard-prev";
  res.map((item, index) =>{
    switch(item){
      case doubleNext:
        if(res[res.length - 1] === item && res[0] === item){
          res[index] = res[index + 1]
          if(res[res.length - 1]){
            res.splice([index], 1)
          }
          return res
        }
        if(res[res.length - 1] === item){
          return res.splice([index], 1) 
        }
        else{
          return res[index] = res[index + 1]
        }
      case doublePrev:
        if(res[res.length - 1] === item && res[0] === item){
          if(res[0] === item){
            res.splice([index], 1) 
          }
          return res
        }
        if(res[0] === item){
          return res.splice([index], 1) 
        }
        else{
          return res[index] = res[index - 1]
        }
      case discordNext:
        if(res[0] === item  || res[res.length - 1] === item){
          return res.splice([index], 1) 
        }
        else{
          res.splice([index], 2)
          if(res[index] === discordPrev){
            res = res.filter(item => item !== discordPrev)
            return res
          }
          else if(res[index] === doublePrev){
            res = res.filter(item => item !== doublePrev)
            return res
          }
        }
      case discordPrev:
        if(res[0] === item || res[res.length - 1] === item){
          return res.splice([index], 1) 
        }
        return res.splice([index - 1], 2)
      default:
        return res
    }
  })
  return res
}