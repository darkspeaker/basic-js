const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   if(!Array.isArray(arr)){
//     throw new Error() 
//   }
//   // console.log(res)
//   let res = [...arr]
//   let doubleNext = "--double-next";
//   let doublePrev = "--double-prev";
//   let discordNext = "--discard-next";
//   let discordPrev = "--discard-prev";

//   res.map((item, index) =>{
//     if(item === doubleNext){
//       if(res[res.length - 1] === item && res[0] === item){
//         res[index] = res[index + 1]
//         console.log(res)
//         if(res[res.length - 1]){
//           res.splice([index], 1)
//         }
//         return res
//         // return res = res.filter(i => i !== 'undefined')
//       }
//       if(res[res.length - 1] === item){
//         return res.splice([index], 1) 
//       }
//       else{
//         return res[index] = res[index + 1]
//       }
//     }
//     else if(item === doublePrev){
//       if(res[res.length - 1] === item && res[0] === item){
//         if(res[0] === item){
//           res.splice([index], 1) 
//         }
//         return res
//       }
//       if(res[0] === item){
//         return res.splice([index], 1) 
//       }
//       else{
//         return res[index] = res[index - 1]
//       }
//     }
//     else if(item === discordNext){
//       if(res[0] === item  || res[res.length - 1] === item){
//         return res.splice([index], 1) 
//       }
//       else{
//         res.splice([index], 2)
//         if(res[index] === discordPrev){
//           res = res.filter(item => item !== discordPrev)
//           return res
//         }
//         else if(res[index] === doublePrev){
//           res = res.filter(item => item !== doublePrev)
//           return res
//         }
//       }
//     }
//     else if(item === discordPrev){
//       if(res[0] === item || res[res.length - 1] === item){
//         return res.splice([index], 1) 
//       }
//       return res.splice([index - 1], 2)
//     }
//     else{
//       return item
//     }
// })
// return res
// }
  
  function transform(arr) {
    if(!Array.isArray(arr)){
      throw new Error() 
    }
    // console.log(res)
    let res = [...arr]
    let doubleNext = "--double-next";
    let doublePrev = "--double-prev";
    let discordNext = "--discard-next";
    let discordPrev = "--discard-prev";

    res.map((item, index) =>{
      if(item === doubleNext){
        if(res[res.length - 1] === item && res[0] === item){
          res[index] = res[index + 1]
          console.log(res)
          if(res[res.length - 1]){
            res.splice([index], 1)
          }
          return res
          // return res = res.filter(i => i !== 'undefined')
        }
        if(res[res.length - 1] === item){
          return res.splice([index], 1) 
        }
        else{
          return res[index] = res[index + 1]
        }
      }
      else if(item === doublePrev){
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
};

// console.log(transform(['--discard-prev', 1, 2, 3]))
// console.log(transform(['--double-prev', 1, 2, 3]))
// console.log(transform([1, 2, 3, '--double-next']))
// console.log(transform([1, 2, 3, '--discard-next']))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))

// console.log(transform([1, 2, 3, '--double-prev', 1337, 4, 5]))


//1 good yet
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
//2
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
//3
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
//4
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))

// console.log(transform([333, "--discard-next", {null: "f"}, 333, 'DEF', 'DEF']))

// console.log(transform(['--double-next',NaN,'--double-prev']))

// console.log(transform(['--double-prev',"GHI", '--double-prev']))

// console.log(transform(['--discard-prev',false,'--double-next']))
console.log(transform(['--discard-prev',"somebody","told","me",'--discard-prev',0,'--discard-prev',"somebody","told","me",{3:3},{3:3},'--double-next']))