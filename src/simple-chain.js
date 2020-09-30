const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: "",
  numberValue: 0,
  id: 1,
  arr: [],
  objVal: {},
  getLength(){
      return this.numberValue
  },
  addLink(link = " ") {
      // this.value = ""
      // if(typeof a !== "number"){
      //     throw new Error()
      // }
      this.numberValue++
      this.value += `(${link})~~`;
      this.arr.push(`(${link})~~`)
      // this.objVal[`${this.id}`] = [...this.arr];
      
      
      // this.value = this.value.split('+')[0];
      return this;
  },
  removeLink(position) {
      position -=  1
      if(typeof position !== "number"){
          throw new Error()
      }
      // this.value = this.value.replace(/[()]/g, "").split('').slice(position).map(i => "(" + i + ")").join("")
      // this.value = this.arr.slice(0, position).join("")
      // console.log(this.arr.slice(position))
      this.value = this.arr.filter(item => item !== position).join("")
      return this
  },
  reverseChain(){
      // this.value = this.value.split().reverse().join("")
      this.value = [...this.arr.reverse()].join("")
      return this
  },
  finishChain() {
      // console.log(typeof this.value)
      return this.arr.join("").slice(0, -2)   
  }
};

module.exports = chainMaker;
