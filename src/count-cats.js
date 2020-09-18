module.exports = function countCats(catsImFindYou) {
  let count = 0;
  catsImFindYou.forEach(i => i.map(item => item === "^^" ? count += 1 : 0))
  return count
};
