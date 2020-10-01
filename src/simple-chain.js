const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: "",
  numberValue: 0,
  arr: [],
  getLength() {
    return this.numberValue;
  },
  addLink(link = " ") {
    this.numberValue++;
    this.value += `( ${link} )~~`;
    this.arr.push(`( ${link} )~~`);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    this.value = this.arr.join("");
    return this;
  },
  removeLink(position) {
    position -= 1;
    if (position > this.numberValue || position <= 0) {
      this.arr = [];
      this.value = "";
      throw new Error();
    }
    this.arr = this.arr.filter((item, index) => index !== position);
    this.value = this.arr.join("");
    return this;
  },
  finishChain() {
    let temp = this.arr.join("").slice(0, -2);
    this.value = "";
    this.arr = [];
    return temp;
  },
};

module.exports = chainMaker;
