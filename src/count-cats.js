module.exports = function countCats(catsImFindYou) {
  let count = 0;
  catsImFindYou.forEach(i => catsImFindYou.length > 1 ? i.map(item => item === "^^" ? count += 1 : 0) : i === "^^" ? count += 1 : 0)
  return count
};
