const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns =  Math.pow(2, diskNumber) - 1
  const seconds = Math.floor(turns * 3600 / turnsSpeed)
  const obj = {}
  obj.turns = turns
  obj.seconds = seconds
  return obj
};
