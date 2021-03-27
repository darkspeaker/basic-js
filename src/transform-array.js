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
    if(item === doubleNext){
      if(res[res.length - 1] === item && res[index+1]!=undefined){
        return res.splice(index, 1,res[index+1]) 
      }else{
         return res.splice(index, 1)
      }
    }
    else if(item === doublePrev){
      if(res[0] === item){
        return res.splice([index], 1) 
      }
      else{
        return res[index] = res[index - 1]
      }
    }
    else if(item === discordNext){
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
    }
    else if(item === discordPrev){
      if(res[0] === item || res[res.length - 1] === item){
        return res.splice([index], 1) 
      }
      return res.splice([index - 1], 2)
    }
    else{
      return item
    }
})
return res
}